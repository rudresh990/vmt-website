import prisma from '../../../../../lib/prisma';
import { CatAndTagStatus } from '@/app/generated/prisma/enums';

export async function getTags(options?: { status?: CatAndTagStatus }) {
  return prisma.tag.findMany({
    where: {
      status: options?.status,
    },
  });
}
