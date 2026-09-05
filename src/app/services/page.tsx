import type { Metadata } from 'next';
import Hero from '@/components/sections/common/Hero';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import Link from 'next/link';
import { buildMetadata } from '../lib/schema/seo';
import Position from '@/components/sections/home/Positioning';
import Eyebrow from '@/components/common/eyebrow';
import GlassCard from '@/components/ui/GlassCard';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';

export const metadata: Metadata = buildMetadata({
  title:
    'Software Development, SEO & Digital Marketing Services in Mumbai | VoidMatrix',
  description:
    'Explore software development, web application development, SEO, digital marketing, UI/UX design and platform engineering services from VoidMatrix in Mumbai, India.',
  path: '/services',
});

/* =========================================================
   SERVICE COLLECTION FAQS
========================================================= */

const faqs = [
  {
    q: 'What services does VoidMatrix provide?',
    a: 'VoidMatrix provides custom software development, web application development, SEO services, digital marketing and content, UI/UX design, and platform engineering services.',
  },
  {
    q: 'Does VoidMatrix provide custom software development?',
    a: 'Yes. VoidMatrix develops custom software around specific business workflows, requirements, integrations, and scalability needs.',
  },
  {
    q: 'Does VoidMatrix build web applications?',
    a: 'Yes. VoidMatrix develops high-performance web applications for businesses, SaaS products, digital platforms, and custom operational requirements.',
  },
  {
    q: 'Does VoidMatrix provide SEO and digital marketing services?',
    a: 'Yes. VoidMatrix provides SEO, digital marketing, content, and related digital growth services designed to improve visibility, traffic, leads, and business growth.',
  },
  {
    q: 'Does VoidMatrix provide UI/UX design services?',
    a: 'Yes. VoidMatrix provides UI/UX design for websites, applications, SaaS products, and other digital experiences.',
  },
  {
    q: 'Does VoidMatrix provide technology consulting?',
    a: 'Yes. VoidMatrix provides platform engineering and technology-focused services for businesses that need technical infrastructure, integrations, scalability, and engineering support.',
  },
  {
    q: 'Who does VoidMatrix work with?',
    a: 'VoidMatrix works with startups, SMEs, and established businesses that need software development, digital growth, product design, or technology services.',
  },
  {
    q: 'Where does VoidMatrix provide its services?',
    a: 'VoidMatrix is based in Mumbai and provides services to businesses across India and international markets.',
  },
  {
    q: 'Can VoidMatrix handle multiple services for the same project?',
    a: 'Yes. Development, design, SEO, digital marketing, and technology services can be coordinated through one technology partner depending on the project requirements.',
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function SolutionPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <Hero
        eyebrow="Technology & Digital Growth Services in Mumbai, India"
        title={<>Software, Marketing, Design & <span className="text-(--primary)">Technology Services</span></>}
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  VoidMatrix provides technology and digital growth services
                  for businesses across Mumbai, India and global markets.
                </span>
                <br />
                From custom software and web applications to SEO, digital
                marketing, UI/UX design and platform engineering, our services
                cover the core technology and digital requirements businesses
                need to build, improve and scale.
              </p>
            </div>
          </>
        }
      />

      <CtaButtonRe
        title="Get Free Consultation"
        url="/contact"
      />

      {/* =========================================================
          SERVICE INTRO
      ========================================================= */}

      <Position
        heading="OUR SERVICES"
        title="Technology Services Built Around Your Business"
        tagline="Explore our core service categories and continue to the dedicated service page for detailed information."
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VoidMatrix combines software development, digital growth, product
          design and technology infrastructure under one technology partner.
          Each service below links directly to its dedicated page so you can
          explore the specific solution relevant to your business.
        </p>
      </Position>

      {/* =========================================================
          DEVELOPMENT
      ========================================================= */}

      <Position
        heading="DEVELOPMENT"
        title="Software & Web Development"
        tagline="Build digital products, business software and scalable web applications with modern technology."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <Link
            href="/services/custom-software-development"
            className="card-link"
          >
            <Eyebrow
              message="Software Development"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Custom Software Development
            </h3>

            <p>
              Custom business software designed around your workflows,
              integrations, operational requirements and long-term
              scalability.
            </p>

            <span className="internal-link">
              Explore Custom Software Development →
            </span>
          </Link>

          <Link
            href="/services/web-application-development"
            className="card-link"
          >
            <Eyebrow
              message="Web Development"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Web Application Development
            </h3>

            <p>
              High-performance web applications built for business
              operations, SaaS products, digital platforms and customer
              experiences.
            </p>

            <span className="internal-link">
              Explore Web Application Development →
            </span>
          </Link>

        </div>
      </Position>

      {/* =========================================================
          MARKETING & SEO
      ========================================================= */}

      <Position
        heading="MARKETING & SEO"
        title="SEO & Digital Marketing"
        tagline="Build search visibility, generate qualified traffic and turn digital reach into business growth."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <Link
            href="/services/seo-services"
            className="card-link"
          >
            <Eyebrow
              message="SEO"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              SEO Services & Digital Marketing
            </h3>

            <p>
              Technical, on-page and strategic SEO focused on improving search
              visibility, rankings, qualified traffic and organic leads.
            </p>

            <span className="internal-link">
              Explore SEO Services →
            </span>
          </Link>

        </div>
      </Position>

      {/* =========================================================
          DESIGN
      ========================================================= */}

      <Position
        heading="DESIGN"
        title="UI/UX & Digital Product Design"
        tagline="Create digital experiences that balance usability, interface quality and business objectives."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <Link
            href="/services/ui-ux-design"
            className="card-link"
          >
            <Eyebrow
              message="UI/UX Design"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              UI/UX Design
            </h3>

            <p>
              User-focused interfaces, product experiences, wireframes and
              prototypes for websites, SaaS products and applications.
            </p>

            <span className="internal-link">
              Explore UI/UX Design →
            </span>
          </Link>

        </div>
      </Position>

      {/* =========================================================
          CONSULTING
      ========================================================= */}

      <Position
        heading="CONSULTING"
        title="Platform Engineering & Technology Services"
        tagline="Build reliable technical foundations for applications and digital products that need to scale."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <Link
            href="/services/platform-engineering"
            className="card-link"
          >
            <Eyebrow
              message="Platform Engineering"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Platform Engineering
            </h3>

            <p>
              Platform infrastructure, integrations, deployment systems and
              engineering foundations for reliable and scalable digital
              products.
            </p>

            <span className="internal-link">
              Explore Platform Engineering →
            </span>
          </Link>

        </div>
      </Position>

      {/* =========================================================
          WHY VOIDMATRIX
      ========================================================= */}

      <Position
        heading="WHY VOIDMATRIX"
        title="One Technology Partner for Development & Digital Growth"
        tagline="Build, improve and grow your digital presence with one accountable technology partner."
        clsName="hero-eyebrow-glowing-b"
      >

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">01</span>

          <h2 className="font-semibold">
            Modern Technology
          </h2>

          <p>
            We use modern frameworks and technology practices to build
            performant, scalable and maintainable digital products.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">02</span>

          <h2 className="font-semibold">
            Architecture-First Development
          </h2>

          <p>
            Projects are planned around architecture, integrations,
            scalability and long-term technical requirements before
            implementation.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">03</span>

          <h2 className="font-semibold">
            Multiple Capabilities Under One Roof
          </h2>

          <p>
            Development, design, SEO, digital marketing and platform
            engineering can be coordinated through one technology partner.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">04</span>

          <h2 className="font-semibold">
            Long-Term Partnership
          </h2>

          <p>
            Our relationship can continue beyond the initial project through
            maintenance, optimisation, growth and ongoing technical support.
          </p>
        </GlassCard>

      </Position>

      {/* =========================================================
          INDUSTRIES
      ========================================================= */}

      <Position
        heading="INDUSTRIES"
        title="Technology Services Across Industries in India"
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VoidMatrix works with businesses across technology, ecommerce,
          professional services and other industries that depend on software,
          digital visibility and modern technology infrastructure.
        </p>

        <p className="text-lg my-2.5 text-justify">
          SaaS & Technology · eCommerce & Retail · FinTech · EdTech ·
          HealthTech · Real Estate · Professional Services · Manufacturing &
          Industrial · Logistics & Supply Chain · Media & Publishing ·
          Hospitality & Travel · Legal & Consulting
        </p>
      </Position>

      {/* =========================================================
          LOCATIONS
      ========================================================= */}

      <Position
        heading="LOCATIONS"
        title="Serving Businesses Across Mumbai, India & Global Markets"
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VoidMatrix is based in Mumbai and provides technology and digital
          growth services to businesses across India and international
          markets.
        </p>

        <p className="text-lg my-2.5 text-justify">
          Mumbai · Pune · Delhi NCR · Bangalore · Hyderabad · Chennai ·
          Ahmedabad · Kolkata · Surat · Nagpur · Jaipur · Lucknow
        </p>
      </Position>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <MainServiceFAQ heading="Frequently Asked Questions" faqs={faqs} />

      {/* =========================================================
          CTA
      ========================================================= */}

      <MainServiceCTA
        ctaTitle="Contact Us"
        heading="Need Help Choosing the Right Service?"
        description="Tell us what you are building, improving or trying to grow. We can help identify the right technology or digital service for your requirement."
      />
    </>
  );
}