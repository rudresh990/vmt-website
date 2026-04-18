import Link from 'next/link';
import prisma from '../../../lib/prisma';

export const revalidate = 60;

async function getBlogs() {
  return prisma.blog.findMany({
    where: {
      status: 'PUBLISHED',
    },
    orderBy: { createdAt: 'desc' },
  });
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <h1 className="section-title text-center">Void Matrix Technology Blogs</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: any) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="vmt-glass-card p-5 hover:scale-[1.02] transition"
            >
              <h2 className="capitalize">{blog.title}</h2>
              <p className="uppercase">{blog.excerpt || 'No description available'}</p>
              <div className="mt-4 text-xs text-(--text-muted)">
                {new Date(blog.publishedAt).toDateString()}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
