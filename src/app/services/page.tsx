import type { Metadata } from 'next';
import Hero from '@/components/sections/common/Hero';
// import CoreServices from '@/components/sections/CoreServices';
// import EngineeringApproach from '@/components/sections/EngineeringApproach';
// import WhenToChooseVMT from '@/components/sections/WhenToChooseVMT';
// import ServicesCTA from '@/components/sections/ServicesCTA';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import ServicesFAQ from '@/components/sections/ServicesFAQ';
import Link from 'next/link';
// import { coreServicesData } from '../lib/schema/data/services_collection_data';
// import { serviceCollectionFAQs } from '../lib/schema/data/services_collection_data';
// import { generateServiceCollectionPage } from '../lib/schema/services-collection-page';
// import { generateFAQPage } from '../lib/schema/faq-generator';
import { buildMetadata } from '../lib/schema/seo';
import Position from '@/components/sections/home/Positioning';
import Eyebrow from '@/components/common/eyebrow';
import GlassCard from '@/components/ui/GlassCard';
import MainServiceCTA from '@/components/services/MainServiceCTA';

export const metadata: Metadata = buildMetadata({
  title: 'Web Development & Digital Marketing Company in Mumbai',
  description:
    'Explore software development, web development, SaaS, SEO, digital marketing, UI/UX design, and consulting services in Mumbai.',
  path: '/services',
});

export default function SolutionPage() {
  return (
    <>
      <Hero
        eyebrow="Software Development, Web Development & Digital Growth Services in Mumbai, India"
        title="Performance-Driven Software & Technical SEO Services"
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Void Matrix Technology is a full-service technology and digital growth company in
                  Mumbai
                </span>
                <br />
                offering custom software development, SaaS platforms, business websites, mobile
                apps, eCommerce stores, SEO services, digital marketing, UI/UX design, DevOps, and
                business consulting - all under one roof, built on modern technology, delivered
                across India and globally.
              </p>
            </div>
          </>
        }
      />

      <CtaButtonRe title="Get Free Website Audit" url="/contact" />
      <section className="who-we-work-with">
        <div className="my-2 5 services-list">
          <div className="card-link">
            <Eyebrow message="Startup" cName="hero-eyebrow-glowing-b" />
            <h3 className="my-2">Building your first product?</h3>
            <p>
              MVP development, SaaS platforms, and launch-ready websites starting from ₹75,000. We
              help Mumbai and India-based startups go from idea to live product - fast, properly
              built, and ready to scale.
            </p>
          </div>

          <div className="card-link">
            <Eyebrow message="SME" cName="hero-eyebrow-glowing-b" />
            <h3 className="my-2">Scaling an existing business?</h3>
            <p>
              SEO that ranks, digital marketing that generates leads, software that automates
              operations, and websites that convert. For growing SMEs across Mumbai, Pune,
              Bangalore, Delhi, and the rest of India.
            </p>
          </div>

          <div className="card-link">
            <Eyebrow message="Enterprise" cName="hero-eyebrow-glowing-b" />
            <h3 className="my-2">Modernising your technology stack?</h3>
            <p>
              Enterprise software development, platform engineering, cloud and DevOps
              infrastructure, and long-term technical partnership for large organisations operating
              across India.
            </p>
          </div>
        </div>
      </section>
      <Position
        heading="Serives"
        title=" Six Service Pillars. Every Technology and Growth Need Your Business Has"
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VMT&apos;s services are organised into six broad categories - each covering a cluster of
          related capabilities. Every category has dedicated service pages with full detail and
          case-specific information.
        </p>
        <h2 className="section-title mt-3">
          <Link href="/services/custom-software-development">
            <span className="text-(--primary)">Software Development</span>
          </Link>{' '}
          - Custom Software Development Company in Mumbai
        </h2>
        <p className="text-lg my-2.5 text-justify">
          We design and build custom software, SaaS platforms, enterprise systems, CRM solutions,
          ERP systems, and workflow automation tailored to your specific business operations. As a
          custom software development company in Mumbai, we take an architecture-first approach -
          meaning your system is designed to scale from the beginning, not patched to scale later.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Whether you are a Mumbai-based startup building your first SaaS product, an SME in India
          that needs to automate manual processes, or a large enterprise replacing legacy systems
          with modern software - our software development team handles the complete project
          lifecycle from discovery and architecture through to deployment, maintenance, and
          iteration.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Services in this category: Custom Software Development · SaaS Development · Enterprise
          Software · CRM & ERP Development · Workflow Automation · Product Engineering
        </p>

        <Link href="/services/custom-software-development" className="internal-link font-semibold!">
          → Explore Software Development Services
        </Link>

        <h2 className="section-title mt-3">
          <Link href="/services/web-application-development">
            <span className="text-(--primary) mb-2!">Web & App Development</span>
          </Link>{' '}
          - Web Development Company in Mumbai
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Your website and digital products are your primary business asset online. As a web
          development company in Mumbai, we build professional business websites, high-performance
          web applications, iOS and Android mobile applications, eCommerce stores, marketplace
          platforms, and CMS-driven websites - all on Next.js and modern web standards that deliver
          real performance advantages over WordPress and Shopify.
        </p>
        <p className="text-lg my-2.5 text-justify">
          The difference matters. A Next.js website built by VMT typically scores 90+ on Google
          Lighthouse, loads in under two seconds, and is structurally ready for SEO from launch day.
          A WordPress site with plugins typically scores 40-60 and requires significant remediation
          before it can compete in organic search. For businesses across Mumbai and India that want
          to rank on Google and convert that traffic into customers, the technology choice is the
          starting point.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Services in this category: Professional Website Development · Web Application Development
          · Mobile App Development · eCommerce Development · Marketplace Development · CMS
          Development
        </p>
        <Link
          href="/services/web-application-development"
          className="internal-link font-semibold! mb-2!"
        >
          → Explore Web & App Development Services
        </Link>

        <h2 className="section-title mt-3">
          <Link href="/services/seo-services">
            <span className="text-(--primary) mb-2!">SEO Services</span>
          </Link>{' '}
          - SEO Agency in Mumbai
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Search engine optimisation is the most sustainable source of leads a business can build -
          but only when it is done properly on a technical foundation that Google can actually work
          with. As an SEO agency in Mumbai, we provide technical SEO, on-page SEO, local SEO,
          enterprise SEO, SEO audits, Core Web Vitals optimisation, and ongoing SEO consulting for
          businesses across India.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Our SEO work begins with a full technical audit of your existing website - identifying
          crawl issues, indexing problems, keyword cannibalisation, Core Web Vitals failures, and
          structural weaknesses that are actively preventing your site from ranking. We fix the
          foundation, build your keyword strategy, execute your content plan, and grow your organic
          traffic month over month.
        </p>
        <p className="text-lg my-2.5 text-justify">
          We work with businesses across Mumbai, Pune, Delhi, Bangalore, Hyderabad, Chennai, and
          other major Indian cities - and with international businesses that want to rank in the
          Indian market.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Services in this category: Technical SEO · On-Page SEO · Local SEO Mumbai · Enterprise SEO
          India · SEO Audits · Website Speed Optimisation · Core Web Vitals · SEO Consulting
        </p>
        <Link href="/services/seo-services" className="internal-link font-semibold! mb-2!">
          → Explore SEO Services
        </Link>

        <h2 className="section-title mt-3">
          <Link href="/services/digital-marketing-and-content">
            <span className="text-(--primary) mb-2!">Digital Marketing & Content</span>
          </Link>{' '}
          - Digital Marketing Agency in Mumbai
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Getting found on Google is the beginning. Converting that visibility into qualified leads
          and paying customers is where digital marketing earns its place in your growth strategy.
          As a digital marketing agency in Mumbai, we run Google Ads campaigns, Meta Ads, LinkedIn
          Ads, lead generation funnels, email marketing, marketing automation, and social media
          management for businesses across India.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Every campaign we run is measured against business outcomes - cost per lead, cost per
          acquisition, return on ad spend - not vanity metrics like impressions and reach. We also
          produce SEO-optimised content including blog posts, service page copy, landing page copy,
          and case studies that build your organic authority while your paid campaigns drive
          immediate leads.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Services in this category: Google Ads Management · Meta Ads Management · Lead Generation
          Funnels · Email Marketing · Marketing Automation · SEO Blog Writing · Website Copywriting
          · Social Media Management Mumbai · LinkedIn Management · Instagram Management · Content
          Strategy
        </p>
        <Link
          href="/services/digital-marketing-and-content"
          className="internal-link font-semibold! mb-2!"
        >
          → Explore Digital Marketing & Content Services
        </Link>
        <h2 className="section-title mt-3">
          <Link href="/services/ui-ux-design">
            <span className="text-(--primary) mb-2!">UI/UX Design</span>
          </Link>{' '}
          - UI UX Design Company in Mumbai
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Design that is only beautiful is incomplete. Design that converts is what VMT delivers. As
          a UI/UX design company in Mumbai, our designers build website interfaces, SaaS product
          UIs, mobile app interfaces, wireframes, and prototypes - all grounded in UX research and
          conversion data, not aesthetic preference alone.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Every design decision we make is informed by how users actually navigate, what makes them
          stay on a page, and what pushes them toward a conversion. For businesses across India that
          are investing in digital products, the difference between a well-designed interface and a
          poorly-designed one can be the difference between a product that grows and a product that
          churns.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Services in this category: Website UI Design · SaaS UI Design · Mobile App UI Design ·
          Wireframing & Prototyping · UX Research · Conversion Rate Optimisation Design · A/B
          Testing
        </p>
        <Link href="/services/ui-ux-design" className="internal-link font-semibold! mb-2!">
          → Explore UI/UX Design Services
        </Link>
        <h2 className="section-title mt-3">
          <Link href="/services/platform-engineering">
            <span className="text-(--primary) mb-2!">Platform, Cloud & Consulting</span>
          </Link>{' '}
          - DevOps & Technology Consulting Company in India
        </h2>
        <p className="text-lg my-2.5 text-justify">
          Behind every product that scales reliably is infrastructure that was built to handle it.
          Our platform and cloud engineering team provides DevOps services, cloud engineering on AWS
          and GCP, CI/CD pipeline setup, API development, payment gateway integrations, WhatsApp
          Business integrations, third-party API integrations, and performance monitoring for
          businesses in Mumbai and across India.
        </p>
        <p className="text-lg my-2.5 text-justify">
          For founders and leadership teams making technology decisions, our consulting practice
          provides startup consulting, product strategy, technology roadmap development, software
          architecture review, and growth consulting - helping you make decisions that are aligned
          with both your business goals and your technical reality.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Services in this category: Platform Engineering · Cloud Engineering AWS/GCP · DevOps
          Services Mumbai · API Development · Payment Gateway Integration · WhatsApp Integration ·
          CI/CD Pipelines · Startup Consulting Mumbai · Product Strategy · Technology Roadmaps ·
          Technical Advisory · Growth Consulting India · Website Maintenance · Software Maintenance
          · Application Monitoring
        </p>
        <Link href="/services/platform-engineering" className="internal-link font-semibold! mb-2!">
          → Explore Platform, Cloud & Consulting Services
        </Link>
      </Position>

      <Position
        heading="WHY VMT"
        title="What Makes VMT Different From Other IT Companies in Mumbai"
        tagline="There are hundreds of software companies and digital agencies across Mumbai and India. Here is why businesses choose VMT."
        clsName="hero-eyebrow-glowing-b"
      >
        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">01</span>
          <h2 className="font-semibold">Modern tech stack, not legacy platforms</h2>
          <p>
            Most web development companies in India build on WordPress and Shopify. VMT builds on
            Next.js and modern web standards - delivering websites and applications that are faster,
            more secure, more SEO-friendly, and more scalable than anything built on a legacy
            platform. This is not a marginal difference. It is the foundation of whether your
            digital product can actually compete online.
          </p>
        </GlassCard>
        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">02</span>
          <h2 className="font-semibold">Architecture-first approach</h2>
          <p>
            Every product VMT builds starts with a system architecture design - not a template or a
            theme. We map your data models, API structure, scalability requirements, and
            infrastructure needs before writing code. This prevents the expensive rebuilds that
            happen when products built without proper architecture try to grow.
          </p>
        </GlassCard>
        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">03</span>
          <h2 className="font-semibold">Full-stack delivery under one roof</h2>
          <p>
            Software development, web design, SEO, content marketing, digital marketing, and cloud
            engineering - all delivered by one team. No vendor coordination, no information lost
            between agencies, no blame-shifting when something goes wrong. One partner, full
            accountability.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">04</span>
          <h2 className="font-semibold">NDA-protected from day one</h2>
          <p>
            Every VMT engagement begins with a signed Non-Disclosure Agreement. Your product
            concepts, business logic, competitive positioning, and technical architecture are
            protected throughout and after the project. We are an NDA-protected software company in
            Mumbai that treats intellectual property with the seriousness it deserves.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">05</span>
          <h2 className="font-semibold">Transparent pricing from ₹75,000</h2>
          <p>
            Projects at VMT start from ₹75,000 for professional website development and scale based
            on scope and complexity. We provide detailed written estimates before any commitment. No
            surprise invoices. No scope creep without your approval.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">06</span>
          <h2 className="font-semibold">Long-term technology partner, not a one-off vendor</h2>
          <p>
            Most IT companies in India complete your project and disappear. VMT is built around
            long-term client relationships - maintenance, iteration, growth campaigns, and technical
            advisory that continue well after your product launches. We measure our success by the
            growth of your business, not by the closure of a ticket.
          </p>
        </GlassCard>
      </Position>
      <Position
        heading="Industries"
        title="Technology and Digital Growth Services Across Industries in India"
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VMT works with businesses across a broad range of industries - delivering software,
          websites, SEO, and digital marketing that addresses the specific dynamics of each sector.
        </p>

        <p className="text-lg my-2.5 text-justify">
          VMT works with businesses across a broad range of industries - delivering software,
          websites, SEO, and digital marketing that addresses the specific dynamics of each sector.
        </p>
        <p className="text-lg my-2.5 text-justify">
          Industries we serve: SaaS & Technology · eCommerce & Retail · FinTech · EdTech ·
          HealthTech · Real Estate · Professional Services · Manufacturing & Industrial · Logistics
          & Supply Chain · Media & Publishing · Hospitality & Travel · Legal & Consulting
        </p>
        <p className="text-lg my-2.5 text-justify">
          Whether you are a FinTech startup in Mumbai that needs a secure, compliant SaaS platform,
          an eCommerce brand across India that needs a faster website and better Google rankings, or
          a professional services firm that needs to generate consistent leads through SEO and
          content - VMT has delivered for businesses in your industry before.
        </p>
      </Position>
      <Position
        heading="Cities Served"
        title="Serving Businesses Across Mumbai, India and Internationally"
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VMT is headquartered in Mumbai and serves clients across the full geography of India -
          with no restriction on location for any service. We are a digitally-native, remote-capable
          team with clients across:
        </p>
        <p className="text-lg my-2.5 text-justify">
          Mumbai · Pune · Delhi NCR · Bangalore · Hyderabad · Chennai · Ahmedabad · Kolkata · Surat
          · Nagpur · Jaipur · Lucknow - and internationally across the UAE, UK, USA, and Southeast
          Asia.
        </p>
        <p className="text-lg my-2.5 text-justify">
          For Mumbai-based businesses, we are available for in-person meetings, workshops, and
          project kickoffs at your location or ours. For businesses across India and
          internationally, we run projects entirely remotely with regular video calls, detailed
          documentation, and transparent project management.
        </p>
      </Position>
      <ServicesFAQ />
      <MainServiceCTA
        ctaTitle="Contact Us"
        heading="Get Free Consultation"
        description="NDA Available · Projects from ₹75,000 · Response Within 24 Hours · Mumbai-Based Team · Serving India & Global Markets"
      />
    </>
  );
}
