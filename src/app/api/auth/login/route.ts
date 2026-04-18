import prisma from '../../../../../lib/prisma';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { signToken } from '@/app/lib/users/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 401 });
  }
  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return NextResponse.json({ erorr: 'Invalid credentials' }, { status: 401 });
  }

  if (!user.isVerified) {
    return NextResponse.json({ error: 'email_not_verified' }, { status: 403 });
  }

  const token = signToken(user);
  const response = NextResponse.json({
    message: 'Login successful',
    role: user.role,
  });

  response.cookies.set('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 21,
  });

  return response;
}
