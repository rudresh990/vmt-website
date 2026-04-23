import prisma from '../../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { slugify } from '@/app/api/methods';

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  if (!name) {
    return NextResponse.json({ error: 'Tag name required' }, { status: 400 });
  }
  const slug = slugify(name);
  const existingTag = await prisma.tag.findUnique({
    where: { slug },
  });

  if (existingTag) {
    return NextResponse.json(existingTag);
  }
  const tag = await prisma.tag.create({
    data: {
      name,
      slug,
      status: 'APPROVED',
    },
  });
  return NextResponse.json(tag);
}
