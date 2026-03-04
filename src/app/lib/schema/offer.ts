import { SITE_URL } from './config';

export function generateOffer(slug: string, lowPrice: number, highPrice: number, currency = 'INR') {
  return {
    '@type': 'Offer',
    '@id': `${SITE_URL}/services/${slug}/#offer`,
    priceCurrency: currency,
    priceSpecification: {
      '@type': 'PriceSpecification',
      priceCurrency: currency,
      lowPrice,
      highPrice,
    },
    availability: 'https://schema.org/InStock',
  };
}
