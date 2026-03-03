import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import WebsitePricing from '@/components/website/WebsitePricing';
import WebsiteServiceIntro from '@/components/website/WebsiteService';
import UpgradeSection from '@/components/sections/common/UpgradeSection';
import ServiceFactors from '@/components/services/ServiceFactors';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import { Metadata } from 'next';
import { buildMetada } from '@/app/lib/schema/seo';
export const metadata: Metadata = buildMetada({
  title: 'Professional Website Development Company India | Void Matrix Technology',
  description:
    'Professional website development company in India creating high-performance, SEO-optimized, and scalable websites for modern businesses.',
  path: '/services/website-development',
});
const faqs = [
  {
    q: 'How much does website development cost in India?',
    a: 'Website development cost in India typically ranges from ₹25,000 to ₹3,00,000 depending on design complexity, features, integrations, and scalability requirements. A basic business website costs less, while dynamic and ecommerce platforms require higher investment. At Void Matrix Technology, we provide transparent pricing based on your exact business goals and scope.',
  },
  {
    q: 'How long does it take to build a business website?',
    a: 'Most professional business websites take 3-6 weeks from planning to launch. Ecommerce websites or dynamic platforms with custom functionality may take longer depending on features, integrations, and approval cycles.',
  },
  {
    q: 'Do you provide SEO with website development?',
    a: 'Yes. Every website we build includes SEO-friendly architecture, mobile-first development, optimized page structure, and performance improvements to help your business rank better on search engines.',
  },
  {
    q: 'Can you redesign my existing website without losing SEO rankings?',
    a: 'Yes. We carefully restructure and modernize outdated websites while preserving existing SEO value, improving speed, usability, and overall performance.',
  },
  {
    q: 'Do you offer website maintenance and long-term support?',
    a: 'Yes. We provide ongoing website maintenance, performance monitoring, security updates, and scalability planning to ensure long-term stability and growth.',
  },
  {
    q: 'Do you provide website development services in Mumbai and Pune?',
    a: 'Yes. We actively work with startups, SMEs, and enterprises in Mumbai and Pune. Our remote-first collaboration model ensures smooth communication, structured project management, and timely delivery regardless of location.',
  },
  {
    q: 'Why choose a professional website development company in Mumbai instead of a freelancer?',
    a: 'A professional website development company provides structured planning, scalable architecture, ongoing support, and accountability. While freelancers may offer lower upfront costs, businesses often benefit from long-term reliability, SEO-focused development, and technical support provided by an experienced team.',
  },
];

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
      <MainServiceFAQ heading="Website Development Services in India - FAQs" faqs={faqs} />
      <MainServiceCTA
        heading="Not Sure What You Need?"
        description="We assess your growth stage and architect for scale."
        ctaTitle="Get a Free Website Cost Consultation"
      />
    </>
  );
}
