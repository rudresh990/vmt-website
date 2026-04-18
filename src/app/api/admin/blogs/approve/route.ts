import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../../../../lib/prisma';
export async function POST(req: NextRequest) {
  try {
    const { blogId } = await req.json();
    if (!blogId) {
      return NextResponse.json({ message: 'Blog ID required' }, { status: 400 });
    }
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        status: 'PUBLISHED',
        publishedAt: new Date(),
      },
    });
    return NextResponse.json({
      message: 'Blog approved successfully',
      blog: updatedBlog,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
  }
}
