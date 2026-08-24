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
  title: 'Meta Ads Management Services in Mumbai & India | Facebook & Instagram Ads',

  description:
    'Meta Ads management services for businesses in Mumbai, Pune, and across India. We manage Facebook and Instagram advertising, lead generation, retargeting, conversion tracking, and campaign optimization.',

  path: '/services/meta-ads',
});

const s_data = serviceData['/services/meta-ads'];

const contents = [
  {
    id: 'metaads1',

    para: 'Meta Ads is a paid advertising platform that allows businesses to reach potential customers across Facebook, Instagram, and other Meta placements. Businesses can use Meta advertising to generate leads, promote products, increase website traffic, build awareness, and drive measurable conversions.',
  },

  {
    id: 'metaads2',

    para: 'Effective Meta Ads management requires more than creating an advertisement and selecting an audience. Campaign performance depends on audience targeting, creative strategy, campaign structure, conversion tracking, retargeting, landing page experience, budget allocation, and continuous testing.',
  },

  {
    id: 'metaads3',

    para: 'At VoidMatrix Technology, we provide Meta Ads management services for startups, SMEs, eCommerce businesses, SaaS companies, manufacturers, real estate businesses, education companies, healthcare businesses, technology companies, and professional service providers.',
  },

  {
    id: 'metaads4',

    para: 'Our Meta advertising strategy focuses on connecting campaigns with measurable business objectives. We track leads, purchases, enquiries, registrations, and other meaningful conversion actions so advertising decisions are based on business performance rather than impressions or engagement alone.',
  },

  {
    id: 'metaads5',

    para: 'We manage Facebook and Instagram advertising campaigns for businesses in Mumbai, Pune, Bangalore, Hyderabad, Delhi, across India, and international markets. Campaigns can be designed for local lead generation, eCommerce sales, B2B enquiries, remarketing, customer acquisition, or brand growth.',
  },

  {
    id: 'metaads6',

    para: 'Whether you are launching Meta Ads for the first time or have an existing campaign that is generating engagement without enough qualified leads or sales, our process focuses on improving audience targeting, creative performance, conversion tracking, retargeting, and advertising efficiency.',
  },
];

export default function MetaAdsPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Meta Ads Management Services in Mumbai, India"
        title={
          <>
            Reach The Right Audience With <span className="text-(--primary)">Meta Ads</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Generate qualified leads, sales, and customer enquiries through Facebook and
                  Instagram advertising.
                </span>
                <br />
                VoidMatrix Technology manages Meta Ads campaigns with audience targeting, creative
                testing, conversion tracking, retargeting, and continuous optimization.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Meta Ads from <span className="text-(--primary)">₹15,000/month</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Facebook <span className="text-(--primary)">Ads</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Instagram <span className="text-(--primary)">Ads</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Conversion <span className="text-(--primary)">Tracking</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS META ADS?
      ===================================================== */}

      <WhaIsService heading="What Is Meta Ads Management?" contents={contents} />

      {/* =====================================================
          CORE META ADS SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Meta Ads Management Services"
        intro="We manage Meta advertising campaigns around business objectives, audience intent, creative performance, conversion tracking, and measurable customer acquisition. Our services cover campaign setup, targeting, creative testing, retargeting, tracking, and ongoing optimization."
        items={[
          {
            item_link: 'facebook-ads',

            title: 'Facebook Ads Management',

            description:
              'Create and manage Facebook advertising campaigns designed to reach relevant audiences and generate leads, sales, enquiries, and other business outcomes.',
          },

          {
            item_link: 'instagram-ads',

            title: 'Instagram Ads Management',

            description:
              'Run targeted Instagram advertising campaigns using relevant creative formats, audience targeting, retargeting, and conversion-focused campaign objectives.',
          },

          {
            item_link: 'meta-lead-generation',

            title: 'Meta Lead Generation Ads',

            description:
              'Build lead generation campaigns designed to capture customer enquiries through Meta lead forms, landing pages, websites, and other conversion journeys.',
          },

          {
            item_link: 'meta-ads-targeting',

            title: 'Meta Ads Audience Targeting',

            description:
              'Develop audience strategies using relevant demographics, interests, behaviors, customer data, lookalike audiences, and retargeting opportunities.',
          },

          {
            item_link: 'meta-retargeting',

            title: 'Meta Retargeting Campaigns',

            description:
              'Reconnect with website visitors, previous customers, engaged users, and other warm audiences through structured Facebook and Instagram remarketing campaigns.',
          },

          {
            item_link: 'meta-ads-conversion-tracking',

            title: 'Meta Ads Conversion Tracking',

            description:
              'Configure conversion tracking to measure leads, purchases, enquiries, registrations, and other meaningful customer actions generated through Meta campaigns.',
          },

          {
            item_link: 'meta-ads-optimization',

            title: 'Meta Ads Optimization',

            description:
              'Continuously analyze audiences, creatives, placements, campaigns, budgets, and conversions to improve advertising efficiency and campaign performance.',
          },
        ]}
        details={[
          {
            item_link_id: 'facebook-ads',

            heading: 'Facebook Ads Management',

            descriptions: [
              {
                para: 'Facebook Ads allow businesses to reach relevant audiences through targeted advertising campaigns across the Meta ecosystem.',
              },

              {
                para: 'We structure campaigns around business objectives, audience segments, creative messaging, geographic targeting, conversion goals, and available advertising budgets.',
              },

              {
                para: 'Campaign performance is continuously reviewed using conversion data, audience performance, creative results, and other relevant advertising metrics.',
              },
            ],
          },

          {
            item_link_id: 'instagram-ads',

            heading: 'Instagram Ads Management',

            descriptions: [
              {
                para: 'Instagram advertising helps businesses reach potential customers through visual and interactive advertising formats across Instagram placements.',
              },

              {
                para: 'We develop campaign structures and targeting strategies based on the business objective, customer profile, creative format, and conversion journey.',
              },

              {
                para: 'Instagram campaign performance can be improved through creative testing, audience analysis, retargeting, placement optimization, and conversion tracking.',
              },
            ],
          },

          {
            item_link_id: 'meta-lead-generation',

            heading: 'Meta Lead Generation Ads',

            descriptions: [
              {
                para: 'Meta lead generation campaigns allow businesses to capture customer information through forms and other conversion journeys directly connected with advertising campaigns.',
              },

              {
                para: 'We structure lead campaigns around customer intent, audience targeting, lead quality, messaging, forms, landing pages, and follow-up requirements.',
              },

              {
                para: 'The objective is to generate relevant enquiries rather than simply maximize the number of submitted forms.',
              },
            ],
          },

          {
            item_link_id: 'meta-ads-targeting',

            heading: 'Meta Ads Audience Targeting',

            descriptions: [
              {
                para: 'Audience targeting is a critical part of Meta advertising because campaign performance depends heavily on reaching people who are relevant to the business offering.',
              },

              {
                para: 'We can structure audiences around demographics, interests, behaviors, geographic locations, website visitors, customer lists, engaged users, and other relevant audience signals.',
              },

              {
                para: 'Where appropriate, lookalike and retargeting audiences can also be incorporated into the campaign strategy.',
              },
            ],
          },

          {
            item_link_id: 'meta-retargeting',

            heading: 'Meta Retargeting Campaigns',

            descriptions: [
              {
                para: 'Retargeting allows businesses to reconnect with people who have already interacted with their website, advertisements, social media profiles, products, or other digital properties.',
              },

              {
                para: 'We create retargeting strategies for different stages of the customer journey, including website visitors, engaged users, previous customers, and users who interacted with specific products or services.',
              },

              {
                para: 'Retargeting can help businesses maintain visibility among warm audiences and encourage users to return and complete a desired action.',
              },
            ],
          },

          {
            item_link_id: 'meta-ads-conversion-tracking',

            heading: 'Meta Ads Conversion Tracking',

            descriptions: [
              {
                para: 'Conversion tracking helps determine whether Meta advertising campaigns are generating meaningful business outcomes rather than only impressions, reach, or engagement.',
              },

              {
                para: 'Depending on the business, conversions can include lead submissions, purchases, registrations, bookings, enquiries, or other defined customer actions.',
              },

              {
                para: 'We configure tracking requirements according to the website, campaign objectives, customer journey, and business goals.',
              },
            ],
          },

          {
            item_link_id: 'meta-ads-optimization',

            heading: 'Meta Ads Optimization',

            descriptions: [
              {
                para: 'Meta Ads campaigns require continuous optimization because audience behavior, creative performance, competition, costs, and conversion rates can change over time.',
              },

              {
                para: 'Optimization can include audience testing, creative testing, placement analysis, budget allocation, campaign restructuring, retargeting, and conversion performance analysis.',
              },

              {
                para: 'The objective is to improve advertising efficiency while maintaining or increasing the volume and quality of relevant conversions.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Meta Ads Management Cost in India"
        costdesc={[
          {
            para: 'The cost of Meta Ads management depends on advertising budget, number of campaigns, campaign complexity, target locations, audience size, creative requirements, conversion tracking, and the level of ongoing optimization required.',
          },

          {
            para: 'Meta Ads management fees are separate from the advertising budget paid to Meta. A small local lead-generation campaign may require a relatively simple structure, while eCommerce, B2B, multi-location, and large-scale customer acquisition campaigns may require more extensive management.',
          },

          {
            para: 'Our Meta Ads recommendations are based on your business objectives, target audience, competition, conversion goals, creative requirements, and available advertising budget rather than applying the same management package to every business.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Meta Ads Management Cost"
        intro="Meta advertising campaigns vary significantly in complexity. These factors influence the level of management, testing, creative planning, and optimization required."
        facts={[
          'Monthly advertising budget',

          'Number of campaigns',

          'Number of products or services',

          'Target audience size',

          'Target locations',

          'Creative requirements',

          'Campaign objectives',

          'eCommerce product count',

          'Conversion tracking requirements',

          'Landing page requirements',

          'Retargeting requirements',

          'Ongoing optimization requirements',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL META ADS
      ===================================================== */}

      <ServiceComp
        heading="Basic Meta Ads Setup vs Professional Campaign Management"
        desc="Basic Meta Ads setup often focuses on creating an advertisement, selecting an audience, and setting a budget. Professional Meta Ads management takes a broader approach by connecting audience research, campaign structure, creative testing, retargeting, conversion tracking, landing page relevance, budget allocation, and continuous optimization. The objective is to make advertising spend work toward measurable business outcomes rather than simply generating reach, clicks, or engagement."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Meta Ads Management Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Meta Ads Management Process"
        intro="We follow a structured paid social advertising process that connects business objectives with audience strategy, creative campaigns, conversion tracking, retargeting, and continuous optimization."
        steps={[
          {
            title: 'Business & Audience Analysis',

            description:
              'We understand your products, services, target customers, competitors, locations, business goals, and existing advertising performance.',

            points: [
              'Business analysis',
              'Customer research',
              'Competitor research',
              'Goal definition',
            ],
          },

          {
            title: 'Audience & Campaign Research',

            description:
              'We identify relevant audience segments and develop targeting strategies based on customer profiles, interests, behaviors, locations, and available customer data.',

            points: [
              'Audience research',
              'Customer segmentation',
              'Targeting strategy',
              'Retargeting opportunities',
            ],
          },

          {
            title: 'Campaign Structure & Setup',

            description:
              'We create campaigns and ad sets around relevant audiences, objectives, products, services, locations, and customer journeys.',

            points: ['Campaign structure', 'Ad sets', 'Audience targeting', 'Budget allocation'],
          },

          {
            title: 'Creative & Landing Page Alignment',

            description:
              'We align advertisements and creative messaging with the audience, campaign objective, landing page, and desired conversion action.',

            points: [
              'Ad creative',
              'Messaging',
              'Call-to-action optimization',
              'Landing page alignment',
            ],
          },

          {
            title: 'Conversion Tracking',

            description:
              'We configure meaningful conversion actions so campaign performance can be evaluated using actual business outcomes.',

            points: [
              'Lead tracking',
              'Form tracking',
              'Purchase tracking',
              'Signup or enquiry tracking',
            ],
          },

          {
            title: 'Continuous Campaign Optimization',

            description:
              'We analyze campaign performance and continuously improve audiences, creatives, budgets, placements, retargeting, and conversion efficiency.',

            points: [
              'Audience analysis',
              'Creative testing',
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
        heading="Meta Ads Management Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we manage Meta Ads campaigns targeting local customers, relevant consumer audiences, B2B decision-makers, eCommerce buyers, and other customer segments relevant to the Mumbai market.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, campaigns can be structured around local markets, regional audiences, national customer acquisition, and industry-specific targeting.',
          },

          {
            para: 'For businesses targeting customers across India, Meta Ads can support lead generation, eCommerce sales, customer acquisition, remarketing, and other measurable business objectives.',
          },

          {
            para: 'We also provide Meta Ads management for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other regions. Campaign strategies can be adapted to market-specific audiences, customer behavior, competition, creative requirements, and business objectives.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Meta Ads Management Services?"
        intro="Meta Ads can be useful for businesses that want to reach targeted audiences, generate qualified leads, promote products, build demand, remarket to existing visitors, or create a measurable paid social acquisition channel."
        subintro="Our Meta Ads management services are suitable for:"
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
        finalPara="Whether you are launching your first Facebook or Instagram advertising campaign or trying to improve an existing Meta Ads account, a structured paid social strategy can help connect advertising spend with measurable leads, sales, enquiries, and other business outcomes."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="Meta Ads Management Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Reach More Customers With Meta Ads"
        description="Build and optimize Facebook and Instagram advertising campaigns designed around relevant audiences, measurable conversions, and sustainable paid social performance."
      />
    </>
  );
}
