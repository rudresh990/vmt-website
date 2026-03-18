import Link from 'next/link';
import { notFound } from 'next/navigation';
import prisma from '../../../../lib/prisma';

async function getCategoryBlogs(slug: string) {
  const category = await prisma.category.findUnique({
    where: { slug },
    select: {
      name: true,
      blogs: {
        where: {
          status: 'PUBLISHED',
        },
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
        },
      },
    },
  });

  if (!category) return null;

  return category;
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const data = await getCategoryBlogs(slug);
  if (!data) return notFound();

  return (
    <div className="container mx-auto py-4 px-4">
      <h1 className="main-headings mb-8">{data.name}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.blogs.map((blog) => (
          <Link
            key={blog.slug}
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
