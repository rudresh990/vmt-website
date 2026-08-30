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
  title: 'Website UI Design Company in Mumbai & India | UI Design Services',

  description:
    'Website UI design services for businesses, startups, SaaS companies, and enterprises. We design responsive, conversion-focused website interfaces in Mumbai, Pune, India, and global markets.',

  path: '/services/website-ui-design',
});


const s_data = serviceData['/services/website-ui-design'];


const contents = [
  {
    id: 'websiteui1',

    para: 'Website UI design is the process of designing the visual interface and interactive elements of a website so visitors can understand information, navigate pages, and take action easily. It combines layout, typography, spacing, colors, components, visual hierarchy, responsive design, and interaction patterns to create a consistent digital experience.',
  },

  {
    id: 'websiteui2',

    para: 'A professional website should do more than look attractive. Its interface should make important information easy to find, communicate the value of a business clearly, guide visitors toward relevant actions, and provide a consistent experience across desktop, tablet, and mobile devices.',
  },

  {
    id: 'websiteui3',

    para: 'At VoidMatrix, we provide website UI design services for startups, SMEs, SaaS companies, eCommerce businesses, professional services, technology companies, manufacturers, and enterprise organizations. We design interfaces for business websites, service websites, landing pages, product websites, and digital platforms.',
  },

  {
    id: 'websiteui4',

    para: 'Our website UI design process considers both visual design and business objectives. We structure pages around information hierarchy, user expectations, navigation patterns, calls to action, content requirements, responsive behaviour, accessibility, and conversion opportunities.',
  },

  {
    id: 'websiteui5',

    para: 'Good website UI design also creates a stronger foundation for development. Clearly defined layouts, reusable components, responsive behaviour, spacing systems, typography, and interaction patterns allow developers to build the website more consistently and reduce unnecessary design and development revisions.',
  },

  {
    id: 'websiteui6',

    para: 'We provide website UI design services in Mumbai, Pune, Bangalore, Hyderabad, across India, and for international businesses. Whether you need a new website interface or want to redesign an existing website, we create UI systems aligned with your brand, audience, content, and business goals.',
  },
];


export default function WebsiteUIDesignPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Website UI Design Company in Mumbai, India"
        title={
          <>
            Design Websites That
            <span className="text-(--primary)"> Look Better & Convert Better</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Create clear, modern, and conversion-focused website interfaces.
                </span>
                <br />
                VoidMatrix provides website UI design services for businesses, startups, SaaS
                companies, eCommerce websites, and enterprises across Mumbai, Pune, India, and
                global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Website <span className="text-(--primary)">UI Design</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Responsive <span className="text-(--primary)">Design</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                UX <span className="text-(--primary)">Focused</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Conversion <span className="text-(--primary)">Design</span>
              </span>
            </div>
          </>
        }
      />


      {/* =====================================================
          WHAT IS WEBSITE UI DESIGN?
      ===================================================== */}

      <WhaIsService
        heading="What Is Website UI Design?"
        contents={contents}
      />


      {/* =====================================================
          CORE WEBSITE UI DESIGN SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Website UI Design Services"
        intro="We design website interfaces that combine visual consistency, usability, responsive behaviour, clear information hierarchy, and conversion-focused user journeys. Our website UI design process is built around the needs of your audience and the objectives of each website."
        items={[
          {
            item_link: 'website-interface-design',

            title: 'Website Interface Design',

            description:
              'Design modern website interfaces with clear layouts, visual hierarchy, typography, spacing, navigation, and reusable UI components.',
          },

          {
            item_link: 'responsive-ui-design',

            title: 'Responsive UI Design',

            description:
              'Create responsive interfaces that provide a consistent and usable experience across desktop, tablet, and mobile screen sizes.',
          },

          {
            item_link: 'website-navigation-design',

            title: 'Website Navigation Design',

            description:
              'Design intuitive navigation structures that help visitors find important information and move through the website efficiently.',
          },

          {
            item_link: 'conversion-focused-ui',

            title: 'Conversion-Focused UI Design',

            description:
              'Design page layouts, calls to action, forms, and content sections that guide visitors toward enquiries, purchases, registrations, or other business goals.',
          },

          {
            item_link: 'design-system-components',

            title: 'UI Components & Design Systems',

            description:
              'Create reusable buttons, cards, forms, navigation elements, typography, spacing, and interface patterns for consistent website design.',
          },

          {
            item_link: 'landing-page-ui',

            title: 'Landing Page UI Design',

            description:
              'Design focused landing page interfaces for campaigns, products, services, lead generation, and other specific conversion objectives.',
          },

          {
            item_link: 'website-redesign-ui',

            title: 'Website Redesign UI',

            description:
              'Modernize outdated website interfaces while improving usability, visual consistency, responsive behaviour, and conversion opportunities.',
          },
        ]}
        details={[
          {
            item_link_id: 'website-interface-design',

            heading: 'Website Interface Design',

            descriptions: [
              {
                para: 'A website interface should make information easy to understand while creating a visual identity that reflects the business. We design page layouts around content hierarchy, navigation, typography, spacing, imagery, cards, buttons, forms, and other interface components.',
              },

              {
                para: 'The interface is structured according to the purpose of the website and the type of information visitors need to consume. Business websites, SaaS websites, eCommerce stores, and service websites can therefore require very different UI patterns.',
              },

              {
                para: 'Our objective is to create a clean and consistent interface that supports usability while giving the website a distinctive and professional visual identity.',
              },
            ],
          },

          {
            item_link_id: 'responsive-ui-design',

            heading: 'Responsive UI Design',

            descriptions: [
              {
                para: 'Visitors access websites from a wide range of devices and screen sizes. We design responsive interfaces that adapt layouts, navigation, typography, components, images, forms, and spacing according to the available screen size.',
              },

              {
                para: 'Responsive design is considered from the beginning rather than treating mobile as a smaller version of the desktop interface.',
              },

              {
                para: 'This helps create a more consistent experience across desktop, tablet, and mobile devices and provides developers with clearer implementation requirements.',
              },
            ],
          },

          {
            item_link_id: 'website-navigation-design',

            heading: 'Website Navigation Design',

            descriptions: [
              {
                para: 'Website navigation influences how quickly visitors can discover services, products, information, contact options, and other important pages. We design navigation systems around the information architecture and content priorities of the website.',
              },

              {
                para: 'Navigation can include primary menus, dropdowns, mega menus, breadcrumbs, contextual links, footer navigation, and other supporting pathways where appropriate.',
              },

              {
                para: 'The objective is to reduce unnecessary friction and create clear pathways between related sections of the website.',
              },
            ],
          },

          {
            item_link_id: 'conversion-focused-ui',

            heading: 'Conversion-Focused UI Design',

            descriptions: [
              {
                para: 'Website UI should support the business objective of the page. We design calls to action, forms, service sections, trust elements, pricing sections, enquiry pathways, and other components according to the intended user journey.',
              },

              {
                para: 'Different websites may optimize for enquiries, purchases, registrations, bookings, downloads, demonstrations, or other actions. The interface is structured around the relevant conversion objective.',
              },

              {
                para: 'We focus on making important actions visible and understandable without creating unnecessary visual clutter or aggressive interface patterns.',
              },
            ],
          },

          {
            item_link_id: 'design-system-components',

            heading: 'UI Components & Design Systems',

            descriptions: [
              {
                para: 'Reusable components create consistency across a website and make future development easier. We define common interface elements such as buttons, cards, forms, navigation components, typography, spacing, and other recurring patterns.',
              },

              {
                para: 'A component-based approach helps prevent individual pages from developing unrelated visual styles and allows the website to maintain a consistent design language as new pages are added.',
              },

              {
                para: 'For larger websites and SaaS platforms, a structured design system can provide an even stronger foundation for product and website development.',
              },
            ],
          },

          {
            item_link_id: 'landing-page-ui',

            heading: 'Landing Page UI Design',

            descriptions: [
              {
                para: 'Landing pages require focused interface design because they are generally built around a specific campaign, service, product, audience, or conversion objective.',
              },

              {
                para: 'We design landing page layouts that establish the value proposition quickly, organize supporting information, present trust signals, and guide visitors toward the intended action.',
              },

              {
                para: 'Landing page UI can also be designed around paid advertising campaigns, SEO landing pages, lead generation campaigns, product launches, and service-specific marketing initiatives.',
              },
            ],
          },

          {
            item_link_id: 'website-redesign-ui',

            heading: 'Website Redesign UI',

            descriptions: [
              {
                para: 'An outdated interface can make a business appear less credible, make information difficult to find, and create unnecessary friction for visitors. We redesign existing websites to improve visual consistency, usability, responsive behaviour, navigation, and conversion opportunities.',
              },

              {
                para: 'The redesign process considers the existing content, website structure, business objectives, audience, and technical implementation requirements before introducing a new interface.',
              },

              {
                para: 'Where the existing website has valuable SEO or conversion assets, the redesign can be planned carefully so the visual transformation does not unnecessarily disrupt the underlying website structure.',
              },
            ],
          },
        ]}
      />


      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Website UI Design Cost in India"
        costdesc={[
          {
            para: 'The cost of website UI design depends on the number of pages, design complexity, number of unique layouts, responsive requirements, interaction requirements, design system requirements, and the level of UX research involved.',
          },

          {
            para: 'A small business website with a few standard pages requires a different design effort from a SaaS platform, eCommerce website, enterprise website, or large content platform with many page types and reusable components.',
          },

          {
            para: 'At VoidMatrix, we scope website UI design around the actual requirements of the project rather than applying the same design package to every business. The objective is to create a practical interface system that can be implemented consistently during development.',
          },
        ]}
      />


      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Website UI Design Cost"
        intro="Every website requires a different level of design planning and interface complexity. These factors influence the scope and investment required for website UI design."
        facts={[
          'Number of website pages',

          'Number of unique page layouts',

          'Website complexity',

          'Responsive design requirements',

          'UX research requirements',

          'Custom UI component requirements',

          'Design system requirements',

          'Animation and interaction requirements',

          'eCommerce functionality',

          'SaaS or application interfaces',

          'Landing page requirements',

          'Website redesign complexity',
        ]}
      />


      {/* =====================================================
          BASIC VS PROFESSIONAL UI DESIGN
      ===================================================== */}

      <ServiceComp
        heading="Basic Website Design vs Professional UI Design"
        desc="Basic website design often focuses primarily on visual appearance and individual page layouts. Professional website UI design takes a broader approach by considering information hierarchy, navigation, responsive behaviour, reusable components, typography, spacing, interaction patterns, accessibility, conversion goals, and consistency across the entire website. The objective is to create an interface that looks professional while making the website easier to understand, navigate, and use."
      />


      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Website UI Design Estimate" url="/contact" />


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Website UI Design Process"
        intro="We follow a structured design process to understand the business, organize the interface, develop visual direction, and create a responsive UI system that can be implemented consistently."
        steps={[
          {
            title: 'Business & Audience Understanding',

            description:
              'We understand the business, target audience, website objectives, existing brand direction, content requirements, and key conversion goals.',

            points: [
              'Business analysis',

              'Audience understanding',

              'Website objectives',

              'Competitor review',
            ],
          },

          {
            title: 'Information Architecture & Page Planning',

            description:
              'We organize the website structure and determine the purpose, hierarchy, and content requirements of important pages.',

            points: [
              'Page planning',

              'Content hierarchy',

              'Navigation planning',

              'User journeys',
            ],
          },

          {
            title: 'Wireframing & Layout Design',

            description:
              'We establish page layouts and component relationships before applying the final visual design.',

            points: [
              'Wireframes',

              'Page structure',

              'Content placement',

              'Responsive planning',
            ],
          },

          {
            title: 'Visual UI Design',

            description:
              'We develop the visual interface using typography, spacing, colours, components, imagery, buttons, cards, forms, and other interface elements.',

            points: [
              'Visual direction',

              'Typography',

              'UI components',

              'Page design',
            ],
          },

          {
            title: 'Responsive & Interaction Design',

            description:
              'We adapt the interface for different screen sizes and define important interaction patterns so the design can be implemented consistently.',

            points: [
              'Mobile UI',

              'Tablet layouts',

              'Desktop layouts',

              'Interaction patterns',
            ],
          },

          {
            title: 'Design Review & Developer Handoff',

            description:
              'We review the final interface for consistency, usability, responsiveness, and implementation requirements before development begins.',

            points: [
              'Design review',

              'UI consistency',

              'Responsive review',

              'Developer handoff',
            ],
          },
        ]}
      />


      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Website UI Design Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we design professional website interfaces for startups, SMEs, service businesses, technology companies, manufacturers, and established organizations competing in the local market.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, we create website UI systems suited to B2B businesses, SaaS companies, eCommerce businesses, professional services, technology companies, and growing organizations.',
          },

          {
            para: 'For businesses targeting customers across India, our website UI design approach can be aligned with national marketing strategies, SEO requirements, content structures, lead-generation objectives, and broader digital growth plans.',
          },

          {
            para: 'We also provide website UI design services for international businesses targeting markets including the USA, UK, UAE, Europe, Australia, and other global regions. Interfaces can be adapted to the audience, brand, market, language, and business objectives being targeted.',
          },
        ]}
      />


      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Website UI Design Services?"
        intro="Website UI design is useful for businesses that want to create a professional digital presence, improve usability, modernize an existing website, or build an interface that supports stronger customer journeys and conversions."
        subintro="Our website UI design services are suitable for:"
        points={[
          'Startups launching new websites',

          'SaaS companies',

          'eCommerce businesses',

          'B2B companies',

          'Technology companies',

          'Manufacturers',

          'Professional service businesses',

          'Corporate websites',

          'Businesses redesigning outdated websites',

          'Businesses targeting international markets',
        ]}
        finalPara="Whether you are launching a new website or redesigning an existing digital presence, a structured UI design system can create a stronger foundation for usability, development, branding, SEO, and conversion-focused website experiences."
      />


      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Website UI Design Services FAQs"
        faqs={s_data.faqs}
      />


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Build a Website People Enjoy Using"
        description="Create a professional, responsive, and conversion-focused website interface with VoidMatrix."
      />
    </>
  );
}