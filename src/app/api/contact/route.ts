import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    if (formData.get('company')) {
      // console.log("honey Pot");
      return NextResponse.json({ ok: true });
    }
    //normalising data for blank inputs

    const payload = {
      name: formData.get('name')?.toString() || null,
      email: formData.get('email')?.toString() || null,
      phone: formData.get('phone')?.toString() || null,
      message: formData.get('message')?.toString() || null,

      projectType: formData.get('projectType')?.toString() || null,
      complexity: formData.get('complexity')?.toString() || null,
      scale: formData.get('scale')?.toString() || null,
      timeline: formData.get('timeline')?.toString() || null,
    };

    //validating important data is present

    if (!payload.name || !payload.email || !payload.phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    //building optional estimate section

    const hasEstimateContext =
      payload.projectType || payload.complexity || payload.scale || payload.timeline;

    const estimateSection = hasEstimateContext
      ? `
            <h3>Project Context</h3>
            <ul>
            ${payload.projectType ? `<li>Type:${payload.projectType}</li>` : ''}
            ${payload.complexity ? `<li>Complexity:${payload.complexity}</li>` : ''}
            ${payload.scale ? `<li>Scale:${payload.scale}</li>` : ''}
            ${payload.timeline ? `<li>Type:${payload.timeline}</li>` : ''}
            </ul>
        `
      : '';
    // send internal notification email
    await resend.emails.send({
      from: 'VoidMatrix Technology <no-reply@voidmatrixtech.com>',
      to: process.env.TO_EMAIL!,
      replyTo: payload.email,
      subject: 'New Project Enquiry',
      html: `
            <h2>New Contact Request</h2>
            <p><strong>Name:</strong>${payload.name}</p>
            <p><strong>Email:</strong>${payload.email}</p>
            <p><strong>Phone:</strong>${payload.phone}</p>

            ${estimateSection}
            
            <h3>Message</h3>
            <p>${payload.message || 'No message provided'}</p>
        `,
    });

    // redirect on success state

    return NextResponse.redirect(new URL('/contact/success', req.url), 303);
  } catch {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
