import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        status: 'PUBLISHED',
      },
      orderBy: {
        publishedAt: 'desc',
      },
      include: {
        category: {
          select: {
            name: true,
            slug: true,
          },
        },
        tags: {
          include: {
            tag: {
              select: {
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Unable to fetch blogs', error);
    return NextResponse.json({ error: 'Unable to fetch blogs' }, { status: 500 });
  }
}
