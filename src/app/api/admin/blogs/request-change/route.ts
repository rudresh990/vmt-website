import prisma from '../../../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function PATCH(req: Request) {
  try {
    const bdata = await req.json();
    const blogId = bdata.Id;
    const message = bdata.message.trim() == '' ? 'Changes requested by admin' : bdata.message;
    const change = await prisma.changeRequest.create({
      data: {
        blogId,
        adminId: 6,
        message,
        status: 'CHANGES_REQUESTED',
      },
    });

    await prisma.blog.update({
      where: { id: blogId },
      data: { status: 'CHANGES_REQUESTED' },
    });
    return NextResponse.json({ success: true, change });
  } catch (err) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
