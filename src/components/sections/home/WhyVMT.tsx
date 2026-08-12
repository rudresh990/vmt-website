import GlassCard from '@/components/ui/GlassCard';

export default function WhyVMT() {
  return (
    <section className="why-vmt">
      <div className="section-inner">
        <h2 className="section-title">Why VoidMatrix Technology</h2>

        <p className="section-intro">
          We approach software development with an engineering-first mindset, focusing on clarity,
          reliability, and long-term value rather than short-term delivery.
        </p>

        <div className="card-grid">
          <GlassCard>
            <h3>Engineering-First Thinking</h3>
            <p>
              We prioritize architecture, system design, and maintainability to ensure solutions
              remain stable as they grow.
            </p>
          </GlassCard>

          <GlassCard>
            <h3>Clear Communication</h3>
            <p>
              You work directly with engineers who communicate decisions clearly and keep progress
              transparent.
            </p>
          </GlassCard>

          <GlassCard>
            <h3>Scalable by Design</h3>
            <p>
              Our systems are designed to grow from day one, reducing future technical debt and
              rework.
            </p>
          </GlassCard>

          <GlassCard>
            <h3>Practical Execution</h3>
            <p>
              We balance technical quality with timelines, budgets, and evolving business needs.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
