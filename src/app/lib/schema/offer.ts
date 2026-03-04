import { SITE_URL } from './config';

export function generateOffer(slug: string, minPrice: number, maxPrice: number, currency = 'INR') {
  return {
    '@type': 'Offer',
    '@id': `${SITE_URL}/services/${slug}/#offer`,
    priceCurrency: currency,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: currency,
      minPrice,
      maxPrice,
    },
    availability: 'https://schema.org/InStock',
  };
}
