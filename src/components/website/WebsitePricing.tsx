import PricingCard from '../ui/PricingCard';
export default function WebsitePricing() {
  return (
    <>
      <section className="services-core">
        <section className="section-inner">
          <h2 className="section-title">Website Development Cost in India</h2>
          <p className="mt-4 mb-4">One of the first questions business owners ask is:</p>
          <p className="section-intro">“ How much will it cost to build my website? ”</p>
          <p>The honest answer?</p>
          <p>It depends on what you want your website to achieve.</p>
          <p>
            A basic online presence costs far less than a revenue-generating digital asset designed
            to convert visitors into customers.
          </p>
          <p className="mt-2 mb-2">
            Instead of asking <strong>“What is the cheapest option?”</strong> The better question
            is:
          </p>
          <p className="section-intro">
            What level of website does your business actually need right now?
          </p>
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
          <p className="section-intro mt-10">Think of it this way:</p>
          <ul className="fit-list">
            <li>A ₹25,000 website is a digital visiting card.</li>
            <li>A ₹1,50,000+ website is a structured lead-generation system.</li>
            <li>An ecommerce website is a scalable online sales engine.</li>
          </ul>
          <p>Your investment should match your growth goals.</p>
        </section>
      </section>
      <section className="services-core">
        <section className="section-inner">
          <h2 className="section-title">What Actually Affects Website Cost?</h2>
          <p className="mt-4 mb-4">
            Website pricing is not random. It is determined by scope and complexity.
          </p>
          <p className="section-intro !m-0">Key factors include:</p>
          <ul className="fit-list">
            <li>Number of pages and content structure</li>
            <li>Custom UI/UX design requirements</li>
            <li>CMS integration or fully custom backend</li>
            <li>Payment gateway integration</li>
            <li>SEO architecture setup</li>
            <li>Hosting configuration and deployment</li>
          </ul>
          <p className="mt-4">
            The more strategic the functionality, the higher the development effort.
          </p>
        </section>
      </section>
      <section className="services-core">
        <section className="section-inner">
          <h2 className="section-title">The Hidden Cost of Cheap Websites</h2>
          <p className="mt-4 mb-4">Many businesses try to save money initially.</p>
          <p className="section-intro">But poorly built websites often result in:</p>
          <ul className="fit-list">
            <li>Slow loading speed</li>
            <li>Weak SEO structure</li>
            <li>Poor mobile responsiveness</li>
            <li>Low conversions</li>
            <li>Redesign costs within 12-18 months</li>
          </ul>
          <p className="mb-4">That “cheap” website often becomes more expensive long-term.</p>
          <p className="section-intro">Investing correctly once saves both time and money.</p>
        </section>
      </section>
      <section className="services-core">
        <section className="section-inner">
          <h2 className="section-title">How We Keep Pricing Transparent</h2>
          <p className="section-intro">At VoidMatrix Technology:</p>
          <ul className="fit-list">
            <li>You receive a clear project scope document</li>
            <li>Deliverables are defined before development</li>
            <li>No hidden add-ons after agreement</li>
            <li>Scalable architecture so you don’t rebuild later</li>
          </ul>
          <p className="mt-4 mb-4">
            We align pricing with business outcomes - not just design effort.
          </p>
        </section>
      </section>
    </>
  );
}
