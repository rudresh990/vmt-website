import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import Position from '@/components/sections/home/Positioning';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/lib/schema/seo';
import { serviceData } from '@/app/lib/schema/data/services_data';

export const metadata: Metadata = buildMetadata({
  title: 'Marketplace Development Company in Mumbai, India',
  description:
    'VMT builds custom multi-vendor marketplace platforms in Mumbai, India with seller portals, payment splits, commission management & free consultation.',
  path: '/services/marketplace-development',
});

const s_data = serviceData['/services/marketplace-development'];

export default function MarketplaceDevelopment() {
  return (
    <>
      <Hero
        eyebrow="Marketplace Development - Mumbai, India"
        title={
          <>
            <span className="text-(--primary)">Marketplace</span> Development Company in{' '}
            <span className="text-(--primary)">Mumbai</span>,
            <span className="text-(--primary)"> India</span>
          </>
        }
        herosub={
          <div className="my-2.5">
            <p>
              <span className="text-white">
                A marketplace is the most complex eCommerce architecture to build.
              </span>
              <br />
              It is also one of the strongest business models when built correctly. VMT develops
              custom multi-vendor marketplace platforms for Indian businesses-buyer portals, seller
              dashboards, automated payment splits, commission management, and the scalable backend
              infrastructure required to support long-term platform growth.
            </p>
          </div>
        }
        subtitle={
          <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
            <span>
              <span className="text-(--primary)">Multi-Vendor</span> Architecture
            </span>

            <span className="text-glow">|</span>

            <span>
              Seller <span className="text-(--primary)">Dashboards</span>
            </span>

            <span className="text-glow">|</span>

            <span>
              <span className="text-(--primary)">Commission</span> Management
            </span>

            <span className="text-glow">|</span>

            <span>
              Built for <span className="text-(--primary)">Scale</span>
            </span>
          </div>
        }
        ctaLable="Book Free Marketplace Consultation"
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
            Why Most Indian <span className="text-(--primary)">Marketplace Builds</span> Fail
          </>
        }
      >
        <p className="section-intro">
          Building a marketplace is not simply a software project-it is the challenge of creating a
          business where buyers and sellers consistently choose to transact.
        </p>

        <p className="text-lg text-justify my-2.5">
          Simon Sinek asks why your marketplace exists. Eric Ries asks whether both sides of your
          market have actually been validated. Rob Fitzpatrick asks whether you&apos;ve spoken to
          enough sellers to understand why they would list on your platform instead of an
          established competitor.
        </p>

        <p className="text-lg text-justify my-2.5">
          Most Indian marketplace projects fail because founders invest heavily in technology before
          validating the marketplace itself. The software launches, but neither buyers nor sellers
          adopt it fast enough to create a sustainable transaction loop.
        </p>

        <p className="text-lg text-justify my-2.5">
          VMT develops marketplaces iteratively-starting with an MVP focused on validating buyer and
          seller behaviour. Once the core transaction loop proves itself, the platform expands into
          advanced workflows, automation, analytics, and operational tooling.
        </p>

        <p className="text-lg text-justify my-2.5">
          It is not the cheapest way to build a marketplace. It is the approach most likely to
          produce a platform that survives beyond launch and becomes a sustainable business.
        </p>
      </Position>

      {/* ============================================================
      SECTION 2
      ============================================================ */}

      <Position
        heading="Marketplace Types"
        clsName="hero-eyebrow-glowing-b mt-3"
        title={
          <>
            Marketplace Types <span className="text-(--primary)">VMT Builds</span> for Indian
            Businesses
          </>
        }
        tagline="Purpose-built marketplace platforms designed around your industry and transaction model."
      >
        <div className="who-cards">
          <div className="vmt-glass-card">
            <h3 className="font-semibold">B2C Product Marketplaces</h3>
            <p>
              Multi-vendor retail platforms where independent sellers manage products while buyers
              shop across a unified catalogue with automated commission and payment distribution.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">B2B Procurement Platforms</h3>
            <p>
              Supplier and buyer marketplaces for manufacturing, construction, agriculture,
              logistics, wholesale, and other Indian industries requiring verified vendors.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Service Marketplaces</h3>
            <p>
              Platforms connecting professionals, freelancers, healthcare providers, consultants,
              and skilled tradespeople with clients through booking, reviews, and escrow payments.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Rental Marketplaces</h3>
            <p>
              Platforms for renting equipment, vehicles, products, properties, or shared assets,
              including availability calendars, deposits, and damage claim workflows.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Seller Management</h3>
            <p>
              Vendor onboarding, KYC verification, commission structures, analytics dashboards,
              payout management, and performance reporting.
            </p>
          </div>

          <div className="vmt-glass-card">
            <h3 className="font-semibold">Marketplace Infrastructure</h3>
            <p>
              Payment splits, order routing, dispute resolution, messaging, notifications,
              moderation tools, and scalable backend architecture.
            </p>
          </div>
        </div>
      </Position>

      <HowWeWork
        sectionId="marketplace-development-process"
        title="Our Marketplace Development Process"
        intro="Marketplace success depends on validating the business model before scaling the platform. Our engineering process is designed around that principle."
        steps={[
          {
            number: '01',
            title: 'Marketplace Discovery',
            description:
              'Validate buyer and seller behaviour, revenue model, commissions, and marketplace operations.',
            wide: true,
          },
          {
            number: '02',
            title: 'MVP Development',
            description:
              'Launch the smallest version capable of proving real transactions between both sides of the marketplace.',
          },
          {
            number: '03',
            title: 'Platform Engineering',
            description:
              'Expand into automation, vendor tools, payment infrastructure, analytics, and operational workflows.',
          },
          {
            number: '04',
            title: 'Scale & Optimise',
            description:
              'Improve performance, security, infrastructure, and feature development as marketplace volume increases.',
            wide: true,
          },
        ]}
      />

      <MainServiceFAQ heading="Marketplace Development - FAQs" faqs={s_data.faqs} />

      <MainServiceCTA
        heading="Building a Marketplace Platform?"
        description="Let's validate your marketplace model, discuss your vendor workflow, and design the right architecture before development begins."
        ctaTitle="Book a Marketplace Strategy Call"
      />
    </>
  );
}
