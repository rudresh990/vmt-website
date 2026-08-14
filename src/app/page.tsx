import type { Metadata } from 'next';
import WhatweDo from '@/components/sections/home/WhatweDo';
import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import Position from '@/components/sections/home/Positioning';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import { buildMetadata } from './lib/schema/seo';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import { homeFaqs } from './lib/schema/data/home_faqs';

export const metadata: Metadata = buildMetadata({
  title: 'VoidMatrix Technology Pvt Ltd | Scalable Software & Web Systems',
  description:
    'VoidMatrix Technology delivers custom software, SaaS, websites, mobile apps, eCommerce, SEO, and digital marketing for business growth.',
  path: '',
});

// const cards = [
//   {
//     title: 'Business Website',
//     range: '₹75,000 - ₹3,00,000',
//     desc: 'For SMEs and service businesses needing a high-performance online presence.',
//     url: '/contact',
//   },
//   {
//     title: 'eCommerce & Advanced Web Applications',
//     range: '₹2,00,000 - ₹8,00,000',
//     desc: 'For growing brands and businesses launching scalable digital platforms.',
//     url: '/contact',
//   },
//   {
//     title: 'Custom Software & SaaS Systems',
//     range: '₹3,00,000 - ₹25,00,000+',
//     desc: 'For startups and enterprises building complex, architecture-driven systems.',
//     url: '/services/custom-software-development',
//   },
// ];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="India's Full-stack Technology & Growth Partner"
        title={
          <>
            Build, Scale & <span className="text-(--primary)">Grow</span> Your Business <br />
            With <span className="text-(--primary)">Technology</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  We are a custom software development company in Mumbai, India delivering
                  end-to-end technology and growth solutions -
                </span>
                Custom Software, SaaS Platforms, Business Websites, Mobile Apps, eCommerce Stores,
                SEO Services, Digital Marketing, UI/UX Design, and Business Automation for Startups,
                SMEs, and Enterprises across India and globally.
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
                <span className="text-(--primary)">NDA</span> Protected{' '}
              </span>
              <span className="text-glow"> |</span>
              <span>
                Architecture-
                <span className="text-(--primary)">First</span>
              </span>
              <span className="text-glow"> |</span>
              <span>
                Long-term <span className="text-(--primary)">Support</span>{' '}
              </span>
            </div>
          </>
        }
        ctaLable="Get Free Project Estimate"
        ctaRoute="/software-development-cost-estimator"
        // note="Solution Coming Soon."
      />
      <Position
        title="Mumbai's Technology Partner for Software, Websites & Business Growth"
        heading="Who we are"
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-5 text-justify">
          VoidMatrix Technology is a full-service IT company based in Mumbai, India. We help
          startups, small and medium enterprises, and large organisations build digital products,
          scale their operations, and grow their revenue through technology and digital marketing -
          all under one roof.
        </p>
        <p className="text-lg my-5 text-justify">
          Unlike typical software houses that hand you a product and disappear, VMT functions as
          your long-term technology and growth partner. From the day you share your idea to the
          moment your business reaches its next growth milestone - we are with you at every step.
        </p>
        <p className="text-lg my-5 text-justify">
          As an IT company in Mumbai with a team spanning software engineering, web development,
          UI/UX design, SEO, content marketing, digital marketing, and cloud infrastructure, we
          eliminate the fragmentation that comes from working with multiple agencies. Your
          developers, your SEO team, your digital marketers, and your designers all speak the same
          language - because they sit under the same roof.
        </p>
        <p className="text-lg my-5 text-justify">
          Whether you are a Mumbai-based startup that needs to launch a SaaS product, an SME in
          India looking to modernise your website and improve Google rankings, or an enterprise that
          needs custom software and ongoing technical support - VMT has the depth, the experience,
          and the team to deliver.
        </p>
      </Position>
      <Position
        heading="Our Services"
        tagline="Every Technology and Growth Service Your Business Needs"
        title={
          <>
            <div>
              <Link href={'/services/custom-software-development'}>
                <span className="text-(--primary) italic font-medium">Software Development - </span>
              </Link>
              Custom Software Development Company in Mumbai
            </div>
          </>
        }
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-5 text-justify">
          We design and build custom software solutions, SaaS platforms, enterprise software, CRM
          systems, ERP solutions, and workflow automation tailored to your specific business
          processes. As a custom software development company in Mumbai, our approach is
          architecture-first - meaning we plan your system for scalability before writing a single
          line of code.
        </p>
        <p className="text-lg my-5 text-justify">
          Whether you are a Mumbai-based startup building your first SaaS product or an enterprise
          in India that needs to replace legacy software with a modern, scalable system, our
          software development team handles the full project lifecycle from requirement analysis to
          deployment and post-launch support.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> Custom Software Development · SaaS Development Company India ·
          Enterprise Software · CRM & ERP Development · Workflow Automation · Product Engineering
        </p>
        <h2 className="section-title">
          <Link href={'/services/web-application-development'}>
            <span className="text-(--primary) italic font-medium">Web & App Development - </span>
          </Link>
          Web Development Company Mumbai
        </h2>
        <p className="text-lg my-5 text-justify">
          Your website and digital products are the face of your business. As a web development
          company in Mumbai, we build professional business websites, high-performance web
          applications, iOS and Android mobile applications, eCommerce stores, marketplace
          platforms, and CMS-driven websites that are fast, secure, and built to convert visitors
          into customers.
        </p>
        <p className="text-lg my-5 text-justify">
          From a simple professional website for a Mumbai-based service business to a complex
          eCommerce platform handling thousands of orders across India, our web and app development
          team delivers products that are engineered for speed, security, and scalability.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> Professional Website Development · Web Application Development ·
          Mobile App Development Mumbai · eCommerce Development Mumbai · Marketplace Development ·
          CMS Development
        </p>

        <h2 className="section-title">
          <Link href={'/services/platform-engineering'}>
            <span className="text-(--primary) italic font-medium">
              Platform Engineering & Cloud -{' '}
            </span>
          </Link>
          DevOps Company Mumbai
        </h2>
        <p className="text-lg my-5 text-justify">
          Reliable infrastructure is the backbone of every great digital product. Our platform and
          cloud engineering team builds the infrastructure that keeps your product running at scale
          - cloud engineering on AWS and GCP, DevOps services, CI/CD pipelines, API development,
          payment gateway integrations, WhatsApp Business integrations, CRM integrations, and
          third-party API work.
        </p>
        <p className="text-lg my-5 text-justify">
          As a DevOps and cloud engineering company serving businesses in Mumbai and across India,
          we help organisations reduce infrastructure costs, improve deployment speed, and build
          systems that handle traffic spikes without downtime.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> Platform Engineering · Cloud Engineering (AWS/GCP) · DevOps Services
          Mumbai · API Development India · Payment Gateway Integration · Third-Party Integrations ·
          CI/CD Pipelines · Performance Monitoring
        </p>

        <h2 className="section-title">
          <Link href="/services/seo-services">
            <span className="text-(--primary) italic font-medium">SEO Services - </span>
          </Link>
          SEO Agency in Mumbai
        </h2>
        <p className="text-lg my-5 text-justify">
          Ranking on the first page of Google is one of the most sustainable sources of leads a
          business can build. As an SEO agency in Mumbai, we offer technical SEO, on-page SEO, local
          SEO, enterprise SEO, SEO audits, website speed optimisation, Core Web Vitals optimisation,
          and conversion rate optimisation designed to grow your organic traffic month over month.
        </p>
        <p className="text-lg my-5 text-justify">
          Our SEO team works with businesses across Mumbai, Pune, Delhi, Bangalore, and across India
          to build search presence that generates consistent, compounding leads - not short-term
          spikes that disappear. We audit your existing website, identify technical issues, fix
          them, build your keyword strategy, and execute content that ranks.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> Technical SEO Mumbai · On-Page SEO · Local SEO India · Enterprise SEO
          · SEO Audits · Website Speed Optimisation · Core Web Vitals · SEO Consulting Mumbai
        </p>

        <h2 className="section-title">
          <Link href="/services/content-marketing">
            <span className="text-(--primary) italic font-medium">Content Marketing - </span>
          </Link>
          Content Marketing Agency India
        </h2>
        <p className="text-lg my-5 text-justify">
          Content is how your business earns trust and organic traffic at the same time. As a
          content marketing agency in India, we write SEO-optimised blog content, website copy,
          service page content, landing page copy, case studies, and build full content strategies
          that position your brand as an authority while driving measurable search rankings.
        </p>
        <p className="text-lg my-5 text-justify">
          Every piece of content we produce is built around keyword research, search intent, and
          your audience&apos;s actual questions - not generic filler. From a Mumbai-based startup
          looking to build a blog that ranks to an enterprise needing a full content marketing
          engine, we build content that works.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> SEO Blog Writing · Website Copywriting India · Service Page Content ·
          Landing Page Copywriting · Case Studies · Content Strategy · Content Calendar Management
        </p>

        <h2 className="section-title">
          <Link href="/services/digital-marketing">
            <span className="text-(--primary) italic font-medium">Digital Marketing - </span>
          </Link>
          Digital Marketing Agency Mumbai
        </h2>
        <p className="text-lg my-5 text-justify">
          Getting found online is only half the equation. Converting that traffic into customers is
          where digital marketing delivers ROI. As a digital marketing agency in Mumbai, we run
          Google Ads campaigns, Meta Ads (Facebook and Instagram), LinkedIn Ads, lead generation
          funnels, email marketing campaigns, and marketing automation workflows designed to bring
          qualified leads directly to your business.
        </p>
        <p className="text-lg my-5 text-justify">
          Every campaign we run is built around your business goals - not impressions. We track cost
          per lead, cost per acquisition, and return on ad spend, and we optimise continuously to
          bring those numbers down.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> Google Ads Agency Mumbai · Meta Ads Management · LinkedIn Ads India ·
          Lead Generation Funnels · Email Marketing India · Marketing Automation · Conversion Funnel
          Optimisation
        </p>

        <h2 className="section-title">
          <Link href="/services/social-media-management">
            <span className="text-(--primary) italic font-medium">Social Media Management - </span>
          </Link>
          Social Media Agency Mumbai
        </h2>
        <p className="text-lg my-5 text-justify">
          A consistent, strategic social media presence builds brand awareness and generates inbound
          leads for your business. As a social media management company in Mumbai, we manage
          LinkedIn, Instagram, Facebook, and other platforms through content calendars, community
          management, personal branding for founders, and social strategies built around your
          business goals.
        </p>
        <p className="text-lg my-5 text-justify">
          We do not post for the sake of posting. Every piece of social content we create is
          designed to build authority, attract your target audience, and generate conversations that
          convert.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> Social Media Management Mumbai · LinkedIn Management India ·
          Instagram Management · Content Calendars · Community Management · Personal Branding for
          Founders
        </p>
        <h2 className="section-title">
          <Link href="/services/ui-ux-design">
            <span className="text-(--primary) italic font-medium">UI/UX Design - </span>
          </Link>
          UI UX Design Company Mumbai
        </h2>
        <p className="text-lg my-5 text-justify">
          Beautiful, intuitive products retain users and convert better. As a UI/UX design company
          in Mumbai, our designers create website UI, SaaS product interfaces, mobile app UI,
          wireframes, prototypes, and conduct UX research to ensure your product is both visually
          polished and strategically designed to guide users toward action.
        </p>
        <p className="text-lg my-5 text-justify">
          Design at VMT is never just aesthetic - it is functional. Every design decision is
          informed by user behaviour, conversion data, and business objectives. We design products
          that people love to use and that deliver measurable business outcomes.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> Website UI Design Mumbai · SaaS UI Design India · Mobile App UI
          Design · Wireframing & Prototyping · UX Research · Conversion Rate Optimisation Design ·
          A/B Testing
        </p>
        <h2 className="section-title">
          <Link href="/services/consulting-and-strategy">
            <span className="text-(--primary) italic font-medium">Consulting & Strategy - </span>
          </Link>
          Technology Consulting Company India
        </h2>
        <p className="text-lg my-5 text-justify">
          Strategy is what separates products that succeed from products that miss. As a technology
          consulting company in India, we work with founders, product leaders, and executive teams
          on product strategy, technology roadmaps, software architecture reviews, startup
          consulting, and growth consulting.
        </p>
        <p className="text-lg my-5 text-justify">
          Whether you are a Mumbai-based founder deciding on your tech stack, an SME looking to
          modernise operations, or an enterprise team planning a multi-year digital transformation -
          our consulting team helps you make decisions that are aligned with your business goals and
          your technical reality.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> Startup Consulting Mumbai · Product Strategy India · Technology
          Roadmaps · Software Consulting · Technical Advisory · Growth Consulting India
        </p>
        <h2 className="section-title">
          <Link href="/services/maintenance-and-support">
            <span className="text-(--primary) italic font-medium">Maintenance & Support - </span>
          </Link>
          Website Maintenance Services Mumbai
        </h2>
        <p className="text-lg my-5 text-justify">
          Technology needs ongoing care to remain secure, fast, and reliable. Our maintenance and
          support team provides website maintenance, software maintenance, application monitoring,
          security monitoring, managed services, and acts as a dedicated long-term technical partner
          for businesses across Mumbai and India that need proactive, reliable support.
        </p>
        <p className="text-lg my-5 text-justify">
          We handle updates, security patches, performance monitoring, and technical incidents - so
          you can focus on running your business, not firefighting technical issues.
        </p>
        <p className="text-lg my-5 text-justify">
          <b>Key services:</b> Website Maintenance Services Mumbai · Software Maintenance India ·
          Application Monitoring · Security Monitoring · Managed Services · Dedicated Technical
          Partner
        </p>
      </Position>
      <WhatweDo />
      <CtaButtonRe title="Explore All Services" url="/services" />
      <Position
        heading="Why VMT"
        clsName="hero-eyebrow-glowing-b"
        title={
          <>
            Why businesses in Mumbai and across India <br />
            <span className="text-(--primary) italic font-medium">
              choose VoidMatrix Technology
            </span>
          </>
        }
      >
        <p className="text-gray-400 mb-4">
          One team. Every service. Unified ownership of your outcomes -{' '}
          <span className="font-semibold italic">from architecture to acquisition.</span>
        </p>
        <div className="card-grid">
          <GlassCard>
            <h3 className="text-white font-semibold italic text-lg">Architecture-First, Always:</h3>
            <p className="mt-2 text-justify italic">
              Every product we build starts with architecture design, not code. We plan your data
              models, APIs, infrastructure, and scalability requirements before development begins.
              This is why VMT-built products scale without expensive rebuilds.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-white font-semibold italic text-lg">NDA-Protected from Day One:</h3>
            <p className="mt-2 text-justify italic">
              Every project engagement at VMT begins with a Non-Disclosure Agreement. Your product
              ideas, business logic, competitive strategy, and technical architecture remain
              strictly confidential. We are an NDA-protected software development company in Mumbai
              that takes intellectual property seriously.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-white font-semibold italic text-lg">
              Full-Stack Delivery - One Team, One Outcome:
            </h3>
            <p className="mt-2 text-justify italic">
              From software development and web design to SEO, content, paid ads, and social media
              management - every service is delivered by one team with unified ownership of your
              results. No agency handoffs. No coordination overhead. Just execution.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-white font-semibold italic text-lg">
              Transparent, Affordable Pricing:
            </h3>
            <p className="mt-2 text-justify italic">
              Projects at VMT start from ₹75,000, making us one of the most accessible full-service
              technology and digital marketing companies in Mumbai for startups and SMEs. We provide
              detailed project estimates before any commitment so you always know exactly what you
              are investing.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-white font-semibold italic text-lg">
              Long-Term Technology Partnership:
            </h3>
            <p className="mt-2 text-justify italic">
              Most software companies in India build your product and disappear. VMT stays invested
              in your success long after launch. We provide ongoing maintenance, iteration,
              marketing, and growth support. Our longest client relationships span more than three
              years, not because of contracts, but because of results.
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-white font-semibold italic text-lg">
              Built for Startups, SMEs & Enterprises Across India:
            </h3>
            <p className="mt-2 text-justify italic">
              Whether you are a first-time founder in Mumbai, a growing SME in Pune or Bangalore, or
              a large enterprise modernising your technology stack - VMT has the team depth, service
              breadth, and delivery experience to handle your requirements at every stage of growth.
            </p>
          </GlassCard>
        </div>
      </Position>
      <Position
        clsName="hero-eyebrow-glowing-b mt-3"
        heading="Industries"
        title={
          <>
            <div className="italic">
              <span className="text-(--primary)">Technology & Growth</span> Solutions Across
              Industries
            </div>
          </>
        }
      >
        <p className="text-justify">
          VMT works with businesses across a wide range of industries - including EdTech, FinTech,
          HealthTech, Retail & eCommerce, Real Estate, Professional Services, SaaS, Manufacturing,
          Logistics, and Media. Our teams have built products for clients across Mumbai, Pune,
          Delhi, Hyderabad, Bangalore, and international markets including the UAE, UK, and USA.
        </p>
      </Position>
      {/* <InvestmentRange cards={cards} /> */}
      <HowWeWork
        title="Our Architecture-First Development Process"
        intro="Our software development process is designed to keep projects clear, predictable, and focused on building scalable solutions that solve real business problems - not just ship features."
        steps={[
          {
            number: '01',
            title: 'Requirement Discovery & Business Analysis',
            description:
              'We understand workflows, integrations, and long-term goals before defining scope.',
            wide: true,
          },
          {
            number: '02',
            title: 'System Architecture & UI/UX Design',
            description: 'We design scalable backend structures and intuitive user experiences.',
          },
          {
            number: '03',
            title: 'Agile Development & Testing',
            description:
              'Secure, modular development cycles with continuous testing and optimization.',
          },
          {
            number: '04',
            title: 'Deployment & Long-Term Support',
            description: 'Cloud deployment, monitoring, and scalable future enhancements.',
            wide: true,
          },
        ]}
      />
      {/* <CtaButtonRe title="Start Your Project" url="/contact" /> */}
      {/* <WhoWeWorkWith /> */}
      <MainServiceFAQ
        heading="Frequently Asked Questions About Software Development, SEO & Digital Marketing in Mumbai"
        faqs={homeFaqs}
      />
      <MainServiceCTA
        heading="Ready to Build, Scale & Grow?"
        ctaTitle2="View All Services"
        description="From small business websites to enterprise software systems - we design solutions that scale."
      />
    </>
  );
}
