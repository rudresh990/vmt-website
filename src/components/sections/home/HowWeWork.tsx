import CtaButtonRe from '@/components/ui/CtaButtonRe';
import GlassCard from '../../ui/GlassCard';

export default function HowWeWork() {
  return (
    <section className="how-we-work" id="how-we-work">
      <div className="how-we-work-inner">
        <div className="how-we-work-grid">
          {/* LEFT CONTENT */}
          <div className="how-we-work-content h-full flex flex-col justify-center mt-5">
            <h2 className="section-title">Our Architecture-First Development Process</h2>

            <p className="section-intro">
              Our software development process is designed to keep projects clear, predictable, and
              focused on building scalable solutions that solve real business problems - not just
              ship features.
            </p>
          </div>

          {/* RIGHT BENTO GRID */}
          <div className="how-we-work-bento">
            <GlassCard className="card-wide">
              <span className="step-number">01</span>
              <h3 className="font-semibold">Requirement Discovery & Business Analysis</h3>
              <p>
                We understand workflows, integrations, and long-term goals before defining scope.
              </p>
            </GlassCard>

            <GlassCard>
              <span className="step-number">02</span>
              <h3 className="font-semibold">System Architecture & UI/UX Design</h3>
              <p>We design scalable backend structures and intuitive user experiences.</p>
            </GlassCard>

            <GlassCard>
              <span className="step-number">03</span>
              <h3 className="font-semibold">Agile Development & Testing</h3>
              <p>Secure, modular development cycles with continuous testing and optimization.</p>
            </GlassCard>

            <GlassCard className="card-wide">
              <span className="step-number">04</span>
              <h3 className="font-semibold">Deployment & Long-Term Support</h3>
              <p>Cloud deployment, monitoring, and scalable future enhancements.</p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
