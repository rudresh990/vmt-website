import { getCurrentUser } from '@/app/lib/users/getCurrentUser';
import { NextResponse } from 'next/server';
import prisma from '../../../../../../lib/prisma';

export async function PATCH(req: Request, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json(
        {
          error: 'Unauthorized',
        },
        { status: 401 },
      );
    }
    const { slug } = await params;
    const blog = await prisma.blog.findFirst({
      where: {
        slug,
        authorId: user.id,
        status: 'DRAFT',
      },
    });

    if (!blog) {
      return NextResponse.json({ error: 'Draft not found' }, { status: 404 });
    }
    const trashedBlog = await prisma.blog.update({
      where: {
        id: blog.id,
      },
      data: {
        status: 'TRASH',
        deletedAt: new Date(),
      },
    });
    return NextResponse.json(trashedBlog);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
