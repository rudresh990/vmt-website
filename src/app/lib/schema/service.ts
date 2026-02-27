import { BaseSchema } from './base';
import { SITE_URL, ORGANIZATION_ID, AREA_SERVED } from './config';

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
    areaServed: AREA_SERVED,
  };
}
