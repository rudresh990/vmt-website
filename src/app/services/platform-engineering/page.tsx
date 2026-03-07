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
import { buildMetadata } from '@/app/lib/schema/seo';
import { serviceData } from '@/app/lib/schema/data/services_data';

export const metadata: Metadata = buildMetadata({
  title: 'Platform Engineering Services in India',
  description:
    'Platform engineering services in India building scalable cloud infrastructure and developer platforms for startups and enterprises in Mumbai, Pune and across India.',
  path: '/services/platform-engineering',
});

const s_data = serviceData['/services/platform-engineering'];

const contents = [
  {
    id: 'p1',
    para: 'Platform engineering focuses on building internal infrastructure platforms that help development teams build, deploy, and manage software efficiently.',
  },
  {
    id: 'p2',
    para: 'Modern companies in India rely on platform engineering to automate infrastructure, standardize development workflows, and accelerate product development.',
  },
  {
    id: 'p3',
    para: 'Platform engineering includes DevOps automation, CI/CD pipelines, internal developer platforms, and cloud infrastructure engineering.',
  },
  {
    id: 'p4',
    para: 'Businesses in Mumbai and Pune increasingly adopt platform engineering to scale digital products and support growing engineering teams.',
  },
];

export default function PlatformEngineering() {
  return (
    <>
      <Hero
        title="Platform Engineering Services in India"
        subtitle="Cloud infrastructure and developer platforms for scalable digital products."
        ctaLable="Discuss Platform Architecture"
        ctaRoute="/contact"
      />

      <WhaIsService heading="What is Platform Engineering?" contents={contents} />

      <ServiceCoreSection
        heading="Platform Engineering Services"
        intro="Scalable developer platforms and cloud infrastructure."
        items={[
          {
            item_link: 'cloud',
            title: 'Cloud Platform Architecture',
            description: 'Designing scalable cloud-native infrastructure.',
          },
          {
            item_link: 'devops',
            title: 'DevOps Automation',
            description: 'CI/CD pipelines and infrastructure automation.',
          },
          {
            item_link: 'developer',
            title: 'Developer Platforms',
            description: 'Internal platforms that accelerate software development.',
          },
        ]}
        details={[]}
      />

      <ServiceCost
        heading="Platform Engineering Cost in India"
        costdesc={[
          {
            para: 'Platform engineering projects in India typically range from ₹4,00,000 to ₹30,00,000 depending on infrastructure complexity.',
          },
          {
            para: 'Organizations invest in platform engineering to improve development velocity and infrastructure scalability.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors Affecting Platform Engineering Cost"
        intro="Platform engineering systems involve multiple infrastructure layers."
        facts={[
          'Cloud infrastructure',
          'Automation tools',
          'CI/CD complexity',
          'Security frameworks',
          'Monitoring systems',
          'Scalability planning',
        ]}
      />

      <ServiceComp
        heading="Platform Engineering vs Traditional DevOps"
        desc="Platform engineering builds reusable infrastructure systems that improve developer productivity and scalability."
      />

      <CtaButtonRe title="Get Platform Engineering Estimate" url="/contact" />

      <ServiceCost
        heading="Platform Engineering for Mumbai & Pune Companies"
        costdesc={[
          {
            para: 'Technology companies in Mumbai and Pune require scalable infrastructure for digital platforms.',
          },
          {
            para: 'Our platform engineering services support SaaS startups, fintech platforms, and enterprise applications across India.',
          },
        ]}
      />

      <ServiceFitSection
        heading="When to Choose Platform Engineering"
        intro="Platform engineering is ideal when scaling engineering teams and infrastructure."
        subintro="You should adopt platform engineering when:"
        points={[
          'Engineering teams are growing rapidly',
          'Deployment automation is required',
          'Infrastructure needs standardization',
          'Cloud scaling is required',
          'Development productivity must increase',
        ]}
        finalPara="Platform engineering creates a stable foundation for large-scale software development."
      />

      <MainServiceFAQ faqs={s_data.faqs} heading="Platform Engineering - FAQs" />

      <MainServiceCTA
        heading="Build Scalable Platform Infrastructure"
        description="Partner with Void Matrix Technology for platform engineering services."
      />
    </>
  );
}
