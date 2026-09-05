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
import WhyVmtService from '@/components/services/WhyVmtService';
import WhatYouGet from '@/components/services/WhatYouGet';

export const metadata: Metadata = buildMetadata({
  title: 'Local SEO Company in Mumbai | Google Maps & Local SEO Services',

  description:
    'Get more visibility on Google Search and Maps with local SEO services from VoidMatrix. We optimize Google Business Profile, local keywords, location pages, citations and website SEO to generate qualified local enquiries.',

  path: '/services/local-seo',
});

const s_data = serviceData['/services/local-seo'];

const whyContents = [
  {
    id: 'why1',
    paraHeading: 'Local SEO + Technical SEO Expertise',
    para: 'Your Google visibility depends on more than your Business Profile. VoidMatrix can optimize the website, location pages, internal links, structured data, metadata and technical foundations supporting your local search presence.',
  },

  {
    id: 'why2',
    paraHeading: 'Strategy Built Around Your Services',
    para: 'We connect local searches to the services you actually sell. Instead of creating generic location content, we build a search strategy around your services, locations, customers, competitors and commercial priorities.',
  },

  {
    id: 'why3',
    paraHeading: 'Focused on Qualified Local Searches',
    para: 'Ranking for a large number of irrelevant searches does not create a strong business outcome. We prioritize searches that can put your business in front of customers actively looking for your products or services.',
  },

  {
    id: 'why4',
    paraHeading: 'Built for Long-Term Organic Growth',
    para: 'We work across your local search ecosystem rather than relying on a single optimization tactic. The objective is to build a stronger, more consistent presence across Google Search, Google Maps and your website.',
  },
];

const whatYouGetContents = [
  {
    id: 'get1',
    paraHeading: 'Local SEO Audit',
    para: 'Identify technical, content, Google Business Profile, location and competitive opportunities affecting your local search visibility.',
  },

  {
    id: 'get2',
    paraHeading: 'Google Business Profile Optimization',
    para: 'Improve the relevance and completeness of your Google Business Profile around your actual services, business information and target locations.',
  },

  {
    id: 'get3',
    paraHeading: 'Local Keyword Strategy',
    para: 'Identify valuable service + location searches and map them to the pages that should compete for those searches.',
  },

  {
    id: 'get4',
    paraHeading: 'Location & Service Page Optimization',
    para: 'Create or improve pages that clearly communicate what you offer, where you offer it and which customer searches they are designed to satisfy.',
  },

  {
    id: 'get5',
    paraHeading: 'Citations & Local Authority',
    para: 'Improve relevant business listings and identify appropriate opportunities for citations, mentions and local authority development.',
  },

  {
    id: 'get6',
    paraHeading: 'Performance Monitoring & Optimization',
    para: 'Review rankings, visibility, traffic and business outcomes to identify what should be improved as your market and competitors change.',
  },
];

const contents = [
  {
    id: 'localseo1',

    para: 'Local SEO is the process of improving a business website and online presence so it can appear more prominently when customers search for products, services or businesses within a specific geographic area. It covers Google Search, Google Maps, Google Business Profile, location-focused pages, local listings and other relevant search signals.',
  },

  {
    id: 'localseo2',

    para: 'For a business competing locally, the objective is not simply to rank for a city name. A useful local SEO strategy connects customer search intent with the right service, business location and website page while maintaining accurate and consistent business information across important local search assets.',
  },

  {
    id: 'localseo3',

    para: 'VoidMatrix provides local SEO services for small businesses, service companies, startups, professional services, SaaS companies, eCommerce businesses and multi-location organizations. Our work can include Google Business Profile optimization, local keyword research, on-page SEO, location pages, citations, local authority, internal linking and structured data.',
  },

  {
    id: 'localseo4',

    para: 'Because local SEO often depends on the relationship between a business profile and its website, our approach combines SEO strategy with technical and web development expertise. This allows us to address the website architecture supporting local search rather than treating the Business Profile as an isolated asset.',
  },

  {
    id: 'localseo5',

    para: 'Local SEO is particularly valuable when customers use location-based searches before contacting a business. Strong visibility for relevant searches can contribute to calls, enquiries, website visits, direction requests, appointments and other customer actions.',
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
            Turn Local Google Searches Into
            <span className="text-(--primary)"> Qualified Leads</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Get your business in front of customers searching for your services on Google
                  Search and Google Maps.
                </span>
                <br />
                VoidMatrix provides local SEO services that improve Google Business Profile
                visibility, local rankings, location pages, website relevance and local search
                presence across Mumbai, Pune, India and global markets.
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
                Local <span className="text-(--primary)">Keyword Strategy</span>
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
          WHY CHOOSE VOIDMATRIX
      ===================================================== */}

      <WhyVmtService heading="Why Choose VoidMatrix for Local SEO?" contents={whyContents} />

      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}

      <WhatYouGet
        heading="What You Get With Our Local SEO Services"
        contents={whatYouGetContents}
      />

      {/* =====================================================
          CORE LOCAL SEO SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Local SEO Services Built Around Your Business"
        intro="We combine Google Business Profile optimization, website SEO, location targeting and local authority development into a practical strategy designed around the services, locations and customers that matter to your business."
        items={[
          {
            item_link: 'google-business-profile',
            title: 'Google Business Profile Optimization',
            description:
              'Optimize your Google Business Profile around accurate business information, relevant categories, services, descriptions and local relevance.',
          },

          {
            item_link: 'local-keyword-research',
            title: 'Local Keyword Research & Mapping',
            description:
              'Find the local searches your potential customers use and map them to the right services, locations and website pages.',
          },

          {
            item_link: 'local-on-page-seo',
            title: 'Local On-Page SEO',
            description:
              'Optimize titles, headings, content, URLs, internal links and other page elements for relevant local and commercial searches.',
          },

          {
            item_link: 'location-pages',
            title: 'Location Page SEO',
            description:
              'Build useful location pages that communicate your services, geographic coverage and relevance to customers in specific areas.',
          },

          {
            item_link: 'local-citations',
            title: 'Local Citations & Business Listings',
            description:
              'Improve relevant business listings and maintain consistent business information across important local directories and platforms.',
          },

          {
            item_link: 'local-link-building',
            title: 'Local Link Building',
            description:
              'Develop relevant local authority through appropriate directories, partnerships, publications, mentions and other credible opportunities.',
          },

          {
            item_link: 'local-schema',
            title: 'Local Business Schema',
            description:
              'Implement relevant structured data opportunities that help search engines better understand your business, services and website.',
          },
        ]}
        details={[
          {
            item_link_id: 'google-business-profile',

            heading: 'Google Business Profile Optimization',

            descriptions: [
              {
                para: 'We review your Google Business Profile and identify opportunities across business information, categories, services, descriptions and other relevant profile elements.',
              },

              {
                para: 'The strategy is aligned with the actual services and locations your business serves rather than relying on repetitive location keywords.',
              },

              {
                para: 'We also consider how your Business Profile and website work together so your business information remains clear and consistent across your local search presence.',
              },
            ],
          },

          {
            item_link_id: 'local-keyword-research',

            heading: 'Local Keyword Research & Mapping',

            descriptions: [
              {
                para: 'We research the searches customers use when looking for your services in specific cities, areas and service regions.',
              },

              {
                para: 'Keywords are mapped according to search intent so commercial searches can be directed toward the most relevant service or location pages.',
              },

              {
                para: 'This helps prevent multiple pages from competing for the same search while creating a clearer relationship between services, locations and customer intent.',
              },
            ],
          },

          {
            item_link_id: 'local-on-page-seo',

            heading: 'Local On-Page SEO',

            descriptions: [
              {
                para: 'We optimize important website pages so search engines and customers can clearly understand your services, locations and commercial offering.',
              },

              {
                para: 'Optimization can include titles, meta descriptions, headings, content, URLs, internal links, images and other relevant page elements.',
              },

              {
                para: 'The focus is on relevance and usefulness rather than repeatedly inserting city names into content.',
              },
            ],
          },

          {
            item_link_id: 'location-pages',

            heading: 'Location Page SEO',

            descriptions: [
              {
                para: 'If your business serves multiple cities or areas, location pages can create dedicated entry points for relevant local searches.',
              },

              {
                para: 'We structure location pages around genuine business coverage, relevant services and useful information instead of creating thin pages that only change the city name.',
              },

              {
                para: 'Location page architecture can also be connected through internal linking so search engines can better understand relationships between services and locations.',
              },
            ],
          },

          {
            item_link_id: 'local-citations',

            heading: 'Local Citations & Business Listings',

            descriptions: [
              {
                para: 'We identify relevant directories and business listing opportunities where your business information can be represented accurately and consistently.',
              },

              {
                para: 'Citation work can help strengthen the consistency of important business information across the local search ecosystem.',
              },

              {
                para: 'The focus remains on relevant and useful listings rather than creating large volumes of low-value directory submissions.',
              },
            ],
          },

          {
            item_link_id: 'local-link-building',

            heading: 'Local Link Building',

            descriptions: [
              {
                para: 'We identify appropriate opportunities for building local authority through relevant businesses, publications, partnerships, organizations and other credible sources.',
              },

              {
                para: 'Local authority development is aligned with your industry and target market rather than relying on unrelated backlink volume.',
              },

              {
                para: 'The objective is to strengthen the overall credibility and relevance of the website supporting your local search strategy.',
              },
            ],
          },

          {
            item_link_id: 'local-schema',

            heading: 'Local Business Schema',

            descriptions: [
              {
                para: 'We identify structured data opportunities that accurately represent information already available on your website.',
              },

              {
                para: 'Depending on the website, this can include appropriate LocalBusiness, Organization, Service, BreadcrumbList and other relevant schema types.',
              },

              {
                para: 'Structured data is treated as a supporting SEO layer rather than a replacement for strong content, website architecture or local relevance.',
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
            para: 'Local SEO pricing depends on the number of locations, competitive difficulty, number of services, current website condition, Google Business Profile status, content requirements and the level of ongoing optimization required.',
          },

          {
            para: 'A single-location business competing in one city may require a focused local SEO campaign, while a multi-location business may require a larger strategy covering multiple branches, cities, services, location pages and local search assets.',
          },

          {
            para: 'VoidMatrix recommends the scope based on your actual business requirements instead of applying the same local SEO package to every company. This allows the investment to be focused on the activities most likely to improve relevant local visibility and customer acquisition.',
          },
        ]}
      />

      {/* =====================================================
          COST FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="What Determines Your Local SEO Investment?"
        intro="The right local SEO budget depends on the market you are competing in and the amount of work required to establish a stronger local search presence."
        facts={[
          'Number of business locations',

          'Number of cities or service areas',

          'Local search competition',

          'Number of services or products',

          'Current Google Business Profile condition',

          'Existing website SEO condition',

          'Number of location and service pages',

          'Content creation requirements',

          'Citation and directory requirements',

          'Local authority and link-building requirements',

          'Technical SEO requirements',

          'Ongoing monitoring and optimization',
        ]}
      />

      {/* =====================================================
          COMPARISON
      ===================================================== */}

      <ServiceComp
        heading="Basic Local SEO vs Professional Local SEO"
        desc="Basic local SEO may involve setting up or updating a Google Business Profile and adding location keywords to a website. Professional local SEO takes a broader business-focused approach by connecting Google Business Profile optimization, local keyword research, service pages, location pages, technical SEO, internal linking, citations, local authority and ongoing optimization. The difference is not simply the number of SEO activities performed - it is whether those activities work together around the searches that can generate customers."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Your Local SEO Estimate" url="/contact" />

      {/* =====================================================
          LOCAL SEO PROCESS
      ===================================================== */}

      <ServiceApproachSection
        heading="How Our Local SEO Services Work"
        intro="We build your local SEO strategy around your business, target locations, services, competitors and customer search behavior. Each stage is designed to identify opportunities, implement the right optimizations and improve the areas that matter most."
        steps={[
          {
            title: 'Local SEO & Competitor Analysis',

            description:
              'We evaluate your current website, Google Business Profile, local visibility, competitors and target market to identify the strongest opportunities.',

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
              'We identify relevant searches and map them to the services, locations and pages that should satisfy those searches.',

            points: [
              'Local keyword research',

              'Search intent analysis',

              'Location mapping',

              'Competitor keyword analysis',
            ],
          },

          {
            title: 'Google Business Profile & Website Optimization',

            description:
              'We optimize the local search assets that directly represent your business, services and target locations.',

            points: [
              'Profile optimization',

              'Metadata optimization',

              'Content optimization',

              'Location page optimization',
            ],
          },

          {
            title: 'Local Citations & Authority Development',

            description:
              'We strengthen relevant local signals through appropriate listings, citations, mentions and authority-building opportunities.',

            points: [
              'Citation optimization',

              'Business listings',

              'Local link opportunities',

              'Authority development',
            ],
          },

          {
            title: 'Local Content & Technical SEO',

            description:
              'We improve the supporting website structure so services, locations and related pages are easier for users and search engines to understand.',

            points: ['Location content', 'Service content', 'Internal linking', 'Structured data'],
          },

          {
            title: 'Performance Monitoring & Optimization',

            description:
              'We review local search performance and identify the next opportunities as rankings, competitors, search demand and business priorities change.',

            points: [
              'Local ranking monitoring',

              'Google visibility analysis',

              'Traffic analysis',

              'Ongoing optimization',
            ],
          },
        ]}
      />

      {/* =====================================================
          WHAT IS LOCAL SEO
      ===================================================== */}

      <WhaIsService heading="What Is Local SEO?" contents={contents} />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Is Local SEO Right for Your Business?"
        intro="Local SEO is most valuable when customers search for your products or services within specific cities, areas or service regions and your business wants to turn that search visibility into enquiries, calls, visits or sales."
        subintro="Our local SEO services can be suitable for:"
        points={[
          'Local businesses competing within a city',

          'Service businesses targeting specific areas',

          'Businesses targeting customers across Mumbai or Pune',

          'Professional service companies',

          'Restaurants, clinics, agencies and local businesses',

          'SaaS and technology companies targeting specific markets',

          'eCommerce businesses with local delivery or physical locations',

          'Multi-location businesses',

          'Businesses expanding into new cities',

          'Companies targeting international local search markets',
        ]}
        finalPara="Whether you operate from one location or multiple branches, VoidMatrix can structure the local SEO strategy around the services you sell, the locations you serve and the customers you want to reach."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="Local SEO Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Ready to Get More Local Customers From Google?"
        description="Tell VoidMatrix about your business, target locations and services. We can assess your current local search presence and identify the SEO opportunities worth prioritizing."
      />
    </>
  );
}
