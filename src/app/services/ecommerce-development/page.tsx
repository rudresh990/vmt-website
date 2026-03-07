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
  title: 'E-Commerce Development Company India | Void Matrix Technology',
  description:
    'Professional eCommerce development company in India building scalable online stores and marketplaces.',
  path: '/services/ecommerce-development',
});

const s_data = serviceData['/services/ecommerce-development'];

export default function EcommerceDev() {
  return (
    <>
      <Hero
        title="E-Commerce Development Company In India"
        subtitle="We design and develop scalable online stores, marketplaces, and eCommerce platforms for growing brands."
        ctaLable="Get Free E-Commerce Consultation"
        ctaRoute="/contact"
      />

      <HowWeWork
        sectionId="ecommerce-development-process"
        title="Our E-Commerce Development Process"
        intro="Our development process focuses on scalability, performance, and conversion optimization."
        steps={[
          {
            number: '01',
            title: 'Store Planning & Architecture',
            description:
              'We analyze your products, business model, and required features before planning the store architecture.',
            wide: true,
          },
          {
            number: '02',
            title: 'UI/UX Design for Conversions',
            description:
              'Our team designs conversion-focused layouts optimized for user experience.',
          },
          {
            number: '03',
            title: 'E-Commerce Development',
            description:
              'We build secure stores with optimized checkout flows and payment integrations.',
          },
          {
            number: '04',
            title: 'Launch & Growth Optimization',
            description: 'After launch we optimize store performance, SEO, and conversion funnels.',
            wide: true,
          },
        ]}
      />

      <UpgradeSection
        id="ecommerce-use-cases"
        title="When Do You Need a Custom E-Commerce Platform?"
        intro="Growing brands often require advanced eCommerce systems beyond basic online stores."
        points={[
          'Multi-vendor marketplaces',
          'Inventory and order management',
          'Payment gateway integrations',
          'Subscription commerce platforms',
          'Shipping and logistics automation',
        ]}
        ctaTitle="Launch Your Online Store"
        ctaDesc="Our team builds scalable eCommerce platforms designed for growth."
        ctaLabel="Start E-Commerce Project"
        ctaHref="/contact"
      />

      <ServiceFactors
        heading="E-Commerce Development Company in Mumbai & Pune"
        intro="We provide professional eCommerce development services for startups and brands across Mumbai and Pune."
        facts={[
          'Online store development for growing brands',
          'Marketplace platform development',
          'Secure payment integrations',
          'Performance optimized eCommerce stores',
          'Scalable architecture for growth',
        ]}
        closing="Our eCommerce solutions are built to support long-term digital commerce growth."
      />

      <ServiceFactors
        heading="Why Choose Void Matrix Technology?"
        intro="We combine technical expertise and conversion-focused design to build scalable eCommerce systems."
        facts={[
          'Conversion-focused store design',
          'Secure payment infrastructure',
          'Scalable backend systems',
          'SEO-ready eCommerce architecture',
          'Long-term growth support',
        ]}
        closing="Every eCommerce platform we build is engineered to scale with your business."
      />

      <MainServiceFAQ
        heading="E-Commerce Development Services in India - FAQs"
        faqs={s_data.faqs}
      />

      <MainServiceCTA
        heading="Launching an Online Store?"
        description="Our team builds scalable eCommerce platforms for modern brands."
        ctaTitle="Get a Free E-Commerce Consultation"
      />
    </>
  );
}
