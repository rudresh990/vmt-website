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
  title: 'Mobile UI Design Company in Mumbai & India | Mobile App UI UX Design',

  description:
    'Mobile UI design company in Mumbai and India creating intuitive, modern and conversion-focused mobile app interfaces for iOS, Android, startups and businesses.',

  path: '/services/mobile-ui-design',
});


const s_data = serviceData['/services/mobile-ui-design'];


const contents = [
  {
    id: 'mobileui1',

    para: 'Mobile UI design is the process of designing the visual interface and interaction experience of mobile applications. A well-designed mobile interface helps users understand the application, navigate between screens, complete tasks and interact with features efficiently on smaller screens.',
  },

  {
    id: 'mobileui2',

    para: 'Mobile applications require a different design approach from websites because users interact with smaller screens, touch controls, gestures, mobile navigation patterns and different device sizes. Mobile UI design must therefore consider usability, accessibility, visual hierarchy and interaction from the beginning.',
  },

  {
    id: 'mobileui3',

    para: 'At VoidMatrix, we provide mobile UI design services for startups, businesses, SaaS companies, marketplaces, fintech products, healthcare platforms, eCommerce applications and custom mobile applications.',
  },

  {
    id: 'mobileui4',

    para: 'Our mobile app UI design process covers screen layouts, navigation, onboarding, forms, dashboards, cards, buttons, icons, interaction states and other interface elements required to create a consistent mobile product experience.',
  },

  {
    id: 'mobileui5',

    para: 'We design mobile interfaces with scalability in mind. Reusable components, consistent spacing, typography and interaction patterns help maintain a unified experience as new features and screens are added to the application.',
  },

  {
    id: 'mobileui6',

    para: 'VoidMatrix provides mobile UI design services for businesses in Mumbai, Pune, across India and international markets. Whether you are launching a new mobile app, building an MVP or redesigning an existing application, our design process is structured around your users, product requirements and business objectives.',
  },
];


export default function MobileUIDesignPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Mobile UI Design Company in Mumbai, India"
        title={
          <>
            Mobile UI Design
            <span className="text-(--primary)"> Built for Better</span>
            <span className="text-(--primary)"> App Experiences</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Design intuitive and engaging mobile interfaces for modern applications.
                </span>
                <br />
                VoidMatrix provides mobile UI design services for iOS, Android, startups,
                businesses, SaaS products and custom mobile applications across Mumbai,
                Pune, India and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Mobile <span className="text-(--primary)">UI Design</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Mobile <span className="text-(--primary)">UX Design</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                App <span className="text-(--primary)">Design</span>
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
          WHAT IS MOBILE UI DESIGN?
      ===================================================== */}

      <WhaIsService
        heading="What Is Mobile UI Design?"
        contents={contents}
      />


      {/* =====================================================
          CORE MOBILE UI DESIGN SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Mobile UI Design Services"
        intro="We design modern mobile interfaces for applications across different industries and product categories. Our mobile UI design process focuses on usability, clear navigation, responsive layouts, touch interactions, visual hierarchy and consistent interface systems."
        items={[
          {
            item_link: 'mobile-app-ui-design',

            title: 'Mobile App UI Design',

            description:
              'Design intuitive and visually consistent interfaces for iOS and Android mobile applications.',
          },

          {
            item_link: 'mobile-app-ux-design',

            title: 'Mobile UX Design',

            description:
              'Plan mobile user flows, navigation and interactions to make applications easier and more efficient to use.',
          },

          {
            item_link: 'mobile-mvp-ui-design',

            title: 'Mobile MVP UI Design',

            description:
              'Design focused mobile MVP interfaces around the core features and workflows required for product validation and launch.',
          },

          {
            item_link: 'mobile-app-redesign',

            title: 'Mobile App Redesign',

            description:
              'Modernize existing mobile application interfaces and improve usability, navigation, consistency and visual experience.',
          },

          {
            item_link: 'mobile-design-system',

            title: 'Mobile Design Systems',

            description:
              'Create reusable mobile UI components, typography, spacing and interaction patterns for consistent product development.',
          },

          {
            item_link: 'mobile-responsive-design',

            title: 'Multi-Device Mobile Design',

            description:
              'Design interfaces that provide a consistent experience across different mobile screen sizes and device environments.',
          },
        ]}
        details={[
          {
            item_link_id: 'mobile-app-ui-design',

            heading: 'Mobile App UI Design',

            descriptions: [
              {
                para: 'We design mobile application interfaces around the way users interact with smartphones and tablets. This includes screen layouts, navigation, buttons, forms, cards, lists, dashboards, menus, icons and other interface components.',
              },

              {
                para: 'The interface is structured around clear visual hierarchy so users can understand important information and actions without unnecessary complexity.',
              },

              {
                para: 'Our mobile UI design services can be used for consumer applications, business applications, SaaS products, marketplaces, eCommerce apps, fintech platforms and other digital products.',
              },
            ],
          },

          {
            item_link_id: 'mobile-app-ux-design',

            heading: 'Mobile UX Design',

            descriptions: [
              {
                para: 'Mobile UX design focuses on how users navigate and complete tasks inside an application. We analyze important user journeys, navigation structures, interactions and workflows before developing the final interface.',
              },

              {
                para: 'Mobile experiences need to minimize unnecessary steps while keeping navigation understandable. We consider touch interactions, screen hierarchy, accessibility and user expectations throughout the design process.',
              },

              {
                para: 'The result is a mobile experience designed around practical user workflows rather than individual screens alone.',
              },
            ],
          },

          {
            item_link_id: 'mobile-mvp-ui-design',

            heading: 'Mobile MVP UI Design',

            descriptions: [
              {
                para: 'Mobile startups often need to launch an MVP quickly while maintaining a professional product experience. We design MVP interfaces around the essential features and workflows required for the initial product.',
              },

              {
                para: 'The focus remains on important screens, core navigation, usability and a consistent visual foundation without unnecessarily designing features outside the initial MVP scope.',
              },

              {
                para: 'The interface can then evolve into a broader design system as the mobile application gains users and new features.',
              },
            ],
          },

          {
            item_link_id: 'mobile-app-redesign',

            heading: 'Mobile App Redesign',

            descriptions: [
              {
                para: 'Existing mobile applications can develop inconsistent interfaces, outdated visual patterns or complicated navigation as features are added over time. We redesign mobile interfaces to create a clearer and more consistent product experience.',
              },

              {
                para: 'The redesign process can include reviewing existing screens, navigation, user flows, visual hierarchy and component consistency.',
              },

              {
                para: 'The objective is to improve the overall interface while preserving important functionality and business requirements.',
              },
            ],
          },

          {
            item_link_id: 'mobile-design-system',

            heading: 'Mobile Design Systems',

            descriptions: [
              {
                para: 'A growing mobile application needs reusable interface components to maintain consistency across different screens and features. We create structured mobile design systems around the requirements of the product.',
              },

              {
                para: 'These systems can include buttons, inputs, cards, navigation elements, typography, spacing, colors, icons, states and other reusable interface components.',
              },

              {
                para: 'A structured design system also makes it easier for product and development teams to expand the application while maintaining interface consistency.',
              },
            ],
          },

          {
            item_link_id: 'mobile-responsive-design',

            heading: 'Multi-Device Mobile Design',

            descriptions: [
              {
                para: 'Mobile applications can be used across different device sizes and screen environments. We design interface layouts that consider how navigation, content, controls and components adapt across supported devices.',
              },

              {
                para: 'Rather than simply scaling the same screen, mobile layouts can be reorganized where necessary to maintain usability and accessibility across different screen dimensions.',
              },

              {
                para: 'This helps create a more consistent experience for users across the supported mobile devices.',
              },
            ],
          },
        ]}
      />


      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Mobile UI Design Cost in India"
        costdesc={[
          {
            para: 'The cost of mobile UI design depends on the number of screens, application complexity, number of user roles, UX requirements, number of workflows, interaction complexity, design system requirements and prototype requirements.',
          },

          {
            para: 'A simple mobile MVP with a limited number of screens requires a different design scope from a large application containing multiple modules, dashboards, account areas, complex workflows and different user roles.',
          },

          {
            para: 'Our mobile UI design scope is based on the actual product requirements, number of screens, user journeys and level of design system development required for the application.',
          },
        ]}
      />


      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Mobile UI Design Cost"
        intro="Every mobile application has different design requirements. These factors influence the scope, timeline and investment required for mobile UI and UX design."
        facts={[
          'Number of app screens',

          'Application complexity',

          'Number of user roles',

          'Number of user flows',

          'UX research requirements',

          'iOS and Android requirements',

          'Interaction complexity',

          'Prototype requirements',

          'Design system requirements',

          'Custom illustrations and icons',

          'Existing app redesign requirements',

          'Developer handoff requirements',
        ]}
      />


      {/* =====================================================
          BASIC VS PROFESSIONAL MOBILE UI DESIGN
      ===================================================== */}

      <ServiceComp
        heading="Basic UI Design vs Professional Mobile UI Design"
        desc="Basic mobile UI design often focuses on the appearance of individual screens. Professional mobile UI design considers the complete application experience including user flows, navigation, information hierarchy, touch interactions, accessibility, responsive layouts, interaction states, reusable components and design systems. The objective is to create a mobile interface that is visually consistent, easy to use and scalable as the application grows."
      />


      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Get Mobile UI Design Estimate"
        url="/contact"
      />


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Mobile UI Design Process"
        intro="We follow a structured mobile product design process to understand your application, map important user journeys, design the interface and prepare a scalable foundation for development."
        steps={[
          {
            title: 'Product & Requirement Analysis',

            description:
              'We understand your mobile application, target users, features, business objectives and product requirements.',

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
              'We map important mobile user journeys and workflows to establish how users should navigate through the application.',

            points: [
              'User flows',

              'Information architecture',

              'Mobile navigation',

              'Workflow analysis',
            ],
          },

          {
            title: 'Wireframing & Screen Structure',

            description:
              'We establish mobile screen layouts, information hierarchy, navigation structures and component placement before final visual design.',

            points: [
              'Wireframes',

              'Screen structure',

              'Content hierarchy',

              'Component planning',
            ],
          },

          {
            title: 'Visual Mobile UI Design',

            description:
              'We translate the approved structure into a polished mobile interface using typography, spacing, visual hierarchy, components and interaction states.',

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
              'We create reusable interface components and layouts that support consistent experiences across supported mobile devices.',

            points: [
              'Device layouts',

              'Reusable components',

              'Design system',

              'UI consistency',
            ],
          },

          {
            title: 'Prototype & Developer Handoff',

            description:
              'We prepare final mobile designs and interaction specifications so development teams can accurately implement the application interface.',

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
        heading="Mobile UI Design Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we provide mobile UI design services for startups, technology companies, SaaS products, marketplaces, eCommerce applications and custom mobile products.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad and other Indian cities, we design mobile application interfaces for startups, businesses and technology companies.',
          },

          {
            para: 'For companies targeting customers across India, our mobile UI design approach can be adapted to the application requirements, user groups, workflows and business objectives of the product.',
          },

          {
            para: 'We also provide mobile UI design services for companies targeting international markets including the USA, UK, UAE, Europe, Australia and other global markets. Mobile interfaces can be designed around international users, product requirements and scalable application architectures.',
          },
        ]}
      />


      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Mobile UI Design Services?"
        intro="Mobile UI design is suitable for businesses building new applications or improving existing mobile products where usability, navigation and interface quality are important to the overall product experience."
        subintro="Our mobile UI design services are suitable for:"
        points={[
          'Mobile app startups',

          'Businesses launching mobile applications',

          'SaaS companies building mobile apps',

          'eCommerce applications',

          'Marketplace applications',

          'Fintech applications',

          'Healthcare applications',

          'Business and enterprise applications',

          'Mobile MVP products',

          'Existing apps requiring redesign',
        ]}
        finalPara="Whether you are launching a new mobile MVP or redesigning an established application, a structured mobile UI and UX approach can help create a clearer user experience and provide a scalable foundation for future product development."
      />


      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Mobile UI Design Services FAQs"
        faqs={s_data.faqs}
      />


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Build a Better Mobile App Experience"
        description="Get your mobile application reviewed for UI, UX and interface design opportunities."
      />
    </>
  );
}