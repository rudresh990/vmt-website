import { SITE_URL } from './config';

export function generateOffer(
  pathname: string,
  lowPrice?: number,
  highPrice?: number,
  currency: string = 'INR',
) {
  const path = pathname === '/' ? '' : pathname.replace(/\/+$/, '');
  const url = `${SITE_URL}${path}`;
  return {
    '@type': 'Offer',
    '@id': `${url}/#offer`,
    priceCurrency: currency,
    ...(lowPrice !== undefined &&
      highPrice !== undefined && {
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: currency,
          lowPrice,
          highPrice,
        },
      }),
    availability: 'https://schema.org/InStock',
  };
}
