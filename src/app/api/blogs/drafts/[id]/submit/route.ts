import prisma from '../../../../../../../lib/prisma';
import { NextResponse } from 'next/server';
import { verifyToken } from '@/app/lib/users/auth';

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const blogId = Number(id);

    if (!blogId) {
      return NextResponse.json({ error: 'Invalid blog ID' }, { status: 400 });
    }

    // ✅ AUTH
    const cookie = req.headers.get('cookie') || '';
    const token = cookie.split('token=')[1]?.split(';')[0];

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const user = verifyToken(token);

    if (!user) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    // ✅ BODY
    const body = await req.json();
    let { title, content, excerpt, tags } = body;

    // 🔴 BASIC VALIDATION
    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
    }

    // ✅ AUTO EXCERPT (if missing)
    if (!excerpt || excerpt.trim() === '') {
      excerpt =
        content
          .replace(/<[^>]*>/g, '') // remove HTML
          .slice(0, 160)
          .trim() + '...';
    }

    // ✅ EXCERPT LIMIT
    if (excerpt.length > 200) {
      excerpt = excerpt.slice(0, 200);
    }

    // ✅ TAG CLEANING
    if (typeof tags === 'string') {
      tags = tags.split(',');
    }

    tags = (tags || [])
      .map((t: string) => t.trim().toLowerCase())
      .filter((t: string) => t.length > 0);

    if (!tags.length) {
      return NextResponse.json({ error: 'At least one tag is required' }, { status: 400 });
    }

    // ✅ UPDATE BLOG
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        title,
        content,
        excerpt,

        // ✅ FIXED TAG HANDLING
        tags: {
          deleteMany: {}, // remove old tags

          create: tags.map((tag: string) => ({
            tag: {
              connectOrCreate: {
                where: { name: tag },
                create: {
                  name: tag,
                  slug: tag,
                  status: 'APPROVED',
                },
              },
            },
          })),
        },

        status: 'REVIEW',
        createdAt: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      blog: updatedBlog,
    });
  } catch (error) {
    console.error('Submit API Error:', error);

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
