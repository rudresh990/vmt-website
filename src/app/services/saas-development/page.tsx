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

import WhyVmtService from '@/components/services/WhyVmtService';

import WhatYouGet from '@/components/services/WhatYouGet';

export const metadata: Metadata = buildMetadata({
  title: 'SaaS Development Company in Mumbai, Pune & India | VoidMatrix',

  description:
    'VoidMatrix builds scalable SaaS products for startups and enterprises across Mumbai, Pune and India. Get custom SaaS development, MVP development, multi-tenant platforms, subscription systems and cloud-ready architecture.',

  path: '/services/saas-development',
});

const s_data = serviceData['/services/saas-development'];

const whyContents = [
  {
    id: 'why1',

    paraHeading: 'SaaS Architecture Built for Scale',

    para: 'We design SaaS platforms with future growth in mind, including application architecture, database design, APIs, user management, infrastructure and scalability requirements.',
  },

  {
    id: 'why2',

    paraHeading: 'MVP to Production SaaS',

    para: 'Whether you are validating a new SaaS idea or expanding an existing product, VoidMatrix can structure the development roadmap around the features that matter most at each stage.',
  },

  {
    id: 'why3',

    paraHeading: 'Multi-Tenant & Subscription Ready',

    para: 'Build SaaS products with appropriate tenant architecture, user roles, subscription workflows, billing integrations and access controls designed around your business model.',
  },

  {
    id: 'why4',

    paraHeading: 'Long-Term Product Engineering',

    para: 'We treat SaaS as a continuously evolving product rather than a one-time website project. Architecture and development decisions are made with future features, integrations, users and infrastructure growth in mind.',
  },
];

const whatYouGetContents = [
  {
    id: 'get1',

    paraHeading: 'SaaS Product Architecture',

    para: 'A scalable technical foundation covering application architecture, database structure, APIs and infrastructure requirements.',
  },

  {
    id: 'get2',

    paraHeading: 'MVP Development',

    para: 'A focused first version of your SaaS product built around the features required to validate the product and reach initial users.',
  },

  {
    id: 'get3',

    paraHeading: 'Multi-Tenant Architecture',

    para: 'Tenant-aware application architecture designed to support multiple customers while maintaining appropriate data and access boundaries.',
  },

  {
    id: 'get4',

    paraHeading: 'Subscription & Billing',

    para: 'Subscription plans, access control, billing workflows and payment gateway integrations based on your SaaS business model.',
  },

  {
    id: 'get5',

    paraHeading: 'Admin & User Dashboards',

    para: 'Role-based dashboards and interfaces for customers, administrators, teams and other users within your SaaS platform.',
  },

  {
    id: 'get6',

    paraHeading: 'Deployment & Ongoing Engineering',

    para: 'Cloud deployment, production setup, performance improvements, feature expansion, maintenance and technical support as your SaaS grows.',
  },
];

const contents = [
  {
    id: 'saas1',

    para: 'SaaS, or Software as a Service, is a software delivery model where customers access an application over the internet rather than installing and maintaining the software locally. SaaS products commonly use recurring subscriptions and centralized cloud infrastructure to serve multiple customers.',
  },

  {
    id: 'saas2',

    para: 'A SaaS platform typically includes user authentication, account management, dashboards, application functionality, databases, APIs, billing or subscription management and infrastructure capable of supporting multiple users and organizations.',
  },

  {
    id: 'saas3',

    para: 'The architecture of a SaaS product needs to account for how customers are separated, how data is stored, how users access features, how subscriptions affect permissions and how the application will perform as the customer base increases.',
  },

  {
    id: 'saas4',

    para: 'Businesses build SaaS products for many different use cases, including productivity tools, business management platforms, marketplaces, analytics products, workflow systems, CRM platforms, industry-specific software and customer-facing applications.',
  },

  {
    id: 'saas5',

    para: 'VoidMatrix provides SaaS development services covering product planning, MVP development, application architecture, frontend and backend development, multi-tenant systems, APIs, subscription workflows, integrations, deployment and ongoing product engineering.',
  },
];

const engineeringSteps = [
  {
    title: 'Product Discovery & SaaS Requirements',

    description:
      'We understand the product idea, target customers, business model, workflows and core functionality before defining the development scope.',

    points: [
      'Product requirement analysis',

      'User and customer definition',

      'Core feature identification',

      'Technical feasibility',
    ],
  },

  {
    title: 'SaaS Architecture & Product Planning',

    description:
      'We define the technical architecture required for the SaaS product, including application structure, database design, tenant strategy, APIs and infrastructure.',

    points: [
      'System architecture',

      'Database architecture',

      'Multi-tenant strategy',

      'API planning',
    ],
  },

  {
    title: 'MVP & Core Product Development',

    description:
      'The core SaaS product is developed in structured iterations, focusing first on functionality required to launch and validate the product.',

    points: [
      'Frontend development',

      'Backend development',

      'Core SaaS features',

      'User dashboards',
    ],
  },

  {
    title: 'Authentication, Billing & Integrations',

    description:
      'We connect the product with the systems required for users, subscriptions, payments and business workflows.',

    points: [
      'Authentication & authorization',

      'Subscription workflows',

      'Payment integrations',

      'Third-party APIs',
    ],
  },

  {
    title: 'Testing, Security & Deployment',

    description:
      'The product is tested across functionality, integrations, performance and security before production deployment.',

    points: [
      'Functional testing',

      'Integration testing',

      'Security validation',

      'Cloud deployment',
    ],
  },

  {
    title: 'Product Scaling & Continuous Improvement',

    description:
      'After launch, the SaaS platform can evolve through new features, integrations, performance improvements and infrastructure scaling.',

    points: [
      'Feature expansion',

      'Performance optimization',

      'Infrastructure scaling',

      'Long-term product support',
    ],
  },
];

export default function SaaSDevelopmentPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="SaaS Development Company in Mumbai, India"
        title={
          <>
            Build Scalable
            <span className="text-(--primary)"> SaaS Products</span> for
            <br />
            Startups & Enterprises Across
            <span className="text-(--primary)"> Mumbai, India</span> & Global Markets
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Turn your SaaS idea into a scalable software product built for real customers.
                </span>
                <br />
                VoidMatrix develops SaaS MVPs, multi-tenant platforms, subscription products,
                business applications and cloud-ready SaaS systems for startups, SMEs and
                enterprises.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                MVP Development from <span className="text-(--primary)">₹2.5L</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Multi-Tenant <span className="text-(--primary)">Ready</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Cloud <span className="text-(--primary)">Native</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Built for <span className="text-(--primary)">Scale</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHY CHOOSE VOIDMATRIX
      ===================================================== */}

      <WhyVmtService
        heading="Why Choose VoidMatrix for SaaS Development?"
        contents={whyContents}
      />

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <WhatYouGet
        heading="What You Get With Our SaaS Development Services"
        contents={whatYouGetContents}
      />

      {/* =====================================================
          CORE SAAS SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our SaaS Development Services"
        intro="From validating an MVP to building a production-ready SaaS platform, VoidMatrix provides the engineering capabilities required to design, develop, launch and scale modern software products."
        items={[
          {
            item_link: 'saas-mvp-development',

            title: 'SaaS MVP Development',

            description:
              'Build and launch a focused MVP with the core functionality required to validate your SaaS product and reach initial customers.',
          },

          {
            item_link: 'custom-saas-development',

            title: 'Custom SaaS Development',

            description:
              'Develop complete SaaS platforms around your business model, users, workflows, integrations and product requirements.',
          },

          {
            item_link: 'multi-tenant-saas-development',

            title: 'Multi-Tenant SaaS Development',

            description:
              'Build SaaS applications designed to support multiple customers, organizations, roles and isolated business data.',
          },

          {
            item_link: 'saas-subscription-development',

            title: 'SaaS Subscription & Billing',

            description:
              'Implement subscription plans, billing workflows, payment integrations, access controls and usage-based product logic.',
          },

          {
            item_link: 'saas-dashboard-development',

            title: 'SaaS Dashboard Development',

            description:
              'Create customer, administrator and team dashboards with role-based access and interfaces designed around product workflows.',
          },

          {
            item_link: 'saas-api-development',

            title: 'SaaS API Development & Integrations',

            description:
              'Connect your SaaS platform with payment systems, CRMs, ERPs, communication tools and other third-party services.',
          },

          {
            item_link: 'saas-modernization',

            title: 'SaaS Product Modernization',

            description:
              'Modernize an existing SaaS platform to improve architecture, performance, security, integrations and scalability.',
          },
        ]}
        details={[
          {
            item_link_id: 'saas-mvp-development',

            heading: 'SaaS MVP Development',

            descriptions: [
              {
                para: 'A SaaS MVP focuses development on the core product functionality required to test the business idea, collect user feedback and validate demand.',
              },

              {
                para: 'VoidMatrix helps define the initial feature scope and technical architecture so the MVP can be developed without unnecessarily building the complexity of a mature enterprise platform from day one.',
              },

              {
                para: 'The MVP architecture can still be structured with future expansion in mind so validated features and customer demand can guide subsequent development.',
              },
            ],
          },

          {
            item_link_id: 'custom-saas-development',

            heading: 'Custom SaaS Development',

            descriptions: [
              {
                para: 'Custom SaaS development is suitable when the product requires functionality, workflows or integrations that cannot be effectively delivered through generic software platforms.',
              },

              {
                para: 'We can develop the frontend, backend, database, APIs, authentication, dashboards, business logic and infrastructure required for the product.',
              },

              {
                para: 'The development approach is aligned with the SaaS business model and expected product growth rather than treating the application as a conventional website.',
              },
            ],
          },

          {
            item_link_id: 'multi-tenant-saas-development',

            heading: 'Multi-Tenant SaaS Development',

            descriptions: [
              {
                para: 'Multi-tenant architecture allows a SaaS platform to serve multiple customers or organizations through a shared application environment while maintaining appropriate data and access boundaries.',
              },

              {
                para: 'Tenant architecture, user roles, permissions, data isolation and application behavior need to be considered carefully when building a multi-customer product.',
              },

              {
                para: 'VoidMatrix can structure the architecture around the expected customer model, scale and operational requirements of the SaaS product.',
              },
            ],
          },

          {
            item_link_id: 'saas-subscription-development',

            heading: 'SaaS Subscription & Billing',

            descriptions: [
              {
                para: 'Subscription functionality connects the SaaS business model with the product experience, controlling what customers can access based on their plans or usage.',
              },

              {
                para: 'Depending on the product, billing functionality can include plans, trials, upgrades, downgrades, recurring payments, invoices, payment gateway integrations and access management.',
              },

              {
                para: 'The subscription architecture can be designed around the commercial model rather than adding billing as an isolated feature after development.',
              },
            ],
          },

          {
            item_link_id: 'saas-dashboard-development',

            heading: 'SaaS Dashboard Development',

            descriptions: [
              {
                para: 'Dashboards are often the primary interface through which SaaS customers interact with the product. They need to present relevant information and actions according to the user’s role.',
              },

              {
                para: 'VoidMatrix can develop customer dashboards, admin panels, team interfaces, analytics dashboards and role-specific management interfaces.',
              },

              {
                para: 'Dashboard functionality can be connected directly with the underlying business logic, APIs and permissions of the SaaS platform.',
              },
            ],
          },

          {
            item_link_id: 'saas-api-development',

            heading: 'SaaS API Development & Integrations',

            descriptions: [
              {
                para: 'SaaS products frequently need to communicate with external systems such as payment gateways, CRM platforms, analytics services, communication tools and other business applications.',
              },

              {
                para: 'We can develop APIs and integration workflows that allow your SaaS product to exchange data with the systems your customers or internal teams already use.',
              },

              {
                para: 'Integration design considers authentication, data consistency, reliability, error handling and scalability.',
              },
            ],
          },

          {
            item_link_id: 'saas-modernization',

            heading: 'SaaS Product Modernization',

            descriptions: [
              {
                para: 'An existing SaaS product may eventually need architectural improvements as customers, traffic, integrations and product complexity increase.',
              },

              {
                para: 'Modernization can involve frontend systems, backend architecture, databases, APIs, infrastructure, security and deployment workflows.',
              },

              {
                para: 'We assess the existing product before recommending whether specific modules should be improved, migrated, redesigned or rebuilt.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="SaaS Development Cost in India"
        costdesc={[
          {
            para: 'SaaS development cost in India can start around ₹2,50,000 for a focused MVP and can exceed ₹25,00,000 for complex production platforms. The final investment depends on product scope, number of features, user roles, architecture, integrations, subscription functionality, security and scalability requirements.',
          },

          {
            para: 'A focused SaaS MVP generally requires a smaller engineering scope than a mature multi-tenant platform with advanced dashboards, subscription management, third-party integrations, analytics and enterprise requirements.',
          },

          {
            para: 'VoidMatrix scopes SaaS projects around the product roadmap and business objectives. This allows the initial investment to focus on the functionality required to launch while keeping the technical foundation ready for future product expansion.',
          },
        ]}
      />

      {/* =====================================================
          COST FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect SaaS Development Cost"
        intro="The investment required for a SaaS product depends on its product complexity, business model, technical architecture and expected scale."
        facts={[
          'Number and complexity of SaaS features',

          'MVP vs full product scope',

          'Number of user roles',

          'Multi-tenant architecture requirements',

          'Database complexity and data volume',

          'Subscription and billing requirements',

          'Payment gateway integrations',

          'Third-party API integrations',

          'Admin and analytics dashboards',

          'Security and authentication requirements',

          'Cloud infrastructure and scalability',

          'Testing, maintenance and ongoing product engineering',
        ]}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ServiceComp
        heading="Custom SaaS Platform vs Off-the-Shelf Software"
        desc="Off-the-shelf software can work well when your business requirements closely match an existing product. Custom SaaS development becomes more valuable when you are building a proprietary software product, need unique workflows, require custom integrations, want control over the product roadmap or need functionality that existing tools cannot provide. With a custom SaaS platform, the architecture, features, customer experience, integrations and commercial model can be designed around your product instead of adapting your product to another company's software."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Discuss Your SaaS Product With Us"
        url="/contact"
      />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our SaaS Development Process"
        intro="VoidMatrix follows a structured SaaS product engineering process that connects product requirements, architecture, development, integrations, testing and deployment. The process can be adapted for an MVP, new SaaS product or modernization of an existing platform."
        steps={engineeringSteps}
      />

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <ServiceCost
        heading="SaaS Development Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For startups and businesses in Mumbai, VoidMatrix develops SaaS products, MVPs, business applications and cloud-based platforms designed around specific product and operational requirements.',
          },

          {
            para: 'For businesses in Pune and other Indian technology markets, we build SaaS platforms covering product architecture, frontend and backend development, multi-tenant systems, APIs, subscriptions and cloud deployment.',
          },

          {
            para: 'We also work with businesses across Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad and other Indian markets that need dedicated SaaS product engineering capabilities.',
          },

          {
            para: 'For international startups and businesses across the USA, UK, UAE, Europe, Australia and other markets, VoidMatrix provides remote SaaS development and product engineering support for new products and existing platforms.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Is SaaS Development Right for Your Business?"
        intro="SaaS development can be a strong option when you are building a recurring-revenue software product or need a cloud-based platform that can serve multiple customers, teams or organizations."
        subintro="Our SaaS development services are suitable for:"
        points={[
          'Startups building a new SaaS product',

          'Founders validating a software product idea',

          'Businesses launching an MVP',

          'Companies replacing manual business processes with software',

          'Organizations building subscription-based products',

          'Businesses requiring multi-tenant applications',

          'Companies developing proprietary business software',

          'Existing SaaS businesses requiring modernization',

          'Businesses expanding an existing digital product',

          'Enterprises requiring custom cloud-based platforms',
        ]}
        finalPara="If you have a SaaS idea, an existing product that needs engineering support or a business process that could become a software product, VoidMatrix can help define the appropriate product and technical development approach."
      />

      {/* =====================================================
          WHAT IS SAAS
      ===================================================== */}

      <WhaIsService
        heading="What Is SaaS Development?"
        contents={contents}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="SaaS Development Services - Frequently Asked Questions"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Build a Scalable SaaS Product?"
        description="Tell VoidMatrix about your SaaS idea, existing product or business requirements. We can help you define the right architecture, development scope and investment for your next stage."
      />
    </>
  );
}