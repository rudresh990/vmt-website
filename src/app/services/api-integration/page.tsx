import Hero from '@/components/sections/common/Hero';
import { Metadata } from 'next';
import ServiceCoreSection from '@/components/services/ServiceCoreSection';
import ServiceFitSection from '@/components/services/ServiceFitSection';
import WhaIsService from '@/components/services/WhatIsService';
import ServiceCost from '@/components/services/ServiceCost';
import ServiceFactors from '@/components/services/ServiceFactors';
import ServiceComp from '@/components/services/ServiceComp';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import { buildMetadata } from '@/app/lib/schema/seo';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import { serviceData } from '@/app/lib/schema/data/services_data';
import MainServiceCTA from '@/components/services/MainServiceCTA';

export const metadata: Metadata = buildMetadata({
  title: 'API Development & Integration Services in India',
  description:
    'API development and integration services in India connecting enterprise systems, SaaS platforms and third-party services for businesses in Mumbai, Pune and across India.',
  path: '/services/api-integration',
});

const s_data = serviceData['/services/api-integration'];
const contents = [
  {
    id: 'p1',
    para: 'API development and integration allow software systems to communicate and exchange data securely.',
  },
  {
    id: 'p2',
    para: 'Businesses across India rely on APIs to connect internal systems, SaaS platforms, payment gateways, and external services.',
  },
  {
    id: 'p3',
    para: 'Modern digital platforms require reliable APIs to power mobile apps, web platforms, analytics systems, and enterprise software.',
  },
  {
    id: 'p4',
    para: 'Our API engineering services include REST API development, GraphQL APIs, enterprise integrations, and third-party API integrations.',
  },
];

export default function ApiIntegration() {
  return (
    <>
      <Hero
        eyebrow="API Development & Integration Company in Mumbai, India"
        title={
          <>
            Secure <span className="text-(--primary)">API Development</span> &
            System Integrations For{" "}
            <span className="text-(--primary)">Mumbai</span> and{" "}
            <span className="text-(--primary)">India</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Connect your applications, automate data flow, and eliminate manual
                  processes.
                </span>
                <br />
                VMT develops secure REST APIs, backend services, and third-party
                integrations that enable SaaS platforms, enterprise applications, and
                business systems to communicate reliably. Our API-first architecture
                ensures scalability, security, and long-term maintainability.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                REST & <span className="text-(--primary)">GraphQL</span>
              </span>
              <span className="text-glow">|</span>
              <span>
                <span className="text-(--primary)">Secure</span> Integrations
              </span>
              <span className="text-glow">|</span>
              <span>
                API-<span className="text-(--primary)">First</span>
              </span>
              <span className="text-glow">|</span>
              <span>
                Long-term <span className="text-(--primary)">Support</span>
              </span>
            </div>
          </>
        }
      />

      <WhaIsService heading="What is API Development & Integration?" contents={contents} />

      <ServiceCoreSection
        heading="API Development Services"
        intro="Reliable APIs powering scalable digital platforms."
        items={[
          {
            item_link: 'rest',
            title: 'REST API Development',
            description: 'High performance REST APIs for web and mobile platforms.',
          },
          {
            item_link: 'graphql',
            title: 'GraphQL APIs',
            description: 'Efficient data APIs for complex applications.',
          },
          {
            item_link: 'integration',
            title: 'Enterprise System Integrations',
            description: 'Connecting ERP, CRM, payments and analytics platforms.',
          },
        ]}
        details={[]}
      />

      <ServiceCost
        heading="API Development Cost in India"
        costdesc={[
          {
            para: 'API development in India typically ranges from ₹1,50,000 to ₹15,00,000 depending on integrations and complexity.',
          },
          {
            para: 'Enterprise integration projects involving multiple systems require more advanced architecture planning.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors Affecting API Development Cost"
        intro="API engineering complexity varies depending on system architecture."
        facts={[
          'Number of APIs',
          'Integration complexity',
          'Security requirements',
          'Data processing',
          'Authentication systems',
          'Infrastructure requirements',
        ]}
      />

      <ServiceComp
        heading="Custom APIs vs Prebuilt Integrations"
        desc="Custom APIs provide flexibility, performance optimization, and full control over system architecture."
      />

      <CtaButtonRe title="Get API Integration Estimate" url="/contact" />

      <ServiceCost
        heading="API Integration Services for Mumbai & Pune Businesses"
        costdesc={[
          {
            para: 'Companies in Mumbai and Pune require reliable APIs to integrate fintech systems, logistics platforms, SaaS applications, and enterprise software.',
          },
          {
            para: 'Our integration solutions enable seamless data exchange between internal platforms and third-party services.',
          },
        ]}
      />

      <ServiceFitSection
        heading="When to Choose API Development"
        intro="API development becomes necessary when systems need secure and reliable communication."
        subintro="API development is recommended when:"
        points={[
          'Multiple software systems must communicate',
          'Third-party services need integration',
          'Mobile and web apps require backend APIs',
          'Automation between systems is required',
          'Scalable digital platforms are being built',
        ]}
        finalPara="APIs form the backbone of modern digital platforms."
      />
      <MainServiceFAQ faqs={s_data.faqs} heading="API Development & Integration - FAQs" />
      <MainServiceCTA
        heading="Need Secure API Integrations for Your Business?"
        description="Partner with Void Matrix Technology to build scalable APIs and seamless system integrations for your digital platforms."
      />
    </>
  );
}
