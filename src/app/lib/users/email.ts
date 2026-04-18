import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KYE);
export async function sendVerificationEmail(email: string, token: string) {
  const base_url = process.env.NEXT_PUBLIC_APP_URL;
  if (!base_url) {
    throw new Error('Missing NEXT_PUBLIC_APP_URL');
  }
  const url = `${base_url}/api/auth/verify-email?token=${token}`;
  await resend.emails.send({
    from: 'Void Matrix Technology <no-reply@voidmatrixtech.com>',
    to: email,
    subject: 'Verify Your Email',
    html: `
            <div style='font-family:Arial;padding:20px'>
              <h2>Welcome to Void Matrix Technology</h2>
              <p>Please verify your email to activate your account.</p>  
              <a href="${url}" style="display:inline-block;padding:10px 16px;background:#3b82f6;color:white;text-decoration:none;border-radius:6px;">Verify Email</a>
              <p style="margin-top:20px;font-size:12px;color:gray;">
                This link expires in 1 hour.
              </p>
            </div>
            `,
  });
}
