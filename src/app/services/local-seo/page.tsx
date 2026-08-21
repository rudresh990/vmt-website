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
  title: 'Local SEO Company in Mumbai & India | Local SEO Services',

  description:
    'Grow local search visibility with professional local SEO services for Google Maps, Google Business Profile, local keywords, citations, reviews, and location pages.',

  path: '/services/local-seo',
});

const s_data = serviceData['/services/local-seo'];

const contents = [
  {
    id: 'localseo1',

    para: 'Local SEO is the process of optimizing a business website and online presence so customers can find the business when searching for products or services in a specific geographic area. It focuses on local search visibility across Google Search, Google Maps, Google Business Profile, local listings, and location-focused website pages.',
  },

  {
    id: 'localseo2',

    para: 'A strong local SEO strategy connects a business with the searches performed by customers in its target locations. Instead of simply adding city names to website content, local SEO combines search intent, location relevance, Google Business Profile optimization, website optimization, citations, reviews, local content, and authority signals.',
  },

  {
    id: 'localseo3',

    para: 'At Void Matrix Technology, we provide local SEO services for small businesses, service companies, startups, SaaS companies, eCommerce businesses, professional services, and multi-location businesses. We optimize important local search assets including Google Business Profile, location pages, metadata, local keywords, internal links, citations, structured data, and supporting content.',
  },

  {
    id: 'localseo4',

    para: 'Our approach combines SEO strategy with web development knowledge. This allows us to optimize both the local search presence and the website infrastructure supporting it, including location page architecture, internal linking, structured data, URLs, technical SEO, and content relationships.',
  },

  {
    id: 'localseo5',

    para: 'Local SEO is particularly important for businesses that depend on customers from specific cities, areas, or service regions. Local searches often have strong commercial intent, making visibility in Google Search and Google Maps an important source of calls, enquiries, visits, leads, and sales.',
  },

  {
    id: 'localseo6',

    para: 'We provide local SEO services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Whether you operate from one location or manage multiple business locations, we build local search strategies around your target customers, locations, services, and business objectives.',
  },
];

export default function LocalSEOPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Local SEO Company in Mumbai, India"
        title={
          <>
            Improve Your Visibility in
            <span className="text-(--primary)"> Local Search</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Get found by customers searching for your business locally.
                </span>
                <br />
                VMT provides local SEO services that optimize Google Business Profile, Google Maps
                visibility, local keywords, location pages, citations, reviews, and website
                structure across Mumbai, Pune, India, and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Google Business <span className="text-(--primary)">Profile</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Google <span className="text-(--primary)">Maps SEO</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Local Keyword <span className="text-(--primary)">Optimization</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Location <span className="text-(--primary)">SEO</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS LOCAL SEO?
      ===================================================== */}

      <WhaIsService heading="What Is Local SEO?" contents={contents} />

      {/* =====================================================
          CORE LOCAL SEO SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Local SEO Services"
        intro="We optimize the core elements of your local search presence to improve visibility across Google Search, Google Maps, and location-based searches. Our local SEO strategy is built around search intent, geographic relevance, business information, and the specific locations you want to target."
        items={[
          {
            item_link: 'google-business-profile',

            title: 'Google Business Profile Optimization',

            description:
              'Optimize your Google Business Profile with accurate business information, categories, services, descriptions, images, and relevant local signals.',
          },

          {
            item_link: 'local-keyword-research',

            title: 'Local Keyword Research & Mapping',

            description:
              'Identify location-based search queries and map relevant keywords to the pages, services, and locations that best satisfy local search intent.',
          },

          {
            item_link: 'local-on-page-seo',

            title: 'Local On-Page SEO',

            description:
              'Optimize titles, headings, content, URLs, internal links, and location pages for relevant local and commercial searches.',
          },

          {
            item_link: 'location-pages',

            title: 'Location Page SEO',

            description:
              'Create and optimize useful location-specific pages that clearly communicate the areas, services, and customers your business serves.',
          },

          {
            item_link: 'local-citations',

            title: 'Local Citations & Business Listings',

            description:
              'Improve your presence across relevant business directories and local platforms while maintaining consistent business information.',
          },

          {
            item_link: 'local-link-building',

            title: 'Local Link Building',

            description:
              'Build relevant local authority through business directories, partnerships, local publications, community opportunities, and other relevant sources.',
          },

          {
            item_link: 'local-schema',

            title: 'Local Business Schema',

            description:
              'Identify relevant structured data opportunities that help search engines better understand your business, services, locations, and website content.',
          },
        ]}
        details={[
          {
            item_link_id: 'google-business-profile',

            heading: 'Google Business Profile Optimization',

            descriptions: [
              {
                para: 'Google Business Profile is an important part of a local search presence. We review and optimize business information, categories, services, descriptions, images, and other profile elements so your business information is clearly represented.',
              },

              {
                para: 'We also review the relationship between your Google Business Profile and website so important business details remain consistent across your digital presence.',
              },

              {
                para: 'For businesses targeting Mumbai, Pune, other Indian cities, or international locations, the profile strategy is aligned with the actual business location, services, and customers being targeted.',
              },
            ],
          },

          {
            item_link_id: 'local-keyword-research',

            heading: 'Local Keyword Research & Mapping',

            descriptions: [
              {
                para: 'Local SEO begins with understanding how customers search for your products and services within specific locations. We research relevant local keywords based on services, products, cities, areas, customer intent, competitors, and business objectives.',
              },

              {
                para: 'We map relevant keywords to the pages where they are most useful instead of repeatedly targeting the same location keyword across multiple pages. This creates a clearer relationship between services, locations, and search intent.',
              },

              {
                para: 'Our keyword research can cover city-level searches, service-area searches, commercial searches, Google Maps queries, and longer-tail local searches depending on the business and target market.',
              },
            ],
          },

          {
            item_link_id: 'local-on-page-seo',

            heading: 'Local On-Page SEO',

            descriptions: [
              {
                para: 'Local on-page SEO ensures that important website pages clearly communicate the services offered, locations served, and search intent they are designed to satisfy.',
              },

              {
                para: 'We optimize titles, meta descriptions, headings, content, URLs, internal links, images, and other relevant page elements without relying on unnecessary repetition of city or location names.',
              },

              {
                para: 'For service businesses, location pages, landing pages, product pages, and other commercially important pages, we structure content around the actual questions and needs of customers in the target market.',
              },
            ],
          },

          {
            item_link_id: 'location-pages',

            heading: 'Location Page SEO',

            descriptions: [
              {
                para: 'Location pages can help businesses communicate their presence in specific cities or service areas. We create and optimize location pages around genuine business relevance rather than producing thin pages that only replace one city name with another.',
              },

              {
                para: 'We structure location pages with useful information about the services provided, areas served, customer needs, business capabilities, and other relevant local information.',
              },

              {
                para: 'For businesses operating across Mumbai, Pune, Bangalore, Hyderabad, other Indian cities, or international markets, location page structures can be developed around the actual geographic footprint of the business.',
              },
            ],
          },

          {
            item_link_id: 'local-citations',

            heading: 'Local Citations & Business Listings',

            descriptions: [
              {
                para: 'Local citations are online references to important business information such as the business name, address, phone number, website, and other details. We review existing citations and identify relevant opportunities for improving local consistency and visibility.',
              },

              {
                para: 'We focus on relevant and trustworthy business directories rather than building large numbers of low-quality listings simply for quantity.',
              },

              {
                para: 'Consistent business information across important platforms can make it easier for customers and search engines to understand the business and its location.',
              },
            ],
          },

          {
            item_link_id: 'local-link-building',

            heading: 'Local Link Building',

            descriptions: [
              {
                para: "Relevant local links and mentions can help strengthen a business website's authority and geographic relevance. We identify opportunities that are genuinely related to the business, industry, community, or target market.",
              },

              {
                para: 'Depending on the business, opportunities may include local publications, business associations, partnerships, relevant directories, industry websites, community organizations, and digital PR opportunities.',
              },

              {
                para: 'Our approach prioritizes relevance and quality rather than creating large volumes of unrelated backlinks.',
              },
            ],
          },

          {
            item_link_id: 'local-schema',

            heading: 'Local Business Schema',

            descriptions: [
              {
                para: 'Structured data can provide search engines with additional information about a business and the content represented on its website. We identify schema opportunities based on the actual business and page type.',
              },

              {
                para: 'Depending on the website, opportunities can include LocalBusiness, Organization, Service, BreadcrumbList, and other appropriate structured data types.',
              },

              {
                para: 'Schema is treated as a supporting SEO layer and is implemented only where the structured data accurately represents information already available on the website.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Local SEO Cost in India"
        costdesc={[
          {
            para: 'The cost of local SEO depends on the number of locations being targeted, level of competition, current website condition, Google Business Profile status, number of services, citation requirements, content requirements, and the depth of optimization required.',
          },

          {
            para: 'A small local business targeting one city may require optimization for a limited number of important services and locations, while a multi-location business may require a much larger local SEO strategy covering multiple cities, branches, service areas, and location pages.',
          },

          {
            para: 'Our local SEO recommendations are based on the actual condition and requirements of your business. This allows us to prioritize the locations, services, and SEO activities most relevant to generating local search visibility and enquiries.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Local SEO Cost"
        intro="Every business has different local search requirements. These factors influence the scope and investment required for local SEO work."
        facts={[
          'Number of business locations',

          'Local search competition',

          'Number of services or products',

          'Current Google Business Profile condition',

          'Website SEO condition',

          'Number of location pages',

          'Local content requirements',

          'Citation and directory requirements',

          'Review and reputation management requirements',

          'Local link building requirements',

          'Structured data requirements',

          'Ongoing local SEO requirements',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL LOCAL SEO
      ===================================================== */}

      <ServiceComp
        heading="Basic Local SEO vs Professional Local SEO"
        desc="Basic local SEO often focuses on creating a Google Business Profile and adding a few location keywords to a website. Professional local SEO takes a broader approach by connecting Google Business Profile optimization, local keyword research, location pages, on-page SEO, citations, reviews, internal linking, structured data, local authority, and technical website optimization. The objective is to build a consistent local search presence that helps customers discover and evaluate the business."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Local SEO Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Local SEO Optimization Process"
        intro="We follow a structured process to understand your local search market, identify opportunities, optimize important local assets, and continuously improve your visibility in relevant searches."
        steps={[
          {
            title: 'Local SEO Analysis',

            description:
              'We review your website, Google Business Profile, local rankings, business information, competitors, citations, and existing local search visibility.',

            points: [
              'Local SEO audit',

              'Google Business Profile review',

              'Competitor analysis',

              'Website assessment',
            ],
          },

          {
            title: 'Local Keyword & Search Intent Research',

            description:
              'We identify relevant local search queries and understand the intent behind them so keywords can be mapped to the most appropriate services, locations, and pages.',

            points: [
              'Local keyword research',

              'Search intent analysis',

              'Location mapping',

              'Competitor keyword research',
            ],
          },

          {
            title: 'Google Business Profile & Website Optimization',

            description:
              'We optimize your Google Business Profile and important website pages to strengthen relevance for the services and locations you want to target.',

            points: [
              'Profile optimization',

              'Metadata optimization',

              'Content optimization',

              'Location page optimization',
            ],
          },

          {
            title: 'Local Citations & Authority',

            description:
              'We strengthen your local presence through relevant business listings, citations, local links, mentions, and other appropriate authority-building opportunities.',

            points: [
              'Citation optimization',

              'Business listings',

              'Local link opportunities',

              'Authority development',
            ],
          },

          {
            title: 'Local Content & Structured Data',

            description:
              'We improve local content and identify appropriate structured data opportunities that help search engines better understand your business and website.',

            points: [
              'Location content',

              'Local service content',

              'Structured data',

              'Internal linking',
            ],
          },

          {
            title: 'Monitoring & Continuous Optimization',

            description:
              'We review local search performance and identify additional opportunities as rankings, competitors, search demand, locations, and business priorities change.',

            points: [
              'Local ranking monitoring',

              'Google visibility analysis',

              'Traffic and enquiry analysis',

              'Ongoing optimization',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Local SEO Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we optimize local search assets around relevant services, areas, and customer search behavior. Our local SEO strategy can support businesses competing for searches across Mumbai and its surrounding service areas.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, we can build location-aware SEO strategies based on local search demand, competition, services, and the geographic areas the business actually serves.',
          },

          {
            para: 'For businesses targeting customers across India, we combine local and national SEO strategies where required, helping businesses maintain location relevance while building broader organic visibility.',
          },

          {
            para: 'We also provide local SEO services for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other regions. International local SEO strategies can be structured around the target market, business locations, service areas, and local search behavior.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Local SEO Services?"
        intro="Local SEO can benefit businesses that depend on customers searching for products, services, professionals, or businesses within specific geographic areas."
        subintro="Our local SEO services are suitable for:"
        points={[
          'Small businesses targeting local customers',

          'Service businesses competing in city-level searches',

          'Businesses targeting Mumbai and Pune',

          'Professional service companies',

          'Restaurants, clinics, agencies, and local businesses',

          'SaaS and technology companies targeting specific markets',

          'eCommerce businesses with local delivery or physical locations',

          'Multi-location businesses',

          'Businesses launching in new cities',

          'Companies targeting international local search markets',
        ]}
        finalPara="Whether you operate from one location or manage multiple branches, strong local SEO creates a clearer connection between your business, its services, its locations, and the customers searching for them."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="Local SEO Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Improve Your Local Search Visibility"
        description="Get your website and local search presence reviewed for local SEO opportunities."
      />
    </>
  );
}