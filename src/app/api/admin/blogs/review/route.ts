import prisma from '../../../../../../lib/prisma';
import { verifyToken } from '@/app/lib/users/auth';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const token = req.headers.get('cookie')?.split('token=')[1]?.split(';')[0];
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const user = await verifyToken(token);
  if (!user || user.role !== 'SUPERADMIN') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }
  const blogs = await prisma.blog.findMany({
    where: { status: 'REVIEW' },
    orderBy: { createdAt: 'desc' },
    include: {
      author: {
        select: {
          name: true,
        },
      },
      tags: {
        include: {
          tag: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });
  return NextResponse.json(blogs);
}
