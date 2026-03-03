import type { Metadata } from 'next';
import WhatweDo from '@/components/sections/home/WhatweDo';
import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/common/HowWeWork';
import WhoWeWorkWith from '@/components/sections/home/WhoWeWorkWith';
import WhyVMT from '@/components/sections/home/WhyVMT';
import Position from '@/components/sections/home/Positioning';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import InvestmentRange from '@/components/sections/home/InvestmentRange';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import { buildGraph } from './lib/schema/graph';
import { generateFAQPage } from './lib/schema/faq-generator';
import { generateHomePrimaryService } from './lib/schema/home-service';
import { generateHomeWebPage } from './lib/schema/home-webpage';
import { buildMetada } from './lib/schema/seo';

export const metadata: Metadata = buildMetada({
  title: 'Void Matrix Technology | Scalable Software & Web Systems',
  description:
    'Software development company in India delivering scalable websites and custom platforms engineered for security, performance, and business growth.',
  path: '',
});

const cards = [
  {
    title: 'Business Website',
    range: '₹75,000 - ₹3,00,000',
    desc: 'For SMEs and service businesses needing a high-performance online presence.',
    url: '/contact',
  },
  {
    title: 'eCommerce & Advanced Web Applications',
    range: '₹2,00,000 - ₹8,00,000',
    desc: 'For growing brands and businesses launching scalable digital platforms.',
    url: '/contact',
  },
  {
    title: 'Custom Software & SaaS Systems',
    range: '₹3,00,000 - ₹25,00,000+',
    desc: 'For startups and enterprises building complex, architecture-driven systems.',
    url: '/services/custom-software-development',
  },
];

const faqs = [
  {
    q: 'How much does custom software development cost in India?',
    a: 'Projects typically range from ₹3,00,000 to ₹25,00,000+ depending on complexity and integrations.',
  },
  {
    q: 'How long does it take to build custom software?',
    a: 'MVPs may take 6-10 weeks, while enterprise systems can take 4-8 months.',
  },
  {
    q: 'Do you sign NDAs?',
    a: 'Yes. All project discussions are NDA-protected.',
  },
  {
    q: 'Do you work with startups and SMEs?',
    a: 'Yes. We build both small business websites and full-scale software ecosystems.',
  },
];

const schema = buildGraph([
  generateHomePrimaryService(),
  generateHomeWebPage(),
  generateFAQPage('', faqs),
]);

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        id="home-page-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero
        title="Custom Software Development Company in India"
        herosub="We design, architect, and build scalable software, SaaS platforms, eCommerce systems, and business websites for startups, SMEs, and enterprises."
        subtitle="Projects from ₹75,000 | NDA Protected | Architecture-First Approach | Long-Term Support"
        ctaLable="Get Free Project Estimate"
        ctaRoute="/software-development-cost-estimator"
        // note="Solution Coming Soon."
      />
      <Position title="Engineering Software That Grows With Your Business">
        <p className="section-intro">
          Most businesses outgrow basic websites and off-the-shelf tools. We build custom digital
          systems designed for scalability, automation, and long-term performance - not just
          short-term launches.
        </p>
        <p className="section-intro">
          Whether you need a small business website or a full software ecosystem, we architect
          solutions around your growth roadmap.
        </p>
      </Position>
      <WhatweDo />
      <CtaButtonRe title="Explore All Services" url="/services" />
      <InvestmentRange cards={cards} />
      <HowWeWork
        title="Our Architecture-First Development Process"
        intro="Our software development process is designed to keep projects clear, predictable, and focused on building scalable solutions that solve real business problems - not just ship features."
        steps={[
          {
            number: '01',
            title: 'Requirement Discovery & Business Analysis',
            description:
              'We understand workflows, integrations, and long-term goals before defining scope.',
            wide: true,
          },
          {
            number: '02',
            title: 'System Architecture & UI/UX Design',
            description: 'We design scalable backend structures and intuitive user experiences.',
          },
          {
            number: '03',
            title: 'Agile Development & Testing',
            description:
              'Secure, modular development cycles with continuous testing and optimization.',
          },
          {
            number: '04',
            title: 'Deployment & Long-Term Support',
            description: 'Cloud deployment, monitoring, and scalable future enhancements.',
            wide: true,
          },
        ]}
      />
      <CtaButtonRe title="Start Your Project" url="/contact" />
      <WhoWeWorkWith />
      <WhyVMT />
      <MainServiceFAQ heading="Custom Software Development Company in India - FAQs" faqs={faqs} />
      <MainServiceCTA
        heading="Ready to Build Your Software Ecosystem?"
        description="From small business websites to enterprise software systems - we design solutions that scale."
      />
    </>
  );
}
