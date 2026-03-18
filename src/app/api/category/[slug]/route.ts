import prisma from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await context.params; // ✅ correct

    const category = await prisma.category.findUnique({
      where: {
        slug: slug,
      },
      include: {
        blogs: {
          where: {
            status: 'PUBLISHED',
          },
          select: {
            title: true,
            slug: true,
            publishedAt: true,
          },
        },
      },
    });

    if (!category) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    return NextResponse.json(category);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch category page' }, { status: 500 });
  }
}
