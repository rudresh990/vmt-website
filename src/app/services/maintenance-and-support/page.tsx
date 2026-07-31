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
  title: 'Software Maintenance & Support Company in Mumbai & India',
  description:
    'Keep your software secure, updated, and high-performing with maintenance and support services for web apps, SaaS, and enterprise software across India.',
  path: '/services/maintenance-support',
});

const s_data = serviceData['/services/maintenance-and-support'];

const contents = [
  {
    id: 'm1',
    para: 'Software maintenance is the continuous process of keeping applications secure, stable, optimized, and aligned with changing business requirements after deployment. Launching software is only the beginning—every digital product requires ongoing updates, monitoring, bug fixes, security improvements, infrastructure management, and feature enhancements to remain reliable and competitive.',
  },
  {
    id: 'm2',
    para: 'As businesses grow, software must evolve alongside new customer expectations, operating systems, browsers, cloud platforms, third-party integrations, and security standards. Without proactive maintenance, applications become vulnerable to downtime, cyber threats, performance degradation, and increasing technical debt.',
  },
  {
    id: 'm3',
    para: 'At Void Matrix Technology, we provide comprehensive maintenance and support services for SaaS platforms, web applications, enterprise software, CRM systems, ERP solutions, and custom business applications. Our engineering teams continuously monitor, optimize, secure, and improve software so businesses can focus on growth while we ensure technology remains reliable.',
  },
  {
    id: 'm4',
    para: 'Whether you need monthly application maintenance, dedicated engineering support, software AMC, cloud monitoring, or long-term product enhancement, we provide scalable support plans that keep your software operating at peak performance.',
  },
  {
    id: 'm5',
    para: 'Businesses across Mumbai, Pune, Bangalore, Hyderabad, Delhi, India, and global markets rely on professional software maintenance to maximize uptime, improve security, reduce operational risks, and extend the lifecycle of mission-critical applications.',
  },
];

const engineeringSteps = [
  {
    title: 'Application Assessment',
    description:
      'We review your software architecture, infrastructure, code quality, performance, and security posture to identify immediate issues and long-term improvement opportunities.',
    points: [
      'Code audit',
      'Performance review',
      'Infrastructure analysis',
      'Security assessment',
    ],
  },
  {
    title: 'Maintenance Planning',
    description:
      'A maintenance roadmap is prepared based on business priorities, technical debt, compliance requirements, and future product goals.',
    points: [
      'Maintenance strategy',
      'Risk assessment',
      'Support planning',
      'Priority mapping',
    ],
  },
  {
    title: 'Continuous Monitoring',
    description:
      'Applications are continuously monitored to detect issues before they impact business operations or end users.',
    points: [
      '24×7 monitoring',
      'Error tracking',
      'Performance monitoring',
      'Availability checks',
    ],
  },
  {
    title: 'Updates & Optimization',
    description:
      'Our engineers regularly deploy security patches, framework upgrades, performance improvements, and bug fixes to maintain software reliability.',
    points: [
      'Bug fixes',
      'Framework updates',
      'Security patches',
      'Performance tuning',
    ],
  },
  {
    title: 'Enhancements',
    description:
      'As business needs evolve, we implement new features, integrations, workflow improvements, and user experience enhancements.',
    points: [
      'Feature additions',
      'API integrations',
      'Workflow improvements',
      'UI enhancements',
    ],
  },
  {
    title: 'Long-Term Support',
    description:
      'Our engineering team provides ongoing technical support, preventive maintenance, scalability planning, and continuous software improvements.',
    points: [
      'Dedicated support',
      'Cloud management',
      'Preventive maintenance',
      'Continuous engineering',
    ],
  },
];

export default function MaintenanceSupportPage() {
  return (
    <>
      <Hero
        eyebrow="Software Maintenance & Support Company in Mumbai, India"
        title={
          <>
            Reliable{' '}
            <span className="text-(--primary)">
              Maintenance & Support
            </span>{' '}
            For Business Software Across{' '}
            <span className="text-(--primary)">India</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Keep your software secure, optimized, and always available.
                </span>
                <br />
                We provide proactive software maintenance, bug fixing,
                performance optimization, security updates, cloud monitoring,
                and dedicated engineering support for SaaS platforms, web
                applications, enterprise software, and custom business
                solutions across India and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Plans from{' '}
                <span className="text-(--primary)">
                  ₹25K/month
                </span>
              </span>

              <span className="text-glow">|</span>

              <span>
                24×7{' '}
                <span className="text-(--primary)">
                  Monitoring
                </span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Security{' '}
                <span className="text-(--primary)">
                  Updates
                </span>
              </span>

              <span className="text-glow">|</span>

              <span>
                SLA{' '}
                <span className="text-(--primary)">
                  Support
                </span>
              </span>
            </div>
          </>
        }
      />

      <WhaIsService
        heading="What is Software Maintenance & Support?"
        contents={contents}
      />
      <ServiceCoreSection
  heading="Our Software Maintenance & Support Services"
  intro="Reliable software requires continuous attention long after deployment. Our maintenance and support services ensure your applications remain secure, high-performing, compatible with evolving technologies, and aligned with changing business needs. From routine updates to long-term engineering support, we help organizations maximize the value and lifespan of their software investments."
  items={[
    {
      item_link: 'corrective',
      title: 'Corrective Maintenance',
      description:
        'Resolve bugs, application errors, crashes, and production issues quickly.',
    },
    {
      item_link: 'preventive',
      title: 'Preventive Maintenance',
      description:
        'Reduce future risks through proactive updates, monitoring, and optimization.',
    },
    {
      item_link: 'support',
      title: 'Dedicated Support',
      description:
        'Ongoing engineering support with SLA-driven maintenance and enhancements.',
    },
  ]}
  details={[
    {
      item_link_id: 'corrective',
      heading: 'Corrective Maintenance',
      descriptions: [
        {
          para: 'Corrective maintenance focuses on identifying and resolving issues that affect the stability and functionality of your software. Whether users encounter bugs, application crashes, integration failures, or unexpected system behavior, our engineers investigate the root cause and implement permanent fixes that restore reliability.',
        },
        {
          para: 'Our team uses structured debugging, issue tracking, regression testing, and quality assurance processes to ensure every fix is thoroughly validated before deployment. This minimizes downtime while maintaining a consistent user experience across web applications, SaaS platforms, and enterprise software.',
        },
        {
          para: 'Fast corrective maintenance helps businesses reduce operational disruptions, improve customer satisfaction, and maintain confidence in mission-critical applications.',
        },
      ],
    },

    {
      item_link_id: 'preventive',
      heading: 'Preventive Maintenance',
      descriptions: [
        {
          para: 'Preventive maintenance is designed to reduce future failures before they occur. Instead of waiting for problems to impact business operations, we proactively improve software quality through framework upgrades, dependency management, infrastructure reviews, security updates, and code optimization.',
        },
        {
          para: 'Regular preventive maintenance reduces technical debt, improves long-term application stability, strengthens security, and keeps software compatible with modern browsers, operating systems, cloud services, and third-party integrations.',
        },
        {
          para: 'This proactive approach lowers maintenance costs over time while improving software reliability and business continuity.',
        },
      ],
    },

    {
      item_link_id: 'adaptive',
      heading: 'Adaptive Maintenance',
      descriptions: [
        {
          para: 'Technology continuously evolves, and software must adapt accordingly. Adaptive maintenance ensures your applications remain compatible with changing business environments, cloud platforms, operating systems, browsers, APIs, payment gateways, and regulatory requirements.',
        },
        {
          para: 'Our engineers implement compatibility updates, migrate legacy components, modernize integrations, and adjust software architecture whenever external technologies or business requirements change.',
        },
        {
          para: 'This allows organizations to continue operating efficiently without expensive software replacements or unexpected compatibility issues.',
        },
      ],
    },

    {
      item_link_id: 'perfective',
      heading: 'Perfective Maintenance',
      descriptions: [
        {
          para: 'Perfective maintenance focuses on continuously improving your software beyond simple bug fixes. As customer expectations evolve, applications require better performance, new features, workflow improvements, enhanced reporting, and a modern user experience.',
        },
        {
          para: 'We help businesses optimize application speed, improve usability, introduce new business functionality, streamline workflows, and enhance overall customer satisfaction while preserving the stability of existing systems.',
        },
        {
          para: 'Continuous product improvements allow software to remain competitive while supporting future business growth.',
        },
      ],
    },

    {
      item_link_id: 'security',
      heading: 'Security Updates & Performance Optimization',
      descriptions: [
        {
          para: 'Cybersecurity threats evolve constantly, making ongoing security maintenance essential. Our engineers regularly deploy security patches, monitor vulnerabilities, strengthen authentication systems, optimize databases, improve server performance, and enhance application scalability.',
        },
        {
          para: 'Performance optimization includes caching strategies, database tuning, API optimization, infrastructure improvements, cloud resource management, and application monitoring to ensure software remains fast and reliable under increasing workloads.',
        },
        {
          para: 'These improvements protect business data while delivering a better experience for users and administrators alike.',
        },
      ],
    },

    {
      item_link_id: 'support',
      heading: 'Dedicated Maintenance & AMC Support',
      descriptions: [
        {
          para: 'Many businesses require long-term engineering support rather than one-time maintenance. Our dedicated support services provide ongoing software monitoring, issue resolution, feature enhancements, infrastructure management, cloud administration, and technical consulting under flexible maintenance agreements.',
        },
        {
          para: 'Whether you need monthly software maintenance, annual maintenance contracts (AMC), or a dedicated engineering team, we provide scalable support plans tailored to your operational requirements and business objectives.',
        },
        {
          para: 'With proactive maintenance and continuous engineering, businesses can focus on growth while we ensure their technology remains secure, stable, and ready for future expansion.',
        },
      ],
    },
  ]}
/>
      <ServiceCost
        heading="Software Maintenance & Support Cost in India"
        costdesc={[
          {
            para: 'The cost of software maintenance depends on the size of your application, technology stack, infrastructure, security requirements, support coverage, and the frequency of updates. A simple website requires significantly less maintenance than a mission-critical SaaS platform or enterprise application with thousands of active users.',
          },
          {
            para: 'Maintenance is not limited to fixing bugs. It includes security patching, framework upgrades, cloud monitoring, performance optimization, database maintenance, backup management, API compatibility updates, and ongoing feature enhancements that keep software reliable and future-ready.',
          },
          {
            para: 'At Void Matrix Technology, we offer flexible maintenance plans ranging from monthly support packages to dedicated engineering teams and Annual Maintenance Contracts (AMC). Every engagement is tailored to your business objectives, software complexity, and required response times.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors That Affect Software Maintenance Cost"
        intro="Every application has different maintenance requirements. The overall investment depends on technical complexity, business-critical functionality, infrastructure, and the level of support your organization requires."
        facts={[
          'Application size and complexity',
          'Technology stack',
          'Cloud infrastructure',
          'Number of active users',
          'Security and compliance requirements',
          'Framework and dependency updates',
          'Database maintenance',
          'Third-party API integrations',
          'Monitoring and alerting',
          'Performance optimization',
          'Feature enhancements',
          'SLA response time and support coverage',
        ]}
      />

      <ServiceComp
        heading="Proactive Maintenance vs Reactive Bug Fixing"
        desc="Many businesses only seek technical support after software fails. Reactive bug fixing solves immediate problems but often increases long-term costs and operational risks. Proactive software maintenance focuses on continuous monitoring, security updates, performance optimization, preventive improvements, and regular enhancements that reduce downtime, improve reliability, and extend the life of your software investment."
      />

      <CtaButtonRe
        title="Request a Maintenance Plan"
        url="/contact"
      />

      <ServiceApproachSection
        heading="Our Software Maintenance Process"
        intro="Our structured maintenance process ensures your applications remain secure, stable, and continuously optimized. Rather than waiting for issues to occur, we proactively monitor, maintain, and improve your software throughout its lifecycle."
        steps={engineeringSteps}
      />
            <ServiceCost
        heading="Software Maintenance & Support Company for Mumbai, Pune, Bangalore, Hyderabad, India & Global Businesses"
        costdesc={[
          {
            para: 'Businesses in Mumbai depend on reliable software to manage operations, customers, finance, healthcare, logistics, manufacturing, and digital services. Our maintenance and support solutions help organizations maximize uptime, improve security, optimize application performance, and reduce unexpected system failures through proactive engineering and continuous monitoring.',
          },
          {
            para: "Across Pune, Bangalore, Hyderabad, and other technology hubs, startups and enterprises rely on our engineering team to maintain SaaS platforms, enterprise applications, CRM systems, ERP software, internal business portals, and cloud-native applications. We ensure software evolves alongside changing business requirements while remaining secure, scalable, and highly available.",
          },
          {
            para: 'Beyond India, we provide offshore software maintenance and dedicated engineering support for businesses across the United States, United Kingdom, UAE, Europe, Australia, and other international markets. Whether you require monthly maintenance, annual support contracts, or a long-term engineering partner, our team helps keep mission-critical software operating at peak performance.',
          },
        ]}
      />

      <ServiceFitSection
        heading="When Should You Invest in Software Maintenance & Support?"
        intro="Every business application requires ongoing maintenance after launch. Investing in proactive support helps prevent downtime, improve security, extend software lifespan, and ensure your applications continue meeting business objectives as technology and customer expectations evolve."
        subintro="Software maintenance is the right choice when:"
        points={[
          'Your application requires regular bug fixes and security updates',
          'You want to reduce downtime and improve system reliability',
          'Your software depends on cloud infrastructure or third-party APIs',
          'Your business needs ongoing feature enhancements',
          'Your framework or technology stack requires version upgrades',
          'You need continuous performance monitoring and optimization',
          'Your application handles sensitive customer or business data',
          'You want predictable support through an Annual Maintenance Contract (AMC)',
          'Your internal development team requires additional engineering support',
          'You need a long-term technology partner to continuously improve your software',
        ]}
        finalPara="Software maintenance is not simply about fixing issues when they occur. It is an ongoing engineering process that protects your technology investment, improves operational efficiency, strengthens security, and enables your software to grow alongside your business."
      />
            <MainServiceFAQ
        heading="Software Maintenance & Support FAQs"
        faqs={s_data.faqs}
      />

      <MainServiceCTA
        heading="Keep Your Software Running at Its Best"
        description="Let's build a maintenance plan that fits your business."
      />
    </>
  );
}