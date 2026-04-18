import prisma from '../../../../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { verifyToken } from '@/app/lib/users/auth';

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numericId = Number(id);

  const cookie = req.headers.get('cookie') || '';
  const token = cookie.split('token=')[1]?.split(';')[0];
  const user: any = verifyToken(token);
  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (isNaN(numericId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }
  const blog = await prisma.blog.findUnique({
    where: { id: numericId },
  });
  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }
  if (blog.authorId !== user.id) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }
  const updatedBlog = await prisma.blog.update({
    where: { id: numericId },
    data: {
      status: 'REVIEW',
    },
  });
  return NextResponse.json(updatedBlog, { status: 200 });
}
