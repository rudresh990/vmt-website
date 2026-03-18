import prisma from '../../../../../../lib/prisma';
export async function GET(req: Request, { params }: any) {
  const { slug } = await params;
  const tag = await prisma.tag.findUnique({
    where: { slug: slug, status: 'APPROVED' },
    include: {
      blogs: {
        include: {
          blog: true,
        },
      },
    },
  });

  if (!tag) {
    return Response.json({ error: 'Not found' }, { status: 404 });
  }

  return Response.json({
    tag: {
      name: tag.name,
      slug: tag.slug,
    },
    blogs: tag.blogs.filter((bt) => bt.blog.status === 'PUBLISHED').map((bt) => bt.blog),
  });
}
