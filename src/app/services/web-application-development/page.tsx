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
  title: 'Web & App Development Services in Mumbai, India',
  description:
    'Custom web application development company in India building scalable SaaS platforms, dashboards, and business systems.',
  path: '/services/web-application-development',
});

const s_data = serviceData['/services/web-application-development'];

export default function WebApplicationDev() {
  return (
    <>
      <Hero
        title="Web Application Development Company In India"
        subtitle="We design and develop scalable web applications, SaaS platforms, and internal business systems for startups and growing companies."
        ctaLable="Get Free Web App Consultation"
        ctaRoute="/contact"
      />

      <HowWeWork
        sectionId="web-application-development-process"
        title="Our Web Application Development Process"
        intro="Our engineering-first process ensures scalable, secure, and high-performance web applications built for long-term growth."
        steps={[
          {
            number: '01',
            title: 'Requirement Analysis & Architecture',
            description:
              'We analyze workflows, business requirements, and system architecture before defining a scalable development plan.',
            wide: true,
          },
          {
            number: '02',
            title: 'UI/UX Design & System Planning',
            description:
              'Our team designs intuitive dashboards, workflows, and user experiences optimized for productivity.',
          },
          {
            number: '03',
            title: 'Application Development',
            description:
              'We build secure backend systems, APIs, and scalable frontends using modern frameworks.',
          },
          {
            number: '04',
            title: 'Testing, Deployment & Scaling',
            description:
              'After testing and optimization, we deploy the application and prepare the system for long-term scalability.',
            wide: true,
          },
        ]}
      />

      <UpgradeSection
        id="web-app-use-cases"
        title="When Do You Need a Web Application?"
        intro="Businesses often need web applications when operations require automation, dashboards, or advanced system workflows."
        points={[
          'Customer portals and account dashboards',
          'Admin management systems',
          'Custom SaaS platforms',
          'Workflow automation tools',
          'Data analytics dashboards',
          'API integrations with external systems',
        ]}
        ctaTitle="Need a Custom Platform?"
        ctaDesc="Our engineering team builds scalable platforms designed to automate operations and improve business efficiency."
        ctaLabel="Start Web Application Project"
        ctaHref="/contact"
      />

      <ServiceFactors
        heading="Web Application Development Company in Mumbai & Pune"
        intro="We provide custom web application development services for startups and enterprises in Mumbai and Pune."
        facts={[
          'Custom SaaS development for startups',
          'Enterprise web applications for growing businesses',
          'Secure dashboards and internal business systems',
          'API-driven scalable platforms',
          'Remote collaboration with structured delivery',
        ]}
        closing="Our structured engineering process ensures reliable and scalable digital platforms."
      />

      <ServiceFactors
        heading="Why Choose Void Matrix Technology?"
        intro="We combine engineering expertise with business strategy to build platforms that improve efficiency and scalability."
        facts={[
          'Scalable system architecture',
          'Secure authentication and access control',
          'Performance-optimized backend infrastructure',
          'Clean UI dashboards and workflows',
          'Future-ready modular systems',
        ]}
        closing="Every web application we build is engineered for long-term growth."
      />

      <MainServiceFAQ
        heading="Web Application Development Services in India - FAQs"
        faqs={s_data.faqs}
      />

      <MainServiceCTA
        heading="Planning a Web Application?"
        description="We help design scalable systems and product architecture."
        ctaTitle="Get a Free Web Application Consultation"
      />
    </>
  );
}
