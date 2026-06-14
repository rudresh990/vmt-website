import { Metadata } from 'next';
import Hero from '@/components/sections/common/Hero';
import Position from '@/components/sections/home/Positioning';
import { serviceData } from '@/app/lib/schema/data/services_data';
import { buildMetadata } from '@/app/lib/schema/seo';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import MainServiceCTA from '@/components/services/MainServiceCTA';
export const metadata: Metadata = buildMetadata({
  title: 'Web Application Development Company in Mumbai, India',
  description:
    'VMT builds custom web applications - dashboards, portals, SaaS interfaces, and data platforms - for businesses in Mumbai and across India.',
  path: '/services/web-app-development',
});

const s_data = serviceData['/services/web-app-development'];
export default function page() {
  return (
    <>
      <Hero
        eyebrow="Web Application Development Company in Mumbai, India"
        title={
          <>
            Custom <span className="text-(--primary)">Web Applications</span> For Businesses Across{' '}
            <span className="text-(--primary)">Mumbai</span> and{' '}
            <span className="text-(--primary)">India</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">Your business has outgrown a static website.</span>
                <br />
                You need an application - something that processes data, manages users, automates
                workflows, and scales with your operations. VMT builds custom web applications for
                businesses across Mumbai and India using React, Next.js, and Node.js - engineered
                for performance, security, and long-term maintainability.
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
      />
      {/* ---------------------------------------------------------------- */}
      {/* SECTION 1 */}
      {/* ---------------------------------------------------------------- */}
      <Position
        heading="Why This Matters"
        clsName="hero-eyebrow-glowing-b mt-4"
        title={
          <>
            When Your <span className="text-(--primary)">Business</span> Needs More Than a{' '}
            <span className="text-(--primary)">Website</span>
          </>
        }
      >
        <p className="section-intro my-2.5 text-justify">
          The distinction Eric Ries draws in <strong>The Lean Startup</strong> between a minimum
          viable product and a finished product is directly relevant to web application development.
        </p>

        <p className="text-lg my-2.5 text-justify">
          Most Indian businesses that come to VMT for a web application have already experienced one
          failed build-either a rushed product that could not scale or a bloated specification that
          never launched because the scope kept growing.
        </p>

        <p className="text-lg my-2.5 text-justify">
          The right approach is validated, iterative, and architecture-driven. Start with the core
          user flows that deliver the greatest value. Build them on a foundation designed to evolve.
          Launch, measure, learn, and iterate without rebuilding the entire system.
        </p>

        <p className="text-lg my-2.5 text-justify">
          VMT has developed web applications for businesses across Mumbai, Pune, Bangalore, and
          Delhi-from internal operational dashboards replacing manual Excel workflows to
          customer-facing SaaS platforms serving thousands of users. The common thread is not the
          technology itself; it is the engineering discipline to build exactly what the business
          needs-and nothing it does not.
        </p>
      </Position>
      {/* ---------------------------------------------------------------- */}
      {/* SECTION 2 */}
      {/* ---------------------------------------------------------------- */}
      <Position
        heading="Solutions We Build"
        clsName="hero-eyebrow-glowing-b mt-4"
        title={
          <>
            Types of Web Applications
            <br />
            <span className="text-(--primary)">VMT Builds for Indian Businesses</span>
          </>
        }
        tagline="Every application is designed around a business process, not a technology trend."
      >
        <div className="flex flex-col gap-2">
          <div className="vmt-glass-card">
            <h3 className="font-semibold">Internal Dashboards</h3>
            <p className="text-justify">
              Replace Excel sheets and WhatsApp workflows with secure, permission-based operational
              dashboards.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Customer Portals</h3>
            <p className="text-justify">
              Self-service platforms where customers manage orders, documents, support requests,
              deliveries, and account information.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">SaaS Platforms</h3>
            <p className="text-justify">
              Multi-tenant software with subscriptions, onboarding, feature gating, billing, and
              administrative controls.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Reporting Platforms</h3>
            <p className="text-justify">
              Aggregate data from multiple systems into real-time dashboards that support faster
              business decisions.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Workflow Automation</h3>
            <p className="text-justify">
              Digitise approvals, document routing, notifications, and repetitive operational
              processes.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">B2B Client Systems</h3>
            <p className="text-justify">
              Purpose-built client management platforms designed around your business instead of
              forcing generic CRM software to fit.
            </p>
          </div>
        </div>
      </Position>
      {/* ---------------------------------------------------------------- */}
      {/* SECTION 3 */}
      {/* ---------------------------------------------------------------- */}
      <Position
        heading="Technology Stack"
        clsName="hero-eyebrow-glowing-b"
        title={
          <>
            What We
            <span className="text-(--primary)"> Build With</span>
          </>
        }
        tagline="Technology choices are driven by business requirements-not industry hype."
      >
        <div className="engineering-grid">
          <div className="engineering-card vmt-glass-card">
            <div className="engineering-title">Frontend</div>
            <p className="engineering-desc">React, Next.js, TypeScript, Tailwind CSS</p>
          </div>

          <div className="engineering-card vmt-glass-card">
            <div className="engineering-title">Backend</div>
            <p className="engineering-desc">Node.js, Express, NestJS, Next.js API Routes</p>
          </div>

          <div className="engineering-card vmt-glass-card">
            <div className="engineering-title">Database</div>
            <p className="engineering-desc">PostgreSQL, MongoDB, MySQL</p>
          </div>

          <div className="engineering-card vmt-glass-card">
            <div className="engineering-title">Authentication</div>
            <p className="engineering-desc">NextAuth, Clerk, Custom JWT Authentication</p>
          </div>

          <div className="engineering-card vmt-glass-card">
            <div className="engineering-title">Cloud & Deployment</div>
            <p className="engineering-desc">Vercel, AWS, Google Cloud with CI/CD pipelines</p>
          </div>

          <div className="engineering-card vmt-glass-card">
            <div className="engineering-title">Payments</div>
            <p className="engineering-desc">Razorpay, Stripe, PayU, UPI integrations</p>
          </div>
        </div>

        <p className="section-intro" style={{ marginTop: '3rem' }}>
          Every technology decision is based on your product&apos;s functional requirements-not what
          happens to be fashionable. We document architectural decisions, implementation choices,
          and technical rationale so your team fully understands the system, whether VMT continues
          maintaining it or not.
        </p>
      </Position>
      <MainServiceFAQ faqs={s_data.faqs} heading="Web Application Development - FAQs" />
      <MainServiceCTA
        heading="Build the Right Product Before You Build More Features"
        description="Whether you're validating a startup idea, replacing manual business processes, or building a SaaS platform, the quality of your architecture determines how easily your product can grow. We help businesses design and build web applications that are fast, scalable, and engineered for long-term success-not just launch day."
        ctaTitle="Schedule a Free Discovery Call"
      />
    </>
  );
}
