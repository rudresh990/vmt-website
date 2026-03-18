import prisma from '../../../../../lib/prisma';
export async function GET() {
  const blogs = await prisma.blog.findMany({
    where: { status: 'PUBLISHED' },
    orderBy: { trendingScore: 'desc' },
    take: 10,
  });
  return Response.json(blogs);
}
