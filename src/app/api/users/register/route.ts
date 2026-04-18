import prisma from '../../../../../lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { sendVerificationEmail } from '@/app/lib/users/email';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, password } = body;
  if (!name || !email || !password) {
    return NextResponse.json({ error: 'All fields required' }, { status: 400 });
  }
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return NextResponse.json({ error: 'User with this email already exists' }, { status: 409 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const token = crypto.randomBytes(32).toString('hex');

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      verificationToken: token,
      verificationExpiry: new Date(Date.now() + 1000 * 60 * 60), //hour
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  await sendVerificationEmail(email, token);
  return NextResponse.json({
    message: 'User created. Please verify your email.',
  });
}
