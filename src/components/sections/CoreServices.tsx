import Link from 'next/link';
export default function CoreServices() {
  return (
    <section className="services-core">
      <div className="section-inner">
        <h2 className="section-title">Our Core Software & Performance Services</h2>

        <div className="services-list">
          <Link href="/services/custom-software-development" className="card-link">
            <div>
              <h3>Scalable Custom Software Development</h3>
              <p>
                We design and develop custom software solutions tailored to your business workflows,
                operational systems, and growth goals. Our architecture-first approach ensures
                scalable, secure, and performance-optimized applications built for long-term
                success.
              </p>
              <p className="internal-link">
                Learn more about our custom software development solutions.
              </p>
            </div>
          </Link>

          <Link href="/contact" className="card-link">
            <div>
              <h3>Web & Mobile Application Development</h3>
              <p>
                High-performance web and mobile applications engineered for speed, usability, and
                scalability. We build responsive, secure, and conversion-ready applications that
                support modern user demands and business expansion.
              </p>
              <p className="internal-link">Explore our web and mobile development expertise.</p>
            </div>
          </Link>

          <Link href="/contact" className="card-link">
            <div>
              <h3>Scalable Platform Engineering</h3>
              <p>
                Architecture-driven platform engineering designed to scale seamlessly without
                technical debt. From system design to cloud-ready infrastructure, we build platforms
                that support traffic growth, feature expansion, and operational efficiency.
              </p>
              <p className="internal-link">
                Discover our approach to platform architecture consulting.
              </p>
            </div>
          </Link>

          <Link href="/contact" className="card-link">
            <div>
              <h3>APIs, Integrations & Internal Tools</h3>
              <p>
                Robust backend systems, APIs, and internal tools that connect services, automate
                workflows, and improve operational performance. We ensure secure integrations and
                scalable system connectivity across your digital ecosystem.
              </p>
              <p className="internal-link">
                See how we build scalable API and integration systems.
              </p>
            </div>
          </Link>

          <Link href="/contact" className="card-link">
            <div>
              <h3>Technical SEO & Website Performance Optimization</h3>
              <p>
                We optimize website structure, speed, and Core Web Vitals to improve search
                visibility, user experience, and conversion performance. Our technical SEO
                implementation ensures long-term organic growth.
              </p>
              <p className="internal-link">Learn about our technical SEO services.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
