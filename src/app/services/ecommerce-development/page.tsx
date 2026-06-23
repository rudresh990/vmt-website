import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import Position from '@/components/sections/home/Positioning';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/lib/schema/seo';
import { serviceData } from '@/app/lib/schema/data/services_data';

export const metadata: Metadata = buildMetadata({
  title: 'eCommerce Development Company in Mumbai, India',
  description:
    'VMT builds custom Next.js eCommerce stores with Razorpay, UPI & PayU integration. Fast, SEO-ready websites for Indian businesses. Mumbai team.',
  path: '/services/ecommerce-development',
});

const s_data = serviceData['/services/ecommerce-development'];

export default function EcommerceDevelopment() {
  return (
    <>
      <Hero
        eyebrow="Custom eCommerce Development - Mumbai, India"
        title={
          <>
            <span className="text-(--primary)">eCommerce</span> Development Company in{' '}
            <span className="text-(--primary)">Mumbai</span>,
            <span className="text-(--primary)"> India</span>
          </>
        }
        herosub={
          <div className="my-2.5">
            <p>
              <span className="text-white">Shopify makes it easy to launch an online store.</span>
              <br />
              It also makes it difficult to rank on Google, expensive to scale, and impossible to
              customise beyond its platform constraints. VMT builds custom eCommerce stores on
              Next.js for Indian businesses-faster, more SEO-friendly, and fully owned by you.
            </p>
          </div>
        }
        subtitle={
          <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
            <span>
              Projects from <span className="text-(--primary)">₹1,50,000</span>
            </span>

            <span className="text-glow">|</span>

            <span>
              <span className="text-(--primary)">No Monthly</span> Platform Fees
            </span>

            <span className="text-glow">|</span>

            <span>
              Built with <span className="text-(--primary)">Next.js</span>
            </span>

            <span className="text-glow">|</span>

            <span>
              Fully <span className="text-(--primary)">Owned</span> Codebase
            </span>
          </div>
        }
        ctaLable="Get Free eCommerce Quote"
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
            Why Indian <span className="text-(--primary)">eCommerce Businesses</span> Are Losing to
            Their Own Platform
          </>
        }
      >
        <p className="section-intro">
          The insight from <strong>The Lean Startup</strong> most relevant to eCommerce is
          innovation accounting-measuring what actually matters instead of what is easiest to
          measure.
        </p>

        <p className="text-lg text-justify my-2.5">
          Most Indian businesses track their Shopify subscription every month. Very few measure how
          much organic traffic they lose because their store scores poorly on Google Lighthouse,
          fails Core Web Vitals, and struggles to compete in search.
        </p>

        <p className="text-lg text-justify my-2.5">
          Shopify is designed around convenience. In exchange, you accept a JavaScript-heavy
          frontend, limited technical SEO control, recurring platform fees, transaction costs, and
          customisation limits that become increasingly restrictive as your business grows.
        </p>

        <p className="text-lg text-justify my-2.5">
          For a store processing 50 orders each month, those trade-offs are acceptable. For a
          business processing hundreds of orders, investing in SEO, integrating with Indian ERP
          systems, and building long-term brand value, a custom platform becomes a strategic
          advantage-not just a technical upgrade.
        </p>

        <p className="text-lg text-justify my-2.5">
          VMT develops headless eCommerce platforms on Next.js, combining application-grade
          performance with enterprise SEO and complete ownership of your code, customer data, and
          digital infrastructure.
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
            What a <span className="text-(--primary)">VMT eCommerce Build</span> Includes
          </>
        }
        tagline="Everything required to operate, scale, and rank an enterprise-ready online store."
      >
        <div className="who-cards">
          <div className="vmt-glass-card">
            <h3 className="font-semibold">Store Management</h3>
            <p>
              Product catalogue, categories, filters, advanced search, inventory management, and
              complete order management.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Customer Experience</h3>
            <p>
              Customer accounts, wishlists, reviews, abandoned cart recovery, and streamlined
              checkout flows.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Payments for India</h3>
            <p>
              Razorpay, PayU, Cashfree, UPI, and GST-compliant invoicing built directly into your
              platform.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Shipping & Logistics</h3>
            <p>
              Integration with Shiprocket, Delhivery, Dunzo, and other Indian logistics providers.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Admin Dashboard</h3>
            <p>
              Custom dashboard for products, customers, orders, inventory, analytics, and business
              operations.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Technical SEO</h3>
            <p>
              Schema markup, metadata architecture, Core Web Vitals optimisation, XML sitemaps, and
              search-ready category structures from day one.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg">
            <strong>Everything included.</strong> No monthly platform fees. No revenue sharing. No
            vendor lock-in.
          </p>

          <p className="mt-2 text-lg text-(--text-body)">
            <strong>Your store. Your code. Your data.</strong>
          </p>
        </div>
      </Position>

      <HowWeWork
        sectionId="ecommerce-development-process"
        title="Our eCommerce Development Process"
        intro="We build custom eCommerce platforms with an engineering-first approach-focused on performance, scalability, security, and long-term business growth."
        steps={[
          {
            number: '01',
            title: 'Business & Commerce Strategy',
            description:
              'We define catalogue structure, customer journeys, payment flow, and operational requirements.',
            wide: true,
          },
          {
            number: '02',
            title: 'UX & Store Architecture',
            description:
              'Designing fast, mobile-first shopping experiences with conversion-focused user journeys.',
          },
          {
            number: '03',
            title: 'Development',
            description:
              'Building your Next.js storefront with secure backend architecture and payment integrations.',
          },
          {
            number: '04',
            title: 'SEO & Launch',
            description:
              'Technical SEO, performance optimisation, testing, deployment, and post-launch support.',
            wide: true,
          },
        ]}
      />

      <MainServiceFAQ heading="Ecommerce Development - FAQs" faqs={s_data.faqs} />

      <MainServiceCTA
        heading="Planning a Custom eCommerce Platform?"
        description="Let's discuss your catalogue, integrations, growth goals, and the right architecture for your business."
        ctaTitle="Book a Strategy Call"
      />
    </>
  );
}
