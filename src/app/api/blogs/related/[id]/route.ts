import prisma from '../../../../../../lib/prisma';

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;

  const blogId = Number(id);

  if (isNaN(blogId)) {
    return Response.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const blog = await prisma.blog.findUnique({
    where: { id: blogId },
    include: {
      tags: true,
      category: true,
    },
  });

  if (!blog) {
    return Response.json({ error: 'Not Found' }, { status: 404 });
  }

  const tagIds = blog.tags.map((t) => t.tagId);

  const related = await prisma.blog.findMany({
    where: {
      id: { not: blogId },
      status: 'PUBLISHED',
      tags: {
        some: {
          tagId: { in: tagIds },
        },
      },
    },
    take: 5,
  });

  if (related.length < 3 && blog.categoryId) {
    const more = await prisma.blog.findMany({
      where: {
        id: { not: blogId },
        status: 'PUBLISHED',
        categoryId: blog.categoryId,
      },
      take: 5,
    });

    return Response.json([...related, ...more.filter((m) => !related.some((r) => r.id === m.id))]);
  }

  return Response.json(related);
}
