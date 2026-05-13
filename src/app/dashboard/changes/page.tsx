'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function Changes() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('../api/blogs/CRBlogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      {blogs.length &&
        blogs.map((blog: any) => (
          <div
            key={blog.id}
            className="inline-flex w-full border-b-2 border-cyan-400 p-4 rounded-b-2xl my-1"
          >
            <Link href={`/dashboard/write?id=${blog.id}`} key={blog.id}>
              <h1 key={blog.title}>{blog.title}</h1>
              <p className="capitalize text-gray-400">{blog.ChangeRequest[0]?.message}</p>
            </Link>
          </div>
        ))}
    </div>
  );
}
