import prisma from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { slugify } from '../../methods';

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  if (!name) {
    return NextResponse.json({ error: 'Category name required' }, { status: 400 });
  }
  const slug = slugify(name);

  const existigCat = await prisma.category.findUnique({
    where: { slug },
  });

  if (existigCat) {
    return NextResponse.json({ error: 'Category already exist' }, { status: 400 });
  }
  const catergory = await prisma.category.create({
    data: {
      name,
      slug,
    },
    select: {
      name: true,
      slug: true,
    },
  });

  return NextResponse.json(catergory);
}
