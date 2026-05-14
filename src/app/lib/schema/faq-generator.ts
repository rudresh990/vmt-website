import { FAQItem } from './config';
import { buildSchemaUrl } from './utils/utils';

interface FAQPageInput {
  slug: string;
  title: string;
  faqs: FAQItem[];
}

export function generateFAQPage({ slug, title, faqs }: FAQPageInput) {
  if (!faqs?.length) {
    return null;
  }

  const pageUrl = buildSchemaUrl(slug);

  return {
    '@type': 'FAQPage',

    '@id': `${pageUrl}#faq`,

    url: pageUrl,

    name: `${title} FAQs`,

    inLanguage: 'en-IN',

    isPartOf: {
      '@id': `${pageUrl}#webpage`,
    },

    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
    },

    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',

      '@id': `${pageUrl}#faq-question-${index + 1}`,

      name: faq.q,

      acceptedAnswer: {
        '@type': 'Answer',

        '@id': `${pageUrl}#faq-answer-${index + 1}`,

        text: faq.a,
      },
    })),
  };
}
