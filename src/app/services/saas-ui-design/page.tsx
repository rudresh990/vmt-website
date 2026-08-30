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
  title: 'SaaS UI Design Company in Mumbai & India | SaaS UX Design',

  description:
    'SaaS UI design company creating intuitive, scalable, and conversion-focused interfaces for SaaS products, dashboards, web applications, and B2B platforms.',

  path: '/services/saas-ui-design',
});

const s_data = serviceData['/services/saas-ui-design'];

const contents = [
  {
    id: 'saasui1',

    para: 'SaaS UI design is the process of designing user interfaces for software-as-a-service products, web applications, dashboards, and digital platforms. SaaS interfaces need to make complex functionality easy to understand while helping users complete tasks efficiently across different roles, workflows, and devices.',
  },

  {
    id: 'saasui2',

    para: 'Unlike a simple marketing website, a SaaS product interface may include dashboards, navigation systems, forms, tables, filters, analytics, account settings, notifications, onboarding flows, and other interactive components. Good SaaS UI design brings these elements together into a consistent and understandable product experience.',
  },

  {
    id: 'saasui3',

    para: 'At VoidMatrix, we provide SaaS UI design services for startups, SaaS companies, technology businesses, B2B platforms, enterprise applications, and digital product teams. We design interfaces that balance usability, visual hierarchy, product functionality, and business objectives.',
  },

  {
    id: 'saasui4',

    para: 'Our SaaS UI design approach considers the complete product experience rather than designing isolated screens. We work on navigation, information architecture, user flows, dashboards, forms, tables, responsive layouts, design systems, and reusable interface components.',
  },

  {
    id: 'saasui5',

    para: 'A scalable SaaS interface should also support product growth. As new features, user roles, workflows, and modules are introduced, a structured design system and consistent component approach make it easier to expand the product without creating an inconsistent user experience.',
  },

  {
    id: 'saasui6',

    para: 'We design SaaS interfaces for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Whether you are designing an MVP, redesigning an existing SaaS product, or building an enterprise platform, our UI design process is structured around your users, product requirements, and growth objectives.',
  },
];

export default function SaaSUIDesignPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="SaaS UI Design Company in Mumbai, India"
        title={
          <>
            Design Better
            <span className="text-(--primary)"> SaaS Products</span> With
            <span className="text-(--primary)"> Scalable UI</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Create intuitive SaaS interfaces that make complex products easier to use.
                </span>
                <br />
                VoidMatrix provides SaaS UI design services for dashboards, web applications,
                B2B platforms, SaaS products, and enterprise software across Mumbai, Pune,
                India, and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                SaaS <span className="text-(--primary)">UI Design</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                UX <span className="text-(--primary)">Design</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Product <span className="text-(--primary)">Design</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Design <span className="text-(--primary)">Systems</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS SAAS UI DESIGN?
      ===================================================== */}

      <WhaIsService heading="What Is SaaS UI Design?" contents={contents} />

      {/* =====================================================
          CORE SAAS UI DESIGN SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our SaaS UI Design Services"
        intro="We design intuitive and scalable interfaces for SaaS products, dashboards, web applications, and B2B platforms. Our SaaS UI design process focuses on usability, information hierarchy, product workflows, responsive interfaces, and consistent design systems."
        items={[
          {
            item_link: 'saas-dashboard-design',

            title: 'SaaS Dashboard Design',

            description:
              'Design intuitive dashboards that organize data, workflows, analytics, actions, and product functionality into clear user interfaces.',
          },

          {
            item_link: 'saas-product-ui-design',

            title: 'SaaS Product UI Design',

            description:
              'Create modern product interfaces for SaaS applications with clear navigation, layouts, forms, tables, workflows, and interactive components.',
          },

          {
            item_link: 'saas-ux-design',

            title: 'SaaS UX Design',

            description:
              'Plan user flows, information architecture, navigation, and interaction patterns to make SaaS products easier and more efficient to use.',
          },

          {
            item_link: 'saas-design-system',

            title: 'SaaS Design Systems',

            description:
              'Build reusable UI components, typography, spacing, interaction patterns, and visual standards for consistent product development.',
          },

          {
            item_link: 'saas-responsive-ui',

            title: 'Responsive SaaS UI Design',

            description:
              'Design SaaS interfaces that adapt effectively across desktop, tablet, and mobile screen sizes and usage environments.',
          },

          {
            item_link: 'saas-mvp-ui-design',

            title: 'SaaS MVP UI Design',

            description:
              'Design focused MVP interfaces that prioritize essential workflows, usability, product validation, and a strong initial user experience.',
          },
        ]}
        details={[
          {
            item_link_id: 'saas-dashboard-design',

            heading: 'SaaS Dashboard Design',

            descriptions: [
              {
                para: 'SaaS dashboards often contain large amounts of information, analytics, controls, and user actions. We design dashboard interfaces that organize this information using clear visual hierarchy, navigation, cards, tables, filters, charts, and actionable interface elements.',
              },

              {
                para: 'The dashboard structure is planned around the actual needs of users rather than simply filling the interface with visual components. Important information and frequently used actions are given appropriate prominence within the interface.',
              },

              {
                para: 'We can design dashboards for analytics platforms, CRM systems, project management software, fintech applications, HR platforms, operational systems, marketing tools, and other SaaS products.',
              },
            ],
          },

          {
            item_link_id: 'saas-product-ui-design',

            heading: 'SaaS Product UI Design',

            descriptions: [
              {
                para: 'SaaS product interfaces can include multiple modules, workflows, account areas, settings, forms, tables, notifications, reports, and other interactive elements. We create consistent interfaces that make these functions easier to understand and use.',
              },

              {
                para: 'Our design process considers navigation, component hierarchy, page relationships, interaction states, error handling, empty states, loading states, and other interface conditions required by modern SaaS products.',
              },

              {
                para: 'The objective is to create a product interface that feels consistent as users move between different sections of the application.',
              },
            ],
          },

          {
            item_link_id: 'saas-ux-design',

            heading: 'SaaS UX Design',

            descriptions: [
              {
                para: 'SaaS UX design focuses on how users move through the product and complete important tasks. We analyze user flows, information architecture, navigation, interaction patterns, and workflow complexity before translating them into interface designs.',
              },

              {
                para: 'Clear UX can reduce unnecessary steps and make important workflows easier to understand. This is particularly important for SaaS products where users may repeatedly perform complex tasks inside the application.',
              },

              {
                para: 'We design user experiences around different user roles, product objectives, workflows, and business requirements.',
              },
            ],
          },

          {
            item_link_id: 'saas-design-system',

            heading: 'SaaS Design Systems',

            descriptions: [
              {
                para: 'A SaaS product can contain hundreds of interface elements as it grows. A design system creates reusable rules and components that help maintain visual and functional consistency across the product.',
              },

              {
                para: 'We can define reusable buttons, forms, inputs, cards, tables, navigation elements, typography, spacing, colors, states, and interaction patterns according to the product requirements.',
              },

              {
                para: 'A structured design system also helps development teams implement new screens faster while reducing inconsistencies between different areas of the application.',
              },
            ],
          },

          {
            item_link_id: 'saas-responsive-ui',

            heading: 'Responsive SaaS UI Design',

            descriptions: [
              {
                para: 'SaaS applications increasingly need to work across different screen sizes and devices. We design responsive layouts that consider how navigation, dashboards, tables, forms, and other components adapt to smaller screens.',
              },

              {
                para: 'Responsive SaaS design is planned around usability rather than simply shrinking the desktop interface. Important information, controls, and workflows are reorganized where necessary for different screen sizes.',
              },

              {
                para: 'This helps create a more consistent product experience for users accessing the application from desktops, tablets, and mobile devices.',
              },
            ],
          },

          {
            item_link_id: 'saas-mvp-ui-design',

            heading: 'SaaS MVP UI Design',

            descriptions: [
              {
                para: 'SaaS startups often need to validate their product before investing in a large design system. We design MVP interfaces around the core features and workflows required to launch and test the product.',
              },

              {
                para: 'The focus is on essential screens, user flows, navigation, usability, and a consistent visual foundation without unnecessarily designing features that are not part of the initial product scope.',
              },

              {
                para: 'As the SaaS product evolves, the initial interface can be expanded into a broader design system and more comprehensive product experience.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="SaaS UI Design Cost in India"
        costdesc={[
          {
            para: 'The cost of SaaS UI design depends on the number of screens, product complexity, number of user roles, UX research requirements, interaction complexity, design system requirements, responsive requirements, and the depth of product design required.',
          },

          {
            para: 'A SaaS MVP with a limited number of workflows requires a different level of design effort than a large enterprise SaaS platform containing multiple modules, dashboards, user roles, analytics, settings, and complex workflows.',
          },

          {
            para: 'Our SaaS UI design scope is based on the actual product requirements, important user journeys, number of screens, and level of design system development required rather than applying the same fixed scope to every SaaS product.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect SaaS UI Design Cost"
        intro="Every SaaS product has different interface and user experience requirements. These factors influence the scope and investment required for product UI design."
        facts={[
          'Number of screens',

          'Product complexity',

          'Number of user roles',

          'UX research requirements',

          'Number of workflows',

          'Dashboard complexity',

          'Responsive design requirements',

          'Design system requirements',

          'Prototype requirements',

          'Interaction and state complexity',

          'Existing product redesign requirements',

          'Developer handoff requirements',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL SAAS UI DESIGN
      ===================================================== */}

      <ServiceComp
        heading="Basic UI Design vs Professional SaaS UI Design"
        desc="Basic UI design often focuses primarily on making individual screens visually attractive. Professional SaaS UI design takes a broader approach by considering user flows, information architecture, navigation, interaction patterns, responsive behavior, component consistency, design systems, different user roles, and the actual workflows users need to complete. The objective is to create a product interface that is visually consistent, easy to understand, scalable, and practical for real-world SaaS usage."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get SaaS UI Design Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our SaaS UI Design Process"
        intro="We follow a structured product design process to understand your SaaS product, map important workflows, design the interface, and create a scalable visual system for development."
        steps={[
          {
            title: 'Product & Requirement Analysis',

            description:
              'We understand your SaaS product, business objectives, users, features, existing interface, and important product workflows.',

            points: [
              'Product analysis',

              'Feature review',

              'User role analysis',

              'Business requirements',
            ],
          },

          {
            title: 'UX & User Flow Planning',

            description:
              'We map important user journeys and workflows to understand how users should navigate through the SaaS product.',

            points: [
              'User flows',

              'Information architecture',

              'Navigation planning',

              'Workflow analysis',
            ],
          },

          {
            title: 'Wireframing & Interface Structure',

            description:
              'We establish page layouts, information hierarchy, navigation structures, and component placement before final visual design.',

            points: [
              'Wireframes',

              'Page structure',

              'Content hierarchy',

              'Component planning',
            ],
          },

          {
            title: 'Visual UI Design',

            description:
              'We translate the approved structure into a consistent SaaS interface using typography, spacing, visual hierarchy, components, and interaction states.',

            points: [
              'UI design',

              'Visual hierarchy',

              'Component design',

              'Interaction states',
            ],
          },

          {
            title: 'Responsive & Design System Development',

            description:
              'We create responsive interface patterns and reusable design components that support consistent product development.',

            points: [
              'Responsive layouts',

              'Reusable components',

              'Design system',

              'UI consistency',
            ],
          },

          {
            title: 'Prototype & Developer Handoff',

            description:
              'We prepare the final designs and interaction specifications so developers can accurately implement the SaaS interface.',

            points: [
              'Interactive prototypes',

              'Design specifications',

              'Component references',

              'Developer handoff',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="SaaS UI Design Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For SaaS companies in Mumbai, we design product interfaces for startups, technology companies, B2B platforms, dashboards, and business applications. Our SaaS UI design approach focuses on usability, scalability, and practical product workflows.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, we provide SaaS product design services for startups, technology businesses, enterprise applications, and growing digital products.',
          },

          {
            para: 'For SaaS companies targeting customers across India, we design interfaces around the product requirements, user roles, workflows, and business objectives of the platform.',
          },

          {
            para: 'We also provide SaaS UI design services for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global regions. Product interfaces can be designed for international audiences, multiple user roles, and scalable SaaS platforms.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs SaaS UI Design Services?"
        intro="SaaS UI design is suitable for businesses building or improving software products where usability, product workflows, and interface consistency directly affect the user experience."
        subintro="Our SaaS UI design services are suitable for:"
        points={[
          'SaaS startups building an MVP',

          'B2B SaaS companies',

          'Enterprise software platforms',

          'Technology startups',

          'Dashboard and analytics products',

          'CRM and ERP platforms',

          'Fintech SaaS applications',

          'HR and business management software',

          'Existing SaaS products requiring redesign',

          'Companies building new digital products',
        ]}
        finalPara="Whether you are launching a new SaaS MVP or redesigning an established product, a structured UI and UX approach helps create a clearer product experience while providing a scalable foundation for future features and development."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="SaaS UI Design Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Build a Better SaaS Product Experience"
        description="Get your SaaS product reviewed for UI, UX, and interface design opportunities."
      />
    </>
  );
}