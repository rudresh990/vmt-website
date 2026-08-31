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
  title: 'Software Consulting Company in Mumbai & India | Software Consulting Services',
  description:
    'VoidMatrix provides software consulting services in Mumbai and India covering software architecture, technology strategy, custom software development, system modernization, integrations, security, scalability, and digital transformation.',
  path: '/services/software-consulting',
});


const s_data = serviceData['/services/software-consulting'];


const contents = [
  {
    id: 'softwareconsulting1',
    para: 'Software consulting is the process of helping businesses make better decisions about software technology, application architecture, development, integrations, security, performance, scalability, and long-term technology planning. A software consultant evaluates business and technical requirements and recommends practical solutions based on the organization’s objectives.',
  },

  {
    id: 'softwareconsulting2',
    para: 'At VoidMatrix, we help businesses understand their software requirements and create practical technology strategies before investing significant resources into development or modernization. Our software consulting approach considers business processes, users, existing systems, technical requirements, integrations, security, scalability, and future growth.',
  },

  {
    id: 'softwareconsulting3',
    para: 'Businesses often face software decisions involving technology stack selection, application architecture, database design, API development, third-party integrations, cloud infrastructure, security, performance, legacy systems, and development planning. Making the right technical decisions can reduce development risks and create a stronger foundation for future growth.',
  },

  {
    id: 'softwareconsulting4',
    para: 'Our software consulting services can support businesses planning a new software product as well as organizations improving or modernizing an existing application. We can evaluate current technology, identify technical limitations, recommend improvements, and create a structured roadmap for future software development.',
  },

  {
    id: 'softwareconsulting5',
    para: 'Not every software problem requires rebuilding an entire system. We help identify the actual technical and business requirements so that organizations can prioritize improvements, integrations, architecture changes, security requirements, performance optimization, and new development according to business priorities.',
  },

  {
    id: 'softwareconsulting6',
    para: 'VoidMatrix provides software consulting services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Our consulting approach can support SaaS platforms, eCommerce businesses, marketplaces, enterprise applications, custom software products, internal business systems, and digital transformation initiatives.',
  },
];


export default function SoftwareConsultingPage() {
  return (
    <>
      {/* HERO */}

      <Hero
        eyebrow="Software Consulting Company in Mumbai, India"
        title={
          <>
            Build Better Software.
            <span className="text-(--primary)"> Make Better Decisions.</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Practical software consulting for technology, architecture, development, and digital transformation.
                </span>
                <br />
                VoidMatrix helps businesses plan, improve, modernize, and scale software systems with a structured technology strategy.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Software <span className="text-(--primary)">Strategy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Technology <span className="text-(--primary)">Consulting</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Architecture <span className="text-(--primary)">Consulting</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Digital <span className="text-(--primary)">Transformation</span>
              </span>
            </div>
          </>
        }
      />


      {/* WHAT IS SOFTWARE CONSULTING */}

      <WhaIsService
        heading="What Is Software Consulting?"
        contents={contents}
      />


      {/* SOFTWARE CONSULTING SERVICES */}

      <ServiceCoreSection
        heading="Our Software Consulting Services"
        intro="We help businesses make practical decisions across software strategy, architecture, technology selection, development planning, system modernization, integrations, security, and scalability."
        items={[
          {
            item_link: 'software-strategy-consulting',
            title: 'Software Strategy Consulting',
            description:
              'Define software and technology strategies around business objectives, operational requirements, product goals, and long-term growth.',
          },

          {
            item_link: 'software-architecture-consulting',
            title: 'Software Architecture Consulting',
            description:
              'Evaluate and plan application architecture, databases, APIs, infrastructure, integrations, security, and scalability requirements.',
          },

          {
            item_link: 'technology-consulting',
            title: 'Technology Consulting',
            description:
              'Evaluate technology stacks, frameworks, platforms, infrastructure, development requirements, and technical decisions for your software project.',
          },

          {
            item_link: 'software-development-consulting',
            title: 'Software Development Consulting',
            description:
              'Create practical development strategies, technical roadmaps, project structures, and implementation plans for custom software.',
          },

          {
            item_link: 'software-modernization-consulting',
            title: 'Software Modernization Consulting',
            description:
              'Evaluate legacy applications and create structured modernization strategies for improving performance, maintainability, security, and scalability.',
          },

          {
            item_link: 'software-integration-consulting',
            title: 'Software Integration Consulting',
            description:
              'Plan APIs, third-party integrations, payment systems, business applications, external services, and data exchange requirements.',
          },
        ]}
        details={[
          {
            item_link_id: 'software-strategy-consulting',
            heading: 'Software Strategy Consulting',
            descriptions: [
              {
                para: 'Software strategy consulting helps businesses determine how technology should support their business objectives, operational requirements, product goals, and future growth.',
              },

              {
                para: 'We analyze business processes, software requirements, users, existing technology, technical dependencies, and future objectives to create a practical software strategy.',
              },

              {
                para: 'The objective is to help businesses make informed technology decisions before committing significant resources to software development or infrastructure.',
              },
            ],
          },

          {
            item_link_id: 'software-architecture-consulting',
            heading: 'Software Architecture Consulting',
            descriptions: [
              {
                para: 'Software architecture consulting focuses on how an application should be structured to support functionality, performance, security, maintainability, integrations, and future scalability.',
              },

              {
                para: 'We evaluate application architecture, databases, APIs, services, authentication requirements, infrastructure, integrations, and technical dependencies according to the software requirements.',
              },

              {
                para: 'A structured architecture approach can help businesses reduce technical complexity and create a stronger foundation for future development.',
              },
            ],
          },

          {
            item_link_id: 'technology-consulting',
            heading: 'Technology Consulting',
            descriptions: [
              {
                para: 'Technology consulting helps businesses make decisions about programming languages, frameworks, databases, APIs, cloud platforms, storage, infrastructure, security, integrations, and development tools.',
              },

              {
                para: 'We evaluate the requirements of the software system and recommend technologies appropriate for the current project while considering future development and scalability.',
              },

              {
                para: 'The objective is to avoid unnecessary technology complexity while selecting tools and platforms that support the actual requirements of the business.',
              },
            ],
          },

          {
            item_link_id: 'software-development-consulting',
            heading: 'Software Development Consulting',
            descriptions: [
              {
                para: 'Software development consulting helps businesses create a practical approach for executing their software roadmap. This can include development phases, technical requirements, APIs, integrations, testing, deployment, and future improvements.',
              },

              {
                para: 'We help identify technical dependencies and development priorities before implementation progresses too far, reducing the risk of expensive changes later in the project.',
              },

              {
                para: 'The objective is to create a development process that matches the software complexity, available resources, business requirements, and long-term objectives.',
              },
            ],
          },

          {
            item_link_id: 'software-modernization-consulting',
            heading: 'Software Modernization Consulting',
            descriptions: [
              {
                para: 'Software modernization consulting helps businesses evaluate existing or legacy applications and identify opportunities to improve architecture, performance, security, maintainability, and scalability.',
              },

              {
                para: 'We analyze existing software requirements, technical limitations, infrastructure, dependencies, and business processes before recommending modernization priorities.',
              },

              {
                para: 'Modernization can be planned as a phased process so businesses can improve their systems without unnecessarily disrupting existing operations.',
              },
            ],
          },

          {
            item_link_id: 'software-integration-consulting',
            heading: 'Software Integration Consulting',
            descriptions: [
              {
                para: 'Software integration consulting focuses on connecting applications, APIs, payment gateways, third-party platforms, business systems, databases, and external services.',
              },

              {
                para: 'We evaluate integration requirements, data flows, authentication, API dependencies, error handling, security, and operational workflows before defining an integration approach.',
              },

              {
                para: 'The objective is to create reliable connections between software systems while maintaining security, maintainability, and future scalability.',
              },
            ],
          },
        ]}
      />


      {/* COST */}

      <ServiceCost
        heading="Software Consulting Cost in India"
        costdesc={[
          {
            para: 'Software consulting cost in India depends on the scope of consulting, software complexity, business requirements, existing technology, architecture requirements, research requirements, integrations, security requirements, and the level of technical planning required.',
          },

          {
            para: 'A business looking for technology stack recommendations and an architecture review will require a different consulting scope from an organization that needs complete software architecture, modernization, development planning, integrations, security, and scalability consulting.',
          },

          {
            para: 'Our consulting scope is based on the actual requirements of the software system rather than applying the same consulting package to every business.',
          },
        ]}
      />


      {/* FACTORS */}

      <ServiceFactors
        heading="Factors That Affect Software Consulting Cost"
        intro="Software consulting requirements vary depending on the software system, business processes, existing technology, technical complexity, and strategic objectives."
        facts={[
          'Software complexity',

          'Business requirements',

          'Existing technology',

          'Application architecture',

          'Technology stack',

          'Database requirements',

          'API requirements',

          'Number of integrations',

          'Legacy system complexity',

          'Security requirements',

          'Performance requirements',

          'Scalability requirements',
        ]}
      />


      {/* COMPARISON */}

      <ServiceComp
        heading="Software Development Without Consulting vs Software Consulting"
        desc="Starting software development without a structured technical strategy can result in unclear requirements, unsuitable technology choices, architectural limitations, technical rework, integration problems, security gaps, and inefficient development spending. Software consulting provides a structured approach to technology planning, architecture, development strategy, modernization, integrations, security, and scalability. The objective is not to add unnecessary complexity, but to help businesses make better software decisions before investing heavily in development."
      />


      {/* CTA */}

      <CtaButtonRe
        title="Get Software Consulting Estimate"
        url="/contact"
      />


      {/* APPROACH */}

      <ServiceApproachSection
        heading="Our Software Consulting Process"
        intro="We follow a structured consulting process designed to understand the business, software requirements, existing technology, and technical objectives before creating recommendations."
        steps={[
          {
            title: 'Business & Software Discovery',

            description:
              'We understand the business model, operational requirements, users, software objectives, existing systems, and current technology environment.',

            points: [
              'Business objectives',

              'Software requirements',

              'Users and workflows',

              'Existing systems',
            ],
          },

          {
            title: 'Requirement Analysis',

            description:
              'We convert business requirements into structured functional and technical software requirements.',

            points: [
              'Functional requirements',

              'User workflows',

              'Business processes',

              'Technical requirements',
            ],
          },

          {
            title: 'Technology Evaluation',

            description:
              'We evaluate technology options, existing systems, development requirements, integrations, and infrastructure according to the software objectives.',

            points: [
              'Technology stack',

              'Framework requirements',

              'Database strategy',

              'Infrastructure',
            ],
          },

          {
            title: 'Architecture Planning',

            description:
              'We evaluate and plan the application architecture required to build, improve, modernize, and scale the software system.',

            points: [
              'Application architecture',

              'Database architecture',

              'API requirements',

              'Integration architecture',
            ],
          },

          {
            title: 'Technical Roadmap',

            description:
              'We create a practical technical roadmap that organizes software development, modernization, integrations, testing, and deployment into logical phases.',

            points: [
              'Development phases',

              'Technical dependencies',

              'Testing requirements',

              'Deployment planning',
            ],
          },

          {
            title: 'Security & Scale Planning',

            description:
              'We consider security, performance, infrastructure, scalability, monitoring, future development, and long-term software requirements.',

            points: [
              'Security',

              'Performance',

              'Scalability',

              'Infrastructure',
            ],
          },
        ]}
      />


      {/* MUMBAI / PUNE / INDIA / GLOBAL */}

      <ServiceCost
        heading="Software Consulting Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, VoidMatrix provides software consulting across technology strategy, software architecture, custom software planning, application development, system modernization, integrations, and scalability.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, our software consulting approach can be adapted to SaaS companies, eCommerce businesses, marketplaces, enterprise applications, internal business systems, and custom software products.',
          },

          {
            para: 'For businesses building software for the Indian market, we can help structure technology and software decisions around local business requirements, operational workflows, customer journeys, integrations, security, and future scalability.',
          },

          {
            para: 'We also provide software consulting for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global markets.',
          },
        ]}
      />


      {/* SERVICE FIT */}

      <ServiceFitSection
        heading="Who Needs Software Consulting Services?"
        intro="Software consulting can help businesses that need practical technical guidance before developing, improving, modernizing, or scaling a software system."
        subintro="Our software consulting services are suitable for:"
        points={[
          'Businesses planning custom software',

          'SaaS companies',

          'Enterprise applications',

          'eCommerce businesses',

          'Marketplace platforms',

          'Businesses modernizing legacy systems',

          'Companies evaluating technology stacks',

          'Businesses planning software architecture',

          'Organizations integrating multiple systems',

          'Businesses scaling existing applications',
        ]}
        finalPara="Whether you are planning a new software product, evaluating your technology stack, improving an existing application, modernizing legacy software, integrating multiple systems, or preparing your application for growth, structured software consulting can help reduce technical uncertainty and improve technology decisions."
      />


      {/* FAQ */}

      <MainServiceFAQ
        heading="Software Consulting Services FAQs"
        faqs={s_data.faqs}
      />


      {/* FINAL CTA */}

      <MainServiceCTA
        heading="Need Help With Your Software Strategy?"
        description="Get practical technology, architecture, development, modernization, and scalability guidance for your software project."
      />
    </>
  );
}