import { SITE_URL } from './config';

export function generateOffer(
  pathname: string,
  minPrice?: number,
  maxPrice?: number,
  currency: string = 'INR',
) {
  const path = pathname === '/' ? '' : pathname.replace(/\/+$/, '');
  const url = `${SITE_URL}${path}`;
  return {
    '@type': 'Offer',
    '@id': `${url}/#offer`,
    priceCurrency: currency,
    ...(minPrice !== undefined &&
      maxPrice !== undefined && {
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: currency,
          minPrice,
          maxPrice,
        },
      }),
    availability: 'https://schema.org/InStock',
  };
}
