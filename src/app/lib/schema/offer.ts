import { AREA_SERVED, ORGANIZATION_ID } from './config';

import { buildSchemaUrl } from './utils/utils';

interface OfferOptions {
  name?: string;
  description?: string;
  isOngoing?: boolean;
  category?: string;
}

export function generateOffer(
  pathname: string,
  minPrice: number,
  maxPrice: number,
  options?: OfferOptions,
) {
  const pageUrl = buildSchemaUrl(pathname);

  return {
    '@type': 'Offer',

    '@id': `${pageUrl}#offer`,

    url: pageUrl,

    name: options?.name ?? 'Professional Software & Digital Services',

    description:
      options?.description ??
      'Competitive pricing for custom software development, website development, SaaS platforms, SEO, and digital marketing services.',

    inLanguage: 'en-IN',

    category: options?.category ?? 'Software Development & Digital Marketing Services',

    priceCurrency: 'INR',

    businessFunction: options?.isOngoing
      ? 'https://purl.org/goodrelations/v1#ProvideService'
      : 'https://purl.org/goodrelations/v1#Sell',

    availability: 'https://schema.org/InStock',

    seller: {
      '@id': ORGANIZATION_ID,
    },

    itemOffered: {
      '@id': `${pageUrl}#service`,
    },

    eligibleRegion: [
      {
        '@type': 'Country',
        name: 'India',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Maharashtra',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Mumbai',
      },
    ],

    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Startups, SMEs, and Enterprises',
    },

    areaServed: AREA_SERVED,

    priceSpecification: {
      '@type': 'PriceSpecification',

      priceCurrency: 'INR',

      minPrice,

      maxPrice,

      valueAddedTaxIncluded: false,
    },
  };
}
