import type { MetadataRoute } from 'next';
import { serviceData } from '@/app/lib/schema/data/services_data';
import prisma from '../../lib/prisma';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

const BASE_URL = 'https://www.voidmatrixtech.com';

// ─────────────────────────────────────────────
// THRESHOLDS  (tune without touching logic)
// ─────────────────────────────────────────────
const MIN_BLOGS_PER_TAG = 3; // tags with fewer blogs → excluded (thin content)
const MIN_BLOGS_PER_CATEGORY = 3; // categories with fewer blogs → excluded

// Google's hard limit per sitemap file
const SITEMAP_URL_LIMIT = 50_000;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ─────────────────────────────────────────────
  // 1. STATIC PAGES
  // ─────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/software-development-cost-estimator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/platforms`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/company`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Legal – low priority, rarely changes
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/security`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/accessibility`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // ─────────────────────────────────────────────
  // 2. SERVICE PAGES
  // ─────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = Object.keys(serviceData).map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // ─────────────────────────────────────────────
  // 3. BLOG PAGES  (published only, newest first)
  // ─────────────────────────────────────────────
  const blogs = await prisma.blog.findMany({
    where: { status: 'PUBLISHED' },
    select: {
      slug: true,
      updatedAt: true,
      publishedAt: true,
    },
    orderBy: { publishedAt: 'desc' },
  });

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    // Prefer updatedAt (re-edits matter to Google) → fall back to publishedAt → now
    lastModified: blog.updatedAt ?? blog.publishedAt ?? now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ─────────────────────────────────────────────
  // 4. TAG PAGES
  //    FIX: Tag has no `updatedAt` in schema → always use `now`
  //    RULE: Only index tags with MIN_BLOGS_PER_TAG+ published blogs (avoid thin content)
  // ─────────────────────────────────────────────
  const tags = await prisma.tag.findMany({
    where: { status: 'APPROVED' },
    select: {
      slug: true,
      _count: {
        select: {
          // Count only published blogs via the join table
          blogs: {
            where: {
              blog: { status: 'PUBLISHED' },
            },
          },
        },
      },
    },
  });

  const tagPages: MetadataRoute.Sitemap = tags
    .filter((tag) => tag._count.blogs >= MIN_BLOGS_PER_TAG)
    .map((tag) => ({
      url: `${BASE_URL}/tag/${tag.slug}`,
      lastModified: now, // Tag model has no updatedAt — this is intentional
      changeFrequency: 'weekly' as const,
      priority: 0.5,
    }));

  // ─────────────────────────────────────────────
  // 5. CATEGORY PAGES
  //    RULE: Only index categories with MIN_BLOGS_PER_CATEGORY+ published blogs
  // ─────────────────────────────────────────────
  const categories = await prisma.category.findMany({
    where: { status: 'APPROVED' },
    select: {
      slug: true,
      _count: {
        select: {
          blogs: {
            where: { status: 'PUBLISHED' },
          },
        },
      },
    },
  });

  const categoryPages: MetadataRoute.Sitemap = categories
    .filter((category) => category._count.blogs >= MIN_BLOGS_PER_CATEGORY)
    .map((category) => ({
      url: `${BASE_URL}/category/${category.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.65,
    }));

  // ─────────────────────────────────────────────
  // 6. COMBINE, DEDUPLICATE, ENFORCE LIMIT
  // ─────────────────────────────────────────────
  const allPages = [...staticPages, ...servicePages, ...blogPages, ...tagPages, ...categoryPages];

  const uniquePages = Array.from(new Map(allPages.map((item) => [item.url, item])).values());

  // Warn in build logs if approaching Google's limit
  if (uniquePages.length > SITEMAP_URL_LIMIT) {
    console.warn(
      `[sitemap] ⚠️  URL count (${uniquePages.length}) exceeds Google's ${SITEMAP_URL_LIMIT} limit. ` +
        `Split into multiple sitemaps using a sitemap index file.`,
    );
  }

  return uniquePages.slice(0, SITEMAP_URL_LIMIT);
}
