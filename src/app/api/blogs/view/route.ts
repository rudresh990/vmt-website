import prisma from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { blogId } = await req.json();
  const ip = req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip');
  const userAgent = req.headers.get('user-agent');
  const recentView = await prisma.blogView.findFirst({
    where: {
      blogId,
      ip,
      createdAt: {
        gt: new Date(Date.now() - 60 * 60 * 1000),
      },
    },
  });
  if (!recentView) {
    await prisma.blogView.create({
      data: {
        blogId,
        ip,
        userAgent,
      },
    });
  }
  return NextResponse.json({ tracked: true });
}
