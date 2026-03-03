import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.voidmatrixtech.com';
  const lastModified = new Date('2026-03-03');

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Core Services Hub
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Primary Ranking Page (Very Important)
    {
      url: `${baseUrl}/services/website-development`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },

    {
      url: `${baseUrl}/services/custom-software-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    {
      url: `${baseUrl}/software-development-cost-estimator`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    {
      url: `${baseUrl}/platforms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    {
      url: `${baseUrl}/company`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Legal
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/security`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
