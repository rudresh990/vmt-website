import prisma from '../../../../../lib/prisma';
import { verifyToken } from '@/app/lib/users/auth';
import { slugify } from '../../methods';

export async function POST(req: Request) {
  try {
    // =========================
    // AUTH
    // =========================

    const cookie = req.headers.get('cookie') || '';
    const token = cookie.split('token=')[1]?.split(';')[0];

    const user: any = verifyToken(token);

    if (!user) {
      return Response.json(
        {
          error: 'Unauthorized',
        },
        {
          status: 401,
        },
      );
    }

    // =========================
    // REQUEST DATA
    // =========================

    const {
      id,
      title,
      content,
      tags = [],
      excerpt,
    } = await req.json();

    console.log('Auto-saving blog:', {
      id,
      title,
      tags,
    });

    // =========================
    // VALIDATION
    // =========================

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

    // =========================
    // GENERATE SLUG
    // =========================

    const slug = slugify(title);

    // =========================
    // UPDATE DATA
    // =========================

    const updateData: any = {
      title,
      content,
      slug,
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
        // =========================
        // UPDATE BLOG
        // =========================

        const updatedBlog = await tx.blog.update({
          where: {
            id: numericId,
          },

          data: updateData,
        });

        // =========================
        // HANDLE TAGS
        // =========================

        if (Array.isArray(tags)) {
          // Remove old tag relationships

          await tx.blogTag.deleteMany({
            where: {
              blogId: numericId,
            },
          });

          // Clean tags

          const cleanTags = tags
            .filter(
              (tag: string) =>
                typeof tag === 'string' && tag.trim(),
            )
            .map((tag: string) => tag.trim());

          // Create/find tags

          for (const tagName of cleanTags) {
            const tagSlug = slugify(tagName);

            // Find existing tag

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

            // Create tag if it doesn't exist

            if (!tag) {
              tag = await tx.tag.create({
                data: {
                  name: tagName,
                  slug: tagSlug,
                  status: 'APPROVED',
                },
              });
            }

            // Create BlogTag relationship

            const existingRelation =
              await tx.blogTag.findFirst({
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

        // Generate slug from title
        slug,

        status: 'DRAFT',

        authorId: user.id,
      },
    });

    // =========================
    // RETURN CREATED BLOG
    // =========================

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