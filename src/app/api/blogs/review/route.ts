import prisma from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
  const { blogId } = await req.json();
  const blog = await prisma.blog.update({
    where: { id: blogId },
    data: {
      status: 'REVIEW',
    },
  });
  return NextResponse.json(blog);
}
