import prisma from '../../../../../lib/prisma';
import { verifyToken } from '@/app/lib/users/auth';
import { slugify } from '../../methods';

export async function POST(req: Request) {
  const cookie = req.headers.get('cookie') || '';
  const token = cookie.split('token=')[1]?.split(';')[0];
  const user: any = verifyToken(token);
  const { id, title, content, tags, excerpt } = await req.json();
  console.log('Auto-saving blog', { id, title, content, tags, excerpt });
  if (!title || !content) {
    // console.log('Missing title or content', { title, content });
    return Response.json({ error: 'Title and content are required' }, { status: 400 });
  }
  //update if id exists, else create new
  // console.log('Auto-saving blog', { id, title, content });
  const updateData: any = {
    title,
    content,
  };
  if (excerpt !== undefined) {
    updateData.excerpt = excerpt;
  }
  if (id) {
    const numericId = Number(id);
    const blog = await prisma.blog.update({
      where: { id: numericId },
      data: {
        ...updateData,
      },
    });
    if (tags !== undefined) {
      //deleting old tags
      await prisma.blogTag.deleteMany({
        where: { blogId: numericId },
      });

      //creating new tags
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
              status: 'APPROVED',
            },
          });
        }
        await prisma.blogTag.create({
          data: {
            blogId: numericId,
            tagId: tag.id,
          },
        });
      }
    }
    return Response.json(blog);
  } else {
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        slug: slugify(title),
        status: 'DRAFT',
        authorId: user.id,
      },
    });
    return Response.json(blog);
  }
}
