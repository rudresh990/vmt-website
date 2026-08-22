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
  title: 'Enterprise SEO Company in Mumbai & India | SEO Services',

  description:
    'Enterprise SEO services for large websites, SaaS platforms and multi-location businesses. Scale organic search visibility with technical SEO, content, architecture and strategy.',

  path: '/services/enterprise-seo',
});

const s_data = serviceData['/services/enterprise-seo'];

const contents = [
  {
    id: 'enterprise1',

    para: 'Enterprise SEO is the process of building and managing organic search visibility for large, complex websites with extensive content, products, services, locations, users, or business operations. Unlike small-business SEO, enterprise SEO requires a scalable strategy for website architecture, technical SEO, content, internal linking, indexing, templates, international markets, and large keyword portfolios.',
  },

  {
    id: 'enterprise2',

    para: 'Large websites can contain thousands or even millions of URLs. Without a structured SEO framework, important pages can become difficult for search engines to discover, crawl, index, and understand. Enterprise SEO connects technical architecture, search intent, content strategy, internal linking, structured data, and scalable optimization processes.',
  },

  {
    id: 'enterprise3',

    para: 'At Void Matrix Technology, we provide enterprise SEO services for SaaS companies, eCommerce platforms, technology companies, marketplaces, financial businesses, manufacturers, B2B organizations, multi-location businesses, and enterprises operating across India and international markets.',
  },

  {
    id: 'enterprise4',

    para: 'Our approach combines SEO strategy with web development and technical architecture knowledge. This allows us to work beyond individual page optimization and identify issues involving crawlability, indexation, JavaScript rendering, URL architecture, faceted navigation, internal linking, duplicate content, canonicalization, structured data, migrations, and large-scale content systems.',
  },

  {
    id: 'enterprise5',

    para: 'Enterprise SEO is particularly important for organizations competing across large search markets. A small improvement in organic visibility across thousands of relevant pages can create significant increases in qualified traffic, leads, product discovery, and revenue opportunities.',
  },

  {
    id: 'enterprise6',

    para: 'We provide enterprise SEO services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Whether you operate a large SaaS platform, eCommerce website, marketplace, corporate website, or multi-location organization, we build scalable SEO strategies around your technology stack, business goals, and target markets.',
  },
];

export default function EnterpriseSEOPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Enterprise SEO Company in Mumbai, India"
        title={
          <>
            Scale Organic Growth With
            <span className="text-(--primary)"> Enterprise SEO</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Large websites need more than page-level SEO.
                </span>
                <br />
                VMT provides enterprise SEO services covering technical SEO, website architecture,
                content systems, internal linking, indexation, structured data, migrations, and
                scalable search strategies across Mumbai, Pune, India, and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Technical <span className="text-(--primary)">SEO</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Scalable SEO <span className="text-(--primary)">Architecture</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Enterprise <span className="text-(--primary)">Content</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Organic <span className="text-(--primary)">Growth</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS ENTERPRISE SEO?
      ===================================================== */}

      <WhaIsService
        heading="What Is Enterprise SEO?"
        contents={contents}
      />

      {/* =====================================================
          CORE ENTERPRISE SEO SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Enterprise SEO Services"
        intro="We optimize the technical, structural, content, and strategic foundations required to manage organic search visibility across large and complex websites. Our enterprise SEO strategy is designed to scale as website size, content volume, products, locations, and target markets grow."
        items={[
          {
            item_link: 'enterprise-technical-seo',

            title: 'Enterprise Technical SEO',

            description:
              'Identify and resolve large-scale technical SEO issues involving crawling, indexing, rendering, URLs, canonicalization, redirects, performance, and website architecture.',
          },

          {
            item_link: 'enterprise-site-architecture',

            title: 'Enterprise Site Architecture',

            description:
              'Design scalable information architecture that helps users and search engines navigate relationships between products, services, categories, locations, and content.',
          },

          {
            item_link: 'enterprise-keyword-strategy',

            title: 'Enterprise Keyword Strategy',

            description:
              'Build large keyword portfolios and map search intent across important commercial, informational, product, service, category, and location pages.',
          },

          {
            item_link: 'enterprise-content-seo',

            title: 'Enterprise Content SEO',

            description:
              'Develop scalable content strategies that improve topical relevance, search coverage, content quality, and organic visibility across large websites.',
          },

          {
            item_link: 'enterprise-internal-linking',

            title: 'Enterprise Internal Linking',

            description:
              'Build scalable internal linking systems that connect related pages and help distribute authority across important sections of the website.',
          },

          {
            item_link: 'enterprise-indexation',

            title: 'Crawl & Indexation Optimization',

            description:
              'Analyze crawl paths, indexation patterns, duplicate URLs, faceted navigation, sitemaps, canonical signals, and other factors affecting search engine discovery.',
          },

          {
            item_link: 'enterprise-migration-seo',

            title: 'Enterprise Website Migration SEO',

            description:
              'Plan and manage SEO requirements for redesigns, replatforming, domain changes, URL migrations, technology changes, and large website launches.',
          },
        ]}
        details={[
          {
            item_link_id: 'enterprise-technical-seo',

            heading: 'Enterprise Technical SEO',

            descriptions: [
              {
                para: 'Large websites can develop technical SEO issues that are difficult to identify through manual page-by-page reviews. We analyze crawlability, indexation, rendering, redirects, canonical signals, duplicate URLs, page performance, JavaScript dependencies, XML sitemaps, and other technical systems.',
              },

              {
                para: 'Our technical SEO approach focuses on identifying patterns rather than treating every URL as an isolated problem. This allows recurring issues to be addressed at the template, CMS, application, or architecture level where appropriate.',
              },

              {
                para: 'For businesses using modern frameworks, headless systems, large eCommerce platforms, SaaS applications, or custom technology stacks, technical SEO recommendations are aligned with the actual implementation and development environment.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-site-architecture',

            heading: 'Enterprise Site Architecture',

            descriptions: [
              {
                para: 'Enterprise websites require clear relationships between pages, categories, products, services, locations, and supporting content. We analyze the website hierarchy and identify opportunities to create a more logical and scalable information architecture.',
              },

              {
                para: 'A well-designed architecture helps users navigate large websites while providing search engines with clearer signals about important pages and topical relationships.',
              },

              {
                para: 'We consider URL structures, navigation, breadcrumbs, internal links, category systems, content hubs, location structures, and other architectural elements when developing enterprise SEO recommendations.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-keyword-strategy',

            heading: 'Enterprise Keyword Strategy',

            descriptions: [
              {
                para: 'Enterprise websites often target thousands of search queries across multiple products, services, categories, industries, locations, and customer segments. We develop keyword strategies that organize these opportunities into meaningful groups.',
              },

              {
                para: 'We map search intent and keyword groups to appropriate pages instead of allowing multiple pages to compete for the same search terms. This creates a more organized relationship between keywords, content, and website architecture.',
              },

              {
                para: 'For businesses targeting Mumbai, Pune, India, or international markets, keyword strategies can incorporate local, national, commercial, informational, product, service, and long-tail search opportunities.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-content-seo',

            heading: 'Enterprise Content SEO',

            descriptions: [
              {
                para: 'Large websites require content strategies that can scale without sacrificing quality. We identify content gaps, overlapping topics, weak pages, outdated information, and opportunities to strengthen important areas of the website.',
              },

              {
                para: 'Our content strategy connects search intent with useful information, commercial objectives, topical authority, and the existing structure of the website.',
              },

              {
                para: 'Depending on the business, this can include service pages, product pages, category content, industry pages, location pages, comparison pages, knowledge resources, and supporting editorial content.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-internal-linking',

            heading: 'Enterprise Internal Linking',

            descriptions: [
              {
                para: 'Internal links help users navigate large websites and help search engines understand relationships between pages. Enterprise websites often require a systematic approach because manually managing thousands of links can become difficult.',
              },

              {
                para: 'We identify opportunities to connect products, services, categories, locations, content hubs, blogs, and other important pages through relevant contextual links.',
              },

              {
                para: 'A scalable internal linking structure can improve discoverability and create stronger relationships between high-priority pages and supporting content.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-indexation',

            heading: 'Crawl & Indexation Optimization',

            descriptions: [
              {
                para: 'Search engines cannot treat every URL on a large website equally. Parameter URLs, faceted navigation, duplicate pages, thin pages, filters, search results, pagination, and dynamically generated URLs can create unnecessary crawl and indexation complexity.',
              },

              {
                para: 'We analyze which pages should be crawled and indexed, which signals should be consolidated, and where technical controls may be required to improve search engine efficiency.',
              },

              {
                para: 'The objective is to help search engines discover and understand the pages that matter most while reducing unnecessary technical complexity.',
              },
            ],
          },

          {
            item_link_id: 'enterprise-migration-seo',

            heading: 'Enterprise Website Migration SEO',

            descriptions: [
              {
                para: 'Website migrations can create significant SEO risks when URLs, content, internal links, redirects, metadata, canonical signals, or technical configurations change without proper planning.',
              },

              {
                para: 'We incorporate SEO requirements into the migration process, including URL mapping, redirect planning, metadata preservation, internal linking, sitemap updates, canonical review, and post-launch monitoring.',
              },

              {
                para: 'Migration SEO can be applied to redesigns, CMS changes, technology migrations, replatforming projects, domain changes, mergers, acquisitions, and large website restructures.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Enterprise SEO Cost in India"
        costdesc={[
          {
            para: 'The cost of enterprise SEO depends on website size, number of URLs, technical complexity, number of markets, keyword competition, content requirements, technology stack, number of business units, and the level of ongoing SEO support required.',
          },

          {
            para: 'A large SaaS platform, eCommerce website, marketplace, or enterprise website may require significantly more SEO analysis and implementation than a smaller business website because technical issues can affect thousands of pages simultaneously.',
          },

          {
            para: 'Our enterprise SEO recommendations are based on the actual condition and requirements of your website. This allows us to prioritize high-impact technical, architectural, content, and search opportunities instead of applying the same SEO package to every enterprise.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Enterprise SEO Cost"
        intro="Enterprise SEO requires a different level of planning and execution depending on website complexity, business scale, technology, and search competition."
        facts={[
          'Number of website URLs',

          'Website architecture complexity',

          'Technical SEO condition',

          'Number of products or services',

          'Number of business locations',

          'Number of target countries',

          'Keyword competition',

          'Content volume and quality',

          'Internal linking requirements',

          'JavaScript or rendering complexity',

          'eCommerce or SaaS complexity',

          'Migration or replatforming requirements',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL ENTERPRISE SEO
      ===================================================== */}

      <ServiceComp
        heading="Basic SEO vs Professional Enterprise SEO"
        desc="Basic SEO often focuses on optimizing individual pages, publishing content, and monitoring a limited set of keywords. Professional enterprise SEO takes a broader approach by connecting technical SEO, site architecture, crawl management, indexation, keyword strategy, content systems, internal linking, structured data, migrations, and scalable implementation. The objective is to create an SEO system that can support large websites and continue working as the business, technology, and search landscape grow."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Enterprise SEO Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Enterprise SEO Optimization Process"
        intro="We follow a structured enterprise SEO process to understand your website architecture, identify high-impact search opportunities, resolve technical barriers, and build scalable systems for long-term organic growth."
        steps={[
          {
            title: 'Enterprise Website & SEO Analysis',

            description:
              'We analyze website architecture, crawling, indexation, technical SEO, content systems, internal linking, templates, and current organic search performance.',

            points: [
              'Technical SEO audit',

              'Website architecture analysis',

              'Indexation review',

              'Organic performance assessment',
            ],
          },

          {
            title: 'Keyword & Search Intent Research',

            description:
              'We identify high-value search opportunities and organize large keyword portfolios according to search intent, products, services, industries, locations, and customer segments.',

            points: [
              'Enterprise keyword research',

              'Search intent analysis',

              'Keyword clustering',

              'Competitor research',
            ],
          },

          {
            title: 'Architecture & Technical Optimization',

            description:
              'We identify technical and architectural improvements that can make large websites easier for search engines to crawl, understand, and index.',

            points: [
              'Site architecture',

              'Crawl optimization',

              'Indexation management',

              'Canonical and URL analysis',
            ],
          },

          {
            title: 'Content & Internal Linking Strategy',

            description:
              'We build scalable content and internal linking systems that strengthen topical relevance and relationships between important pages.',

            points: [
              'Content gap analysis',

              'Content architecture',

              'Internal linking',

              'Topical authority',
            ],
          },

          {
            title: 'Implementation & Development Collaboration',

            description:
              'Where SEO improvements require development changes, we provide technical recommendations that can be implemented across templates, CMS systems, applications, and website infrastructure.',

            points: [
              'Technical specifications',

              'Development collaboration',

              'Template optimization',

              'SEO implementation review',
            ],
          },

          {
            title: 'Monitoring & Continuous Optimization',

            description:
              'We monitor organic performance, technical changes, rankings, indexation, search demand, competitors, and new opportunities as the website and business evolve.',

            points: [
              'Performance monitoring',

              'Ranking analysis',

              'Technical monitoring',

              'Ongoing optimization',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Enterprise SEO Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For enterprises in Mumbai, we develop SEO strategies for large corporate websites, SaaS platforms, eCommerce businesses, technology companies, manufacturers, and organizations competing for high-value commercial searches across the city and surrounding markets.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, we can build enterprise SEO strategies around the technology, products, services, industries, and markets the organization wants to reach.',
          },

          {
            para: 'For companies targeting customers across India, we optimize large websites around national commercial searches, industry-specific queries, product and service terms, content opportunities, and scalable technical SEO systems.',
          },

          {
            para: 'We also provide enterprise SEO services for organizations targeting international markets including the USA, UK, UAE, Europe, Australia, and other global regions. International enterprise SEO can be structured around countries, languages, locations, products, services, and market-specific search intent.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Enterprise SEO Services?"
        intro="Enterprise SEO is designed for organizations managing large, complex, or rapidly growing websites where search visibility depends on scalable technical, content, and architectural systems."
        subintro="Our enterprise SEO services are suitable for:"
        points={[
          'Large SaaS platforms',

          'Enterprise eCommerce websites',

          'Online marketplaces',

          'B2B technology companies',

          'Financial and professional services',

          'Manufacturing and industrial companies',

          'Multi-location organizations',

          'Large corporate websites',

          'Businesses expanding across India',

          'Companies targeting international search markets',
        ]}
        finalPara="Whether your organization manages thousands of pages or is preparing for significant digital growth, enterprise SEO creates a scalable foundation for technical health, search visibility, content expansion, and long-term organic performance."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="Enterprise SEO Services FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Scale Your Organic Search Growth"
        description="Get your enterprise website reviewed for technical, architectural, and organic search opportunities."
      />
    </>
  );
}