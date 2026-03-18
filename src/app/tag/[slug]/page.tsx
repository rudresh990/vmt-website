import Link from 'next/link';
import { notFound } from 'next/navigation';
import prisma from '../../../../lib/prisma';

async function getTagBlogs(slug: string) {
  const tag = await prisma.tag.findUnique({
    where: { slug },
    select: {
      name: true,
      blogs: {
        where: {
          blog: {
            status: 'PUBLISHED',
          },
        },
        orderBy: {
          blog: {
            createdAt: 'desc',
          },
        },
        select: {
          blog: {
            select: {
              id: true,
              title: true,
              slug: true,
              excerpt: true,
            },
          },
        },
      },
    },
  });

  if (!tag) return null;

  return {
    tag: { name: tag.name },
    blogs: tag.blogs.map((b) => b.blog),
  };
}

export default async function TagPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const data = await getTagBlogs(slug);
  if (!data) return notFound();

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="main-headings mb-8">#{data.tag.name}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="vmt-glass-card p-5 hover:scale-[1.02] transition"
          >
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-(--text-muted)">{blog.excerpt || 'No description'}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
