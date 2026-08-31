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
  title: 'Growth Consulting Company in Mumbai & India | Growth Consulting Services',
  description:
    'VoidMatrix provides growth consulting services in Mumbai and India covering digital growth strategy, SEO, website optimization, conversion optimization, digital marketing, customer acquisition, analytics, and scalable growth planning.',
  path: '/services/growth-consulting',
});


const s_data = serviceData['/services/growth-consulting'];


const contents = [
  {
    id: 'growthconsulting1',
    para: 'Growth consulting is the process of helping businesses identify opportunities to increase customer acquisition, website traffic, conversions, revenue, retention, and overall digital growth. A growth consultant evaluates the business model, target customers, digital presence, marketing channels, product experience, analytics, and growth objectives to create a practical growth strategy.',
  },

  {
    id: 'growthconsulting2',
    para: 'At VoidMatrix, we help businesses connect technology, digital marketing, SEO, website performance, conversion optimization, analytics, and customer acquisition into a structured growth strategy. Our approach focuses on understanding the current business position, target audience, competitive environment, digital assets, available resources, and long-term growth objectives.',
  },

  {
    id: 'growthconsulting3',
    para: 'Businesses often invest in websites, SEO, paid advertising, social media, content marketing, email marketing, and other digital channels without a clear connection between these activities and business outcomes. Growth consulting helps identify priorities, evaluate existing performance, and determine where improvements can create stronger acquisition and conversion opportunities.',
  },

  {
    id: 'growthconsulting4',
    para: 'Our growth consulting services can support businesses from the early growth stage through established digital operations. We can evaluate existing marketing and technology systems, identify growth opportunities, improve conversion journeys, strengthen digital acquisition, and create a roadmap for sustainable growth.',
  },

  {
    id: 'growthconsulting5',
    para: 'Growth does not always require increasing marketing spending. Improving website conversion rates, search visibility, landing pages, customer journeys, technical performance, analytics, retention, and marketing efficiency can also contribute to business growth. We help prioritize these opportunities according to their potential business impact.',
  },

  {
    id: 'growthconsulting6',
    para: 'VoidMatrix provides growth consulting services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Our growth consulting approach can support SaaS companies, eCommerce businesses, marketplaces, service businesses, technology companies, startups, and established organizations looking to improve digital growth.',
  },
];


export default function GrowthConsultingPage() {
  return (
    <>
      {/* HERO */}

      <Hero
        eyebrow="Growth Consulting Company in Mumbai, India"
        title={
          <>
            Build a Growth
            <span className="text-(--primary)"> Strategy That Works.</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Practical growth consulting for customer acquisition, SEO, digital marketing, conversion, and scalable business growth.
                </span>
                <br />
                VoidMatrix helps businesses identify growth opportunities and connect technology, marketing, and customer experience with measurable business objectives.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Growth <span className="text-(--primary)">Strategy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Customer <span className="text-(--primary)">Acquisition</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Conversion <span className="text-(--primary)">Optimization</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Digital <span className="text-(--primary)">Growth</span>
              </span>
            </div>
          </>
        }
      />


      {/* WHAT IS GROWTH CONSULTING */}

      <WhaIsService
        heading="What Is Growth Consulting?"
        contents={contents}
      />


      {/* GROWTH CONSULTING SERVICES */}

      <ServiceCoreSection
        heading="Our Growth Consulting Services"
        intro="We help businesses identify and prioritize growth opportunities across SEO, digital marketing, websites, conversion optimization, customer acquisition, analytics, and digital strategy."
        items={[
          {
            item_link: 'growth-strategy-consulting',
            title: 'Growth Strategy Consulting',
            description:
              'Create a structured growth strategy connecting business objectives with customer acquisition, digital marketing, technology, and conversion opportunities.',
          },

          {
            item_link: 'customer-acquisition-consulting',
            title: 'Customer Acquisition Consulting',
            description:
              'Evaluate acquisition channels, customer journeys, marketing opportunities, and digital touchpoints to improve customer acquisition.',
          },

          {
            item_link: 'digital-growth-consulting',
            title: 'Digital Growth Consulting',
            description:
              'Develop practical strategies across SEO, websites, content, paid marketing, social media, email marketing, and digital customer experiences.',
          },

          {
            item_link: 'conversion-growth-consulting',
            title: 'Conversion Growth Consulting',
            description:
              'Identify opportunities to improve landing pages, websites, user journeys, calls to action, forms, and other conversion points.',
          },

          {
            item_link: 'seo-growth-consulting',
            title: 'SEO Growth Consulting',
            description:
              'Connect technical SEO, on-page SEO, content, local SEO, authority building, and search visibility with business growth objectives.',
          },

          {
            item_link: 'growth-analytics-consulting',
            title: 'Growth Analytics Consulting',
            description:
              'Use analytics, tracking, conversion data, and performance metrics to identify growth opportunities and improve marketing decisions.',
          },
        ]}
        details={[
          {
            item_link_id: 'growth-strategy-consulting',
            heading: 'Growth Strategy Consulting',
            descriptions: [
              {
                para: 'Growth strategy consulting helps businesses determine where growth opportunities exist and how marketing, technology, customer experience, and business operations can support those opportunities.',
              },

              {
                para: 'We evaluate business objectives, target customers, existing digital channels, competitive environment, website performance, acquisition sources, and conversion opportunities.',
              },

              {
                para: 'The objective is to create a practical growth strategy that prioritizes opportunities based on business relevance rather than simply increasing the number of marketing activities.',
              },
            ],
          },

          {
            item_link_id: 'customer-acquisition-consulting',
            heading: 'Customer Acquisition Consulting',
            descriptions: [
              {
                para: 'Customer acquisition consulting focuses on understanding how potential customers discover a business, interact with its digital presence, evaluate its offering, and eventually convert.',
              },

              {
                para: 'We evaluate acquisition channels, landing pages, website journeys, search visibility, advertising opportunities, content, social media, and other digital touchpoints.',
              },

              {
                para: 'The objective is to identify opportunities for improving the efficiency and consistency of the customer acquisition process.',
              },
            ],
          },

          {
            item_link_id: 'digital-growth-consulting',
            heading: 'Digital Growth Consulting',
            descriptions: [
              {
                para: 'Digital growth consulting connects multiple digital channels with business objectives. This can include SEO, website development, content, paid advertising, social media, email marketing, analytics, and conversion optimization.',
              },

              {
                para: 'We evaluate the existing digital presence and identify areas where channels can work together more effectively to support customer acquisition and business growth.',
              },

              {
                para: 'The objective is to create a connected digital growth strategy rather than treating every marketing channel as an independent activity.',
              },
            ],
          },

          {
            item_link_id: 'conversion-growth-consulting',
            heading: 'Conversion Growth Consulting',
            descriptions: [
              {
                para: 'Conversion growth consulting focuses on improving the percentage of website visitors and potential customers who take valuable actions such as submitting an enquiry, requesting a quote, booking a consultation, registering, or purchasing.',
              },

              {
                para: 'We evaluate landing pages, website structure, calls to action, forms, content, user journeys, page performance, and conversion barriers.',
              },

              {
                para: 'The objective is to identify practical improvements that can help businesses generate more value from their existing website traffic and acquisition efforts.',
              },
            ],
          },

          {
            item_link_id: 'seo-growth-consulting',
            heading: 'SEO Growth Consulting',
            descriptions: [
              {
                para: 'SEO growth consulting connects search engine optimization with broader business growth objectives. This can include technical SEO, on-page SEO, content strategy, local SEO, search intent, internal linking, and authority development.',
              },

              {
                para: 'We evaluate search visibility, website structure, target queries, content opportunities, technical issues, and competitive search environments.',
              },

              {
                para: 'The objective is to build a search strategy focused on relevant organic traffic, qualified leads, visibility, and long-term digital growth.',
              },
            ],
          },

          {
            item_link_id: 'growth-analytics-consulting',
            heading: 'Growth Analytics Consulting',
            descriptions: [
              {
                para: 'Growth analytics consulting focuses on using data to understand website performance, acquisition channels, customer behavior, conversions, and marketing effectiveness.',
              },

              {
                para: 'We consider analytics implementation, conversion tracking, key performance indicators, customer journeys, traffic sources, and other relevant performance data.',
              },

              {
                para: 'The objective is to help businesses make growth decisions using measurable performance rather than relying entirely on assumptions.',
              },
            ],
          },
        ]}
      />


      {/* COST */}

      <ServiceCost
        heading="Growth Consulting Cost in India"
        costdesc={[
          {
            para: 'Growth consulting cost in India depends on the scope of consulting, business size, growth objectives, existing digital presence, marketing channels, website performance, analytics requirements, competitive environment, and the number of growth areas that need evaluation.',
          },

          {
            para: 'A business looking for an SEO and website growth strategy will require a different consulting scope from a company that needs complete customer acquisition, digital marketing, conversion optimization, analytics, and growth planning.',
          },

          {
            para: 'Our consulting scope is based on the actual business and growth requirements rather than applying the same consulting package to every organization.',
          },
        ]}
      />


      {/* FACTORS */}

      <ServiceFactors
        heading="Factors That Affect Growth Consulting Cost"
        intro="Growth consulting requirements vary depending on the business model, market, existing digital presence, customer acquisition strategy, and growth objectives."
        facts={[
          'Business size',

          'Business model',

          'Growth objectives',

          'Target market',

          'Competitive environment',

          'Website performance',

          'SEO requirements',

          'Marketing channels',

          'Customer acquisition requirements',

          'Conversion requirements',

          'Analytics requirements',

          'Content requirements',
        ]}
      />


      {/* COMPARISON */}

      <ServiceComp
        heading="Marketing Without a Growth Strategy vs Growth Consulting"
        desc="Running individual marketing activities without a structured growth strategy can result in disconnected campaigns, unclear priorities, inefficient marketing spending, weak conversion journeys, and difficulty measuring business impact. Growth consulting provides a structured approach to customer acquisition, SEO, digital marketing, website performance, conversion optimization, analytics, and growth planning. The objective is not to add more marketing activities, but to identify and prioritize the activities most relevant to the business growth objectives."
      />


      {/* CTA */}

      <CtaButtonRe
        title="Get Growth Consulting Estimate"
        url="/contact"
      />


      {/* APPROACH */}

      <ServiceApproachSection
        heading="Our Growth Consulting Process"
        intro="We follow a structured growth consulting process designed to understand the business, target customers, current digital performance, acquisition channels, and growth objectives before creating recommendations."
        steps={[
          {
            title: 'Business & Growth Discovery',

            description:
              'We understand the business model, target customers, current growth stage, competitive environment, digital presence, and business objectives.',

            points: [
              'Business objectives',

              'Target customers',

              'Growth goals',

              'Market environment',
            ],
          },

          {
            title: 'Digital Performance Analysis',

            description:
              'We evaluate the existing website, SEO, digital channels, customer journeys, analytics, conversion opportunities, and acquisition performance.',

            points: [
              'Website performance',

              'SEO',

              'Digital channels',

              'Analytics',
            ],
          },

          {
            title: 'Growth Opportunity Identification',

            description:
              'We identify opportunities across acquisition, website performance, search visibility, conversion, content, digital marketing, and customer experience.',

            points: [
              'Acquisition opportunities',

              'SEO opportunities',

              'Conversion opportunities',

              'Content opportunities',
            ],
          },

          {
            title: 'Growth Strategy Planning',

            description:
              'We organize growth opportunities into a practical strategy based on business priorities, resources, potential impact, and implementation requirements.',

            points: [
              'Growth priorities',

              'Marketing strategy',

              'Conversion strategy',

              'Channel planning',
            ],
          },

          {
            title: 'Implementation Roadmap',

            description:
              'We create a structured roadmap that organizes growth activities into practical phases and identifies dependencies and priorities.',

            points: [
              'Growth phases',

              'Implementation priorities',

              'Technical requirements',

              'Marketing activities',
            ],
          },

          {
            title: 'Measurement & Scale Planning',

            description:
              'We consider analytics, performance measurement, optimization, customer acquisition efficiency, and future opportunities for scaling growth.',

            points: [
              'Analytics',

              'KPIs',

              'Optimization',

              'Growth scaling',
            ],
          },
        ]}
      />


      {/* MUMBAI / PUNE / INDIA / GLOBAL */}

      <ServiceCost
        heading="Growth Consulting Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, VoidMatrix provides growth consulting across SEO, website performance, digital marketing, conversion optimization, customer acquisition, analytics, and digital growth strategy.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, our growth consulting approach can be adapted to SaaS businesses, eCommerce companies, marketplaces, service businesses, startups, and technology companies.',
          },

          {
            para: 'For businesses targeting the Indian market, we can help structure growth strategies around local search visibility, customer acquisition, website conversion, digital marketing, content, analytics, and customer journeys.',
          },

          {
            para: 'We also provide growth consulting for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global markets.',
          },
        ]}
      />


      {/* SERVICE FIT */}

      <ServiceFitSection
        heading="Who Needs Growth Consulting Services?"
        intro="Growth consulting can help businesses that want to improve customer acquisition, digital performance, conversions, search visibility, marketing efficiency, and sustainable business growth."
        subintro="Our growth consulting services are suitable for:"
        points={[
          'Startups looking for growth strategy',

          'SaaS businesses',

          'eCommerce businesses',

          'Marketplace businesses',

          'Service businesses',

          'Technology companies',

          'Businesses improving SEO',

          'Businesses improving website conversions',

          'Companies scaling digital marketing',

          'Businesses entering new markets',
        ]}
        finalPara="Whether you are trying to increase qualified website traffic, generate more leads, improve conversions, strengthen SEO, optimize digital marketing, or build a scalable customer acquisition strategy, growth consulting can help identify priorities and create a clearer path toward measurable business growth."
      />


      {/* FAQ */}

      <MainServiceFAQ
        heading="Growth Consulting Services FAQs"
        faqs={s_data.faqs}
      />


      {/* FINAL CTA */}

      <MainServiceCTA
        heading="Ready to Build a Stronger Growth Strategy?"
        description="Get practical guidance across SEO, digital marketing, customer acquisition, conversion optimization, analytics, and digital growth."
      />
    </>
  );
}