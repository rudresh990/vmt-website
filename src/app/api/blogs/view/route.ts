import prisma from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { blogId } = await req.json();
  const blog = await prisma.blog.findUnique({
    where: { id: blogId },
    select: { status: true, publishedAt: true },
  });
  if (!blog || blog.status !== 'PUBLISHED') {
    return NextResponse.json({ error: 'Blog not found or not published' }, { status: 404 });
  }
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

  //update trending score
  const totalViews = await prisma.blogView.count({
    where: {
      blogId,
    },
  });
  if (blog?.publishedAt) {
    const hours = (Date.now() - new Date(blog.publishedAt).getTime()) / 3600000;

    const trendingScore = totalViews / Math.pow(hours + 2, 1.5);

    await prisma.blog.update({
      where: {
        id: blogId,
      },
      data: {
        trendingScore,
      },
    });
  }
  return NextResponse.json({ tracked: true });
}
