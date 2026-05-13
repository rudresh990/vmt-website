import Link from 'next/link';
import prisma from '../../../lib/prisma';

async function getTrending() {
  return await prisma.blog.findMany({
    where: {
      status: 'PUBLISHED',
    },
    take: 10,
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });
}

export default async function TrendingSidebar() {
  const blogs = await getTrending();
  if (!blogs.length) return null;

  return (
    <div className="vmt-glass-card p-5">
      <h3 className="text-lg font-semibold mb-4">Trending Blogs</h3>
      <div className="flex flex-col gap-3">
        {blogs.map((blog, i: number) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} className="text-sm internal-link">
            {i + 1}. {blog.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
