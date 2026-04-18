import prisma from '../../../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const numericId = Number(id);
  // console.log('Received request for draft with ID:', id);

  if (isNaN(numericId)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const blog = await prisma.blog.findUnique({
    where: { id: numericId },
    include: {
      tags: { include: { tag: true } },
    },
  });

  if (!blog) {
    return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
  }

  return NextResponse.json(blog);
}
