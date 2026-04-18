import { NextRequest, NextResponse } from 'next/server';
import { slugify } from '../../methods';
import prisma from '../../../../../lib/prisma';
import { calculateReadTime } from '@/app/lib/blogAnalytics/readTime';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { title, content, authorId, categoryId, tags } = body;
  const readTime = calculateReadTime(content);

  if (!title || !content || !authorId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }
  // console.log(tags);
  const slug = slugify(title);
  console.log(slug);
  try {
    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        readTime,
        authorId,
        categoryId,
      },
    });
    if (tags.length > 0) {
      for (const tagName of tags) {
        const tagSlug = slugify(tagName);
        let tag = await prisma.tag.findUnique({
          where: { slug: tagSlug },
        });
        if (!tag) {
          tag = await prisma.tag.create({
            data: {
              name: tagName,
              slug: tagSlug,
              status: 'PENDING',
            },
          });
        }
        await prisma.blogTag.create({
          data: {
            blogId: blog.id,
            tagId: tag.id,
          },
        });
      }
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Blog creation failed' }, { status: 500 });
  }
}
