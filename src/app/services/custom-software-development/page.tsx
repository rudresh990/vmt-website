import Hero from '@/components/sections/common/Hero';
import { Metadata } from 'next';
import ServiceCoreSection from '@/components/services/ServiceCoreSection';
import ServiceApproachSection from '@/components/services/ServiceApproachSection';
import ServiceFitSection from '@/components/services/ServiceFitSection';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import { generateService } from '@/app/lib/schema/service';
import { generateFAQPage } from '@/app/lib/schema/faq-generator';
import { buildGraph } from '@/app/lib/schema/graph';
import WhaIsService from '@/components/services/WhatIsService';
import ServiceCost from '@/components/services/ServiceCost';
import ServiceFactors from '@/components/services/ServiceFactors';
import ServiceComp from '@/components/services/ServiceComp';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import { generateWebPage } from '@/app/lib/schema/webpage';
export const metadata: Metadata = {
  title: 'Custom Software Development Company in India | Void Matrix Technology',
  description:
    'Custom software development company in India delivering scalable enterprise, SaaS, and CRM solutions. Projects starting ₹3,00,000. Serving Mumbai, Pune & PAN India.',
};

const faqs = [
  {
    q: 'How much does custom software development cost in India?',
    a: 'Custom software development in India typically ranges from ₹3,00,000 to ₹25,00,000+, depending on complexity, integrations, features, and scalability requirements. Simple internal business tools cost less, while enterprise-grade platforms with cloud architecture, AI integration, and multi-user systems require larger investments. At VMT, we provide transparent cost breakdowns based on your exact business needs.',
  },
  {
    q: 'How long does it take to build custom software?',
    a: 'Development timelines vary based on project scope. A basic MVP can take 6-10 weeks, while enterprise software solutions may require 4–8 months. The timeline depends on feature depth, integrations, UI/UX complexity, and testing cycles. We follow an agile methodology to ensure faster delivery and iterative improvements.',
  },
  {
    q: 'Why choose custom software over off-the-shelf solutions?',
    a: 'Off-the-shelf software limits customization and scalability. Custom software is built specifically for your business workflows, operational systems, and long-term growth strategy. It provides better integration, higher performance, improved security, and complete ownership of your technology infrastructure.',
  },
  {
    q: 'Which industries benefit from custom software development?',
    a: 'Industries such as healthcare, fintech, logistics, manufacturing, eCommerce, and enterprise consulting benefit significantly from custom software solutions. Any business with unique operational workflows or scalability requirements gains long-term efficiency and competitive advantage through tailored software systems.',
  },
  {
    q: 'What technologies do you use for custom software development?',
    a: 'We use modern and scalable technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure), and secure database architectures. Technology selection depends on performance needs, scalability goals, and integration requirements.',
  },
  {
    q: 'Do you provide cloud deployment and DevOps support?',
    a: 'Yes, we provide full cloud deployment, CI/CD pipelines, server configuration, DevOps automation, and infrastructure scaling. Our architecture-first approach ensures your custom software runs securely and efficiently in cloud environments.',
  },
  {
    q: 'How do you ensure software security?',
    a: 'We implement secure coding practices, role-based access control, encrypted data handling, secure APIs, and regular security audits. Our development approach aligns with global security standards to protect business-critical data.',
  },
  {
    q: 'Do you offer post-launch maintenance and support?',
    a: 'Yes. We provide long-term maintenance, performance optimization, feature upgrades, and scaling support. Custom software is an evolving system, and we ensure continuous improvement as your business grows.',
  },
  {
    q: 'Can custom software scale as my business grows?',
    a: 'Absolutely. We design scalable architectures that handle increasing users, transactions, and integrations. From startups to enterprise systems, our solutions are built for long-term growth.',
  },
  {
    q: 'Do you sign NDAs and ensure confidentiality?',
    a: 'Yes, we sign Non-Disclosure Agreements (NDAs) before project discussions. Protecting your intellectual property, business strategy, and sensitive data is a top priority.',
  },
];

const serviceSchema = generateService(
  'Custom Software Development',
  'custom-software-development',
  'Custom Software Development Services',
  `We provide custom software development services in India, helping startups, SMEs, and enterprises build scalable, secure, and high-performance digital solutions. Our team designs and develops tailored web applications, enterprise systems, SaaS platforms, automation tools, and business process software aligned with Indian market needs and regulatory requirements. From Mumbai, Delhi, Bangalore, and other major Indian cities, we support businesses across fintech, healthcare, eCommerce, logistics, manufacturing, and consulting sectors. Our development approach focuses on performance optimization, data security, cloud scalability, and long-term maintainability. We offer end-to-end services including requirement analysis, UI/UX design, architecture planning, full-stack development, API integration, cloud deployment, and ongoing support. Whether you need enterprise software, CRM/ERP systems, or custom automation solutions, we build technology that improves operational efficiency and drives measurable growth in the Indian business ecosystem.`,
);

const webPageSchema = generateWebPage(
  'Custom Software Development Company in India',
  'custom-software-development',
);

const faqSchema = generateFAQPage('services/custom-software-development/', faqs);

const schema = buildGraph([serviceSchema, webPageSchema, faqSchema]);

const contents = [
  {
    id: 'p1',
    para: 'Custom software development is the process of designing and building software applications tailored specifically to a company’s unique business requirements. Unlike off-the-shelf software, which is built for a broad audience, custom software is developed to solve specific operational challenges, automate internal workflows, and create scalable digital systems aligned with long-term business goals.',
  },
  {
    id: 'p2',
    para: 'In today’s competitive market, businesses across India - from startups in Mumbai to manufacturing firms in Pune - increasingly require tailored software solutions that integrate seamlessly with their existing systems. Whether it’s an enterprise resource planning (ERP) platform, a SaaS-based product, a logistics management system, or a fintech dashboard, custom software provides flexibility, security, and complete ownership of the atechnology stack.',
  },
  {
    id: 'p3',
    para: 'One of the key advantages of custom software development in India is scalability. As your business grows, the application can evolve - adding new features, integrating third-party APIs, improving performance, and supporting larger user bases without system limitations. This is particularly important for enterprises and high-growth startups that cannot rely on rigid subscription-based tools.',
  },
  {
    id: 'p4',
    para: 'Custom-built applications also offer enhanced security, better performance optimization, and full control over data management. Unlike pre-built SaaS products, where you depend on vendor roadmaps, custom software allows you to innovate at your own pace and build a long-term digital asset for your organization.',
  },
  {
    id: 'p5',
    para: 'At its core, custom software development is not just about coding - it’s about engineering scalable, efficient, and future-ready digital systems that support operational excellence and business growth.',
  },
];
// engineering steps

const engineeringSteps = [
  {
    title: 'Strategic Requirement Discovery',
    description:
      'Every project begins with deep business analysis and system planning to ensure long-term scalability.',
    points: [
      'Workflow mapping & operational analysis',
      'Technical feasibility assessment',
      'Integration planning',
      'Scalability evaluation',
    ],
  },
  {
    title: 'Architecture & System Design',
    description: 'We design scalable system architecture before writing production code.',
    points: [
      'Modular or microservices architecture',
      'Database & API structure planning',
      'Security framework design',
      'Cloud infrastructure strategy',
    ],
  },
  {
    title: 'Agile Engineering & Sprint Execution',
    description: 'Structured sprint cycles ensure transparent and high-quality development.',
    points: [
      'Sprint-based execution',
      'Version-controlled workflow',
      'Performance-first coding',
      'Weekly progress updates',
    ],
  },
  {
    title: 'Quality Assurance & Security Validation',
    description: 'Rigorous testing ensures stability, performance, and security.',
    points: [
      'Functional testing',
      'Performance optimization',
      'Security audits',
      'Integration validation',
    ],
  },
  {
    title: 'Cloud Deployment & DevOps Integration',
    description: 'Modern DevOps practices ensure reliability and scalability.',
    points: [
      'CI/CD pipelines',
      'Cloud deployment',
      'Infrastructure monitoring',
      'Backup & recovery setup',
    ],
  },
  {
    title: 'Long-Term Optimization & Scaling',
    description: 'Your software evolves as your business grows.',
    points: [
      'Performance tuning',
      'Feature expansion',
      'Infrastructure scaling',
      'Security updates',
    ],
  },
];
export default function CustomSoftwareDev() {
  return (
    <>
      <script
        type="application/ld+json"
        id="service-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero
        title="Custom Software Development Company in India"
        subtitle="Scalable, secure, and performance-driven custom software solutions for startups, enterprises, and growing businesses across India."
        ctaLable="Get Custom Software Estimate"
        ctaRoute="/software-development-cost-estimator"
      />
      <WhaIsService heading="What is Custom Software Development?" contents={contents} />
      <ServiceCoreSection
        heading="Our Custom Software Development Services in India"
        intro="We build high-performance systems tailored for Indian businesses."
        items={[
          {
            item_link: 'enterprise',
            title: 'Enterprise Application',
            description: 'Robust enterprise-grade systems built for scale and reliability.',
          },
          {
            item_link: 'saas',
            title: 'SaaS Platforms',
            description: 'Cloud-native SaaS products engineered for high performance.',
          },
          {
            item_link: 'crm',
            title: 'CRM & ERP Systems',
            description: 'Custom internal platforms to optimize workflows.',
          },
        ]}
        details={[
          {
            item_link_id: 'enterprise',
            heading: 'Enterprise Software Development in India',
            descriptions: [
              {
                para: 'Enterprise software development in India focuses on building scalable, secure, and high-performance systems tailored to complex business operations. Large organizations and growing enterprises require customized platforms such as ERP systems, internal dashboards, financial management software, compliance systems, and workflow automation tools that integrate seamlessly with existing infrastructure.',
              },
              {
                para: 'As a custom software development company in India, we design enterprise-grade applications using modern architectures like microservices, cloud-native deployment, and secure API integrations. Whether it’s a logistics management platform, manufacturing control system, fintech solution, or healthcare administration software, our enterprise solutions are built for long-term scalability and operational efficiency.',
              },
              {
                para: 'Security, performance optimization, and data governance are at the core of enterprise software development. We ensure high availability, role-based access controls, and seamless integration with third-party services such as payment gateways, CRM platforms, and analytics systems. The result is a powerful digital backbone that supports business growth, improves productivity, and enables smarter decision-making across departments.',
              },
            ],
          },
          {
            item_link_id: 'saas',
            heading: 'SaaS Platform Development',
            descriptions: [
              {
                para: 'SaaS platform development in India involves building cloud-based, multi-tenant software products that are designed for scalability, subscription management, and continuous feature evolution. Startups and enterprises looking to launch digital products rely on custom SaaS development to create secure, performance-driven applications that can support thousands of users simultaneously.',
              },
              {
                para: 'Our SaaS development services include MVP development, multi-tenant architecture design, subscription billing integration, API-based ecosystem connectivity, and cloud deployment using AWS or similar platforms. We focus on building flexible software architectures that allow seamless feature expansion as user demand grows.',
              },
              {
                para: 'Unlike off-the-shelf SaaS tools, custom SaaS platforms give businesses full ownership of their product roadmap, pricing models, and technical infrastructure. Whether you are building a B2B SaaS dashboard, fintech analytics platform, EdTech learning system, or industry-specific management software, our team ensures high performance, optimized database design, and strong security frameworks to support long-term scalability.',
              },
            ],
          },
          {
            item_link_id: 'crm',
            heading: 'Custom CRM & ERP Development',
            descriptions: [
              {
                para: 'Custom CRM and ERP development enables businesses to centralize data, automate workflows, and improve operational visibility across departments. Unlike generic software solutions, custom-built CRM and ERP systems are tailored to your specific sales processes, inventory management requirements, financial tracking systems, and reporting needs.',
              },
              {
                para: 'Our CRM development services help organizations streamline lead management, automate sales pipelines, track customer interactions, and generate real-time analytics. For companies requiring operational control, our ERP solutions integrate procurement, inventory, HR, finance, and supply chain processes into a unified digital system.',
              },
              {
                para: 'By building custom CRM and ERP platforms, businesses gain complete control over system features, data security, and scalability. We design role-based dashboards, advanced reporting tools, and API integrations to ensure seamless collaboration across teams. Whether you operate in manufacturing, logistics, healthcare, or professional services, our custom software solutions in India are built to increase efficiency, reduce manual processes, and drive data-driven growth.',
              },
            ],
          },
        ]}
      />

      <ServiceCost
        heading="Custom Software Development Cost in India"
        costdesc={[
          {
            para: 'Custom software development cost in India typically ranges from ₹3,00,000 to ₹25,00,000+ depending on the scope, complexity, integrations, and scalability requirements. Unlike off-the-shelf tools, custom software is built around your unique workflows, security standards, and long-term growth strategy.',
          },
          {
            para: 'For startups building MVPs, the investment is generally lower, while enterprise-grade platforms with advanced integrations, compliance layers, and multi-user dashboards require higher budgets. The advantage of investing in custom software development in India is access to experienced engineering teams, modern cloud architecture, and cost-efficient execution compared to Western markets.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors That Affect Custom Software Development Cost"
        intro="Every custom software project is unique. A basic internal workflow system will cost significantly less than a multi-user SaaS platform with advanced automation, third-party integrations, cloud deployment, and enterprise-grade security."
        facts={[
          'Feature complexity and workflows',
          'Number of user roles',
          'Third-party API integrations',
          'Cloud infrastructure requirements',
          'Security and compliance needs',
          'Ongoing maintenance and scalability',
        ]}
      />
      <ServiceComp
        heading="Custom Software vs Subscription Tools"
        desc="While SaaS tools may appear cheaper initially, businesses often outgrow them. Custom software eliminates recurring licensing costs, improves operational efficiency, and becomes a long-term digital asset."
      />

      <CtaButtonRe title="Get Detailed Cost Breakdown for Your Project" url="/contact" />
      {/* approach */}

      <ServiceApproachSection
        heading="Our Engineering Process"
        intro="We follow an architecture-first, performance-driven software development methodology designed for scalability, security, and long-term maintainability. Every project is engineered as a structured digital system - not just a collection of features."
        steps={engineeringSteps}
      />

      {/* serivce cost component used as mumbai & pune lead hunt para */}

      <ServiceCost
        heading="Custom Software Development for Mumbai & Pune Businesses"
        costdesc={[
          {
            para: 'Mumbai and Pune are among India’s fastest-growing technology and industrial ecosystems. From fintech startups in Mumbai to manufacturing and SaaS companies in Pune, businesses in these cities require scalable, secure, and performance-driven digital systems.',
          },
          {
            para: 'We provide architecture-first custom software development for organizations across Mumbai and Pune - building enterprise applications, SaaS platforms, CRM/ERP systems, and automation tools tailored to local business needs. Our solutions are designed for long-term scalability, regulatory compliance, and seamless integration with existing infrastructure.',
          },
          {
            para: "Whether you're modernizing internal operations or launching a new digital product, we engineer systems built for growth in competitive urban markets.",
          },
        ]}
      />
      {/* service fit */}

      <ServiceFitSection
        heading="When to Choose Custom Software Development"
        intro="Custom software development is the right investment when your business requires systems built specifically around your workflows, scalability goals, and operational complexity."
        subintro="You should consider custom software when:"
        points={[
          'Your business processes cannot be supported by off-the-shelf tools',
          'You require seamless integration between multiple systems',
          'Scalability and performance are critical to long-term growth',
          'Data security and compliance standards must be tightly controlled',
          'You want full ownership and flexibility over your digital infrastructure',
        ]}
        finalPara="If your business is evolving beyond generic solutions, a custom-engineered system ensures efficiency, control, and sustainable scalability."
      />

      {/* service FAQ */}
      <MainServiceFAQ faqs={faqs} heading="Custom Software Development - FAQs" />
      <MainServiceCTA
        heading="Ready to Build Scalable Software for Your Business in India?"
        description="Partner with Void Matrix Technology to design secure, scalable, and performance-driven custom software."
      />
    </>
  );
}
