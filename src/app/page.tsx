import type { Metadata } from 'next';
import WhatweDo from '@/components/sections/home/WhatweDo';
import Hero from '@/components/sections/common/Hero';
import HowWeWork from '@/components/sections/home/HowWeWork';
import WhoWeWorkWith from '@/components/sections/home/WhoWeWorkWith';
import WhyVMT from '@/components/sections/home/WhyVMT';
import Position from '@/components/sections/home/Positioning';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import InvestmentRange from '@/components/sections/home/InvestmentRange';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import { buildGraph } from './lib/schema/graph';
import { generateOrganization } from './lib/schema/organization';
import { generateWebSite } from './lib/schema/website';
import { generateProfessionalService } from './lib/schema/professional-service';
import { generateHomePrimaryService } from './lib/schema/home-service';
import { generateHomeWebPage } from './lib/schema/home-webpage';

export const metadata: Metadata = {
  title: 'Void Matrix Technology | Scalable Technology Platforms',
  description:
    'Void Matrix Technology designs and engineers reliable software platforms, digital system, and technology solution built for scale, security, and long-term growth.',
};

const schema = buildGraph([
  generateProfessionalService(),
  generateHomePrimaryService(),
  generateHomeWebPage(),
]);

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
      <HowWeWork />
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
