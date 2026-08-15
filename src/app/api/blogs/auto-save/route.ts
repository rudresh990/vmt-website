import prisma from '../../../../../lib/prisma';
import { verifyToken } from '@/app/lib/users/auth';
import { slugify } from '../../methods';

export async function POST(req: Request) {
  try {
    const cookie = req.headers.get('cookie') || '';
    const token = cookie.split('token=')[1]?.split(';')[0];

    const user: any = verifyToken(token);

    const { id, title, content, tags = [], excerpt } = await req.json();

    console.log('Auto-saving blog:', {
      id,
      title,
      tags,
    });

    if (!title || !content) {
      return Response.json(
        {
          error: 'Title and content are required',
        },
        {
          status: 400,
        },
      );
    }

    const updateData: any = {
      title,
      content,
    };

    if (excerpt !== undefined) {
      updateData.excerpt = excerpt;
    }

    // =========================
    // UPDATE EXISTING DRAFT
    // =========================

    if (id) {
      const numericId = Number(id);

      const blog = await prisma.$transaction(async (tx) => {
        // Update blog content

        const updatedBlog = await tx.blog.update({
          where: {
            id: numericId,
          },

          data: updateData,
        });

        // Handle Tags

        if (Array.isArray(tags)) {
          // Remove old relations

          await tx.blogTag.deleteMany({
            where: {
              blogId: numericId,
            },
          });

          const cleanTags = tags
            .filter((tag: string) => tag && tag.trim())
            .map((tag: string) => tag.trim());

          for (const tagName of cleanTags) {
            const tagSlug = slugify(tagName);

            // Find tag using slug OR name

            let tag = await tx.tag.findFirst({
              where: {
                OR: [
                  {
                    slug: tagSlug,
                  },

                  {
                    name: tagName,
                  },
                ],
              },
            });

            // Create only if tag does not exist

            if (!tag) {
              tag = await tx.tag.create({
                data: {
                  name: tagName,

                  slug: tagSlug,

                  status: 'APPROVED',
                },
              });
            }

            // Avoid duplicate BlogTag relation

            const existingRelation = await tx.blogTag.findFirst({
              where: {
                blogId: numericId,

                tagId: tag.id,
              },
            });

            if (!existingRelation) {
              await tx.blogTag.create({
                data: {
                  blogId: numericId,

                  tagId: tag.id,
                },
              });
            }
          }
        }

        return updatedBlog;
      });

      return Response.json(blog);
    }

    // =========================
    // CREATE NEW DRAFT
    // =========================

    const blog = await prisma.blog.create({
      data: {
        title,

        content,

        excerpt,

        slug: slugify(title),

        status: 'DRAFT',

        authorId: user.id,
      },
    });

    return Response.json(blog);
  } catch (error: any) {
    console.error('AUTO SAVE ERROR:', error);

    return Response.json(
      {
        error: error.message,
      },

      {
        status: 500,
      },
    );
  }
}
