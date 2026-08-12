import Hero from '@/components/sections/common/Hero';
import { Metadata } from 'next';
import ServiceCoreSection from '@/components/services/ServiceCoreSection';
import ServiceApproachSection from '@/components/services/ServiceApproachSection';
import ServiceFitSection from '@/components/services/ServiceFitSection';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import WhaIsService from '@/components/services/WhatIsService';
import ServiceCost from '@/components/services/ServiceCost';
import ServiceFactors from '@/components/services/ServiceFactors';
import ServiceComp from '@/components/services/ServiceComp';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import { serviceData } from '@/app/lib/schema/data/services_data';
import { buildMetadata } from '@/app/lib/schema/seo';

export const metadata: Metadata = buildMetadata({
  title: 'CRM & ERP Development Company in Mumbai, Pune & India',
  description:
    'Build custom CRM and ERP software with VMT. We develop scalable business management systems, workflow automation, inventory, finance, HR, and enterprise software for businesses across Mumbai, Pune, India, and global markets.',
  path: '/services/crm-erp-development',
});

const s_data = serviceData['/services/crm-erp-development'];

const contents = [
  {
    id: 'p1',
    para: 'CRM (Customer Relationship Management) and ERP (Enterprise Resource Planning) software help organizations centralize operations, automate business processes, improve collaboration, and gain complete visibility across departments. Unlike off-the-shelf business software, custom CRM and ERP solutions are engineered specifically around your workflows, business rules, reporting requirements, and long-term growth objectives.',
  },
  {
    id: 'p2',
    para: 'As businesses expand, spreadsheets and disconnected software often create duplicated work, inconsistent reporting, and operational inefficiencies. A custom CRM or ERP platform brings sales, customer support, inventory, purchasing, finance, HR, production, logistics, and management into one secure cloud-based system, allowing every department to work with accurate, real-time information.',
  },
  {
    id: 'p3',
    para: 'Whether you operate a manufacturing company in Pune, a logistics business in Mumbai, a healthcare organization, a financial services firm, or a growing startup anywhere in India, a well-designed CRM or ERP system improves productivity, reduces manual work, strengthens decision-making, and supports sustainable business growth.',
  },
  {
    id: 'p4',
    para: 'At VoidMatrix Technology, we build architecture-first CRM and ERP platforms using modern technologies such as Next.js, React, Node.js, PostgreSQL, and cloud-native infrastructure. Every system is designed for scalability, security, maintainability, and seamless integration with existing business applications.',
  },
  {
    id: 'p5',
    para: 'Our objective is not simply to develop software—it is to engineer intelligent business systems that streamline operations, automate repetitive work, improve customer relationships, and provide organizations with a long-term competitive advantage.',
  },
];

const engineeringSteps = [
  {
    title: 'Business Discovery & Process Analysis',
    description:
      'We begin by understanding your workflows, operational challenges, reporting requirements, and future business goals.',
    points: [
      'Stakeholder workshops',
      'Department analysis',
      'Workflow mapping',
      'Business requirement documentation',
    ],
  },
  {
    title: 'CRM / ERP Architecture Design',
    description:
      'Every platform is architected for scalability before development begins.',
    points: [
      'Database modelling',
      'Module planning',
      'Role-based permissions',
      'Integration architecture',
    ],
  },
  {
    title: 'Agile Development & Automation',
    description:
      'Modules are developed in structured sprints with continuous feedback and transparent progress tracking.',
    points: [
      'Sprint planning',
      'Workflow automation',
      'Dashboard development',
      'API integrations',
    ],
  },
  {
    title: 'Testing & Business Validation',
    description:
      'Every workflow is tested to ensure accuracy, reliability, security, and performance.',
    points: [
      'Functional testing',
      'User acceptance testing',
      'Security testing',
      'Performance optimization',
    ],
  },
  {
    title: 'Deployment & Team Onboarding',
    description:
      'After deployment we assist with migration, onboarding, documentation, and user training.',
    points: [
      'Cloud deployment',
      'Data migration',
      'User onboarding',
      'Documentation',
    ],
  },
  {
    title: 'Continuous Improvement',
    description:
      'Business software should evolve with your organization through ongoing enhancements and optimization.',
    points: [
      'New feature development',
      'Performance improvements',
      'Infrastructure scaling',
      'Long-term support',
    ],
  },
];

export default function CRMERPDevelopment() {
  return (
    <>
      <Hero
        eyebrow="CRM & ERP Development Company in Mumbai, India"
        title={
          <>
            Custom <span className="text-(--primary)">CRM & ERP Software</span> For
            Growing Businesses Across{' '}
            <span className="text-(--primary)">Mumbai</span>,{' '}
            <span className="text-(--primary)">India</span> & Global Markets
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Replace spreadsheets and disconnected software with one powerful
                  business platform.
                </span>
                <br />
                VMT develops custom CRM and ERP solutions that centralize customer
                management, inventory, finance, HR, procurement, operations, and
                workflow automation. Every platform is engineered using modern web
                technologies with scalable architecture, enterprise security, and
                seamless integrations for businesses across Mumbai, Pune, India, and
                worldwide.
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
                Workflow <span className="text-(--primary)">Automation</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Enterprise <span className="text-(--primary)">Architecture</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Long-term <span className="text-(--primary)">Support</span>
              </span>
            </div>
          </>
        }
      />
      <WhaIsService
        heading="What is CRM & ERP Development?"
        contents={contents}
      />
      <ServiceCoreSection
        heading="Our CRM & ERP Development Services"
        intro="We engineer custom CRM and ERP software that simplifies business operations, eliminates manual processes, and provides complete visibility across your organization. Every solution is built around your workflows, industry requirements, and long-term business objectives rather than forcing you to adapt to generic software."
        items={[
          {
            item_link: '/services/custom-crm-development',
            title: 'Custom CRM Development',
            description:
              'Centralize customer relationships, sales, marketing, and support operations in one scalable platform.',
          },
          {
            item_link: 'erp',
            title: 'Custom ERP Development',
            description:
              'Integrate finance, inventory, HR, procurement, manufacturing, and operations into a unified business system.',
          },
          {
            item_link: 'automation',
            title: 'Business Process Automation',
            description:
              'Automate repetitive workflows, approvals, notifications, and reporting to improve efficiency.',
          },
        ]}
        details={[
          {
            item_link_id: 'crm',
            heading: 'Custom CRM Development',
            descriptions: [
              {
                para: 'Every business manages customer relationships differently. Generic CRM software often includes unnecessary features while failing to support unique sales processes, quotation workflows, customer onboarding, service management, and reporting requirements. Our custom CRM development services are designed specifically around your organization rather than forcing your team to change established processes.',
              },
              {
                para: 'We build CRM platforms that centralize lead management, customer communication, sales pipelines, quotations, support tickets, follow-ups, document management, task tracking, and analytics. Every module is designed to improve collaboration while providing management with complete visibility into customer interactions and business performance.',
              },
              {
                para: 'Whether you operate in logistics, healthcare, finance, manufacturing, professional services, or real estate, a custom CRM system enables your team to work faster, improve customer satisfaction, and make informed decisions using accurate real-time business data.',
              },
            ],
          },

          {
            item_link_id: 'erp',
            heading: 'Custom ERP Software Development',
            descriptions: [
              {
                para: 'Enterprise Resource Planning software connects multiple departments into a single digital ecosystem. Instead of relying on separate applications for inventory, purchasing, finance, HR, production, and reporting, a custom ERP platform provides centralized operational control with accurate data shared across the entire organization.',
              },
              {
                para: 'Our ERP development services include inventory management, warehouse operations, procurement, finance, payroll, HR, manufacturing, project management, vendor management, and executive reporting. Every module works together seamlessly to eliminate duplicate data entry and improve operational efficiency.',
              },
              {
                para: 'By developing ERP software specifically for your organization, businesses gain greater flexibility, stronger security, improved reporting accuracy, and the ability to expand the platform as operational requirements continue to evolve.',
              },
            ],
          },

          {
            item_link_id: 'automation',
            heading: 'Business Process Automation',
            descriptions: [
              {
                para: 'Many growing businesses continue to rely on spreadsheets, emails, and manual approvals to manage everyday operations. These repetitive processes consume valuable employee time while increasing the risk of delays, inconsistencies, and human error.',
              },
              {
                para: 'We develop intelligent workflow automation systems that streamline approvals, document generation, notifications, employee onboarding, procurement requests, customer communication, recurring tasks, and operational reporting. Automation improves consistency while allowing teams to focus on higher-value work.',
              },
              {
                para: 'The result is a more efficient organization where repetitive administrative work is minimized, decisions happen faster, and business operations become significantly more scalable.',
              },
            ],
          },

          {
            item_link_id: 'inventory',
            heading: 'Inventory & Warehouse Management Software',
            descriptions: [
              {
                para: 'Effective inventory management is critical for manufacturers, distributors, wholesalers, retailers, and logistics companies. We develop inventory management software that provides complete visibility into stock movement, warehouse operations, purchasing, supplier management, and product availability.',
              },
              {
                para: 'Our inventory systems support barcode integration, purchase orders, warehouse transfers, stock adjustments, batch tracking, reorder management, and real-time inventory reporting to reduce operational costs and improve supply chain efficiency.',
              },
              {
                para: 'Whether you manage a single warehouse or multiple distribution centers across India, our inventory solutions provide accurate operational data that supports informed business decisions.',
              },
            ],
          },

          {
            item_link_id: 'dashboard',
            heading: 'Business Intelligence Dashboards & Reporting',
            descriptions: [
              {
                para: 'Business leaders require accurate information to make strategic decisions. We build executive dashboards that consolidate operational, financial, sales, customer, inventory, and employee data into clear visual reports that update in real time.',
              },
              {
                para: 'Custom reporting modules allow management teams to monitor KPIs, profitability, customer growth, sales performance, operational efficiency, inventory turnover, and departmental productivity without relying on multiple disconnected systems.',
              },
              {
                para: 'By transforming business data into actionable insights, organizations can identify opportunities, reduce operational bottlenecks, and improve long-term performance.',
              },
            ],
          },

          {
            item_link_id: 'integration',
            heading: 'API Integrations & Legacy System Modernization',
            descriptions: [
              {
                para: 'Modern businesses rely on multiple software platforms including accounting systems, payment gateways, logistics providers, HR software, communication platforms, ERP solutions, and third-party business applications. We build secure integration layers that allow these systems to exchange data automatically.',
              },
              {
                para: 'Our team also modernizes legacy desktop software, spreadsheet-based workflows, and outdated business applications by migrating them to secure cloud-native architectures with improved usability, scalability, and long-term maintainability.',
              },
              {
                para: 'Whether you need integrations with payment gateways, Tally, WhatsApp Business APIs, Microsoft services, Google Workspace, shipping providers, or custom enterprise systems, we develop reliable integration solutions that reduce manual work while improving operational efficiency.',
              },
            ],
          },
        ]}
      />
      <ServiceCost
        heading="CRM & ERP Development Cost in India"
        costdesc={[
          {
            para: 'The cost of custom CRM and ERP development in India typically depends on the number of business modules, workflow complexity, integrations, security requirements, reporting capabilities, and long-term scalability. A focused CRM for sales teams requires significantly less engineering than an enterprise ERP managing finance, inventory, HR, procurement, manufacturing, and multiple business locations.',
          },
          {
            para: 'Unlike subscription-based business software, custom CRM and ERP systems are designed specifically around your organization. This eliminates unnecessary licensing costs, removes workflow limitations, and allows the platform to evolve as your business grows. The result is a long-term digital asset rather than an ongoing software expense.',
          },
          {
            para: 'At VoidMatrix Technology, every CRM and ERP platform is architected for future expansion. Whether you need a departmental solution today or a complete enterprise management platform tomorrow, we build systems that support continuous business growth without expensive redevelopment.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors That Affect CRM & ERP Development Cost"
        intro="Every organization operates differently, which means every CRM or ERP platform requires a unique architecture. The final project scope depends on operational complexity, required business modules, integrations, user access, and automation requirements."
        facts={[
          'Number of business departments',
          'Sales and CRM workflow complexity',
          'Inventory and warehouse management',
          'Finance and accounting modules',
          'HR and payroll management',
          'Manufacturing or production workflows',
          'Approval and workflow automation',
          'Custom reporting and dashboards',
          'Third-party software integrations',
          'Mobile application requirements',
          'Cloud infrastructure and security',
          'Long-term scalability requirements',
        ]}
      />

      <ServiceComp
        heading="Custom CRM & ERP vs Off-the-Shelf Business Software"
        desc="Popular business software platforms provide excellent starting points for standardized operations, but growing organizations often require workflows, reports, approvals, and integrations that packaged software cannot easily support. A custom CRM or ERP platform gives your business complete ownership of its technology, allowing every process to match the way your teams actually work while providing unlimited flexibility for future expansion."
      />

      <CtaButtonRe
        title="Get a Custom CRM & ERP Development Estimate"
        url="/contact"
      />

      <ServiceApproachSection
        heading="Our CRM & ERP Development Process"
        intro="Successful business software is engineered around operational efficiency rather than individual features. Our architecture-first development methodology ensures every CRM and ERP platform supports your current business processes while remaining flexible enough to accommodate future growth, new departments, and evolving operational requirements."
        steps={engineeringSteps}
      />
      <ServiceCost
        heading="CRM & ERP Development Company for Mumbai, Pune, India & Global Businesses"
        costdesc={[
          {
            para: "Mumbai is home to financial institutions, logistics companies, healthcare providers, professional service firms, real estate businesses, and fast-growing startups that depend on efficient operations and real-time business insights. We build custom CRM and ERP software that helps Mumbai businesses centralize customer management, automate workflows, improve reporting, and scale operations without relying on disconnected systems.",
          },
          {
            para: "Pune has become one of India's leading manufacturing, automotive, IT, engineering, and SaaS hubs. Our ERP development services help manufacturers, distributors, and technology companies streamline inventory management, procurement, production planning, warehouse operations, HR, finance, and business intelligence through secure cloud-based platforms built for long-term scalability.",
          },
          {
            para: "Beyond Mumbai and Pune, we work with organizations across India and international markets including the UAE, UK, US, Europe, and Australia. Whether your teams operate from a single office or across multiple countries, we engineer cloud-native CRM and ERP solutions that support distributed teams, multiple business locations, secure access, and continuous business growth.",
          },
        ]}
      />

      <ServiceFitSection
        heading="When Should Your Business Invest in a Custom CRM or ERP?"
        intro="Custom CRM and ERP software becomes the right investment when your organization begins to outgrow spreadsheets, disconnected applications, and manual business processes. Instead of adapting your operations to packaged software, a custom platform is engineered around the way your business actually works."
        subintro="A custom CRM or ERP solution is ideal when:"
        points={[
          'Your team manages customers, leads, or projects using spreadsheets',
          'Multiple departments work with disconnected software and duplicate data',
          'Manual approvals and repetitive administrative work slow down operations',
          'Management lacks real-time reports and business visibility',
          'Inventory, procurement, or warehouse operations are becoming difficult to manage',
          'Sales, finance, HR, and operations need to share accurate business data',
          'You require secure role-based access for multiple departments',
          'Your business requires integrations with accounting, payment, logistics, or third-party software',
          'Subscription software no longer supports your unique workflows',
          'You want a scalable business platform that grows with your organization',
        ]}
        finalPara="A well-engineered CRM or ERP system is more than operational software—it becomes the digital backbone of your business, enabling better decision-making, improved productivity, stronger customer relationships, and sustainable long-term growth."
      />
      <MainServiceFAQ
        heading="Frequently Asked Questions"
        faqs={s_data.faqs}
      />

      <MainServiceCTA
        heading="Build a CRM or ERP Platform That Grows With Your Business"
        description="We develop custom CRM and ERP software tailored to your business, helping you automate processes, manage operations, and accelerate growth."
      />
    </>
  );
}