import GlassCard from '@/components/ui/GlassCard';

export default function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="section-inner">
        <GlassCard>
          <h2>Estimate Your Software Development Cost Before You Build</h2>

          <p>
            Get a clear estimate of your software development cost, project scope, timeline, and
            technical requirements before starting. Our estimator helps you plan scalable solutions
            with realistic budgets and execution clarity.
          </p>

          <a href="/software-development-cost-estimator" className="btn btn-primary">
            Calculate Your Software Project Cost
          </a>
        </GlassCard>
      </div>
    </section>
  );
}
