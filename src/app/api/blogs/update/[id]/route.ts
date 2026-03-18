import prisma from '../../../../../../lib/prisma';
import { NextRequest } from 'next/server';
import { revalidateBlogPaths } from '@/app/lib/db/blogs/revalidate';

export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const blogId = Number(id);

  const body = await req.json();
  const { title, content } = body;

  const blog = await prisma.blog.update({
    where: { id: blogId },
    data: {
      title,
      content,
      generatedAt: new Date(),
    },
    include: {
      category: true,
      tags: {
        include: { tag: true },
      },
    },
  });

  await revalidateBlogPaths({
    slug: blog.slug,
    categorySlug: blog.category?.slug,
    tagSlugs: blog.tags.map((t) => t.tag.slug),
  });

  return Response.json({
    success: true,
    blog,
  });
}
