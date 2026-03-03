import GlassCard from '../../ui/GlassCard';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  wide?: boolean;
}

interface HowWeWorkProps {
  sectionId?: string;
  title: string;
  intro: string;
  steps: ProcessStep[];
}

export default function HowWeWork({
  sectionId = 'how-we-work',
  title,
  intro,
  steps,
}: HowWeWorkProps) {
  return (
    <section className="how-we-work" id={sectionId}>
      <div className="how-we-work-inner">
        <div className="how-we-work-grid">
          {/* LEFT CONTENT */}
          <div className="how-we-work-content h-full flex flex-col justify-center mt-5">
            <h2 className="section-title">{title}</h2>

            <p className="section-intro">{intro}</p>
          </div>

          {/* RIGHT BENTO GRID */}
          <div className="how-we-work-bento">
            {steps.map((step, index) => (
              <GlassCard key={index} className={step.wide ? 'card-wide' : ''}>
                <span className="step-number">{step.number}</span>
                <h3 className="font-semibold">{step.title}</h3>
                <p>{step.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
