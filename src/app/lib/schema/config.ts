import { AreaServed, ContactPoint, ImageObject, Person } from './types';

export const SITE_URL = 'https://voidmatrixtech.com';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const FOUNDER_ID = `${SITE_URL}/#rudresh`;

export const WEBSITE_ID = `${SITE_URL}/#website`;

export const COLLECTION_ID = `${SITE_URL}/#Collection`;

export const NAME = 'Void Matrix Technology';

export const LEGAL_NAME = 'Void Matrix Technology';

export const BRAND_DESC =
  'Void Matrix Technology is a modern technology company specializing in SEO, website development, and high-performance web application solutions. We build scalable digital products using Next.js, React, AI, and cloud technologies to help businesses grow online.';

export const BRAND_LOGO = {
  '@type': 'ImageObject',
  url: `${SITE_URL}/logo.png`,
} satisfies ImageObject;

export const CONTACT_POINT = {
  '@type': 'ContactPoint',
  contactType: 'customer support',
  email: 'hello@voidmatrixtech.com',
} satisfies ContactPoint;

export const AREA_SERVED = [
  { '@type': 'City', name: 'Mumbai' },
  { '@type': 'City', name: 'Pune' },
  { '@type': 'City', name: 'Bangalore' },
  { '@type': 'City', name: 'Delhi' },
  { '@type': 'AdministrativeArea', name: 'Maharastra' },
  { '@type': 'Country', name: 'India' },
  { '@type': 'Place', name: 'Worldwide' },
] satisfies AreaServed[];

export const SOCIAL_LINKS = [
  'https://www.linkedin.com/company/void-matrix-technology/',
  'https://www.instagram.com/voidmatrixtechnology/',
];

export const PERSON = {
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Rudresh Shrivastav',
} satisfies Person;

export const KNOWS = [
  'Web Development',
  'SEO',
  'Next.js',
  'React',
  'Custom Software',
  'AI Solutions',
];
