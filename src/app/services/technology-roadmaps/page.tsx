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
  title: 'Technology Roadmap Consulting Company in Mumbai & India | Technology Roadmap Services',
  description:
    'VoidMatrix provides technology roadmap consulting services in Mumbai and India covering technology planning, architecture roadmaps, development planning, infrastructure, scalability, security, and long-term technology strategy.',
  path: '/services/technology-roadmaps',
});


const s_data = serviceData['/services/technology-roadmaps'];


const contents = [
  {
    id: 'technologyroadmap1',
    para: 'A technology roadmap is a structured plan that defines how a business should develop, improve, and scale its technology over time. It connects business objectives with applications, architecture, infrastructure, databases, APIs, security, integrations, development priorities, and future technology requirements.',
  },

  {
    id: 'technologyroadmap2',
    para: 'At VoidMatrix, we help businesses create practical technology roadmaps based on their current technology environment, business objectives, product requirements, development plans, available resources, and long-term growth goals. Our approach focuses on creating a roadmap that development and business teams can actually execute.',
  },

  {
    id: 'technologyroadmap3',
    para: 'Businesses often need to make technology decisions about application architecture, technology stacks, databases, cloud infrastructure, APIs, security, integrations, scalability, technical debt, and modernization. Without a structured roadmap, these decisions can become disconnected and create unnecessary technical complexity.',
  },

  {
    id: 'technologyroadmap4',
    para: 'Our technology roadmap services can support businesses from the early product and MVP stage through product development, technology optimization, modernization, and large-scale growth. We can also create roadmaps for existing systems that require modernization, migration, improved performance, security, or scalability.',
  },

  {
    id: 'technologyroadmap5',
    para: 'A technology roadmap does not require every future technology decision to be finalized immediately. We help businesses identify current priorities, technical dependencies, future requirements, and logical implementation phases so that technology investments can be made at the appropriate stage.',
  },

  {
    id: 'technologyroadmap6',
    para: 'VoidMatrix provides technology roadmap consulting services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Our technology planning approach can be adapted to SaaS platforms, marketplaces, eCommerce businesses, mobile applications, websites, enterprise software, and custom digital products.',
  },
];


export default function TechnologyRoadmapsPage() {
  return (
    <>
      {/* HERO */}

      <Hero
        eyebrow="Technology Roadmap Consulting Company in Mumbai, India"
        title={
          <>
            Plan Technology For
            <span className="text-(--primary)"> Long-Term Growth.</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Practical technology roadmaps for architecture, development, infrastructure,
                  security, scalability, and modernization.
                </span>
                <br />
                VoidMatrix helps businesses create structured technology plans that connect
                current requirements with future business and product goals.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Technology <span className="text-(--primary)">Strategy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Architecture <span className="text-(--primary)">Planning</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Development <span className="text-(--primary)">Roadmap</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Scalability <span className="text-(--primary)">Planning</span>
              </span>
            </div>
          </>
        }
      />


      {/* WHAT IS TECHNOLOGY ROADMAP */}

      <WhaIsService
        heading="What Is a Technology Roadmap?"
        contents={contents}
      />


      {/* TECHNOLOGY ROADMAP SERVICES */}

      <ServiceCoreSection
        heading="Our Technology Roadmap Services"
        intro="We help businesses plan technology investments, architecture, development, infrastructure, modernization, security, and scalability through structured technology roadmaps."
        items={[
          {
            item_link: 'technology-strategy-roadmap',
            title: 'Technology Strategy Roadmap',
            description:
              'Define technology priorities and long-term technical direction around business, product, and growth objectives.',
          },

          {
            item_link: 'application-architecture-roadmap',
            title: 'Application Architecture Roadmap',
            description:
              'Plan application architecture improvements, technical components, dependencies, and future architecture requirements.',
          },

          {
            item_link: 'development-roadmap',
            title: 'Development Roadmap',
            description:
              'Create structured development phases that organize technical work, dependencies, releases, and future development priorities.',
          },

          {
            item_link: 'technology-modernization-roadmap',
            title: 'Technology Modernization Roadmap',
            description:
              'Plan the modernization of legacy applications, outdated technologies, technical debt, infrastructure, and development systems.',
          },

          {
            item_link: 'cloud-infrastructure-roadmap',
            title: 'Cloud & Infrastructure Roadmap',
            description:
              'Plan cloud infrastructure, hosting, storage, deployment, monitoring, performance, reliability, and future infrastructure requirements.',
          },

          {
            item_link: 'scalability-security-roadmap',
            title: 'Scalability & Security Roadmap',
            description:
              'Create technology priorities for application scalability, security, reliability, performance, and long-term system growth.',
          },
        ]}
        details={[
          {
            item_link_id: 'technology-strategy-roadmap',
            heading: 'Technology Strategy Roadmap',
            descriptions: [
              {
                para: 'A technology strategy roadmap connects business objectives with the technology capabilities required to support current operations and future growth.',
              },

              {
                para: 'We evaluate the current technology environment, business requirements, product objectives, development plans, and future technology needs to identify practical priorities.',
              },

              {
                para: 'The objective is to create a technology direction that helps businesses make informed technical investments without introducing unnecessary complexity.',
              },
            ],
          },

          {
            item_link_id: 'application-architecture-roadmap',
            heading: 'Application Architecture Roadmap',
            descriptions: [
              {
                para: 'An application architecture roadmap defines how the structure of an application should evolve as product requirements, users, integrations, and business complexity increase.',
              },

              {
                para: 'We consider application components, APIs, databases, services, integrations, dependencies, performance requirements, security, and scalability when planning architecture improvements.',
              },

              {
                para: 'A structured architecture roadmap helps development teams understand which technical improvements should be addressed first and how future architecture changes can be introduced.',
              },
            ],
          },

          {
            item_link_id: 'development-roadmap',
            heading: 'Development Roadmap',
            descriptions: [
              {
                para: 'A development roadmap organizes technical development work into logical phases based on business priorities, product requirements, dependencies, and available development resources.',
              },

              {
                para: 'We help identify development priorities, technical dependencies, testing requirements, integrations, deployment requirements, and future development phases.',
              },

              {
                para: 'This provides development teams with a clearer technical direction and helps businesses understand how technology work should progress over time.',
              },
            ],
          },

          {
            item_link_id: 'technology-modernization-roadmap',
            heading: 'Technology Modernization Roadmap',
            descriptions: [
              {
                para: 'Technology modernization roadmaps help businesses plan improvements to legacy applications, outdated technology stacks, technical debt, development processes, and infrastructure.',
              },

              {
                para: 'We identify areas where modernization can improve maintainability, performance, security, scalability, development efficiency, or compatibility with current business requirements.',
              },

              {
                para: 'The modernization process can be structured into phases so that businesses can improve existing technology without unnecessarily disrupting operations.',
              },
            ],
          },

          {
            item_link_id: 'cloud-infrastructure-roadmap',
            heading: 'Cloud & Infrastructure Roadmap',
            descriptions: [
              {
                para: 'A cloud and infrastructure roadmap defines the infrastructure requirements needed to operate, deploy, monitor, secure, and scale digital products.',
              },

              {
                para: 'We consider hosting, cloud services, storage, deployment processes, monitoring, reliability, performance, security, and future infrastructure requirements.',
              },

              {
                para: 'The objective is to create an infrastructure direction that supports the current product while providing a practical path toward future scale.',
              },
            ],
          },

          {
            item_link_id: 'scalability-security-roadmap',
            heading: 'Scalability & Security Roadmap',
            descriptions: [
              {
                para: 'A scalability and security roadmap focuses on technical improvements required to support increasing users, traffic, data, integrations, and operational requirements.',
              },

              {
                para: 'We consider application performance, infrastructure capacity, security controls, authentication, authorization, data protection, monitoring, and system reliability when defining technology priorities.',
              },

              {
                para: 'The objective is to help businesses prepare their technology environment for growth while addressing important security and reliability requirements.',
              },
            ],
          },
        ]}
      />


      {/* COST */}

      <ServiceCost
        heading="Technology Roadmap Consulting Cost in India"
        costdesc={[
          {
            para: 'Technology roadmap consulting cost in India depends on the size and complexity of the technology environment, business objectives, product requirements, existing architecture, infrastructure, modernization requirements, and the depth of roadmap planning required.',
          },

          {
            para: 'A startup planning technology for a new MVP will require a different roadmap scope from an established business managing multiple applications, legacy systems, cloud infrastructure, integrations, security requirements, and modernization projects.',
          },

          {
            para: 'Our technology roadmap scope is based on the actual technology environment and business requirements rather than applying the same roadmap process to every organization.',
          },
        ]}
      />


      {/* FACTORS */}

      <ServiceFactors
        heading="Factors That Affect Technology Roadmap Cost"
        intro="Technology roadmap requirements vary depending on the existing technology environment, product complexity, infrastructure, business objectives, and future growth requirements."
        facts={[
          'Current technology environment',

          'Business objectives',

          'Product complexity',

          'Application architecture',

          'Technology stack',

          'Technical debt',

          'Number of applications',

          'Integration requirements',

          'Infrastructure requirements',

          'Cloud requirements',

          'Security requirements',

          'Scalability requirements',
        ]}
      />


      {/* COMPARISON */}

      <ServiceComp
        heading="Without a Technology Roadmap vs Structured Technology Roadmap"
        desc="Making technology decisions without a structured roadmap can result in disconnected technical decisions, unnecessary technology changes, increasing technical debt, unclear priorities, inefficient development, and unexpected infrastructure requirements. A structured technology roadmap provides a clearer approach to technology strategy, architecture, development, infrastructure, modernization, security, and scalability. The objective is not to predict every technical decision years in advance, but to establish practical priorities and a direction that can evolve with the business."
      />


      {/* CTA */}

      <CtaButtonRe
        title="Get Technology Roadmap Estimate"
        url="/contact"
      />


      {/* APPROACH */}

      <ServiceApproachSection
        heading="Our Technology Roadmap Process"
        intro="We follow a structured technology planning process designed to understand the current technology environment, business objectives, product requirements, and future growth requirements before creating the roadmap."
        steps={[
          {
            title: 'Technology & Business Discovery',

            description:
              'We understand the business objectives, product requirements, current technology environment, development stage, and future technology goals.',

            points: [
              'Business objectives',

              'Product requirements',

              'Current technology',

              'Future goals',
            ],
          },

          {
            title: 'Current Technology Assessment',

            description:
              'We evaluate the existing application architecture, technology stack, infrastructure, integrations, security, and technical requirements.',

            points: [
              'Architecture',

              'Technology stack',

              'Infrastructure',

              'Technical requirements',
            ],
          },

          {
            title: 'Technical Priority Planning',

            description:
              'We identify technical priorities based on business requirements, product needs, technical dependencies, risks, and available resources.',

            points: [
              'Technical priorities',

              'Dependencies',

              'Technical debt',

              'Risk areas',
            ],
          },

          {
            title: 'Architecture & Infrastructure Planning',

            description:
              'We define the architecture and infrastructure improvements required to support current functionality and future product growth.',

            points: [
              'Architecture',

              'Cloud infrastructure',

              'APIs',

              'Data systems',
            ],
          },

          {
            title: 'Technology Roadmap',

            description:
              'We organize technology priorities into practical phases that development and business teams can execute over time.',

            points: [
              'Technology phases',

              'Development priorities',

              'Implementation timeline',

              'Future requirements',
            ],
          },

          {
            title: 'Scale, Security & Modernization Planning',

            description:
              'We consider future scalability, security, modernization, performance, reliability, and infrastructure requirements as the business grows.',

            points: [
              'Scalability',

              'Security',

              'Modernization',

              'Performance',
            ],
          },
        ]}
      />


      {/* MUMBAI / PUNE / INDIA / GLOBAL */}

      <ServiceCost
        heading="Technology Roadmap Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, VoidMatrix provides technology roadmap consulting across technology strategy, application architecture, development planning, infrastructure, modernization, security, and scalability.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, our technology roadmap approach can be adapted to SaaS platforms, marketplaces, eCommerce businesses, mobile applications, websites, enterprise software, and custom digital products.',
          },

          {
            para: 'For businesses building and scaling products in India, we can help structure technology priorities around product requirements, operational workflows, development resources, infrastructure needs, security, and future scalability.',
          },

          {
            para: 'We also provide technology roadmap consulting for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global markets.',
          },
        ]}
      />


      {/* SERVICE FIT */}

      <ServiceFitSection
        heading="Who Needs Technology Roadmap Services?"
        intro="Technology roadmap consulting can help businesses that need greater clarity around their technology direction, technical priorities, architecture, infrastructure, and long-term development requirements."
        subintro="Our technology roadmap services are suitable for:"
        points={[
          'Early-stage startups',

          'Technology startups',

          'SaaS businesses',

          'Marketplace businesses',

          'eCommerce businesses',

          'Mobile application businesses',

          'Businesses modernizing legacy systems',

          'Businesses planning major technology upgrades',

          'Businesses scaling existing digital products',

          'Organizations managing complex technology environments',
        ]}
        finalPara="Whether you are planning technology for a new product, scaling an existing platform, modernizing legacy systems, improving architecture, or preparing infrastructure for future growth, a structured technology roadmap can provide greater clarity around technical priorities and investment."
      />


      {/* FAQ */}

      <MainServiceFAQ
        heading="Technology Roadmap Services FAQs"
        faqs={s_data.faqs}
      />


      {/* FINAL CTA */}

      <MainServiceCTA
        heading="Need a Clear Technology Direction? Let's Build the Roadmap"
        description="Get practical technology strategy, architecture, development, infrastructure, security, and scalability planning for your business."
      />
    </>
  );
}