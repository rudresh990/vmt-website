import prisma from '../../../../../lib/prisma';
export async function GET() {
  const blogs = await prisma.blog.findMany({
    where: {
      status: 'PUBLISHED',
    },
    include: {
      _count: {
        select: {
          views: true,
        },
      },
    },
    orderBy: {
      views: {
        _count: 'desc',
      },
    },
    take: 10,
  });

  return Response.json(blogs);
}
