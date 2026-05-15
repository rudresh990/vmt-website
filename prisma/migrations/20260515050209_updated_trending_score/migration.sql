-- DropIndex
DROP INDEX "Blog_trendingScore_idx";

-- CreateIndex
CREATE INDEX "Blog_trendingScore_idx" ON "Blog"("trendingScore" DESC);
