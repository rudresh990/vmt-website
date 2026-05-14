import { BaseSchema } from './base';
import { SITE_URL, ORGANIZATION_ID, AREA_SERVED } from './config';

export interface ServiceSchema extends BaseSchema {
  '@type': 'Service';
  name: string;
  description: string;
  serviceType: string;
  url: string;

  provider: {
    '@id': string;
  };

  offers?: any;

  areaServed: {};

  inLanguage: string;

  mainEntityOfPage: {
    '@type': 'WebPage';
    '@id': string;
  };
}

export function generateService(
  pathname: string,
  description: string,
  serviceType?: string,
  offer?: any,
): ServiceSchema {
  const path = pathname === '/' ? '' : pathname.replace(/\/$/, '');

  const url = `${SITE_URL}${path}`;

  const slug = path.split('/').pop() || '';

  const name = slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    '@type': 'Service',

    '@id': `${url}#service`,

    name,

    description,

    serviceType: name,

    url,

    inLanguage: 'en-IN',

    provider: {
      '@id': ORGANIZATION_ID,
    },

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
    },

    ...(offer && { offers: offer }),

    areaServed: AREA_SERVED,
  };
}
