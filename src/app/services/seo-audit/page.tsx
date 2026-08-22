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
  title: 'SEO Audit Company in Mumbai & India | Technical SEO Audit',

  description:
    'Get a detailed SEO audit covering technical SEO, on-page SEO, indexing, speed, content, backlinks, schema, and search visibility with actionable recommendations.',

  path: '/services/seo-audit',
});

const s_data = serviceData['/services/seo-audit'];

const contents = [
  {
    id: 'seoaudit1',

    para: 'An SEO audit is a detailed analysis of a website to identify technical, on-page, content, performance, indexing, internal linking, structured data, and authority-related issues that may affect organic search visibility. It provides a structured view of what is working, what is limiting search performance, and what should be improved.',
  },

  {
    id: 'seoaudit2',

    para: 'A professional SEO audit goes beyond checking page titles or running a basic automated report. It examines how search engines crawl, render, understand, and index a website while also evaluating whether important pages satisfy search intent and provide a strong experience for users.',
  },

  {
    id: 'seoaudit3',

    para: 'At Void Matrix Technology, we provide SEO audits for business websites, SaaS platforms, eCommerce stores, marketplaces, corporate websites, service businesses, and technology platforms. Our audit process combines technical SEO analysis with on-page, content, architecture, performance, and search visibility analysis.',
  },

  {
    id: 'seoaudit4',

    para: 'Our technical background allows us to investigate SEO issues that may not be obvious from standard SEO tools. This can include JavaScript rendering, crawlability, indexation, canonicalization, redirects, URL architecture, duplicate content, structured data, internal linking, website performance, and implementation-level issues.',
  },

  {
    id: 'seoaudit5',

    para: 'An SEO audit is especially useful when a website has experienced traffic declines, poor rankings, indexing problems, a redesign, migration, replatforming, technical changes, or a lack of organic growth. It can also be used as a starting point before implementing a new SEO strategy.',
  },

  {
    id: 'seoaudit6',

    para: 'We provide SEO audit services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Whether you need a technical SEO audit, complete website SEO audit, eCommerce SEO audit, or pre-migration audit, the analysis is structured around your website and business objectives.',
  },
];

export default function SEOAuditPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="SEO Audit Company in Mumbai, India"
        title={
          <>
            Find What Is Limiting Your
            <span className="text-(--primary)"> SEO Performance</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Discover technical and SEO issues before they limit your organic growth.
                </span>
                <br />
                VMT provides detailed SEO audits covering technical SEO, indexing, content,
                on-page optimization, website performance, internal linking, structured data,
                and search visibility across Mumbai, Pune, India, and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Technical <span className="text-(--primary)">SEO Audit</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                On-Page <span className="text-(--primary)">SEO Audit</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Content <span className="text-(--primary)">Analysis</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Actionable <span className="text-(--primary)">Recommendations</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS SEO AUDIT?
      ===================================================== */}

      <WhaIsService
        heading="What Is an SEO Audit?"
        contents={contents}
      />

      {/* =====================================================
          CORE SEO AUDIT SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our SEO Audit Services"
        intro="We analyze the technical and search-related foundations of your website to identify problems, missed opportunities, and areas that can be improved for better organic visibility."
        items={[
          {
            item_link: 'technical-seo-audit',

            title: 'Technical SEO Audit',

            description:
              'Analyze crawlability, indexation, rendering, redirects, canonicalization, XML sitemaps, robots.txt, URLs, performance, and other technical SEO factors.',
          },

          {
            item_link: 'on-page-seo-audit',

            title: 'On-Page SEO Audit',

            description:
              'Review titles, meta descriptions, headings, content structure, keyword targeting, internal links, images, URLs, and other page-level SEO elements.',
          },

          {
            item_link: 'content-seo-audit',

            title: 'Content SEO Audit',

            description:
              'Identify content gaps, thin pages, duplicate content, outdated content, keyword cannibalization, weak search intent alignment, and opportunities for improvement.',
          },

          {
            item_link: 'indexing-crawl-audit',

            title: 'Crawl & Indexing Audit',

            description:
              'Analyze how search engines discover, crawl, render, and index website URLs and identify unnecessary or problematic indexation patterns.',
          },

          {
            item_link: 'website-architecture-audit',

            title: 'Website Architecture Audit',

            description:
              'Review URL structure, navigation, categories, internal linking, breadcrumbs, content hierarchy, and relationships between important website sections.',
          },

          {
            item_link: 'seo-performance-audit',

            title: 'SEO Performance Audit',

            description:
              'Analyze organic traffic, rankings, search visibility, important landing pages, performance trends, and opportunities affecting organic growth.',
          },

          {
            item_link: 'schema-seo-audit',

            title: 'Structured Data & Schema Audit',

            description:
              'Review relevant structured data implementation and identify opportunities, errors, inconsistencies, and missing schema across important pages.',
          },
        ]}
        details={[
          {
            item_link_id: 'technical-seo-audit',

            heading: 'Technical SEO Audit',

            descriptions: [
              {
                para: 'Technical SEO determines how effectively search engines can crawl, render, understand, and index a website. We review important technical signals that can affect organic visibility and identify issues that require attention.',
              },

              {
                para: 'Our analysis can include crawlability, indexation, canonicalization, redirects, robots.txt, XML sitemaps, URL structures, JavaScript rendering, page performance, mobile usability, HTTPS, and other technical factors.',
              },

              {
                para: 'For websites built using modern frameworks, CMS platforms, headless architectures, or custom applications, we also consider how the underlying implementation affects search engine accessibility and rendering.',
              },
            ],
          },

          {
            item_link_id: 'on-page-seo-audit',

            heading: 'On-Page SEO Audit',

            descriptions: [
              {
                para: 'We review important page-level SEO elements to determine whether pages clearly communicate their purpose and satisfy the search intent behind their target queries.',
              },

              {
                para: 'The audit can cover title tags, meta descriptions, headings, content structure, keyword targeting, URLs, images, internal links, anchor text, duplicate page elements, and other relevant on-page signals.',
              },

              {
                para: 'Instead of simply checking whether a keyword appears on a page, we evaluate whether the page provides useful information and has a clear relationship with the search query it is intended to target.',
              },
            ],
          },

          {
            item_link_id: 'content-seo-audit',

            heading: 'Content SEO Audit',

            descriptions: [
              {
                para: 'Content can become outdated, duplicated, thin, poorly structured, or disconnected from search intent as a website grows. We analyze content quality and search relevance to identify areas that may be limiting organic performance.',
              },

              {
                para: 'We identify content gaps, overlapping pages, keyword cannibalization, weak topics, outdated information, missing commercial content, and opportunities to strengthen topical coverage.',
              },

              {
                para: 'The objective is to create a clearer relationship between the website content, target audience, search demand, and business objectives.',
              },
            ],
          },

          {
            item_link_id: 'indexing-crawl-audit',

            heading: 'Crawl & Indexing Audit',

            descriptions: [
              {
                para: 'Search engines need to discover and process the pages that matter to your business. We analyze crawl and indexation patterns to identify pages that may be blocked, duplicated, excluded, or unnecessarily exposed to search engines.',
              },

              {
                para: 'The analysis can include robots.txt, XML sitemaps, canonical tags, noindex directives, redirects, duplicate URLs, parameter pages, faceted navigation, pagination, and other indexation signals.',
              },

              {
                para: 'The objective is to help search engines efficiently discover and understand the pages that are most important for organic search visibility.',
              },
            ],
          },

          {
            item_link_id: 'website-architecture-audit',

            heading: 'Website Architecture Audit',

            descriptions: [
              {
                para: 'Website architecture influences how users and search engines navigate and understand a website. We review page hierarchy, navigation, URL structures, categories, breadcrumbs, internal links, and relationships between important pages.',
              },

              {
                para: 'A clear architecture can make large websites easier to crawl and can help establish stronger relationships between related products, services, categories, locations, and content.',
              },

              {
                para: 'We identify structural improvements that can make the website easier to expand while maintaining a logical SEO framework.',
              },
            ],
          },

          {
            item_link_id: 'seo-performance-audit',

            heading: 'SEO Performance Audit',

            descriptions: [
              {
                para: 'We analyze organic search performance to understand where traffic, rankings, visibility, and opportunities are changing over time.',
              },

              {
                para: 'Depending on available data, the audit can examine organic landing pages, keyword performance, traffic trends, search visibility, ranking changes, important queries, and pages that may be losing or gaining visibility.',
              },

              {
                para: 'Performance analysis helps connect technical and content findings with actual organic search outcomes.',
              },
            ],
          },

          {
            item_link_id: 'schema-seo-audit',

            heading: 'Structured Data & Schema Audit',

            descriptions: [
              {
                para: 'Structured data can help search engines better understand specific types of content when implemented accurately. We review existing schema implementation and identify relevant opportunities based on the actual content and page types on the website.',
              },

              {
                para: 'The audit can include Organization, LocalBusiness, Service, Product, Article, BreadcrumbList, FAQPage, and other appropriate structured data types where applicable.',
              },

              {
                para: 'We focus on accurate implementation rather than adding unnecessary schema that does not represent the visible content of the page.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="SEO Audit Cost in India"
        costdesc={[
          {
            para: 'The cost of an SEO audit depends on website size, number of URLs, technical complexity, number of templates, CMS or technology stack, business objectives, number of target markets, and the depth of analysis required.',
          },

          {
            para: 'A small business website may require a focused audit covering technical and on-page SEO, while a large eCommerce, SaaS, marketplace, or enterprise website may require deeper analysis of thousands of URLs, templates, crawl patterns, indexation, architecture, content systems, and technical implementation.',
          },

          {
            para: 'Our SEO audit recommendations are based on the actual condition of your website. This allows us to prioritize issues according to their potential impact rather than producing a generic automated checklist.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect SEO Audit Cost"
        intro="The scope of an SEO audit varies from website to website. These factors influence the amount of analysis required."
        facts={[
          'Number of website URLs',

          'Website architecture complexity',

          'CMS or technology stack',

          'JavaScript and rendering complexity',

          'Number of website templates',

          'Number of products or services',

          'Number of target locations',

          'Number of target countries',

          'Content volume',

          'Technical SEO complexity',

          'Migration or redesign requirements',

          'Depth of reporting and recommendations',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL SEO AUDIT
      ===================================================== */}

      <ServiceComp
        heading="Basic SEO Check vs Professional SEO Audit"
        desc="A basic SEO check may identify obvious issues such as missing titles, broken links, or basic performance problems. A professional SEO audit goes deeper by analyzing crawlability, indexation, rendering, architecture, content quality, search intent, internal linking, structured data, technical implementation, performance trends, and other factors that can influence organic search visibility. The objective is not simply to produce a long list of errors, but to identify the issues and opportunities that deserve priority."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get SEO Audit Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our SEO Audit Process"
        intro="We follow a structured audit process to understand your website, identify SEO problems, prioritize opportunities, and provide actionable recommendations for improving organic search performance."
        steps={[
          {
            title: 'Website & Technical Analysis',

            description:
              'We analyze the technical foundation of your website to identify issues affecting crawling, rendering, indexation, performance, and search engine accessibility.',

            points: [
              'Technical SEO audit',

              'Crawlability analysis',

              'Indexation review',

              'Rendering analysis',
            ],
          },

          {
            title: 'Keyword & Search Intent Analysis',

            description:
              'We evaluate target keywords, search intent, rankings, competitors, and the relationship between important queries and website pages.',

            points: [
              'Keyword analysis',

              'Search intent review',

              'Ranking analysis',

              'Competitor research',
            ],
          },

          {
            title: 'On-Page & Content Analysis',

            description:
              'We review important pages, content structure, metadata, headings, internal links, keyword targeting, content gaps, and opportunities for improvement.',

            points: [
              'On-page SEO review',

              'Content analysis',

              'Metadata analysis',

              'Internal linking review',
            ],
          },

          {
            title: 'Architecture & Indexation Analysis',

            description:
              'We examine website architecture, URL structures, crawl paths, canonical signals, sitemaps, duplicate URLs, and indexation patterns.',

            points: [
              'Site architecture',

              'URL analysis',

              'Indexation review',

              'Canonical analysis',
            ],
          },

          {
            title: 'Technical Recommendations',

            description:
              'We translate audit findings into practical recommendations that can be implemented by developers, content teams, marketing teams, or website administrators.',

            points: [
              'Technical recommendations',

              'Priority classification',

              'Implementation guidance',

              'Development requirements',
            ],
          },

          {
            title: 'SEO Roadmap & Prioritization',

            description:
              'We organize findings according to importance and implementation effort so your team can focus on the SEO improvements that matter most.',

            points: [
              'Issue prioritization',

              'SEO roadmap',

              'Quick-win identification',

              'Long-term recommendations',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="SEO Audit Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we provide SEO audits for corporate websites, service businesses, SaaS companies, eCommerce platforms, manufacturers, and technology companies looking to understand and improve their organic search performance.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, we can audit websites according to their industry, technology stack, target customers, competition, and geographic search objectives.',
          },

          {
            para: 'For businesses targeting customers across India, our audits can evaluate national organic visibility, commercial search opportunities, technical SEO, content coverage, website architecture, and competitive search performance.',
          },

          {
            para: 'We also provide SEO audits for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other regions. International audits can include market-specific keyword opportunities, technical SEO, website architecture, content, and international search requirements.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs an SEO Audit?"
        intro="An SEO audit can help any business that wants to understand why its website is not achieving the organic search visibility it expects or wants to identify opportunities before investing further in SEO."
        subintro="Our SEO audit services are suitable for:"
        points={[
          'Businesses with declining organic traffic',

          'Websites with poor Google rankings',

          'Businesses launching a new SEO strategy',

          'SaaS and technology websites',

          'eCommerce websites',

          'Large corporate websites',

          'Websites preparing for migration',

          'Websites undergoing redesign',

          'Businesses expanding into new markets',

          'Companies investing in ongoing SEO',
        ]}
        finalPara="Whether you need to diagnose an existing SEO problem or establish a roadmap for future organic growth, a structured SEO audit can provide the technical and strategic information required to make better SEO decisions."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="SEO Audit Services FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Find Your Biggest SEO Opportunities"
        description="Get your website reviewed for technical, content, and search visibility issues."
      />
    </>
  );
}