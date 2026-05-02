import prisma from '../../../../../lib/prisma';
import { verifyToken } from '@/app/lib/users/auth';
export async function GET(req: Request) {
  try {
    const cookie = req.headers.get('cookie');
    const tokenMatch = cookie?.match(/(?:^|;\s*)token=([^;]+)/);
    const token = tokenMatch ? tokenMatch[1] : 'null';
    const user = await verifyToken(token);
    if (!user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const drafts = await prisma.blog.findMany({
      where: {
        status: 'DRAFT',
        authorId: user.id,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return Response.json(drafts);
  } catch (err) {
    console.log(err);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
