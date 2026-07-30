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
  title: 'Product Engineering Company in Mumbai, Pune & India',
  description:
    'Product engineering services for startups and enterprises. We build MVPs, SaaS products, digital platforms, and scalable software across Mumbai, Pune, India, and global markets.',
  path: '/services/product-engineering',
});

const s_data = serviceData['/services/product-engineering'];

const contents = [
  {
    id: 'p1',
    para: 'Product engineering is the end-to-end process of transforming an idea into a successful digital product. Unlike traditional software development, product engineering focuses on the complete product lifecycle—from product discovery and architecture to development, launch, scaling, and continuous improvement. The objective is not simply to build software but to create products that solve real business problems, deliver measurable value, and remain competitive in the market.',
  },
  {
    id: 'p2',
    para: 'Modern digital products require more than clean code. They demand strategic planning, user-centric design, scalable architecture, security, cloud infrastructure, analytics, continuous delivery, and ongoing optimization. Whether you are launching a SaaS platform, customer portal, enterprise application, marketplace, or AI-powered product, every engineering decision directly influences long-term success.',
  },
  {
    id: 'p3',
    para: 'At Void Matrix Technology, we partner with startups, growing businesses, and enterprises to engineer modern digital products using Next.js, React, Node.js, PostgreSQL, cloud-native infrastructure, and API-first architectures. Every solution is designed for scalability, maintainability, security, and rapid product evolution.',
  },
  {
    id: 'p4',
    para: 'Whether you are validating an MVP, modernizing an existing product, expanding into international markets, or building an enterprise-grade platform from the ground up, our product engineering team helps transform ideas into reliable, scalable digital products that support long-term business growth.',
  },
  {
    id: 'p5',
    para: 'From Mumbai and Pune to Bangalore, Hyderabad, Delhi, businesses across India and global organizations trust modern product engineering to accelerate innovation, improve customer experiences, and build sustainable technology businesses.',
  },
];

const engineeringSteps = [
  {
    title: 'Product Discovery',
    description:
      'We validate the business idea, identify market opportunities, define user needs, and establish a clear product vision before development begins.',
    points: [
      'Business workshops',
      'Market research',
      'Feature prioritization',
      'Product roadmap',
    ],
  },
  {
    title: 'Architecture & Product Design',
    description:
      'Our architects design scalable product foundations capable of supporting future growth and continuous product evolution.',
    points: [
      'System architecture',
      'Database design',
      'API planning',
      'Security strategy',
    ],
  },
  {
    title: 'Agile Product Engineering',
    description:
      'The product is developed in iterative sprints with continuous stakeholder feedback and quality assurance.',
    points: [
      'Sprint planning',
      'Frontend development',
      'Backend development',
      'Continuous testing',
    ],
  },
  {
    title: 'Product Launch',
    description:
      'We deploy secure, production-ready applications with CI/CD pipelines, cloud infrastructure, and performance monitoring.',
    points: [
      'Cloud deployment',
      'Performance optimization',
      'Monitoring',
      'Go-live support',
    ],
  },
  {
    title: 'Scale & Optimize',
    description:
      'As user adoption grows, we optimize infrastructure, performance, and new feature delivery.',
    points: [
      'Scalability',
      'Feature expansion',
      'Infrastructure scaling',
      'Analytics',
    ],
  },
  {
    title: 'Continuous Product Engineering',
    description:
      'Digital products continuously evolve. We provide ongoing engineering, maintenance, modernization, and long-term product support.',
    points: [
      'Maintenance',
      'Security updates',
      'Performance improvements',
      'Continuous innovation',
    ],
  },
];

export default function ProductEngineeringPage() {
  return (
    <>
      <Hero
        eyebrow="Product Engineering Company in Mumbai, India"
        title={
          <>
            End-to-End <span className="text-(--primary)">Product Engineering</span>{' '}
            For Startups & Enterprises Across{' '}
            <span className="text-(--primary)">India</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Build products that users love and businesses can scale.
                </span>
                <br />
                We engineer SaaS platforms, digital products, enterprise
                applications, MVPs, and cloud-native software from idea to
                launch and beyond. VMT helps businesses across Mumbai, Pune,
                Bangalore, Hyderabad, Delhi, India, and global markets build
                secure, scalable, and future-ready digital products.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                MVPs from{' '}
                <span className="text-(--primary)">₹2.5L</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Product <span className="text-(--primary)">Strategy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Built for <span className="text-(--primary)">Scale</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Long-term <span className="text-(--primary)">Engineering</span>
              </span>
            </div>
          </>
        }
      />

      <WhaIsService
        heading="What is Product Engineering?"
        contents={contents}
      />
      <ServiceCoreSection
  heading="Our Product Engineering Services"
  intro="Building a successful digital product requires more than software development. Our product engineering services cover the complete product lifecycle—from validating an idea and designing scalable architecture to developing, launching, modernizing, and continuously improving digital products. We help startups, scale-ups, and enterprises build software products that deliver business value while remaining secure, scalable, and ready for future growth."
  items={[
    {
      item_link: '/services/mvp-development',
      title: 'Product Discovery & MVP',
      description:
        'Validate ideas, define product strategy, and launch market-ready MVPs.',
    },
    {
      item_link: 'engineering',
      title: 'Digital Product Engineering',
      description:
        'Develop secure, scalable software products using modern technologies.',
    },
    {
      item_link: 'modernization',
      title: 'Product Modernization',
      description:
        'Upgrade legacy products with modern architecture and cloud technologies.',
    },
  ]}
  details={[
    {
      item_link_id: 'discovery',
      heading: 'Product Discovery & Strategy',
      descriptions: [
        {
          para: 'Every successful digital product begins with a clear understanding of customer problems, business objectives, and market opportunities. Our product discovery process helps organizations validate ideas, prioritize features, define user journeys, and create a strategic roadmap before development begins.',
        },
        {
          para: 'Through stakeholder workshops, competitor analysis, feature prioritization, and technical planning, we reduce development risk while ensuring every engineering decision supports measurable business outcomes.',
        },
        {
          para: 'Whether you are building a SaaS platform, marketplace, customer portal, or enterprise application, product discovery establishes a strong foundation for scalable and successful product development.',
        },
      ],
    },

    {
      item_link_id: 'mvp',
      heading: 'MVP Development',
      descriptions: [
        {
          para: 'Launching a Minimum Viable Product (MVP) allows businesses to validate ideas quickly without investing in unnecessary features. We develop lean, production-ready MVPs that focus on solving core customer problems while gathering valuable market feedback.',
        },
        {
          para: 'Our MVP development services include product architecture, UI/UX implementation, backend engineering, API development, authentication, payment integrations, analytics, and cloud deployment. Every MVP is engineered with future scalability in mind so it can evolve into a full-featured product without requiring redevelopment.',
        },
        {
          para: 'This approach enables startups to reduce time-to-market, attract investors, validate business models, and begin generating revenue faster.',
        },
      ],
    },

    {
      item_link_id: 'engineering',
      heading: 'Digital Product Engineering',
      descriptions: [
        {
          para: 'Our engineering teams develop modern digital products using Next.js, React, Node.js, PostgreSQL, cloud-native infrastructure, and API-first architectures. Every solution is designed for performance, scalability, security, and long-term maintainability.',
        },
        {
          para: 'We build SaaS applications, enterprise platforms, customer portals, internal business systems, marketplaces, mobile backends, dashboards, and cloud-based software products that support growing user bases and complex business operations.',
        },
        {
          para: 'By following agile engineering practices, automated testing, CI/CD pipelines, and secure coding standards, we ensure every product is reliable, maintainable, and prepared for continuous innovation.',
        },
      ],
    },

    {
      item_link_id: 'modernization',
      heading: 'Product Modernization',
      descriptions: [
        {
          para: 'Many organizations rely on legacy software that limits performance, scalability, and user experience. We modernize existing digital products by upgrading outdated architectures, migrating legacy applications to cloud-native platforms, and improving overall system performance.',
        },
        {
          para: 'Our modernization services include frontend redesigns, backend reengineering, API modernization, database optimization, security improvements, infrastructure upgrades, and technology migration without disrupting existing business operations.',
        },
        {
          para: 'The result is a faster, more secure, and future-ready product that supports new business requirements and evolving customer expectations.',
        },
      ],
    },

    {
      item_link_id: 'scaling',
      heading: 'Product Scaling & Performance Optimization',
      descriptions: [
        {
          para: 'As user adoption grows, digital products require continuous optimization to maintain speed, reliability, and availability. We help businesses scale applications through performance tuning, infrastructure optimization, caching strategies, database improvements, and cloud scaling.',
        },
        {
          para: 'Whether your product serves hundreds or millions of users, we engineer resilient systems capable of handling increased traffic while maintaining exceptional performance and user experience.',
        },
        {
          para: 'Our performance engineering approach ensures products continue delivering reliable experiences as business growth accelerates.',
        },
      ],
    },

    {
      item_link_id: 'continuous',
      heading: 'Continuous Product Engineering & Support',
      descriptions: [
        {
          para: 'Successful digital products never stop evolving. Customer expectations change, markets shift, and technology continues advancing. Continuous product engineering ensures your software remains competitive through ongoing improvements and innovation.',
        },
        {
          para: 'We provide long-term engineering support including feature development, security updates, infrastructure maintenance, performance optimization, analytics, monitoring, bug fixes, and product enhancements that help organizations continuously improve their software.',
        },
        {
          para: 'Instead of treating launch as the finish line, we help businesses continuously refine, expand, and scale their products to support long-term growth and market leadership.',
        },
      ],
    },
  ]}
/>
      <ServiceCost
        heading="Product Engineering Services Cost in India"
        costdesc={[
          {
            para: 'The cost of product engineering depends on the product vision, development stage, feature complexity, integrations, security requirements, cloud infrastructure, and long-term scalability. An MVP designed to validate an idea requires a different level of engineering than an enterprise SaaS platform serving thousands of users across multiple regions.',
          },
          {
            para: 'Unlike traditional project-based software development, product engineering focuses on building a technology foundation that supports continuous growth. Every architectural decision is made with future scalability, maintainability, security, and product evolution in mind, allowing businesses to expand without rebuilding core systems.',
          },
          {
            para: 'At Void Matrix Technology, we engineer products that can grow from an initial MVP into enterprise-grade digital platforms. Our approach reduces technical debt, accelerates future development, and ensures your investment continues delivering value as your business evolves.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors That Affect Product Engineering Cost"
        intro="Every digital product is unique, and the final development cost depends on business goals, product complexity, technology requirements, and long-term scalability. Understanding these factors helps businesses plan product development more effectively."
        facts={[
          'Product discovery and research',
          'MVP or full-scale product scope',
          'UI/UX complexity',
          'Frontend and backend development',
          'API integrations',
          'Authentication and user roles',
          'Cloud infrastructure',
          'Security and compliance',
          'Performance optimization',
          'Third-party service integrations',
          'Analytics and reporting',
          'Continuous engineering and maintenance',
        ]}
      />

      <ServiceComp
        heading="Product Engineering vs Traditional Software Development"
        desc="Traditional software development focuses on delivering a predefined application, while product engineering manages the complete lifecycle of a digital product—from strategy and validation to architecture, development, launch, scaling, and continuous improvement. This long-term engineering approach enables businesses to build products that remain competitive, scalable, and adaptable as customer expectations and market demands evolve."
      />

      <CtaButtonRe
        title="Get a Product Engineering Estimate"
        url="/contact"
      />

      <ServiceApproachSection
        heading="Our Product Engineering Process"
        intro="Successful products are engineered through structured planning, agile execution, and continuous improvement. Our product engineering methodology reduces development risk while enabling startups and enterprises to launch faster, scale efficiently, and continuously innovate."
        steps={engineeringSteps}
      />
            <ServiceCost
        heading="Product Engineering Company for Mumbai, Pune, Bangalore, Hyderabad, India & Global Businesses"
        costdesc={[
          {
            para: 'Mumbai is home to financial institutions, logistics companies, media businesses, healthcare organizations, and rapidly growing startups that require secure, scalable digital products. Our product engineering services help Mumbai businesses build customer-facing applications, SaaS platforms, enterprise portals, and modern software products that support long-term business growth.',
          },
          {
            para: "Pune, Bangalore, and Hyderabad have become India's leading technology and innovation hubs. We partner with startups, SaaS companies, engineering firms, and enterprises to accelerate product development, modernize existing applications, and build cloud-native software capable of supporting millions of users while maintaining exceptional performance and reliability.",
          },
          {
            para: 'Beyond India, we provide offshore product engineering services to businesses across the United States, United Kingdom, UAE, Europe, Australia, and other global markets. Whether you require a dedicated engineering team, an MVP for a startup, or long-term product modernization, our engineers deliver scalable digital products that support international growth and evolving customer expectations.',
          },
        ]}
      />

      <ServiceFitSection
        heading="When Should You Invest in Product Engineering?"
        intro="Product engineering becomes the right investment when software is no longer just a business tool but a core part of your business strategy. Whether you are launching a new digital product, scaling an existing platform, or modernizing legacy software, a structured engineering approach helps reduce risk while accelerating innovation."
        subintro="Product engineering is ideal when:"
        points={[
          'You have a product idea that needs market validation through an MVP',
          'Your SaaS platform needs to scale for rapid user growth',
          'Your existing application is difficult to maintain or expand',
          'You want to modernize legacy software with cloud-native technologies',
          'Your product requires high performance, security, and scalability',
          'You need APIs, third-party integrations, or microservices architecture',
          'Your engineering team requires additional product development capacity',
          'Your organization is building a long-term digital product strategy',
          'You want to continuously improve your product after launch',
          'You are looking for a long-term engineering partner instead of a one-time development vendor',
        ]}
        finalPara="Product engineering is not simply about writing code—it is about continuously designing, building, improving, and scaling digital products that create lasting business value. With the right engineering strategy, your product can evolve alongside customer needs, market opportunities, and future business growth."
      />
            <MainServiceFAQ
        heading="Product Engineering FAQs"
        faqs={s_data.faqs}
      />

      <MainServiceCTA
        heading="Ready to Build Your Digital Product?"
        description="Let's engineer a product that's built to scale."
      />
    </>
  );
}