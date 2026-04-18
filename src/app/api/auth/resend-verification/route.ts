import prisma from '../../../../../lib/prisma';
import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { sendVerificationEmail } from '@/app/lib/users/email';

export async function POST(req: Request) {
  const { email } = await req.json();
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  if (user.isVerified) {
    return NextResponse.json({ error: 'Email already verified' }, { status: 400 });
  }
  const token = crypto.randomBytes(32).toString('hex');
  await prisma.user.update({
    where: { id: user.id },
    data: {
      verificationToken: token,
      verificationExpiry: new Date(Date.now() + 1000 * 60 * 60),
    },
  });
  await sendVerificationEmail(email, token);
  return NextResponse.json({ message: 'Verification email resent.' });
}
