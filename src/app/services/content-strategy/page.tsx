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
  title: 'Content Strategy Services in Mumbai & India | SEO Content Strategy',

  description:
    'Content strategy services for businesses in Mumbai and India covering keyword research, search intent, topic clusters, content planning, topical authority, and organic growth.',

  path: '/services/content-strategy',
});

const s_data = serviceData['/services/content-strategy'];

const contents = [
  {
    id: 'contentstrategy1',

    para: 'Content strategy is the process of planning, organizing, creating, and managing content around specific business and audience goals. A strong content strategy connects keyword research, search intent, audience needs, business objectives, content formats, publishing priorities, and distribution into a structured system designed to generate measurable results.',
  },

  {
    id: 'contentstrategy2',

    para: 'Many businesses publish blogs, service pages, social media posts, and other content without a clear strategy. This can result in scattered topics, keyword overlap, inconsistent messaging, weak internal linking, and content that attracts traffic without contributing to leads or business growth.',
  },

  {
    id: 'contentstrategy3',

    para: 'At VoidMatrix Technology, we provide content strategy services for startups, SaaS companies, eCommerce businesses, technology companies, manufacturers, professional service firms, and growing organizations targeting customers across Mumbai, Pune, India, and international markets.',
  },

  {
    id: 'contentstrategy4',

    para: 'Our content strategy process combines keyword research, audience research, competitor analysis, search intent mapping, topic cluster planning, content gap analysis, editorial calendars, internal linking opportunities, and content prioritization. The objective is to build a structured content ecosystem rather than simply produce more articles.',
  },

  {
    id: 'contentstrategy5',

    para: 'A well-planned content strategy can support different stages of the customer journey. Content may target informational searches, problem-solving queries, commercial investigation, comparisons, product research, service-related searches, industry questions, and long-tail keywords that are relevant to the target audience.',
  },

  {
    id: 'contentstrategy6',

    para: 'We build content strategies for businesses in Mumbai, Pune, Bangalore, Hyderabad, Delhi, across India, and international markets. Strategies can be adapted for local SEO, national SEO, B2B marketing, SaaS businesses, eCommerce websites, technology companies, manufacturers, and specialized industries.',
  },
];

export default function ContentStrategyPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Content Strategy Services in Mumbai, India"
        title={
          <>
            Build a Content Strategy That
            <span className="text-(--primary)"> Drives Organic Growth</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Turn search demand, audience needs, and business goals into a structured content
                  strategy.
                </span>
                <br />
                VoidMatrix Technology develops SEO-focused content strategies covering keyword
                research, search intent, topic clusters, content gaps, editorial planning,
                topical authority, and organic growth for businesses in Mumbai, Pune, India, and
                global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Content <span className="text-(--primary)">Strategy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Keyword <span className="text-(--primary)">Research</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Topic <span className="text-(--primary)">Clusters</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Topical <span className="text-(--primary)">Authority</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS CONTENT STRATEGY?
      ===================================================== */}

      <WhaIsService
        heading="What Is Content Strategy?"
        contents={contents}
      />

      {/* =====================================================
          CORE CONTENT STRATEGY SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Content Strategy Services"
        intro="We develop structured content strategies that connect search demand, audience needs, business goals, and content opportunities. Our approach helps businesses prioritize the right topics, create stronger content relationships, and build a sustainable organic search presence."
        items={[
          {
            item_link: 'keyword-research',

            title: 'Keyword Research & Search Mapping',

            description:
              'Identify relevant search queries and map them to content opportunities based on search intent, business relevance, and customer needs.',
          },

          {
            item_link: 'content-audit',

            title: 'Content Audit & Gap Analysis',

            description:
              'Analyze existing content to identify gaps, outdated pages, keyword overlap, weak coverage, and opportunities for improvement.',
          },

          {
            item_link: 'topic-clusters',

            title: 'Topic Cluster Strategy',

            description:
              'Build connected topic clusters around important business subjects to improve topical coverage and create stronger content relationships.',
          },

          {
            item_link: 'search-intent',

            title: 'Search Intent Strategy',

            description:
              'Classify search intent and determine what type of content is most appropriate for different queries and stages of the customer journey.',
          },

          {
            item_link: 'editorial-calendar',

            title: 'Editorial Calendar Planning',

            description:
              'Create structured publishing roadmaps that prioritize content according to search demand, business value, seasonality, and available resources.',
          },

          {
            item_link: 'topical-authority',

            title: 'Topical Authority Planning',

            description:
              'Develop content frameworks that expand coverage around important subjects and establish deeper relevance within your industry.',
          },

          {
            item_link: 'content-architecture',

            title: 'Content Architecture & Internal Linking',

            description:
              'Plan relationships between blogs, service pages, product pages, category pages, and supporting content to create a stronger content ecosystem.',
          },
        ]}
        details={[
          {
            item_link_id: 'keyword-research',

            heading: 'Keyword Research & Search Mapping',

            descriptions: [
              {
                para: 'Effective content strategy begins with understanding what potential customers are searching for. We research relevant keywords, questions, topics, long-tail searches, commercial queries, and informational opportunities related to your business.',
              },

              {
                para: 'Keywords are mapped according to search intent and business relevance rather than simply creating one article for every keyword. This helps determine which subjects should become service pages, blogs, guides, comparison content, landing pages, or other formats.',
              },

              {
                para: 'For businesses targeting Mumbai, Pune, India, or international markets, keyword research can incorporate local, national, commercial, B2B, industry-specific, and long-tail search opportunities.',
              },
            ],
          },

          {
            item_link_id: 'content-audit',

            heading: 'Content Audit & Gap Analysis',

            descriptions: [
              {
                para: 'A content audit evaluates the existing content on your website and identifies what is performing well, what needs improvement, and what important topics are currently missing.',
              },

              {
                para: 'We review existing pages for content quality, search relevance, keyword targeting, duplication, cannibalization, internal linking, outdated information, and opportunities to improve organic visibility.',
              },

              {
                para: 'Content gap analysis also helps identify topics covered by competitors that may be relevant to your audience but are currently missing from your website.',
              },
            ],
          },

          {
            item_link_id: 'topic-clusters',

            heading: 'Topic Cluster Strategy',

            descriptions: [
              {
                para: 'Topic clusters organize related content around broader business subjects. Instead of treating every article as an isolated page, we create relationships between core topics and supporting content.',
              },

              {
                para: 'A topic cluster may include a primary service or commercial page supported by educational articles, industry guides, frequently asked questions, comparisons, use cases, and long-tail content.',
              },

              {
                para: 'This creates a more organized content structure and helps websites build broader topical coverage around important subjects.',
              },
            ],
          },

          {
            item_link_id: 'search-intent',

            heading: 'Search Intent Strategy',

            descriptions: [
              {
                para: 'Search intent determines what a user is actually trying to accomplish when they enter a query into a search engine. Understanding intent is essential when deciding what content should be created and how it should be structured.',
              },

              {
                para: 'We analyze informational, commercial, navigational, transactional, comparison, and problem-solving searches to determine the most appropriate content format for each opportunity.',
              },

              {
                para: 'Matching content with search intent helps avoid situations where a page targets a valuable keyword but does not provide the type of information users actually expect.',
              },
            ],
          },

          {
            item_link_id: 'editorial-calendar',

            heading: 'Editorial Calendar Planning',

            descriptions: [
              {
                para: 'An editorial calendar converts the content strategy into an actionable publishing roadmap. We prioritize topics according to search opportunity, business value, customer needs, seasonality, competition, and available content resources.',
              },

              {
                para: 'The calendar can include blogs, guides, service-supporting content, comparison pages, case studies, industry content, landing pages, and other formats relevant to the organization.',
              },

              {
                para: 'A structured calendar helps maintain publishing consistency while ensuring that new content contributes to a larger SEO and content objective.',
              },
            ],
          },

          {
            item_link_id: 'topical-authority',

            heading: 'Topical Authority Planning',

            descriptions: [
              {
                para: 'Topical authority planning focuses on developing comprehensive coverage around the subjects most relevant to a business and its target audience.',
              },

              {
                para: 'We identify core subjects, subtopics, related questions, supporting concepts, industry terms, and long-tail opportunities that can expand the website’s useful content coverage.',
              },

              {
                para: 'The objective is not to publish content simply for volume, but to build a coherent body of useful information around commercially relevant areas.',
              },
            ],
          },

          {
            item_link_id: 'content-architecture',

            heading: 'Content Architecture & Internal Linking',

            descriptions: [
              {
                para: 'Content strategy should consider how individual pages relate to one another. We plan relationships between service pages, product pages, blogs, guides, category pages, and supporting content.',
              },

              {
                para: 'Internal linking opportunities can help users move between related information while providing search engines with clearer contextual relationships across the website.',
              },

              {
                para: 'This creates a more structured content ecosystem that supports both user experience and broader organic search growth.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Content Strategy Cost in India"
        costdesc={[
          {
            para: 'The cost of content strategy depends on website size, business complexity, number of target markets, keyword research requirements, existing content volume, competitive landscape, content formats, and the depth of strategic planning required.',
          },

          {
            para: 'A startup launching its first content program may require a focused keyword and topic strategy, while an established SaaS, eCommerce, enterprise, or B2B website may require a larger content audit, topic-cluster framework, content gap analysis, and long-term editorial roadmap.',
          },

          {
            para: 'At VoidMatrix Technology, we build content strategies around the actual needs of the business. The objective is to prioritize content opportunities that can contribute to organic visibility, qualified traffic, authority, and lead generation rather than simply increasing publishing volume.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Content Strategy Cost"
        intro="Every business requires a different level of content planning. These factors influence the scope and investment required to build an effective content strategy."
        facts={[
          'Website size and number of existing pages',

          'Number of target keywords',

          'Keyword research requirements',

          'Search intent analysis',

          'Competitor research',

          'Existing content volume',

          'Content audit requirements',

          'Number of topic clusters',

          'Industry complexity',

          'Number of locations or markets',

          'Content formats required',

          'Editorial calendar scope',

          'Internal linking requirements',

          'Topical authority requirements',

          'Ongoing content optimization',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL CONTENT STRATEGY
      ===================================================== */}

      <ServiceComp
        heading="Basic Content Planning vs Professional Content Strategy"
        desc="Basic content planning often means deciding what topics to publish next. Professional content strategy goes further by connecting business objectives, audience research, keyword opportunities, search intent, competitor analysis, topic clusters, content gaps, internal linking, content formats, publishing priorities, and measurable growth objectives. The goal is to create a structured content system where every important piece of content has a clear purpose."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Content Strategy Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Content Strategy Process"
        intro="We follow a structured strategy process to understand your business, identify search opportunities, organize content priorities, and create a practical roadmap for sustainable organic growth."
        steps={[
          {
            title: 'Business & Audience Research',

            description:
              'We understand your business model, products or services, target customers, industry, locations, competitive environment, and growth objectives.',

            points: [
              'Business research',

              'Audience research',

              'Customer needs',

              'Business objectives',
            ],
          },

          {
            title: 'Keyword & Search Research',

            description:
              'We research relevant search queries and identify keyword opportunities that align with your audience, products, services, and commercial objectives.',

            points: [
              'Keyword research',

              'Search demand',

              'Long-tail queries',

              'Commercial keywords',
            ],
          },

          {
            title: 'Competitor & Content Gap Analysis',

            description:
              'We review competitor content and your existing website to identify important topics, missing coverage, content weaknesses, and opportunities.',

            points: [
              'Competitor research',

              'Content audit',

              'Gap analysis',

              'Keyword overlap',
            ],
          },

          {
            title: 'Topic Cluster & Content Mapping',

            description:
              'We organize keywords and subjects into meaningful content clusters and map them to appropriate pages and content formats.',

            points: [
              'Topic clusters',

              'Keyword mapping',

              'Search intent',

              'Content hierarchy',
            ],
          },

          {
            title: 'Editorial Roadmap',

            description:
              'We convert the strategy into a structured publishing roadmap that prioritizes content based on opportunity, relevance, and business value.',

            points: [
              'Editorial calendar',

              'Content priorities',

              'Publishing roadmap',

              'Content formats',
            ],
          },

          {
            title: 'Measurement & Optimization',

            description:
              'We use search performance and business results to identify opportunities for improving existing content and refining future priorities.',

            points: [
              'Performance tracking',

              'Content optimization',

              'Ranking analysis',

              'Strategy refinement',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Content Strategy Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we build content strategies around local business searches, industry-specific queries, commercial opportunities, customer questions, and broader organic search demand relevant to the Mumbai market.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, content strategies can incorporate local industries, B2B searches, technology topics, service queries, consumer questions, and location-specific search opportunities.',
          },

          {
            para: 'For businesses targeting customers across India, we develop national content strategies covering informational, commercial, educational, comparison, problem-solving, and long-tail searches relevant to the organization and its industry.',
          },

          {
            para: 'For international businesses and companies targeting the USA, UK, UAE, Europe, Australia, and other markets, content strategies can be adapted to market-specific search behavior, terminology, audience needs, competition, and content opportunities.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Content Strategy Services?"
        intro="Content strategy is useful for businesses that want to create content with a clear purpose, expand organic search coverage, build topical authority, and turn content into a structured source of qualified traffic and leads."
        subintro="Our content strategy services are suitable for:"
        points={[
          'SaaS companies',

          'eCommerce businesses',

          'B2B companies',

          'Technology companies',

          'Manufacturers',

          'Professional service businesses',

          'Startups',

          'Local businesses',

          'Enterprise websites',

          'Businesses targeting international markets',
        ]}
        finalPara="Whether you are starting a new content program or restructuring an existing one, a clear content strategy can help prioritize the right topics, avoid scattered publishing, and build a stronger foundation for long-term organic growth."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Content Strategy Services FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Build a Content Strategy That Supports Growth"
        description="Turn search demand, customer questions, and business goals into a structured content roadmap."
      />
    </>
  );
}