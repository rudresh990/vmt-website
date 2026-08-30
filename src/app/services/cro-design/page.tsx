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
  title: 'CRO Design Company in Mumbai & India | Conversion Rate Optimization',

  description:
    'CRO design services for websites, landing pages, eCommerce and SaaS products. VoidMatrix designs conversion-focused experiences that reduce friction and improve user journeys.',

  path: '/services/cro-design',
});


const s_data = serviceData['/services/cro-design'];


const contents = [
  {
    id: 'crodesign1',

    para: 'CRO design, or Conversion Rate Optimization design, is the process of designing and improving digital experiences to help more users complete important business actions. These actions can include submitting a lead form, requesting a quote, purchasing a product, booking a service, signing up for a SaaS product, or starting a free trial.',
  },

  {
    id: 'crodesign2',

    para: 'Conversion-focused design goes beyond making a website or landing page visually attractive. It considers user intent, information hierarchy, messaging, trust signals, calls to action, forms, navigation, friction points, and the sequence in which information is presented to users.',
  },

  {
    id: 'crodesign3',

    para: 'At VoidMatrix, we provide CRO design services for websites, landing pages, eCommerce stores, SaaS products, B2B websites, lead-generation platforms, and digital products. Our approach combines UX principles, conversion strategy, user behavior, and interface design.',
  },

  {
    id: 'crodesign4',

    para: 'A CRO-focused design process starts by understanding what users need to know before taking an action and what may prevent them from doing so. We then structure pages and user journeys to make important information, benefits, proof, and calls to action easier to understand.',
  },

  {
    id: 'crodesign5',

    para: 'CRO design can be especially valuable when a website receives traffic but generates fewer leads, sales, registrations, enquiries, or other desired actions than expected. Improving the experience can help businesses make better use of their existing traffic.',
  },

  {
    id: 'crodesign6',

    para: 'VoidMatrix provides conversion-focused design services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. CRO design can be applied to new websites and landing pages as well as existing digital experiences requiring optimization.',
  },
];


export default function CRODesignPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="CRO Design Company in Mumbai, India"
        title={
          <>
            Design Experiences That
            <span className="text-(--primary)"> Convert More Users</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Turn website traffic into more leads, enquiries, signups, and customers.
                </span>
                <br />
                VoidMatrix provides CRO design services for websites, landing pages, eCommerce
                stores, SaaS products, and B2B platforms across Mumbai, Pune, India, and global
                markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                CRO <span className="text-(--primary)">Design</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Conversion <span className="text-(--primary)">Optimization</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Landing Page <span className="text-(--primary)">Design</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                UX <span className="text-(--primary)">Optimization</span>
              </span>
            </div>
          </>
        }
      />


      {/* =====================================================
          WHAT IS CRO DESIGN?
      ===================================================== */}

      <WhaIsService
        heading="What Is CRO Design?"
        contents={contents}
      />


      {/* =====================================================
          CORE CRO DESIGN SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our CRO Design Services"
        intro="We design and optimize digital experiences around user intent, business goals, usability, trust, messaging, and conversion journeys. Our CRO design services help businesses identify and reduce friction across important user journeys."
        items={[
          {
            item_link: 'conversion-focused-website-design',

            title: 'Conversion-Focused Website Design',

            description:
              'Design website experiences around user intent, clear messaging, trust, navigation, and conversion-focused calls to action.',
          },

          {
            item_link: 'landing-page-cro-design',

            title: 'Landing Page CRO Design',

            description:
              'Design landing pages focused on turning targeted traffic into leads, enquiries, registrations, purchases, or other desired actions.',
          },

          {
            item_link: 'ecommerce-cro-design',

            title: 'eCommerce CRO Design',

            description:
              'Optimize product discovery, product pages, cart, checkout, and purchasing journeys to reduce friction in the shopping experience.',
          },

          {
            item_link: 'saas-cro-design',

            title: 'SaaS CRO Design',

            description:
              'Design SaaS marketing and product experiences that improve signups, trial registrations, onboarding, and important product actions.',
          },

          {
            item_link: 'form-cro-design',

            title: 'Form & Lead Conversion Design',

            description:
              'Improve lead forms and enquiry journeys by reducing unnecessary friction and making important actions easier to complete.',
          },

          {
            item_link: 'cta-conversion-design',

            title: 'CTA & Conversion Design',

            description:
              'Improve calls to action, messaging hierarchy, trust elements, and page structure to make conversion opportunities clearer.',
          },

        ]}
        details={[
          {
            item_link_id: 'conversion-focused-website-design',

            heading: 'Conversion-Focused Website Design',

            descriptions: [
              {
                para: 'A conversion-focused website is designed around both user needs and business objectives. We structure important pages so users can quickly understand what the business offers, why it matters, and what action they should take next.',
              },

              {
                para: 'We consider information hierarchy, page messaging, calls to action, trust signals, navigation, forms, content structure, and potential friction points when designing conversion-focused experiences.',
              },

              {
                para: 'This approach can be applied to service websites, B2B websites, corporate websites, lead-generation websites, and other digital platforms where conversions are an important business objective.',
              },
            ],
          },

          {
            item_link_id: 'landing-page-cro-design',

            heading: 'Landing Page CRO Design',

            descriptions: [
              {
                para: 'Landing pages are often designed for a specific campaign, audience, offer, or conversion objective. We structure landing pages around the intent of the traffic and the action the business wants users to take.',
              },

              {
                para: 'The design can consider headline hierarchy, value propositions, benefits, social proof, trust elements, objections, forms, calls to action, and supporting information.',
              },

              {
                para: 'The objective is to reduce distractions and create a clear path between the user arriving on the page and completing the desired action.',
              },
            ],
          },

          {
            item_link_id: 'ecommerce-cro-design',

            heading: 'eCommerce CRO Design',

            descriptions: [
              {
                para: 'eCommerce conversion optimization focuses on reducing friction throughout the shopping journey. We review how users discover products, evaluate product information, add products to cart, and complete checkout.',
              },

              {
                para: 'Important areas can include product page hierarchy, product information, pricing presentation, calls to action, trust signals, cart structure, checkout forms, and purchasing steps.',
              },

              {
                para: 'The objective is to create a clearer shopping experience that makes it easier for users to move from product discovery to purchase.',
              },
            ],
          },

          {
            item_link_id: 'saas-cro-design',

            heading: 'SaaS CRO Design',

            descriptions: [
              {
                para: 'SaaS businesses often depend on actions such as demo requests, free-trial registrations, account creation, product exploration, or subscription upgrades. CRO design can help improve the experience around these actions.',
              },

              {
                para: 'We consider messaging, product positioning, feature communication, trust, pricing presentation, signup flows, onboarding, and calls to action according to the product journey.',
              },

              {
                para: 'The design can be applied to SaaS marketing websites as well as selected product journeys where conversion or activation is an important objective.',
              },
            ],
          },

          {
            item_link_id: 'form-cro-design',

            heading: 'Form & Lead Conversion Design',

            descriptions: [
              {
                para: 'Forms can become significant friction points when they request too much information, provide unclear instructions, or create unnecessary steps. We review form structure and user expectations around important lead-generation journeys.',
              },

              {
                para: 'The design can consider field requirements, grouping, labels, error states, trust messaging, calls to action, and the overall sequence of the conversion process.',
              },

              {
                para: 'The objective is to make the form experience easier to understand and complete while maintaining the information required by the business.',
              },
            ],
          },

          {
            item_link_id: 'cta-conversion-design',

            heading: 'CTA & Conversion Design',

            descriptions: [
              {
                para: 'Calls to action should communicate clearly what users can expect after clicking. We design CTA placement, hierarchy, messaging, supporting content, and surrounding context around the intended user journey.',
              },

              {
                para: 'Conversion opportunities can be positioned around important decision points instead of relying on a single call to action at the end of a page.',
              },

              {
                para: 'The objective is to make relevant next steps clear without overwhelming users with competing actions.',
              },
            ],
          },
        ]}
      />


      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="CRO Design Cost in India"
        costdesc={[
          {
            para: 'The cost of CRO design depends on the number of pages or screens, current conversion performance, research requirements, traffic sources, complexity of the user journey, number of conversion goals, and level of optimization required.',
          },

          {
            para: 'A single landing page CRO project has a different scope from a complete website conversion optimization project involving multiple pages, lead funnels, forms, user journeys, and analytics data.',
          },

          {
            para: 'Our CRO design scope is based on the actual conversion objectives, user journey, available data, and design requirements rather than applying the same optimization process to every website or digital product.',
          },
        ]}
      />


      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect CRO Design Cost"
        intro="Every conversion optimization project has different requirements. These factors influence the scope, research effort, design work, and investment required."
        facts={[
          'Number of pages or screens',

          'Number of conversion goals',

          'Website or product complexity',

          'Traffic volume',

          'Existing conversion data',

          'Analytics availability',

          'User research requirements',

          'Landing page requirements',

          'Form complexity',

          'eCommerce checkout complexity',

          'A/B testing requirements',

          'Existing website redesign requirements',
        ]}
      />


      {/* =====================================================
          BASIC VS PROFESSIONAL CRO DESIGN
      ===================================================== */}

      <ServiceComp
        heading="Basic Web Design vs Conversion-Focused CRO Design"
        desc="Basic web design often focuses primarily on visual appearance, branding, and page presentation. CRO design takes a broader approach by considering user intent, conversion goals, information hierarchy, messaging, trust, calls to action, forms, friction points, and the complete user journey. The objective is not simply to make a page look better, but to create a clearer experience that helps users understand the value proposition and take the intended action."
      />


      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Get CRO Design Estimate"
        url="/contact"
      />


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our CRO Design Process"
        intro="We follow a structured conversion-focused design process to understand your users, business goals, existing experience, and conversion journey before recommending and designing improvements."
        steps={[
          {
            title: 'Conversion Goal Analysis',

            description:
              'We identify the primary business actions the experience needs to support and understand the current conversion journey.',

            points: [
              'Conversion goals',

              'Business objectives',

              'User actions',

              'Funnel analysis',
            ],
          },

          {
            title: 'User & Journey Analysis',

            description:
              'We examine how users arrive, what they need to understand, and what actions they are expected to complete.',

            points: [
              'User intent',

              'User journeys',

              'Traffic sources',

              'Decision points',
            ],
          },

          {
            title: 'Friction & UX Analysis',

            description:
              'We identify potential usability problems, information gaps, unclear messaging, unnecessary steps, and other conversion barriers.',

            points: [
              'Friction analysis',

              'UX review',

              'Content hierarchy',

              'Form analysis',
            ],
          },

          {
            title: 'Conversion-Focused Wireframing',

            description:
              'We restructure important pages and journeys around user intent, information hierarchy, trust, messaging, and conversion opportunities.',

            points: [
              'Page structure',

              'Conversion hierarchy',

              'CTA placement',

              'User flow',
            ],
          },

          {
            title: 'CRO UI Design',

            description:
              'We translate the approved conversion structure into a polished interface while maintaining usability, consistency, and brand requirements.',

            points: [
              'Visual design',

              'CTA design',

              'Trust elements',

              'Form design',
            ],
          },

          {
            title: 'Testing & Optimization Recommendations',

            description:
              'We identify opportunities for testing and provide recommendations for continued optimization based on available data and business objectives.',

            points: [
              'Testing opportunities',

              'Optimization ideas',

              'Conversion priorities',

              'Future improvements',
            ],
          },
        ]}
      />


      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="CRO Design Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we provide CRO design services for websites, landing pages, B2B businesses, eCommerce stores, SaaS companies, and lead-generation platforms.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, our conversion-focused design process can be adapted to startups, technology companies, eCommerce businesses, service businesses, and digital products.',
          },

          {
            para: 'For businesses targeting customers across India, CRO design can be applied to important website and product journeys to improve clarity, usability, and conversion opportunities.',
          },

          {
            para: 'We also provide CRO design services for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other regions. The design strategy can be adapted to the target audience, market, traffic source, and conversion objective.',
          },
        ]}
      />


      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs CRO Design Services?"
        intro="CRO design is useful for businesses that already have website or product traffic but want to improve the percentage of users completing important business actions."
        subintro="Our CRO design services are suitable for:"
        points={[
          'Lead-generation websites',

          'B2B websites',

          'eCommerce businesses',

          'SaaS companies',

          'Landing pages',

          'Performance marketing campaigns',

          'Service businesses',

          'Technology companies',

          'Businesses redesigning existing websites',

          'Digital products with conversion problems',
        ]}
        finalPara="Whether you want more qualified leads, enquiries, registrations, purchases, or trial signups, CRO-focused design can help identify friction and create a clearer path between user intent and the desired conversion action."
      />


      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="CRO Design Services FAQs"
        faqs={s_data.faqs}
      />


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Turn More Website Visitors Into Customers"
        description="Identify conversion friction and design a clearer experience around your business goals."
      />
    </>
  );
}