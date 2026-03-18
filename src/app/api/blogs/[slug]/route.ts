import prisma from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { injectInternalLinks } from '@/app/lib/seo/internalLinks';

export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params;

    const blog = await prisma.blog.findUnique({
      where: { slug },
      include: {
        author: {
          select: { name: true },
        },
        category: {
          select: { name: true, slug: true },
        },
        tags: {
          include: {
            tag: {
              select: { name: true, slug: true },
            },
          },
        },
      },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    const contentWithLinks = await injectInternalLinks(blog.content);

    return NextResponse.json({
      ...blog,
      content: contentWithLinks,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  }
}
