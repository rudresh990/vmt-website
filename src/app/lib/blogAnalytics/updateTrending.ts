import prisma from '../../../../lib/prisma';

export async function updateTrendingScore() {
  const blogs = await prisma.blog.findMany({
    where: {
      status: 'PUBLISHED',
    },
    select: {
      id: true,
      publishedAt: true,
    },
  });
  const updates = await Promise.all(
    blogs.map(async (blog) => {
      if (!blog.publishedAt) return null;

      const totalViews = await prisma.blogView.count({
        where: {
          blogId: blog.id,
        },
      });
      const hours = (Date.now() - new Date(blog.publishedAt).getTime()) / 3600000;

      const trendingScore = totalViews / Math.pow(hours + 2, 1.5);

      return prisma.blog.update({
        where: {
          id: blog.id,
        },
        data: {
          trendingScore,
        },
      });
      await prisma.$transaction(updates.filter(Boolean));
    }),
  );
}
