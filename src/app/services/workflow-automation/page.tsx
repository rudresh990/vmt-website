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
  title: 'Workflow Automation Company in Mumbai, Pune & India | VoidMatrix',

  description:
    'VoidMatrix builds custom workflow automation software for businesses across Mumbai, Pune and India. Automate approvals, repetitive tasks, documents, notifications and business processes with scalable workflow systems.',

  path: '/services/workflow-automation',
});

const s_data = serviceData['/services/workflow-automation'];

const whyContents = [
  {
    id: 'why1',

    paraHeading: 'Automation Built Around Your Workflows',

    para: 'Every organization has different processes, approval structures and business rules. VoidMatrix builds automation systems around how your teams actually work instead of forcing your operations into a generic workflow template.',
  },

  {
    id: 'why2',

    paraHeading: 'Replace Manual Work With Connected Processes',

    para: 'Move repetitive tasks, spreadsheets, email-based approvals and disconnected processes into structured digital workflows that can assign tasks, trigger actions, send notifications and maintain process visibility.',
  },

  {
    id: 'why3',

    paraHeading: 'Integrate Your Existing Systems',

    para: 'Workflow automation becomes more powerful when it connects the applications your teams already use. We can integrate CRM, ERP, websites, payment systems, communication tools and other business applications.',
  },

  {
    id: 'why4',

    paraHeading: 'Designed for Business Growth',

    para: 'VoidMatrix builds workflow systems with maintainability, scalability, permissions and future integrations in mind so automation can expand as your business processes become more sophisticated.',
  },
];

const whatYouGetContents = [
  {
    id: 'get1',

    paraHeading: 'Custom Workflow System',

    para: 'A digital workflow platform designed around your business processes, departments, users, approvals and operational requirements.',
  },

  {
    id: 'get2',

    paraHeading: 'Approval Automation',

    para: 'Automate multi-level approvals, routing, escalation, notifications and status tracking across departments.',
  },

  {
    id: 'get3',

    paraHeading: 'Task & Process Automation',

    para: 'Automatically assign tasks, update statuses, trigger actions and move work between teams based on defined business rules.',
  },

  {
    id: 'get4',

    paraHeading: 'Document & Data Workflows',

    para: 'Digitize document submissions, reviews, approvals, data collection and other processes currently handled manually.',
  },

  {
    id: 'get5',

    paraHeading: 'System Integrations',

    para: 'Connect workflows with CRM, ERP, websites, APIs, payment systems, email, communication platforms and other business applications.',
  },

  {
    id: 'get6',

    paraHeading: 'Monitoring & Ongoing Support',

    para: 'Track workflow activity and continue improving, maintaining and expanding your automation system as business requirements evolve.',
  },
];

const contents = [
  {
    id: 'workflow1',

    para: 'Workflow automation is the use of software to organize, execute and automate a sequence of business tasks according to predefined rules. Instead of relying on employees to manually move information, request approvals or trigger the next step, an automated workflow can perform appropriate actions based on defined conditions.',
  },

  {
    id: 'workflow2',

    para: 'Businesses use workflow automation for processes such as approvals, lead management, employee onboarding, document processing, purchase requests, invoices, customer service, inventory operations and internal task management.',
  },

  {
    id: 'workflow3',

    para: 'A workflow automation system can include triggers, conditions, tasks, approvals, notifications, assignments, escalations and integrations. The exact structure depends on how the business process operates and what outcome the organization wants to achieve.',
  },

  {
    id: 'workflow4',

    para: 'Workflow automation is particularly useful when employees repeatedly perform predictable tasks, information moves between multiple departments, approvals are managed through email or messaging, or business processes depend heavily on spreadsheets and manual data entry.',
  },

  {
    id: 'workflow5',

    para: 'VoidMatrix develops custom workflow automation software that can connect business processes, users and existing systems. Our engineering approach covers workflow discovery, architecture, application development, integrations, testing, deployment and ongoing optimization.',
  },
];

const engineeringSteps = [
  {
    title: 'Workflow Discovery & Process Analysis',

    description:
      'We understand how the current process works, where information moves, who performs each task and which activities can be automated.',

    points: [
      'Current workflow analysis',

      'Department & user mapping',

      'Manual process identification',

      'Automation opportunities',
    ],
  },

  {
    title: 'Automation Rules & System Design',

    description:
      'We define the workflow logic, triggers, conditions, approvals, roles, permissions and integrations required for the automated process.',

    points: [
      'Workflow architecture',

      'Business rules',

      'Approval logic',

      'Role & permission planning',
    ],
  },

  {
    title: 'Workflow Application Development',

    description:
      'The automation system is developed around the prioritized workflows, interfaces and business functionality required by your teams.',

    points: [
      'Frontend development',

      'Backend development',

      'Workflow engine',

      'Task management',
    ],
  },

  {
    title: 'Integrations & Automation',

    description:
      'We connect the workflow system with existing business applications and automate appropriate data transfers and actions.',

    points: [
      'API integrations',

      'CRM & ERP integration',

      'Automated notifications',

      'Data synchronization',
    ],
  },

  {
    title: 'Testing, Security & Deployment',

    description:
      'The workflow system is tested across business rules, permissions, integrations and edge cases before production deployment.',

    points: [
      'Workflow testing',

      'Integration testing',

      'Security validation',

      'Production deployment',
    ],
  },

  {
    title: 'Optimization & Process Expansion',

    description:
      'After launch, additional workflows can be automated while existing processes can be optimized based on operational feedback and business growth.',

    points: [
      'Process optimization',

      'New workflow development',

      'Performance improvements',

      'Long-term support',
    ],
  },
];

export default function WorkflowAutomationPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Workflow Automation Company in Mumbai, India"
        title={
          <>
            Automate Your Business
            <span className="text-(--primary)"> Workflows</span>
            <br />
            With Custom Software Built for
            <span className="text-(--primary)"> Growth</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Replace repetitive manual work, spreadsheets and approval bottlenecks with
                  connected digital workflows.
                </span>
                <br />
                VoidMatrix builds custom workflow automation software for businesses across
                Mumbai, Pune, India and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Projects from <span className="text-(--primary)">₹2L</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Business <span className="text-(--primary)">Automation</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                CRM & ERP <span className="text-(--primary)">Integration</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Scalable <span className="text-(--primary)">Workflows</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHY CHOOSE VOIDMATRIX
      ===================================================== */}

      <WhyVmtService
        heading="Why Choose VoidMatrix for Workflow Automation?"
        contents={whyContents}
      />

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <WhatYouGet
        heading="What You Get With Our Workflow Automation Services"
        contents={whatYouGetContents}
      />

      {/* =====================================================
          CORE WORKFLOW AUTOMATION SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Workflow Automation Services"
        intro="VoidMatrix builds automation systems around your business processes, users, approval structures and existing technology. From a single automated workflow to connected department-wide process automation, we design and develop systems that reduce repetitive manual work and improve operational visibility."
        items={[
          {
            item_link: 'business-process-automation',

            title: 'Business Process Automation',

            description:
              'Digitize repetitive business processes and automate tasks, routing, notifications and business rules across departments.',
          },

          {
            item_link: 'approval-workflow-automation',

            title: 'Approval Workflow Automation',

            description:
              'Automate single-level and multi-level approvals with routing, permissions, notifications, escalation and status tracking.',
          },

          {
            item_link: 'document-workflow-automation',

            title: 'Document Workflow Automation',

            description:
              'Digitize document submission, review, approval, tracking and storage workflows that currently depend on manual processes.',
          },

          {
            item_link: 'department-workflow-automation',

            title: 'Department Workflow Automation',

            description:
              'Connect processes across sales, HR, finance, operations, procurement, support and other departments.',
          },

          {
            item_link: 'crm-erp-workflow-automation',

            title: 'CRM & ERP Workflow Automation',

            description:
              'Automate actions and processes within or around existing CRM and ERP systems through custom workflows and integrations.',
          },

          {
            item_link: 'workflow-integration',

            title: 'Workflow Integration',

            description:
              'Connect workflow systems with APIs, CRM, ERP, websites, payment gateways, communication tools and other applications.',
          },

          {
            item_link: 'legacy-process-automation',

            title: 'Legacy Process Digitization',

            description:
              'Convert spreadsheet-driven, email-based and manual operational processes into structured digital workflows.',
          },
        ]}
        details={[
          {
            item_link_id: 'business-process-automation',

            heading: 'Business Process Automation',

            descriptions: [
              {
                para: 'Business process automation replaces repetitive manual activities with software-driven workflows that follow predefined business rules.',
              },

              {
                para: 'VoidMatrix can automate processes such as task assignments, data entry, notifications, status changes, approvals, escalations and other repetitive operational activities.',
              },

              {
                para: 'The automation is designed around your actual process so teams can spend less time managing routine tasks and more time handling work that requires human judgment.',
              },
            ],
          },

          {
            item_link_id: 'approval-workflow-automation',

            heading: 'Approval Workflow Automation',

            descriptions: [
              {
                para: 'Approval processes often become slow when requests move through email, messaging or manual spreadsheets. A workflow system can route each request to the appropriate person based on defined rules.',
              },

              {
                para: 'Custom approval workflows can support multiple approval levels, role-based permissions, notifications, escalations, comments and status tracking.',
              },

              {
                para: 'This creates greater visibility into where requests are located and which actions are still pending.',
              },
            ],
          },

          {
            item_link_id: 'document-workflow-automation',

            heading: 'Document Workflow Automation',

            descriptions: [
              {
                para: 'Document-heavy processes can involve repeated data entry, manual reviews and multiple approval steps. Digital workflows can structure these activities into a controlled process.',
              },

              {
                para: 'Automation can cover document submission, validation, assignment, review, approval, rejection, notification and status tracking.',
              },

              {
                para: 'The workflow can also connect with existing storage, CRM, ERP or other systems where required.',
              },
            ],
          },

          {
            item_link_id: 'department-workflow-automation',

            heading: 'Department Workflow Automation',

            descriptions: [
              {
                para: 'Different departments often depend on each other to complete business processes. Manual handoffs can create delays, duplicated work and limited visibility.',
              },

              {
                para: 'VoidMatrix can connect workflows across sales, HR, finance, procurement, operations, customer support and other departments.',
              },

              {
                para: 'Each department can receive the tasks, information and permissions relevant to its role while the overall process remains connected.',
              },
            ],
          },

          {
            item_link_id: 'crm-erp-workflow-automation',

            heading: 'CRM & ERP Workflow Automation',

            descriptions: [
              {
                para: 'Existing CRM and ERP platforms often contain valuable business data but may not automate every process your organization needs.',
              },

              {
                para: 'Custom workflows can trigger actions based on CRM or ERP events, update records, assign tasks, send notifications and move information between systems.',
              },

              {
                para: 'This can extend the capabilities of existing business software without requiring the entire system to be replaced.',
              },
            ],
          },

          {
            item_link_id: 'workflow-integration',

            heading: 'Workflow Integration',

            descriptions: [
              {
                para: 'Modern workflows often depend on multiple applications. Integration allows the workflow system to exchange information with the software your business already uses.',
              },

              {
                para: 'Integrations may include CRM, ERP, websites, payment systems, email, communication platforms, analytics systems and other third-party applications.',
              },

              {
                para: 'Integration architecture considers authentication, data consistency, reliability, error handling and future scalability.',
              },
            ],
          },

          {
            item_link_id: 'legacy-process-automation',

            heading: 'Legacy Process Digitization',

            descriptions: [
              {
                para: 'Many organizations still depend on spreadsheets, email chains, paper forms and manually maintained systems for important business processes.',
              },

              {
                para: 'VoidMatrix can assess these processes and convert suitable workflows into structured digital systems with defined users, rules, approvals and automation.',
              },

              {
                para: 'The objective is not to automate everything blindly, but to identify the manual processes where digitization can provide meaningful operational value.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Workflow Automation Development Cost in India"
        costdesc={[
          {
            para: 'Workflow automation development in India can start around ₹2,00,000 for a focused automation project and increase beyond ₹15,00,000 for complex multi-department workflow platforms. The final investment depends on the number of workflows, business rules, users, integrations, dashboards and automation requirements.',
          },

          {
            para: 'A single approval workflow or internal process requires a much smaller scope than an organization-wide automation platform connecting CRM, ERP, finance, HR, operations and other systems.',
          },

          {
            para: 'VoidMatrix scopes workflow automation around the processes that provide the greatest operational value. This makes it possible to automate high-impact workflows first and expand the platform as additional requirements are identified.',
          },
        ]}
      />

      {/* =====================================================
          COST FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Workflow Automation Development Cost"
        intro="The investment depends on how complex your workflows are, how many systems they need to connect with and how much business logic the automation must handle."
        facts={[
          'Number of workflows to automate',

          'Workflow complexity',

          'Number of users and departments',

          'Number of approval levels',

          'Business rules and conditions',

          'Role-based access requirements',

          'CRM and ERP integrations',

          'Third-party API integrations',

          'Document processing requirements',

          'Notification and communication workflows',

          'Reporting and dashboard requirements',

          'Ongoing maintenance and workflow expansion',
        ]}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ServiceComp
        heading="Custom Workflow Automation vs Generic Workflow Software"
        desc="Generic workflow tools can be useful for simple processes that fit their existing templates and rules. Custom workflow automation becomes more valuable when your business has specialized approval structures, complex business rules, multiple departments, existing software integrations or processes that generic tools cannot model effectively. With custom automation, the workflow, permissions, data, integrations and user experience can be designed around the way your organization actually operates."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Automate Your Business Workflow"
        url="/contact"
      />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Workflow Automation Development Process"
        intro="VoidMatrix starts with your existing business process and identifies where automation can create the most value. We then design the workflow logic, develop the application, integrate existing systems and validate the complete process before deployment."
        steps={engineeringSteps}
      />

      {/* =====================================================
          LOCATION
      ===================================================== */}

      <ServiceCost
        heading="Workflow Automation Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, VoidMatrix develops custom workflow automation systems for sales, finance, HR, operations, procurement, customer service and other business functions.',
          },

          {
            para: 'For businesses in Pune and other Indian markets, we build workflow platforms that digitize manual processes, automate approvals and connect existing CRM, ERP and business applications.',
          },

          {
            para: 'We also work with organizations across Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad and other Indian cities that need custom process automation and business software.',
          },

          {
            para: 'For businesses across the USA, UK, UAE, Europe, Australia and other international markets, VoidMatrix provides remote workflow automation development, integration and ongoing engineering support.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="When Should Your Business Invest in Workflow Automation?"
        intro="Workflow automation becomes valuable when repetitive processes, manual approvals and disconnected systems are consuming employee time or making it difficult to track business operations."
        subintro="Workflow automation may be the right fit when:"
        points={[
          'Employees repeatedly perform the same manual tasks',

          'Approvals are managed through email or messaging',

          'Teams rely heavily on spreadsheets',

          'Information moves manually between departments',

          'Customer or sales leads require repetitive follow-ups',

          'Documents require multiple manual review stages',

          'Finance or procurement approvals create bottlenecks',

          'HR processes involve repetitive data collection and approvals',

          'CRM and ERP systems do not communicate effectively',

          'Management needs greater visibility into business processes',
        ]}
        finalPara="If your teams are spending significant time moving information, requesting approvals, updating spreadsheets or coordinating repetitive tasks, VoidMatrix can assess the workflow and identify opportunities for practical automation."
      />

      {/* =====================================================
          WHAT IS WORKFLOW AUTOMATION
      ===================================================== */}

      <WhaIsService
        heading="What Is Workflow Automation?"
        contents={contents}
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Workflow Automation FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Automate Your Business Workflows?"
        description="Tell VoidMatrix about the processes your team currently manages manually. We can help identify automation opportunities and define the right workflow software approach for your business."
      />
    </>
  );
}