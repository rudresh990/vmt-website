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
  title: 'MVP Development Company USA, India & Mumbai | VoidMatrix',

  description:
    'VoidMatrix builds custom MVPs for startups and businesses in the USA, Mumbai, Pune and India. Launch web, SaaS and mobile MVPs with focused features, scalable architecture and production-ready engineering.',

  path: '/services/mvp-development',
});

const s_data = serviceData['/services/mvp-development'];

const whyContents = [
  {
    id: 'why1',

    paraHeading: 'Build Only What Your MVP Needs',

    para: 'An MVP should validate the core product idea without spending your entire budget building features that users may never need. VoidMatrix helps prioritize the core workflow, essential features and technical foundations required for a meaningful first release.',
  },

  {
    id: 'why2',

    paraHeading: 'From Product Idea to Working Software',

    para: 'You can come to us with a product concept, business requirement, feature list or early prototype. We can turn that direction into a practical technical scope, architecture and development roadmap.',
  },

  {
    id: 'why3',

    paraHeading: 'Built for Real Users, Not Just a Demo',

    para: 'Your MVP should be capable of being used and tested by real customers. VoidMatrix focuses on production-ready engineering, authentication, databases, APIs, integrations and deployment rather than building a disposable demonstration.',
  },

  {
    id: 'why4',

    paraHeading: 'Designed for the Product After MVP',

    para: 'The first release should not unnecessarily lock you into an architecture that becomes difficult to extend. We build the MVP with the next stage of the product in mind so successful features can evolve into a larger platform.',
  },
];

const whatYouGetContents = [
  {
    id: 'get1',

    paraHeading: 'MVP Scope & Feature Planning',

    para: 'Define the core product functionality, user journeys and features required for the first meaningful release.',
  },

  {
    id: 'get2',

    paraHeading: 'Product Architecture',

    para: 'A technical foundation covering application architecture, database design, APIs, authentication and infrastructure requirements.',
  },

  {
    id: 'get3',

    paraHeading: 'Web, SaaS or Mobile MVP',

    para: 'Build the MVP for the platform your product actually requires, including web applications, SaaS products and mobile applications.',
  },

  {
    id: 'get4',

    paraHeading: 'Core Integrations',

    para: 'Connect essential third-party services such as payments, communication platforms, maps, analytics, AI APIs and other required systems.',
  },

  {
    id: 'get5',

    paraHeading: 'Testing & Production Deployment',

    para: 'Validate the core product workflows and deploy the MVP into a production environment where real users can access it.',
  },

  {
    id: 'get6',

    paraHeading: 'Post-MVP Product Engineering',

    para: 'Continue improving the product through feature expansion, optimization, integrations, scaling and technical improvements after launch.',
  },
];

const contents = [
  {
    id: 'mvp1',

    para: 'A Minimum Viable Product, commonly called an MVP, is an initial version of a software product containing the core functionality required to solve a specific user problem and validate the product concept with real users.',
  },

  {
    id: 'mvp2',

    para: 'MVP development is not simply about building fewer features. The objective is to identify the smallest practical product scope that can deliver the intended value, generate useful user feedback and help the business make better decisions about the next stage of development.',
  },

  {
    id: 'mvp3',

    para: 'An MVP can take the form of a SaaS application, web platform, marketplace, mobile application, internal business product, AI-powered application or another type of digital product depending on the business model and target users.',
  },

  {
    id: 'mvp4',

    para: 'A production MVP may require authentication, user roles, databases, APIs, payments, notifications, dashboards, integrations, analytics and deployment infrastructure depending on the product. The right scope is determined by what users actually need to complete the core product workflow.',
  },

  {
    id: 'mvp5',

    para: 'VoidMatrix provides MVP development services covering product scope definition, technical architecture, UI development, backend engineering, APIs, integrations, testing, deployment and continued product engineering after launch.',
  },
];

const engineeringSteps = [
  {
    title: 'MVP Discovery & Scope Definition',

    description:
      'We understand the product idea, target users, business model and core problem before defining what should and should not be included in the first release.',

    points: [
      'Product requirement analysis',

      'Core user journey',

      'MVP feature prioritization',

      'Technical feasibility',
    ],
  },

  {
    title: 'Product Architecture & Planning',

    description:
      'We establish the technical foundation required to build the MVP while keeping future product expansion in consideration.',

    points: [
      'System architecture',

      'Database planning',

      'API architecture',

      'Technology selection',
    ],
  },

  {
    title: 'MVP UI & Product Development',

    description:
      'The core product experience is developed around the prioritized workflows and functionality defined during the scope phase.',

    points: [
      'Frontend development',

      'Backend development',

      'Authentication',

      'Core product features',
    ],
  },

  {
    title: 'Integrations & Business Logic',

    description:
      'Required third-party services and business rules are implemented so the MVP can operate as a functional product rather than a visual prototype.',

    points: [
      'Payment integration',

      'Third-party APIs',

      'Business workflows',

      'Notifications',
    ],
  },

  {
    title: 'Testing & Production Launch',

    description:
      'The MVP is tested across its core workflows before being deployed to a production environment for real users.',

    points: [
      'Functional testing',

      'Integration testing',

      'Security validation',

      'Production deployment',
    ],
  },

  {
    title: 'Post-MVP Product Engineering',

    description:
      'Once the MVP starts generating user feedback and product data, the platform can evolve through additional features, optimization and scaling.',

    points: [
      'Feature expansion',

      'User feedback implementation',

      'Performance optimization',

      'Product scaling',
    ],
  },
];

export default function MvpDevelopmentPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="MVP Development Company for Startups in USA, India & Mumbai"
        title={
          <>
            Build Your
            <span className="text-(--primary)"> MVP</span>.
            <br />
            Validate Your Idea. Build What
            <span className="text-(--primary)"> Users Need.</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Turn your product idea into a working MVP without overbuilding the first
                  release.
                </span>
                <br />
                VoidMatrix builds custom web, SaaS and mobile MVPs for startups and businesses
                across the USA, Mumbai, Pune, India and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Startup <span className="text-(--primary)">Focused</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Web & <span className="text-(--primary)">Mobile MVPs</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Production <span className="text-(--primary)">Ready</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Built to <span className="text-(--primary)">Scale</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHY CHOOSE VOIDMATRIX
      ===================================================== */}

      <WhyVmtService
        heading="Why Choose VoidMatrix for MVP Development?"
        contents={whyContents}
      />

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <WhatYouGet
        heading="What You Get With Our MVP Development Services"
        contents={whatYouGetContents}
      />

      {/* =====================================================
          CORE MVP DEVELOPMENT SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our MVP Development Services"
        intro="VoidMatrix helps startups and businesses turn product concepts into working software. Whether you need a SaaS MVP, mobile app MVP, marketplace MVP, AI product or custom business application, we focus the first release around the core functionality required to validate the product."
        items={[
          {
            item_link: 'startup-mvp-development',

            title: 'Startup MVP Development',

            description:
              'Turn a startup product idea into a focused, functional MVP designed for early users, validation and product learning.',
          },

          {
            item_link: 'saas-mvp-development',

            title: 'SaaS MVP Development',

            description:
              'Build subscription-based SaaS MVPs with authentication, dashboards, user roles, billing and core product workflows.',
          },

          {
            item_link: 'mobile-mvp-development',

            title: 'Mobile App MVP Development',

            description:
              'Develop iOS and Android MVPs around the core mobile user experience and product functionality.',
          },

          {
            item_link: 'web-mvp-development',

            title: 'Web MVP Development',

            description:
              'Build responsive web applications and platforms for startups, businesses and digital product launches.',
          },

          {
            item_link: 'marketplace-mvp-development',

            title: 'Marketplace MVP Development',

            description:
              'Build two-sided marketplace MVPs with buyer, seller, admin and transaction workflows required for initial validation.',
          },

          {
            item_link: 'ai-mvp-development',

            title: 'AI MVP Development',

            description:
              'Build AI-powered MVPs using appropriate AI models, APIs and product workflows around a specific business use case.',
          },

          {
            item_link: 'mvp-modernization',

            title: 'MVP to Product Development',

            description:
              'Evolve a validated MVP into a scalable product through additional features, architecture improvements, integrations and performance optimization.',
          },
        ]}
        details={[
          {
            item_link_id: 'startup-mvp-development',

            heading: 'Startup MVP Development',

            descriptions: [
              {
                para: 'Startup MVP development focuses on delivering the smallest practical product that can test the core business hypothesis with real users.',
              },

              {
                para: 'VoidMatrix helps prioritize the critical user journey, core functionality, authentication, data requirements and integrations needed for the first release.',
              },

              {
                para: 'The objective is to avoid unnecessary features while ensuring the MVP is functional enough to generate meaningful product feedback.',
              },
            ],
          },

          {
            item_link_id: 'saas-mvp-development',

            heading: 'SaaS MVP Development',

            descriptions: [
              {
                para: 'A SaaS MVP can provide customers with access to a cloud-based product through a browser while allowing the business to validate its subscription or usage-based model.',
              },

              {
                para: 'Depending on requirements, SaaS MVPs can include authentication, user roles, dashboards, subscriptions, payments, account management, notifications and core application workflows.',
              },

              {
                para: 'The architecture can also account for future requirements such as additional plans, integrations, analytics and product scaling.',
              },
            ],
          },

          {
            item_link_id: 'mobile-mvp-development',

            heading: 'Mobile App MVP Development',

            descriptions: [
              {
                para: 'Mobile MVP development focuses on delivering the essential mobile experience required for users to interact with the product.',
              },

              {
                para: 'The MVP can include authentication, profiles, notifications, payments, location functionality, dashboards and other features required by the core product workflow.',
              },

              {
                para: 'The technology approach is selected based on the product requirements, expected platforms, performance needs and future roadmap.',
              },
            ],
          },

          {
            item_link_id: 'web-mvp-development',

            heading: 'Web MVP Development',

            descriptions: [
              {
                para: 'Web MVPs are useful for products that require browser-based access and can be launched without native mobile applications in the first release.',
              },

              {
                para: 'VoidMatrix can build responsive web applications with frontend, backend, databases, APIs, authentication and required integrations.',
              },

              {
                para: 'The architecture can be structured so additional functionality can be introduced as the product gains users and validates its business model.',
              },
            ],
          },

          {
            item_link_id: 'marketplace-mvp-development',

            heading: 'Marketplace MVP Development',

            descriptions: [
              {
                para: 'Marketplace MVPs require more than a standard application because they typically involve multiple user types and interactions between different sides of the platform.',
              },

              {
                para: 'Depending on the business model, the MVP can include buyer and seller accounts, listings, search, transactions, payments, notifications and administrative functionality.',
              },

              {
                para: 'The initial scope is focused on the minimum complete marketplace workflow required to validate supply, demand and transaction behavior.',
              },
            ],
          },

          {
            item_link_id: 'ai-mvp-development',

            heading: 'AI MVP Development',

            descriptions: [
              {
                para: 'AI MVPs combine conventional product engineering with AI capabilities designed around a specific business or user problem.',
              },

              {
                para: 'Depending on the use case, the product can integrate language models, computer vision, recommendation systems, automation or other AI services.',
              },

              {
                para: 'The MVP should validate whether the AI capability creates meaningful product value rather than adding AI functionality without a clear user outcome.',
              },
            ],
          },

          {
            item_link_id: 'mvp-modernization',

            heading: 'MVP to Product Development',

            descriptions: [
              {
                para: 'Once an MVP demonstrates user demand, the next stage is usually to improve the product, expand functionality and strengthen the technical foundation.',
              },

              {
                para: 'VoidMatrix can continue engineering through additional features, integrations, performance improvements, infrastructure scaling and product modernization.',
              },

              {
                para: 'This allows the initial MVP to become a more complete product based on actual user behavior and business priorities.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="MVP Development Cost in USA, India & Mumbai"
        costdesc={[
          {
            para: 'MVP development cost depends primarily on product scope, platform, user roles, integrations and technical complexity. For US-market MVP projects, published 2026 market references commonly place professionally built MVPs across a broad range from roughly USD 15,000 to USD 150,000+, with simpler products at the lower end and complex or integration-heavy products at the higher end.',
          },

          {
            para: 'In India, a custom MVP can be developed at a different cost depending on the product scope and engineering model. A focused MVP may require significantly less investment than a multi-role SaaS, marketplace, AI product or mobile-and-web platform.',
          },

          {
            para: 'VoidMatrix does not price an MVP simply by the number of screens. We scope the core product workflow, technical requirements, integrations and production requirements first so the first release is commercially useful without unnecessary feature development.',
          },
        ]}
      />

      {/* =====================================================
          COST FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect MVP Development Cost"
        intro="The biggest cost difference between MVP projects usually comes from scope and technical complexity rather than the word 'MVP' itself."
        facts={[
          'Number of core product workflows',

          'Web, mobile or multi-platform development',

          'Number of user roles',

          'Authentication and permission requirements',

          'Payment and subscription functionality',

          'Third-party API integrations',

          'AI or machine learning requirements',

          'Marketplace or multi-sided architecture',

          'Real-time functionality',

          'Database and reporting complexity',

          'Security and compliance requirements',

          'Cloud infrastructure and deployment',

          'Post-launch scaling requirements',
        ]}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ServiceComp
        heading="Custom MVP Development vs Prototype or No-Code Build"
        desc="A clickable prototype or no-code product can be useful for early concept validation, demos or internal testing. A custom software MVP goes further by providing real backend functionality, databases, authentication, APIs, integrations and production deployment where required. The right approach depends on what you need to validate. VoidMatrix can help define whether your idea needs a prototype, no-code validation or a production-ready MVP."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Get Your MVP Scope & Development Estimate"
        url="/contact"
      />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our MVP Development Process"
        intro="VoidMatrix follows a scope-first MVP development process designed to protect your budget while getting the core product into the hands of real users. We focus on the essential product workflow first and then build the technical foundation required for future development."
        steps={engineeringSteps}
      />

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <ServiceCost
        heading="MVP Development Company in USA, Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For startups and businesses in the USA, VoidMatrix provides remote MVP development for founders looking to build SaaS products, web applications, marketplaces, AI products and mobile applications with an India-based engineering team.',
          },

          {
            para: 'For businesses in Mumbai and Pune, we provide local MVP development services covering product planning, architecture, frontend and backend development, integrations, testing and deployment.',
          },

          {
            para: 'We also work with startups and businesses across Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad and other Indian markets looking to launch new digital products.',
          },

          {
            para: 'For international founders across the USA, UK, UAE, Europe, Australia and other markets, VoidMatrix provides remote MVP engineering and continued product development after launch.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="When Should You Invest in MVP Development?"
        intro="MVP development is useful when you need to turn a product concept into something real enough to test with users, customers or stakeholders before investing in the complete product."
        subintro="An MVP may be the right starting point when:"
        points={[
          'You have a software product idea that needs validation',

          'You want to launch before building the full product',

          'You need real users to test the core workflow',

          'You want to validate a SaaS business model',

          'You need to demonstrate a working product to stakeholders',

          'You want to test marketplace demand',

          'You need to validate an AI-powered product concept',

          'You want to replace a manual process with a digital product',

          'You have an existing prototype that needs to become functional software',

          'You want to build a first release before expanding into a larger platform',
        ]}
        finalPara="If you have an idea, prototype, feature list or business concept and are unsure what should actually be included in the first release, VoidMatrix can help define the MVP scope before development begins."
      />

      {/* =====================================================
          WHAT IS MVP
      ===================================================== */}

      <WhaIsService
        heading="What Is MVP Development?"
        contents={contents}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="MVP Development FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Turn Your Product Idea Into an MVP?"
        description="Tell VoidMatrix what you are building, who it is for and what you want the first version to achieve. We can help define the MVP scope, technical approach and development estimate."
      />
    </>
  );
}