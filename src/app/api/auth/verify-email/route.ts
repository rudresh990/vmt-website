import prisma from '../../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const base_url = process.env.NEXT_PUBLIC_APP_URL;
  const token = searchParams.get('token');
  if (!token) {
    return NextResponse.redirect(`${base_url}/verification-error`);
  }

  const user = await prisma.user.findFirst({
    where: { verificationToken: token },
  });

  if (!user) {
    return NextResponse.redirect(`${base_url}/verification-error`);
  }
  if (user.verificationExpiry && user.verificationExpiry < new Date()) {
    return NextResponse.redirect(`${base_url}/verification-error`);
  }
  await prisma.user.update({
    where: { id: user.id },
    data: {
      isVerified: true,
      verificationExpiry: null,
      verificationToken: null,
    },
  });
  return NextResponse.redirect(`${base_url}/verified`);
}
