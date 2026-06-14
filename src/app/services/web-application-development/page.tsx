import Hero from '@/components/sections/common/Hero';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import Link from 'next/link';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/lib/schema/seo';
import { serviceData } from '@/app/lib/schema/data/services_data';
import Position from '@/components/sections/home/Positioning';

export const metadata: Metadata = buildMetadata({
  title: 'Web & App Development Services in Mumbai, India',
  description:
    'Hire Void Matrix Technology for custom website, web app, mobile app, eCommerce, marketplace, and CMS development in Mumbai. From ₹75,000.',
  path: '/services/web-application-development',
});

const s_data = serviceData['/services/web-application-development'];

export default function WebApplicationDev() {
  return (
    <>
      <Hero
        eyebrow="Web & App Development - Mumbai, India"
        title={
          <>
            <span className="text-(--primary)">Website</span>,{' '}
            <span className="text-(--primary)">Web Application</span> &{' '}
            <span className="text-(--primary)">Mobile App</span> Development Company in Mumbai,
            India
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Most Indian businesses are running on websites that are slow, poorly ranked, and
                  built on platforms that were never designed for performance.
                </span>
                Void Matrix Technology builds websites, web applications, mobile apps, eCommerce
                stores, and marketplace platforms on modern technology - Next.js, not WordPress -
                that load fast, rank on Google, and convert visitors into customers.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Projects from <span className="text-(--primary)">₹75,000</span>{' '}
              </span>
              <span className="text-glow"> |</span>
              <span>
                <span className="text-(--primary)">Next.js</span> & Modern Stack{' '}
              </span>
              <span className="text-glow"> |</span>
              <span>
                NDA <span className="text-(--primary)">Protected</span>{' '}
              </span>
              <span className="text-glow"> |</span>
              <span>
                <span className="text-(--primary)">90+ Lighthouse</span> Scores
              </span>
            </div>
          </>
        }
        ctaLable="Get Free Web App Consultation"
        ctaRoute="/contact"
      />
      <Position
        heading="The Real Problem"
        title="Why Most Indian Business Websites Fail Before They Even Start"
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          <strong>A simple observation:</strong> most organisations communicate from the outside in
          - what they do, then how, and rarely why. The same pattern explains why most Indian
          business websites fail. They are built around what the business offers, not around why the
          customer is there and what they need to find in the first two seconds.
        </p>
        <p className="text-lg my-2.5 text-justify">
          But there is a deeper problem underneath that. Before a single visitor even lands on your
          website, the technology it is built on determines whether Google will rank it, how fast it
          will load, and whether it will hold up as your business grows.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Across Mumbai, Pune, Delhi, Bangalore, and every major city in India, the same pattern
          repeats: a business invests in a WordPress website, spends months adding plugins, theme
          customisations, and content - and then wonders why it does not rank, loads slowly on
          mobile, and loses visitors before they read a single line.
        </p>
        <p className="text-lg my-2.5 text-justify">
          The answer is the foundation. WordPress was built in 2003 as a blogging platform. Shopify
          was built to make eCommerce simple for non-technical users. Both made trade-offs -
          convenience over performance, flexibility over speed - that were acceptable in 2010 but
          are a meaningful disadvantage in a market where Google&apos;s Core Web Vitals scores
          directly influence search rankings and where Indian mobile users will leave a page that
          takes more than three seconds to load.
        </p>
        <p className="text-lg my-2.5 text-justify">
          VMT builds on Next.js - a React framework engineered specifically for production web
          applications that need to be fast, SEO-ready, and scalable. The result is a website that
          scores 90+ on Google Lighthouse from launch day, is structured correctly for search engine
          indexing, and is built on a codebase that can grow with your business without requiring a
          full rebuild.
        </p>
      </Position>
      <Position
        heading="Services in This Pillar"
        title="Web & App Development Services We Offer in Mumbai and Across India"
        clsName="hero-eyebrow-glowing-b mt-5"
      >
        <h2 className="section-title">
          <Link href={'/services/website-development'}>
            <span className="text-(--primary) italic font-medium">
              Professional Website Development
            </span>
          </Link>
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Business websites for startups, SMEs, and enterprises across Mumbai and India - built on
          Next.js for speed, SEO, and long-term performance. From simple five-page company websites
          to complex multi-service sites with lead capture, blog, and CMS integration.
          <br />
          <span className="internal-link italic">
            <Link href={'/services/website-development'}>Explore More</Link>
          </span>
        </p>
        <h2 className="section-title">
          <Link href={'/services/web-app-development'}>
            <span className="text-(--primary) italic font-medium">Web Application Development</span>
          </Link>
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Custom web applications - dashboards, portals, internal tools, SaaS interfaces, and
          data-heavy platforms - built for Indian businesses that need more than a static website
          but a full, interactive product.
          <br />
          <span className="internal-link italic">
            <Link href={'/services/web-app-development'}>Explore More</Link>
          </span>
        </p>
        <h2 className="section-title">
          <Link href={'/services/mobile-application-development'}>
            <span className="text-(--primary) italic font-medium">
              Mobile Application Development
            </span>
          </Link>
        </h2>
        <p className="text-lg my-2.5 text-justify">
          iOS and Android mobile applications for businesses and startups across Mumbai and India -
          cross-platform with React Native or native Swift and Kotlin for performance-critical
          products. UPI and Indian payment gateway integration included.
          <br />
          <span className="internal-link italic">
            <Link href={'/services/mobile-application-development'}>Explore More</Link>
          </span>
        </p>
        <h2 className="section-title">
          <Link href={'/services/ecommerce-development'}>
            <span className="text-(--primary) italic font-medium">eCommerce Development</span>
          </Link>
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Custom eCommerce stores built on Next.js with full Indian payment integration - Razorpay,
          PayU, UPI - for businesses across India. Faster than Shopify, fully customisable, and
          built for Google rankings from day one.
          <br />
          <span className="internal-link italic">
            <Link href={'/services/ecommerce-development'}>Explore More</Link>
          </span>
        </p>
        <h2 className="section-title">
          <Link href={'/services/marketplace-development'}>
            <span className="text-(--primary) italic font-medium">Marketplace Development</span>
          </Link>
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Multi-vendor marketplace platforms for Indian businesses - buyer and seller portals,
          product catalogues, payment splits, commission management, and scalable architecture that
          handles growth.
          <br />
          <span className="internal-link italic">
            <Link href={'/services/marketplace-development'}>Explore More</Link>
          </span>
        </p>
        <h2 className="section-title">
          <Link href={'/services/cms-development'}>
            <span className="text-(--primary) italic font-medium">CMS Development</span>
          </Link>
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Headless CMS and custom content management systems for businesses across India - giving
          your content team full control without touching code, while keeping the front-end fast and
          SEO-ready.
          <br />
          <span className="internal-link italic">
            <Link href={'/services/cms-development'}>Explore More</Link>
          </span>
        </p>
      </Position>
      <Position
        title={
          <>
            <h2 className="section-title">
              Why <span className="text-(--primary)">Next.js</span>, Not WordPress
            </h2>
          </>
        }
      >
        <section className="">
          <div className="section-inner">
            <h2 className="section-title">
              The Technology Decision That Determines Whether Your Website Can Compete
            </h2>

            <p className="section-intro">
              Most businesses believe choosing a technology stack is a developer&apos;s decision. In
              reality, it is a business decision that directly affects search visibility, conversion
              rates, maintenance costs, and long-term scalability.
            </p>

            <div className="estimate-summary">
              <p>
                <strong>The Lean Startup</strong> by Eric Ries argues that the biggest waste in
                building a product is not inefficiency-it is building something well that should
                never have been built in the first place.
              </p>

              <p>
                Applied to web development, the equivalent mistake is investing months of
                development time and lakhs of rupees into a website built on the wrong foundation,
                only to spend even more money fixing performance, SEO, and scalability later.
              </p>
            </div>

            <div className="card-grid" style={{ marginTop: '3rem' }}>
              <div className="vmt-glass-card">
                <h3>Typical WordPress Website</h3>

                <p className="estimate-value mt-2">40-65 Lighthouse Score</p>

                <ul className="fit-list">
                  <li>Often fails Core Web Vitals</li>
                  <li>Heavy dependence on plugins</li>
                  <li>Slower page speed</li>
                  <li>Increasing maintenance complexity</li>
                </ul>
              </div>

              <div className="vmt-glass-card">
                <h3>VMT Next.js Architecture</h3>

                <p className="estimate-value mt-2">88-98 Lighthouse Score</p>

                <ul className="fit-list">
                  <li>Passes Core Web Vitals</li>
                  <li>Excellent loading performance</li>
                  <li>Modular, scalable architecture</li>
                  <li>Future-ready codebase</li>
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <div className="section-inner">
                <h3 className="section-subtitle">Why This Matters for Google Rankings</h3>

                <p>
                  Google&apos;s ranking systems evaluate websites using Core Web Vitals: Largest
                  Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next
                  Paint (INP).
                </p>

                <ul className="fit-list">
                  <li>
                    A website scoring around <strong>45</strong> on Lighthouse usually fails all
                    three metrics.
                  </li>

                  <li>
                    A website scoring around <strong>95</strong> generally passes all three.
                  </li>

                  <li>
                    For businesses investing in SEO, this isn&apos;t a small technical
                    improvement-it can determine whether Google chooses to rank your website or your
                    competitor&apos;s.
                  </li>
                </ul>
              </div>
            </div>

            <div className="engineering-section py-12!">
              <h3 className="section-subtitle">The Advantage Goes Beyond Performance</h3>

              <div className="engineering-grid">
                <div className="engineering-card vmt-glass-card">
                  <div className="engineering-number">01</div>

                  <h4 className="engineering-title">Easier Future Development</h4>

                  <p className="engineering-desc">
                    New pages, APIs, dashboards, and integrations can be added without rebuilding
                    large parts of the website.
                  </p>
                </div>

                <div className="engineering-card vmt-glass-card">
                  <div className="engineering-number">02</div>

                  <h4 className="engineering-title">Lower Maintenance Costs</h4>

                  <p className="engineering-desc">
                    Modern architecture removes the plugin dependency chain that causes many
                    WordPress websites to become fragile over time.
                  </p>
                </div>

                <div className="engineering-card vmt-glass-card">
                  <div className="engineering-number">03</div>

                  <h4 className="engineering-title">Better SEO Foundation</h4>

                  <p className="engineering-desc">
                    Faster loading, cleaner HTML, server-side rendering, and optimized assets create
                    a stronger technical SEO foundation.
                  </p>
                </div>
              </div>
            </div>
            <div className="services-cta">
              <div className="vmt-glass-card">
                <h2>Technology Is Not Where We Cut Corners.</h2>

                <p>
                  At Void Matrix Technology, we build on modern engineering principles because
                  businesses should never have to rebuild their website after launch simply because
                  the original technology couldn&apos;t scale.
                </p>

                <p>
                  <strong>
                    It isn&apos;t the cheapest option in Mumbai. It&apos;s the foundation built to
                    compete for years-not just launch day.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Position>
      {/* <HowWeWork
        sectionId="web-application-development-process"
        title="Our Web Application Development Process"
        intro="Our engineering-first process ensures scalable, secure, and high-performance web applications built for long-term growth."
        steps={[
          {
            number: '01',
            title: 'Requirement Analysis & Architecture',
            description:
              'We analyze workflows, business requirements, and system architecture before defining a scalable development plan.',
            wide: true,
          },
          {
            number: '02',
            title: 'UI/UX Design & System Planning',
            description:
              'Our team designs intuitive dashboards, workflows, and user experiences optimized for productivity.',
          },
          {
            number: '03',
            title: 'Application Development',
            description:
              'We build secure backend systems, APIs, and scalable frontends using modern frameworks.',
          },
          {
            number: '04',
            title: 'Testing, Deployment & Scaling',
            description:
              'After testing and optimization, we deploy the application and prepare the system for long-term scalability.',
            wide: true,
          },
        ]}
      /> */}
      <Position heading="Process" title="" clsName="hero-eyebrow-glowing-b">
        <section className="">
          <div className="how-we-work-inner">
            <div className="how-we-work-grid">
              {/* Left */}

              <div className="how-we-work-content h-full flex flex-col justify-center">
                <h2 className="section-title">How VMT Builds Web and App Products</h2>
                <p className="section-intro">
                  Every successful digital product begins long before development. Our
                  engineering-first process combines business strategy, UX, modern software
                  architecture, and technical SEO to build products designed for long-term growth
                  rather than short-term delivery.
                </p>
              </div>

              {/* Right */}

              <div className="how-we-work-bento">
                <div className="vmt-glass-card card-wide">
                  <div className="step-number">01</div>

                  <h3 className="text-white font-semibold">Discovery & Architecture</h3>

                  <p className="text-justify">
                    We analyse your business model, users, workflows, and technical requirements
                    before defining architecture, information hierarchy, and implementation
                    strategy.
                  </p>
                </div>

                <div className="vmt-glass-card">
                  <div className="step-number">02</div>

                  <h3 className="text-white font-semibold mb-1">Design & Prototyping</h3>

                  <p>
                    Wireframes and high-fidelity prototypes are created using user research and
                    conversion-focused design before development begins.
                  </p>
                </div>

                <div className="vmt-glass-card">
                  <div className="step-number">03</div>

                  <h3 className="text-white font-semibold mb-1">Development</h3>

                  <p>
                    Modern applications built using Next.js, TypeScript, Node.js, PostgreSQL, and
                    scalable engineering practices.
                  </p>
                </div>

                <div className="vmt-glass-card">
                  <div className="step-number">04</div>

                  <h3 className="text-white font-semibold mb-1">SEO Integration</h3>

                  <p>
                    Technical SEO including schema, metadata, Core Web Vitals, sitemaps, and page
                    performance is built into development from day one.
                  </p>
                </div>

                <div className="vmt-glass-card">
                  <div className="step-number">05</div>

                  <h3 className="text-white font-semibold mb-1">Testing & Launch</h3>

                  <p>
                    Performance audits, security reviews, cross-device testing, and staged
                    deployments ensure a reliable production release.
                  </p>
                </div>

                <div className="vmt-glass-card card-wide">
                  <div className="step-number">06</div>

                  <h3 className="text-white font-semibold">Post-Launch Support</h3>

                  <p className="text-justify">
                    Continuous maintenance, performance monitoring, feature enhancements, and
                    long-term technical partnership.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Position>

      <Position
        heading="WHO WE WORK WITH"
        clsName="hero-eyebrow-glowing-b"
        title={
          <>
            <div className="mt-3">
              Built for <span className="text-(--primary)">Startups</span>,{' '}
              <span className="text-(--primary)">SMEs</span>, and{' '}
              <span className="text-(--primary)">Enterprises Across India</span>
            </div>
          </>
        }
        tagline="Successful digital products are built for a specific audience-not everyone. Whether you're launching your first startup, modernising an established business, or building enterprise software, VMT delivers engineering-first solutions designed for long-term growth."
      >
        <div className="who-cards">
          <div className="vmt-glass-card">
            <h3 className="text-white font-semibold mb-1 text-2xl">Startups</h3>

            <p className="text-justify">
              Launch investor-ready websites, SaaS products, and web applications built on scalable
              architecture without paying enterprise-level prices.
            </p>

            <ul className="fit-list">
              <li>Professional websites from ₹75,000</li>
              <li>Web applications from ₹3,00,000+</li>
              <li>Built to scale from day one</li>
            </ul>
          </div>

          <div className="vmt-glass-card">
            <h3 className="text-white font-semibold mb-1 text-2xl">Small & Medium Businesses</h3>

            <p className="text-justify">
              Rebuild outdated websites that aren't ranking, converting, or accurately representing
              your business. Every project includes technical SEO from launch.
            </p>

            <ul className="fit-list">
              <li>Website redesigns</li>
              <li>SEO-first development</li>
              <li>Higher performance & conversions</li>
            </ul>
          </div>

          <div className="vmt-glass-card">
            <h3 className="text-white font-semibold mb-1 text-2xl">Enterprise Organisations</h3>

            <p className="text-justify">
              Complex platforms, internal systems, customer portals, marketplaces, and business
              software engineered for reliability, security, and long-term maintainability.
            </p>

            <ul className="fit-list">
              <li>Custom enterprise applications</li>
              <li>Scalable architecture</li>
              <li>Long-term technical partnership</li>
            </ul>
          </div>
        </div>
      </Position>
      <MainServiceFAQ
        heading="Web Application Development Services in India - FAQs"
        faqs={s_data.faqs}
      />
      <MainServiceCTA
        heading="Planning a Web Application?"
        description="We help design scalable systems and product architecture."
        ctaTitle="Get a Free Web Application Consultation"
      />
    </>
  );
}
