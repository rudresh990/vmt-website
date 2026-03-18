import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getCategoryBlogs(slug: string) {
  const res = await fetch(`http://localhost:3000/api/category/${slug}`, { cache: 'no-store' });
  if (!res) {
    return notFound();
  }
  return res.json();
}
export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const data = await getCategoryBlogs(slug);
  if (!data) {
    return notFound();
  }
  return (
    <div className="container mx-auto py-4 px-4">
      <h1 className="main-headings mb-8">{data.name}</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data.blogs.map((blog: any, i: number) => (
          <Link
            key={data.blogs[i].slug}
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
