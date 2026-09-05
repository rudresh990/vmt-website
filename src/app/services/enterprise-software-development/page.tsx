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
  title: 'Enterprise Software Development Company in Mumbai & India | VoidMatrix',

  description:
    'VoidMatrix builds scalable enterprise software for organizations across Mumbai, Pune and India. Develop secure ERP systems, workflow platforms, enterprise applications, analytics dashboards and integrated business systems.',

  path: '/services/enterprise-software-development',
});

const s_data = serviceData['/services/enterprise-software-development'];

const whyContents = [
  {
    id: 'why1',

    paraHeading: 'Enterprise-Ready Architecture',

    para: 'Enterprise applications need to support complex workflows, multiple departments, large datasets and evolving business requirements. VoidMatrix designs the technical architecture with scalability, maintainability, security and future integrations in mind.',
  },

  {
    id: 'why2',

    paraHeading: 'Built Around Your Business Processes',

    para: 'Instead of forcing your organization to adapt to generic software, we build systems around your actual workflows, approval structures, users, departments, business rules and operational requirements.',
  },

  {
    id: 'why3',

    paraHeading: 'Integrated Business Systems',

    para: 'Enterprise software often needs to connect multiple departments and existing applications. We build APIs and integrations that allow your systems, data and workflows to work together more effectively.',
  },

  {
    id: 'why4',

    paraHeading: 'Long-Term Technology Partnership',

    para: 'Enterprise software is a long-term investment. VoidMatrix supports continued development, modernization, performance improvements, integrations, security updates and infrastructure scaling as organizational requirements evolve.',
  },
];

const whatYouGetContents = [
  {
    id: 'get1',

    paraHeading: 'Custom Enterprise Application',

    para: 'A business application designed around your organization’s workflows, departments, users, processes and operational requirements.',
  },

  {
    id: 'get2',

    paraHeading: 'Enterprise System Architecture',

    para: 'A scalable technical foundation covering application architecture, databases, APIs, security, infrastructure and integration requirements.',
  },

  {
    id: 'get3',

    paraHeading: 'Role-Based Access & Workflows',

    para: 'User roles, permissions, approvals and department-specific functionality designed around your organizational structure.',
  },

  {
    id: 'get4',

    paraHeading: 'Business Automation',

    para: 'Automate repetitive processes, approvals, notifications, task assignments, reporting and other operational workflows.',
  },

  {
    id: 'get5',

    paraHeading: 'Enterprise Integrations',

    para: 'Connect your enterprise application with existing ERP, CRM, finance, HR, payment, communication and other business systems.',
  },

  {
    id: 'get6',

    paraHeading: 'Deployment & Ongoing Engineering',

    para: 'Production deployment, infrastructure configuration, monitoring, maintenance, modernization and continued feature development.',
  },
];

const contents = [
  {
    id: 'enterprise1',

    para: 'Enterprise software is software designed to support the operations, workflows, data and users of larger or growing organizations. Unlike simple business applications, enterprise systems often need to coordinate multiple departments, complex processes, large amounts of data and a significant number of users.',
  },

  {
    id: 'enterprise2',

    para: 'Enterprise applications can include ERP systems, CRM platforms, workflow automation systems, analytics platforms, inventory management software, internal business applications, employee portals, customer portals and industry-specific enterprise systems.',
  },

  {
    id: 'enterprise3',

    para: 'A major requirement of enterprise software is the ability to integrate different business functions and systems. An organization may need its sales, finance, operations, inventory, HR and customer systems to exchange information without relying on disconnected manual processes.',
  },

  {
    id: 'enterprise4',

    para: 'Enterprise software also needs to consider security, permissions, scalability, reliability, performance and maintainability. Architecture decisions made during development can have a significant impact on how easily the system can evolve as the organization grows.',
  },

  {
    id: 'enterprise5',

    para: 'VoidMatrix develops custom enterprise software around the specific requirements of organizations. Our engineering approach can cover business analysis, system architecture, application development, integrations, automation, testing, deployment and long-term technology support.',
  },
];

const engineeringSteps = [
  {
    title: 'Enterprise Discovery & Requirements',

    description:
      'We understand your organizational structure, departments, workflows, existing systems, users and business requirements before defining the software scope.',

    points: [
      'Business workflow analysis',

      'Department & user mapping',

      'Functional requirements',

      'Existing system assessment',
    ],
  },

  {
    title: 'System Architecture & Planning',

    description:
      'We define the technical architecture required to support your enterprise application, including databases, APIs, access control, integrations and infrastructure.',

    points: [
      'Enterprise architecture',

      'Database design',

      'API architecture',

      'Security & access planning',
    ],
  },

  {
    title: 'Application & Module Development',

    description:
      'The core enterprise system and its modules are developed in structured iterations based on prioritized business requirements.',

    points: [
      'Frontend development',

      'Backend development',

      'Business modules',

      'Role-based functionality',
    ],
  },

  {
    title: 'Integrations & Workflow Automation',

    description:
      'We connect the enterprise platform with existing systems and automate appropriate business workflows across departments.',

    points: [
      'System integrations',

      'API development',

      'Workflow automation',

      'Notifications & approvals',
    ],
  },

  {
    title: 'Testing, Security & Deployment',

    description:
      'The application is validated across functionality, integrations, security and performance before being prepared for production use.',

    points: [
      'Functional testing',

      'Integration testing',

      'Security validation',

      'Production deployment',
    ],
  },

  {
    title: 'Optimization & Enterprise Scaling',

    description:
      'After launch, the platform can evolve through new modules, integrations, infrastructure improvements, performance optimization and ongoing engineering.',

    points: [
      'Performance optimization',

      'Infrastructure scaling',

      'New module development',

      'Security updates',
    ],
  },
];

export default function EnterpriseSoftwareDevelopmentPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Enterprise Software Development Company in Mumbai, India"
        title={
          <>
            Build Scalable
            <span className="text-(--primary)"> Enterprise Software</span> For
            <br />
            Organizations Across
            <span className="text-(--primary)"> Mumbai, India</span> & Global Markets
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Modernize operations, connect departments and build software around the way your
                  organization works.
                </span>
                <br />
                VoidMatrix develops secure, scalable enterprise applications, ERP systems,
                workflow platforms, analytics solutions and integrated business software for
                growing organizations.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Enterprise <span className="text-(--primary)">Ready</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Secure <span className="text-(--primary)">Architecture</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Built for <span className="text-(--primary)">Scale</span>
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
        heading="Why Choose VoidMatrix for Enterprise Software Development?"
        contents={whyContents}
      />

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <WhatYouGet
        heading="What You Get With Our Enterprise Software Development Services"
        contents={whatYouGetContents}
      />

      {/* =====================================================
          CORE ENTERPRISE SOFTWARE SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Enterprise Software Development Services"
        intro="VoidMatrix builds enterprise software around your organizational structure, workflows, users and technology environment. From individual business applications to integrated enterprise platforms, we provide the engineering capabilities required to build and modernize critical business systems."
        items={[
          {
            item_link: 'enterprise-application-development',

            title: 'Enterprise Application Development',

            description:
              'Build custom enterprise applications for complex business processes, internal operations, customer management and organizational workflows.',
          },

          {
            item_link: 'enterprise-erp-development',

            title: 'Enterprise ERP Development',

            description:
              'Connect finance, inventory, procurement, operations, HR and other business functions through a custom ERP platform.',
          },

          {
            item_link: 'enterprise-crm-development',

            title: 'Enterprise CRM Development',

            description:
              'Build centralized customer and sales management systems with custom workflows, dashboards, permissions and integrations.',
          },

          {
            item_link: 'enterprise-workflow-automation',

            title: 'Enterprise Workflow Automation',

            description:
              'Digitize approvals, operational workflows, task management, notifications and repetitive processes across departments.',
          },

          {
            item_link: 'enterprise-analytics',

            title: 'Enterprise Analytics & BI Platforms',

            description:
              'Centralize business data and build dashboards, reports and analytics systems that support operational and management decisions.',
          },

          {
            item_link: 'enterprise-api-integration',

            title: 'Enterprise API & System Integration',

            description:
              'Connect ERP, CRM, finance, HR, logistics, payment and other enterprise systems through secure and reliable integrations.',
          },

          {
            item_link: 'enterprise-software-modernization',

            title: 'Enterprise Software Modernization',

            description:
              'Modernize legacy enterprise applications, databases, infrastructure and architectures while protecting critical business functionality.',
          },
        ]}
        details={[
          {
            item_link_id: 'enterprise-application-development',

            heading: 'Enterprise Application Development',

            descriptions: [
              {
                para: 'Custom enterprise applications allow organizations to build software around their specific departments, workflows, business rules and operational requirements.',
              },

              {
                para: 'VoidMatrix can develop internal management systems, employee portals, customer applications, operational dashboards and industry-specific enterprise platforms.',
              },

              {
                para: 'Architecture, permissions, integrations, performance and maintainability are considered from the beginning so the application can support long-term organizational growth.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-erp-development',

            heading: 'Enterprise ERP Development',

            descriptions: [
              {
                para: 'Custom ERP software can bring multiple business functions into a connected platform instead of relying on disconnected systems and manual data transfers.',
              },

              {
                para: 'Depending on requirements, an ERP system can connect finance, procurement, inventory, operations, HR, sales and other departments.',
              },

              {
                para: 'Role-based access, approval workflows, reporting, dashboards and integrations can be designed around the organization’s actual operational structure.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-crm-development',

            heading: 'Enterprise CRM Development',

            descriptions: [
              {
                para: 'Enterprise CRM systems centralize customer, sales and relationship data while providing teams with workflows and visibility tailored to their sales process.',
              },

              {
                para: 'Custom CRM functionality can include lead management, customer records, sales pipelines, communication tracking, reporting, dashboards and role-based access.',
              },

              {
                para: 'The CRM can also integrate with existing ERP, marketing, communication, payment and customer-support systems where required.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-workflow-automation',

            heading: 'Enterprise Workflow Automation',

            descriptions: [
              {
                para: 'Large organizations often have approval chains, repetitive tasks, manual data entry and department-to-department processes that can become difficult to manage as operations grow.',
              },

              {
                para: 'Custom workflow systems can automate approvals, notifications, task assignments, escalations, document processing and business rules.',
              },

              {
                para: 'The objective is to improve process visibility and reduce unnecessary manual work while maintaining appropriate controls.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-analytics',

            heading: 'Enterprise Analytics & BI Platforms',

            descriptions: [
              {
                para: 'Enterprise analytics platforms can bring information from different business systems into centralized dashboards and reporting environments.',
              },

              {
                para: 'Custom dashboards can provide different views for executives, managers, departments and operational teams according to their responsibilities.',
              },

              {
                para: 'Analytics architecture can be designed around the organization’s data sources, reporting requirements and decision-making workflows.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-api-integration',

            heading: 'Enterprise API & System Integration',

            descriptions: [
              {
                para: 'Enterprise organizations commonly operate multiple applications that need to exchange data reliably. Custom APIs and integration workflows can connect these systems.',
              },

              {
                para: 'Integrations may include ERP, CRM, HR, finance, payment, logistics, communication, analytics and other enterprise platforms.',
              },

              {
                para: 'Integration architecture considers authentication, data consistency, error handling, reliability and future scalability.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-software-modernization',

            heading: 'Enterprise Software Modernization',

            descriptions: [
              {
                para: 'Legacy enterprise software can become difficult to maintain, integrate or scale as technology and business requirements change.',
              },

              {
                para: 'Modernization may involve application architecture, databases, APIs, frontend systems, infrastructure, security and deployment processes.',
              },

              {
                para: 'VoidMatrix evaluates the existing system before recommending whether individual modules should be modernized, migrated, redesigned or rebuilt.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Enterprise Software Development Cost in India"
        costdesc={[
          {
            para: 'Enterprise software development cost in India depends heavily on the number of business modules, departments, users, integrations, workflows, security requirements and infrastructure needs. Smaller enterprise applications may start around ₹8,00,000, while complex enterprise platforms can exceed ₹25,00,000.',
          },

          {
            para: 'A focused internal application requires a different engineering scope from a complete ERP, CRM, workflow platform or integrated enterprise ecosystem supporting multiple departments and large numbers of users.',
          },

          {
            para: 'VoidMatrix scopes enterprise software around the organization’s actual requirements rather than forcing complex business operations into a fixed package. The initial implementation can also be phased so high-priority business functions are delivered first.',
          },
        ]}
      />

      {/* =====================================================
          COST FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors Affecting Enterprise Software Development Cost"
        intro="Enterprise software investment is primarily determined by the complexity of the organization, number of business processes, integrations and technical requirements."
        facts={[
          'Number of business modules',

          'Number of departments and workflows',

          'Number of users and roles',

          'Role-based access requirements',

          'Approval and automation workflows',

          'Database complexity and data volume',

          'ERP, CRM and third-party integrations',

          'Security and compliance requirements',

          'Analytics and reporting requirements',

          'Cloud infrastructure requirements',

          'Performance and scalability requirements',

          'Migration, maintenance and modernization requirements',
        ]}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ServiceComp
        heading="Enterprise Software vs Off-the-Shelf Tools"
        desc="Off-the-shelf enterprise tools can be effective when their workflows, integrations and functionality closely match your organization’s requirements. Custom enterprise software becomes more valuable when existing tools create operational workarounds, require disconnected systems, lack important functionality or prevent the organization from controlling its technology roadmap. With custom software, your workflows, permissions, integrations, dashboards and business logic can be designed around your organization instead of changing your processes to fit the software."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Discuss Your Enterprise Software Requirements"
        url="/contact"
      />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Enterprise Software Engineering Process"
        intro="VoidMatrix follows an architecture-first engineering process designed for complex business systems. We connect business requirements, system architecture, application development, integrations, testing and deployment into a structured delivery process."
        steps={engineeringSteps}
      />

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <ServiceCost
        heading="Enterprise Software Development Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For organizations in Mumbai, VoidMatrix develops enterprise applications, ERP systems, CRM platforms, workflow automation systems and business dashboards designed around specific operational requirements.',
          },

          {
            para: 'For businesses in Pune and other Indian technology and industrial markets, we provide enterprise software engineering for organizations looking to digitize operations, integrate systems or modernize existing applications.',
          },

          {
            para: 'We also work with organizations across Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad and other Indian markets requiring custom enterprise applications and long-term engineering support.',
          },

          {
            para: 'For international organizations across the USA, UK, UAE, Europe, Australia and other markets, VoidMatrix provides remote enterprise software development, modernization and product engineering services.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="When Should You Choose Enterprise Software Development?"
        intro="Enterprise software is particularly valuable when an organization has complex workflows, multiple departments, growing operational requirements or existing systems that no longer provide the flexibility required for the business."
        subintro="Enterprise software can be a strong fit when:"
        points={[
          'Multiple departments need to work from connected business data',

          'Existing software does not match your operational workflows',

          'Teams depend heavily on spreadsheets and manual processes',

          'Approvals and repetitive workflows require automation',

          'Different business systems need to exchange data',

          'You need centralized enterprise dashboards and reporting',

          'Existing ERP or CRM systems require significant customization',

          'Your organization needs custom security and access controls',

          'Legacy applications are becoming difficult to maintain or scale',

          'Your organization needs greater control over its technology roadmap',
        ]}
        finalPara="If your organization has outgrown disconnected tools or requires software built around complex business operations, VoidMatrix can assess your requirements and recommend whether custom development, integration, modernization or a phased implementation is the right approach."
      />

      {/* =====================================================
          WHAT IS ENTERPRISE SOFTWARE
      ===================================================== */}

      <WhaIsService
        heading="What Is Enterprise Software Development?"
        contents={contents}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Enterprise Software Development FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Build Enterprise Software?"
        description="Tell VoidMatrix about your organization, workflows and technology requirements. We can help define the right architecture, implementation scope and engineering approach for your enterprise software project."
      />
    </>
  );
}