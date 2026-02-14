import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

export default function CompanyCTA() {
  return (
    <section className="services-cta">
      <div className="section-inner">
        <GlassCard>
          <h2>Looking for a Reliable Technology Partner?</h2>
          <p>
            If you value structured engineering and long-term system stability,
            we would be glad to discuss your project.
          </p>

          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </GlassCard>
      </div>
    </section>
  );
}
