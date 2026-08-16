import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import PricingCard from '@/components/ui/PricingCard';
import Position from '@/components/sections/home/Positioning';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/lib/schema/seo';
import { serviceData } from '@/app/lib/schema/data/services_data';
export const metadata: Metadata = buildMetadata({
  title: 'Technical SEO Services in Mumbai, India | Technical SEO Company — VMT',

  description:
    'VMT provides technical SEO services in Mumbai and India. We fix crawlability, indexation, site architecture, Core Web Vitals, JavaScript SEO, structured data and website performance.',

  path: '/services/technical-seo',
});

const s_data = serviceData['/services/technical-seo'];

export default function TechnicalSEOPage() {
  return (
    <>
      {/* ============================================================
          HERO
      ============================================================ */}

      <Hero
        eyebrow="Technical SEO Services - Mumbai, India"
        title={
          <>
            Technical SEO Services in <span className="text-(--primary)">Mumbai</span>, India
          </>
        }
        herosub={
          <div className="my-2.5">
            <p>
              <span className="text-white">
                Your website cannot rank consistently if search engines cannot crawl, understand,
                and index it correctly.
              </span>
              <br />
              VMT provides technical SEO services for businesses in Mumbai and across
              India—improving website architecture, crawlability, indexation, Core Web Vitals,
              JavaScript rendering, structured data, and search performance.
            </p>
          </div>
        }
        subtitle={
          <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
            <span>
              Technical SEO <span className="text-(--primary)">Audits</span>
            </span>

            <span className="text-glow">|</span>

            <span>
              Core Web <span className="text-(--primary)">Vitals</span>
            </span>

            <span className="text-glow">|</span>

            <span>
              Crawl & <span className="text-(--primary)">Indexation</span>
            </span>

            <span className="text-glow">|</span>

            <span>
              Website <span className="text-(--primary)">Architecture</span>
            </span>
          </div>
        }
        ctaLable="Get Free Technical SEO Audit"
        ctaRoute="/contact"
      />

      {/* ============================================================
          WHY THIS MATTERS
      ============================================================ */}

      <Position
        heading="Why Technical SEO Matters"
        clsName="hero-eyebrow-glowing-b mt-6"
        title={
          <>
            Why Your Website Can Have Great Content and Still{' '}
            <span className="text-(--primary)">Not Rank on Google</span>
          </>
        }
      >
        <p className="section-intro">
          Search engines need to crawl your pages, render your website, understand its structure,
          and decide which URLs should appear in search results. Technical SEO makes that process
          easier.
        </p>

        <p className="text-lg text-justify my-2.5">
          A website can publish excellent content and still lose organic visibility because
          important pages cannot be crawled, duplicate URLs dilute signals, JavaScript prevents
          content from being rendered correctly, or technical issues prevent Google from indexing
          the pages that matter.
        </p>

        <p className="text-lg text-justify my-2.5">
          These problems become more common as websites become larger. eCommerce stores have
          thousands of product and filter URLs. SaaS websites have application routes and
          JavaScript-heavy interfaces. Corporate websites often accumulate redirects, duplicate
          pages, outdated URLs, and inconsistent internal linking.
        </p>

        <p className="text-lg text-justify my-2.5">
          VMT approaches technical SEO as an engineering problem. Instead of simply generating an
          audit report, we identify the technical issues affecting search visibility and prioritise
          the fixes according to their potential impact.
        </p>

        <p className="text-lg text-justify my-2.5">
          The objective is simple: make your website easier for search engines to crawl, understand,
          index, and rank while improving the experience for real users.
        </p>
      </Position>

      {/* ============================================================
          WHAT WE DO
      ============================================================ */}

      <Position
        heading="Technical SEO Services"
        clsName="hero-eyebrow-glowing-b mt-3"
        title={
          <>
            What Our <span className="text-(--primary)">Technical SEO Services</span> Include
          </>
        }
        tagline="Technical improvements designed around your website architecture, search visibility, and business goals."
      >
        <div className="who-cards">
          <div className="vmt-glass-card">
            <h3 className="font-semibold">Technical SEO Audit</h3>

            <p>
              We analyse crawlability, indexation, redirects, canonical URLs, internal linking, XML
              sitemaps, robots.txt, page templates, and technical search issues.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Crawlability & Indexation</h3>

            <p>
              We identify pages Google cannot efficiently crawl or index and resolve issues
              involving robots.txt, noindex directives, canonical URLs, redirects, status codes, and
              sitemap configuration.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Website Architecture</h3>

            <p>
              We improve URL structures, internal linking, navigation, page hierarchy, category
              architecture, and information architecture so search engines can understand your
              website.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Core Web Vitals & Page Speed</h3>

            <p>
              We investigate LCP, INP, CLS, JavaScript execution, render-blocking resources, image
              delivery, caching, server response time, and other performance bottlenecks.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">JavaScript SEO</h3>

            <p>
              We analyse React, Next.js, SPA, and JavaScript-heavy websites to ensure important
              content, links, metadata, and structured data are available to search engines.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Structured Data & Schema</h3>

            <p>
              We implement and validate relevant schema markup to help search engines understand
              organisations, services, products, articles, FAQs, and other entities.
            </p>
          </div>
        </div>
      </Position>

      {/* ============================================================
          TECHNICAL SEO PROCESS
      ============================================================ */}

      <HowWeWork
        sectionId="technical-seo-process"
        title="Our Technical SEO Process"
        intro="Our technical SEO process combines search-engine analysis with website engineering so identified issues can actually be fixed."
        steps={[
          {
            number: '01',

            title: 'Technical SEO Audit',

            description:
              'We crawl and analyse your website to identify technical SEO issues affecting crawlability, indexation, architecture, performance, and search visibility.',

            wide: true,
          },

          {
            number: '02',

            title: 'Website Architecture Analysis',

            description:
              'We review URL structures, internal linking, navigation, page hierarchy, canonicalisation, redirects, and sitemap architecture.',
          },

          {
            number: '03',

            title: 'Performance & Core Web Vitals',

            description:
              'We identify performance bottlenecks affecting loading speed, interactivity, and visual stability and prioritise the highest-impact improvements.',
          },

          {
            number: '04',

            title: 'Implementation & Validation',

            description:
              'We implement technical fixes, validate the resulting pages, monitor search visibility, and use Google Search Console and performance data to identify remaining issues.',

            wide: true,
          },
        ]}
      />

      {/* ============================================================
          WHEN YOU NEED TECHNICAL SEO
      ============================================================ */}

      <Position
        heading="When You Need Technical SEO"
        clsName="hero-eyebrow-glowing-b mt-3"
        title={
          <>
            Technical SEO Problems That Can Hold Your Website{' '}
            <span className="text-(--primary)">Back</span>
          </>
        }
      >
        <div className="fit-list">
          <ul>
            <li>Important pages are not appearing in Google</li>

            <li>Google Search Console reports indexing problems</li>

            <li>Your website has poor Core Web Vitals</li>

            <li>A React or JavaScript website is struggling with SEO</li>

            <li>Your website has thousands of duplicate or low-value URLs</li>

            <li>Organic traffic dropped after a redesign or migration</li>

            <li>Your website has complicated redirects or canonical issues</li>

            <li>Google is discovering pages but not indexing them</li>

            <li>Your internal linking structure is weak</li>

            <li>
              Your eCommerce category and product pages are difficult for search engines to
              understand
            </li>
          </ul>
        </div>
      </Position>

      {/* ============================================================
          MUMBAI / INDIA LOCAL SEO SECTION
      ============================================================ */}

      <Position
        heading="Technical SEO in Mumbai & India"
        clsName="hero-eyebrow-glowing-b mt-3"
        title={
          <>
            Technical SEO Company for{' '}
            <span className="text-(--primary)">Mumbai & Indian Businesses</span>
          </>
        }
      >
        <p className="section-intro">
          VMT provides technical SEO services for startups, SaaS companies, eCommerce businesses,
          B2B companies, and growing organisations in Mumbai and across India.
        </p>

        <p className="text-lg text-justify my-2.5">
          Our approach is particularly suited to websites built with modern technologies such as
          Next.js, React, headless architectures, custom CMS platforms, and large eCommerce systems
          where technical SEO cannot be solved with plugins alone.
        </p>

        <p className="text-lg text-justify my-2.5">
          We combine SEO strategy with development expertise, allowing technical recommendations to
          be translated into actual implementation rather than remaining as an audit document.
        </p>

        <div className="fit-list">
          <ul>
            <li>Technical SEO audits for Mumbai businesses</li>

            <li>Technical SEO services for Indian startups</li>

            <li>Core Web Vitals optimization</li>

            <li>Next.js and React technical SEO</li>

            <li>eCommerce technical SEO</li>

            <li>Website migration and SEO recovery</li>
          </ul>
        </div>
      </Position>

      {/* ============================================================
          WHY VMT
      ============================================================ */}

      <Position
        heading="Why Choose VMT"
        clsName="hero-eyebrow-glowing-b mt-3"
        title={
          <>
            Technical SEO Backed by <span className="text-(--primary)">Engineering Expertise</span>
          </>
        }
      >
        <p className="section-intro">
          Technical SEO often requires changes to the actual website, not just recommendations
          inside an SEO report.
        </p>

        <div className="fit-list">
          <ul>
            <li>SEO and web development expertise under one team</li>

            <li>Technical SEO for Next.js and React websites</li>

            <li>Crawlability and indexation analysis</li>

            <li>Core Web Vitals and website performance optimization</li>

            <li>Structured data and schema implementation</li>

            <li>SEO-focused website architecture</li>

            <li>Google Search Console and technical monitoring</li>

            <li>Engineering-led implementation instead of audit-only recommendations</li>
          </ul>
        </div>

        <p className="text-lg my-4">
          We don't treat technical SEO as a checklist. We treat your website as a technical system
          that needs to remain crawlable, indexable, fast, and structurally clear as it grows.
        </p>
      </Position>

      {/* ============================================================
          FAQ
      ============================================================ */}

      <MainServiceFAQ heading="Technical SEO FAQs" faqs={s_data.faqs} />
      <MainServiceCTA
        heading="Is Technical SEO Holding Your Website Back?"
        description="Let VMT audit your website's crawlability, indexation, architecture, performance, and Core Web Vitals and identify the technical issues affecting organic search visibility."
        ctaTitle="Get Free Technical SEO Audit"
      />
    </>
  );
}
