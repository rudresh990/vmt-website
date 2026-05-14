import {
  BRAND_DESC,
  NAME,
  ORGANIZATION_ID,
  // POTENTIAL_ACTION,
  SITE_URL,
  WEBSITE_ID,
} from './config';

import { WebsiteSchema } from './types';

export function generateWebSite(): WebsiteSchema {
  return {
    '@type': 'WebSite',

    '@id': WEBSITE_ID,

    url: SITE_URL,

    name: NAME,

    alternateName: 'VMT',

    description: BRAND_DESC,

    inLanguage: 'en-IN',

    about: {
      '@id': ORGANIZATION_ID,
    },

    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
    },

    copyrightHolder: {
      '@id': ORGANIZATION_ID,
    },

    // potentialAction: POTENTIAL_ACTION, //only needed when there is actuall search bar

    keywords: [
      // Core Services
      'Custom Software Development',
      'Next.js Development',
      'SaaS Development',
      'Web Application Development',
      'Website Development',
      'E-Commerce Website Development',
      'WordPress Website Development',
      'Technical SEO',
      'Digital Marketing',
      'Search Engine Optimization',
      'Local SEO',
      'PPC Services',
      'Social Media Marketing',
      'Cloud Architecture',
      'Enterprise Software Development',
      'MVP Development',
      'Full Stack Development',

      // Mumbai Geo-targeted
      'Custom Software Development Company Mumbai',
      'Website Development Company Mumbai',
      'Digital Marketing Agency Mumbai',
      'SEO Company Mumbai',
      'IT Company Mumbai',
      'Web Application Development Mumbai',
      'SaaS Platform Development Mumbai',
      'Full Stack Development Company Mumbai',
      'Online Marketing Agency Mumbai',
      'Local SEO Mumbai',

      // India-wide
      'Software Development Company India',
      'Website Development Company India',
      'Next.js Development Company India',
      'SaaS Product Development India',
      'Offshore Software Development India',
      'Digital Marketing Company India',
      'SEO Agency India',
      'Technical SEO Services India',
      'Cloud Architecture Consulting India',
      'Enterprise Web Application Development India',
      'MVP Development Agency India',
      'Hire Next.js Developer India',
      'B2B SaaS Development India',
      'Google SEO Ranking Services India',
    ],
  };
}
