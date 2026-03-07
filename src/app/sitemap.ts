import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.voidmatrixtech.com';
  const lastModified = new Date();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Services Hub
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Core Service Pages
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
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/enterprise-software-development`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/platform-engineering`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/api-integration`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // Tools / Lead Generation
    {
      url: `${baseUrl}/software-development-cost-estimator`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Platform Pages
    {
      url: `${baseUrl}/platforms`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // Company Pages
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
      priority: 0.8,
    },

    // Legal Pages
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
