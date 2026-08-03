import Hero from '@/components/sections/common/Hero';
import { Metadata } from 'next';
import ServiceCoreSection from '@/components/services/ServiceCoreSection';
import ServiceApproachSection from '@/components/services/ServiceApproachSection';
import ServiceFitSection from '@/components/services/ServiceFitSection';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import WhaIsService from '@/components/services/WhatIsService';
import ServiceCost from '@/components/services/ServiceCost';
import ServiceFactors from '@/components/services/ServiceFactors';
import ServiceComp from '@/components/services/ServiceComp';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import { serviceData } from '@/app/lib/schema/data/services_data';
import { buildMetadata } from '@/app/lib/schema/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Enterprise Software Development Company in India',
  description:
    'Enterprise software development company in India building scalable ERP systems, internal platforms, and enterprise applications for businesses in Mumbai, Pune, and across India.',
  path: '/services/enterprise-software-development',
});

const s_data = serviceData['/services/enterprise-software-development'];

const contents = [
  {
    id: 'p1',
    para: 'Enterprise software development focuses on building large-scale applications designed to manage complex business operations, multi-department workflows, and high-volume data systems.',
  },
  {
    id: 'p2',
    para: 'Across India, especially in business hubs like Mumbai and Pune, organizations rely on enterprise platforms such as ERP systems, analytics dashboards, workflow automation tools, and financial management software.',
  },
  {
    id: 'p3',
    para: 'Custom enterprise software allows companies to integrate multiple systems, automate internal operations, and build scalable digital infrastructure that supports long-term growth.',
  },
  {
    id: 'p4',
    para: 'At Void Matrix Technology, we design enterprise software systems using modern architectures including microservices, cloud-native infrastructure, and secure API integrations.',
  },
];

const engineeringSteps = [
  {
    title: 'Enterprise System Planning',
    description: 'We analyze organizational workflows and infrastructure requirements.',
    points: [
      'Business process mapping',
      'System architecture planning',
      'Integration strategy',
      'Security framework design',
    ],
  },
  {
    title: 'Architecture Engineering',
    description: 'Enterprise-grade architecture designed for scalability.',
    points: [
      'Microservices architecture',
      'Database modeling',
      'API-first architecture',
      'Infrastructure planning',
    ],
  },
  {
    title: 'Agile Enterprise Development',
    description: 'Structured development with enterprise-level standards.',
    points: [
      'Sprint-based engineering',
      'Version controlled development',
      'Performance optimization',
      'Continuous delivery',
    ],
  },
  {
    title: 'Testing & Compliance',
    description: 'Enterprise software requires strict validation.',
    points: ['Security testing', 'Integration testing', 'Performance testing', 'Compliance checks'],
  },
  {
    title: 'Deployment & Infrastructure',
    description: 'Secure deployment and infrastructure monitoring.',
    points: ['Cloud deployment', 'DevOps automation', 'Monitoring systems', 'Backup systems'],
  },
  {
    title: 'Long-Term Optimization',
    description: 'Enterprise systems evolve with the organization.',
    points: [
      'Performance improvements',
      'Infrastructure scaling',
      'New feature integration',
      'Security updates',
    ],
  },
];

export default function EnterpriseSoftwareDev() {
  return (
    <>
      <Hero
        eyebrow="Enterprise Software Development Company in Mumbai, India"
        title={
          <>
            Enterprise <span className="text-(--primary)">Software Solutions</span>{" "}
            For Organizations Across{" "}
            <span className="text-(--primary)">Mumbai</span> and{" "}
            <span className="text-(--primary)">India</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Enterprise software should scale with your organization—not limit
                  it.
                </span>
                <br />
                We design and develop enterprise-grade software that connects
                departments, automates operations, improves reporting, and supports
                secure business growth. VMT engineers high-performance enterprise
                systems for organizations across Mumbai, Pune, India, and
                international markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Enterprise <span className="text-(--primary)">Ready</span>
              </span>
              <span className="text-glow">|</span>
              <span>
                <span className="text-(--primary)">Secure</span> Architecture
              </span>
              <span className="text-glow">|</span>
              <span>
                Built for <span className="text-(--primary)">Scale</span>
              </span>
              <span className="text-glow">|</span>
              <span>
                Long-term <span className="text-(--primary)">Support</span>
              </span>
            </div>
          </>
        }
      />
      <WhaIsService heading="What is Enterprise Software Development?" contents={contents} />

      <ServiceCoreSection
        heading="Enterprise Software Development Services"
        intro="Enterprise platforms engineered for scalability and operational efficiency."
        items={[
          {
            item_link: 'erp',
            title: 'Enterprise ERP Systems',
            description:
              'Custom ERP platforms integrating finance, operations, inventory and reporting.',
          },
          {
            item_link: 'automation',
            title: 'Workflow Automation Systems',
            description: 'Automating internal business processes and operations.',
          },
          {
            item_link: 'analytics',
            title: 'Enterprise Analytics Platforms',
            description: 'High-performance dashboards and enterprise data systems.',
          },
        ]}
        details={[]}
      />

      <ServiceCost
        heading="Enterprise Software Development Cost in India"
        costdesc={[
          {
            para: 'Enterprise software development cost in India typically ranges from ₹5,00,000 to ₹40,00,000+ depending on complexity, integrations, and infrastructure requirements.',
          },
          {
            para: 'Large enterprise systems such as ERP platforms, analytics systems, and operational automation tools require careful architecture planning and scalable infrastructure.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors Affecting Enterprise Software Development Cost"
        intro="Enterprise software systems involve multiple components and integrations."
        facts={[
          'System complexity',
          'Integration requirements',
          'User roles and permissions',
          'Security compliance',
          'Cloud infrastructure',
          'Scalability requirements',
        ]}
      />

      <ServiceComp
        heading="Enterprise Software vs Off-The-Shelf Tools"
        desc="Enterprise organizations often outgrow generic tools. Custom enterprise software provides full control, scalability, and integration capabilities."
      />

      <CtaButtonRe title="Get Enterprise Software Cost Estimate" url="/contact" />

      <ServiceApproachSection
        heading="Our Enterprise Engineering Process"
        intro="We engineer enterprise systems using architecture-first development methodology."
        steps={engineeringSteps}
      />

      <ServiceCost
        heading="Enterprise Software Development for Mumbai & Pune Businesses"
        costdesc={[
          {
            para: 'Mumbai and Pune are major economic hubs in India with growing demand for scalable enterprise software systems.',
          },
          {
            para: 'We build enterprise applications for fintech companies, manufacturing firms, logistics companies, and SaaS startups across these regions.',
          },
        ]}
      />

      <ServiceFitSection
        heading="When to Choose Enterprise Software"
        intro="Enterprise software development is ideal when your business requires large-scale digital infrastructure."
        subintro="Choose enterprise software when:"
        points={[
          'Multiple departments require unified systems',
          'Large-scale data processing is required',
          'Operational workflows require automation',
          'Existing tools cannot scale with growth',
          'Integration between multiple platforms is required',
        ]}
        finalPara="Enterprise-grade systems provide long-term digital infrastructure for growing organizations."
      />

      <MainServiceFAQ faqs={s_data?.faqs ?? []} heading="Enterprise Software Development - FAQs" />

      <MainServiceCTA
        heading="Ready to Build Enterprise Software?"
        description="Partner with Void Matrix Technology to design scalable enterprise systems."
      />
    </>
  );
}
