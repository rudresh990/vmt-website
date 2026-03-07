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
  title: 'Website Speed Optimization Services India | Void Matrix Technology',
  description:
    'Website speed optimization services in Mumbai and Pune improving Core Web Vitals, page speed, and performance.',
  path: '/services/website-speed-optimization',
});

const s_data = serviceData['/services/website-speed-optimization'];

export default function WebsiteSpeed() {
  return (
    <>
      <Hero
        title="Website Speed Optimization Services"
        subtitle="We improve loading speed, Core Web Vitals, and website performance for better user experience and SEO rankings."
        ctaLable="Get Free Speed Audit"
        ctaRoute="/contact"
      />

      <HowWeWork
        sectionId="website-speed-process"
        title="Our Website Speed Optimization Process"
        intro="We analyze performance bottlenecks and optimize both frontend and backend systems."
        steps={[
          {
            number: '01',
            title: 'Performance Audit',
            description:
              'We analyze Core Web Vitals, loading speed metrics, and performance bottlenecks.',
            wide: true,
          },
          {
            number: '02',
            title: 'Frontend Optimization',
            description:
              'Our team optimizes JavaScript, CSS delivery, and asset loading strategies.',
          },
          {
            number: '03',
            title: 'Server & Infrastructure Optimization',
            description:
              'We improve caching systems, server response times, and CDN configuration.',
          },
          {
            number: '04',
            title: 'Performance Monitoring',
            description:
              'After optimization we monitor speed improvements and maintain performance stability.',
            wide: true,
          },
        ]}
      />

      <UpgradeSection
        id="speed-optimization-use-cases"
        title="When Does Your Website Need Speed Optimization?"
        intro="Slow websites negatively impact search rankings, conversions, and user experience."
        points={[
          'Slow page loading times',
          'Poor Core Web Vitals scores',
          'Large JavaScript bundles',
          'Heavy images and assets',
          'High bounce rates',
          'Server performance issues',
        ]}
        ctaTitle="Need a Speed Performance Audit?"
        ctaDesc="We analyze website performance and identify speed optimization opportunities."
        ctaLabel="Request Speed Audit"
        ctaHref="/contact"
      />

      <ServiceFactors
        heading="Website Speed Optimization in Mumbai & Pune"
        intro="We help startups and businesses in Mumbai and Pune improve website performance and loading speed."
        facts={[
          'Core Web Vitals optimization',
          'Frontend performance improvements',
          'Server and CDN optimization',
          'JavaScript and CSS optimization',
          'Performance monitoring systems',
        ]}
        closing="Our optimization approach ensures websites load faster across devices and networks."
      />

      <ServiceFactors
        heading="Why Choose Void Matrix Technology?"
        intro="Our engineering-driven approach focuses on measurable performance improvements."
        facts={[
          'Core Web Vitals expertise',
          'Frontend performance optimization',
          'Scalable infrastructure improvements',
          'Performance monitoring tools',
          'Long-term performance stability',
        ]}
        closing="We build high-performance websites designed for modern digital experiences."
      />

      <MainServiceFAQ heading="Website Speed Optimization Services - FAQs" faqs={s_data.faqs} />

      <MainServiceCTA
        heading="Improve Your Website Performance"
        description="Our team identifies and fixes performance bottlenecks."
        ctaTitle="Get Free Speed Consultation"
      />
    </>
  );
}
