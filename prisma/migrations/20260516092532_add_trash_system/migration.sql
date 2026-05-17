-- AlterEnum
ALTER TYPE "Status" ADD VALUE 'TRASH';

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "deletedAt" TIMESTAMP(3);
