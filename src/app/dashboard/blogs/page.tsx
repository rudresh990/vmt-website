'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Myblogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('../api/blogs/my', {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl mb-4">My Blogs</h1>
      <div className="flex flex-col gap-4">
        {blogs.map((blog: any) => (
          <div key={blog.id} className="p-4">
            <Link href={`/blog/${blog.slug}`}>
              <h2>{blog.title}</h2>
            </Link>
            <p className="text-sm text-(--text-muted)">
              {blog.status} Views: {blog._count.views}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
