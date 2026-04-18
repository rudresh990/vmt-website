import prisma from '../../../../../lib/prisma';
export async function GET() {
  const drafts = await prisma.blog.findMany({
    where: { status: 'DRAFT' },
    orderBy: {
      updatedAt: 'desc',
    },
  });
  return Response.json(drafts);
}
