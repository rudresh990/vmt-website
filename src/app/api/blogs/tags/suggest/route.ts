import prisma from '../../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { slugify } from '@/app/api/methods';

export async function POST(req: NextRequest) {
  const { name } = await req.json();
  const slug = slugify(name);

  let tag = await prisma.tag.findUnique({
    where: { slug },
  });
  if (!tag) {
    tag = await prisma.tag.create({
      data: {
        name,
        slug,
        status: 'APPROVED',
      },
    });
  }
  return NextResponse.json(tag);
}
