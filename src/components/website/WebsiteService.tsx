import ServiceFactors from '../services/ServiceFactors';
export default function WebsiteServiceIntro() {
  return (
    <>
      <ServiceFactors
        heading="Professional Website Development Services for Growing Businesses"
        intro="As a leading website development company in India, we build websites tailored to your business goals."
        facts={[
          'Business & Corporate Websites',
          'Startup & MVP Websites',
          'E-commerce Websites',
          'Portfolio & Personal Branding Websites',
          'Landing Pages for Marketing Campaigns',
          'CMS-Based Websites (Custom or Headless)',
        ]}
      />
      <section className="services-core">
        <p className="section-intro">Every website we build is:</p>
        <ul className="fit-list">
          <li>Mobile-first</li>
          <li>SEO-ready</li>
          <li>Fast-loading</li>
          <li>Secure</li>
          <li>Scalable</li>
        </ul>
        <p className="mt-4">
          Your website should work 24/7 to generate inquiries - not just exist online.
        </p>
      </section>
      <section className="services-core">
        <h2 className="section-title">Business Website Development That Converts</h2>
        <p className="section-intro">
          A modern business website must do more than display information. It must:
        </p>
        <ul className="fit-list">
          <li>Build trust instantly</li>
          <li>Clearly communicate services</li>
          <li>Guide users toward action</li>
          <li>Capture leads effectively</li>
        </ul>
        <p className="section-intro">Our business website development approach focuses on:</p>
        <ul className="fit-list">
          <li>Clear user journey mapping</li>
          <li>Conversion-focused layout structure</li>
          <li>Clean UI/UX design</li>
          <li>Integrated lead forms</li>
          <li>Performance optimization</li>
        </ul>
        <p className="mt-4 mb-4">This ensures your website supports revenue - not just branding.</p>
        <h2 className="section-title">Ecommerce Website Development Company in India</h2>
        <p className="section-intro">
          If you plan to sell online, your website must be optimized for:
        </p>
        <ul className="fit-list">
          <li>Product display & categorization</li>
          <li>Secure payment gateway integration</li>
          <li>Inventory management</li>
          <li>Mobile shopping experience</li>
          <li>Checkout optimization</li>
        </ul>
        <p className="mt-4 mb-4">
          As an experienced <strong>ecommerce website development company</strong>, we build
          scalable online stores designed for performance and customer retention.
        </p>
        <p className="section-intro">We integrate:</p>
        <ul className="fit-list">
          <li>Razorpay / Stripe</li>
          <li>Custom cart systems</li>
          <li>Secure admin dashboards</li>
          <li>Analytics & tracking</li>
        </ul>
        <p className="mt-4 mb-4">Your ecommerce platform should scale with your growth.</p>
      </section>
    </>
  );
}
