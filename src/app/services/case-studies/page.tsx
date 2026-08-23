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
  title: 'Web Development & SEO Case Studies | VoidMatrix Technology',

  description:
    'Explore website development, SEO, eCommerce, digital marketing, and website redesign case studies from VoidMatrix Technology across Mumbai, Pune, India, and global markets.',

  path: '/case-studies',
});


const s_data = serviceData['/case-studies'];


const contents = [
  {
    id: 'casestudy1',

    para: 'Case studies show how real business problems are analysed, planned, implemented, and solved through technology, website development, SEO, digital marketing, and other digital services. They provide practical insight into the challenges businesses face and the strategies used to address them.',
  },

  {
    id: 'casestudy2',

    para: 'A strong case study goes beyond simply describing a finished website or marketing campaign. It explains the original business requirement, the challenges identified, the strategy selected, the implementation process, and the results or improvements achieved through the project.',
  },

  {
    id: 'casestudy3',

    para: 'At VoidMatrix Technology, our case studies can cover website development, website redesign, technical SEO, on-page SEO, local SEO, eCommerce development, performance optimization, digital marketing, and custom technology solutions.',
  },

  {
    id: 'casestudy4',

    para: 'Our case study approach combines business objectives with technical and marketing considerations. This helps demonstrate how website architecture, SEO, content, performance, user experience, and technology decisions can work together to support measurable business goals.',
  },

  {
    id: 'casestudy5',

    para: 'Case studies are particularly useful when evaluating a website development company, SEO company, digital marketing agency, or technology partner. They allow businesses to understand how an agency approaches real problems rather than evaluating services only from a list of features.',
  },

  {
    id: 'casestudy6',

    para: 'VoidMatrix Technology works with businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Our case studies are structured to provide useful technical, SEO, and business context for companies evaluating digital transformation and growth opportunities.',
  },
];


/* =====================================================
    CORE CASE STUDY SERVICES
===================================================== */

const caseStudyServices = [
  {
    item_link: 'website-development-case-studies',

    title: 'Website Development Case Studies',

    description:
      'Explore website development projects covering business websites, corporate websites, high-performance websites, and scalable digital platforms.',
  },

  {
    item_link: 'seo-case-studies',

    title: 'SEO Case Studies',

    description:
      'Review SEO projects involving technical SEO, on-page SEO, local SEO, content strategy, search visibility, and website optimization.',
  },

  {
    item_link: 'website-redesign-case-studies',

    title: 'Website Redesign Case Studies',

    description:
      'Understand how outdated websites can be redesigned to improve user experience, performance, website architecture, SEO, and conversion opportunities.',
  },

  {
    item_link: 'ecommerce-case-studies',

    title: 'eCommerce Case Studies',

    description:
      'Explore eCommerce development projects involving storefronts, product architecture, integrations, performance, SEO, and scalable commerce functionality.',
  },

  {
    item_link: 'digital-marketing-case-studies',

    title: 'Digital Marketing Case Studies',

    description:
      'Review digital marketing strategies involving SEO, content, paid campaigns, lead generation, conversion optimization, and online growth.',
  },

  {
    item_link: 'performance-optimization-case-studies',

    title: 'Website Performance Case Studies',

    description:
      'Explore projects focused on website speed, Core Web Vitals, frontend performance, technical improvements, and better user experience.',
  },
];


export default function CaseStudiesPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Web Development & SEO Case Studies in Mumbai, India"
        title={
          <>
            Real Projects.
            <span className="text-(--primary)"> Real Digital Challenges.</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Explore how VoidMatrix Technology approaches website development, SEO,
                  eCommerce, digital marketing, and technology projects.
                </span>
                <br />
                Our case studies explain the business challenge, strategy, implementation,
                technical decisions, and outcomes behind digital projects.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Website <span className="text-(--primary)">Development</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                SEO <span className="text-(--primary)">Case Studies</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                eCommerce <span className="text-(--primary)">Projects</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Digital <span className="text-(--primary)">Growth</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT ARE CASE STUDIES?
      ===================================================== */}

      <WhaIsService
        heading="What Are Our Digital Case Studies?"
        contents={contents}
      />

      {/* =====================================================
          CORE CASE STUDY SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Web Development, SEO & Digital Marketing Case Studies"
        intro="Explore case studies across website development, SEO, eCommerce, digital marketing, website redesign, and performance optimization. Each project focuses on the specific business requirements and digital challenges involved."
        items={caseStudyServices}
        details={[
          {
            item_link_id: 'website-development-case-studies',

            heading: 'Website Development Case Studies',

            descriptions: [
              {
                para: 'Website development case studies explain how business requirements are translated into website architecture, user experience, frontend development, backend integration, content structure, performance, and deployment.',
              },

              {
                para: 'Projects can include corporate websites, business websites, SaaS websites, product websites, marketing websites, web portals, and other custom digital platforms.',
              },

              {
                para: 'The objective is to demonstrate how technical decisions and website development practices can support usability, performance, search visibility, and long-term business growth.',
              },
            ],
          },

          {
            item_link_id: 'seo-case-studies',

            heading: 'SEO Case Studies',

            descriptions: [
              {
                para: 'SEO case studies explain how search visibility problems are analysed and addressed through technical SEO, on-page SEO, local SEO, content strategy, internal linking, structured data, and other search optimization activities.',
              },

              {
                para: 'Relevant projects can cover crawlability, indexing, keyword targeting, page structure, content optimization, Core Web Vitals, local search visibility, and other factors that influence organic search performance.',
              },

              {
                para: 'The purpose is to show the reasoning behind an SEO strategy rather than presenting SEO as a collection of isolated activities.',
              },
            ],
          },

          {
            item_link_id: 'website-redesign-case-studies',

            heading: 'Website Redesign Case Studies',

            descriptions: [
              {
                para: 'Website redesign case studies explain how an existing website is evaluated and rebuilt to address problems involving design, usability, performance, content structure, SEO, and conversion journeys.',
              },

              {
                para: 'A redesign may involve restructuring pages, improving navigation, rebuilding frontend components, improving responsive behaviour, optimizing performance, and preserving important SEO signals.',
              },

              {
                para: 'The objective is to modernize the website while creating a stronger technical and user experience foundation for future growth.',
              },
            ],
          },

          {
            item_link_id: 'ecommerce-case-studies',

            heading: 'eCommerce Case Studies',

            descriptions: [
              {
                para: 'eCommerce case studies cover digital commerce projects involving product catalogs, category structures, storefront development, checkout workflows, payment integrations, inventory systems, and third-party integrations.',
              },

              {
                para: 'Projects can also involve eCommerce SEO, website performance, product page optimization, technical architecture, and scalable commerce functionality.',
              },

              {
                para: 'The objective is to build commerce experiences that support customers, operations, search visibility, and long-term business growth.',
              },
            ],
          },

          {
            item_link_id: 'digital-marketing-case-studies',

            heading: 'Digital Marketing Case Studies',

            descriptions: [
              {
                para: 'Digital marketing case studies explain how businesses use SEO, content marketing, paid advertising, landing pages, lead generation, and conversion optimization to improve online acquisition.',
              },

              {
                para: 'Each strategy is considered in relation to the target audience, search demand, competition, business objectives, and customer journey.',
              },

              {
                para: 'The objective is to connect marketing activity with measurable business outcomes rather than focusing only on traffic or campaign metrics.',
              },
            ],
          },

          {
            item_link_id: 'performance-optimization-case-studies',

            heading: 'Website Performance Case Studies',

            descriptions: [
              {
                para: 'Performance case studies focus on technical improvements that can make websites faster, more stable, and easier for users to interact with.',
              },

              {
                para: 'Projects may involve frontend optimization, asset optimization, rendering improvements, Core Web Vitals, page architecture, database performance, and other technical improvements.',
              },

              {
                para: 'Performance optimization can support user experience, website reliability, conversion opportunities, and technical SEO objectives.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Digital Project Cost in India"
        costdesc={[
          {
            para: 'The cost of a website development, SEO, eCommerce, or digital marketing project depends on its scope, complexity, technology requirements, number of pages, integrations, content requirements, SEO objectives, and ongoing optimization requirements.',
          },

          {
            para: 'A small business website may require a relatively limited implementation, while an enterprise website, eCommerce platform, SaaS product, or large SEO campaign can require significantly more planning, development, optimization, testing, and ongoing work.',
          },

          {
            para: 'Our case studies provide context around the type of work involved in different digital projects. Project scope and investment are determined according to the actual business requirements rather than applying the same package to every company.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Digital Project Scope"
        intro="Every digital project is different. These factors influence the amount of strategy, development, SEO, content, testing, and optimization required."
        facts={[
          'Business objectives',

          'Website size and number of pages',

          'Technology requirements',

          'Design and user experience complexity',

          'Website architecture',

          'SEO requirements',

          'Content requirements',

          'Third-party integrations',

          'eCommerce functionality',

          'Performance requirements',

          'Number of locations or markets targeted',

          'Ongoing optimization requirements',
        ]}
      />

      {/* =====================================================
          CASE STUDIES VS SERVICE LISTS
      ===================================================== */}

      <ServiceComp
        heading="Why Case Studies Matter When Choosing a Digital Agency"
        desc="A service list tells you what an agency offers, but a case study shows how the agency approaches a real business problem. Case studies provide insight into planning, technical decisions, SEO strategy, implementation, challenges, optimization, and outcomes. They can help businesses evaluate whether a website development company, SEO company, digital marketing agency, or technology partner has an approach that fits their requirements."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe
        title="Discuss Your Digital Project"
        url="/contact"
      />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="How We Approach Digital Projects"
        intro="We follow a structured approach that connects business objectives with technology, user experience, SEO, performance, and long-term growth."
        steps={[
          {
            title: 'Business & Requirement Analysis',

            description:
              'We understand the business model, target audience, project objectives, existing digital infrastructure, and key challenges before defining the solution.',

            points: [
              'Business analysis',

              'Requirement discovery',

              'Audience analysis',

              'Project objectives',
            ],
          },

          {
            title: 'Problem & Opportunity Analysis',

            description:
              'We identify technical, SEO, content, performance, usability, and conversion problems that may be limiting the existing digital platform.',

            points: [
              'Website analysis',

              'SEO analysis',

              'Performance review',

              'Competitor research',
            ],
          },

          {
            title: 'Strategy & Solution Planning',

            description:
              'We create a structured strategy covering website architecture, development, SEO, content, integrations, performance, and other relevant project requirements.',

            points: [
              'Technical strategy',

              'SEO strategy',

              'Content planning',

              'Architecture planning',
            ],
          },

          {
            title: 'Implementation & Development',

            description:
              'We implement the planned solution while maintaining focus on performance, usability, scalability, technical quality, and search visibility.',

            points: [
              'Development',

              'SEO implementation',

              'Integration',

              'Performance optimization',
            ],
          },

          {
            title: 'Testing & Optimization',

            description:
              'We test the implementation across relevant devices, browsers, workflows, performance conditions, and SEO requirements before launch.',

            points: [
              'Quality assurance',

              'Responsive testing',

              'Performance testing',

              'SEO validation',
            ],
          },

          {
            title: 'Measurement & Continuous Improvement',

            description:
              'After implementation, we can continue evaluating performance, search visibility, user behaviour, and business objectives to identify further opportunities.',

            points: [
              'Performance monitoring',

              'SEO analysis',

              'Conversion improvement',

              'Continuous optimization',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Case Studies for Businesses in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, our projects can address local competition, business website development, SEO visibility, lead generation, website redesign, and digital growth requirements specific to the Mumbai market.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, digital strategies can be structured around the target market, industry, competition, audience, and business objectives.',
          },

          {
            para: 'For companies targeting customers across India, our projects can focus on national search visibility, scalable website development, eCommerce, content strategy, technical SEO, and broader digital acquisition.',
          },

          {
            para: 'We also work with businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global regions. Digital strategies can be adapted to international audiences, markets, search behaviour, and business requirements.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Can Benefit From Our Case Studies?"
        intro="Our case studies are useful for businesses evaluating technology, website development, SEO, digital marketing, and long-term digital growth services."
        subintro="Our case studies are particularly relevant for:"
        points={[
          'Startups planning a new website or digital product',

          'Businesses redesigning outdated websites',

          'Companies looking for an SEO company',

          'B2B businesses improving organic visibility',

          'eCommerce businesses improving their online store',

          'SaaS companies building scalable websites and platforms',

          'Manufacturers looking for qualified digital leads',

          'Businesses evaluating website development companies',

          'Companies planning technical SEO improvements',

          'Organizations looking for long-term digital growth partners',
        ]}
        finalPara="Case studies can help you understand how different digital problems are approached and what type of strategy may be appropriate for your own business. If your project has similar challenges, VoidMatrix Technology can evaluate your requirements and recommend an appropriate development, SEO, or digital growth approach."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Web Development & SEO Case Studies FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Have a Digital Project in Mind?"
        description="Discuss your website development, SEO, eCommerce, or digital marketing requirements with VoidMatrix Technology."
      />
    </>
  );
}