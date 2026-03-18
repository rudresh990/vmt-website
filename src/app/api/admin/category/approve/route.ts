import prisma from '../../../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const categories = await prisma.category.findMany({
    where: {
      status: 'APPROVED',
    },
  });
  if (!categories) {
    return NextResponse.json({ error: 'Categories not found' }, { status: 404 });
  }
}
