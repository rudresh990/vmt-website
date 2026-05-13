'use client';
import { useState, useEffect } from 'react';
export default function ChangeRequest() {
  const [blogs, setBlogs] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('../api/blogs/CRBlogs')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {Loading && <div className="text-3xl">Loading....</div>}
      {(!Loading &&
        blogs.length > 0 &&
        blogs.map((blog: any) => (
          <div key={blog.id}>
            <h1 key={blog.title}>{blog.title}</h1>
          </div>
        ))) ||
        (blogs.length == 0 && <div>No blogs found</div>)}
    </div>
  );
}
