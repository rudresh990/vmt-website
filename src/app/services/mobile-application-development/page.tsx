import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import Position from '@/components/sections/home/Positioning';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/lib/schema/seo';
import { serviceData } from '@/app/lib/schema/data/services_data';

export const metadata: Metadata = buildMetadata({
  title: 'Mobile App Development Company India',
  description:
    'VMT builds iOS and Android mobile apps for startups and businesses across Mumbai and India using React Native, Swift, and Kotlin. Projects from ₹2.5L.',
  path: '/services/mobile-application-development',
});

const s_data = serviceData['/services/mobile-application-development'];

export default function MobileApplicationDev() {
  return (
    <>
      <Hero
        eyebrow="Mobile Application Development - Mumbai, India"
        title={
          <>
            {' '}
            <span className="text-(--primary)">Mobile Application Development</span>
            <br />
            In Mumbai, India
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">India has over 800 million smartphone users.</span>
                <br />
                Your mobile application is not a secondary product - it is often the primary
                experience your customers have with your business. VMT builds iOS and Android mobile
                applications for startups and businesses across Mumbai and India - native
                performance, modern design, and Indian payment and communication integrations built
                in.
              </p>
            </div>
          </>
        }
        ctaLable="Get Free Mobile App Consultation"
        ctaRoute="/contact"
      />

      {/*  */}

      {/* ============================================================
SECTION 1
============================================================ */}

      <Position
        heading="Why This Matters"
        clsName="hero-eyebrow-glowing-b mt-6"
        title={
          <>
            Mobile Is Not a<span className="text-(--primary)"> Feature</span> in India - It Is the
            <span className="text-(--primary)"> Market</span>
          </>
        }
      >
        <p className="section-intro">
          Rob Fitzpatrick explains in <strong>The Mom Test</strong> that businesses should learn
          from how customers actually behave-not from what they claim they want. That principle
          perfectly describes mobile adoption in India.
        </p>

        <p className="text-lg text-justify my-2.5">
          Across retail, healthcare, education, logistics, finance, and almost every other industry,
          Indian consumers interact with businesses primarily through their smartphones. Whether
          they&apos;re using Android or iPhone on Jio or Airtel, mobile is the first-and often
          only-digital touchpoint.
        </p>

        <p className="text-lg text-justify my-2.5">
          A mobile application isn&apos;t about appearing modern. It&apos;s about delivering
          experiences that mobile websites cannot: push notifications, offline functionality, camera
          integration, GPS tracking, biometric authentication, and fast native performance that
          keeps users engaged.
        </p>

        <p className="text-lg text-justify my-2.5">
          VMT builds mobile applications for startups, SMEs, and enterprises across Mumbai, Pune,
          Delhi, Bangalore, Hyderabad, and throughout India-from consumer-facing products serving
          thousands of users to internal enterprise tools that streamline day-to-day operations.
        </p>
      </Position>

      {/* ============================================================
SECTION 2
============================================================ */}

      <Position
        heading="What We Build"
        clsName="hero-eyebrow-glowing-b"
        title={
          <>
            Mobile Applications
            <br />
            <span className="text-(--primary)">Built for Indian Businesses</span>
          </>
        }
        tagline="Every application is designed around your business model, user behaviour, and long-term growth strategy."
      >
        <div className="who-cards">
          <div className="vmt-glass-card">
            <h3 className="font-semibold">Consumer Apps</h3>

            <p>
              Retail, food delivery, healthcare, education, marketplace, and service applications
              with UPI, Razorpay, push notifications, and multilingual support.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">B2B Field Apps</h3>

            <p>
              Mobile applications for sales teams, delivery staff, service engineers, and field
              operations replacing paper and WhatsApp workflows.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">On-Demand Platforms</h3>

            <p>
              Booking, scheduling, dispatch, and service delivery applications for businesses
              operating across Indian cities.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">FinTech Apps</h3>

            <p>
              UPI-enabled payment applications, lending platforms, digital wallets, investment
              products, and RBI-compliant financial solutions.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Enterprise Mobility</h3>

            <p>
              Internal dashboards, reporting tools, approval systems, and document management
              applications for enterprise teams.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Custom Mobile Products</h3>

            <p>
              Purpose-built applications engineered around your business processes instead of
              adapting generic off-the-shelf software.
            </p>
          </div>
        </div>
      </Position>

      {/* ============================================================
SECTION 3
============================================================ */}

      <Position
        heading="Technology Choices"
        clsName="hero-eyebrow-glowing-b"
        title={
          <>
            Cross-Platform or
            <span className="text-(--primary)"> Native</span> -
            <br />
            Which Is Right for Your Business?
          </>
        }
        tagline="The right choice depends on your product-not the latest technology trend."
      >
        <div className="engineering-grid">
          <div className="engineering-card vmt-glass-card">
            <div className="engineering-number">01</div>

            <h3 className="engineering-title">React Native</h3>

            <p className="engineering-desc">
              A single codebase for Android and iOS delivering 80-90% of native performance while
              significantly reducing development time and cost.
            </p>

            <ul className="engineering-list">
              <li>One codebase</li>
              <li>Android + iOS</li>
              <li>Lower development cost</li>
              <li>Faster releases</li>
              <li>Ideal for startups & SMEs</li>
            </ul>
          </div>

          <div className="engineering-card vmt-glass-card">
            <div className="engineering-number">02</div>

            <h3 className="engineering-title">Native (Swift & Kotlin)</h3>

            <p className="engineering-desc">
              Separate applications for iOS and Android providing maximum performance, platform
              capabilities, and hardware integration.
            </p>

            <ul className="engineering-list">
              <li>Maximum performance</li>
              <li>Biometric authentication</li>
              <li>Advanced camera access</li>
              <li>Background processing</li>
              <li>Ideal for FinTech & Healthcare</li>
            </ul>
          </div>
        </div>

        <p className="section-intro" style={{ marginTop: '3rem' }}>
          VMT develops both React Native and fully native mobile applications. We recommend the
          approach that best fits your business goals, technical requirements, budget, and
          timeline-not whichever technology happens to be fashionable.
        </p>
      </Position>
      {/*  */}

      <HowWeWork
        sectionId="mobile-app-development-process"
        title="Our Mobile App Development Process"
        intro="We follow a structured development process to create scalable and high-performance mobile applications."
        steps={[
          {
            number: '01',
            title: 'Product Planning & Strategy',
            description:
              'We analyze your product idea, market needs, and required features before defining the mobile architecture.',
            wide: true,
          },
          {
            number: '02',
            title: 'Mobile UI/UX Design',
            description:
              'Our design team builds intuitive and mobile-first interfaces optimized for user engagement.',
          },
          {
            number: '03',
            title: 'Mobile App Development',
            description:
              'We build high-performance mobile applications optimized for reliability and scalability.',
          },
          {
            number: '04',
            title: 'Testing & App Deployment',
            description:
              'After testing and performance optimization, we deploy the application for long-term growth.',
            wide: true,
          },
        ]}
      />

      <MainServiceFAQ
        heading="Mobile Application Development Services in India - FAQs"
        faqs={s_data.faqs}
      />

      <MainServiceCTA
        heading="Build a Mobile App That Customers Keep Coming Back To"
        description="Whether you're launching a startup, digitising business operations, or creating the next consumer platform, VMT builds mobile applications engineered for performance, scalability, and long-term growthfanot just app store approval."
        ctaTitle="Schedule a Free Discovery Call"
      />
    </>
  );
}
