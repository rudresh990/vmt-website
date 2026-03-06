import type { Metadata } from 'next';
import Hero from '@/components/sections/common/Hero';
import CoreServices from '@/components/sections/CoreServices';
import EngineeringApproach from '@/components/sections/EngineeringApproach';
import WhenToChooseVMT from '@/components/sections/WhenToChooseVMT';
import ServicesCTA from '@/components/sections/ServicesCTA';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import ServicesFAQ from '@/components/sections/ServicesFAQ';
import { coreServicesData } from '../lib/schema/data/services_collection_data';
import { serviceCollectionFAQs } from '../lib/schema/data/services_collection_data';
import { generateServiceCollectionPage } from '../lib/schema/services-collection-page';
import { generateFAQPage } from '../lib/schema/faq-generator';
import { buildMetadata } from '../lib/schema/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Website & Software Development Services India | Void Matrix Technology',
  description:
    'Explore website development and custom software services by Void Matrix Technology, engineered for scalability and long-term growth in India.',
  path: '/services',
});

export default function SolutionPage() {
  return (
    <>
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
