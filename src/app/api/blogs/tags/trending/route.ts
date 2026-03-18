import prisma from '../../../../../../lib/prisma';
export async function GET() {
  const tags = await prisma.tag.findMany({
    include: {
      blogs: {
        include: {
          blog: {
            include: {
              _count: {
                select: {
                  views: true,
                },
              },
            },
          },
        },
      },
    },
  });

  const trending = tags.map((tag) => {
    const views = tag.blogs.reduce((sum, blogTag) => {
      return sum + blogTag.blog._count.views;
    }, 0);
    return {
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      views,
    };
  });
  trending.sort((a, b) => b.views - a.views);
  return Response.json(trending.slice(0, 10));
}
