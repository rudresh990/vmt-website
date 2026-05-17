import prisma from '../../../../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ slug: string; faqId: string }> },
) {
  try {
    const { slug, faqId } = await params;
    const blog = await prisma.blog.findUnique({
      where: {
        slug,
      },
      select: {
        id: true,
      },
    });

    if (!blog) {
      return NextResponse.json(
        {
          error: 'Blog not found',
        },
        { status: 404 },
      );
    }
    const parsedFaqId = Number(faqId);

    if (isNaN(parsedFaqId)) {
      return NextResponse.json({ error: 'Invalid FAQ id' }, { status: 400 });
    }
    await prisma.blogFAQ.deleteMany({
      where: {
        blogId: blog.id,
        faqId: parsedFaqId,
      },
    });
    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to remove FAQ' }, { status: 500 });
  }
}
