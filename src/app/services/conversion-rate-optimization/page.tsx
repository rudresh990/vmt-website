import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import UpgradeSection from '@/components/sections/common/UpgradeSection';
import ServiceFactors from '@/components/services/ServiceFactors';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/lib/schema/seo';
import { serviceData } from '@/app/lib/schema/data/services_data';

export const metadata: Metadata = buildMetadata({
  title: 'Conversion Rate Optimization Services India | Void Matrix Technology',
  description:
    'Conversion rate optimization services in Mumbai and Pune helping websites generate more leads and sales.',
  path: '/services/conversion-rate-optimization',
});

const s_data = serviceData['/services/conversion-rate-optimization'];

export default function CRO() {
  return (
    <>
      <Hero
        title="Conversion Rate Optimization Services"
        subtitle="We analyze user behavior and optimize websites to convert more visitors into leads and customers."
        ctaLable="Get Free CRO Audit"
        ctaRoute="/contact"
      />

      <HowWeWork
        sectionId="cro-process"
        title="Our Conversion Optimization Process"
        intro="Our CRO process identifies conversion barriers and improves user experience to increase lead generation."
        steps={[
          {
            number: '01',
            title: 'User Behavior Analysis',
            description:
              'We analyze visitor behavior, heatmaps, and analytics data to identify friction points.',
            wide: true,
          },
          {
            number: '02',
            title: 'Conversion Funnel Optimization',
            description:
              'We improve page structure, messaging clarity, and call-to-action placement.',
          },
          {
            number: '03',
            title: 'Landing Page Optimization',
            description:
              'Our team designs high-converting landing pages optimized for lead generation.',
          },
          {
            number: '04',
            title: 'Testing & Performance Monitoring',
            description: 'We run experiments and measure conversion improvements over time.',
            wide: true,
          },
        ]}
      />

      <UpgradeSection
        id="cro-use-cases"
        title="When Does Your Website Need CRO?"
        intro="Websites with traffic but low conversions benefit significantly from CRO improvements."
        points={[
          'High website traffic but low leads',
          'Poor landing page performance',
          'Unclear call-to-action structure',
          'Complex user journeys',
          'Low sales conversion rates',
          'Poor lead generation funnels',
        ]}
        ctaTitle="Improve Your Conversion Rates"
        ctaDesc="Our CRO specialists analyze your website and improve conversion performance."
        ctaLabel="Request CRO Audit"
        ctaHref="/contact"
      />

      <ServiceFactors
        heading="Conversion Rate Optimization in Mumbai & Pune"
        intro="We help businesses in Mumbai and Pune convert more website visitors into leads and customers."
        facts={[
          'Landing page conversion optimization',
          'User journey analysis',
          'Call-to-action improvements',
          'Sales funnel optimization',
          'Data-driven CRO experiments',
        ]}
        closing="Our CRO strategies help businesses generate more revenue from existing traffic."
      />

      <ServiceFactors
        heading="Why Choose Void Matrix Technology?"
        intro="We combine UX design expertise and analytics-driven optimization strategies."
        facts={[
          'Data-driven CRO strategies',
          'User experience optimization',
          'Landing page performance improvements',
          'Analytics and behavior analysis',
          'Long-term conversion growth',
        ]}
        closing="We optimize websites to maximize the value of every visitor."
      />

      <MainServiceFAQ heading="Conversion Rate Optimization Services - FAQs" faqs={s_data.faqs} />

      <MainServiceCTA
        heading="Increase Your Website Conversions"
        description="Our CRO experts help turn visitors into leads and customers."
        ctaTitle="Get Free CRO Consultation"
      />
    </>
  );
}
