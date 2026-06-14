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
  title: 'Website Development Company in Mumbai, India',
  description:
    'VMT builds fast, SEO-friendly Next.js websites in Mumbai, India. 90+ Lighthouse scores, technical SEO, responsive design, and custom websites from ₹75,000.',
  path: '/services/website-development',
});
const s_data = serviceData['/services/website-development'];

export default function WebSiteDev() {
  return (
    <>
      <Hero
        eyebrow="Professional Website Development - Mumbai, India"
        title={
          <>
            <span className="text-(--primary)">Website</span> Development Company In{' '}
            <span className="text-(--primary)">Mumbai</span>,
            <span className="text-(--primary)"> India</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Your website is the first thing a potential customer judges your business by - and
                  in most Indian cities
                </span>
                <br />
                your competitors&apos; websites are slow, generic, and invisible on Google. VMT
                builds professional business websites on Next.js that load in under two seconds,
                score 90+ on Google Lighthouse, and are structured to rank from launch day.
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
        ctaLable="Get Free Website Quote"
        ctaRoute="/contact"
      />
      {/* ============================================================
SECTION 1
============================================================ */}
      <Position
        heading="Why This Matters"
        clsName="hero-eyebrow-glowing-b mt-6"
        title={
          <>
            The Problem With Most
            <span className="text-(--primary)"> Business Websites</span> in India
          </>
        }
      >
        <p className="section-intro">
          Rob Fitzpatrick explains in <strong>The Mom Test</strong> that building products based on
          what people say they want often leads to the wrong outcome. The same mistake happens with
          business websites.
        </p>

        <p className="text-lg text-justify my-2.5">
          Most businesses believed they needed a website. What they actually needed was a website
          that loads in seconds on a mobile connection, ranks on Google when customers search for
          local services, and gives visitors enough confidence to enquire.
        </p>

        <p className="text-lg text-justify my-2.5">
          Unfortunately, most business websites across India fail at all three. They are built
          quickly using generic themes, overloaded plugins, and little consideration for performance
          or technical SEO. The result is a website that exists-but rarely generates meaningful
          business.
        </p>

        <p className="text-lg text-justify my-2.5">
          At VMT, every website is engineered on Next.js, optimised for Core Web Vitals, structured
          for Google indexing, and designed with clear conversion pathways because a website that
          looks attractive but neither ranks nor converts is an expense-not an investment.
        </p>
      </Position>
      {/* ============================================================
SECTION 2
============================================================ */}
      <Position
        heading="What's Included"
        clsName="hero-eyebrow-glowing-b mt-3"
        title={
          <>
            What a<span className="text-(--primary)"> VMT-Built Website</span> Includes
          </>
        }
        tagline="Every website is engineered for performance, search visibility, and long-term maintainability."
      >
        <div className="who-cards">
          <div className="vmt-glass-card">
            <h3 className="font-semibold">Performance Engineering</h3>
            <p>
              Next.js rendering, image optimisation, code splitting, and font optimisation
              delivering fast mobile experiences.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Technical SEO</h3>
            <p>
              Schema markup, XML sitemap, canonical URLs, metadata architecture, robots.txt, and
              structured headings built into the project.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Mobile-First Design</h3>
            <p>
              Responsive interfaces designed for Indian mobile users before desktop optimisation.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Conversion Architecture</h3>
            <p>
              Strategic CTAs, enquiry forms, WhatsApp integration, and information hierarchy focused
              on lead generation.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">CMS Integration</h3>
            <p>Contentful, Sanity, or custom admin dashboards for effortless content management.</p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Business-Ready Features</h3>
            <p>
              GST-friendly enquiry flows, Indian phone formatting, WhatsApp Business, and INR
              pricing support.
            </p>
          </div>
        </div>
      </Position>
      {/* ============================================================
SECTION 3
============================================================ */}
      <HowWeWork
        sectionId="website-development-process"
        title="Our Website Development Process"
        intro="As a professional website development company in India, we follow a structured yet simple process to deliver fast, responsive, and SEO-ready websites for small businesses, startups, and growing brands. Our goal is to keep development clear, efficient, and focused on generating real business results."
        steps={[
          {
            number: '01',
            title: 'Requirement Discussion & Planning',
            description:
              'We understand your business goals, target audience, and required features before defining the website structure and scope.',
            wide: true,
          },
          {
            number: '02',
            title: 'Design & Layout Structure',
            description:
              'We create clean, mobile-first UI designs and conversion-focused layouts aligned with your brand identity.',
          },
          {
            number: '03',
            title: 'Website Development & Optimization',
            description:
              'Our team builds a fast-loading, secure, and SEO-friendly website optimized for performance and responsiveness.',
          },
          {
            number: '04',
            title: 'Launch & Ongoing Support',
            description:
              'After testing and deployment, we provide support, updates, and performance monitoring to ensure long-term stability.',
            wide: true,
          },
        ]}
      />
      {/* ============================================================
SECTION 4
============================================================ */}
      <Position
        heading="Project Investment"
        clsName="hero-eyebrow-glowing-b"
        title={
          <>
            Website Development
            <span className="text-(--primary)"> Pricing in India</span>
          </>
        }
        tagline="Transparent pricing with detailed proposals before development begins."
      >
        <div className="services-list">
          <PricingCard
            heading="Basic Business Website"
            subhead="For Startups & Local Businesses"
            desc="A professionally crafted business website designed to establish credibility and generate consistent inquiries."
            price_text="Starting from"
            price_range="₹25,000 - ₹60,000"
            bullets={[
              '5-8 professionally designed pages',
              'Mobile-first responsive layout',
              'Contact form & lead capture setup',
              'Basic SEO-ready structure',
              'Fast loading & secure deployment',
            ]}
            target_link="/contact"
          />
          <PricingCard
            heading="Dynamic Website"
            subhead="For Growing & Scaling Businesses"
            desc="A scalable dynamic website with custom UI design and CMS flexibility for long-term digital growth."
            price_text="Most businesses choose this"
            price_range="₹60,000 - ₹1,50,000"
            featured={true}
            bullets={[
              'Custom UI/UX design',
              'Dynamic content management system (CMS)',
              'Blog & SEO architecture setup',
              'Advanced performance optimization',
              'Conversion-focused structure',
            ]}
            target_link="/contact"
          />
          <PricingCard
            heading="Ecommerce Website"
            subhead="For Brands Selling Online"
            desc="A secure ecommerce platform built for seamless transactions, product management, and revenue growth."
            price_text="Built for serious online growth"
            price_range="₹80,000 - ₹3,00,000"
            bullets={[
              'Product & inventory management',
              'Secure payment gateway integration',
              'Admin dashboard & order tracking',
              'Mobile-optimized shopping experience',
              'Analytics & performance tracking',
            ]}
            target_link="/contact"
          />
        </div>
        <p className="section-intro" style={{ marginTop: '3rem' }}>
          Every project includes a free consultation, a detailed written proposal, realistic
          delivery timelines, and an NDA before development begins.
        </p>
      </Position>
      <MainServiceFAQ heading="Website Development Services in India - FAQs" faqs={s_data.faqs} />
      <MainServiceCTA
        heading="Not Sure What You Need?"
        description="We assess your growth stage and architect for scale."
        ctaTitle="Get a Free Website Cost Consultation"
      />
    </>
  );
}
