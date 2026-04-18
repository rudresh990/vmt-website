import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET!;
interface CustomJwtPayload extends JwtPayload {
  id: number;
  role: string;
}
export function signToken(user: any) {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '1d' },
  );
}

export const verifyToken = (token: string): CustomJwtPayload | null => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as CustomJwtPayload;
  } catch {
    return null;
  }
};
