import { NextResponse } from 'next/server';
import { verifyToken } from '@/app/lib/users/auth';
import prisma from '../../../../../lib/prisma';

export async function GET(req: Request) {
  const token = req.headers.get('cookie')?.split('token=')[1]?.split(';')[0];

  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ message: 'User Not Found' }, { status: 404 });
    }
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });
    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }
}
