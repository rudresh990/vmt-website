import { BaseSchema } from './base';
import { SITE_URL, WEBSITE_ID, ORGANIZATION_ID } from './config';
export interface WebPageSchema extends BaseSchema {
  '@type': 'WebPage';
  '@id': string;
  url: string;
  name: string;
  description?: string;
  isPartOf: {
    '@id': string;
  };
  about?: {
    '@id': string;
  };
}

export function generateGlobalWebpage(pathname: string, description?: string): WebPageSchema {
  const isServicePage = /^\/services(\/|$)/.test(pathname);
  const path = pathname === '/' ? '' : pathname.replace(/\/+$/, '');
  const url = `${SITE_URL}${path}`;
  const slug = path.split('/').pop() || '';
  const name = slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) || 'HOME';
  const aboutId = isServicePage ? `${url}/#service` : ORGANIZATION_ID;
  description = description === undefined ? 'Void Matrix Technology' : description;
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    name,
    url,
    description,
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': aboutId,
    },
  };
}
