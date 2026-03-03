import type { Metadata } from 'next';
import Hero from '@/components/sections/common/Hero';
import CoreServices from '@/components/sections/CoreServices';
import EngineeringApproach from '@/components/sections/EngineeringApproach';
import WhenToChooseVMT from '@/components/sections/WhenToChooseVMT';
import ServicesCTA from '@/components/sections/ServicesCTA';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import ServicesFAQ from '@/components/sections/ServicesFAQ';
import { buildGraph } from '../lib/schema/graph';
import { generateServicePage } from '../lib/schema/services-collection-page';
import { serviceCollectionFAQs } from '../lib/schema/data/services_data';
import { generateFAQPage } from '../lib/schema/faq-generator';
import { buildMetada } from '../lib/schema/seo';

export const metadata: Metadata = buildMetada({
  title: 'Website & Software Development Services India | Void Matrix Technology',
  description:
    'Explore website development and custom software services by Void Matrix Technology, engineered for scalability and long-term growth in India.',
  path: '/services',
});

export default function SolutionPage() {
  const coreServices = [
    { name: 'Scalable Custom Software Development', slug: 'custom-software-development' },
    { name: 'Web & Mobile Application Development', slug: 'web-mobile-application-development' },
    { name: 'Scalable Platform Engineering', slug: 'platform-engineering' },
    { name: 'APIs, Integrations & Internal Tools', slug: 'api-integrations-internal-tools' },
    {
      name: 'Technical SEO & Website Performance Optimization',
      slug: 'technical-seo-performance',
    },
  ];
  const collectionSchema = generateServicePage(coreServices);
  const faqs = generateFAQPage('services', serviceCollectionFAQs);
  const schema = buildGraph([collectionSchema, faqs]);
  return (
    <>
      <script
        type="application/ld+json"
        id="service-collection-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero
        title="Performance-Driven Software & Technical SEO Services"
        subtitle="From scalable web development to Core Web Vitals optimization, we engineer fast, search-optimized digital platforms built to grow your business."
      />
      <CtaButtonRe title="Get Free Website Audit" url="/contact" />
      <CoreServices />
      <EngineeringApproach />
      <WhenToChooseVMT />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}
