'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function DashboardLayout({ children }: any) {
  const [collapsed, setCollapsed] = useState(false);
  const [writerMenuOpen, setWriterMenuOpen] = useState(false);
  const [CRBlogs, setCRBlogs] = useState([]);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch('/api/auth/me', {
          credentials: 'include',
        });
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getUser();

    fetch('/api/blogs/CRBlogs')
      .then((res) => res.json())
      .then((data) => setCRBlogs(data));
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* sidebar */}
      <div
        className={`bg-blue  border-r border-r-emerald-200 rounded-4xl text-white p-4 transition-all ${collapsed ? '0' : 'w-48'} `}
      >
        <div className="flex justify-between">
          {!collapsed && <h2>Dashboard</h2>}
          <button onClick={() => setCollapsed(!collapsed)} className="mb-6 inline-block">
            ☰
          </button>
        </div>
        {!collapsed && (
          <nav className="flex flex-col gap-4">
            <Link href="/dashboard" className="transition-colors hover:text-cyan-300">
              Dashboard
            </Link>

            <div className="flex flex-col">
              <button
                onClick={() => setWriterMenuOpen(!writerMenuOpen)}
                className="flex items-center justify-between text-left transition-colors hover:text-cyan-300!"
              >
                <span>Write Blog</span>

                <span
                  className={`transition-transform duration-200 ${
                    writerMenuOpen ? 'rotate-90' : ''
                  }`}
                >
                  {'>'}
                </span>
              </button>

              {writerMenuOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-3 text-sm">
                  <button
                    onClick={async () => {
                      try {
                        const res = await fetch('/api/blogs/drafts/untitled', {
                          method: 'POST',
                          credentials: 'include',
                        });

                        const blog = await res.json();

                        window.location.href = `/dashboard/write?id=${blog.id}`;
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    className="text-left transition-colors hover:text-cyan-300!"
                  >
                    New Blog
                  </button>

                  <Link href="/dashboard/draft" className="transition-colors hover:text-cyan-300">
                    Continue Draft
                  </Link>
                </div>
              )}
            </div>

            <Link href="/dashboard/blogs" className="transition-colors hover:text-cyan-300">
              My Blogs
            </Link>

            <Link
              href="/dashboard/changes"
              className="flex items-center justify-between transition-colors hover:text-cyan-300"
            >
              Changes
              {CRBlogs.length > 0 && (
                <span className="min-w-5 h-5 rounded-full bg-blue-900 px-1.5 text-sm">
                  {CRBlogs.length}
                </span>
              )}
            </Link>
          </nav>
        )}
        {!collapsed && !collapsed && (
          <div className="border-t border-gray-700 pt-4 mt-6">
            {/* User Info */}
            <div className="mb-3 mt-4">
              <p className="text-sm font-medium capitalize">
                {loading ? 'loading' : user?.name || 'user'}
              </p>
              <p className="text-xs text-gray-400">
                {loading ? 'loading' : user?.email || 'user@email'}{' '}
              </p>
            </div>

            {/* Logout */}
            <button
              onClick={async () => {
                await fetch('/api/auth/logout', {
                  method: 'POST',
                  credentials: 'include',
                });

                window.location.href = '/login';
              }}
              className="text-sm text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <div className="flex-1 p-6 bg-(--surface) text-white">{children}</div>
    </div>
  );
}
