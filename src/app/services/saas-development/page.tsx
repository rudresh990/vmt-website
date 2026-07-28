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
  title: 'SaaS Development Company in Mumbai, Pune & India',
  description:
    'VMT builds scalable SaaS products with Next.js for startups and enterprises. From MVP development to enterprise SaaS platforms with secure, cloud-native architecture.',
  path: '/services/saas-development',
});

const s_data = serviceData['/services/saas-development'];

const contents = [
  {
    id: 'p1',
    para: 'SaaS (Software as a Service) development is the process of designing, building, and maintaining cloud-based software applications that customers access through a web browser or mobile application. Unlike traditional software that requires installation on individual devices, SaaS products are centrally hosted, continuously updated, and delivered through subscription-based business models.',
  },
  {
    id: 'p2',
    para: 'Modern SaaS platforms require much more than an attractive user interface. A successful product depends on scalable architecture, multi-tenant data management, secure authentication, subscription billing, API integrations, role-based permissions, and infrastructure capable of supporting thousands of concurrent users without compromising performance.',
  },
  {
    id: 'p3',
    para: 'Whether you are building an MVP to validate a startup idea or launching an enterprise SaaS platform serving global customers, architectural decisions made during the early stages directly influence future scalability, security, maintenance costs, and product evolution. Building the right foundation from day one eliminates expensive rewrites as your business grows.',
  },
  {
    id: 'p4',
    para: 'Our SaaS development services focus on engineering cloud-native applications using modern technologies such as Next.js, React, Node.js, PostgreSQL, and scalable cloud infrastructure. Every platform is designed for high availability, rapid feature development, strong security, and long-term maintainability.',
  },
  {
    id: 'p5',
    para: 'At Void Matrix Technology, we build SaaS products that become long-term business assets—helping founders launch faster, scale confidently, and continuously improve their platforms without technology becoming a bottleneck.',
  },
];

const engineeringSteps = [
  {
    title: 'Product Discovery & SaaS Strategy',
    description:
      'Every successful SaaS platform begins with understanding your business model, users, and long-term growth objectives.',
    points: [
      'Business requirement analysis',
      'User journey mapping',
      'Feature prioritization',
      'Technical feasibility planning',
    ],
  },
  {
    title: 'Architecture & Database Design',
    description:
      'We engineer scalable multi-tenant architectures capable of supporting future product growth.',
    points: [
      'Multi-tenant architecture',
      'Database modelling',
      'API planning',
      'Infrastructure design',
    ],
  },
  {
    title: 'Agile SaaS Development',
    description:
      'Development is executed through structured sprint cycles with continuous collaboration.',
    points: [
      'Sprint-based delivery',
      'Version controlled development',
      'Modern coding standards',
      'Weekly progress reviews',
    ],
  },
  {
    title: 'Testing & Security Validation',
    description:
      'Every release undergoes rigorous quality assurance before deployment.',
    points: [
      'Functional testing',
      'Security testing',
      'Performance optimization',
      'Integration testing',
    ],
  },
  {
    title: 'Cloud Deployment & DevOps',
    description:
      'Reliable deployment pipelines ensure secure and repeatable releases.',
    points: [
      'CI/CD automation',
      'Cloud deployment',
      'Infrastructure monitoring',
      'Backup & disaster recovery',
    ],
  },
  {
    title: 'Continuous Product Growth',
    description:
      'After launch we help your SaaS platform evolve alongside your customers.',
    points: [
      'Feature expansion',
      'Performance improvements',
      'Infrastructure scaling',
      'Long-term technical support',
    ],
  },
];

export default function SaaSDevelopment() {
  return (
    <>
      <Hero
        eyebrow="SaaS Development Company in Mumbai, India"
        title={
          <>
            Build Scalable <span className="text-(--primary)">SaaS Products</span> For
            Startups & Enterprises Across{' '}
            <span className="text-(--primary)">Mumbai</span>,{' '}
            <span className="text-(--primary)">India</span> & Global Markets
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Turn your software idea into a scalable SaaS business.
                </span>
                <br />
                We design and develop cloud-native SaaS platforms with secure
                multi-tenant architecture, subscription billing, admin dashboards,
                APIs, and enterprise-grade infrastructure. VMT builds SaaS
                applications using Next.js, React, Node.js, PostgreSQL, and modern
                cloud technologies for businesses across Mumbai, Pune, India, and
                international markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                MVPs from <span className="text-(--primary)">₹2.5L</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                <span className="text-(--primary)">Multi-Tenant</span> Ready
              </span>

              <span className="text-glow">|</span>

              <span>
                Cloud <span className="text-(--primary)">Native</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Built for <span className="text-(--primary)">Scale</span>
              </span>
            </div>
          </>
        }
      />

      <WhaIsService
        heading="What is SaaS Development?"
        contents={contents}
      />
      <ServiceCoreSection
        heading="Our SaaS Development Services"
        intro="We build modern SaaS platforms that are engineered for scalability, recurring revenue, and long-term product growth. Whether you're validating a startup idea or expanding an enterprise platform, our architecture-first approach ensures your product is ready for the future."
        items={[
          {
            item_link: '/services/mvp-development',
            title: 'MVP Development',
            description:
              'Launch your SaaS idea quickly with a production-ready MVP built for future scalability.',
          },
          {
            item_link: 'multitenant',
            title: 'Multi-Tenant SaaS',
            description:
              'Scalable SaaS architecture supporting thousands of organizations securely.',
          },
          {
            item_link: 'enterprise',
            title: 'Enterprise SaaS',
            description:
              'Cloud-native enterprise SaaS platforms with advanced workflows and integrations.',
          },
        ]}
        details={[
          {
            item_link_id: 'mvp',
            heading: 'MVP Development for SaaS Startups',
            descriptions: [
              {
                para: 'Launching quickly is important, but launching with the right architecture is even more critical. We develop SaaS MVPs that help founders validate their products with real users while avoiding technical decisions that lead to expensive rebuilds later.',
              },
              {
                para: 'Our MVP development process focuses on identifying the smallest set of high-impact features that solve your customers’ core problems. Every feature is prioritized to reduce development time while creating a solid technical foundation for future releases.',
              },
              {
                para: 'By combining rapid development with scalable architecture, we help startups launch faster, gather user feedback earlier, and confidently evolve into full-scale SaaS businesses without rewriting the application from scratch.',
              },
            ],
          },

          {
            item_link_id: 'multitenant',
            heading: 'Multi-Tenant SaaS Architecture Development',
            descriptions: [
              {
                para: 'Multi-tenant architecture is the backbone of successful SaaS products. Instead of maintaining separate applications for every customer, multiple organizations securely share the same infrastructure while keeping their data completely isolated.',
              },
              {
                para: 'We design scalable tenant architectures using modern database strategies, role-based access control, secure authentication, and efficient resource allocation to support growing customer bases without sacrificing performance.',
              },
              {
                para: 'Whether your SaaS platform serves hundreds or millions of users, our architecture ensures reliable performance, simplified maintenance, lower infrastructure costs, and seamless scalability as your business grows.',
              },
            ],
          },

          {
            item_link_id: 'enterprise',
            heading: 'Enterprise SaaS Platform Development',
            descriptions: [
              {
                para: 'Enterprise SaaS applications require far more than standard web development. They must support complex business workflows, high availability, advanced security, audit trails, and integrations across multiple business systems.',
              },
              {
                para: 'We build enterprise-grade SaaS products featuring workflow automation, real-time dashboards, reporting systems, API ecosystems, secure authentication, and cloud-native deployment strategies that support long-term business growth.',
              },
              {
                para: 'Whether you are building B2B software, FinTech platforms, healthcare systems, logistics software, or internal operational platforms, we engineer reliable SaaS solutions that deliver exceptional performance while remaining easy to maintain and expand.',
              },
            ],
          },

          {
            item_link_id: 'billing',
            heading: 'Subscription Billing & Payment Integration',
            descriptions: [
              {
                para: 'Recurring billing is one of the most important components of every SaaS business. We integrate secure payment systems that support subscription management, automated renewals, usage-based pricing, coupon management, invoicing, and payment recovery workflows.',
              },
              {
                para: 'Our engineers integrate platforms like Stripe, Razorpay, Paddle, and custom payment gateways depending on your target market and compliance requirements.',
              },
              {
                para: 'With automated billing infrastructure in place, your business can focus on acquiring customers while the platform manages subscriptions reliably and securely.',
              },
            ],
          },

          {
            item_link_id: 'dashboard',
            heading: 'SaaS Dashboard & Admin Panel Development',
            descriptions: [
              {
                para: 'An intuitive dashboard determines how efficiently users interact with your software. We build fast, responsive dashboards that simplify complex workflows through clean interfaces and real-time data visualization.',
              },
              {
                para: 'Our dashboard development includes analytics, reporting, user management, permissions, notifications, activity logs, and operational monitoring tools tailored specifically to your business processes.',
              },
              {
                para: 'Every dashboard is optimized for performance, usability, and scalability to ensure your customers enjoy a seamless product experience as your platform evolves.',
              },
            ],
          },

          {
            item_link_id: 'integration',
            heading: 'API Development & Third-Party Integrations',
            descriptions: [
              {
                para: 'Modern SaaS platforms rarely operate in isolation. Businesses rely on APIs to connect CRM systems, payment gateways, communication platforms, analytics tools, ERP software, AI services, and countless third-party applications.',
              },
              {
                para: 'We design secure REST APIs and modern integration layers that enable seamless communication between your SaaS product and external services while maintaining high performance and strong security.',
              },
              {
                para: 'A well-designed API ecosystem makes your SaaS platform more valuable, easier to integrate, and better positioned for long-term ecosystem growth.',
              },
            ],
          },
        ]}
      />
      <ServiceCost
        heading="SaaS Development Cost in India"
        costdesc={[
          {
            para: 'The cost of SaaS development in India typically ranges from ₹5,00,000 for a lean MVP to ₹50,00,000+ for enterprise-grade platforms. The final investment depends on product complexity, user roles, integrations, security requirements, cloud infrastructure, and long-term scalability objectives.',
          },
          {
            para: 'Unlike traditional software projects, SaaS platforms require continuous engineering around subscription management, tenant isolation, cloud infrastructure, API ecosystems, and performance optimization. Investing in a scalable architecture early significantly reduces future redevelopment costs while enabling rapid product evolution.',
          },
          {
            para: 'At Void Matrix Technology, we focus on delivering architecture-first SaaS products that balance launch speed with long-term maintainability, ensuring your platform remains reliable as your customer base grows.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors That Affect SaaS Development Cost"
        intro="Every SaaS platform has unique technical and business requirements. A simple MVP with a handful of features requires significantly less investment than a multi-tenant enterprise platform supporting thousands of users across multiple organizations."
        facts={[
          'Product complexity and feature scope',
          'Multi-tenant architecture requirements',
          'Number of user roles and permissions',
          'Subscription billing and payment integrations',
          'Third-party API integrations',
          'Authentication and security requirements',
          'Cloud infrastructure and DevOps setup',
          'Analytics, reporting, and dashboards',
          'Compliance requirements (GDPR, HIPAA, etc.)',
          'Long-term scalability and maintenance',
        ]}
      />

      <ServiceComp
        heading="Custom SaaS Platform vs Off-the-Shelf Software"
        desc="While subscription software can help businesses get started quickly, it often limits customization, scalability, integrations, and ownership. A custom SaaS platform provides complete control over your product roadmap, pricing model, user experience, infrastructure, and business growth. Instead of adapting your business to existing software, your software evolves alongside your business."
      />

      <CtaButtonRe
        title="Get a Detailed SaaS Development Estimate"
        url="/contact"
      />
      <ServiceApproachSection
        heading="Our SaaS Development Process"
        intro="Successful SaaS products are built on strong engineering foundations—not rushed feature development. We follow an architecture-first development methodology that minimizes technical debt, accelerates future feature releases, and ensures your platform can scale from its first customer to thousands of active organizations."
        steps={engineeringSteps}
      />

      <ServiceCost
        heading="SaaS Development Company for Mumbai, Pune & Businesses Across India"
        costdesc={[
          {
            para: "Mumbai and Pune have become two of India's strongest startup and SaaS ecosystems. From funded startups building B2B platforms to established businesses launching subscription-based products, companies need software engineered for rapid growth, reliability, and continuous innovation.",
          },
          {
            para: 'As a SaaS development company serving Mumbai, Pune, and businesses across India, we build cloud-native applications using scalable architectures, secure authentication systems, subscription billing, and API-first engineering. Our remote-first development process allows founders to collaborate closely throughout the product lifecycle while maintaining complete transparency.',
          },
          {
            para: 'Whether you are validating a new SaaS idea, replacing legacy software, or scaling an existing platform, we help transform ambitious product ideas into secure, maintainable, and revenue-generating cloud applications.',
          },
        ]}
      />

      <ServiceFitSection
        heading="When Should You Invest in Custom SaaS Development?"
        intro="Custom SaaS development is the right choice when your business requires a product that can continuously evolve, scale efficiently, and create recurring revenue without being limited by third-party software."
        subintro="A custom SaaS platform is ideal when:"
        points={[
          'You want to launch a subscription-based software business',
          'Your startup requires an MVP that can scale without major rewrites',
          'Existing SaaS products cannot support your business model',
          'You need multi-tenant architecture for multiple customers',
          'Recurring billing and subscription management are core requirements',
          'Your application requires complex workflows and user permissions',
          'You need deep API integrations with third-party platforms',
          'Security, scalability, and long-term ownership are business priorities',
        ]}
        finalPara="Building a SaaS product is more than developing software—it is creating a long-term digital asset capable of generating recurring revenue, serving thousands of customers, and continuously evolving alongside your business."
      />
      <MainServiceFAQ
        faqs={s_data.faqs}
        heading="SaaS Development Services - Frequently Asked Questions"
      />

      <MainServiceCTA
        heading="Ready to Build a Scalable SaaS Product?"
        description="Whether you're validating a startup idea, launching an MVP, or scaling an enterprise SaaS platform, we build secure, cloud-native software engineered for long-term growth. Let's turn your product vision into a scalable business."
      />
    </>
  );
}