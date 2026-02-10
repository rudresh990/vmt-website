import GlassCard from "@/components/ui/GlassCard";

export default function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="section-inner">
        <GlassCard>
          <h2>Planning a Software Project?</h2>
          <p>
            Use our estimator to get a clear idea of scope, timeline, and cost
            before starting a conversation.
          </p>
          <a href="/software-development-cost-estimator" className="btn btn-primary">
            Estimate Project Cost
          </a>
        </GlassCard>
      </div>
    </section>
  );
}
