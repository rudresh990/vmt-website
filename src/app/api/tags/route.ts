import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';

  if (!query) return NextResponse.json([]);

  const tags = await prisma.tag.findMany({
    where: {
      name: {
        startsWith: query,
        mode: 'insensitive',
      },
    },
    take: 10,
  });

  return NextResponse.json(tags);
}
