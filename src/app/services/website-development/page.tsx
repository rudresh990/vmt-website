import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import WebsitePricing from '@/components/website/WebsitePricing';
import WebsiteServiceIntro from '@/components/website/WebsiteService';
import UpgradeSection from '@/components/sections/common/UpgradeSection';
import ServiceFactors from '@/components/services/ServiceFactors';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/lib/schema/seo';
import { serviceData } from '@/app/lib/schema/data/services_data';

export const metadata: Metadata = buildMetadata({
  title: 'Professional Website Development Company India | Void Matrix Technology',
  description:
    'Professional website development company in India creating high-performance, SEO-optimized, and scalable websites for modern businesses.',
  path: '/services/website-development',
});
const s_data = serviceData['/services/website-development'];

export default function WebSiteDev() {
  return (
    <>
      <Hero
        title="Website Development Company In India"
        subtitle="We design and develop fast, secure, and conversion-focused business websites for startups, SMEs, and growing brands."
        ctaLable="Get Free Website Quote"
        ctaRoute="/contact"
      />
      <WebsiteServiceIntro />
      {/* <div className="services-core"> */}
      <WebsitePricing />
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
      <UpgradeSection
        id="more-than-website"
        title="When Do You Need More Than a Website?"
        intro="A business website builds visibility and credibility. However, if your operations require user accounts, automation, dashboards, or advanced functionality, a custom web application may be the better long-term solution."
        points={[
          'User login systems for customers or members',
          'Admin dashboards to manage content or operations',
          'Online booking or appointment management',
          'Inventory and order tracking systems',
          'Internal workflow automation',
          'CRM or ERP integrations',
        ]}
        ctaTitle="Need Advanced Functionality?"
        ctaDesc="Explore our Web Application Development services designed for businesses that require scalable systems and operational efficiency."
        ctaLabel="Explore Web Application Development"
        ctaHref="/services/web-application-development"
      />
      {/* service factor used as mumbai & pune leads */}
      <ServiceFactors
        heading="Website Development Company in Mumbai & Pune"
        intro="As a professional website development company in India, we actively serve startups, SMEs, and enterprises in Mumbai and Pune. Our structured execution process and remote-first collaboration model ensure seamless communication, timely delivery, and scalable digital solutions regardless of your location."
        facts={[
          'Website development services for Mumbai startups and enterprises',
          'Professional website solutions for Pune tech companies and SMEs',
          'SEO-ready business websites for growing brands across India',
          'Dedicated project management with clear timelines and milestones',
          'Remote-first collaboration with transparent communication',
        ]}
        closing="With a remote-first execution model and structured project management, we ensure smooth collaboration regardless of location."
      />
      <ServiceFactors
        heading="Why Choose Void Matrix Technology?"
        intro="Choosing the right website development partner directly impacts performance, scalability, and long-term digital growth. At Void Matrix Technology, we combine clean design with structured engineering to deliver websites built for real business outcomes."
        facts={[
          'Clean, modern, and conversion-focused UI design',
          'SEO-optimized website architecture from day one',
          'Mobile-first and performance-driven development',
          'Structured project timelines with fast turnaround',
          'Transparent pricing with clearly defined scope',
          'Ongoing technical support and future scalability planning',
        ]}
        closing="Every website we deliver is engineered to scale with your business, not limit it."
      />
      <MainServiceFAQ heading="Website Development Services in India - FAQs" faqs={s_data.faqs} />
      <MainServiceCTA
        heading="Not Sure What You Need?"
        description="We assess your growth stage and architect for scale."
        ctaTitle="Get a Free Website Cost Consultation"
      />
    </>
  );
}
