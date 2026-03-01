import { BaseSchema } from './base';
import { SITE_URL, WEBSITE_ID } from './config';

export interface WebPageSchema extends BaseSchema {
  '@type': 'WebPage';
  name: string;
  url: string;
  description: string;
  isPartOf: {
    '@id': string;
  };
}

export function generateHomeWebPage(): WebPageSchema {
  return {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    name: 'Custom Software Development Company in India | Void Matrix Technology',
    url: SITE_URL,
    description:
      'Void Matrix Technology is a custom software development company in India building scalable SaaS platforms, enterprise systems, eCommerce applications, and business websites.',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
  };
}
