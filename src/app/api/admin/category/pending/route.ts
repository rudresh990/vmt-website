import prisma from '../../../../../../lib/prisma';
export async function GET() {
  const categories = await prisma.category.findMany({
    where: { status: 'PENDING' },
  });
  return Response.json(categories);
}
