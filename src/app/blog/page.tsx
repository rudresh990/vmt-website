import Link from 'next/link';
import prisma from '../../../lib/prisma';
import { buildMetadata } from '../lib/schema/seo';

export const metadata = buildMetadata({
  title: 'Tech Insights & Developer Blog | Void Matrix Technology',
  description:
    'Software engineering, AI, and web dev insights from the Void Matrix team. Practical guides for modern builders.',
  path: '/blog',
});

export const revalidate = 60;

async function getBlogs() {
  return prisma.blog.findMany({
    where: {
      status: 'PUBLISHED',
    },
    orderBy: { trendingScore: 'desc' },
  });
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <>
      <div className="container mx-auto px-10 py-10">
        <h1 className="section-title text-center">Void Matrix Technology Blogs</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog: any) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="vmt-glass-card p-5 hover:scale-[1.01]! transition"
            >
              <h2 className="capitalize text-2xl mb-2 pb-1 border-b-2 border-cyan-400 rounded-lg">
                {blog.title}
              </h2>
              <p className="uppercase text-(--text-muted) text-sm">
                {blog.excerpt || 'No description available'}
              </p>
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
