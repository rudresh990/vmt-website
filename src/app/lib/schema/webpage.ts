import { BaseSchema } from './base';
import { SITE_URL, WEBSITE_ID } from './config';

export interface WebPageSchema extends BaseSchema {
  '@type': 'WebPage';
  '@id': string;
  url: string;
  name: string;
  isPartOf: {
    '@id': string;
  };
  about: {
    '@id': string;
  };
}

export function generateWebPage(name: string, slug: string): WebPageSchema {
  const url = `${SITE_URL}/services/${slug}`;

  return {
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    name,
    url,
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': `${SITE_URL}/services/${slug}/#service`,
    },
  };
}
