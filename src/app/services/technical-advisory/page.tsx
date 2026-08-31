import { Metadata } from 'next';

import Hero from '@/components/sections/common/Hero';

import WhaIsService from '@/components/services/WhatIsService';

import { serviceData } from '@/app/lib/schema/data/services_data';

import { buildMetadata } from '@/app/lib/schema/seo';

import MainServiceCTA from '@/components/services/MainServiceCTA';

import MainServiceFAQ from '@/components/services/MainServiceFAQ';

import ServiceFitSection from '@/components/services/ServiceFitSection';

import ServiceCost from '@/components/services/ServiceCost';

import ServiceApproachSection from '@/components/services/ServiceApproachSection';

import CtaButtonRe from '@/components/ui/CtaButtonRe';

import ServiceComp from '@/components/services/ServiceComp';

import ServiceFactors from '@/components/services/ServiceFactors';

import ServiceCoreSection from '@/components/services/ServiceCoreSection';


export const metadata: Metadata = buildMetadata({
  title: 'Technical Advisory Services in Mumbai & India | Technology Advisory Company',
  description:
    'VoidMatrix provides technical advisory services in Mumbai and India covering technology strategy, software architecture, technical decisions, system modernization, security, scalability, infrastructure, and digital product development.',
  path: '/services/technical-advisory',
});


const s_data = serviceData['/services/technical-advisory'];


const contents = [
  {
    id: 'technicaladvisory1',
    para: 'Technical advisory is the process of providing businesses with expert guidance on technology, software architecture, infrastructure, security, development, scalability, and other technical decisions. A technical advisor helps organizations understand technical options, risks, dependencies, and priorities before making important technology investments.',
  },

  {
    id: 'technicaladvisory2',
    para: 'At VoidMatrix, we provide practical technical advisory services that connect business objectives with technology decisions. Our approach focuses on understanding the current technology environment, product requirements, business processes, development plans, available resources, and long-term goals before recommending technical solutions.',
  },

  {
    id: 'technicaladvisory3',
    para: 'Businesses regularly need to make technical decisions involving technology stacks, software architecture, databases, APIs, cloud infrastructure, security, integrations, performance, scalability, technical debt, and system modernization. The right technical guidance can help reduce risks and prevent costly technology decisions later.',
  },

  {
    id: 'technicaladvisory4',
    para: 'Our technical advisory services can support businesses planning a new digital product as well as organizations with existing software systems. We can review technical environments, identify risks and improvement opportunities, evaluate proposed solutions, and provide recommendations for future technology development.',
  },

  {
    id: 'technicaladvisory5',
    para: 'Technical advisory does not necessarily mean rebuilding an existing system or introducing new technology. We focus on the actual business and technical requirements and help prioritize decisions around architecture, development, infrastructure, security, performance, integrations, and scalability.',
  },

  {
    id: 'technicaladvisory6',
    para: 'VoidMatrix provides technical advisory services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Our advisory approach can support SaaS platforms, marketplaces, eCommerce businesses, enterprise applications, mobile applications, custom software products, and digital transformation initiatives.',
  },
];


export default function TechnicalAdvisoryPage() {
  return (
    <>
      {/* HERO */}

      <Hero
        eyebrow="Technical Advisory Services in Mumbai, India"
        title={
          <>
            Make Better
            <span className="text-(--primary)"> Technology Decisions.</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Practical technical advisory for software architecture, technology, infrastructure, security, and scalability.
                </span>
                <br />
                VoidMatrix helps businesses evaluate technical decisions, reduce technology risks, and create a clearer direction for digital products and software systems.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Technology <span className="text-(--primary)">Advisory</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Technical <span className="text-(--primary)">Strategy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Architecture <span className="text-(--primary)">Review</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Technical <span className="text-(--primary)">Due Diligence</span>
              </span>
            </div>
          </>
        }
      />


      {/* WHAT IS TECHNICAL ADVISORY */}

      <WhaIsService
        heading="What Is Technical Advisory?"
        contents={contents}
      />


      {/* TECHNICAL ADVISORY SERVICES */}

      <ServiceCoreSection
        heading="Our Technical Advisory Services"
        intro="We help businesses evaluate technology decisions across software architecture, technology strategy, infrastructure, security, development, modernization, integrations, and scalability."
        items={[
          {
            item_link: 'technology-strategy-advisory',
            title: 'Technology Strategy Advisory',
            description:
              'Evaluate technology decisions and create a practical technical direction aligned with business, product, and growth objectives.',
          },

          {
            item_link: 'software-architecture-advisory',
            title: 'Software Architecture Advisory',
            description:
              'Review application architecture, databases, APIs, infrastructure, integrations, security, and scalability requirements.',
          },

          {
            item_link: 'technical-due-diligence',
            title: 'Technical Due Diligence',
            description:
              'Evaluate software systems, technology stacks, architecture, development practices, technical risks, and scalability before major business decisions.',
          },

          {
            item_link: 'technology-selection-advisory',
            title: 'Technology Selection Advisory',
            description:
              'Assess technology stacks, frameworks, databases, cloud platforms, and development approaches based on actual software requirements.',
          },

          {
            item_link: 'technical-modernization-advisory',
            title: 'Technical Modernization Advisory',
            description:
              'Identify technical debt, legacy system limitations, modernization opportunities, and practical paths toward improved technology.',
          },

          {
            item_link: 'security-scalability-advisory',
            title: 'Security & Scalability Advisory',
            description:
              'Evaluate technical requirements related to application security, performance, infrastructure, reliability, and future scalability.',
          },
        ]}
        details={[
          {
            item_link_id: 'technology-strategy-advisory',
            heading: 'Technology Strategy Advisory',
            descriptions: [
              {
                para: 'Technology strategy advisory helps businesses understand how technology should support their business objectives, product requirements, operational processes, and long-term growth.',
              },

              {
                para: 'We evaluate current technology, business requirements, product objectives, development plans, and future technical needs before recommending technology priorities.',
              },

              {
                para: 'The objective is to provide a practical technical direction that helps businesses make informed technology investments.',
              },
            ],
          },

          {
            item_link_id: 'software-architecture-advisory',
            heading: 'Software Architecture Advisory',
            descriptions: [
              {
                para: 'Software architecture advisory focuses on evaluating whether an application architecture is appropriate for its current requirements and future growth.',
              },

              {
                para: 'We consider application components, databases, APIs, services, integrations, authentication, infrastructure, security, performance, and scalability.',
              },

              {
                para: 'The objective is to identify architectural risks and provide practical recommendations that development teams can use to improve the software system.',
              },
            ],
          },

          {
            item_link_id: 'technical-due-diligence',
            heading: 'Technical Due Diligence',
            descriptions: [
              {
                para: 'Technical due diligence evaluates the technical condition of a software product or technology environment before important business decisions such as investment, acquisition, partnership, or major development commitments.',
              },

              {
                para: 'We can review technology stacks, application architecture, databases, APIs, infrastructure, development practices, technical debt, security considerations, and scalability risks.',
              },

              {
                para: 'The objective is to provide a clearer understanding of the technical strengths, limitations, risks, and future requirements of the software system.',
              },
            ],
          },

          {
            item_link_id: 'technology-selection-advisory',
            heading: 'Technology Selection Advisory',
            descriptions: [
              {
                para: 'Technology selection advisory helps businesses evaluate technologies, frameworks, databases, cloud platforms, development approaches, and third-party services before committing to a technical direction.',
              },

              {
                para: 'We consider software requirements, application complexity, integrations, development resources, security, performance, scalability, and long-term maintainability.',
              },

              {
                para: 'The objective is to select technology based on actual requirements rather than adopting technology simply because it is popular or widely used.',
              },
            ],
          },

          {
            item_link_id: 'technical-modernization-advisory',
            heading: 'Technical Modernization Advisory',
            descriptions: [
              {
                para: 'Technical modernization advisory helps businesses understand how existing software systems can be improved, upgraded, migrated, or gradually modernized.',
              },

              {
                para: 'We evaluate legacy technologies, technical debt, architecture limitations, infrastructure, dependencies, security, performance, and future development requirements.',
              },

              {
                para: 'Modernization can then be organized into practical phases to reduce technical and operational risk.',
              },
            ],
          },

          {
            item_link_id: 'security-scalability-advisory',
            heading: 'Security & Scalability Advisory',
            descriptions: [
              {
                para: 'Security and scalability advisory focuses on technical requirements that become increasingly important as software products, users, data, and business operations grow.',
              },

              {
                para: 'We consider authentication, authorization, data protection, application security, infrastructure, performance, monitoring, reliability, and scalability requirements.',
              },

              {
                para: 'The objective is to identify important technical improvements that can help prepare the software environment for future growth.',
              },
            ],
          },
        ]}
      />


      {/* COST */}

      <ServiceCost
        heading="Technical Advisory Cost in India"
        costdesc={[
          {
            para: 'Technical advisory cost in India depends on the scope of advisory work, complexity of the technology environment, number of systems involved, architecture requirements, technical risks, security requirements, infrastructure, and the depth of evaluation required.',
          },

          {
            para: 'A business requiring a technology stack review will require a different advisory scope from an organization that needs complete architecture evaluation, technical due diligence, modernization planning, security assessment, and scalability recommendations.',
          },

          {
            para: 'Our technical advisory scope is based on the actual technology requirements and business objectives rather than applying the same advisory package to every organization.',
          },
        ]}
      />


      {/* FACTORS */}

      <ServiceFactors
        heading="Factors That Affect Technical Advisory Cost"
        intro="Technical advisory requirements vary depending on the software environment, business objectives, technical complexity, existing systems, and level of evaluation required."
        facts={[
          'Technology environment',

          'Software complexity',

          'Business requirements',

          'Application architecture',

          'Technology stack',

          'Number of applications',

          'Database complexity',

          'Integration requirements',

          'Infrastructure requirements',

          'Security requirements',

          'Technical debt',

          'Scalability requirements',
        ]}
      />


      {/* COMPARISON */}

      <ServiceComp
        heading="Making Technical Decisions Alone vs Technical Advisory"
        desc="Making important technology decisions without structured technical evaluation can result in unsuitable technology choices, architectural limitations, technical debt, security gaps, integration problems, scalability issues, and unnecessary development costs. Technical advisory provides an independent and structured approach to evaluating technology strategy, architecture, technology selection, modernization, security, infrastructure, and scalability. The objective is to provide practical technical guidance so businesses can make better-informed technology decisions."
      />


      {/* CTA */}

      <CtaButtonRe
        title="Get Technical Advisory Estimate"
        url="/contact"
      />


      {/* APPROACH */}

      <ServiceApproachSection
        heading="Our Technical Advisory Process"
        intro="We follow a structured advisory process designed to understand the business objectives, existing technology, software requirements, and technical challenges before providing recommendations."
        steps={[
          {
            title: 'Business & Technology Discovery',

            description:
              'We understand the business objectives, software products, operational requirements, existing technology, and technical challenges.',

            points: [
              'Business objectives',

              'Software products',

              'Technology environment',

              'Technical challenges',
            ],
          },

          {
            title: 'Technical Assessment',

            description:
              'We evaluate the relevant technology environment, architecture, development approach, infrastructure, integrations, and technical requirements.',

            points: [
              'Technology stack',

              'Application architecture',

              'Infrastructure',

              'Integrations',
            ],
          },

          {
            title: 'Risk & Gap Analysis',

            description:
              'We identify technical risks, limitations, dependencies, technical debt, security concerns, scalability issues, and areas requiring improvement.',

            points: [
              'Technical risks',

              'Architecture gaps',

              'Technical debt',

              'Security risks',
            ],
          },

          {
            title: 'Technical Recommendations',

            description:
              'We evaluate possible solutions and provide practical technical recommendations based on the business and software requirements.',

            points: [
              'Technology options',

              'Architecture improvements',

              'Infrastructure',

              'Development strategy',
            ],
          },

          {
            title: 'Technical Roadmap',

            description:
              'We organize recommendations into practical priorities and implementation phases that technical and business teams can follow.',

            points: [
              'Technical priorities',

              'Implementation phases',

              'Dependencies',

              'Future requirements',
            ],
          },

          {
            title: 'Growth & Technology Planning',

            description:
              'We consider future technology requirements related to scalability, security, performance, modernization, infrastructure, and product growth.',

            points: [
              'Scalability',

              'Security',

              'Modernization',

              'Future growth',
            ],
          },
        ]}
      />


      {/* MUMBAI / PUNE / INDIA / GLOBAL */}

      <ServiceCost
        heading="Technical Advisory Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, VoidMatrix provides technical advisory across technology strategy, software architecture, technology selection, technical due diligence, modernization, infrastructure, security, and scalability.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, our technical advisory approach can be adapted to SaaS companies, marketplaces, eCommerce businesses, enterprise applications, mobile applications, and custom software products.',
          },

          {
            para: 'For businesses operating in India, we can help evaluate technology decisions around application architecture, software development, infrastructure, integrations, security, performance, technical debt, and future scalability.',
          },

          {
            para: 'We also provide technical advisory services for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global markets.',
          },
        ]}
      />


      {/* SERVICE FIT */}

      <ServiceFitSection
        heading="Who Needs Technical Advisory Services?"
        intro="Technical advisory can help businesses that need independent and practical guidance before making important technology or software decisions."
        subintro="Our technical advisory services are suitable for:"
        points={[
          'Startups building technology products',

          'SaaS companies',

          'Enterprise software businesses',

          'Businesses evaluating technology stacks',

          'Companies planning software architecture',

          'Businesses modernizing legacy systems',

          'Organizations evaluating technical risks',

          'Businesses scaling existing applications',

          'Companies planning major technology investments',

          'Businesses integrating multiple software systems',
        ]}
        finalPara="Whether you are evaluating a technology stack, reviewing software architecture, planning a modernization project, assessing technical risks, preparing for scale, or making a major technology investment, technical advisory can provide an independent and structured perspective before important decisions are made."
      />


      {/* FAQ */}

      <MainServiceFAQ
        heading="Technical Advisory Services FAQs"
        faqs={s_data.faqs}
      />


      {/* FINAL CTA */}

      <MainServiceCTA
        heading="Need Expert Guidance on a Technology Decision?"
        description="Get practical technical guidance for software architecture, technology strategy, modernization, security, infrastructure, and scalability."
      />
    </>
  );
}