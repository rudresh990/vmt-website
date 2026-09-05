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
  title: 'CRM & ERP Development Company in Mumbai, Pune & India | VoidMatrix',

  description:
    'VoidMatrix develops custom CRM and ERP software for businesses across Mumbai, Pune and India. Centralize business data, automate workflows, manage inventory and connect sales, operations and finance.',

  path: '/services/crm-erp-development',
});

const s_data = serviceData['/services/crm-erp-development'];

const whyContents = [
  {
    id: 'why1',

    paraHeading: 'CRM & ERP Built Around Your Business',

    para: 'Your sales, operations, finance, inventory and customer workflows are different from another company. VoidMatrix builds CRM and ERP systems around your actual processes, business rules, users and organizational structure.',
  },

  {
    id: 'why2',

    paraHeading: 'Connected Business Operations',

    para: 'Instead of managing information across disconnected spreadsheets and applications, we can connect customer management, sales, inventory, procurement, operations, finance and reporting into a centralized system.',
  },

  {
    id: 'why3',

    paraHeading: 'Automation Where It Matters',

    para: 'Custom workflows can automate repetitive tasks, approvals, notifications, lead assignments, inventory processes, document flows and other operational activities so teams spend less time managing manual processes.',
  },

  {
    id: 'why4',

    paraHeading: 'Scalable & Maintainable Architecture',

    para: 'VoidMatrix designs CRM and ERP systems with future users, modules, integrations, security requirements and business growth in mind. The system can evolve as your organization becomes more complex.',
  },
];

const whatYouGetContents = [
  {
    id: 'get1',

    paraHeading: 'Custom CRM System',

    para: 'Centralize leads, customers, sales pipelines, communication, follow-ups and customer information in a system designed around your sales process.',
  },

  {
    id: 'get2',

    paraHeading: 'Custom ERP Platform',

    para: 'Connect business functions such as inventory, procurement, finance, operations and other departments through a centralized enterprise system.',
  },

  {
    id: 'get3',

    paraHeading: 'Workflow Automation',

    para: 'Automate approvals, notifications, task assignments, lead workflows, inventory processes and repetitive operational activities.',
  },

  {
    id: 'get4',

    paraHeading: 'Role-Based Dashboards',

    para: 'Give administrators, managers, sales teams, operations teams and other users access to the information and functionality relevant to their roles.',
  },

  {
    id: 'get5',

    paraHeading: 'Business Integrations',

    para: 'Connect your CRM or ERP with payment gateways, accounting systems, communication platforms, websites, APIs and other business applications.',
  },

  {
    id: 'get6',

    paraHeading: 'Deployment & Ongoing Support',

    para: 'Production deployment, system maintenance, performance improvements, security updates, integrations and continued feature development as your business grows.',
  },
];

const contents = [
  {
    id: 'crm1',

    para: 'CRM, or Customer Relationship Management software, is used to organize and manage customer information, leads, sales activities, communication and relationships throughout the customer lifecycle. A CRM can give sales and management teams a centralized view of customer activity and sales opportunities.',
  },

  {
    id: 'crm2',

    para: 'ERP, or Enterprise Resource Planning software, connects business functions and operational data within a centralized system. Depending on the organization, an ERP can manage areas such as finance, procurement, inventory, operations, human resources and other business processes.',
  },

  {
    id: 'crm3',

    para: 'Businesses often require custom CRM or ERP software when generic platforms do not match their workflows, require extensive workarounds or cannot integrate effectively with existing systems. Custom development allows functionality, permissions, workflows, dashboards and integrations to be designed around the organization.',
  },

  {
    id: 'crm4',

    para: 'CRM and ERP systems can also work together. Customer and sales information can connect with inventory, finance, operations and other business data to create a more complete view of the organization and reduce duplicated manual data entry.',
  },

  {
    id: 'crm5',

    para: 'VoidMatrix develops custom CRM and ERP software with business analysis, system architecture, frontend and backend development, workflow automation, integrations, dashboards, testing, deployment and ongoing engineering support.',
  },
];

const engineeringSteps = [
  {
    title: 'Business Process & Requirements Discovery',

    description:
      'We understand how your sales, operations, finance, inventory and other departments currently work before defining the CRM or ERP requirements.',

    points: [
      'Business workflow analysis',

      'Department & user mapping',

      'Current system assessment',

      'Functional requirements',
    ],
  },

  {
    title: 'CRM & ERP Architecture Planning',

    description:
      'We define the system architecture, database structure, modules, roles, permissions, APIs and integration requirements before development begins.',

    points: [
      'System architecture',

      'Database design',

      'Module planning',

      'Role & permission structure',
    ],
  },

  {
    title: 'Core CRM & ERP Development',

    description:
      'The prioritized business modules are developed in structured iterations so the organization can review functionality throughout the implementation.',

    points: [
      'Frontend development',

      'Backend development',

      'Business modules',

      'Role-based dashboards',
    ],
  },

  {
    title: 'Workflow Automation & Integrations',

    description:
      'We connect the CRM or ERP with existing systems and automate repetitive processes, approvals, notifications and business workflows.',

    points: [
      'API integrations',

      'Workflow automation',

      'Approval systems',

      'Third-party integrations',
    ],
  },

  {
    title: 'Testing, Security & Deployment',

    description:
      'The system is validated across functionality, permissions, integrations, security and performance before production deployment.',

    points: [
      'Functional testing',

      'Integration testing',

      'Security validation',

      'Production deployment',
    ],
  },

  {
    title: 'Optimization & Continuous Development',

    description:
      'After launch, the CRM or ERP can evolve through additional modules, integrations, reporting, performance improvements and new business requirements.',

    points: [
      'Performance optimization',

      'New module development',

      'Reporting improvements',

      'Long-term support',
    ],
  },
];

export default function CrmErpDevelopmentPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="CRM & ERP Development Company in Mumbai, India"
        title={
          <>
            Custom
            <span className="text-(--primary)"> CRM & ERP Software</span> For
            <br />
            Growing Businesses Across
            <span className="text-(--primary)"> Mumbai, India</span> & Global Markets
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Centralize your business data, automate workflows and connect your operations
                  through custom CRM and ERP software.
                </span>
                <br />
                VoidMatrix develops scalable CRM and ERP platforms for startups, SMEs and
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
                Custom <span className="text-(--primary)">Workflows</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Business <span className="text-(--primary)">Automation</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Scalable <span className="text-(--primary)">Architecture</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHY CHOOSE VOIDMATRIX
      ===================================================== */}

      <WhyVmtService
        heading="Why Choose VoidMatrix for CRM & ERP Development?"
        contents={whyContents}
      />

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <WhatYouGet
        heading="What You Get With Our CRM & ERP Development Services"
        contents={whatYouGetContents}
      />

      {/* =====================================================
          CORE CRM & ERP SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our CRM & ERP Development Services"
        intro="VoidMatrix builds CRM and ERP systems around your business processes, departments, users and technology environment. Whether you need a focused CRM, complete ERP platform or connected business management system, we can structure the software around your operational requirements."
        items={[
          {
            item_link: 'custom-crm-development',

            title: 'Custom CRM Development',

            description:
              'Build a CRM around your sales process, customer lifecycle, lead management, communication and reporting requirements.',
          },

          {
            item_link: 'custom-erp-development',

            title: 'Custom ERP Development',

            description:
              'Connect finance, inventory, procurement, operations, HR and other business functions through a centralized ERP system.',
          },

          {
            item_link: 'sales-crm-development',

            title: 'Sales CRM Development',

            description:
              'Manage leads, opportunities, sales pipelines, follow-ups and customer interactions through a custom sales platform.',
          },

          {
            item_link: 'inventory-management-software',

            title: 'Inventory & Warehouse Software',

            description:
              'Track inventory, warehouses, stock movements, procurement and operational data through custom business software.',
          },

          {
            item_link: 'workflow-automation',

            title: 'CRM & ERP Workflow Automation',

            description:
              'Automate approvals, notifications, assignments, task flows and repetitive business processes across departments.',
          },

          {
            item_link: 'crm-erp-integration',

            title: 'CRM & ERP Integration',

            description:
              'Connect CRM, ERP, accounting, payment, communication, website and other business systems through APIs and integrations.',
          },

          {
            item_link: 'business-intelligence-dashboard',

            title: 'Business Intelligence & Dashboards',

            description:
              'Turn centralized business data into dashboards, reports and analytics for management and operational decision-making.',
          },
        ]}
        details={[
          {
            item_link_id: 'custom-crm-development',

            heading: 'Custom CRM Development',

            descriptions: [
              {
                para: 'A custom CRM can centralize customer information, leads, sales activities, communication and follow-up workflows around the way your sales team actually operates.',
              },

              {
                para: 'VoidMatrix can develop CRM functionality such as lead management, customer records, sales pipelines, follow-ups, task management, communication tracking and reporting.',
              },

              {
                para: 'The system can also integrate with websites, marketing platforms, communication tools, payment systems and other applications required by your sales operation.',
              },
            ],
          },

          {
            item_link_id: 'custom-erp-development',

            heading: 'Custom ERP Development',

            descriptions: [
              {
                para: 'Custom ERP software connects business functions into a centralized operational system so departments can work from consistent information.',
              },

              {
                para: 'Depending on your requirements, the ERP can include finance, procurement, inventory, operations, HR, sales, reporting and other business modules.',
              },

              {
                para: 'Role-based access, approval workflows, dashboards and integrations can be designed around the organization’s actual structure and processes.',
              },
            ],
          },

          {
            item_link_id: 'sales-crm-development',

            heading: 'Sales CRM Development',

            descriptions: [
              {
                para: 'A sales CRM provides teams with centralized visibility into leads, prospects, opportunities, follow-ups and customer interactions.',
              },

              {
                para: 'Custom sales workflows can include lead assignment, pipeline stages, reminders, follow-ups, task management, communication history and sales reporting.',
              },

              {
                para: 'The system can be adapted to the sales cycle and business rules of your organization instead of forcing sales teams into a generic workflow.',
              },
            ],
          },

          {
            item_link_id: 'inventory-management-software',

            heading: 'Inventory & Warehouse Software',

            descriptions: [
              {
                para: 'Inventory software can provide centralized visibility into stock, warehouses, procurement, stock movements and other inventory-related operations.',
              },

              {
                para: 'Custom functionality can support multiple warehouses, stock transfers, product records, purchase workflows, inventory adjustments and operational reporting.',
              },

              {
                para: 'Inventory systems can also be connected with ERP, ecommerce, accounting, sales and other business systems to reduce duplicated data entry.',
              },
            ],
          },

          {
            item_link_id: 'workflow-automation',

            heading: 'CRM & ERP Workflow Automation',

            descriptions: [
              {
                para: 'CRM and ERP systems become significantly more useful when repetitive business processes can be automated instead of being managed manually through email, spreadsheets or separate applications.',
              },

              {
                para: 'Automation can cover approvals, lead assignments, notifications, task creation, escalations, document workflows and other business rules.',
              },

              {
                para: 'Workflows are designed around your actual organizational processes and permission structure.',
              },
            ],
          },

          {
            item_link_id: 'crm-erp-integration',

            heading: 'CRM & ERP Integration',

            descriptions: [
              {
                para: 'Businesses often use multiple systems for sales, accounting, inventory, communication, payments and operations. Integrations can connect these systems and reduce fragmented information.',
              },

              {
                para: 'VoidMatrix can develop API-based integrations between your CRM or ERP and relevant third-party platforms.',
              },

              {
                para: 'Integration architecture considers authentication, data consistency, reliability, error handling and future scalability.',
              },
            ],
          },

          {
            item_link_id: 'business-intelligence-dashboard',

            heading: 'Business Intelligence & Dashboards',

            descriptions: [
              {
                para: 'Centralized CRM and ERP data can provide management and operational teams with better visibility through dashboards and reporting.',
              },

              {
                para: 'Custom dashboards can provide different views for sales teams, managers, finance teams, operations and executives based on their responsibilities.',
              },

              {
                para: 'Reporting functionality can be connected to the underlying business data so decision-makers have access to relevant and timely information.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="CRM & ERP Development Cost in India"
        costdesc={[
          {
            para: 'Custom CRM and ERP development in India can start around ₹3,00,000 for focused CRM applications and can exceed ₹25,00,000 for complex ERP platforms with multiple modules, departments, integrations and advanced workflows.',
          },

          {
            para: 'A sales CRM with lead management and dashboards requires a different scope from a complete ERP connecting finance, inventory, procurement, operations and other departments.',
          },

          {
            para: 'VoidMatrix scopes CRM and ERP projects around the business processes that need to be digitized. This makes it possible to prioritize the most important modules first and expand the platform as the organization grows.',
          },
        ]}
      />

      {/* =====================================================
          COST FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect CRM & ERP Development Cost"
        intro="The investment depends on the number of business processes, users, modules, integrations and automation requirements your organization needs."
        facts={[
          'Number of CRM or ERP modules',

          'Number of departments',

          'Number of users and roles',

          'Role-based access requirements',

          'Sales and operational workflows',

          'Approval and automation requirements',

          'Inventory and warehouse complexity',

          'Database and reporting requirements',

          'Third-party system integrations',

          'Payment and accounting integrations',

          'Security and authentication requirements',

          'Migration, maintenance and ongoing development',
        ]}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ServiceComp
        heading="Custom CRM & ERP vs Off-the-Shelf Business Software"
        desc="Off-the-shelf CRM and ERP platforms can be effective when their workflows and functionality closely match your organization. Custom development becomes more valuable when your processes require significant customization, automation, specialized permissions, integrations or control over the product roadmap. A custom CRM or ERP allows the software to be structured around your business instead of forcing your teams to change established processes to fit a generic platform."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Discuss Your CRM & ERP Requirements"
        url="/contact"
      />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our CRM & ERP Development Process"
        intro="VoidMatrix follows a structured business-first engineering process for CRM and ERP development. We connect workflow discovery, architecture, module development, integrations, automation, testing and deployment to build systems that support long-term business operations."
        steps={engineeringSteps}
      />

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <ServiceCost
        heading="CRM & ERP Development Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, VoidMatrix develops custom CRM and ERP systems for sales management, operations, inventory, finance, workflow automation and other business processes.',
          },

          {
            para: 'For businesses in Pune and other Indian markets, we develop CRM and ERP platforms that can connect departments, automate workflows and centralize operational information.',
          },

          {
            para: 'We also work with organizations across Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad and other Indian cities requiring custom business management software.',
          },

          {
            para: 'For international businesses across the USA, UK, UAE, Europe, Australia and other markets, VoidMatrix provides remote CRM and ERP development, integration, modernization and ongoing engineering support.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="When Should Your Business Invest in Custom CRM or ERP Software?"
        intro="Custom CRM or ERP development becomes valuable when your existing tools no longer provide the visibility, automation or flexibility your organization needs."
        subintro="A custom CRM or ERP may be the right fit when:"
        points={[
          'Your sales team relies on spreadsheets to manage leads',

          'Customer information is spread across multiple systems',

          'Departments work with disconnected business data',

          'Employees repeatedly enter the same information into different tools',

          'Approvals are handled manually through email or messaging',

          'Inventory information is difficult to track',

          'Your existing CRM or ERP requires too many workarounds',

          'You need custom dashboards and reporting',

          'Multiple systems need to exchange business data',

          'Your organization needs greater control over workflows and business software',
        ]}
        finalPara="If your business has outgrown spreadsheets, disconnected applications or generic CRM and ERP workflows, VoidMatrix can evaluate your existing processes and recommend a practical custom software approach."
      />

      {/* =====================================================
          WHAT IS CRM & ERP
      ===================================================== */}

      <WhaIsService
        heading="What Is CRM & ERP Development?"
        contents={contents}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="CRM & ERP Development Frequently Asked Questions"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Build a CRM or ERP Platform That Grows With Your Business?"
        description="Tell VoidMatrix about your current workflows, systems and business requirements. We can help define the right CRM or ERP architecture, implementation scope and development approach."
      />
    </>
  );
}