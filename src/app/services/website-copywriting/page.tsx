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
  title: 'Website Copywriting Services in Mumbai & India | VoidMatrix',

  description:
    'Website copywriting services for businesses that need clear, persuasive and SEO-friendly website content designed to attract visitors, build trust and generate leads.',

  path: '/services/website-copywriting',
});

const s_data = serviceData['/services/website-copywriting'];

const contents = [
  {
    id: 'webcopy1',

    para: 'Website copywriting is the process of creating clear, persuasive and purposeful content for the pages of a website. Effective website copy communicates what a business offers, explains its value, addresses customer needs, builds trust and guides visitors toward meaningful actions.',
  },

  {
    id: 'webcopy2',

    para: 'Good website copy is more than writing attractive sentences. It combines audience research, business positioning, search intent, messaging, content structure, user experience and conversion objectives to create pages that are useful for both visitors and search engines.',
  },

  {
    id: 'webcopy3',

    para: 'At VoidMatrix, we provide website copywriting services for SaaS companies, technology businesses, eCommerce websites, manufacturers, professional service companies, startups, local businesses and established organizations targeting customers in Mumbai, Pune, India and global markets.',
  },

  {
    id: 'webcopy4',

    para: 'Our website copywriting process considers the purpose of every page and how it fits into the overall website journey. We can create content for homepages, service pages, product pages, industry pages, location pages, about pages, landing pages and other important website sections.',
  },

  {
    id: 'webcopy5',

    para: 'Website copy can also support SEO when it is structured around relevant search queries, useful information and clear page intent. We combine conversion-focused messaging with SEO considerations so that website content can communicate effectively while supporting organic search visibility.',
  },

  {
    id: 'webcopy6',

    para: 'VoidMatrix provides website copywriting services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India and international markets. Content can be adapted for B2B, B2C, SaaS, technology, manufacturing, eCommerce, professional services and other industries.',
  },
];

export default function WebsiteCopywritingPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Website Copywriting Services in Mumbai, India"
        title={
          <>
            Turn Website Visitors Into
            <span className="text-(--primary)"> Customers</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Clear messaging. Strong positioning. Better conversion.
                </span>
                <br />
                VoidMatrix provides professional website copywriting services for businesses that
                need persuasive, SEO-friendly and customer-focused website content across Mumbai,
                Pune, India and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Website <span className="text-(--primary)">Copywriting</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Conversion <span className="text-(--primary)">Copy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                SEO <span className="text-(--primary)">Content</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Lead <span className="text-(--primary)">Generation</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS WEBSITE COPYWRITING?
      ===================================================== */}

      <WhaIsService heading="What Is Website Copywriting?" contents={contents} />

      {/* =====================================================
          CORE WEBSITE COPYWRITING SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Website Copywriting Services"
        intro="We create website content that combines clear communication, customer-focused messaging, SEO considerations and conversion objectives to help businesses communicate their value effectively."
        items={[
          {
            item_link: 'homepage-copywriting',

            title: 'Homepage Copywriting',

            description:
              'Create clear homepage messaging that communicates your business, value proposition, services and next step within seconds.',
          },

          {
            item_link: 'service-page-copywriting',

            title: 'Service Page Copywriting',

            description:
              'Write detailed service pages that explain your offering, address customer needs, support SEO and encourage qualified enquiries.',
          },

          {
            item_link: 'landing-page-copywriting',

            title: 'Landing Page Copywriting',

            description:
              'Create focused landing page copy designed around a specific campaign, audience, search intent, product or conversion objective.',
          },

          {
            item_link: 'product-page-copywriting',

            title: 'Product Page Copywriting',

            description:
              'Write product-focused content that explains features, benefits, use cases, differentiators and reasons for customers to take action.',
          },

          {
            item_link: 'b2b-website-copywriting',

            title: 'B2B Website Copywriting',

            description:
              'Develop professional B2B website messaging that explains complex products and services clearly while supporting longer customer journeys.',
          },

          {
            item_link: 'seo-website-copywriting',

            title: 'SEO Website Copywriting',

            description:
              'Create website content structured around relevant search queries, search intent, page relevance, internal linking and on-page SEO requirements.',
          },

          {
            item_link: 'conversion-copywriting',

            title: 'Conversion Copywriting',

            description:
              'Improve website messaging, calls to action, value propositions and page structure to help turn qualified visitors into enquiries and customers.',
          },
        ]}
        details={[
          {
            item_link_id: 'homepage-copywriting',

            heading: 'Homepage Copywriting',

            descriptions: [
              {
                para: 'Your homepage often provides the first meaningful interaction between your business and a potential customer. We create homepage copy that quickly communicates who you serve, what you provide, why it matters and what visitors should do next.',
              },

              {
                para: 'The content can include value propositions, service summaries, trust messaging, customer benefits, differentiators, calls to action and supporting information based on the business and audience.',
              },

              {
                para: 'The objective is to make the homepage easy to understand without overwhelming visitors with unnecessary information.',
              },
            ],
          },

          {
            item_link_id: 'service-page-copywriting',

            heading: 'Service Page Copywriting',

            descriptions: [
              {
                para: 'Service pages need to explain what a business actually provides while answering the questions potential customers may have before making an enquiry.',
              },

              {
                para: 'We structure service page content around the service, customer problems, benefits, process, differentiators, use cases, FAQs and relevant calls to action.',
              },

              {
                para: 'Where appropriate, service page copy is also structured around relevant search intent and SEO opportunities so that the page can support both organic visibility and conversion.',
              },
            ],
          },

          {
            item_link_id: 'landing-page-copywriting',

            heading: 'Landing Page Copywriting',

            descriptions: [
              {
                para: 'Landing pages usually have a specific purpose, such as generating leads, promoting a service, supporting an advertising campaign, or targeting a particular audience or search query.',
              },

              {
                para: 'We develop focused messaging around the intended audience, problem, solution, benefits, proof points, objections and desired action.',
              },

              {
                para: 'The page structure is designed to keep the visitor focused on the intended conversion rather than introducing unnecessary distractions.',
              },
            ],
          },

          {
            item_link_id: 'product-page-copywriting',

            heading: 'Product Page Copywriting',

            descriptions: [
              {
                para: 'Product pages need to explain what a product does and why it is relevant to the customer. We create content that communicates features, benefits, use cases, differentiators and important product information.',
              },

              {
                para: 'For eCommerce and technology businesses, product copy can also incorporate relevant search terms, structured information, FAQs and internal linking opportunities.',
              },

              {
                para: 'The objective is to help visitors understand the product and move closer to an informed purchasing decision.',
              },
            ],
          },

          {
            item_link_id: 'b2b-website-copywriting',

            heading: 'B2B Website Copywriting',

            descriptions: [
              {
                para: 'B2B products and services can be complex, technical or involve longer decision-making processes. Website copy needs to explain these offerings clearly without removing important business or technical context.',
              },

              {
                para: 'We create B2B website content around business problems, solutions, capabilities, industries, use cases, processes, differentiators and customer outcomes.',
              },

              {
                para: 'The messaging can be structured to support different stakeholders involved in a B2B buying process.',
              },
            ],
          },

          {
            item_link_id: 'seo-website-copywriting',

            heading: 'SEO Website Copywriting',

            descriptions: [
              {
                para: 'SEO website copywriting combines website messaging with search-focused content requirements. We identify the purpose of a page and develop content around relevant search queries and user intent.',
              },

              {
                para: 'This can include title and heading recommendations, content structure, keyword targeting, internal linking opportunities, FAQs and other on-page SEO considerations.',
              },

              {
                para: 'The objective is not to fill pages with keywords but to create useful content that clearly addresses the needs behind relevant searches.',
              },
            ],
          },

          {
            item_link_id: 'conversion-copywriting',

            heading: 'Conversion Copywriting',

            descriptions: [
              {
                para: 'Conversion copywriting focuses on helping visitors understand the value of an offering and encouraging an appropriate next action.',
              },

              {
                para: 'We review value propositions, headlines, benefits, objections, trust signals, calls to action and page structure to identify opportunities to make the messaging clearer and more persuasive.',
              },

              {
                para: 'The approach is based on the target audience, business model, offer, buying journey and intended conversion rather than using generic sales language.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Website Copywriting Cost in India"
        costdesc={[
          {
            para: 'Website copywriting costs in India depend on the number of pages, research requirements, industry complexity, content length, SEO requirements, conversion strategy and level of customization required.',
          },

          {
            para: 'A small business website may require copy for a homepage, services, about and contact pages, while a larger SaaS, eCommerce, B2B or enterprise website may require content across dozens or hundreds of pages.',
          },

          {
            para: 'Our website copywriting approach is based on the actual requirements of the website. This allows content to be planned according to business objectives, target audience, search opportunities and conversion requirements instead of applying a generic word-count package.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Website Copywriting Cost"
        intro="The amount of research and writing required varies depending on the website, industry, audience and content objectives."
        facts={[
          'Number of website pages',

          'Content length',

          'Industry complexity',

          'Audience research',

          'Competitor research',

          'SEO requirements',

          'Conversion strategy',

          'Technical subject matter',

          'Number of products or services',

          'Number of target markets',

          'Content revisions',

          'Website architecture',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL COPYWRITING
      ===================================================== */}

      <ServiceComp
        heading="Basic Website Content vs Professional Website Copywriting"
        desc="Basic website content often focuses on describing a business, product or service. Professional website copywriting goes further by considering the target audience, positioning, customer problems, value proposition, search intent, page structure, objections, trust, calls to action and conversion goals. The objective is to create content that communicates clearly and helps visitors understand why they should consider your business."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Website Copywriting Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Website Copywriting Process"
        intro="We follow a structured process to understand your business, audience and website objectives before creating content for important website pages."
        steps={[
          {
            title: 'Business & Audience Research',

            description:
              'We understand your business, services, customers, positioning, competitors and the problems your website needs to communicate.',

            points: [
              'Business research',

              'Audience analysis',

              'Competitor review',

              'Value proposition',
            ],
          },

          {
            title: 'Website & Search Analysis',

            description:
              'We review the existing website structure and relevant search opportunities to understand what each page should communicate.',

            points: ['Website analysis', 'Keyword research', 'Search intent', 'Page purpose'],
          },

          {
            title: 'Content Strategy',

            description:
              'We define the messaging, page structure, information hierarchy and content requirements before writing the final copy.',

            points: [
              'Content planning',

              'Page structure',

              'Messaging strategy',

              'Content hierarchy',
            ],
          },

          {
            title: 'Website Copywriting',

            description:
              'We write clear and persuasive content around the needs of the target audience while maintaining the intended brand positioning.',

            points: ['Website copy', 'Value propositions', 'Benefits', 'Calls to action'],
          },

          {
            title: 'SEO & Conversion Optimization',

            description:
              'We review the content for search relevance, readability, page intent, internal linking opportunities and conversion-focused messaging.',

            points: [
              'SEO review',

              'Content optimization',

              'Conversion messaging',

              'Internal linking',
            ],
          },

          {
            title: 'Review & Final Optimization',

            description:
              'We review the finished content for clarity, consistency, accuracy, structure and alignment with the website objectives before final delivery.',

            points: [
              'Content review',

              'Quality check',

              'Messaging consistency',

              'Final optimization',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Website Copywriting Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, VoidMatrix creates website copy for technology companies, SaaS businesses, manufacturers, professional services, startups, eCommerce businesses and local organizations targeting customers in Mumbai and surrounding markets.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad and other Indian cities, website messaging can be developed around local industries, B2B services, technology products, professional services and other business requirements.',
          },

          {
            para: 'For businesses targeting customers across India, we create website copy that can combine clear commercial messaging with SEO considerations around relevant national search queries and customer needs.',
          },

          {
            para: 'We also provide website copywriting for businesses targeting international markets including the USA, UK, UAE, Europe, Australia and other regions. Content can be adapted according to the target market, audience, terminology, positioning and business model.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Website Copywriting Services?"
        intro="Professional website copywriting is useful for businesses that need clearer positioning, stronger messaging, better page structure or content that connects their services with customer needs."
        subintro="Our website copywriting services are suitable for:"
        points={[
          'SaaS companies',

          'Technology companies',

          'eCommerce businesses',

          'B2B companies',

          'Manufacturers',

          'Professional service businesses',

          'Startups',

          'Local businesses',

          'Corporate websites',

          'Businesses targeting international markets',
        ]}
        finalPara="Whether you are launching a new website, redesigning an existing website or improving conversion performance, professional website copy can help communicate your value more clearly and create a stronger customer journey."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="Website Copywriting Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Give Your Website Better Words"
        description="Create website content that clearly communicates your value and moves visitors toward action."
      />
    </>
  );
}
