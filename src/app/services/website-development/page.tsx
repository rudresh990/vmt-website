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
  title: 'Website Development Company in USA, India & Mumbai | VoidMatrix',

  description:
    'VoidMatrix builds fast, SEO-ready and conversion-focused websites for startups, SMEs and enterprises across Mumbai, Pune, India and global markets. Get custom business, corporate, ecommerce and web application development.',

  path: '/services/website-development',
});

const s_data = serviceData['/services/website-development'];

const whyContents = [
  {
    id: 'why1',

    paraHeading: 'Business-First Website Development',

    para: 'We build websites around your business, customers, services and growth objectives instead of forcing your business into a generic template. The structure is planned around what your customers need to understand and the actions you want them to take.',
  },

  {
    id: 'why2',

    paraHeading: 'SEO & Performance Built In',

    para: 'VoidMatrix develops websites with technical SEO, responsive performance, clean architecture and search-friendly structures in mind. Your website is built to support both users and future organic search growth.',
  },

  {
    id: 'why3',

    paraHeading: 'Conversion-Focused Architecture',

    para: 'A business website should do more than look professional. We structure pages, calls-to-action, enquiry journeys, trust elements and service content around turning relevant visitors into enquiries and customers.',
  },

  {
    id: 'why4',

    paraHeading: 'Built for Long-Term Growth',

    para: 'Your website should not become a technical limitation six months after launch. We build with future service pages, SEO campaigns, integrations, content expansion and additional functionality in mind.',
  },
];

const whatYouGetContents = [
  {
    id: 'get1',

    paraHeading: 'Custom Business Website',

    para: 'A professionally developed website structured around your business, services, customers, brand and commercial objectives.',
  },

  {
    id: 'get2',

    paraHeading: 'SEO-Ready Website Architecture',

    para: 'Clean page structures, metadata support, semantic implementation and technical foundations designed to support ongoing SEO and content growth.',
  },

  {
    id: 'get3',

    paraHeading: 'Responsive UI & Mobile Experience',

    para: 'Responsive interfaces designed for desktop, tablet and mobile users with clear navigation, strong usability and conversion-focused layouts.',
  },

  {
    id: 'get4',

    paraHeading: 'Conversion-Focused Structure',

    para: 'Strategic service sections, calls-to-action, enquiry forms, trust elements and customer journeys designed around your business goals.',
  },

  {
    id: 'get5',

    paraHeading: 'CMS & Business Integrations',

    para: 'CMS functionality and integrations with CRM systems, WhatsApp, analytics, payment gateways, email platforms and other required business tools.',
  },

  {
    id: 'get6',

    paraHeading: 'Deployment & Ongoing Support',

    para: 'Production deployment, technical configuration and continued website support for new pages, improvements, maintenance and future development.',
  },
];

const contents = [
  {
    id: 'website1',

    para: 'Website development is the process of designing, building and maintaining a website for a business, organization or digital product. A professionally developed website combines frontend development, technical architecture, content structure, integrations, performance and deployment requirements.',
  },

  {
    id: 'website2',

    para: 'For businesses, a website is often the first place potential customers evaluate your company, services and credibility. A well-developed website therefore needs to communicate your offer clearly while making it easy for visitors to enquire, contact your business, request a quote or take another relevant action.',
  },

  {
    id: 'website3',

    para: 'Website development can include business websites, corporate websites, ecommerce stores, service websites, SaaS websites, customer portals and custom web applications. The technology and architecture depend on the functionality, scale and future requirements of the project.',
  },

  {
    id: 'website4',

    para: 'Modern website development also needs to consider search visibility and performance. Page architecture, responsive development, technical SEO, loading performance, internal linking and content structures can all influence how effectively a website supports organic search and user experience.',
  },

  {
    id: 'website5',

    para: 'VoidMatrix combines website development, technical SEO, performance and conversion-focused architecture to build websites for startups, SMEs and enterprises across Mumbai, Pune, India and international markets.',
  },
];

const engineeringSteps = [
  {
    title: 'Business & Requirement Discovery',

    description:
      'We understand your business, target customers, services, competitors, website goals and required functionality before defining the website scope.',

    points: [
      'Business & website goal analysis',

      'Target audience identification',

      'Page & functionality requirements',

      'Technical feasibility assessment',
    ],
  },

  {
    title: 'Website Structure & Architecture',

    description:
      'We define the website structure, navigation, page hierarchy and technical architecture around usability, SEO and conversion requirements.',

    points: [
      'Website information architecture',

      'Page hierarchy',

      'URL structure',

      'Technical architecture',
    ],
  },

  {
    title: 'UI & Website Development',

    description:
      'The approved website structure is developed into a responsive digital experience with the required frontend, backend, CMS and functionality.',

    points: [
      'Responsive frontend development',

      'Backend development',

      'CMS implementation',

      'Business functionality',
    ],
  },

  {
    title: 'Integration, SEO & Testing',

    description:
      'We validate the website across functionality, responsiveness, technical SEO, integrations and important customer journeys before launch.',

    points: [
      'Technical SEO implementation',

      'Integration testing',

      'Responsive testing',

      'Performance validation',
    ],
  },

  {
    title: 'Deployment & Production Setup',

    description:
      'The completed website is prepared for production with appropriate hosting, domain, deployment, analytics and technical configuration.',

    points: [
      'Production deployment',

      'Domain configuration',

      'Analytics setup',

      'Production validation',
    ],
  },

  {
    title: 'Optimization & Long-Term Growth',

    description:
      'After launch, your website can continue evolving through new pages, SEO improvements, performance optimization, functionality and ongoing development.',

    points: [
      'New page development',

      'SEO improvements',

      'Performance optimization',

      'Ongoing website support',
    ],
  },
];

export default function WebsiteDevelopment() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Professional Website Development Company in Mumbai, India & Global Markets"
        title={
          <>
            Website Development Built to
            <span className="text-(--primary)"> Generate Business</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Your website is often the first place potential customers evaluate your business.
                </span>
                <br />
                VoidMatrix builds fast, SEO-ready and conversion-focused websites for businesses
                in Mumbai, Pune, across India and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Projects from <span className="text-(--primary)">₹75K</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                SEO <span className="text-(--primary)">Ready</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Performance <span className="text-(--primary)">Focused</span>
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
        heading="Why Choose VoidMatrix for Website Development?"
        contents={whyContents}
      />

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <WhatYouGet
        heading="What You Get With Our Website Development Services"
        contents={whatYouGetContents}
      />

      {/* =====================================================
          CORE WEBSITE DEVELOPMENT SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Website Development Services"
        intro="We build websites around your business model, customers, services and growth objectives. From professional business websites to ecommerce platforms and custom web applications, our website development services cover the complete development lifecycle."
        items={[
          {
            item_link: 'business-website-development',

            title: 'Business Website Development',

            description:
              'Professional websites for startups, SMEs, service businesses, consultants and growing companies focused on credibility, visibility and lead generation.',
          },

          {
            item_link: 'corporate-website-development',

            title: 'Corporate Website Development',

            description:
              'Scalable corporate websites for established companies with structured service pages, company information, industry content and conversion-focused customer journeys.',
          },

          {
            item_link: 'custom-website-development',

            title: 'Custom Website Development',

            description:
              'Custom websites built around specific design requirements, functionality, integrations and business workflows beyond standard templates.',
          },

          {
            item_link: 'ecommerce-development',

            title: 'Ecommerce Website Development',

            description:
              'Online stores with product catalogues, shopping journeys, checkout, payments, customer accounts, order workflows and business integrations.',
          },

          {
            item_link: 'seo-website-development',

            title: 'SEO-Friendly Website Development',

            description:
              'Websites structured around technical SEO, service targeting, internal linking, content expansion and long-term organic search growth.',
          },

          {
            item_link: 'web-application-development',

            title: 'Web Application Development',

            description:
              'Interactive dashboards, portals, SaaS interfaces and custom web applications requiring application-level functionality.',
          },

          {
            item_link: 'website-redesign',

            title: 'Website Redesign & Modernization',

            description:
              'Modernize outdated websites to improve usability, mobile experience, performance, SEO foundations and conversion opportunities.',
          },
        ]}
        details={[
          {
            item_link_id: 'business-website-development',

            heading: 'Business Website Development',

            descriptions: [
              {
                para: 'Professional business websites help service companies, startups and growing businesses establish credibility and create a clear path for potential customers to understand their services and make enquiries.',
              },

              {
                para: 'VoidMatrix structures business websites around services, target customers, trust signals, calls-to-action and future SEO requirements.',
              },

              {
                para: 'The result is a website designed to support your current business requirements while providing a foundation for future digital growth.',
              },
            ],
          },

          {
            item_link_id: 'corporate-website-development',

            heading: 'Corporate Website Development',

            descriptions: [
              {
                para: 'Corporate websites require clear information architecture, professional presentation and scalable page structures for companies with multiple services, departments or markets.',
              },

              {
                para: 'VoidMatrix develops corporate websites with structured service sections, company information, industry content, enquiry journeys and SEO-ready architecture.',
              },

              {
                para: 'The website can expand as the organization adds services, locations, content and digital initiatives.',
              },
            ],
          },

          {
            item_link_id: 'custom-website-development',

            heading: 'Custom Website Development',

            descriptions: [
              {
                para: 'Custom website development is suitable when your business requires functionality, layouts, integrations or workflows that standard templates cannot provide effectively.',
              },

              {
                para: 'We can develop custom frontend experiences, backend functionality, forms, calculators, portals, integrations and other business-specific requirements.',
              },

              {
                para: 'The website architecture is planned around your actual business requirements rather than forcing those requirements into a predefined template.',
              },
            ],
          },

          {
            item_link_id: 'ecommerce-development',

            heading: 'Ecommerce Website Development',

            descriptions: [
              {
                para: 'Ecommerce development involves building the digital systems required to display products, manage shopping journeys and process online orders.',
              },

              {
                para: 'Depending on the scope, ecommerce websites can include product catalogues, variants, cart, checkout, payment gateways, customer accounts, order management and inventory-related functionality.',
              },

              {
                para: 'VoidMatrix can structure ecommerce websites around the products, customers, sales model and integrations required by the business.',
              },
            ],
          },

          {
            item_link_id: 'seo-website-development',

            heading: 'SEO-Friendly Website Development',

            descriptions: [
              {
                para: 'SEO-friendly website development creates the technical foundation required for search engines to crawl, understand and index the website effectively.',
              },

              {
                para: 'This can include page architecture, metadata, semantic markup, internal linking, responsive development, performance and content-ready structures.',
              },

              {
                para: 'The website can then be expanded through ongoing SEO, service pages, location pages and content marketing.',
              },
            ],
          },

          {
            item_link_id: 'web-application-development',

            heading: 'Web Application Development',

            descriptions: [
              {
                para: 'Web applications provide users with interactive functionality through a browser rather than operating as a simple informational website.',
              },

              {
                para: 'VoidMatrix can develop dashboards, portals, customer applications, SaaS interfaces and custom web platforms around specific business requirements.',
              },

              {
                para: 'Frontend, backend, database, authentication, APIs and deployment can be engineered as one connected system.',
              },
            ],
          },

          {
            item_link_id: 'website-redesign',

            heading: 'Website Redesign & Modernization',

            descriptions: [
              {
                para: 'An outdated website can affect user experience, mobile usability, performance, SEO and conversion. A redesign provides an opportunity to improve the website without rebuilding blindly.',
              },

              {
                para: 'VoidMatrix can review the existing website structure, content, technical implementation and business goals before defining the redesign scope.',
              },

              {
                para: 'Where SEO is already generating traffic, redesign planning can also account for URLs, redirects, metadata and existing search visibility.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Website Development Cost in India, Mumbai & USA"
        costdesc={[
          {
            para: 'Website development cost depends on the number of pages, design requirements, functionality, CMS, ecommerce requirements, integrations, SEO scope and level of customization.',
          },

          {
            para: 'For Indian businesses, VoidMatrix website development projects can range from focused business websites to larger corporate, ecommerce and custom web platforms depending on the required scope.',
          },

          {
            para: 'For USA and international businesses, project investment is determined by the same core requirements, including design complexity, functionality, integrations, technical architecture and engineering involvement.',
          },

          {
            para: 'VoidMatrix does not force every business into the same website package. We understand the requirements first and provide a structured proposal covering scope, development requirements, timeline and investment.',
          },
        ]}
      />

      {/* =====================================================
          COST FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Website Development Cost"
        intro="The investment required for a website depends on what it needs to accomplish, who will use it and how much functionality and engineering is required."
        facts={[
          'Number of pages and website size',

          'Custom UI and design requirements',

          'CMS and content management requirements',

          'Custom functionality and business workflows',

          'Ecommerce functionality',

          'SEO architecture and content requirements',

          'CRM, WhatsApp and third-party integrations',

          'Payment gateway integration',

          'Performance and infrastructure requirements',

          'Ongoing maintenance and future development',
        ]}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ServiceComp
        heading="Custom Website vs Template Website"
        desc="Template websites can work when a business has simple and standard requirements. Custom website development provides greater control over design, performance, SEO architecture, integrations, functionality and future expansion. The right approach depends on your business requirements, budget, growth plans and the role the website needs to play in generating business."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Get Your Website Scope & Development Estimate"
        url="/contact"
      />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Website Development Process"
        intro="VoidMatrix follows a structured development process that connects business requirements, website architecture, development, SEO, testing and production launch."
        steps={engineeringSteps}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Website Development Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'VoidMatrix provides website development services for businesses in Mumbai, Pune and across India, while also working remotely with businesses in the USA and international markets.',
          },

          {
            para: 'For businesses in Mumbai, we develop professional websites for startups, SMEs, service businesses, consultants, agencies, manufacturers and established companies looking to improve their digital presence and generate enquiries.',
          },

          {
            para: 'For Pune and other Indian cities including Bangalore, Hyderabad, Delhi, Chennai and Ahmedabad, we provide business website development, corporate websites, ecommerce development, custom websites and SEO-ready website architecture.',
          },

          {
            para: 'For USA businesses and international clients, VoidMatrix provides remote website development from India with structured communication, defined milestones, documented scope and production-focused development.',
          },

          {
            para: 'We also work with businesses across the UK, UAE, Europe and Australia looking for an offshore or remote website development partner.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="When Should You Invest in Professional Website Development?"
        intro="A website becomes a serious business investment when it needs to attract customers, generate enquiries, support SEO and grow with the business."
        subintro="Website development is a strong fit when:"
        points={[
          'You are launching a new business and need a professional online presence',

          'Your existing website looks outdated or no longer represents your business',

          'Your website receives traffic but generates very few enquiries',

          'Your website is slow or difficult to use on mobile devices',

          'Your website has weak technical SEO foundations',

          'You are expanding into new services, locations or markets',

          'You need a website designed around lead generation',

          'You need ecommerce, payment, CRM or other business integrations',

          'Your current website cannot support the functionality your business requires',

          'You want a website architecture that can support long-term SEO and content growth',
        ]}
        finalPara="If you already have a website, VoidMatrix can first understand what is working, what is limiting growth and whether a redesign, modernization or complete redevelopment makes more sense before development begins."
      />

      {/* =====================================================
          WHAT IS WEBSITE DEVELOPMENT
      ===================================================== */}

      <WhaIsService
        heading="What Is Website Development?"
        contents={contents}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Website Development Services in India, USA & Global Markets — FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Build a Website That Generates Business?"
        description="Tell VoidMatrix what your business does, what you need from your website and where you want to grow. We can help define the website scope, technical requirements and practical next steps."
      />
    </>
  );
}