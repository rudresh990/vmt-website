'use client';
import BlogPreview from '@/components/blog/BlogPreview';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Blog = {
  id: number;
  title: string;
  content: string;
  status: string;
  tags: [
    {
      tag: {
        name: string;
      };
    },
  ];
};
export default function ReviewPage() {
  const [previewBlog, setPreviewBlog] = useState(false);
  const [changeMessage, setChangeMessage] = useState('');
  const [changeRequest, setChangeRequest] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    fetch('/api/admin/blogs/review')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      });
  }, []);

  const showPreview = (blog: any) => {
    setSelectedBlog(blog);
    setPreviewBlog((previewBlog) => !previewBlog);
  };
  const togglePreview = () => {
    setPreviewBlog((previewBlog) => !previewBlog);
  };
  const approveBlog = async () => {
    if (!selectedBlog) return;
    try {
      if (selectedBlog) {
        const numericId = Number(selectedBlog.id);
        const res = await fetch('/api/admin/blogs/approve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ blogId: numericId }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || 'Failed to approve blog');
        }
        // console.log('Approved:', data);
        setSelectedBlog(null);
        router.refresh();
      }
    } catch (e: any) {
      console.error('Approve error:', e.message);
    }
  };
  const handleChanges = async () => {
    if (!selectedBlog) return;
    const nId = Number(selectedBlog.id);
    const finalMessage = changeMessage.trim() == '' ? 'Changes requested by admin' : changeMessage;
    const res = await fetch('/api/admin/blogs/request-change', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Id: nId, message: finalMessage }),
    });
    if (!res.ok) {
      alert('Change request failed try after sometime');
    }
    setSelectedBlog(null);
    router.refresh();
  };
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Blogs for Review</h1>
      {loading && <p>Loading...</p>}
      {!loading && blogs.length === 0 && <p>No blogs pending review.</p>}
      {!previewBlog && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 w-full">
            {blogs.map((blog: any) => (
              <div
                key={blog.id}
                className="vmt-glass-card hover:scale-[1.02] transition w-full p4 bg-gray-800 p-4 rounded-lg"
                onClick={() => showPreview(blog)}
              >
                <h2>{blog.title}</h2>
                <p className="text-sm text-[--text-muted] capitalize">
                  Author : <b>{blog.author.name}</b>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedBlog && previewBlog && (
        <div className="mt-8">
          <BlogPreview
            title={selectedBlog.title}
            content={selectedBlog.content}
            tags={selectedBlog.tags?.map((t) => t.tag.name) || []}
          />
          <div className="flex justify-center items-center gap-4">
            <button className="btn-primary p-2 rounded-4xl" onClick={togglePreview}>
              Close Preview
            </button>
            <button className="btn-primary p-2 rounded-4xl" onClick={approveBlog}>
              Approve
            </button>
            <button className="btn-primary p-2 rounded-4xl" onClick={() => setChangeRequest(true)}>
              Request Changes
            </button>
          </div>
          {changeRequest && (
            <div className="flex flex-col justify-center items-center gap-4 mt-4">
              <input
                type="text"
                placeholder="Describe changes to be made"
                name="message"
                id="changeMessage"
                value={changeMessage}
                onChange={(e) => setChangeMessage(e.target.value)}
                className="w-3/4 text-3xl font-semibold bg-transparent border-b border-gray-600 focus:outline-none focus:border-cyan-400 py-3 mb-6 transition"
              />
              <button className="btn-primary p-2 rounded-4xl" onClick={handleChanges}>
                Submit
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
