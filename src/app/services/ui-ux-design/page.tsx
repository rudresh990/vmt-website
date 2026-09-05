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
  title: 'UI/UX Design Services in Mumbai | Website, SaaS & App Design | VoidMatrix',
  description:
    'Explore website UI design, SaaS UI design, mobile app UI design, UX research, wireframing and CRO design services from VoidMatrix in Mumbai, India.',
  path: '/services/design',
});

const faqs = [
  {
    q: 'What UI/UX design services does VoidMatrix provide?',
    a: 'VoidMatrix provides website UI design, SaaS UI design, mobile app UI design, UX research, wireframing and conversion-focused design services.',
  },
  {
    q: 'Does VoidMatrix design business websites?',
    a: 'Yes. VoidMatrix designs modern business website interfaces focused on usability, visual hierarchy, user experience and business conversion goals.',
  },
  {
    q: 'Does VoidMatrix provide SaaS UI design?',
    a: 'Yes. VoidMatrix designs SaaS interfaces for dashboards, products, workflows and customer-facing applications with a focus on usability and scalable design systems.',
  },
  {
    q: 'Does VoidMatrix provide mobile app UI design?',
    a: 'Yes. VoidMatrix provides UI design for mobile applications, including user flows, screens, interface components and responsive interaction patterns.',
  },
  {
    q: 'What is UX research?',
    a: 'UX research helps understand users, their behaviour, needs, problems and expectations so that digital products can be designed around real user requirements.',
  },
  {
    q: 'What is wireframing in UI/UX design?',
    a: 'Wireframing is the process of creating a structural representation of a website or application before detailed visual design and development.',
  },
  {
    q: 'What is CRO design?',
    a: 'Conversion rate optimisation design focuses on improving digital interfaces and user journeys to make it easier for visitors to complete desired actions such as enquiries, registrations or purchases.',
  },
  {
    q: 'Can UI/UX design be done for an existing website or application?',
    a: 'Yes. VoidMatrix can redesign or improve existing digital products by identifying usability, interface, user-flow and conversion opportunities.',
  },
  {
    q: 'Does VoidMatrix provide UI/UX design for startups?',
    a: 'Yes. VoidMatrix provides UI/UX design for startups building MVPs, SaaS products, mobile applications and new digital products.',
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function DesignServicesPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}

      <Hero
        eyebrow="UI/UX Design Services in Mumbai, India"
        title={<>UI/UX Design for <span className="text-(--primary)">Websites, SaaS</span> & <span className="text-(--primary)">Digital Products</span></>}
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  VoidMatrix provides UI/UX design services for businesses,
                  SaaS products, websites and mobile applications.
                </span>
                <br />
                From interface design and UX research to wireframing and
                conversion-focused design, we create digital experiences
                designed around users and business objectives.
              </p>
            </div>
          </>
        }
      />

      <CtaButtonRe
        title="Get Free Design Consultation"
        url="/contact"
      />

      {/* =========================================================
          INTRO
      ========================================================= */}

      <Position
        heading="DESIGN"
        title="UI/UX Design Built Around Users & Business Goals"
        tagline="Design digital experiences that are clear, usable, visually consistent and built to support business outcomes."
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VoidMatrix combines UI design, UX thinking, user research and
          conversion-focused design to create better digital experiences.
          Explore the services below to find the right design capability for
          your website, SaaS product, mobile application or digital platform.
        </p>
      </Position>

      {/* =========================================================
          UI DESIGN
      ========================================================= */}

      <Position
        heading="UI DESIGN"
        title="Digital Interface Design Services"
        tagline="Create modern, consistent and intuitive interfaces for websites, SaaS products and mobile applications."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <Link
            href="/services/website-ui-design"
            className="card-link"
          >
            <Eyebrow
              message="UI DESIGN"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Website UI Design
            </h3>

            <p>
              Modern website interfaces designed around usability, visual
              hierarchy, responsive behaviour and business conversion goals.
            </p>

            <span className="internal-link">
              Explore Website UI Design →
            </span>
          </Link>

          <Link
            href="/services/saas-ui-design"
            className="card-link"
          >
            <Eyebrow
              message="UI DESIGN"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              SaaS UI Design
            </h3>

            <p>
              Scalable SaaS interfaces for dashboards, workflows, products and
              customer-facing applications.
            </p>

            <span className="internal-link">
              Explore SaaS UI Design →
            </span>
          </Link>

          <Link
            href="/services/mobile-ui-design"
            className="card-link"
          >
            <Eyebrow
              message="UI DESIGN"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Mobile App UI Design
            </h3>

            <p>
              Mobile application interfaces designed around clear navigation,
              interaction patterns, usability and user experience.
            </p>

            <span className="internal-link">
              Explore Mobile App UI Design →
            </span>
          </Link>

        </div>
      </Position>

      {/* =========================================================
          UX & CONVERSION
      ========================================================= */}

      <Position
        heading="UX & CONVERSION"
        title="UX Research, Wireframing & CRO Design"
        tagline="Understand users, structure digital experiences and improve the path from visitor to customer."
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <Link
            href="/services/ux-research"
            className="card-link"
          >
            <Eyebrow
              message="UX"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              UX Research
            </h3>

            <p>
              Research user needs, behaviours and pain points to inform better
              product decisions and digital experiences.
            </p>

            <span className="internal-link">
              Explore UX Research →
            </span>
          </Link>

          <Link
            href="/services/wireframing"
            className="card-link"
          >
            <Eyebrow
              message="UX"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Wireframing
            </h3>

            <p>
              Structure website and application experiences through clear
              wireframes, user flows and page-level layouts before visual
              design.
            </p>

            <span className="internal-link">
              Explore Wireframing →
            </span>
          </Link>

          <Link
            href="/services/cro-design"
            className="card-link"
          >
            <Eyebrow
              message="CONVERSION"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              CRO Design
            </h3>

            <p>
              Improve interfaces, page structure and user journeys to increase
              the likelihood of desired actions and conversions.
            </p>

            <span className="internal-link">
              Explore CRO Design →
            </span>
          </Link>

        </div>

        <div className="mt-6">
          <Link
            href="/services/ui-ux-design"
            className="internal-link font-semibold!"
          >
            → Explore Complete UI/UX Design Services
          </Link>
        </div>
      </Position>

      {/* =========================================================
          WHY VOIDMATRIX
      ========================================================= */}

      <Position
        heading="WHY VOIDMATRIX"
        title="Design That Connects User Experience With Business Objectives"
        tagline="Good design should make digital products easier to understand, easier to use and easier to act on."
        clsName="hero-eyebrow-glowing-b"
      >

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">01</span>

          <h2 className="font-semibold">
            User-Focused Design
          </h2>

          <p>
            Interfaces are designed around how users navigate, understand and
            interact with digital products rather than visual appearance alone.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">02</span>

          <h2 className="font-semibold">
            Business-Focused Decisions
          </h2>

          <p>
            Design decisions are connected to business objectives such as
            enquiries, registrations, purchases, retention and product
            adoption.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">03</span>

          <h2 className="font-semibold">
            Development-Ready Design
          </h2>

          <p>
            Designs can be created with development requirements in mind,
            helping reduce unnecessary friction between design and
            implementation.
          </p>
        </GlassCard>

        <GlassCard className="no-hover my-5 border-3! border-l-cyan-400!">
          <span className="step-number">04</span>

          <h2 className="font-semibold">
            Scalable Design Systems
          </h2>

          <p>
            Reusable components, consistent interface patterns and structured
            design systems help digital products remain consistent as they
            grow.
          </p>
        </GlassCard>

      </Position>

      {/* =========================================================
          WHAT WE DESIGN
      ========================================================= */}

      <Position
        heading="WHAT WE DESIGN"
        title="Design Services for Different Digital Products"
        clsName="hero-eyebrow-glowing-b"
      >
        <div className="services-list">

          <GlassCard className="no-hover">
            <Eyebrow
              message="WEBSITES"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Business Websites
            </h3>

            <p>
              Professional interfaces for company websites, service websites,
              landing pages and other customer-facing digital experiences.
            </p>
          </GlassCard>

          <GlassCard className="no-hover">
            <Eyebrow
              message="SAAS"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              SaaS Products
            </h3>

            <p>
              Product interfaces, dashboards and workflows designed for
              software products and recurring-use digital platforms.
            </p>
          </GlassCard>

          <GlassCard className="no-hover">
            <Eyebrow
              message="MOBILE"
              cName="hero-eyebrow-glowing-b"
            />

            <h3 className="my-2">
              Mobile Applications
            </h3>

            <p>
              Mobile interfaces and user journeys designed for clear,
              efficient and intuitive application experiences.
            </p>
          </GlassCard>

        </div>
      </Position>

      {/* =========================================================
          WHO WE WORK WITH
      ========================================================= */}

      <Position
        heading="WHO WE WORK WITH"
        title="UI/UX Design for Startups, SMEs & Growing Products"
        clsName="hero-eyebrow-glowing-b"
      >
        <p className="text-lg my-2.5 text-justify">
          VoidMatrix works with startups launching new products, SMEs improving
          their digital presence and established businesses redesigning or
          modernising existing digital experiences.
        </p>

        <p className="text-lg my-2.5 text-justify">
          Whether you are starting a new SaaS product, redesigning a business
          website, improving a mobile application or trying to increase
          conversions, the design process can be aligned with the specific
          requirements of your product and audience.
        </p>
      </Position>

      {/* =========================================================
          FAQ
      ========================================================= */}

      <MainServiceFAQ heading='UI/UX - FAQs' faqs={faqs} />

      {/* =========================================================
          CTA
      ========================================================= */}

      <MainServiceCTA
        ctaTitle="Start a Design Project"
        heading="Need a Better Digital Product Experience?"
        description="Tell us about your website, SaaS product or application and we can help identify the right UI/UX design approach."
      />
    </>
  );
}