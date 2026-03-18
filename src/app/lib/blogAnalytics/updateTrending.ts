import prisma from '../../../../lib/prisma';

export async function updateTrendingScore() {
  const blogs = await prisma.blog.findMany({
    where: {
      status: 'PUBLISHED',
    },
    include: {
      _count: {
        select: { views: true },
      },
    },
  });
  for (const blog of blogs) {
    const hours = (Date.now() - new Date(blog.publishedAt!).getTime()) / 3600000;
    const views = blog._count.views;
    const score = views / Math.pow(hours + 2, 1.5);

    await prisma.blog.update({
      where: { id: blog.id },
      data: { trendingScore: score },
    });
  }
}
