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
  title: 'On-Page SEO Company in Mumbai & India | SEO Services',

  description:
    'Improve organic rankings with professional on-page SEO services for content, keywords, metadata, internal links, headings, URLs, and website structure.',

  path: '/services/on-page-seo',
});

const s_data = serviceData['/services/on-page-seo'];

const contents = [
  {
    id: 'onpage1',

    para: 'On-page SEO is the process of optimizing individual website pages so search engines can better understand their content, relevance, structure, and search intent. It focuses on the elements that exist directly on a webpage, including titles, headings, content, keywords, URLs, internal links, images, and structured data.',
  },

  {
    id: 'onpage2',

    para: 'A well-optimized page should clearly communicate what it is about, who it is intended for, and what search queries it can satisfy. On-page SEO connects keyword research and search intent with useful content and a logical website structure rather than simply adding keywords throughout a page.',
  },

  {
    id: 'onpage3',

    para: 'At Void Matrix Technology, we provide on-page SEO services for business websites, SaaS platforms, eCommerce websites, service companies, and enterprise websites. We optimize important page-level elements including metadata, headings, content structure, internal links, URLs, images, and relevant structured data.',
  },

  {
    id: 'onpage4',

    para: 'Our approach combines SEO strategy with web development knowledge. This allows us to identify opportunities that go beyond content editing, including page architecture, internal linking relationships, canonical implementation, structured data, URL organization, and other elements that influence how search engines understand a website.',
  },

  {
    id: 'onpage5',

    para: 'On-page SEO is particularly important for businesses competing for commercial searches. Service pages, product pages, category pages, location pages, and landing pages can all be optimized around specific search intent and relevant keyword groups.',
  },

  {
    id: 'onpage6',

    para: 'We provide on-page SEO services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Whether you are launching a new website or improving an established domain, we build page-level optimization strategies around your business goals and target audience.',
  },
];

export default function OnPageSEOPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="On-Page SEO Company in Mumbai, India"
        title={
          <>
            Optimize Your Website for
            <span className="text-(--primary)"> Better Search Rankings</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Turn important website pages into stronger search assets.
                </span>
                <br />
                VMT provides on-page SEO services that optimize keywords, content, headings,
                metadata, internal links, URLs, images, and page structure to improve organic search
                visibility across Mumbai, Pune, India, and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Keyword <span className="text-(--primary)">Optimization</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                SEO <span className="text-(--primary)">Content</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Internal <span className="text-(--primary)">Linking</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Metadata <span className="text-(--primary)">Optimization</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS ON-PAGE SEO?
      ===================================================== */}

      <WhaIsService heading="What Is On-Page SEO?" contents={contents} />

      {/* =====================================================
          CORE ON-PAGE SEO SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our On-Page SEO Services"
        intro="We optimize the core elements of your website pages to improve search relevance, content quality, page structure, internal linking, and organic search visibility. Our on-page SEO strategy is built around search intent and the specific goals of each page."
        items={[
          {
            item_link: 'keyword-research-mapping',

            title: 'Keyword Research & Mapping',

            description:
              'Identify relevant search queries and map keywords to the right pages based on search intent and business goals.',
          },

          {
            item_link: 'metadata-optimization',

            title: 'Title & Meta Description Optimization',

            description:
              'Optimize page titles and meta descriptions for relevance, search intent, and stronger organic click potential.',
          },

          {
            item_link: 'content-optimization',

            title: 'SEO Content Optimization',

            description:
              'Improve website content for topical relevance, search intent, readability, keyword coverage, and useful information.',
          },

          {
            item_link: 'heading-optimization',

            title: 'Heading Structure Optimization',

            description:
              'Create logical H1, H2, and H3 structures that make page content easier for users and search engines to understand.',
          },

          {
            item_link: 'internal-linking',

            title: 'Internal Linking Optimization',

            description:
              'Build contextual internal links that connect related pages and strengthen website navigation and page relationships.',
          },

          {
            item_link: 'url-image-optimization',

            title: 'URL & Image SEO',

            description:
              'Optimize URLs, image filenames, alt text, and related page elements for clearer website structure and accessibility.',
          },

          {
            item_link: 'schema-optimization',

            title: 'Schema & Structured Data',

            description:
              'Identify relevant structured data opportunities that help search engines better understand your website content.',
          },
        ]}
        details={[
          {
            item_link_id: 'keyword-research-mapping',

            heading: 'Keyword Research & Mapping',

            descriptions: [
              {
                para: 'Effective on-page SEO begins with understanding what your potential customers search for. We research relevant keywords based on your products, services, audience, competitors, industry, location, and business objectives.',
              },

              {
                para: 'We map primary and secondary keywords to the pages where they are most relevant instead of targeting the same keyword across multiple pages. This creates a clearer website structure and reduces unnecessary keyword overlap.',
              },

              {
                para: 'For businesses targeting Mumbai, Pune, other Indian cities, nationwide searches, or international markets, keyword mapping can incorporate relevant local, national, commercial, and long-tail search intent.',
              },
            ],
          },

          {
            item_link_id: 'metadata-optimization',

            heading: 'Title & Meta Description Optimization',

            descriptions: [
              {
                para: 'Title tags and meta descriptions communicate the topic and purpose of a webpage to search engines and potential visitors. We optimize these elements according to the page topic, target search intent, and business objective.',
              },

              {
                para: 'We review important pages for missing, duplicated, generic, or poorly targeted metadata and create unique titles and descriptions that accurately represent each page.',
              },

              {
                para: 'Our optimization covers service pages, product pages, category pages, location pages, landing pages, and other commercially important pages across the website.',
              },
            ],
          },

          {
            item_link_id: 'content-optimization',

            heading: 'SEO Content Optimization',

            descriptions: [
              {
                para: 'Search-focused content should satisfy the intent behind a query while providing useful and relevant information. We optimize existing content for topical coverage, clarity, structure, search intent, and keyword relevance.',
              },

              {
                para: 'Our team identifies thin sections, missing topics, repetitive content, keyword gaps, unclear messaging, and opportunities to improve the usefulness of important website pages.',
              },

              {
                para: 'For commercial pages, we structure content around the service or product, customer problems, relevant supporting topics, and the markets being targeted.',
              },
            ],
          },

          {
            item_link_id: 'heading-optimization',

            heading: 'Heading Structure Optimization',

            descriptions: [
              {
                para: 'A logical heading hierarchy helps users navigate content and gives search engines a clearer understanding of the page structure. We optimize H1, H2, and H3 headings according to the actual content hierarchy.',
              },

              {
                para: 'We review headings for relevance, duplication, hierarchy, clarity, and search intent rather than forcing keywords into every heading.',
              },

              {
                para: 'This is especially useful for detailed service pages, SaaS websites, eCommerce category pages, location pages, and content-heavy websites.',
              },
            ],
          },

          {
            item_link_id: 'internal-linking',

            heading: 'Internal Linking Optimization',

            descriptions: [
              {
                para: 'Internal links connect related pages within a website and help users discover additional information. They also help search engines understand relationships between pages and navigate website architecture.',
              },

              {
                para: 'We identify opportunities to connect service pages, blogs, product pages, category pages, location pages, and supporting content through relevant contextual links.',
              },

              {
                para: 'A strategic internal linking structure can help distribute internal authority and create stronger relationships between important pages and supporting content.',
              },
            ],
          },

          {
            item_link_id: 'url-image-optimization',

            heading: 'URL & Image SEO',

            descriptions: [
              {
                para: 'We review URL structures for unnecessary complexity, inconsistent naming, duplicate paths, and other issues that can make websites harder to understand and manage.',
              },

              {
                para: 'Image optimization includes reviewing image filenames, alternative text, relevance, and implementation so visual content supports accessibility and the overall page experience.',
              },

              {
                para: 'For websites with large numbers of products, services, locations, or content pages, consistent URL and image optimization helps create a more organized website structure.',
              },
            ],
          },

          {
            item_link_id: 'schema-optimization',

            heading: 'Schema & Structured Data',

            descriptions: [
              {
                para: 'Structured data provides search engines with additional information about entities and content represented on a webpage. We identify schema opportunities according to the type and purpose of each page.',
              },

              {
                para: 'Depending on the website, opportunities can include Organization, LocalBusiness, Service, Product, Article, BreadcrumbList, and other appropriate structured data types.',
              },

              {
                para: 'Schema is treated as a supporting SEO layer and is implemented where it accurately represents the content already available on the page.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="On-Page SEO Cost in India"
        costdesc={[
          {
            para: 'The cost of on-page SEO depends on the size of the website, number of pages, existing SEO condition, content requirements, keyword competition, website architecture, and the depth of optimization required.',
          },

          {
            para: 'A small business website may require optimization for a limited number of important service pages, while an eCommerce, SaaS, or enterprise website may require optimization across hundreds or thousands of pages.',
          },

          {
            para: 'Our on-page SEO recommendations are based on the actual condition and requirements of your website. This allows us to prioritize the pages and optimization work most relevant to your business instead of applying the same SEO package to every website.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect On-Page SEO Cost"
        intro="Every website requires a different level of on-page optimization. These factors influence the scope and investment required for SEO work."
        facts={[
          'Number of website pages',

          'Current website SEO condition',

          'Keyword competition',

          'Content quality and depth',

          'New content requirements',

          'Website architecture',

          'Internal linking requirements',

          'Number of locations being targeted',

          'eCommerce or SaaS complexity',

          'Structured data requirements',

          'Technical SEO dependencies',

          'Ongoing optimization requirements',
        ]}
      />

      {/* =====================================================
          PROFESSIONAL VS BASIC OPTIMIZATION
      ===================================================== */}

      <ServiceComp
        heading="Basic Website Optimization vs Professional On-Page SEO"
        desc="Basic website optimization often focuses on adding keywords and changing page titles. Professional on-page SEO takes a broader approach by connecting keyword research, search intent, content structure, metadata, headings, internal links, URLs, images, structured data, and website architecture. The objective is to create pages that are genuinely relevant to the searches they target while providing a useful experience for visitors."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get On-Page SEO Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our On-Page SEO Optimization Process"
        intro="We follow a structured process to identify page-level opportunities, map search intent, optimize important pages, and continuously improve the website's organic search foundation."
        steps={[
          {
            title: 'Website & SEO Analysis',

            description:
              'We review your website, important pages, existing metadata, content structure, URLs, headings, internal links, and current search visibility.',

            points: ['Website audit', 'Page analysis', 'Metadata review', 'Content assessment'],
          },

          {
            title: 'Keyword & Search Intent Research',

            description:
              'We identify relevant search queries and determine the intent behind them so keywords can be mapped to the most appropriate pages.',

            points: [
              'Keyword research',

              'Search intent analysis',

              'Keyword mapping',

              'Competitor research',
            ],
          },

          {
            title: 'Page-Level Optimization',

            description:
              'We optimize titles, descriptions, headings, content, URLs, internal links, images, and other relevant on-page elements.',

            points: [
              'Metadata optimization',

              'Content optimization',

              'Heading optimization',

              'URL optimization',
            ],
          },

          {
            title: 'Internal Linking & Content Structure',

            description:
              'We strengthen relationships between important pages and supporting content through contextual internal links and improved information architecture.',

            points: [
              'Internal linking',

              'Content hierarchy',

              'Page relationships',

              'Navigation improvements',
            ],
          },

          {
            title: 'Schema & Structured Data',

            description:
              'Where appropriate, we identify structured data opportunities and ensure implementation accurately represents the content available on the website.',

            points: [
              'Schema assessment',

              'Structured data',

              'Entity relationships',

              'Implementation review',
            ],
          },

          {
            title: 'Monitoring & Continuous Optimization',

            description:
              'We review search performance and identify further page-level opportunities as search demand, rankings, content, and business priorities evolve.',

            points: [
              'Performance monitoring',

              'Ranking analysis',

              'Content improvements',

              'Ongoing optimization',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="On-Page SEO Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we optimize service pages, business pages, landing pages, and other important website content around relevant local and commercial search queries. Our on-page SEO strategy is designed to help businesses build stronger organic visibility in competitive Mumbai searches.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, we can build location-aware page optimization strategies based on the markets and customers the business wants to reach.',
          },

          {
            para: 'For companies targeting customers across India, we optimize website pages around national commercial searches, industry-specific queries, product and service terms, and relevant long-tail searches.',
          },

          {
            para: 'We also provide on-page SEO services for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global regions. International page optimization can be structured around the target market, language, search intent, and business offering.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs On-Page SEO Services?"
        intro="On-page SEO can benefit businesses that depend on organic search visibility to attract customers, leads, users, or sales."
        subintro="Our on-page SEO services are suitable for:"
        points={[
          'Startups building organic search visibility',

          'SaaS companies targeting competitive search queries',

          'eCommerce businesses with product and category pages',

          'B2B companies targeting high-intent searches',

          'Local businesses targeting Mumbai, Pune, and other cities',

          'Service businesses competing for commercial keywords',

          'Websites with declining organic traffic',

          'Businesses launching new websites',

          'Companies expanding into new Indian markets',

          'Businesses targeting international search markets',
        ]}
        finalPara="Whether you are optimizing an existing website or launching a new digital platform, strong on-page SEO creates a better foundation for organic search growth by making your pages more relevant, structured, and useful for both search engines and users."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="On-Page SEO Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Improve Your Website's Search Visibility"
        description="Get your website reviewed for on-page SEO opportunities."
      />
    </>
  );
}
