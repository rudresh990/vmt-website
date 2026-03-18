import prisma from '../../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { CatAndTagStatus } from '@/app/generated/prisma/enums';

export async function PATCH(req: NextRequest) {
  const { tagId } = await req.json();
  console.log('In patch');
  const tag = await prisma.tag.update({
    where: { id: tagId },
    data: { status: CatAndTagStatus.APPROVED },
  });

  return NextResponse.json(tag);
}
