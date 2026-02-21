export default function ServicesFAQ() {
  return (
    <section className="services-faq">
      <div className="section-inner">
        <h2 className="section-title">
          Frequently Asked Questions About Our Software Services
        </h2>

        <div className="faq-list">

          <details className="faq-item">
            <summary>
              How much does custom software development cost?
            </summary>
            <p>
              The cost depends on scope, features, integrations, scalability
              requirements, and technical complexity. Our estimator provides
              a structured budget estimate before project initiation.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              How long does a software development project take?
            </summary>
            <p>
              Timelines vary by complexity. Smaller systems may take weeks,
              while scalable SaaS platforms may require structured multi-phase
              development over several months.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              What is platform engineering?
            </summary>
            <p>
              Platform engineering focuses on scalable system architecture,
              infrastructure design, and automation that supports long-term
              growth without technical debt.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              Do you provide technical SEO and performance optimization?
            </summary>
            <p>
              Yes. We implement technical SEO, Core Web Vitals optimization,
              and performance engineering to improve search visibility and
              user experience.
            </p>
          </details>

          <details className="faq-item">
            <summary>
              How do you ensure scalability and maintainability?
            </summary>
            <p>
              We follow an architecture-first development model using modular
              code, security standards, and performance optimization from the
              foundation.
            </p>
          </details>

        </div>
      </div>
    </section>
  );
}