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
  title: 'Product Engineering Company in Mumbai, Pune & India | VoidMatrix',

  description:
    'VoidMatrix provides end-to-end product engineering services for startups and enterprises across Mumbai, Pune, Bangalore, Hyderabad and India. Build, modernize and scale digital products with dedicated engineering expertise.',

  path: '/services/product-engineering',
});

const s_data = serviceData['/services/product-engineering'];

const whyContents = [
  {
    id: 'why1',

    paraHeading: 'End-to-End Product Engineering',

    para: 'VoidMatrix supports the complete product engineering lifecycle, from product requirements and architecture to development, testing, deployment, modernization and ongoing product evolution.',
  },

  {
    id: 'why2',

    paraHeading: 'Engineering Around Your Product Goals',

    para: 'We connect product requirements with technical decisions so the software is built around your users, business model, roadmap, performance expectations and long-term product objectives.',
  },

  {
    id: 'why3',

    paraHeading: 'Built for Product Growth',

    para: 'Digital products need to evolve as users, features, integrations and business requirements increase. We design architectures that can support product expansion without unnecessary technical complexity.',
  },

  {
    id: 'why4',

    paraHeading: 'Long-Term Product Development Partner',

    para: 'Product engineering does not end at the first release. VoidMatrix can continue supporting new features, modernization, performance improvements, integrations, infrastructure and technical improvements as your product grows.',
  },
];

const whatYouGetContents = [
  {
    id: 'get1',

    paraHeading: 'Product Discovery & Technical Planning',

    para: 'Translate product ideas and business requirements into a practical technical roadmap, architecture and development plan.',
  },

  {
    id: 'get2',

    paraHeading: 'Product Architecture',

    para: 'Design scalable application, database, API and infrastructure architecture around your product requirements and expected growth.',
  },

  {
    id: 'get3',

    paraHeading: 'Full-Stack Product Development',

    para: 'Develop frontend, backend, APIs, databases and product functionality as one connected engineering system.',
  },

  {
    id: 'get4',

    paraHeading: 'Product Modernization',

    para: 'Improve legacy products, architectures and technology stacks while protecting important functionality and business data.',
  },

  {
    id: 'get5',

    paraHeading: 'Cloud, DevOps & Integrations',

    para: 'Deploy products to appropriate infrastructure and connect them with third-party services, APIs and business systems.',
  },

  {
    id: 'get6',

    paraHeading: 'Continuous Product Engineering',

    para: 'Continue improving the product through feature development, optimization, scaling, maintenance and technical evolution.',
  },
];

const contents = [
  {
    id: 'product1',

    para: 'Product engineering is the end-to-end process of designing, developing, testing, deploying and continuously improving a digital software product. It connects product requirements and business objectives with software architecture and engineering execution.',
  },

  {
    id: 'product2',

    para: 'Unlike development focused only on delivering individual features, product engineering considers the complete lifecycle of the product. This includes user requirements, technical architecture, development, quality, deployment, scalability, security, maintenance and future product evolution.',
  },

  {
    id: 'product3',

    para: 'Product engineering services can support startups building new digital products as well as established organizations modernizing or expanding existing applications. The work can include MVP development, full-stack engineering, platform development, cloud engineering, integrations, modernization and ongoing product development.',
  },

  {
    id: 'product4',

    para: 'A product engineering approach is particularly useful when a software product needs to evolve continuously. Architecture and engineering decisions need to support changing customer requirements, new features, integrations, increasing traffic and growing amounts of data.',
  },

  {
    id: 'product5',

    para: 'VoidMatrix provides product engineering services covering product discovery, technical planning, architecture, frontend and backend development, APIs, integrations, testing, cloud deployment, modernization and long-term product engineering support.',
  },
];

const engineeringSteps = [
  {
    title: 'Product Discovery & Requirement Analysis',

    description:
      'We understand your product, users, business objectives, existing technology and roadmap before defining the engineering scope.',

    points: [
      'Product requirement analysis',

      'User and workflow mapping',

      'Feature prioritization',

      'Technical feasibility',
    ],
  },

  {
    title: 'Product Architecture & Technical Planning',

    description:
      'We define the architecture, technology approach, database, APIs and infrastructure required to support the product roadmap.',

    points: [
      'System architecture',

      'Database architecture',

      'API planning',

      'Infrastructure planning',
    ],
  },

  {
    title: 'Product Design & Development',

    description:
      'The product is developed in structured iterations around prioritized functionality, user requirements and technical priorities.',

    points: [
      'Frontend development',

      'Backend development',

      'API development',

      'Core product features',
    ],
  },

  {
    title: 'Integrations, Testing & Quality',

    description:
      'We connect required third-party systems and validate the product across functionality, integrations, performance and security.',

    points: [
      'Third-party integrations',

      'Functional testing',

      'Performance testing',

      'Security validation',
    ],
  },

  {
    title: 'Deployment & Production Launch',

    description:
      'The completed product is prepared for production with appropriate infrastructure, deployment workflows and operational configuration.',

    points: [
      'Cloud deployment',

      'Production configuration',

      'CI/CD workflows',

      'Monitoring setup',
    ],
  },

  {
    title: 'Product Scaling & Continuous Engineering',

    description:
      'After launch, the product can continue evolving through new features, modernization, performance optimization and infrastructure scaling.',

    points: [
      'Feature expansion',

      'Performance optimization',

      'Product modernization',

      'Long-term engineering',
    ],
  },
];

export default function ProductEngineeringPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Product Engineering Company in Mumbai, India"
        title={
          <>
            End-to-End
            <span className="text-(--primary)"> Product Engineering</span>
            <br />
            For Startups & Enterprises Across
            <span className="text-(--primary)"> India</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Build, launch, modernize and scale digital products with an engineering partner
                  built around your product roadmap.
                </span>
                <br />
                VoidMatrix provides end-to-end product engineering services for startups, SMEs
                and enterprises across Mumbai, Pune, India and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                MVP to <span className="text-(--primary)">Enterprise</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Full-Stack <span className="text-(--primary)">Engineering</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Cloud & <span className="text-(--primary)">DevOps</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Long-Term <span className="text-(--primary)">Support</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHY CHOOSE VOIDMATRIX
      ===================================================== */}

      <WhyVmtService
        heading="Why Choose VoidMatrix for Product Engineering?"
        contents={whyContents}
      />

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <WhatYouGet
        heading="What You Get With Our Product Engineering Services"
        contents={whatYouGetContents}
      />

      {/* =====================================================
          CORE PRODUCT ENGINEERING SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Product Engineering Services"
        intro="VoidMatrix provides the engineering capabilities required to take digital products from idea to production and beyond. We can support a new product, an existing application or a modernization initiative depending on your technical and business requirements."
        items={[
          {
            item_link: 'product-discovery',

            title: 'Product Discovery & MVP Engineering',

            description:
              'Turn product ideas into a defined technical scope and build an MVP around the functionality required to validate the product.',
          },

          {
            item_link: 'digital-product-development',

            title: 'Digital Product Development',

            description:
              'Build customer-facing and business-facing digital products with scalable frontend, backend, API and database architecture.',
          },

          {
            item_link: 'software-product-engineering',

            title: 'Software Product Engineering',

            description:
              'Provide end-to-end engineering across architecture, development, testing, deployment and continuous product evolution.',
          },

          {
            item_link: 'product-modernization',

            title: 'Product Modernization',

            description:
              'Modernize legacy products, architectures and technology stacks to improve maintainability, performance, security and scalability.',
          },

          {
            item_link: 'product-platform-engineering',

            title: 'Platform Engineering',

            description:
              'Build scalable application platforms, infrastructure, APIs and technical foundations that support growing digital products.',
          },

          {
            item_link: 'product-integration',

            title: 'Product API & Integration Engineering',

            description:
              'Connect digital products with payment systems, CRM, ERP, analytics, communication tools and other third-party platforms.',
          },

          {
            item_link: 'product-maintenance-support',

            title: 'Product Maintenance & Continuous Engineering',

            description:
              'Continue developing, optimizing, maintaining and scaling software products after the initial release.',
          },
        ]}
        details={[
          {
            item_link_id: 'product-discovery',

            heading: 'Product Discovery & MVP Engineering',

            descriptions: [
              {
                para: 'Product discovery helps transform an initial product idea into a clearer set of user requirements, business objectives and technical priorities.',
              },

              {
                para: 'VoidMatrix can help define the initial product scope, prioritize features and establish an engineering approach for an MVP or first production release.',
              },

              {
                para: 'The objective is to validate the most important product assumptions without unnecessarily building the complete future product from the beginning.',
              },
            ],
          },

          {
            item_link_id: 'digital-product-development',

            heading: 'Digital Product Development',

            descriptions: [
              {
                para: 'Digital product development covers the engineering required to build customer-facing or internal software products around specific business and user requirements.',
              },

              {
                para: 'We can develop frontend applications, backend systems, APIs, databases, authentication, dashboards and product-specific functionality.',
              },

              {
                para: 'Architecture and development decisions are aligned with the product roadmap so the application can continue evolving after the initial release.',
              },
            ],
          },

          {
            item_link_id: 'software-product-engineering',

            heading: 'Software Product Engineering',

            descriptions: [
              {
                para: 'Software product engineering takes a lifecycle approach to product development, connecting product requirements with architecture, development, quality, deployment and continuous improvement.',
              },

              {
                para: 'VoidMatrix can support the engineering lifecycle across new product development, feature expansion, technical improvements, integrations and scaling.',
              },

              {
                para: 'This approach is useful for companies that need an engineering partner capable of supporting the product beyond its initial launch.',
              },
            ],
          },

          {
            item_link_id: 'product-modernization',

            heading: 'Product Modernization',

            descriptions: [
              {
                para: 'Existing digital products can become difficult to maintain when their technology stack, architecture or infrastructure no longer supports current product requirements.',
              },

              {
                para: 'Modernization can involve frontend systems, backend architecture, databases, APIs, infrastructure, deployment workflows and security depending on the condition of the product.',
              },

              {
                para: 'VoidMatrix evaluates the existing system before recommending whether components should be modernized, migrated, redesigned or rebuilt.',
              },
            ],
          },

          {
            item_link_id: 'product-platform-engineering',

            heading: 'Platform Engineering',

            descriptions: [
              {
                para: 'A strong technical platform provides the foundation for digital products to support increasing users, features, integrations and data.',
              },

              {
                para: 'Platform engineering can cover application architecture, APIs, infrastructure, deployment workflows, environments, monitoring and scalability requirements.',
              },

              {
                para: 'The platform is designed around the product’s current requirements while keeping future engineering and operational needs in consideration.',
              },
            ],
          },

          {
            item_link_id: 'product-integration',

            heading: 'Product API & Integration Engineering',

            descriptions: [
              {
                para: 'Digital products frequently need to exchange information with external systems. API and integration engineering connects these services into the overall product experience.',
              },

              {
                para: 'Integrations can include payment gateways, CRM systems, ERP platforms, analytics services, communication tools, logistics systems and other third-party applications.',
              },

              {
                para: 'Integration architecture considers authentication, data consistency, reliability, error handling and future scalability.',
              },
            ],
          },

          {
            item_link_id: 'product-maintenance-support',

            heading: 'Product Maintenance & Continuous Engineering',

            descriptions: [
              {
                para: 'A digital product requires continued engineering as users, business requirements, technology and market expectations change.',
              },

              {
                para: 'Ongoing product engineering can include new features, bug fixes, performance optimization, security updates, integrations, infrastructure improvements and technical modernization.',
              },

              {
                para: 'VoidMatrix can continue supporting the product roadmap after the initial development phase based on the organization’s priorities.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Product Engineering Services Cost in India"
        costdesc={[
          {
            para: 'Product engineering costs in India vary significantly depending on the product stage, technical complexity, number of features, development team requirements, integrations, infrastructure and ongoing engineering scope. Focused MVP engineering can start around ₹3,00,000, while larger product engineering engagements can exceed ₹25,00,000.',
          },

          {
            para: 'An MVP requires a different engineering scope from a mature digital product that needs multiple modules, integrations, cloud infrastructure, advanced analytics, security requirements and continuous feature development.',
          },

          {
            para: 'VoidMatrix structures product engineering engagements around your roadmap and business priorities. This allows teams to prioritize the most valuable product capabilities while maintaining a technical foundation for future expansion.',
          },
        ]}
      />

      {/* =====================================================
          COST FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Product Engineering Cost"
        intro="The investment required for product engineering depends on the product stage, technical complexity and amount of engineering required across its lifecycle."
        facts={[
          'Product stage and development scope',

          'Number and complexity of features',

          'Frontend and backend requirements',

          'System architecture',

          'Database complexity',

          'API and third-party integrations',

          'User roles and permissions',

          'Security and compliance requirements',

          'Cloud infrastructure requirements',

          'Performance and scalability requirements',

          'Product modernization requirements',

          'Ongoing maintenance and feature development',
        ]}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ServiceComp
        heading="Product Engineering vs Traditional Software Development"
        desc="Traditional software development often focuses on delivering a defined application or set of features. Product engineering takes a broader lifecycle approach that considers product strategy, architecture, user requirements, development, quality, deployment, scalability and continuous evolution. Product engineering is particularly useful when software is a core business product that will continue changing after its initial launch."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Discuss Your Product Engineering Requirements"
        url="/contact"
      />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Product Engineering Process"
        intro="VoidMatrix follows a structured product engineering process that connects product requirements with architecture, development, quality assurance, deployment and continuous improvement. The process can be adapted for new products, MVPs, existing applications and modernization projects."
        steps={engineeringSteps}
      />

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <ServiceCost
        heading="Product Engineering Company in Mumbai, Pune, Bangalore, Hyderabad, India & Global Markets"
        costdesc={[
          {
            para: 'For startups and businesses in Mumbai, VoidMatrix provides product engineering for SaaS platforms, digital products, business applications and technology-driven products requiring dedicated engineering capabilities.',
          },

          {
            para: 'For businesses in Pune, Bangalore and Hyderabad, we provide end-to-end product engineering covering architecture, full-stack development, APIs, integrations, cloud infrastructure, modernization and continuous development.',
          },

          {
            para: 'We also work with organizations across Delhi, Chennai, Ahmedabad and other Indian markets that need product engineering support for new or existing digital products.',
          },

          {
            para: 'For international startups and businesses across the USA, UK, UAE, Europe, Australia and other markets, VoidMatrix provides remote product engineering and long-term software product development support.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="When Should You Invest in Product Engineering?"
        intro="Product engineering is most valuable when software is a core part of your business and needs to continuously evolve with customers, features, technology and market requirements."
        subintro="Product engineering may be the right fit when:"
        points={[
          'You are building a new digital product',

          'You need to take an MVP from idea to launch',

          'Your product requires continuous feature development',

          'Your existing engineering team needs additional capacity',

          'Your application architecture is becoming difficult to maintain',

          'Technical debt is slowing product development',

          'Your product needs modernization',

          'You need to scale application performance and infrastructure',

          'Your product requires multiple third-party integrations',

          'You need a long-term engineering partner for the product roadmap',
        ]}
        finalPara="If software is central to your business and you need engineering capabilities that extend beyond a one-time development project, VoidMatrix can help structure a product engineering approach around your roadmap and technical requirements."
      />

      {/* =====================================================
          WHAT IS PRODUCT ENGINEERING
      ===================================================== */}

      <WhaIsService
        heading="What Is Product Engineering?"
        contents={contents}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Product Engineering FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Build or Scale Your Digital Product?"
        description="Tell VoidMatrix about your product, technology requirements or engineering roadmap. We can help define the right architecture, development scope and long-term product engineering approach."
      />
    </>
  );
}