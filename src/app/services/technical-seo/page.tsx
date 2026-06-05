import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import UpgradeSection from '@/components/sections/common/UpgradeSection';
import ServiceFactors from '@/components/services/ServiceFactors';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import { Metadata } from 'next';
import { buildMetadata } from '@/app/lib/schema/seo';
import { serviceData } from '@/app/lib/schema/data/services_data';

export const metadata: Metadata = buildMetadata({
  title: 'Technical SEO & Performance Services India | Void Matrix Technology',
  description:
    'Technical SEO and website performance optimization services in Mumbai, Pune, and across India for startups and growing businesses.',
  path: '/services/technical-seo-performance-optimization',
});

const s_data = serviceData['/services/technical-seo-performance-optimization'];

export default function TechnicalSEO() {
  return (
    <>
      <Hero
        title="Technical SEO & Performance Optimization"
        subtitle="We improve website architecture, search crawlability, and Core Web Vitals to help businesses rank higher in search engines."
        ctaLable="Get Free SEO Audit"
        ctaRoute="/contact"
      />

      <HowWeWork
        sectionId="technical-seo-process"
        title="Our Technical SEO Optimization Process"
        intro="Our structured SEO engineering process focuses on fixing technical issues that prevent websites from ranking effectively."
        steps={[
          {
            number: '01',
            title: 'Technical SEO Audit',
            description:
              'We analyze crawl errors, indexing issues, site architecture, and search engine accessibility.',
            wide: true,
          },
          {
            number: '02',
            title: 'Website Architecture Optimization',
            description:
              'We improve internal linking structures, page hierarchy, and technical site structure.',
          },
          {
            number: '03',
            title: 'Performance & Core Web Vitals',
            description:
              'Our team optimizes website performance metrics including loading speed and page stability.',
          },
          {
            number: '04',
            title: 'Indexing & Structured Data',
            description:
              'We implement schema markup and fix indexing issues to improve search visibility.',
            wide: true,
          },
        ]}
      />

      <UpgradeSection
        id="technical-seo-use-cases"
        title="When Does Your Website Need Technical SEO?"
        intro="Many websites fail to rank because of technical issues rather than poor content."
        points={[
          'Search engines cannot properly crawl your website',
          'Pages are not indexed in Google',
          'Slow website performance affecting rankings',
          'Large websites with complex structures',
          'Duplicate pages or crawl errors',
          'Poor Core Web Vitals scores',
        ]}
        ctaTitle="Need a Technical SEO Audit?"
        ctaDesc="Our SEO engineers analyze your website and identify technical issues affecting search rankings."
        ctaLabel="Request Technical SEO Audit"
        ctaHref="/contact"
      />

      <ServiceFactors
        heading="Technical SEO Services in Mumbai & Pune"
        intro="We provide technical SEO optimization services for startups, SaaS companies, and growing businesses across Mumbai and Pune."
        facts={[
          'Technical SEO audits for Mumbai startups',
          'Search performance optimization for Pune companies',
          'Core Web Vitals improvements',
          'Website architecture optimization',
          'Structured data implementation',
        ]}
        closing="Our SEO engineering approach helps websites rank consistently in competitive search markets."
      />

      <ServiceFactors
        heading="Why Choose Void Matrix Technology?"
        intro="Our team combines technical engineering expertise with SEO strategy to build search-optimized websites."
        facts={[
          'Technical SEO engineering expertise',
          'Search engine friendly architecture',
          'Structured data and schema optimization',
          'Performance-driven SEO improvements',
          'Long-term organic growth strategies',
        ]}
        closing="We build technically optimized websites designed for sustainable search visibility."
      />

      <MainServiceFAQ heading="Technical SEO Services in India - FAQs" faqs={s_data.faqs} />

      <MainServiceCTA
        heading="Improve Your Website SEO Performance"
        description="We analyze and optimize technical issues preventing your website from ranking."
        ctaTitle="Get Free SEO Consultation"
      />
    </>
  );
}
