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
  title: 'Google Ads Management Services in Mumbai & India | PPC Agency',

  description:
    'Google Ads management services for businesses in Mumbai, Pune, and across India. We manage PPC campaigns, search ads, Shopping, Performance Max, conversion tracking, and campaign optimization.',

  path: '/services/google-ads',
});

const s_data = serviceData['/services/google-ads'];

const contents = [
  {
    id: 'googleads1',

    para: 'Google Ads is a paid search advertising platform that allows businesses to reach potential customers when they are actively searching for products, services, or solutions. Unlike organic SEO, Google Ads can place a business in front of high-intent users almost immediately after campaigns are launched.',
  },

  {
    id: 'googleads2',

    para: 'Effective Google Ads management is more than creating advertisements and increasing the budget. Campaign performance depends on keyword selection, search intent, campaign structure, ad relevance, landing page experience, conversion tracking, bidding strategy, negative keywords, and continuous optimization.',
  },

  {
    id: 'googleads3',

    para: 'At VoidMatrix Technology, we provide Google Ads management services for startups, SMEs, SaaS companies, eCommerce businesses, manufacturers, real estate companies, education businesses, healthcare companies, technology companies, and professional service providers.',
  },

  {
    id: 'googleads4',

    para: 'Our Google Ads approach focuses on connecting advertising spend with measurable business outcomes. We track conversions, leads, cost per lead, campaign performance, and other relevant metrics so advertising decisions can be based on actual data rather than impressions or clicks alone.',
  },

  {
    id: 'googleads5',

    para: 'We manage Google Ads campaigns for businesses in Mumbai, Pune, Bangalore, Hyderabad, Delhi, across India, and international markets. Campaigns can be designed for local lead generation, national customer acquisition, eCommerce sales, B2B enquiries, SaaS signups, or other measurable business objectives.',
  },

  {
    id: 'googleads6',

    para: 'Whether you are launching Google Ads for the first time or have an existing campaign that is generating clicks without enough qualified leads, our Google Ads management process focuses on identifying wasted spend, improving targeting, strengthening conversion tracking, and continuously improving campaign performance.',
  },
];

export default function GoogleAdsPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Google Ads Management Services in Mumbai, India"
        title={
          <>
            Turn Google Searches Into <span className="text-(--primary)">Qualified Leads</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Reach customers actively searching for your products and services.
                </span>
                <br />
                VoidMatrix Technology manages Google Ads campaigns with keyword targeting,
                conversion tracking, landing page alignment, and continuous optimization for
                measurable business growth.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Google Ads from <span className="text-(--primary)">₹15,000/month</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Search <span className="text-(--primary)">Ads</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Conversion <span className="text-(--primary)">Tracking</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Continuous <span className="text-(--primary)">Optimization</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS GOOGLE ADS?
      ===================================================== */}

      <WhaIsService heading="What Is Google Ads Management?" contents={contents} />

      {/* =====================================================
          CORE GOOGLE ADS SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Google Ads Management Services"
        intro="We manage Google Ads campaigns around business objectives, search intent, conversion tracking, and measurable advertising performance. Our services cover campaign setup, optimization, targeting, tracking, and ongoing management."
        items={[
          {
            item_link: 'google-search-ads',

            title: 'Google Search Ads',

            description:
              'Create and manage search campaigns targeting high-intent users searching for your products, services, and business solutions.',
          },

          {
            item_link: 'google-shopping-ads',

            title: 'Google Shopping Ads',

            description:
              'Set up and optimize Shopping campaigns that help eCommerce businesses promote products directly within Google search results.',
          },

          {
            item_link: 'performance-max',

            title: 'Performance Max Campaigns',

            description:
              'Manage Performance Max campaigns across Google advertising inventory with structured targeting, conversion tracking, and ongoing optimization.',
          },

          {
            item_link: 'google-ads-keyword-research',

            title: 'Google Ads Keyword Research',

            description:
              'Identify commercial and high-intent search queries while filtering irrelevant searches through strategic negative keyword research.',
          },

          {
            item_link: 'google-ads-campaign-setup',

            title: 'Google Ads Campaign Setup',

            description:
              'Build structured campaigns, ad groups, targeting, bidding strategies, conversion actions, and account structures based on business objectives.',
          },

          {
            item_link: 'google-ads-conversion-tracking',

            title: 'Google Ads Conversion Tracking',

            description:
              'Configure conversion tracking for leads, forms, calls, purchases, enquiries, signups, and other meaningful business actions.',
          },

          {
            item_link: 'google-ads-optimization',

            title: 'Google Ads Optimization',

            description:
              'Continuously analyze campaign performance, search terms, bids, ads, keywords, conversions, and budgets to improve advertising efficiency.',
          },
        ]}
        details={[
          {
            item_link_id: 'google-search-ads',

            heading: 'Google Search Ads',

            descriptions: [
              {
                para: 'Google Search Ads allow businesses to appear when potential customers actively search for relevant products or services. This makes search advertising particularly useful for businesses targeting commercial and transactional search intent.',
              },

              {
                para: 'We structure campaigns around relevant keyword groups, search intent, geographic targeting, ad messaging, landing pages, and conversion objectives.',
              },

              {
                para: 'The objective is to attract relevant searches rather than simply maximize traffic. Search terms, conversion data, and campaign performance are continuously reviewed to improve targeting.',
              },
            ],
          },

          {
            item_link_id: 'google-shopping-ads',

            heading: 'Google Shopping Ads',

            descriptions: [
              {
                para: 'Google Shopping campaigns allow eCommerce businesses to promote products with product images, pricing, and other product information directly in Google search results.',
              },

              {
                para: 'We help businesses structure Shopping campaigns, connect product feeds, configure targeting, monitor product performance, and optimize campaigns based on conversion data.',
              },

              {
                para: 'Shopping optimization can be particularly valuable for eCommerce businesses where users already demonstrate strong product purchase intent through their searches.',
              },
            ],
          },

          {
            item_link_id: 'performance-max',

            heading: 'Performance Max Campaigns',

            descriptions: [
              {
                para: 'Performance Max campaigns can reach customers across multiple Google advertising placements using conversion-focused campaign objectives.',
              },

              {
                para: 'We configure campaign goals, assets, audience signals, conversion tracking, product feeds where relevant, and campaign structure according to the business model.',
              },

              {
                para: 'Performance is reviewed using conversion data, cost metrics, search insights, and other available campaign signals.',
              },
            ],
          },

          {
            item_link_id: 'google-ads-keyword-research',

            heading: 'Google Ads Keyword Research',

            descriptions: [
              {
                para: 'Keyword research is an important part of Google Ads because not every search related to a business represents a valuable customer opportunity.',
              },

              {
                para: 'We identify relevant commercial keywords, long-tail searches, product or service queries, location-based searches, and other high-intent opportunities.',
              },

              {
                para: 'Negative keyword research is also used to reduce irrelevant clicks and help prevent advertising spend from being directed toward searches that do not match the business offering.',
              },
            ],
          },

          {
            item_link_id: 'google-ads-campaign-setup',

            heading: 'Google Ads Campaign Setup',

            descriptions: [
              {
                para: 'A properly structured Google Ads account provides a stronger foundation for optimization and reporting. Campaigns are organized according to products, services, locations, audiences, or other relevant business segments.',
              },

              {
                para: 'Campaign setup can include keyword groups, ad groups, advertisements, geographic targeting, bidding strategies, extensions, conversion actions, negative keywords, and budget allocation.',
              },

              {
                para: 'The structure is designed around the business objective rather than simply replicating generic campaign templates.',
              },
            ],
          },

          {
            item_link_id: 'google-ads-conversion-tracking',

            heading: 'Google Ads Conversion Tracking',

            descriptions: [
              {
                para: 'Conversion tracking helps determine whether advertising traffic is producing meaningful business actions. Depending on the business, conversions can include enquiry forms, phone calls, purchases, bookings, signups, or other defined actions.',
              },

              {
                para: 'Accurate conversion tracking allows campaign decisions to be based on actual business outcomes rather than clicks and impressions alone.',
              },

              {
                para: 'We configure tracking requirements according to the website, advertising objectives, and conversion journey.',
              },
            ],
          },

          {
            item_link_id: 'google-ads-optimization',

            heading: 'Google Ads Optimization',

            descriptions: [
              {
                para: 'Google Ads campaigns require continuous optimization because search behavior, competition, costs, conversion rates, and campaign performance can change over time.',
              },

              {
                para: 'Optimization can include search-term analysis, negative keywords, bid adjustments, budget allocation, ad testing, landing page analysis, keyword performance, and conversion performance.',
              },

              {
                para: 'The goal is to improve the efficiency of advertising spend while maintaining or increasing the volume and quality of relevant conversions.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Google Ads Management Cost in India"
        costdesc={[
          {
            para: 'The cost of Google Ads management depends on advertising budget, number of campaigns, campaign complexity, target locations, competition, number of products or services, tracking requirements, and the level of ongoing optimization required.',
          },

          {
            para: 'Google Ads management fees are separate from the advertising budget paid to Google. A small local campaign may require a relatively simple account structure, while eCommerce, B2B, SaaS, and multi-location campaigns may require more extensive management.',
          },

          {
            para: 'Our Google Ads recommendations are based on your business objectives, target audience, competition, conversion goals, and available advertising budget rather than applying the same management package to every business.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Google Ads Management Cost"
        intro="Google Ads campaigns vary significantly in complexity. These factors influence the level of management and optimization required."
        facts={[
          'Monthly advertising budget',

          'Number of campaigns',

          'Number of products or services',

          'Keyword competition',

          'Target locations',

          'Search volume',

          'Campaign type',

          'eCommerce product count',

          'Conversion tracking requirements',

          'Landing page requirements',

          'Number of target audiences',

          'Ongoing optimization requirements',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL GOOGLE ADS
      ===================================================== */}

      <ServiceComp
        heading="Basic Google Ads Setup vs Professional Campaign Management"
        desc="Basic Google Ads setup often focuses on creating a campaign, selecting a few keywords, writing advertisements, and setting a budget. Professional Google Ads management takes a broader approach by connecting keyword research, search intent, campaign structure, negative keywords, conversion tracking, landing page relevance, bidding strategy, budget allocation, search-term analysis, and continuous optimization. The objective is to make advertising spend work toward measurable business outcomes rather than simply generating clicks."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Google Ads Management Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Google Ads Management Process"
        intro="We follow a structured paid search process that connects business objectives with campaign strategy, relevant search queries, conversion tracking, and continuous optimization."
        steps={[
          {
            title: 'Business & Campaign Analysis',

            description:
              'We understand your products, services, target customers, competitors, locations, business goals, and existing advertising performance.',

            points: [
              'Business analysis',
              'Competitor research',
              'Campaign review',
              'Goal definition',
            ],
          },

          {
            title: 'Keyword & Search Intent Research',

            description:
              'We identify relevant commercial search queries and separate high-intent opportunities from irrelevant or low-value searches.',

            points: [
              'Keyword research',
              'Search intent analysis',
              'Commercial keyword mapping',
              'Negative keyword research',
            ],
          },

          {
            title: 'Campaign Structure & Setup',

            description:
              'We create campaigns and ad groups around relevant products, services, locations, audiences, and business objectives.',

            points: ['Campaign structure', 'Ad groups', 'Targeting', 'Budget allocation'],
          },

          {
            title: 'Ad Creation & Landing Page Alignment',

            description:
              'We create relevant advertisements and align campaign messaging with the landing pages users reach after clicking an ad.',

            points: [
              'Ad copy',
              'Call-to-action optimization',
              'Landing page alignment',
              'Ad relevance',
            ],
          },

          {
            title: 'Conversion Tracking',

            description:
              'We configure meaningful conversion actions so campaign performance can be evaluated using actual business outcomes.',

            points: [
              'Lead tracking',
              'Form tracking',
              'Call tracking',
              'Purchase or signup tracking',
            ],
          },

          {
            title: 'Continuous Campaign Optimization',

            description:
              'We analyze campaign performance and continuously improve keywords, ads, budgets, bids, targeting, search terms, and conversion efficiency.',

            points: [
              'Search-term analysis',
              'Bid optimization',
              'Budget optimization',
              'Performance monitoring',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Google Ads Management Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we manage Google Ads campaigns targeting local customers, commercial searches, service queries, B2B enquiries, eCommerce searches, and other high-intent opportunities relevant to the Mumbai market.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, campaigns can be structured around local markets, regional demand, national search opportunities, and industry-specific customer acquisition.',
          },

          {
            para: 'For businesses targeting customers across India, Google Ads can support national lead generation, eCommerce sales, SaaS acquisition, B2B enquiries, and other measurable business objectives.',
          },

          {
            para: 'We also provide Google Ads management for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other regions. Campaign structures can be adapted to market-specific search behavior, competition, locations, and customer intent.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Google Ads Management Services?"
        intro="Google Ads can be useful for businesses that want immediate visibility for high-intent searches, generate qualified enquiries, promote products, enter competitive markets, or create a measurable paid acquisition channel."
        subintro="Our Google Ads management services are suitable for:"
        points={[
          'Local businesses',

          'B2B companies',

          'SaaS companies',

          'eCommerce businesses',

          'Manufacturers',

          'Real estate businesses',

          'Healthcare businesses',

          'Education companies',

          'Professional service businesses',

          'Technology companies',

          'Startups',

          'Businesses targeting international markets',
        ]}
        finalPara="Whether you are launching your first Google Ads campaign or trying to improve an existing account, a structured PPC strategy can help connect advertising spend with measurable leads, sales, enquiries, and other business outcomes."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="Google Ads Management Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Turn Google Searches Into Business Opportunities"
        description="Build and optimize Google Ads campaigns designed around qualified traffic, measurable conversions, and sustainable advertising performance."
      />
    </>
  );
}
