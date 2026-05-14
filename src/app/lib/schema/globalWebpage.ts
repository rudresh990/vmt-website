import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from './config';
import { buildSchemaUrl } from './utils/utils';

export function generateGlobalWebpage(
  pathname: string,
  description?: string,
  dateModified?: string,
  hasFAQ?: boolean,
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

    // SERVICE PAGES
    ...(!isHomepage &&
      !isServicesCollection && {
        about: {
          '@id': `${pageUrl}#service`,
        },

        mainEntity: {
          '@id': `${pageUrl}#service`,
        },
      }),

    // SERVICES COLLECTION PAGE
    ...(isServicesCollection && {
      about: {
        '@id': `${ORGANIZATION_ID}`,
      },

      mainEntity: {
        '@id': `${pageUrl}#collection-page`,
      },
    }),
  };
}
