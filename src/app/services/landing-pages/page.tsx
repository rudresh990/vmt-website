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
  title: 'Landing Page Development Company in Mumbai & India | VoidMatrix',

  description:
    'Landing page development services for businesses, startups, SaaS companies, and campaigns. VoidMatrix builds fast, responsive, SEO-friendly landing pages designed for lead generation and conversions.',

  path: '/services/landing-pages',
});

const s_data = serviceData['/services/landing-pages'];

const contents = [
  {
    id: 'landingpage1',

    para: 'Landing page development is the process of designing and developing a focused web page around a specific marketing, advertising, product, service, or lead generation objective. Unlike a general website page, a landing page is structured around a clear audience, offer, message, and conversion goal.',
  },

  {
    id: 'landingpage2',

    para: 'A professionally developed landing page should communicate the value of an offer quickly, work effectively across mobile and desktop devices, load efficiently, provide a clear user journey, and make it easy for visitors to take the intended action.',
  },

  {
    id: 'landingpage3',

    para: 'At VoidMatrix, we provide landing page development services for businesses, SaaS companies, startups, eCommerce brands, professional services, technology companies, manufacturers, and organizations targeting customers across Mumbai, Pune, India, and global markets.',
  },

  {
    id: 'landingpage4',

    para: 'Our landing page development process combines frontend development, responsive design, technical SEO, performance optimization, conversion-focused structure, analytics, and third-party integrations where required.',
  },

  {
    id: 'landingpage5',

    para: 'Landing pages can be developed for Google Ads, Meta Ads, SEO campaigns, product launches, service campaigns, lead generation, event registrations, downloadable resources, SaaS products, and other marketing objectives where a focused conversion experience is required.',
  },

  {
    id: 'landingpage6',

    para: 'We develop landing pages for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. The architecture and content structure can be adapted according to the target audience, campaign, industry, location, search intent, and business objective.',
  },
];

export default function LandingPageDevelopmentPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Landing Page Development Services in Mumbai, India"
        title={
          <>
            Landing Pages Built For
            <span className="text-(--primary)"> Conversions</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Build fast, responsive landing pages designed around your business goals.
                </span>
                <br />
                VoidMatrix develops SEO-friendly landing pages for lead generation, advertising
                campaigns, products, services, SaaS businesses, and marketing campaigns across
                Mumbai, Pune, India, and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Landing Page <span className="text-(--primary)">Development</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Conversion <span className="text-(--primary)">Focused</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                SEO <span className="text-(--primary)">Friendly</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Fast <span className="text-(--primary)">Performance</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS LANDING PAGE DEVELOPMENT?
      ===================================================== */}

      <WhaIsService heading="What Is Landing Page Development?" contents={contents} />

      {/* =====================================================
          CORE LANDING PAGE DEVELOPMENT SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Landing Page Development Services"
        intro="We develop focused landing pages around specific business objectives, marketing campaigns, audiences, offers, and conversion goals while maintaining strong performance and technical foundations."
        items={[
          {
            item_link: 'lead-generation-landing-pages',

            title: 'Lead Generation Landing Pages',

            description:
              'Develop focused landing pages designed to capture qualified leads through clear messaging, forms, calls to action, trust elements, and conversion-focused layouts.',
          },

          {
            item_link: 'google-ads-landing-pages',

            title: 'Google Ads Landing Pages',

            description:
              'Build campaign-specific landing pages aligned with advertising intent, relevant messaging, conversion goals, tracking requirements, and user expectations.',
          },

          {
            item_link: 'meta-ads-landing-pages',

            title: 'Meta Ads Landing Pages',

            description:
              'Create mobile-friendly landing pages for Meta advertising campaigns with focused messaging, fast loading, clear calls to action, and conversion tracking.',
          },

          {
            item_link: 'saas-landing-pages',

            title: 'SaaS Landing Pages',

            description:
              'Develop SaaS landing pages that clearly communicate product value, features, benefits, use cases, integrations, pricing, and conversion paths.',
          },

          {
            item_link: 'product-landing-pages',

            title: 'Product Landing Pages',

            description:
              'Build product-focused landing pages designed to communicate product benefits, features, use cases, proof points, and calls to action.',
          },

          {
            item_link: 'service-landing-pages',

            title: 'Service Landing Pages',

            description:
              'Develop dedicated landing pages for individual services with focused messaging, relevant information, trust signals, and conversion opportunities.',
          },

          {
            item_link: 'seo-landing-pages',

            title: 'SEO-Friendly Landing Pages',

            description:
              'Develop landing pages with search-friendly architecture, semantic HTML, metadata, headings, content structure, internal linking opportunities, and performance optimization.',
          },
        ]}
        details={[
          {
            item_link_id: 'lead-generation-landing-pages',

            heading: 'Lead Generation Landing Pages',

            descriptions: [
              {
                para: 'Lead generation landing pages are designed around one primary objective: encouraging visitors to submit their information or initiate contact with a business.',
              },

              {
                para: 'We structure lead generation pages around clear value propositions, relevant supporting information, trust signals, forms, calls to action, and a focused user journey.',
              },

              {
                para: 'Landing pages can also be connected with CRM systems, email platforms, analytics tools, and other lead management systems where required.',
              },
            ],
          },

          {
            item_link_id: 'google-ads-landing-pages',

            heading: 'Google Ads Landing Pages',

            descriptions: [
              {
                para: 'A dedicated landing page can provide a more focused experience for visitors arriving from Google Ads campaigns. Instead of sending advertising traffic to a general website page, the landing page can be structured around the specific campaign, keyword theme, offer, and conversion objective.',
              },

              {
                para: 'We develop Google Ads landing pages with clear messaging, relevant content, strong calls to action, responsive layouts, fast loading performance, and conversion tracking requirements.',
              },

              {
                para: 'The objective is to create a consistent experience between the advertisement, landing page, and intended conversion action.',
              },
            ],
          },

          {
            item_link_id: 'meta-ads-landing-pages',

            heading: 'Meta Ads Landing Pages',

            descriptions: [
              {
                para: 'Meta advertising traffic can include users browsing primarily on mobile devices. Landing pages therefore need responsive layouts, fast loading, clear messaging, and a simple conversion path.',
              },

              {
                para: 'We develop landing pages for Meta campaigns around specific audiences, offers, products, services, and campaign objectives.',
              },

              {
                para: 'Analytics and conversion tracking can also be incorporated to help businesses measure campaign performance.',
              },
            ],
          },

          {
            item_link_id: 'saas-landing-pages',

            heading: 'SaaS Landing Pages',

            descriptions: [
              {
                para: 'SaaS landing pages need to explain a software product clearly while helping visitors understand its value, features, use cases, integrations, and potential business benefits.',
              },

              {
                para: 'We develop SaaS landing pages with sections appropriate for the product and target audience, including product explanations, features, use cases, social proof, integrations, FAQs, and calls to action.',
              },

              {
                para: 'The page architecture can also be designed to support SEO, paid campaigns, product launches, and ongoing conversion optimization.',
              },
            ],
          },

          {
            item_link_id: 'product-landing-pages',

            heading: 'Product Landing Pages',

            descriptions: [
              {
                para: 'Product landing pages focus attention on a specific product and its value proposition. They can be used for product launches, advertising campaigns, product research, and direct conversion journeys.',
              },

              {
                para: 'We structure product landing pages around the information customers need to understand the product, evaluate its benefits, and take the next action.',
              },

              {
                para: 'Depending on the business, this can include product features, specifications, benefits, use cases, reviews, FAQs, pricing information, and conversion elements.',
              },
            ],
          },

          {
            item_link_id: 'service-landing-pages',

            heading: 'Service Landing Pages',

            descriptions: [
              {
                para: 'Service landing pages are designed around a specific service rather than the complete service offering of a business.',
              },

              {
                para: 'This allows businesses to create focused pages for individual services, advertising campaigns, locations, industries, or customer segments.',
              },

              {
                para: 'We develop service landing pages with clear service information, benefits, trust elements, relevant FAQs, calls to action, and conversion-focused page structures.',
              },
            ],
          },

          {
            item_link_id: 'seo-landing-pages',

            heading: 'SEO-Friendly Landing Pages',

            descriptions: [
              {
                para: 'Landing pages can also contribute to organic search visibility when they provide useful, relevant content that matches search intent.',
              },

              {
                para: 'We consider headings, metadata, semantic structure, URLs, internal linking opportunities, content organization, responsive design, page performance, and other relevant technical SEO elements during development.',
              },

              {
                para: 'The objective is to create landing pages that provide a strong user experience while maintaining a technical foundation suitable for search engines.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Landing Page Development Cost in India"
        costdesc={[
          {
            para: 'The cost of landing page development depends on the page complexity, number of sections, design requirements, animations, integrations, content requirements, tracking setup, CMS requirements, and technical architecture.',
          },

          {
            para: 'A simple lead generation landing page requires a different level of development effort compared with a complex SaaS product landing page, advertising funnel, or highly customized campaign experience.',
          },

          {
            para: 'VoidMatrix focuses on building landing pages around the actual business objective rather than adding unnecessary functionality. The scope can be planned according to the campaign, audience, traffic source, conversion goal, and long-term requirements.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Landing Page Development Cost"
        intro="The development effort varies according to the purpose, design, functionality, integrations, and optimization requirements of the landing page."
        facts={[
          'Number of sections',

          'Custom UI design',

          'Responsive development',

          'Animations and interactions',

          'Lead generation forms',

          'CRM integrations',

          'Analytics and conversion tracking',

          'Payment or checkout integrations',

          'CMS requirements',

          'SEO requirements',

          'Performance optimization',

          'Number of landing pages',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL LANDING PAGE DEVELOPMENT
      ===================================================== */}

      <ServiceComp
        heading="Basic Landing Page vs Professional Landing Page Development"
        desc="A basic landing page may focus primarily on presenting information and a simple call to action. Professional landing page development goes further by considering the target audience, traffic source, conversion objective, responsive experience, page speed, technical SEO, analytics, integrations, messaging hierarchy, trust elements, and user journey. The objective is to develop a focused digital experience that supports the specific business or marketing goal."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Landing Page Development Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Landing Page Development Process"
        intro="We follow a structured development process to build landing pages around the intended audience, traffic source, business objective, and conversion goal."
        steps={[
          {
            title: 'Goal & Requirement Analysis',

            description:
              'We understand the campaign, audience, offer, traffic source, conversion objective, and technical requirements before development begins.',

            points: [
              'Business objective',

              'Target audience',

              'Campaign requirements',

              'Conversion goal',
            ],
          },

          {
            title: 'Landing Page Structure',

            description:
              'We plan the information hierarchy and user journey so visitors can quickly understand the offer and move toward the intended action.',

            points: [
              'Page structure',

              'Content hierarchy',

              'Call-to-action placement',

              'Conversion journey',
            ],
          },

          {
            title: 'UI & Frontend Development',

            description:
              'We develop the landing page with responsive layouts, clean frontend architecture, appropriate interactions, and a consistent visual experience.',

            points: [
              'Responsive development',

              'Frontend implementation',

              'UI components',

              'Mobile optimization',
            ],
          },

          {
            title: 'SEO & Performance Optimization',

            description:
              'We optimize the technical foundation of the landing page for search visibility, loading performance, usability, and accessibility.',

            points: [
              'Technical SEO',

              'Page speed',

              'Semantic structure',

              'Performance optimization',
            ],
          },

          {
            title: 'Tracking & Integrations',

            description:
              'Where required, we integrate analytics, conversion tracking, forms, CRM systems, advertising platforms, and other third-party services.',

            points: [
              'Analytics',

              'Conversion tracking',

              'CRM integration',

              'Third-party integrations',
            ],
          },

          {
            title: 'Testing & Launch',

            description:
              'We test the landing page across devices and browsers, verify forms and integrations, and prepare the final page for launch.',

            points: [
              'Cross-device testing',

              'Form testing',

              'Performance testing',

              'Launch preparation',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Landing Page Development Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we develop landing pages for local lead generation, advertising campaigns, professional services, startups, technology businesses, and other organizations targeting customers in Mumbai and surrounding markets.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, landing pages can be developed for local campaigns, national marketing initiatives, SaaS products, services, products, and lead generation.',
          },

          {
            para: 'For businesses targeting customers across India, we develop landing pages around national campaigns, products, services, advertising traffic, SEO campaigns, and specific customer segments.',
          },

          {
            para: 'We also develop landing pages for international businesses and campaigns targeting markets including the USA, UK, UAE, Europe, Australia, and other regions. Page structure and messaging can be adapted according to the target market and campaign requirements.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Landing Page Development Services?"
        intro="Landing page development is useful for businesses that need a focused digital experience around a specific campaign, offer, product, service, audience, or conversion objective."
        subintro="Our landing page development services are suitable for:"
        points={[
          'SaaS companies',

          'eCommerce businesses',

          'B2B companies',

          'Technology companies',

          'Manufacturers',

          'Professional service businesses',

          'Startups',

          'Local businesses',

          'Marketing campaigns',

          'Businesses targeting international markets',
        ]}
        finalPara="Whether you need a landing page for paid advertising, lead generation, SEO, a product launch, or a specific service, VoidMatrix can develop a focused experience around your business objective."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="Landing Page Development FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Need a Landing Page That Converts?"
        description="Build a fast, responsive and conversion-focused landing page around your campaign, product, service or business objective."
      />
    </>
  );
}
