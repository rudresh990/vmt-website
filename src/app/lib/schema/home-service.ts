import { BaseSchema } from './base';
import { AREA_SERVED, ORGANIZATION_ID, SITE_URL } from './config';

export interface ServiceSchema extends BaseSchema {
  '@type': 'Service';
  name: string;
  serviceType?: string;
  description: string;
  provider: {
    '@id': string;
  };
  areaServed: {};
  offers: {
    '@type': 'Offer';
    priceCurrency: string;
    priceRange: string;
    availability: string;
  };
}

export function generateHomePrimaryService(): ServiceSchema {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}/#custom-software-service`,
    name: 'Custom Software Development',
    serviceType: 'Custom Software Development Company in India',
    description:
      'Architecture-driven custom software development services in India including SaaS platforms, enterprise systems, eCommerce applications, and scalable business websites.',
    provider: {
      '@id': 'https://www.voidmatrixtech.com/#softwarecompany',
    },
    areaServed: AREA_SERVED,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      priceRange: '₹3,00,000 - ₹25,00,000+',
      availability: 'https://schema.org/InStock',
    },
  };
}
