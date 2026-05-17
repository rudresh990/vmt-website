import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from './config';
import { buildSchemaUrl } from './utils/utils';

export function generateGlobalWebpage(
  pathname: string,
  description?: string,
  mainEntityId?: string,
  hasFAQ?: boolean,
  dateModified?: string,
) {
  const pageUrl = buildSchemaUrl(pathname);

  const slug =
    pathname === '/'
      ? 'Home'
      : pathname
          .split('/')
          .filter(Boolean)
          .pop()
          ?.replace(/-/g, ' ')
          .replace(/\b\w/g, (char) => char.toUpperCase()) || 'Page';

  const isHomepage = pathname === '/';

  const isServicesCollection = pathname === '/services';

  return {
    '@type': 'WebPage',

    '@id': `${pageUrl}#webpage`,

    url: pageUrl,

    name: slug,

    description,

    inLanguage: 'en-IN',

    isPartOf: {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
    },

    ...(hasFAQ && {
      hasPart: [
        {
          '@id': `${pageUrl}#faq`,
        },
      ],
    }),

    ...(dateModified && {
      dateModified,
    }),

    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/og/default.jpg`,
    },

    potentialAction: {
      '@type': 'ContactAction',
      target: `${SITE_URL}/contact`,
    },

    ...(!isHomepage && {
      breadcrumb: {
        '@id': `${pageUrl}#breadcrumb`,
      },
    }),

    /*
    |--------------------------------------------------------------------------
    | Dynamic Main Entity
    |--------------------------------------------------------------------------
    */

    ...(mainEntityId && {
      about: {
        '@id': mainEntityId,
      },

      mainEntity: {
        '@id': mainEntityId,
      },
    }),

    /*
    |--------------------------------------------------------------------------
    | Services Collection Override
    |--------------------------------------------------------------------------
    */

    ...(isServicesCollection && {
      about: {
        '@id': ORGANIZATION_ID,
      },

      mainEntity: {
        '@id': `${pageUrl}#collection-page`,
      },
    }),
  };
}
