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
  title: 'Custom Software Development Company in Mumbai & India | VoidMatrix',

  description:
    'VoidMatrix builds custom software for startups, SMEs and enterprises across Mumbai, Pune and India. Get scalable web applications, SaaS platforms, CRM, ERP, automation and enterprise software tailored to your business.',

  path: '/services/custom-software-development',
});

const s_data = serviceData['/services/custom-software-development'];

const whyContents = [
  {
    id: 'why1',

    paraHeading: 'Business-First Software Engineering',

    para: 'We start with your business workflows, operational requirements and growth objectives before defining the technology solution. The result is software designed around how your business actually works rather than a collection of unnecessary features.',
  },

  {
    id: 'why2',

    paraHeading: 'Architecture Built for Scale',

    para: 'VoidMatrix designs software with scalability, maintainability, security and future integrations in mind. Architecture decisions are made before development so your system can evolve as users, data, features and business requirements increase.',
  },

  {
    id: 'why3',

    paraHeading: 'From MVP to Enterprise Systems',

    para: 'Whether you need an MVP, internal business application, SaaS platform, CRM, ERP or enterprise system, we can structure the engineering approach around the size, complexity and stage of your business.',
  },

  {
    id: 'why4',

    paraHeading: 'Long-Term Engineering Partnership',

    para: 'Custom software is a long-term business asset. We build with future maintenance, integrations, performance improvements, infrastructure scaling and feature expansion in mind instead of treating deployment as the end of the project.',
  },
];

const whatYouGetContents = [
  {
    id: 'get1',

    paraHeading: 'Custom Business Application',

    para: 'A software application designed around your specific workflows, users, business rules and operational requirements.',
  },

  {
    id: 'get2',

    paraHeading: 'Scalable System Architecture',

    para: 'A structured technical foundation designed to support future features, integrations, users, data and infrastructure requirements.',
  },

  {
    id: 'get3',

    paraHeading: 'Responsive Dashboards & Interfaces',

    para: 'Role-based interfaces and dashboards designed around the information and actions different users need.',
  },

  {
    id: 'get4',

    paraHeading: 'API & Third-Party Integrations',

    para: 'Integration with payment gateways, CRMs, ERP systems, communication platforms, analytics tools and other required services.',
  },

  {
    id: 'get5',

    paraHeading: 'Security & Access Controls',

    para: 'Authentication, authorization, role-based access and application-level security appropriate to the requirements of your software.',
  },

  {
    id: 'get6',

    paraHeading: 'Deployment & Ongoing Support',

    para: 'Production deployment, infrastructure configuration and continued engineering support for improvements, maintenance and scaling.',
  },
];

const contents = [
  {
    id: 'software1',

    para: 'Custom software development is the process of designing and building software specifically around a company’s business requirements. Unlike off-the-shelf tools designed for a broad audience, custom software can be structured around your workflows, users, data, integrations, security requirements and long-term business objectives.',
  },

  {
    id: 'software2',

    para: 'Businesses often consider custom software when existing tools cannot support their processes efficiently, require too many workarounds, do not integrate properly with other systems, or limit the company’s ability to scale. A custom application can bring these processes into a system designed specifically for the organization.',
  },

  {
    id: 'software3',

    para: 'Custom software can take many forms, including enterprise applications, SaaS platforms, CRM and ERP systems, workflow automation platforms, logistics software, dashboards, customer portals, internal business applications and industry-specific digital products.',
  },

  {
    id: 'software4',

    para: 'A major advantage of custom software is control. Businesses can control the product roadmap, functionality, integrations, data structure and technology direction instead of depending entirely on the roadmap of a third-party software provider.',
  },

  {
    id: 'software5',

    para: 'VoidMatrix combines business analysis, software architecture, development, integrations, deployment and ongoing engineering support to build custom software that can become a long-term digital asset for your organization.',
  },
];

const engineeringSteps = [
  {
    title: 'Business & Requirement Discovery',

    description:
      'We understand the business problem, workflows, users, requirements and technical constraints before defining the software solution.',

    points: [
      'Workflow mapping & operational analysis',

      'User and role identification',

      'Functional requirements',

      'Technical feasibility assessment',
    ],
  },

  {
    title: 'Architecture & System Design',

    description:
      'We design the application architecture, database structure, APIs, security model and infrastructure requirements before production development begins.',

    points: [
      'System architecture',

      'Database design',

      'API architecture',

      'Security planning',
    ],
  },

  {
    title: 'UI, Application & Feature Development',

    description:
      'Development is performed in structured iterations so the core functionality can be built, reviewed and refined progressively.',

    points: [
      'Frontend development',

      'Backend development',

      'API development',

      'Role-based functionality',
    ],
  },

  {
    title: 'Integration, Testing & Security',

    description:
      'We validate the application across functionality, integrations, performance and security before production deployment.',

    points: [
      'Functional testing',

      'Integration testing',

      'Performance validation',

      'Security validation',
    ],
  },

  {
    title: 'Deployment & Production Setup',

    description:
      'The completed application is prepared for production with appropriate hosting, infrastructure, deployment and operational configuration.',

    points: [
      'Cloud deployment',

      'Production configuration',

      'CI/CD integration',

      'Backup & recovery planning',
    ],
  },

  {
    title: 'Optimization & Long-Term Scaling',

    description:
      'After launch, the software can evolve through performance improvements, new features, integrations and infrastructure scaling.',

    points: [
      'Performance optimization',

      'Feature expansion',

      'Infrastructure scaling',

      'Security updates',
    ],
  },
];

export default function CustomSoftwareDev() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Custom Software Development Company in Mumbai, India"
        title={
          <>
            Custom Software Built Around
            <span className="text-(--primary)"> Your Business</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Replace disconnected tools and manual workflows with software engineered for
                  your business.
                </span>
                <br />
                VoidMatrix builds secure, scalable custom software for startups, SMEs and
                enterprises across Mumbai, Pune, India and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Projects from <span className="text-(--primary)">₹3L</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Custom <span className="text-(--primary)">Architecture</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Scalable <span className="text-(--primary)">Systems</span>
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
        heading="Why Choose VoidMatrix for Custom Software Development?"
        contents={whyContents}
      />

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <WhatYouGet
        heading="What You Get With Our Custom Software Development Services"
        contents={whatYouGetContents}
      />

      {/* =====================================================
          CORE CUSTOM SOFTWARE SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Custom Software Development Services"
        intro="We engineer software around your business model, workflows, users and technical requirements. From internal business systems to customer-facing digital products, our custom software development services cover the complete engineering lifecycle."
        items={[
          {
            item_link: 'enterprise-software-development',

            title: 'Enterprise Software Development',

            description:
              'Build secure, scalable enterprise applications for complex workflows, multiple departments, large user bases and critical business operations.',
          },

          {
            item_link: 'saas-development',

            title: 'SaaS Platform Development',

            description:
              'Develop cloud-based SaaS products with scalable architecture, user management, subscription workflows, APIs and future-ready infrastructure.',
          },

          {
            item_link: 'crm-erp-development',

            title: 'Custom CRM & ERP Development',

            description:
              'Centralize business data, automate workflows and connect sales, operations, inventory, finance and other business processes.',
          },

          {
            item_link: 'workflow-automation',

            title: 'Workflow Automation Software',

            description:
              'Replace repetitive manual processes with custom approval systems, automated workflows, notifications, task management and business rules.',
          },

          {
            item_link: 'web-application-development',

            title: 'Custom Web Application Development',

            description:
              'Build customer portals, dashboards, business applications and complex web platforms tailored to specific product or operational requirements.',
          },

          {
            item_link: 'api-development-integration',

            title: 'API Development & Integration',

            description:
              'Connect your custom software with existing platforms, third-party services, payment systems, CRMs, ERPs and other business applications.',
          },

          {
            item_link: 'software-modernization',

            title: 'Legacy Software Modernization',

            description:
              'Modernize outdated applications, architectures and technology stacks while protecting important business functionality and data.',
          },
        ]}
        details={[
          {
            item_link_id: 'enterprise-software-development',

            heading: 'Enterprise Software Development',

            descriptions: [
              {
                para: 'Enterprise software is designed for organizations with complex processes, multiple teams, large datasets, strict access requirements and long-term scalability needs.',
              },

              {
                para: 'VoidMatrix can build enterprise applications such as internal management systems, operational dashboards, financial platforms, workflow systems, administration portals and industry-specific business applications.',
              },

              {
                para: 'Architecture, security, integrations, performance and maintainability are considered from the beginning so the software can support evolving enterprise requirements.',
              },
            ],
          },

          {
            item_link_id: 'saas-development',

            heading: 'SaaS Platform Development',

            descriptions: [
              {
                para: 'Custom SaaS development is suitable for businesses building software products that need to serve multiple customers through a scalable cloud-based platform.',
              },

              {
                para: 'Our SaaS engineering can cover MVP development, user authentication, multi-tenant architecture, dashboards, subscription workflows, APIs, database architecture and cloud deployment.',
              },

              {
                para: 'The architecture can be structured so the product can continue evolving as customers, features, integrations and infrastructure requirements increase.',
              },
            ],
          },

          {
            item_link_id: 'crm-erp-development',

            heading: 'Custom CRM & ERP Development',

            descriptions: [
              {
                para: 'Custom CRM and ERP systems allow businesses to centralize operational data and build workflows around their actual processes instead of adapting the organization to generic software.',
              },

              {
                para: 'CRM functionality can include lead management, customer records, sales pipelines, communication tracking and reporting, while ERP systems can connect procurement, inventory, finance, HR, operations and other departments.',
              },

              {
                para: 'Role-based access, dashboards, reporting and third-party integrations can be incorporated according to the organization’s requirements.',
              },
            ],
          },

          {
            item_link_id: 'workflow-automation',

            heading: 'Workflow Automation Software',

            descriptions: [
              {
                para: 'Custom workflow software can automate repetitive operational processes that are difficult to manage using spreadsheets, email chains or disconnected applications.',
              },

              {
                para: 'Applications can include approval workflows, task assignment, notifications, document processing, status tracking, escalation rules and automated business logic.',
              },

              {
                para: 'The objective is to reduce manual work while creating greater visibility and control over business operations.',
              },
            ],
          },

          {
            item_link_id: 'web-application-development',

            heading: 'Custom Web Application Development',

            descriptions: [
              {
                para: 'Custom web applications can provide customers, employees, vendors or partners with secure browser-based access to business functionality and data.',
              },

              {
                para: 'We can build dashboards, portals, marketplaces, management systems, customer applications and other browser-based software around specific business requirements.',
              },

              {
                para: 'Frontend, backend, database, authentication, APIs and deployment architecture can be engineered as one connected system.',
              },
            ],
          },

          {
            item_link_id: 'api-development-integration',

            heading: 'API Development & Integration',

            descriptions: [
              {
                para: 'Modern businesses often rely on multiple software systems that need to exchange data. Custom APIs and integrations can connect these systems into a more unified workflow.',
              },

              {
                para: 'Integrations may include payment gateways, CRM platforms, ERP systems, communication tools, analytics platforms, logistics systems and other third-party services.',
              },

              {
                para: 'We design integration workflows around security, data consistency, reliability and the requirements of the surrounding software architecture.',
              },
            ],
          },

          {
            item_link_id: 'software-modernization',

            heading: 'Legacy Software Modernization',

            descriptions: [
              {
                para: 'Older software can become difficult to maintain, integrate or scale as technology requirements change. Modernization provides a way to improve the technical foundation while preserving important business functionality.',
              },

              {
                para: 'Modernization can involve application architecture, databases, APIs, frontend systems, infrastructure, security and deployment workflows depending on the condition of the existing application.',
              },

              {
                para: 'We assess the existing system before recommending whether specific modules should be modernized, migrated, redesigned or rebuilt.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Custom Software Development Cost in India"
        costdesc={[
          {
            para: 'Custom software development in India typically starts around ₹3,00,000 for smaller projects and can exceed ₹25,00,000 for complex platforms. The final investment depends on the application scope, number of modules, user roles, integrations, architecture, security requirements and scalability expectations.',
          },

          {
            para: 'An MVP or focused internal business application generally requires a smaller engineering scope than an enterprise platform, multi-tenant SaaS product, CRM/ERP system or software requiring extensive third-party integrations.',
          },

          {
            para: 'VoidMatrix scopes software projects around the actual business requirements instead of forcing every project into a fixed package. This allows the initial build to focus on the functionality that provides the most business value while keeping future expansion possible.',
          },
        ]}
      />

      {/* =====================================================
          COST FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Custom Software Development Cost"
        intro="The investment required to build custom software depends on what the system needs to do, who will use it, how it integrates with other systems and how it needs to perform as the business grows."
        facts={[
          'Feature complexity and business workflows',

          'Number of user roles and permissions',

          'Frontend and dashboard requirements',

          'Backend architecture',

          'Database complexity and data volume',

          'Third-party API integrations',

          'Payment and communication integrations',

          'Security and compliance requirements',

          'Cloud infrastructure requirements',

          'Performance and scalability requirements',

          'Testing and quality assurance requirements',

          'Ongoing maintenance and feature expansion',
        ]}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ServiceComp
        heading="Custom Software vs Off-the-Shelf & Subscription Tools"
        desc="Off-the-shelf software can be useful when your business processes closely match the functionality already provided by the product. Custom software becomes more valuable when existing tools create workarounds, cannot integrate properly, limit automation, lack required functionality or become expensive as usage grows. With a custom system, your business controls the functionality, integrations, data structure and product roadmap. The right choice depends on your workflows, budget, scalability requirements and long-term business objectives."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Get a Custom Software Development Estimate"
        url="/contact"
      />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Custom Software Development Process"
        intro="VoidMatrix follows an architecture-first engineering process that connects business requirements, system design, development, testing and deployment. The objective is to build software that works for the business today while remaining maintainable as requirements evolve."
        steps={engineeringSteps}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Custom Software Development Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, VoidMatrix develops custom software for startups, professional services, fintech businesses, agencies, technology companies and enterprises that need applications built around specific workflows and operational requirements.',
          },

          {
            para: 'For businesses in Pune and other Indian technology and industrial hubs, we build SaaS platforms, enterprise applications, CRM and ERP systems, automation software, dashboards and other custom digital systems.',
          },

          {
            para: 'We also work with businesses across Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad and other Indian markets, adapting the engineering scope to the industry, business model, users and technology requirements of each project.',
          },

          {
            para: 'For businesses in the USA, UK, UAE, Europe, Australia and other international markets, VoidMatrix provides remote custom software engineering for new products, internal systems, modernization projects and long-term application development.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="When Should You Choose Custom Software Development?"
        intro="Custom software becomes a strong option when your business needs functionality, automation or integrations that existing software cannot provide effectively."
        subintro="Custom software may be the right fit when:"
        points={[
          'Your current software does not match your business workflows',

          'Employees depend heavily on spreadsheets or manual processes',

          'Multiple systems need to exchange data',

          'You need custom dashboards or role-based access',

          'Existing SaaS tools require too many workarounds',

          'Your business needs a proprietary digital product',

          'Performance and scalability are becoming important',

          'Security or data ownership requirements are increasing',

          'You need complete control over future features and integrations',

          'Your organization is ready to replace fragmented systems with one connected platform',
        ]}
        finalPara="If your business processes are becoming too complex for generic software, VoidMatrix can help evaluate the requirements and determine whether custom development, modernization, integration or a phased approach is the right investment."
      />

      {/* =====================================================
          WHAT IS CUSTOM SOFTWARE DEVELOPMENT
      ===================================================== */}

      <WhaIsService
        heading="What Is Custom Software Development?"
        contents={contents}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Custom Software Development FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Build Software Around Your Business?"
        description="Tell VoidMatrix what you want to build, automate or improve. We can help define the right technical approach, project scope and development investment."
      />
    </>
  );
}