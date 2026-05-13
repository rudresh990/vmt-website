import prisma from '../../../../../lib/prisma';
import { verifyToken } from '@/app/lib/users/auth';

export async function GET(req: Request) {
  const cookie = req.headers.get('cookie') || '';
  const token = cookie.split('token=')[1]?.split(';')[0];
  const decoded: any = verifyToken(token);
  const blogs = await prisma.blog.findMany({
    where: { authorId: decoded.id, status: 'CHANGES_REQUESTED' },
    include: {
      ChangeRequest: {
        select: {
          message: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
  });
  return Response.json(blogs);
}
