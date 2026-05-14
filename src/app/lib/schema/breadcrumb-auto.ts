import { BreadcrumbSchema } from './types';
import { buildSchemaUrl, normalizePath } from './utils/utils';

export function generateAutoBreadcrumb(pathname: string): BreadcrumbSchema {
  if (!pathname || pathname === '/') {
    throw new Error('Breadcrumb should not be generated for homepage');
  }

  const pageUrl = buildSchemaUrl(pathname);

  const cleanPath = normalizePath(pathname).replace(/^\/+/, '');

  const segments = cleanPath ? cleanPath.split('/') : [];

  const items = [
    {
      name: 'Home',
      url: buildSchemaUrl('/'),
    },
  ];

  let currentPath = '';

  segments.forEach((segmentItem) => {
    currentPath += `/${segmentItem}`;

    const formattedName = segmentItem
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());

    items.push({
      name: formattedName,
      url: buildSchemaUrl(currentPath),
    });
  });

  return {
    '@type': 'BreadcrumbList',

    '@id': `${pageUrl}#breadcrumb`,

    name: 'Breadcrumbs',

    inLanguage: 'en-IN',

    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',

      position: index + 1,

      name: item.name,

      item: {
        '@id': item.url,
      },
    })),
  };
}
