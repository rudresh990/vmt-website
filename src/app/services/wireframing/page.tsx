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


export const metadata: Metadata = buildMetadata({
  title: 'Wireframing Services in Mumbai & India | UX Wireframe Design Company',

  description:
    'Wireframing services for websites, mobile apps, SaaS products and digital platforms. VoidMatrix creates structured UX wireframes to plan layouts, navigation and user flows before UI design and development.',

  path: '/services/wireframing',
});


const s_data = serviceData['/services/wireframing'];


const contents = [
  {
    id: 'wireframe1',

    para: 'Wireframing is the process of creating a structural representation of a website, mobile application, SaaS product, or digital platform before the final user interface is designed. A wireframe establishes the layout, hierarchy, navigation, content structure, and placement of important interface elements.',
  },

  {
    id: 'wireframe2',

    para: 'Wireframes allow product teams, designers, developers, and business stakeholders to review the structure of a digital experience before investing time in detailed visual design and development. They help teams identify structural problems and make changes earlier in the product design process.',
  },

  {
    id: 'wireframe3',

    para: 'At VoidMatrix, we provide UX wireframing services for websites, mobile applications, SaaS products, eCommerce platforms, dashboards, enterprise applications, and digital products. Our wireframes are created around user journeys, business requirements, content hierarchy, and product functionality.',
  },

  {
    id: 'wireframe4',

    para: 'Our wireframing process focuses on the structure and usability of the experience rather than visual decoration. Depending on the project, wireframes can cover navigation, page hierarchy, forms, dashboards, product flows, checkout processes, onboarding, account areas, and other important screens.',
  },

  {
    id: 'wireframe5',

    para: 'Wireframing is particularly useful when launching a new digital product, redesigning an existing website or application, validating information architecture, simplifying complex user journeys, or aligning stakeholders before moving into high-fidelity UI design.',
  },

  {
    id: 'wireframe6',

    para: 'VoidMatrix provides wireframing services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Wireframe projects can be structured for startups, SaaS companies, eCommerce businesses, technology companies, enterprises, and other digital product teams.',
  },
];


export default function WireframingPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Wireframing Services in Mumbai, India"
        title={
          <>
            Plan Better Digital Experiences
            <span className="text-(--primary)"> Before You Design</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Turn product requirements and user journeys into clear, structured wireframes.
                </span>
                <br />
                VoidMatrix provides UX wireframing services for websites, mobile apps, SaaS
                products, eCommerce platforms, dashboards, and digital products across Mumbai,
                Pune, India, and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                UX <span className="text-(--primary)">Wireframing</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                User <span className="text-(--primary)">Flows</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Information <span className="text-(--primary)">Architecture</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Product <span className="text-(--primary)">Structure</span>
              </span>
            </div>
          </>
        }
      />


      {/* =====================================================
          WHAT IS WIREFRAMING?
      ===================================================== */}

      <WhaIsService
        heading="What Is Wireframing?"
        contents={contents}
      />


      {/* =====================================================
          CORE WIREFRAMING SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Wireframing Services"
        intro="We create structured UX wireframes that help teams define page layouts, user flows, navigation, content hierarchy, and product functionality before moving into detailed UI design and development."
        items={[
          {
            item_link: 'website-wireframing',

            title: 'Website Wireframing',

            description:
              'Plan website layouts, navigation, content hierarchy, page structures, and conversion journeys before visual design.',
          },

          {
            item_link: 'mobile-app-wireframing',

            title: 'Mobile App Wireframing',

            description:
              'Create structured wireframes for mobile applications covering screens, navigation, user flows, and important interactions.',
          },

          {
            item_link: 'saas-wireframing',

            title: 'SaaS Wireframing',

            description:
              'Plan dashboards, workflows, navigation, account areas, forms, and application screens for SaaS products.',
          },

          {
            item_link: 'ecommerce-wireframing',

            title: 'eCommerce Wireframing',

            description:
              'Structure product discovery, product pages, cart, checkout, account areas, and other important eCommerce journeys.',
          },

          {
            item_link: 'user-flow-wireframing',

            title: 'User Flow Wireframing',

            description:
              'Translate important user journeys into structured flows and screen sequences that define how users move through a product.',
          },

          {
            item_link: 'dashboard-wireframing',

            title: 'Dashboard Wireframing',

            description:
              'Plan information hierarchy, navigation, data presentation, filters, actions, and layouts for complex dashboards.',
          },

        ]}
        details={[
          {
            item_link_id: 'website-wireframing',

            heading: 'Website Wireframing',

            descriptions: [
              {
                para: 'Website wireframing establishes the structure of individual pages and the relationship between different sections of a website. We plan content hierarchy, navigation, calls to action, forms, sections, and important user journeys.',
              },

              {
                para: 'Wireframes allow stakeholders to review the structure of a website before visual design decisions such as colors, typography, imagery, and detailed UI components are introduced.',
              },

              {
                para: 'Website wireframes can be used for corporate websites, service websites, eCommerce websites, lead-generation websites, landing pages, and other digital experiences.',
              },
            ],
          },

          {
            item_link_id: 'mobile-app-wireframing',

            heading: 'Mobile App Wireframing',

            descriptions: [
              {
                para: 'Mobile app wireframing defines the structure of application screens and how users navigate between them. We map important screens, actions, navigation patterns, and user journeys before detailed mobile UI design.',
              },

              {
                para: 'The wireframes help product teams understand how content and functionality will be organized within smaller screen dimensions.',
              },

              {
                para: 'Mobile wireframes can cover onboarding, authentication, dashboards, profiles, search, forms, product discovery, transactions, settings, and other application workflows.',
              },
            ],
          },

          {
            item_link_id: 'saas-wireframing',

            heading: 'SaaS Wireframing',

            descriptions: [
              {
                para: 'SaaS products often contain multiple dashboards, workflows, user roles, modules, forms, tables, and account areas. Wireframing helps establish how these different elements should be structured before detailed UI design.',
              },

              {
                para: 'We create wireframes around important SaaS workflows such as onboarding, dashboards, project management, reporting, account management, billing, settings, and other product functionality.',
              },

              {
                para: 'The objective is to create a clear structural foundation that can later be translated into a scalable SaaS UI and design system.',
              },
            ],
          },

          {
            item_link_id: 'ecommerce-wireframing',

            heading: 'eCommerce Wireframing',

            descriptions: [
              {
                para: 'eCommerce wireframing helps structure the customer journey from product discovery through product evaluation, cart, checkout, payment, and account management.',
              },

              {
                para: 'We plan important layouts, navigation, filters, product information, calls to action, cart structures, checkout steps, and other elements that influence the shopping experience.',
              },

              {
                para: 'Wireframes help identify unnecessary steps and structural issues before the detailed eCommerce interface is designed.',
              },
            ],
          },

          {
            item_link_id: 'user-flow-wireframing',

            heading: 'User Flow Wireframing',

            descriptions: [
              {
                para: 'User flow wireframing connects user journeys with the screens and actions required to complete important tasks. It helps teams understand the sequence users follow through a digital product.',
              },

              {
                para: 'We map entry points, decisions, actions, screens, and completion states for important journeys such as registration, onboarding, purchasing, lead submission, booking, or account management.',
              },

              {
                para: 'Clear user flows provide designers and developers with a stronger foundation for creating usable digital experiences.',
              },
            ],
          },

          {
            item_link_id: 'dashboard-wireframing',

            heading: 'Dashboard Wireframing',

            descriptions: [
              {
                para: 'Dashboards can contain large amounts of information and functionality. Wireframing helps establish the hierarchy of data, navigation, actions, filters, cards, tables, and other dashboard elements.',
              },

              {
                para: 'We structure dashboard layouts around the tasks users need to perform and the information they need to access most frequently.',
              },

              {
                para: 'Dashboard wireframes can be used for SaaS products, analytics platforms, CRM systems, ERP applications, fintech platforms, enterprise software, and other data-driven products.',
              },
            ],
          },
        ]}
      />


      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Wireframing Cost in India"
        costdesc={[
          {
            para: 'The cost of wireframing depends on the number of screens, product complexity, number of user journeys, information architecture requirements, number of user roles, and level of detail required in the wireframes.',
          },

          {
            para: 'A small website with a limited number of pages requires a different wireframing scope from a SaaS application containing multiple dashboards, workflows, modules, and user roles.',
          },

          {
            para: 'Our wireframing scope is based on the actual product requirements and important user journeys so that the team can focus on the screens and flows that require structural planning.',
          },
        ]}
      />


      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Wireframing Cost"
        intro="Different products require different levels of structural planning. These factors influence the scope and investment required for UX wireframing."
        facts={[
          'Number of screens',

          'Number of pages',

          'Product complexity',

          'Number of user journeys',

          'Number of user roles',

          'Information architecture requirements',

          'Navigation complexity',

          'Dashboard complexity',

          'Workflow complexity',

          'Existing product redesign requirements',

          'Prototype requirements',

          'Level of wireframe detail',
        ]}
      />


      {/* =====================================================
          BASIC VS PROFESSIONAL WIREFRAMING
      ===================================================== */}

      <ServiceComp
        heading="Basic Layout Planning vs Professional UX Wireframing"
        desc="Basic layout planning generally focuses on placing elements on individual screens. Professional UX wireframing considers the complete product structure including information architecture, navigation, user journeys, content hierarchy, workflows, screen relationships, user roles, and important interactions. The objective is to create a clear structural foundation that designers and developers can use before moving into detailed UI design and development."
      />


      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Get Wireframing Estimate"
        url="/contact"
      />


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Wireframing Process"
        intro="We follow a structured wireframing process to understand your product, organize important information, map user journeys, and create a clear foundation for UI design and development."
        steps={[
          {
            title: 'Requirement & Product Analysis',

            description:
              'We understand the product, business objectives, users, features, existing experience, and important requirements.',

            points: [
              'Product analysis',

              'Feature review',

              'User requirements',

              'Business objectives',
            ],
          },

          {
            title: 'Information Architecture & User Flows',

            description:
              'We organize content and functionality while mapping how users should move through important journeys.',

            points: [
              'Information architecture',

              'User flows',

              'Navigation planning',

              'Workflow analysis',
            ],
          },

          {
            title: 'Low-Fidelity Wireframes',

            description:
              'We create initial structural wireframes focused on page hierarchy, layout, navigation, content placement, and functionality.',

            points: [
              'Page structure',

              'Screen layouts',

              'Content hierarchy',

              'Navigation',
            ],
          },

          {
            title: 'Flow & Usability Review',

            description:
              'We review the wireframes against important user journeys to identify structural problems, unnecessary steps, and usability concerns.',

            points: [
              'Flow review',

              'Usability review',

              'Journey validation',

              'Structural improvements',
            ],
          },

          {
            title: 'Wireframe Refinement',

            description:
              'We refine the wireframes based on product requirements, stakeholder feedback, usability findings, and agreed structural decisions.',

            points: [
              'Layout refinement',

              'Flow improvements',

              'Component planning',

              'Final structure',
            ],
          },

          {
            title: 'UI Design & Development Handoff',

            description:
              'The approved wireframes provide the structural foundation for detailed UI design and subsequent development.',

            points: [
              'Design foundation',

              'Screen references',

              'Flow documentation',

              'Developer reference',
            ],
          },
        ]}
      />


      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Wireframing Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we provide UX wireframing services for websites, mobile applications, SaaS products, eCommerce platforms, dashboards, and digital products.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, our wireframing process can be adapted for startups, technology companies, B2B products, enterprise applications, and consumer digital experiences.',
          },

          {
            para: 'For businesses targeting customers across India, wireframing can help structure user journeys, content, navigation, and product functionality before detailed UI design and development.',
          },

          {
            para: 'We also provide wireframing services for companies targeting international markets including the USA, UK, UAE, Europe, Australia, and other regions. The wireframe structure can be planned around the product requirements, target users, and business objectives of the market.',
          },
        ]}
      />


      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Wireframing Services?"
        intro="Wireframing is useful for businesses that want to define the structure and user experience of a digital product before investing in detailed visual design and development."
        subintro="Our wireframing services are suitable for:"
        points={[
          'Website redesign projects',

          'New website development',

          'Mobile app startups',

          'SaaS product teams',

          'eCommerce businesses',

          'Enterprise software companies',

          'Technology startups',

          'Digital product teams',

          'Businesses developing MVPs',

          'Companies redesigning existing applications',
        ]}
        finalPara="Whether you are starting a new digital product or redesigning an existing experience, wireframing can help align stakeholders, validate user journeys, identify structural issues, and create a clearer foundation for UI design and development."
      />


      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Wireframing Services FAQs"
        faqs={s_data.faqs}
      />


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Plan Your Digital Product Before You Build It"
        description="Turn your ideas, requirements, and user journeys into a clear UX structure ready for UI design and development."
      />
    </>
  );
}