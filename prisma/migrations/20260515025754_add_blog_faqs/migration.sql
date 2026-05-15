-- AlterTable
ALTER TABLE "Tag" ALTER COLUMN "status" SET DEFAULT 'APPROVED';

-- CreateTable
CREATE TABLE "FAQ" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "blogId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FAQ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogFAQ" (
    "id" SERIAL NOT NULL,
    "blogId" INTEGER NOT NULL,
    "faqId" INTEGER NOT NULL,

    CONSTRAINT "BlogFAQ_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BlogFAQ_blogId_faqId_key" ON "BlogFAQ"("blogId", "faqId");

-- AddForeignKey
ALTER TABLE "BlogFAQ" ADD CONSTRAINT "BlogFAQ_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogFAQ" ADD CONSTRAINT "BlogFAQ_faqId_fkey" FOREIGN KEY ("faqId") REFERENCES "FAQ"("id") ON DELETE CASCADE ON UPDATE CASCADE;
