import Link from 'next/link';
async function getTrending() {
  const res = await fetch('http://localhost:3000/api/blogs/trending', { cache: 'no-store' });
  return res.json();
}

export default async function TrendingSidebar() {
  const blogs = await getTrending();
  return (
    <div className="vmt-glass-card p-5">
      <h3 className="text-lg font-semibold mb-4">Trending Blogs</h3>
      <div className="flex flex-col gap-3">
        {blogs.map((blog: any, i: number) => (
          <Link key={blog.id} href={`/blog/${blog.slug}`} className="text-sm internal-link">
            {i + 1}. {blog.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
