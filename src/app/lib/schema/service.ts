import { BaseSchema } from './base';
import { SITE_URL, ORGANIZATION_ID, AREA_SERVED, OFFER, WEBSITE_ID } from './config';
import { Offer } from './types';

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
  offers: Offer;
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
    offers: OFFER,
    areaServed: AREA_SERVED,
  };
}
