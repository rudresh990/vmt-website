import {
  AreaServed,
  ContactPoint,
  ImageObject,
  Person,
  Address,
  potentialAction,
  Offer,
} from './types';

export const SITE_URL = 'https://www.voidmatrixtech.com';

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const FOUNDER_ID = `${SITE_URL}/#rudresh`;

export const WEBSITE_ID = `${SITE_URL}/#website`;

export const COLLECTION_ID = `${SITE_URL}/#Collection`;

export const NAME = 'Void Matrix Technology';

export const LEGAL_NAME = 'Void Matrix Technology';

export const BRAND_DESC =
  'Void Matrix Technology is a custom software development company in India building scalable SaaS platforms, enterprise applications, eCommerce systems, and architecture-driven digital products.';

export const BRAND_LOGO = {
  '@type': 'ImageObject',
  url: `${SITE_URL}/logo.png`,
} satisfies ImageObject;

export const CONTACT_POINT = {
  '@type': 'ContactPoint',
  contactType: 'customer support',
  email: 'hello@voidmatrixtech.com',
} satisfies ContactPoint;

export const AREA_SERVED = [{ '@type': 'Country', name: 'India' }] satisfies AreaServed[];

export interface FAQItem {
  q: string;
  a: string;
}

export const SOCIAL_LINKS = [
  'https://www.linkedin.com/company/void-matrix-technology/',
  'https://www.instagram.com/voidmatrixtechnology/',
  'https://www.google.com/maps/place/Void+Matrix+Technology/@19.7166261,60.9008933,4z/data=!3m1!4b1!4m6!3m5!1s0x6748f280e363b759:0x9aad3b06c1d6ee60!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11y_zh07q4',
];

export const PERSON = {
  '@type': 'Person',
  '@id': FOUNDER_ID,
  name: 'Rudresh Shrivastav',
} satisfies Person;

export const KNOWS = [
  'Custom Software Development',
  'SaaS Platform Development',
  'Enterprise Application Development',
  'Web Application Development',
  'Next.js',
  'React',
  'Cloud Architecture',
];

export const LOCAL_ADDRESS: Address = {
  '@type': 'PostalAddress',
  addressLocality: 'Mumbai',
  addressRegion: 'Maharashtra',
  addressCountry: 'IN',
};

export const POTENTIAL_ACTION: potentialAction = {
  '@type': 'SearchAction',
  target: 'https://www.voidmatrixtech.com/contact?q={search_term_string}',
  'query-input': 'required name=search_term_string',
};

export const OFFER: Offer = {
  '@type': 'Offer',
  priceCurrency: 'INR',
  priceSpecification: {
    '@type': 'PriceSpecification',
    priceCurrency: 'INR',
    minPrice: 300000,
    maxPrice: 2500000,
  },
};
