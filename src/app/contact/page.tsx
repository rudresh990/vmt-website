import type { Metadata } from 'next';
import Hero from '@/components/sections/common/Hero';
import ContactForm from '@/components/contact/ContactForm';
import { buildMetadata } from '../lib/schema/seo';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Website Development Company India | Void Matrix Technology',
  description:
    'Contact Void Matrix Technology for website and custom software development services in Mumbai, Pune, and across India.',
  path: '/contact',
});

type EstimateParams = {
  source?: string;
  projectType?: string;
  complexity?: string;
  scale?: string;
  timeline?: string;
};

function EstimateSummary({ projectType, complexity, scale, timeline }: EstimateParams) {
  return (
    <div className="estimate-summary">
      <h2 className="estimate-title">Your Project Overview</h2>

      <ul className="estimate-list">
        <li>
          <span className="estimate-label">Project Type:</span>
          <span className="estimate-value">{projectType}</span>
        </li>
        <li>
          <span className="estimate-label">Complexity:</span>
          <span className="estimate-value">{complexity}</span>
        </li>
        <li>
          <span className="estimate-label">Scale:</span>
          <span className="estimate-value">{scale}</span>
        </li>
        <li>
          <span className="estimate-label">Timeline:</span>
          <span className="estimate-value">{timeline}</span>
        </li>
      </ul>

      <p className="estimate-summary-note">
        This summary is based on your inputs and helps us prepare for a more meaningful
        conversation.
      </p>
    </div>
  );
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<EstimateParams>;
}) {
  const { source, projectType, complexity, scale, timeline } = await searchParams;

  const hasEstimateData = source === 'estimate' && projectType && complexity && scale && timeline;

  const estimateContext = hasEstimateData
    ? {
        source: source!,
        projectType: projectType!,
        complexity: complexity!,
        scale: scale!,
        timeline: timeline!,
      }
    : null;
  return (
    <section className="contact-container">
      <header className="contact-header">
        <Hero
          title="Void Matrix Technology"
          subtitle="Tell us about your project and we'll help you move forward."
        ></Hero>
      </header>
      {hasEstimateData && (
        <div className="contact-summary">
          <EstimateSummary
            projectType={projectType}
            complexity={complexity}
            scale={scale}
            timeline={timeline}
          />
        </div>
      )}
      {/* load contact form from component */}
      <div className="contact-form-wrapper">
        <ContactForm estimateContext={estimateContext} />
      </div>
      <p className="contact-trust">
        No spam. No sales pressure. Just a focused technical discussion.
      </p>
    </section>
  );
}
