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
  title: 'Product Strategy Consulting Company in Mumbai & India | Product Strategy Services',
  description:
    'VoidMatrix provides product strategy consulting services in Mumbai and India covering product discovery, feature planning, MVP strategy, user journeys, product roadmaps, technology alignment, and scalable digital product development.',
  path: '/services/product-strategy',
});


const s_data = serviceData['/services/product-strategy'];


const contents = [
  {
    id: 'productstrategy1',
    para: 'Product strategy is the process of defining what a digital product should achieve, who it should serve, which problems it should solve, and how its features should be prioritized to support business objectives. A structured product strategy helps businesses move from an initial idea toward a clear and actionable product roadmap.',
  },

  {
    id: 'productstrategy2',
    para: 'At VoidMatrix, we connect business objectives, customer requirements, product functionality, technology, and development planning to create practical product strategies. We focus on understanding the product vision, target users, business model, market requirements, and technical considerations before defining product priorities.',
  },

  {
    id: 'productstrategy3',
    para: 'Businesses often have many product ideas but limited time, budget, and development resources. Product strategy helps determine which features should be built first, which requirements can be postponed, and how the product should evolve through different development stages.',
  },

  {
    id: 'productstrategy4',
    para: 'Our product strategy services can support businesses from early product discovery and MVP planning through product launch, optimization, and growth. We can also work with businesses that already have an existing product but need to improve its functionality, user experience, technology alignment, or development roadmap.',
  },

  {
    id: 'productstrategy5',
    para: 'A strong product strategy connects customer problems with business objectives and practical product functionality. We help break larger product concepts into structured features, workflows, user journeys, priorities, and development phases so teams have a clearer understanding of what needs to be built.',
  },

  {
    id: 'productstrategy6',
    para: 'VoidMatrix provides product strategy consulting services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Our approach can be adapted to SaaS products, marketplaces, eCommerce platforms, mobile applications, websites, business software, and custom digital products.',
  },
];


export default function ProductStrategyPage() {
  return (
    <>
      {/* HERO */}

      <Hero
        eyebrow="Product Strategy Consulting Company in Mumbai, India"
        title={
          <>
            Turn Product Ideas Into
            <span className="text-(--primary)"> Clear Strategy.</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Practical product strategy for discovery, MVP planning, feature prioritization,
                  and product roadmaps.
                </span>
                <br />
                VoidMatrix helps businesses turn product ideas into structured, scalable, and
                development-ready product strategies.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Product <span className="text-(--primary)">Strategy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                MVP <span className="text-(--primary)">Planning</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Feature <span className="text-(--primary)">Prioritization</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Product <span className="text-(--primary)">Roadmaps</span>
              </span>
            </div>
          </>
        }
      />


      {/* WHAT IS PRODUCT STRATEGY */}

      <WhaIsService
        heading="What Is Product Strategy?"
        contents={contents}
      />


      {/* PRODUCT STRATEGY SERVICES */}

      <ServiceCoreSection
        heading="Our Product Strategy Services"
        intro="We help businesses define product direction, prioritize features, structure user journeys, plan MVPs, and create practical product roadmaps aligned with business and technology objectives."
        items={[
          {
            item_link: 'product-discovery',
            title: 'Product Discovery',
            description:
              'Understand business objectives, customer problems, product opportunities, requirements, and market considerations before defining the product direction.',
          },

          {
            item_link: 'mvp-product-strategy',
            title: 'MVP Product Strategy',
            description:
              'Define the essential functionality required to launch and validate a product while avoiding unnecessary features during the initial development stage.',
          },

          {
            item_link: 'feature-prioritization',
            title: 'Feature Prioritization',
            description:
              'Evaluate and prioritize product features based on business objectives, customer needs, product value, development requirements, and available resources.',
          },

          {
            item_link: 'product-roadmap',
            title: 'Product Roadmap Planning',
            description:
              'Create structured product roadmaps that organize features, improvements, technical requirements, and development priorities across different product phases.',
          },

          {
            item_link: 'user-journey-strategy',
            title: 'User Journey Strategy',
            description:
              'Structure user journeys, workflows, product interactions, and customer experiences around the goals of the product and its target users.',
          },

          {
            item_link: 'product-technology-alignment',
            title: 'Product & Technology Alignment',
            description:
              'Connect product requirements with technology, architecture, development requirements, integrations, scalability, and long-term technical objectives.',
          },
        ]}
        details={[
          {
            item_link_id: 'product-discovery',
            heading: 'Product Discovery',
            descriptions: [
              {
                para: 'Product discovery helps businesses understand the problem they are trying to solve, the users they are building for, and the business objectives the product needs to support.',
              },

              {
                para: 'We analyze product ideas, target users, business requirements, customer problems, workflows, and functional requirements to create a clearer understanding of the product opportunity.',
              },

              {
                para: 'The objective is to establish a stronger product foundation before significant development resources are invested into implementation.',
              },
            ],
          },

          {
            item_link_id: 'mvp-product-strategy',
            heading: 'MVP Product Strategy',
            descriptions: [
              {
                para: 'MVP product strategy focuses on identifying the smallest practical version of a product that can deliver its core value and support initial validation.',
              },

              {
                para: 'We help separate essential functionality from features that can be introduced in later product phases based on business priorities and customer requirements.',
              },

              {
                para: 'A structured MVP strategy helps reduce unnecessary development work while creating a clearer path toward future product iterations.',
              },
            ],
          },

          {
            item_link_id: 'feature-prioritization',
            heading: 'Feature Prioritization',
            descriptions: [
              {
                para: 'Feature prioritization helps businesses determine which product functionality should receive development priority and which features can be addressed later.',
              },

              {
                para: 'We evaluate features based on product objectives, customer value, business importance, dependencies, technical requirements, and development effort.',
              },

              {
                para: 'The result is a more structured product backlog that helps development teams focus on functionality with greater business and product value.',
              },
            ],
          },

          {
            item_link_id: 'product-roadmap',
            heading: 'Product Roadmap Planning',
            descriptions: [
              {
                para: 'Product roadmap planning organizes product development into structured phases based on business priorities, customer requirements, technical dependencies, and future product objectives.',
              },

              {
                para: 'We help define what should be developed during the initial product stage and what can be introduced through subsequent releases and improvements.',
              },

              {
                para: 'A practical roadmap gives business and development teams a shared understanding of product direction and future priorities.',
              },
            ],
          },

          {
            item_link_id: 'user-journey-strategy',
            heading: 'User Journey Strategy',
            descriptions: [
              {
                para: 'User journey strategy focuses on understanding how users interact with a digital product from their initial entry point through important actions and outcomes.',
              },

              {
                para: 'We structure user journeys, workflows, product interactions, and functional requirements so that the product experience supports both user objectives and business goals.',
              },

              {
                para: 'Clear user journeys can also help development teams understand the functionality and relationships between different parts of the product.',
              },
            ],
          },

          {
            item_link_id: 'product-technology-alignment',
            heading: 'Product & Technology Alignment',
            descriptions: [
              {
                para: 'Product and technology alignment connects product requirements with the technical systems required to build and operate the product.',
              },

              {
                para: 'We consider application architecture, technology requirements, APIs, databases, integrations, security, scalability, and development dependencies when structuring product requirements.',
              },

              {
                para: 'The objective is to ensure that product decisions remain practical from both business and technical perspectives.',
              },
            ],
          },
        ]}
      />


      {/* COST */}

      <ServiceCost
        heading="Product Strategy Consulting Cost in India"
        costdesc={[
          {
            para: 'Product strategy consulting cost in India depends on the scope of strategy work, product complexity, business model, number of users, research requirements, MVP requirements, and the depth of product planning required.',
          },

          {
            para: 'A startup looking for an MVP roadmap will require a different product strategy scope from an established business that needs complete product restructuring, feature prioritization, user journey planning, and long-term product roadmap development.',
          },

          {
            para: 'Our product strategy scope is based on the actual requirements of the product rather than applying the same strategy process to every business.',
          },
        ]}
      />


      {/* FACTORS */}

      <ServiceFactors
        heading="Factors That Affect Product Strategy Cost"
        intro="Product strategy requirements vary depending on the product stage, business objectives, customer requirements, and complexity of the digital product."
        facts={[
          'Product stage',

          'Business model',

          'Product complexity',

          'Target users',

          'Customer research requirements',

          'MVP scope',

          'Number of features',

          'Feature dependencies',

          'User journey complexity',

          'Technology requirements',

          'Integration requirements',

          'Product roadmap scope',
        ]}
      />


      {/* COMPARISON */}

      <ServiceComp
        heading="Building Without Product Strategy vs Structured Product Strategy"
        desc="Building a product without a clear strategy can result in unclear requirements, excessive features, poor prioritization, changing development direction, unnecessary development costs, and inconsistent product decisions. A structured product strategy provides a clearer approach to product discovery, MVP planning, feature prioritization, user journeys, product roadmaps, and technology alignment. The objective is not to over-plan the product, but to create enough clarity for business and development teams to make better decisions."
      />


      {/* CTA */}

      <CtaButtonRe
        title="Get Product Strategy Estimate"
        url="/contact"
      />


      {/* APPROACH */}

      <ServiceApproachSection
        heading="Our Product Strategy Process"
        intro="We follow a structured product strategy process designed to understand the business, users, product requirements, and technology considerations before defining product priorities."
        steps={[
          {
            title: 'Business & Product Discovery',

            description:
              'We understand the business model, product vision, target users, customer problems, objectives, and current product stage.',

            points: [
              'Business objectives',

              'Product vision',

              'Target users',

              'Customer problems',
            ],
          },

          {
            title: 'Requirement Analysis',

            description:
              'We convert product ideas and business requirements into structured product functionality and user requirements.',

            points: [
              'Product requirements',

              'User journeys',

              'Business workflows',

              'Functional requirements',
            ],
          },

          {
            title: 'Feature Prioritization',

            description:
              'We identify the features that provide the highest product and business value and organize them according to development priorities.',

            points: [
              'Core features',

              'Feature priorities',

              'MVP scope',

              'Future features',
            ],
          },

          {
            title: 'Product Structure',

            description:
              'We organize product functionality into logical modules, workflows, user journeys, and product experiences.',

            points: [
              'Product modules',

              'User flows',

              'Functional structure',

              'Product workflows',
            ],
          },

          {
            title: 'Product Roadmap',

            description:
              'We create a practical roadmap that organizes product development into logical phases and future releases.',

            points: [
              'Development phases',

              'Release priorities',

              'Technical dependencies',

              'Future roadmap',
            ],
          },

          {
            title: 'Technology & Growth Alignment',

            description:
              'We connect product strategy with technology, scalability, security, analytics, and future business growth requirements.',

            points: [
              'Technology alignment',

              'Scalability',

              'Security',

              'Growth requirements',
            ],
          },
        ]}
      />


      {/* MUMBAI / PUNE / INDIA / GLOBAL */}

      <ServiceCost
        heading="Product Strategy Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, VoidMatrix provides product strategy consulting across product discovery, MVP planning, feature prioritization, user journeys, product roadmaps, and technology alignment.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, our product strategy approach can be adapted to SaaS products, marketplaces, eCommerce platforms, mobile applications, websites, and custom software products.',
          },

          {
            para: 'For businesses building products for the Indian market, we can help structure product decisions around local customer requirements, operational workflows, business models, product functionality, and future scalability.',
          },

          {
            para: 'We also provide product strategy consulting for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global markets.',
          },
        ]}
      />


      {/* SERVICE FIT */}

      <ServiceFitSection
        heading="Who Needs Product Strategy Services?"
        intro="Product strategy can help businesses that need greater clarity around what to build, who to build for, how to prioritize features, and how the product should evolve."
        subintro="Our product strategy services are suitable for:"
        points={[
          'Early-stage startups',

          'Technology startups',

          'SaaS businesses',

          'Marketplace businesses',

          'eCommerce businesses',

          'Mobile application businesses',

          'Founders validating product ideas',

          'Businesses planning an MVP',

          'Businesses launching new digital products',

          'Businesses improving existing products',
        ]}
        finalPara="Whether you are validating a product idea, planning an MVP, prioritizing features, restructuring an existing product, or creating a long-term product roadmap, structured product strategy can provide greater clarity before significant development resources are committed."
      />


      {/* FAQ */}

      <MainServiceFAQ
        heading="Product Strategy Services FAQs"
        faqs={s_data.faqs}
      />


      {/* FINAL CTA */}

      <MainServiceCTA
        heading="Have a Product Idea? Let's Define the Right Strategy"
        description="Get practical product strategy, MVP planning, feature prioritization, and roadmap guidance for your digital product."
      />
    </>
  );
}