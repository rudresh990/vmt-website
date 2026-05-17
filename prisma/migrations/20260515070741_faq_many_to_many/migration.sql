/*
  Warnings:

  - You are about to drop the column `blogId` on the `FAQ` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FAQ" DROP COLUMN "blogId";

-- CreateIndex
CREATE INDEX "BlogFAQ_blogId_idx" ON "BlogFAQ"("blogId");

-- CreateIndex
CREATE INDEX "BlogFAQ_faqId_idx" ON "BlogFAQ"("faqId");
