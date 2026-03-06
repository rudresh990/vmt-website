import { BaseSchema } from './base';
import { SITE_URL, ORGANIZATION_ID, AREA_SERVED, NAME } from './config';

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
  offers?: any;
  areaServed: {};
}

export function generateService(
  pathname: string,
  description: string,
  serviceType?: string,
  offer?: any,
): ServiceSchema {
  const path = pathname === '/' ? '' : pathname.replace(/\+$/, '');
  const url = `${SITE_URL}${path}`;
  console.log(url);
  const slug = path.split('/').pop() || '';
  const name = slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    '@type': 'Service',
    '@id': `${url}/#service`,
    name,
    description,
    serviceType: serviceType || name,
    url,
    provider: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: NAME,
    },
    mainEntityOfPage: {
      '@id': `${url}/#webpage`,
    },
    ...(offer && { offers: offer }),
    areaServed: AREA_SERVED,
  };
}
