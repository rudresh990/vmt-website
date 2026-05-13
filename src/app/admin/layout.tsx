'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function DashboardLayout({ children }: any) {
  const [collapsed, setCollapsed] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch('/api/auth/me', {
          credentials: 'include',
        });
        if (!res.ok) {
          if (res.status == 401) {
            console.log('Unauthorized');
            window.location.href = '/login';
            return;
          }
        }
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
  useEffect(() => {
    if (user?.role === 'SUPERADMIN') {
      setIsSuperAdmin(true);
    }
  }, [user]);
  return (
    <>
      {!isSuperAdmin && !loading && (
        <div className="flex items-center justify-center min-h-screen flex-col gap-4">
          <h1 className="text-4xl font-bold">Access Denied</h1>
          <h2 className="text-lg text-[--text-muted]">
            You do not have permission to access this page.
          </h2>
          <button
            className="btn-primary p-3 rounded-3xl"
            onClick={() => (window.location.href = '/dashboard')}
          >
            {`Writer's Dashboard`}
          </button>
        </div>
      )}
      {(isSuperAdmin || loading) && (
        <div className="flex min-h-screen">
          {/* sidebar */}
          <div
            className={`bg-blue  border-r border-r-emerald-200 rounded-4xl text-white p-4 transition-all ${collapsed ? '0' : 'w-48'}`}
          >
            <div className="flex justify-between">
              {!collapsed && <h2>Admin Dashboard</h2>}
              <button onClick={() => setCollapsed(!collapsed)} className="mb-6 inline-block">
                ☰
              </button>
            </div>
            {!collapsed && (
              <nav className="flex flex-col gap-4">
                <Link href="/admin">Dashboard</Link>
                <Link href="/admin/review">Review Blogs</Link>
                <Link href="/admin/changeRequested">Change Requested</Link>
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
      )}
    </>
  );
}
