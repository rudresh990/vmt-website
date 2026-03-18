import prisma from '../../../../../../lib/prisma';

export async function GET() {
  const tags = await prisma.tag.findMany({
    where: { status: 'PENDING' },
  });

  return Response.json(tags);
}
