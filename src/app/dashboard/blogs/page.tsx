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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {blogs.map((blog: any) => (
          <div key={blog.id} className="vmt-glass-card transition w-full p4 bg-gray-800 p-4 rounded-lg">
            <Link href={`/blog/${blog.slug}`}>
              <h2>{blog.title}</h2>
            </Link>
            <p className="text-sm text-[--text-muted]">
              {blog.status} Views: {blog._count.views}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
