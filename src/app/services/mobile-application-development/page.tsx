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
  title: 'Mobile App Development Company India | Void Matrix Technology',
  description:
    'Mobile application development company in India building scalable Android and iOS apps for startups and enterprises.',
  path: '/services/mobile-application-development',
});

const s_data = serviceData['/services/mobile-application-development'];

export default function MobileApplicationDev() {
  return (
    <>
      <Hero
        title="Mobile Application Development Company In India"
        subtitle="We design and develop scalable Android and iOS mobile applications for startups and digital businesses."
        ctaLable="Get Free Mobile App Consultation"
        ctaRoute="/contact"
      />

      <HowWeWork
        sectionId="mobile-app-development-process"
        title="Our Mobile App Development Process"
        intro="We follow a structured development process to create scalable and high-performance mobile applications."
        steps={[
          {
            number: '01',
            title: 'Product Planning & Strategy',
            description:
              'We analyze your product idea, market needs, and required features before defining the mobile architecture.',
            wide: true,
          },
          {
            number: '02',
            title: 'Mobile UI/UX Design',
            description:
              'Our design team builds intuitive and mobile-first interfaces optimized for user engagement.',
          },
          {
            number: '03',
            title: 'Mobile App Development',
            description:
              'We build high-performance mobile applications optimized for reliability and scalability.',
          },
          {
            number: '04',
            title: 'Testing & App Deployment',
            description:
              'After testing and performance optimization, we deploy the application for long-term growth.',
            wide: true,
          },
        ]}
      />

      <UpgradeSection
        id="mobile-app-use-cases"
        title="When Does Your Business Need a Mobile App?"
        intro="Mobile apps are ideal for businesses that need stronger customer engagement and digital product experiences."
        points={[
          'Customer engagement mobile apps',
          'On-demand service platforms',
          'Business automation apps',
          'E-commerce mobile apps',
          'Internal employee workflow apps',
        ]}
        ctaTitle="Launch Your Mobile Product"
        ctaDesc="We help businesses design and build scalable mobile applications."
        ctaLabel="Start Mobile App Project"
        ctaHref="/contact"
      />

      <ServiceFactors
        heading="Mobile App Development Company in Mumbai & Pune"
        intro="We develop scalable mobile applications for startups and businesses across Mumbai and Pune."
        facts={[
          'Android and iOS mobile applications',
          'Startup MVP mobile app development',
          'E-commerce and on-demand mobile platforms',
          'High-performance scalable mobile systems',
          'Remote-first collaboration model',
        ]}
        closing="Our development process ensures reliable mobile applications designed for growth."
      />

      <ServiceFactors
        heading="Why Choose Void Matrix Technology?"
        intro="We build mobile applications focused on performance, usability, and scalability."
        facts={[
          'Modern mobile architecture',
          'Clean UI and UX design',
          'Scalable backend systems',
          'Performance-driven development',
          'Long-term technical support',
        ]}
        closing="Our mobile solutions are engineered to support long-term product growth."
      />

      <MainServiceFAQ
        heading="Mobile Application Development Services in India - FAQs"
        faqs={s_data.faqs}
      />

      <MainServiceCTA
        heading="Ready to Build Your Mobile App?"
        description="Our engineers help transform product ideas into scalable mobile platforms."
        ctaTitle="Get a Free Mobile App Consultation"
      />
    </>
  );
}
