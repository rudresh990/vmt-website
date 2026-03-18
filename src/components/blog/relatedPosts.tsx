import Link from 'next/link';

async function getRelated(id: number) {
  const res = await fetch(`http://localhost:3000/api/blogs/related/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    console.error(await res.text());
    return [];
  }
  return res.json();
}

export default async function RelatedPosts({ blogId: blogId }: { blogId: number }) {
  const blogs = await getRelated(blogId);
  if (!blogs.length) return null;

  return (
    <div className="mt-12">
      <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
      <div className="grid gap-4">
        {blogs.map((blog: any) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="block p-4 border border-gray-700 rounded hover:bg-gray-800 transition"
          >
            {blog.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
