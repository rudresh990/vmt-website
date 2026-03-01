import { BaseSchema } from './base';
import { SITE_URL, NAME, AREA_SERVED } from './config';

export interface ProfessionalServiceSchema extends BaseSchema {
  '@type': 'Organization';
  name: string;
  url: string;
  areaServed: {};
  priceRange: string;
}

export function generateProfessionalService(): ProfessionalServiceSchema {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#softwarecompany`,
    name: NAME,
    url: SITE_URL,
    areaServed: AREA_SERVED,
    priceRange: '₹75,000 - ₹25,00,000+',
  };
}
