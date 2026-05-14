import { SITE_URL, FAQItem } from './config';

function normalizeSlug(slug: string) {
  return slug.endsWith('/') ? slug : `${slug}/`;
}

export function generateFAQPage(slug: string, faqs: FAQItem[]) {
  const normalizedSlug = normalizeSlug(slug);

  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/${normalizedSlug}#faq`,
    name: `${normalizedSlug}FAQs`,
    isPartOf: {
      '@id': `${SITE_URL}/${normalizedSlug}#webpage`,
    },
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}
