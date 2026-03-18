import prisma from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { revalidateBlogPaths } from '@/app/lib/db/blogs/revalidate';

export async function PATCH(req: NextRequest) {
  const { blogId } = await req.json();

  const blog = await prisma.blog.update({
    where: { id: blogId },
    data: {
      status: 'PUBLISHED',
      publishedAt: new Date(),
      generatedAt: new Date(),
    },
    include: {
      category: true,
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
  await revalidateBlogPaths({
    slug: blog.slug,
    categorySlug: blog.category?.slug,
    tagSlugs: blog.tags.map((t) => t.tag.slug),
  });
  return NextResponse.json(blog);
}
