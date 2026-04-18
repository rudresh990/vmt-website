import prisma from '../../../../../lib/prisma';
import bcrypt from 'bcrypt';

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return Response.json({ error: 'Required fields missing' }, { status: 400 });
  }
  const existing = await prisma.user.findUnique({
    where: { email },
  });
  if (existing) {
    return Response.json({ error: 'Email already exists' }, { status: 409 });
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashed,
    },
  });
  return Response.json(user);
}
