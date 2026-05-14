import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from './config';

import { buildSchemaUrl } from './utils/utils';

interface ServiceCollectionItem {
  name: string;
  slug: string;
}

export function generateServiceCollectionPage(services: ServiceCollectionItem[]) {
  const pageUrl = buildSchemaUrl('/services');

  return {
    '@type': 'CollectionPage',

    '@id': `${pageUrl}#collection-page`,

    url: pageUrl,

    name: 'Software Development Services',

    description:
      'Explore our professional software development, SaaS, SEO, platform engineering, and web application services for startups and enterprises.',

    inLanguage: 'en-IN',

    isPartOf: {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
    },

    about: {
      '@id': ORGANIZATION_ID,
    },

    hasPart: services.map((service) => ({
      '@id': `${SITE_URL}/services/${service.slug}#service`,
    })),

    mainEntity: {
      '@type': 'ItemList',

      '@id': `${pageUrl}#services-list`,

      numberOfItems: services.length,

      itemListOrder: 'https://schema.org/ItemListOrderAscending',

      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',

        position: index + 1,

        name: service.name,

        url: `${SITE_URL}/services/${service.slug}`,

        item: {
          '@id': `${SITE_URL}/services/${service.slug}#service`,
        },
      })),
    },
  };
}
