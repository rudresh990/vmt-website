import type { MetadataRoute } from 'next';
import { serviceData } from '@/app/lib/schema/data/services_data';
import prisma from '../../lib/prisma';

export const revalidate = 86400; // 24 hours

const BASE_URL = 'https://www.voidmatrixtech.com';

// ─────────────────────────────────────────────
// THRESHOLDS
// ─────────────────────────────────────────────
const MIN_BLOGS_PER_TAG = 3;
const MIN_BLOGS_PER_CATEGORY = 3;

// How many days since publish before a blog is considered "stable"
// Stable posts get lower changeFrequency → saves crawl budget for fresh content
const STABLE_POST_DAYS = 60;

const SITEMAP_URL_LIMIT = 50_000;

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

/** Returns 'weekly' for posts updated in the last STABLE_POST_DAYS, else 'monthly' */
function blogChangeFreq(updatedAt: Date | null, publishedAt: Date | null): 'weekly' | 'monthly' {
  const ref = updatedAt ?? publishedAt;
  if (!ref) return 'monthly';
  const ageMs = Date.now() - ref.getTime();
  return ageMs < STABLE_POST_DAYS * 24 * 60 * 60 * 1000 ? 'weekly' : 'monthly';
}

/** Real last-modified: prefers updatedAt → publishedAt → createdAt → fallback date */
function blogLastMod(updatedAt: Date | null, publishedAt: Date | null): Date {
  return updatedAt ?? publishedAt ?? new Date('2024-01-01');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ─────────────────────────────────────────────
  // 1. STATIC CORE PAGES
  //    — Legal/utility pages deliberately excluded:
  //      /privacy, /cookies, /disclaimer, /accessibility, /security
  //      These should carry <meta name="robots" content="noindex"> at the page level.
  //      Including them wastes crawl budget on zero-ranking-value pages.
  // ─────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date('2026-06-14'), // update manually on major homepage changes
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date('2026-06-14'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/software-development-cost-estimator`,
      lastModified: new Date('2026-06-14'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/platforms`,
      lastModified: new Date('2026-06-14'),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/company`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date('2026-04-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // ─────────────────────────────────────────────
  // 2. SERVICE PAGES
  //    High priority — these are the money pages.
  //    Pull real lastModified from DB if possible; fall back to a known date.
  // ─────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = Object.keys(serviceData).map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date('2026-06-14'), // update when you ship service page edits
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // ─────────────────────────────────────────────
  // 3. BLOG PAGES
  //    — Only PUBLISHED posts
  //    — lastModified uses real updatedAt/publishedAt (not `now`)
  //    — changeFrequency is dynamic: recent = weekly, old = monthly
  //    — Priority 0.8 for posts < 60 days old, 0.7 for stable posts
  //      (signals to Google which posts deserve faster re-crawling)
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

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog) => {
    const freq = blogChangeFreq(blog.updatedAt, blog.publishedAt);
    return {
      url: `${BASE_URL}/blog/${blog.slug}`,
      lastModified: blogLastMod(blog.updatedAt, blog.publishedAt),
      changeFrequency: freq,
      priority: freq === 'weekly' ? 0.8 : 0.7,
    };
  });

  // ─────────────────────────────────────────────
  // 4. TAG PAGES
  //    — Excluded from sitemap entirely.
  //
  //    WHY: Tag pages are near-duplicate index pages with thin content.
  //    Even with MIN_BLOGS_PER_TAG, Google treats them as low-quality
  //    and they drain crawl budget away from your real pages.
  //
  //    ACTION REQUIRED at the page level:
  //    In your /tag/[slug]/page.tsx, add this to the generateMetadata export:
  //
  //      export const metadata: Metadata = {
  //        robots: { index: false, follow: true },
  //      };
  //
  //    This tells Google: "don't index this, but do follow its links."
  //    Your blog posts still get crawled via tag pages; tag pages just
  //    stop eating crawl budget and diluting topical authority.
  // ─────────────────────────────────────────────

  // ─────────────────────────────────────────────
  // 6. COMBINE — priority order matters for crawl budget
  //    Google crawls the top of the sitemap first.
  //    Order: homepage → services → cost estimator → blogs → categories
  //    (tag pages removed entirely — see section 4)
  // ─────────────────────────────────────────────
  const allPages = [
    ...staticPages, // core pages first — highest value
    ...servicePages, // money pages second
    ...blogPages, // content pages third (newest first from DB query)
    // tagPages: intentionally omitted
    // legalPages: intentionally omitted
  ];

  const uniquePages = Array.from(new Map(allPages.map((item) => [item.url, item])).values());

  if (uniquePages.length > SITEMAP_URL_LIMIT) {
    console.warn(
      `[sitemap] ⚠️  URL count (${uniquePages.length}) exceeds Google's ${SITEMAP_URL_LIMIT} limit. ` +
        `Split into multiple sitemaps using a sitemap index file.`,
    );
  }

  return uniquePages.slice(0, SITEMAP_URL_LIMIT);
}
