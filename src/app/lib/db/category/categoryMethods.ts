import { CatAndTagStatus } from '@/app/generated/prisma/enums';
import prisma from '../../../../../lib/prisma';
export async function getCategories(options?: { status?: CatAndTagStatus }) {
  return prisma.category.findMany({
    where: {
      status: options?.status,
    },
  });
}
