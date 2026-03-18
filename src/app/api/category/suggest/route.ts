import prisma from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { slugify } from '../../methods';

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  const slug = slugify(name);

  let category = await prisma.category.findUnique({
    where: { slug },
  });
  if (!category) {
    category = await prisma.category.create({
      data: {
        name,
        slug,
        status: 'PENDING',
      },
    });
  }
  return NextResponse.json(category);
}
