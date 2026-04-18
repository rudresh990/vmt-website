import { NextResponse, NextRequest } from 'next/server';
import { verifyToken } from '@/app/lib/users/auth';

export function proxy(req: NextRequest) {
  const token = req.cookies.get('token')?.value;
  const pathname = req.nextUrl.pathname;
  const isAuthPage = pathname.startsWith('/login');

  if (pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      verifyToken(token);
    } catch {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
