import { cookies } from 'next/headers';
import prisma from '../../../../lib/prisma';
import { verifyToken } from '@/app/lib/users/auth';

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) {
      return null;
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return null;
    }
    const user = await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });
    return user;
  } catch {
    return null;
  }
}
