import { SITE_URL, FAQItem } from './config';
export function generateFAQPage(slug: string, faqs: FAQItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/services/${slug}#faq`,
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
