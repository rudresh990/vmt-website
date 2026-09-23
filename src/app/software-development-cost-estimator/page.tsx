import Calculator from '@/components/calculator/Calculator';

import type { Metadata } from 'next';
import { buildMetadata } from '../lib/schema/seo';

export const metadata: Metadata = buildMetadata({
  title:
    'Software Development Cost Estimator for Web, SaaS & MVP Projects | VoidMatrix Tech',
  description:
    'Estimate software development costs for web applications, mobile apps, SaaS platforms and MVPs using VoidMatrix Technology’s interactive cost estimator.',
  path: '/software-development-cost-estimator',
});

const faqs = [
  {
    q: 'How accurate is this cost estimate?',
    a: 'This estimator gives you a realistic ballpark based on project type, complexity, scale, and timeline — the same factors we use in early client scoping calls. It is designed to help you budget and plan, but every project has unique requirements, so we follow up with a detailed proposal after understanding your exact needs.',
  },
  {
    q: 'What factors affect software development cost the most?',
    a: 'Feature complexity and integrations have the biggest impact, followed by scale and timeline. A simple MVP with core features costs significantly less than a feature-rich platform with multiple integrations and enterprise-grade infrastructure.',
  },
  {
    q: 'How much does it cost to build an MVP in India?',
    a: 'A simple MVP web or mobile app typically starts around ₹80,000–₹3,00,000 depending on platform and feature count. MVPs are scoped to test a core idea quickly, so keeping the feature set focused for the first version can help control development cost.',
  },
  {
    q: 'Do urgent timelines cost more?',
    a: 'Yes. Compressed timelines can require additional developers working in parallel or increased delivery effort, which can increase cost. Flexible timelines allow development to be planned more efficiently and can place a project toward the lower end of its estimated range.',
  },
  {
    q: 'What happens after I get my estimate?',
    a: 'Clicking "Discuss this estimate" starts a no-commitment conversation where we review your actual requirements in detail and turn the estimated range into a fixed-scope proposal with a clear timeline and deliverables.',
  },
  {
    q: 'Do you offer fixed-price or hourly billing?',
    a: 'Most projects are quoted as fixed-price engagements based on a defined scope, which provides greater cost certainty. For ongoing or evolving projects, a retainer or milestone-based model can also be structured during the scoping process.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function EstimatePage() {
  return (
    <>
      {/* Existing interactive estimator */}
      <Calculator />

      {/* Methodology */}
      <section className="services-core">
        <div className="section-inner">
          <p className="h-subtitle">METHODOLOGY</p>

          <h2 className="section-title">
            How we calculate your estimate
          </h2>

          <p className="section-intro">
            This tool builds your estimate from four inputs:{' '}
            <strong>project type, complexity, scale, and timeline.</strong>{' '}
            Each factor adjusts a base development cost using patterns
            we&apos;ve observed across real client engagements — not a
            generic template.
          </p>

          <div className="card-grid">
            <div className="vmt-glass-card no-hover">
              <h3>Project type</h3>

              <p>
                Project type sets the baseline. A web application, mobile
                app, and SaaS platform have different architecture, testing,
                and deployment requirements, so each starts from a different
                cost floor.
              </p>
            </div>

            <div className="vmt-glass-card no-hover">
              <h3>Complexity</h3>

              <p>
                Complexity accounts for the number of features, third-party
                integrations, and business logic. A simple application costs
                far less than one with custom workflows, role-based access,
                integrations, or real-time data.
              </p>
            </div>

            <div className="vmt-glass-card no-hover">
              <h3>Scale</h3>

              <p>
                Scale reflects how the product needs to perform today and in
                the near future. An MVP built to validate an idea is priced
                differently from a Growth-stage product built for thousands
                of users, or an Enterprise system built for scale,
                compliance, and uptime from day one.
              </p>
            </div>

            <div className="vmt-glass-card no-hover">
              <h3>Timeline</h3>

              <p>
                Timeline affects cost because urgent delivery can require
                parallel development tracks or a larger team, while flexible
                timelines allow us to optimize for cost efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Indicative cost ranges */}
      <section className="services-core">
        <div className="section-inner">
          <p className="h-subtitle">INDICATIVE COST RANGES</p>

          <h2 className="section-title">
            Software development cost in India
          </h2>

          <p className="section-intro">
            These ranges provide a planning reference for common software
            development projects. Your actual cost depends on the final
            requirements, feature set, integrations, technical architecture,
            scale, and delivery timeline.
          </p>

          <div className="vmt-glass-card no-hover">
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  minWidth: '720px',
                  borderCollapse: 'collapse',
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      Project Type
                    </th>

                    <th
                      style={{
                        textAlign: 'left',
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      Simple
                    </th>

                    <th
                      style={{
                        textAlign: 'left',
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      Moderate
                    </th>

                    <th
                      style={{
                        textAlign: 'left',
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      Complex
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      Web Application
                    </td>

                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      ₹80,000 – ₹1,80,000
                    </td>

                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      ₹1,80,000 – ₹4,50,000
                    </td>

                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      ₹4,50,000 – ₹10,00,000+
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      Mobile Application
                    </td>

                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      ₹1,50,000 – ₹3,00,000
                    </td>

                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      ₹3,00,000 – ₹7,00,000
                    </td>

                    <td
                      style={{
                        padding: '1rem',
                        borderBottom: '1px solid var(--border)',
                      }}
                    >
                      ₹7,00,000 – ₹15,00,000+
                    </td>
                  </tr>

                  <tr>
                    <td style={{ padding: '1rem' }}>
                      SaaS / Platform Product
                    </td>

                    <td style={{ padding: '1rem' }}>
                      ₹2,50,000 – ₹5,00,000
                    </td>

                    <td style={{ padding: '1rem' }}>
                      ₹5,00,000 – ₹12,00,000
                    </td>

                    <td style={{ padding: '1rem' }}>
                      ₹12,00,000 – ₹25,00,000+
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p
              style={{
                marginTop: '1.5rem',
                color: 'var(--text-muted)',
              }}
            >
              Ranges assume a Growth-stage scope on a Standard timeline.
              MVP-scale projects trend toward the lower end; Enterprise-scale
              and Urgent timelines trend toward or beyond the upper end.
            </p>
          </div>
        </div>
      </section>

      {/* What the estimate includes */}
      <section className="services-fit">
        <div className="section-inner">

          <h2 className="section-title">
            What this estimate does and doesn&apos;t include
          </h2>

          <p>
            This is a directional range, not a fixed quote. It is designed
            to help you understand your potential development budget before
            committing to a detailed scoping conversation.
          </p>

          <div className="card-grid">
            <div className="vmt-glass-card no-hover">
              <h3>Development scope</h3>

              <p>
                The estimate considers the software development effort
                associated with your selected project type, complexity,
                scale, and timeline.
              </p>
            </div>

            <div className="vmt-glass-card no-hover">
              <h3>Typically not included</h3>

              <ul className="fit-list">
                <li>
                  Third-party API or licensing costs such as payment
                  gateways, SMS, email services, maps, and similar tools
                </li>

                <li>
                  Ongoing hosting, maintenance, or support after launch
                </li>

                <li>
                  Content creation, copywriting, or professional photography
                </li>

                <li>Paid marketing expenses</li>

                <li>App store submission fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="services-cta">
        <div className="section-inner">
          <div className="vmt-glass-card no-hover">
            <p className="h-subtitle">NEXT STEP</p>

            <h2>Turn your estimate into a project plan.</h2>

            <p>
              After you submit an estimate request, we review your specific
              requirements and refine the range into a fixed-scope proposal
              with clear deliverables, timeline, and pricing.
            </p>

            <a href="/contact" className="btn btn-primary">
              Discuss Your Project
            </a>

            <p
              style={{
                marginTop: '1rem',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
              }}
            >
              Free initial discussion. No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="services-faq">
        <div className="section-inner">

          <h2 className="section-title">
            Software development cost estimator FAQs
          </h2>

          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.q}>
                <summary>{faq.q}</summary>

                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}