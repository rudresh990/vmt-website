import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

export default function PlatformsCTA() {
  return (
    <section className="services-cta">
      <div className="section-inner">
        <GlassCard>
          <h2>Building a Platform-Driven Product?</h2>
          <p>
            Choosing the right platform early can save years of rework later.
            Get a clearer picture before you start.
          </p>

          <Link href="/software-development-cost-estimator" className="btn btn-primary">
            Estimate Project Cost
          </Link>
        </GlassCard>
      </div>
    </section>
  );
}
