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
  title: 'Startup Consulting Company in Mumbai & India | Startup Consulting Services',
  description:
    'VoidMatrix provides startup consulting services in Mumbai and India covering technology strategy, product development, business planning, MVP development, digital growth, and scalable technology solutions.',
  path: '/services/startup-consulting',
});


const s_data = serviceData['/services/startup-consulting'];


const contents = [
  {
    id: 'startupconsulting1',
    para: 'Startup consulting is the process of helping founders make better technology, product, business, and growth decisions while building and scaling a startup. A startup consultant can help founders evaluate ideas, define products, plan MVPs, select technology, structure development, and create a roadmap for sustainable growth.',
  },

  {
    id: 'startupconsulting2',
    para: 'At VoidMatrix, we work with startups to connect business objectives with practical technology and product strategies. Our startup consulting approach focuses on understanding the business model, target users, product requirements, technical requirements, available resources, and long-term goals before recommending a solution.',
  },

  {
    id: 'startupconsulting3',
    para: 'Startup founders often have to make important decisions about MVP development, technology stack, product architecture, development costs, hiring, outsourcing, integrations, security, scalability, and digital marketing. The right decisions at an early stage can reduce unnecessary development costs and help the startup move faster.',
  },

  {
    id: 'startupconsulting4',
    para: 'Our startup consulting services can support founders from the idea and validation stage through MVP development, product launch, technology optimization, and growth. We can also work with startups that already have a product but need help improving their technology, product experience, performance, or development strategy.',
  },

  {
    id: 'startupconsulting5',
    para: 'A startup does not always need to build every feature immediately. We help prioritize features and technology requirements around the MVP and business objectives so that development resources are focused on the functionality that matters most during the initial product stage.',
  },

  {
    id: 'startupconsulting6',
    para: 'VoidMatrix provides startup consulting services for founders and businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Our consulting approach can be adapted to technology startups, SaaS businesses, marketplaces, eCommerce platforms, mobile applications, and custom digital products.',
  },
];


export default function StartupConsultingPage() {
  return (
    <>
      {/* HERO */}

      <Hero
        eyebrow="Startup Consulting Company in Mumbai, India"
        title={
          <>
            Build Smarter. Launch
            <span className="text-(--primary)"> Faster.</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Practical startup consulting for technology, product, MVP, and growth decisions.
                </span>
                <br />
                VoidMatrix helps founders turn ideas into scalable digital products with a
                structured technology and product strategy.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Startup <span className="text-(--primary)">Strategy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                MVP <span className="text-(--primary)">Planning</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Technology <span className="text-(--primary)">Consulting</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Product <span className="text-(--primary)">Strategy</span>
              </span>
            </div>
          </>
        }
      />


      {/* WHAT IS STARTUP CONSULTING */}

      <WhaIsService
        heading="What Is Startup Consulting?"
        contents={contents}
      />


      {/* STARTUP CONSULTING SERVICES */}

      <ServiceCoreSection
        heading="Our Startup Consulting Services"
        intro="We help startup founders make practical decisions across technology, product development, MVP planning, architecture, development strategy, and digital growth."
        items={[
          {
            item_link: 'startup-strategy-consulting',
            title: 'Startup Strategy Consulting',
            description:
              'Define technology, product, development, and digital strategies around your startup business objectives.',
          },

          {
            item_link: 'mvp-consulting',
            title: 'MVP Consulting',
            description:
              'Identify essential MVP features, prioritize development requirements, and create a practical roadmap for launching your first product.',
          },

          {
            item_link: 'technology-consulting',
            title: 'Technology Consulting',
            description:
              'Evaluate technology requirements, architecture, technology stacks, integrations, security, and scalability for your startup.',
          },

          {
            item_link: 'product-consulting',
            title: 'Product Consulting',
            description:
              'Transform business requirements into structured product features, user journeys, workflows, and development priorities.',
          },

          {
            item_link: 'startup-development-consulting',
            title: 'Startup Development Consulting',
            description:
              'Create development strategies, technical roadmaps, project structures, and practical approaches for building digital products.',
          },

          {
            item_link: 'startup-growth-consulting',
            title: 'Startup Growth Consulting',
            description:
              'Connect technology, website, SEO, digital marketing, analytics, and conversion strategies with startup growth objectives.',
          },
        ]}
        details={[
          {
            item_link_id: 'startup-strategy-consulting',
            heading: 'Startup Strategy Consulting',
            descriptions: [
              {
                para: 'Startup strategy consulting helps founders understand what needs to be built, why it needs to be built, and how technology should support the business model.',
              },

              {
                para: 'We analyze business objectives, target customers, product requirements, competition, operational requirements, and technology needs to create a practical startup roadmap.',
              },

              {
                para: 'The objective is to help founders make informed decisions before committing significant resources to development or technology infrastructure.',
              },
            ],
          },

          {
            item_link_id: 'mvp-consulting',
            heading: 'MVP Consulting',
            descriptions: [
              {
                para: 'MVP consulting focuses on identifying the minimum set of features required to launch and validate a product without unnecessarily building a large and expensive first version.',
              },

              {
                para: 'We help prioritize core functionality, user journeys, integrations, administrative requirements, and technical infrastructure according to the startup objectives.',
              },

              {
                para: 'A structured MVP roadmap helps development teams focus on essential functionality and provides a clearer path toward future product versions.',
              },
            ],
          },

          {
            item_link_id: 'technology-consulting',
            heading: 'Technology Consulting',
            descriptions: [
              {
                para: 'Technology consulting helps startups make decisions about application architecture, technology stacks, databases, APIs, cloud infrastructure, storage, security, integrations, and scalability.',
              },

              {
                para: 'We evaluate the technology requirements of the product and recommend an architecture appropriate for the current stage of the startup while keeping future growth in consideration.',
              },

              {
                para: 'The objective is to avoid unnecessary technical complexity while creating a foundation that can support future product development.',
              },
            ],
          },

          {
            item_link_id: 'product-consulting',
            heading: 'Product Consulting',
            descriptions: [
              {
                para: 'Product consulting connects business requirements with the actual product experience. We help structure features, workflows, user journeys, dashboards, customer interactions, and product priorities.',
              },

              {
                para: 'The process can include breaking large ideas into smaller functional requirements that development teams can understand and implement.',
              },

              {
                para: 'This helps founders move from a general product idea toward a clearer and more actionable product specification.',
              },
            ],
          },

          {
            item_link_id: 'startup-development-consulting',
            heading: 'Startup Development Consulting',
            descriptions: [
              {
                para: 'Development consulting helps startups create a practical approach for executing their technology roadmap. This can include project structure, development phases, technology decisions, API requirements, integrations, testing, deployment, and future scalability.',
              },

              {
                para: 'We help identify dependencies and technical priorities before development progresses too far, reducing the risk of expensive changes later in the project.',
              },

              {
                para: 'The objective is to create a development process that matches the startup stage, available resources, product complexity, and business objectives.',
              },
            ],
          },

          {
            item_link_id: 'startup-growth-consulting',
            heading: 'Startup Growth Consulting',
            descriptions: [
              {
                para: 'Startup growth consulting connects the digital product with acquisition and conversion objectives. We consider website development, SEO, digital marketing, analytics, conversion optimization, and other digital growth requirements.',
              },

              {
                para: 'A technically strong product still needs an effective customer acquisition and conversion strategy. We help identify how technology and digital marketing can work together.',
              },

              {
                para: 'The objective is to create a more connected approach between product development, technology, marketing, customer acquisition, and business growth.',
              },
            ],
          },
        ]}
      />


      {/* COST */}

      <ServiceCost
        heading="Startup Consulting Cost in India"
        costdesc={[
          {
            para: 'Startup consulting cost in India depends on the scope of consulting, startup stage, business model, product complexity, technology requirements, research requirements, and the number of areas that need strategic support.',
          },

          {
            para: 'A startup looking for a technology stack recommendation and MVP roadmap will require a different consulting scope from a startup that needs complete product, architecture, development, infrastructure, and growth planning.',
          },

          {
            para: 'Our consulting scope is based on the actual requirements of the startup rather than applying the same consulting package to every business.',
          },
        ]}
      />


      {/* FACTORS */}

      <ServiceFactors
        heading="Factors That Affect Startup Consulting Cost"
        intro="Startup consulting requirements vary significantly depending on the product, business model, development stage, and strategic objectives."
        facts={[
          'Startup stage',

          'Business model complexity',

          'Product complexity',

          'MVP requirements',

          'Technology stack',

          'Architecture requirements',

          'Number of integrations',

          'Research requirements',

          'Development planning',

          'Infrastructure requirements',

          'Security requirements',

          'Scalability requirements',
        ]}
      />


      {/* COMPARISON */}

      <ServiceComp
        heading="Building Without Consulting vs Startup Technology Consulting"
        desc="Building without a structured technology strategy can result in unclear requirements, unnecessary features, technical rework, poor architecture decisions, and inefficient development spending. Startup consulting provides a structured approach to product planning, MVP prioritization, technology selection, architecture, development strategy, and scalability. The objective is not to add unnecessary complexity, but to help founders make better decisions before investing heavily in development."
      />


      {/* CTA */}

      <CtaButtonRe
        title="Get Startup Consulting Estimate"
        url="/contact"
      />


      {/* APPROACH */}

      <ServiceApproachSection
        heading="Our Startup Consulting Process"
        intro="We follow a structured consulting process designed to understand the startup, product, technology requirements, and business objectives before creating recommendations."
        steps={[
          {
            title: 'Business & Product Discovery',

            description:
              'We understand the business model, target users, product idea, objectives, market requirements, and current development stage.',

            points: [
              'Business objectives',

              'Target users',

              'Product idea',

              'Current stage',
            ],
          },

          {
            title: 'Requirement Analysis',

            description:
              'We convert the product idea into structured functional and technical requirements.',

            points: [
              'Feature requirements',

              'User journeys',

              'Business workflows',

              'Technical requirements',
            ],
          },

          {
            title: 'MVP Prioritization',

            description:
              'We separate essential MVP functionality from features that can be introduced during later product phases.',

            points: [
              'Core features',

              'MVP scope',

              'Feature priorities',

              'Future roadmap',
            ],
          },

          {
            title: 'Technology & Architecture Planning',

            description:
              'We evaluate the technology and architecture required to build the product efficiently and support future development.',

            points: [
              'Technology stack',

              'Application architecture',

              'Database strategy',

              'API requirements',
            ],
          },

          {
            title: 'Development Roadmap',

            description:
              'We create a practical development roadmap that organizes technical work into logical phases.',

            points: [
              'Development phases',

              'Technical dependencies',

              'Testing requirements',

              'Deployment planning',
            ],
          },

          {
            title: 'Growth & Scale Planning',

            description:
              'We consider future scalability, security, infrastructure, product improvements, analytics, and digital growth requirements.',

            points: [
              'Scalability',

              'Security',

              'Infrastructure',

              'Growth strategy',
            ],
          },
        ]}
      />


      {/* MUMBAI / PUNE / INDIA / GLOBAL */}

      <ServiceCost
        heading="Startup Consulting Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For startups in Mumbai, VoidMatrix provides consulting across technology strategy, MVP planning, product development, website development, software architecture, and digital growth.',
          },

          {
            para: 'For startups in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, our consulting approach can be adapted to technology startups, SaaS companies, marketplaces, eCommerce businesses, and custom software products.',
          },

          {
            para: 'For startups building products for the Indian market, we can help structure technology and product decisions around local business requirements, customer journeys, operational workflows, and future scalability.',
          },

          {
            para: 'We also provide startup consulting for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global markets.',
          },
        ]}
      />


      {/* SERVICE FIT */}

      <ServiceFitSection
        heading="Who Needs Startup Consulting Services?"
        intro="Startup consulting can help founders who need practical guidance before or during the development of a technology product."
        subintro="Our startup consulting services are suitable for:"
        points={[
          'Early-stage startups',

          'Technology startups',

          'SaaS startups',

          'Marketplace startups',

          'eCommerce startups',

          'Mobile application startups',

          'Founders validating product ideas',

          'Businesses building an MVP',

          'Startups scaling an existing product',

          'Businesses rebuilding legacy technology',
        ]}
        finalPara="Whether you are validating a product idea, planning an MVP, selecting a technology stack, building a development roadmap, or preparing an existing product for growth, structured startup consulting can help reduce uncertainty and improve technology decisions."
      />


      {/* FAQ */}

      <MainServiceFAQ
        heading="Startup Consulting Services FAQs"
        faqs={s_data.faqs}
      />


      {/* FINAL CTA */}

      <MainServiceCTA
        heading="Have a Startup Idea? Let's Build the Right Roadmap"
        description="Get practical technology, product, MVP, and development guidance for your startup."
      />
    </>
  );
}