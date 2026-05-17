import prisma from '../../../../../../lib/prisma';
import { NextResponse } from 'next/server';
import slugify from 'slugify';
import { getCurrentUser } from '@/app/lib/users/getCurrentUser';
function generateDraftSlug() {
  const random = crypto.randomUUID().slice(0, 8);

  return slugify(`untitled-draft-${random}`, {
    lower: true,
    strict: true,
    trim: true,
  });
}

export async function POST() {
  try {
    const user = await getCurrentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const slug = generateDraftSlug();
    const blog = await prisma.blog.create({
      data: {
        title: 'Untitled Draft',
        slug,
        content: '',
        status: 'DRAFT',
        author: {
          connect: {
            id: user.id,
          },
        },
      },
      select: {
        id: true,
        slug: true,
        title: true,
        status: true,
      },
    });
    return NextResponse.json(blog);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        error: 'Failed to create draft',
      },
      { status: 500 },
    );
  }
}
