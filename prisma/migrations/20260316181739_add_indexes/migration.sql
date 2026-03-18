-- CreateIndex
CREATE INDEX "Blog_status_idx" ON "Blog"("status");

-- CreateIndex
CREATE INDEX "Blog_publishedAt_idx" ON "Blog"("publishedAt");

-- CreateIndex
CREATE INDEX "Blog_trendingScore_idx" ON "Blog"("trendingScore");

-- CreateIndex
CREATE INDEX "BlogTag_blogId_idx" ON "BlogTag"("blogId");

-- CreateIndex
CREATE INDEX "BlogTag_tagId_idx" ON "BlogTag"("tagId");

-- CreateIndex
CREATE INDEX "BlogView_blogId_idx" ON "BlogView"("blogId");

-- CreateIndex
CREATE INDEX "BlogView_createdAt_idx" ON "BlogView"("createdAt");

-- CreateIndex
CREATE INDEX "Category_status_idx" ON "Category"("status");

-- CreateIndex
CREATE INDEX "Tag_status_idx" ON "Tag"("status");
