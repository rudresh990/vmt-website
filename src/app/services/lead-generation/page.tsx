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
  title: 'Lead Generation Company in Mumbai & India | Lead Generation Services',

  description:
    'Generate qualified leads with professional lead generation services using SEO, landing pages, paid campaigns, conversion optimization, and targeted digital marketing.',

  path: '/services/lead-generation',
});

const s_data = serviceData['/services/lead-generation'];

const contents = [
  {
    id: 'leadgen1',

    para: 'Lead generation is the process of attracting potential customers and converting their interest into qualified business enquiries. A strong lead generation strategy connects the right audience with relevant offers, landing pages, forms, calls to action, and follow-up processes so businesses can consistently generate opportunities for sales.',
  },

  {
    id: 'leadgen2',

    para: 'Effective lead generation is more than simply collecting contact forms. It requires understanding the target audience, identifying high-intent search queries and channels, creating relevant landing experiences, reducing conversion friction, and building a process for turning enquiries into genuine business opportunities.',
  },

  {
    id: 'leadgen3',

    para: 'At VoidMatrix Technology, we provide lead generation services for businesses, SaaS companies, manufacturers, professional service providers, B2B companies, eCommerce businesses, startups, and growing organizations targeting customers across Mumbai, Pune, India, and international markets.',
  },

  {
    id: 'leadgen4',

    para: 'Our lead generation approach can combine SEO, landing page development, website optimization, Google Ads, Meta Ads, content, conversion-focused copy, analytics, and campaign optimization depending on the business model and customer acquisition requirements.',
  },

  {
    id: 'leadgen5',

    para: 'We focus on generating relevant enquiries rather than simply increasing traffic or form submissions. Lead quality, search intent, targeting, conversion rates, landing page experience, and the business value of each enquiry are important parts of the strategy.',
  },

  {
    id: 'leadgen6',

    para: 'We provide lead generation services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Strategies can be designed for local businesses, B2B companies, manufacturers, SaaS businesses, professional services, and organizations targeting specific industries or customer segments.',
  },
];

export default function LeadGenerationPage() {
  return (
    <>
      <Hero
        eyebrow="Lead Generation Company in Mumbai, India"
        title={
          <>
            Generate More <span className="text-(--primary)">Qualified Leads</span> With
            Performance-Focused <span className="text-(--primary)">Lead Generation</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Build a predictable flow of qualified business enquiries.
                </span>
                <br />
                VoidMatrix Technology combines SEO, paid campaigns, landing pages, and conversion
                optimization to help businesses generate better leads.
              </p>
            </div>
            {/* <CtaButtonRe title="Get Lead Generation Estimate" url="/contact" /> */}
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Qualified <span className="text-(--primary)">Leads</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Conversion-Focused <span className="text-(--primary)">Landing Pages</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                SEO & <span className="text-(--primary)">Paid Acquisition</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Long-Term <span className="text-(--primary)">Growth</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS LEAD GENERATION?
      ===================================================== */}

      <WhaIsService heading="What Is Lead Generation?" contents={contents} />

      {/* =====================================================
          CORE LEAD GENERATION SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Lead Generation Services"
        intro="We build lead generation systems that connect audience targeting, acquisition channels, landing pages, conversion optimization, and measurable business outcomes. Our strategy is designed around the type of customer you want to acquire and the actions that create genuine sales opportunities."
        items={[
          {
            item_link: 'seo-lead-generation',

            title: 'SEO Lead Generation',

            description:
              'Attract high-intent organic traffic and convert relevant search users into business enquiries through search-focused website optimization.',
          },

          {
            item_link: 'landing-page-lead-generation',

            title: 'Landing Page Lead Generation',

            description:
              'Create focused landing experiences designed around specific campaigns, audiences, offers, and conversion goals.',
          },

          {
            item_link: 'google-ads-lead-generation',

            title: 'Google Ads Lead Generation',

            description:
              'Target high-intent searches with conversion-focused paid campaigns designed to generate relevant enquiries.',
          },

          {
            item_link: 'meta-ads-lead-generation',

            title: 'Meta Ads Lead Generation',

            description:
              'Reach targeted audiences through Facebook and Instagram campaigns with lead forms, landing pages, and conversion-focused advertising.',
          },

          {
            item_link: 'conversion-optimization',

            title: 'Lead Conversion Optimization',

            description:
              'Improve forms, calls to action, page structure, messaging, and user journeys to increase the percentage of visitors who become leads.',
          },

          {
            item_link: 'b2b-lead-generation',

            title: 'B2B Lead Generation',

            description:
              'Build targeted lead generation strategies for B2B companies, manufacturers, SaaS businesses, and professional service providers.',
          },

          {
            item_link: 'lead-tracking-analytics',

            title: 'Lead Tracking & Analytics',

            description:
              'Track lead sources, campaigns, conversions, and acquisition performance to understand which channels generate valuable enquiries.',
          },
        ]}
        details={[
          {
            item_link_id: 'seo-lead-generation',

            heading: 'SEO Lead Generation',

            descriptions: [
              {
                para: 'SEO can become a long-term source of qualified leads when website pages are optimized around relevant commercial and high-intent search queries. We identify the searches potential customers use when researching products, services, companies, solutions, and providers.',
              },

              {
                para: 'We optimize relevant service pages, location pages, landing pages, content, internal links, metadata, and website structure so organic search traffic has a clear path toward conversion.',
              },

              {
                para: 'SEO lead generation is particularly valuable for businesses that want to build sustainable organic acquisition rather than relying entirely on paid advertising.',
              },
            ],
          },

          {
            item_link_id: 'landing-page-lead-generation',

            heading: 'Landing Page Lead Generation',

            descriptions: [
              {
                para: 'Landing pages provide a focused experience for users arriving from search engines, advertisements, email campaigns, social media, and other acquisition channels.',
              },

              {
                para: 'We structure landing pages around a specific audience, offer, search intent, value proposition, trust signals, objections, and conversion action rather than sending every campaign visitor to a generic website page.',
              },

              {
                para: 'Landing page development can include enquiry forms, call-to-action sections, service information, testimonials, FAQs, trust elements, and conversion-focused page structure.',
              },
            ],
          },

          {
            item_link_id: 'google-ads-lead-generation',

            heading: 'Google Ads Lead Generation',

            descriptions: [
              {
                para: 'Google Ads can capture users who are actively searching for products, services, solutions, and providers. We structure campaigns around relevant search intent and business objectives.',
              },

              {
                para: 'Campaigns can include keyword targeting, ad groups, conversion tracking, negative keywords, landing page alignment, audience targeting, and ongoing optimization.',
              },

              {
                para: 'The objective is to improve the quality of paid traffic and create a measurable path from search query to advertisement, landing page, enquiry, and sales opportunity.',
              },
            ],
          },

          {
            item_link_id: 'meta-ads-lead-generation',

            heading: 'Meta Ads Lead Generation',

            descriptions: [
              {
                para: 'Meta Ads can help businesses reach defined customer segments across Facebook and Instagram based on audience characteristics, interests, behaviours, engagement, and campaign objectives.',
              },

              {
                para: 'We can structure campaigns around lead forms, website conversions, remarketing, audience testing, creative testing, and campaign-specific landing pages.',
              },

              {
                para: 'Performance is evaluated based on lead quality and conversion outcomes rather than relying only on impressions, clicks, or low-cost form submissions.',
              },
            ],
          },

          {
            item_link_id: 'conversion-optimization',

            heading: 'Lead Conversion Optimization',

            descriptions: [
              {
                para: 'Generating website traffic is only one part of customer acquisition. Conversion optimization focuses on improving the percentage of relevant visitors who take the desired action.',
              },

              {
                para: 'We review page messaging, CTA placement, forms, navigation, trust signals, content hierarchy, page speed, mobile experience, and other conversion barriers that may prevent users from enquiring.',
              },

              {
                para: 'The objective is to create a clearer and more efficient journey from initial interest to completed enquiry.',
              },
            ],
          },

          {
            item_link_id: 'b2b-lead-generation',

            heading: 'B2B Lead Generation',

            descriptions: [
              {
                para: 'B2B lead generation often involves longer decision cycles, multiple decision-makers, higher-value transactions, and more specific search requirements. We build acquisition strategies around these characteristics.',
              },

              {
                para: 'Strategies can include SEO service pages, industry-specific landing pages, Google Ads, content, enquiry forms, case studies, product pages, and other assets designed to support B2B research and commercial evaluation.',
              },

              {
                para: 'For manufacturers and specialized businesses, lead generation can also focus on product categories, applications, industries served, locations, technical requirements, and commercial search intent.',
              },
            ],
          },

          {
            item_link_id: 'lead-tracking-analytics',

            heading: 'Lead Tracking & Analytics',

            descriptions: [
              {
                para: 'Lead generation should be measurable. We help businesses understand where enquiries originate and which acquisition channels, campaigns, landing pages, and search queries contribute to conversions.',
              },

              {
                para: 'Tracking can include website form submissions, calls, campaign conversions, landing page performance, traffic sources, and other relevant conversion actions.',
              },

              {
                para: 'Better measurement allows businesses to make informed decisions about where to invest their marketing budget and which acquisition activities require improvement.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Lead Generation Cost in India"
        costdesc={[
          {
            para: 'The cost of lead generation depends on the acquisition channels used, target market, competition, customer acquisition goals, website condition, landing page requirements, advertising budget, content requirements, and level of ongoing optimization.',
          },

          {
            para: 'A local business targeting a specific city may require a different lead generation strategy from a B2B manufacturer targeting multiple Indian states or an international SaaS company competing in global search markets.',
          },

          {
            para: 'Our lead generation recommendations are based on the actual business model, target audience, acquisition channels, and conversion requirements. This allows the strategy to focus investment on activities that are relevant to generating qualified business opportunities.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Lead Generation Cost"
        intro="Every business has different customer acquisition requirements. These factors influence the scope, strategy, and investment required for lead generation."
        facts={[
          'Target audience and industry',

          'Geographic market',

          'Keyword competition',

          'Paid advertising competition',

          'Monthly advertising budget',

          'Number of products or services',

          'Landing page requirements',

          'Website conversion rate',

          'Content requirements',

          'SEO requirements',

          'Lead tracking and analytics',

          'CRM and lead management requirements',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL LEAD GENERATION
      ===================================================== */}

      <ServiceComp
        heading="Basic Lead Generation vs Professional Lead Generation"
        desc="Basic lead generation often focuses on increasing traffic, running advertisements, or adding a contact form to a website. Professional lead generation connects audience research, acquisition channels, search intent, landing pages, messaging, conversion optimization, tracking, and lead quality. The objective is not simply to generate more enquiries but to create a measurable system that attracts relevant prospects and gives the business a stronger opportunity to convert them into customers."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Lead Generation Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Lead Generation Process"
        intro="We follow a structured process to understand your business, identify the right acquisition opportunities, create conversion-focused experiences, and continuously improve lead generation performance."
        steps={[
          {
            title: 'Business & Audience Analysis',

            description:
              'We understand your products, services, target customers, geographic markets, competitors, sales process, and business objectives before selecting acquisition channels.',

            points: [
              'Business analysis',

              'Audience research',

              'Competitor analysis',

              'Customer journey',
            ],
          },

          {
            title: 'Lead Generation Strategy',

            description:
              'We identify the most relevant organic, paid, content, landing page, and digital marketing opportunities based on your audience and commercial goals.',

            points: [
              'Channel selection',

              'Search intent research',

              'Campaign planning',

              'Lead funnel strategy',
            ],
          },

          {
            title: 'Landing Page & Conversion Setup',

            description:
              'We create or optimize the pages and conversion points that turn relevant visitors into enquiries.',

            points: [
              'Landing page optimization',

              'CTA optimization',

              'Form optimization',

              'Conversion tracking',
            ],
          },

          {
            title: 'Campaign & SEO Implementation',

            description:
              'We implement the selected acquisition strategy across SEO, Google Ads, Meta Ads, content, landing pages, and other relevant channels.',

            points: [
              'SEO implementation',

              'Paid campaign setup',

              'Content implementation',

              'Audience targeting',
            ],
          },

          {
            title: 'Lead Tracking & Measurement',

            description:
              'We establish measurement around the actions that matter so the business can understand where leads originate and how campaigns perform.',

            points: [
              'Conversion tracking',

              'Lead source tracking',

              'Campaign measurement',

              'Performance reporting',
            ],
          },

          {
            title: 'Continuous Optimization',

            description:
              'We review campaign and website performance to identify opportunities for improving lead quality, conversion rates, acquisition efficiency, and overall marketing performance.',

            points: [
              'Conversion analysis',

              'Campaign optimization',

              'Landing page improvements',

              'Lead quality analysis',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Lead Generation Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we build lead generation strategies around local commercial searches, service pages, landing pages, Google Ads, Meta Ads, and conversion-focused website experiences designed to attract relevant customers from the Mumbai market.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, we can develop location-aware lead generation strategies based on the markets, industries, and customer segments the business wants to reach.',
          },

          {
            para: 'For companies targeting customers across India, we combine SEO, paid acquisition, landing pages, content, and conversion optimization around national commercial searches and industry-specific customer acquisition opportunities.',
          },

          {
            para: 'We also provide lead generation services for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other regions. International campaigns can be structured around the target market, audience, competition, language, search behaviour, and business offering.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Lead Generation Services?"
        intro="Lead generation can benefit businesses that depend on a consistent flow of qualified enquiries to support sales and business growth."
        subintro="Our lead generation services are suitable for:"
        points={[
          'B2B companies looking for qualified business enquiries',

          'Manufacturers targeting distributors and buyers',

          'SaaS companies acquiring demos and product enquiries',

          'Professional service businesses',

          'Local businesses targeting Mumbai, Pune, and other cities',

          'Startups building their customer acquisition pipeline',

          'Businesses running Google Ads or Meta Ads',

          'Companies with website traffic but low conversions',

          'Businesses launching new products or services',

          'Companies expanding into new Indian or international markets',
        ]}
        finalPara="Whether you need more enquiries from organic search, paid advertising, landing pages, or a combination of channels, a structured lead generation strategy can create a clearer path from audience discovery to qualified business opportunity."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="Lead Generation Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Generate More Qualified Leads?"
        description="Get your business reviewed for lead generation opportunities across SEO, paid campaigns, landing pages, and conversion optimization."
      />
    </>
  );
}
