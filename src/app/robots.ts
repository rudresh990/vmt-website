import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers on all public pages
        userAgent: '*',
        allow: '/',
        // Block pages that should never be indexed — saves crawl budget
        disallow: [
          '/api/', // internal API routes — never expose to crawlers
          '/admin/', // admin dashboard if it exists
          '/_next/', // Next.js internals — Googlebot already skips these but be explicit
          '/tag/', // thin aggregation pages (noindex at page level too — belt & suspenders)
          '/privacy', // legal pages — no ranking value
          '/cookies',
          '/disclaimer',
          '/accessibility',
          '/security',
        ],
      },
    ],
    sitemap: 'https://www.voidmatrixtech.com/sitemap.xml',
  };
}
