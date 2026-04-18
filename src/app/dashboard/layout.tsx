'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function DashboardLayout({ children }: any) {
  const [collapsed, setCollapsed] = useState(false);
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
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* sidebar */}
      <div
        className={`bg-blue  border-r border-r-emerald-200 rounded-4xl text-white p-4 transition-all ${collapsed ? '0' : 'w-48'}`}
      >
        <div className="flex justify-between">
          {!collapsed && <h2>Dashboard</h2>}
          <button onClick={() => setCollapsed(!collapsed)} className="mb-6 inline-block">
            ☰
          </button>
        </div>
        {!collapsed && (
          <nav className="flex flex-col gap-4">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/dashboard/write">Write Blog</Link>
            <Link href="/dashboard/blogs">My Blogs</Link>
            <Link href="/dashboard/draft">My Drafts</Link>
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
