import {
  AREA_SERVED,
  BRAND_DESC,
  BRAND_LOGO,
  CONTACT_POINT,
  KNOWS,
  NAME,
  ORGANIZATION_ID,
  PERSON,
  SITE_URL,
  SOCIAL_LINKS,
  LOCAL_ADDRESS,
} from './config';

import { OrganizationSchema } from './types';

export function generateOrganization(): OrganizationSchema {
  return {
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],

    '@id': ORGANIZATION_ID,

    url: SITE_URL,

    name: NAME,

    description: BRAND_DESC,

    inLanguage: 'en-IN',

    logo: BRAND_LOGO,

    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og/brand.jpg`,
    },

    founder: PERSON,

    email: 'hello@voidmatrixtech.com',

    telephone: '+91-9321446746',

    address: LOCAL_ADDRESS,

    areaServed: AREA_SERVED,

    contactPoint: CONTACT_POINT,

    knowsAbout: KNOWS,

    sameAs: SOCIAL_LINKS,

    keywords: [
      // Mumbai-specific
      'Custom Software Development Company Mumbai',
      'Next.js Development Agency Mumbai',
      'Web Application Development Mumbai',
      'SaaS Platform Development Mumbai',
      'IT Company in Mumbai',
      'Startup Tech Partner Mumbai',
      'Website Development Company Mumbai',
      'Website Design and Development Mumbai',
      'Digital Marketing Agency Mumbai',
      'SEO Services Mumbai',
      'SEO Company in Mumbai',
      'Local SEO Mumbai',

      // India-wide
      'Custom Software Development India',
      'Next.js Development Company India',
      'SaaS Product Development India',
      'Enterprise Web Application Development India',
      'Technical SEO Services India',
      'Cloud Architecture Consulting India',
      'React Next.js Agency India',
      'Offshore Software Development India',
      'Website Development Company India',
      'Affordable Website Development India',
      'Digital Marketing Company India',
      'SEO Agency India',
      'Search Engine Optimization India',
      'Social Media Marketing India',
      //High-intent / service-specific
      'Hire Next.js Developer India',
      'B2B SaaS Development India',
      'MVP Development Agency India',
      'Full Stack Development Company Mumbai',
      'Node.js React Development India',
      'Digital Transformation Company Mumbai',
      'AWS GCP Cloud Solutions India',
      'Enterprise Software Outsourcing India',
      'Business Website Development Mumbai',
      'E-Commerce Website Development Mumbai',
      'WordPress Website Development India',
      'Google SEO Ranking Services India',
      'PPC and SEO Services Mumbai',
      'Online Marketing Agency Mumbai',
    ],

    slogan: 'Architecture-Driven Digital Product Engineering',
  };
}
