import { BaseSchema } from './base';
import { SITE_URL, ORGANIZATION_ID, WEBSITE_ID, AREA_SERVED } from './config';

export interface ServiceSchema extends BaseSchema {
  '@type': 'Service';
  name: string;
  description: string;
  serviceType: string;
  url: string;
  provider: {
    '@type': 'Organization';
    '@id': string;
  };
  isPartOf: {
    '@type': 'WebSite';
    '@id': string;
  };
  hasPart: {
    '@id': string;
  };
  areaServed: {};
}

export function generateService(
  name: string,
  slug: string,
  serviceType: string,
  description: string,
): ServiceSchema {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${slug}/#service`,
    name,
    description,
    serviceType,
    url: `${SITE_URL}/services/${slug}`,
    provider: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
    },
    hasPart: {
      '@id': `${SITE_URL}/services/${slug}/#faq`,
    },
    areaServed: AREA_SERVED,
  };
}
