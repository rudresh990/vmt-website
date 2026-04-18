import { NextResponse } from 'next/server';
import { verifyToken } from './auth';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.headers.get('authorization')?.split(' ')[1];
  const url = req.nextUrl.clone();
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded = verifyToken(token);

    // Clone headers and attach user data
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('x-user', JSON.stringify(decoded));

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}

export const config = {
  matcher: ['/api/admin/:path*'],
};
