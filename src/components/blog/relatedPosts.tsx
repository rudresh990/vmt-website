import Link from 'next/link';
import prisma from '../../../lib/prisma';

async function getRelated(id: number) {
  return await prisma.blog.findMany({
    where: {
      id: { not: id },
      status: 'PUBLISHED',
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 5,
    select: {
      id: true,
      title: true,
      slug: true,
    },
  });
}

export default async function RelatedPosts({ blogId }: { blogId: number }) {
  const blogs = await getRelated(blogId);
  if (!blogs.length) return null;

  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
      <div className="flex gap-3 flex-col">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="block p-4 border border-gray-700 rounded-2xl hover:bg-gray-800 transition"
          >
            {blog.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
