import type { Metadata } from 'next';
import Link from 'next/link';

import Hero from '@/components/sections/common/Hero';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import ServicesFAQ from '@/components/sections/ServicesFAQ';
import Position from '@/components/sections/home/Positioning';
import Eyebrow from '@/components/common/eyebrow';
import GlassCard from '@/components/ui/GlassCard';
import MainServiceCTA from '@/components/services/MainServiceCTA';

import { buildMetadata } from '../../lib/schema/seo';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';

export const metadata: Metadata = buildMetadata({
  title: 'SEO & Digital Marketing Services in Mumbai | VoidMatrix',
  description:
    'Explore technical SEO, on-page SEO, local SEO, enterprise SEO, content marketing, Google Ads, Meta Ads, lead generation and digital marketing services from VoidMatrix.',
  path: '/services/marketing-and-seo',
});

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    q: 'What SEO and digital marketing services does VoidMatrix provide?',
    a: 'VoidMatrix provides technical SEO, on-page SEO, local SEO, enterprise SEO, SEO audits, SEO content, website copywriting, landing pages, content strategy, case studies, Google Ads, Meta Ads, lead generation, email marketing and social media management.',
  },
  {
    q: 'What is technical SEO?',
    a: 'Technical SEO focuses on the technical foundation of a website, including crawling, indexing, site architecture, performance, Core Web Vitals and other factors that affect search engine accessibility and performance.',
  },
  {
    q: 'Does VoidMatrix provide local SEO services?',
    a: 'Yes. VoidMatrix provides local SEO services designed to improve visibility for businesses targeting customers in specific cities, regions and service areas.',
  },
  {
    q: 'Can VoidMatrix help with Google rankings?',
    a: 'Yes. VoidMatrix works on technical SEO, on-page optimisation, content strategy and other search-focused activities designed to improve organic visibility and qualified search traffic.',
  },
  {
    q: 'Does VoidMatrix manage Google Ads and Meta Ads?',
    a: 'Yes. VoidMatrix provides paid advertising services across platforms such as Google Ads and Meta Ads, with campaigns structured around business objectives and lead generation.',
  },
  {
    q: 'Does VoidMatrix provide SEO content and website copywriting?',
    a: 'Yes. VoidMatrix provides SEO blog writing, website copywriting, landing page content, content strategy and case-study content designed to support search visibility and conversion.',
  },
  {
    q: 'What is the difference between SEO and digital marketing?',
    a: 'SEO primarily focuses on improving organic visibility in search engines, while digital marketing can include paid advertising, lead generation, email marketing, social media and other channels used to acquire and convert customers.',
  },
  {
    q: 'Can SEO and paid advertising be used together?',
    a: 'Yes. SEO can build long-term organic visibility while paid advertising can generate targeted traffic and leads more immediately. Combining both can provide a broader digital acquisition strategy.',
  },
  {
    q: 'Does VoidMatrix work with businesses outside Mumbai?',
    a: 'Yes. VoidMatrix is based in Mumbai and provides SEO and digital marketing services to businesses across India and international markets.',
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function MarketingAndSeoPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <Hero
        eyebrow="SEO & Digital Marketing Services in Mumbai, India"
        title={<>SEO & <span className="text-(--primary)">Digital Marketing</span> Services That <span className="text-(--primary)">Drive Business Growth</span></>}
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  VoidMatrix provides search engine optimisation and digital
                  marketing services for businesses that want more visibility,
                  qualified traffic and leads.
                </span>
                <br />
                From technical SEO and local search to content, Google Ads,
                Meta Ads and lead generation, we build digital growth
                strategies around measurable business objectives.
              </p>
            </div>
          </>
        }
      />

      <CtaButtonRe
        title="Get Free SEO Consultation"
        url="/contact"
      />

      {/* =========================================================
          INTRO
      ========================================================= */}

      <Position
        heading="MARKETING & SEO"
        title="Search Visibility, Content & Digital Growth"
        tagline="Build sustainable organic visibility while using paid and content channels to generate qualified business opportunities."
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VoidMatrix combines technical SEO, content, paid advertising and
          digital marketing services to help businesses improve their online
          presence and generate measurable growth. Explore each service below
          to understand the specific solution and scope.
        </p>
      </Position>

      {/* =========================================================
          SEO
      ========================================================= */}

      <Position
        heading="SEO"
        title="Search Engine Optimisation Services"
        tagline="Build a technically strong website and improve your visibility for the searches that matter to your business."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <Link
            href="/services/technical-seo"
            className="card-link"
          >
            <Eyebrow
              message="SEO"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Technical SEO
            </h3>

            <p>
              Improve crawling, indexing, site architecture, performance and
              technical search visibility.
            </p>

            <span className="internal-link">
              Explore Technical SEO →
            </span>
          </Link>

          <Link
            href="/services/on-page-seo"
            className="card-link"
          >
            <Eyebrow
              message="SEO"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              On-Page SEO
            </h3>

            <p>
              Optimise page structure, content, headings, internal linking and
              search intent to improve organic relevance.
            </p>

            <span className="internal-link">
              Explore On-Page SEO →
            </span>
          </Link>

          <Link
            href="/services/local-seo"
            className="card-link"
          >
            <Eyebrow
              message="SEO"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Local SEO
            </h3>

            <p>
              Improve local search visibility and help customers discover your
              business in targeted locations.
            </p>

            <span className="internal-link">
              Explore Local SEO →
            </span>
          </Link>

          <Link
            href="/services/enterprise-seo"
            className="card-link"
          >
            <Eyebrow
              message="SEO"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Enterprise SEO
            </h3>

            <p>
              Manage large-scale search strategies, site structures and
              optimisation requirements for complex organisations.
            </p>

            <span className="internal-link">
              Explore Enterprise SEO →
            </span>
          </Link>

          <Link
            href="/services/seo-audit"
            className="card-link"
          >
            <Eyebrow
              message="SEO"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              SEO Audits
            </h3>

            <p>
              Identify technical, structural, content and indexing issues that
              may be limiting your website's organic performance.
            </p>

            <span className="internal-link">
              Explore SEO Audits →
            </span>
          </Link>

        </div>

        <div className="mt-6">
          <Link
            href="/services/seo-services"
            className="internal-link font-semibold!"
          >
            → Explore Complete SEO Services
          </Link>
        </div>
      </Position>

      {/* =========================================================
          CONTENT & GROWTH
      ========================================================= */}

      <Position
        heading="CONTENT & GROWTH"
        title="SEO Content & Conversion-Focused Content Services"
        tagline="Create useful content that supports search visibility, communicates your value and moves visitors toward action."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <Link
            href="/services/seo-blog-writing"
            className="card-link"
          >
            <Eyebrow
              message="Content"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              SEO Blog Writing
            </h3>

            <p>
              Search-focused blog content built around relevant topics,
              keywords, user intent and long-term organic growth.
            </p>

            <span className="internal-link">
              Explore SEO Blog Writing →
            </span>
          </Link>

          <Link
            href="/services/website-copywriting"
            className="card-link"
          >
            <Eyebrow
              message="Content"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Website Copywriting
            </h3>

            <p>
              Clear, persuasive website content designed to communicate your
              offer and support both SEO and conversion.
            </p>

            <span className="internal-link">
              Explore Website Copywriting →
            </span>
          </Link>

          <Link
            href="/services/landing-pages"
            className="card-link"
          >
            <Eyebrow
              message="Conversion"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Landing Pages
            </h3>

            <p>
              Purpose-built landing pages designed around specific campaigns,
              audiences, offers and conversion objectives.
            </p>

            <span className="internal-link">
              Explore Landing Pages →
            </span>
          </Link>

          <Link
            href="/services/content-strategy"
            className="card-link"
          >
            <Eyebrow
              message="Strategy"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Content Strategy
            </h3>

            <p>
              Plan content around search demand, customer intent, business
              goals and opportunities for sustainable organic growth.
            </p>

            <span className="internal-link">
              Explore Content Strategy →
            </span>
          </Link>

          <Link
            href="/services/case-studies"
            className="card-link"
          >
            <Eyebrow
              message="Content"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Case Studies
            </h3>

            <p>
              Structured case-study content that communicates project outcomes,
              expertise, solutions and measurable business value.
            </p>

            <span className="internal-link">
              Explore Case Studies →
            </span>
          </Link>

        </div>
      </Position>

      {/* =========================================================
          DIGITAL MARKETING
      ========================================================= */}

      <Position
        heading="DIGITAL MARKETING"
        title="Performance-Focused Digital Marketing Services"
        tagline="Reach the right audience through paid campaigns, lead generation and customer communication channels."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <Link
            href="/services/google-ads"
            className="card-link"
          >
            <Eyebrow
              message="Paid Advertising"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Google Ads
            </h3>

            <p>
              Search and paid campaign management focused on reaching
              high-intent users and generating qualified enquiries.
            </p>

            <span className="internal-link">
              Explore Google Ads →
            </span>
          </Link>

          <Link
            href="/services/meta-ads"
            className="card-link"
          >
            <Eyebrow
              message="Paid Advertising"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Meta Ads
            </h3>

            <p>
              Facebook and Instagram advertising campaigns built around
              audience targeting, offers and measurable outcomes.
            </p>

            <span className="internal-link">
              Explore Meta Ads →
            </span>
          </Link>

          <Link
            href="/services/lead-generation"
            className="card-link"
          >
            <Eyebrow
              message="Lead Generation"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Lead Generation
            </h3>

            <p>
              Digital acquisition strategies and funnels designed to turn
              traffic into qualified business enquiries.
            </p>

            <span className="internal-link">
              Explore Lead Generation →
            </span>
          </Link>

          <Link
            href="/services/email-marketing"
            className="card-link"
          >
            <Eyebrow
              message="Email Marketing"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Email Marketing
            </h3>

            <p>
              Campaigns and customer communication strategies designed to
              nurture prospects and support retention.
            </p>

            <span className="internal-link">
              Explore Email Marketing →
            </span>
          </Link>

          <Link
            href="/services/social-media-management"
            className="card-link"
          >
            <Eyebrow
              message="Social Media"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Social Media Management
            </h3>

            <p>
              Structured social media management for businesses looking to
              build visibility, engagement and consistent brand presence.
            </p>

            <span className="internal-link">
              Explore Social Media Management →
            </span>
          </Link>

        </div>

        <div className="mt-6">
          <Link
            href="/services/digital-marketing-and-content"
            className="internal-link font-semibold!"
          >
            → Explore Complete Digital Marketing Services
          </Link>
        </div>
      </Position>

      {/* =========================================================
          WHY VOIDMATRIX
      ========================================================= */}

      <Position
        heading="WHY VOIDMATRIX"
        title="SEO, Content & Marketing Connected to Business Goals"
        tagline="We focus on the relationship between visibility, traffic, conversion and measurable business outcomes."
        clsName="hero-eyebrow-glowing-b"
      >

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">01</span>

          <h2 className="font-semibold">
            Technical Foundation
          </h2>

          <p>
            SEO starts with a website that search engines can crawl, understand
            and index effectively.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">02</span>

          <h2 className="font-semibold">
            Search Intent
          </h2>

          <p>
            Content and optimisation should target the searches and questions
            that are relevant to your customers and business.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">03</span>

          <h2 className="font-semibold">
            Measurable Growth
          </h2>

          <p>
            SEO and digital campaigns should ultimately contribute to traffic,
            qualified leads, conversions and business growth.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">04</span>

          <h2 className="font-semibold">
            One Connected Strategy
          </h2>

          <p>
            SEO, content, paid advertising and conversion-focused pages can
            work together instead of operating as disconnected marketing
            activities.
          </p>
        </GlassCard>

      </Position>

      {/* =========================================================
          WHO WE SERVE
      ========================================================= */}

      <Position
        heading="WHO WE WORK WITH"
        title="Digital Growth Services for Businesses Across India"
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VoidMatrix works with startups, SMEs and established businesses that
          want to improve search visibility, generate qualified leads and
          build a stronger digital acquisition system.
        </p>

        <p className="text-lg my-2.5 text-justify">
          We work with businesses across Mumbai, Pune, Delhi NCR, Bangalore,
          Hyderabad, Chennai and other Indian markets, as well as international
          businesses targeting Indian and global audiences.
        </p>
      </Position>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <MainServiceFAQ heading='SEO Services - FAQs' faqs={faqs} />

      {/* =========================================================
          CTA
      ========================================================= */}

      <MainServiceCTA
        ctaTitle="Start Growing"
        heading="Ready to Improve Your Search Visibility & Digital Growth?"
        description="Tell us about your website, marketing goals or lead-generation requirements and we can recommend the right SEO or digital marketing service."
      />
    </>
  );
}