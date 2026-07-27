interface Step {
  title: string;
  description: string;
  points: string[];
}

interface Props {
  heading: string;
  intro: string;
  steps: Step[];
}

export default function ServiceApproachSection({ heading, intro, steps }: Props) {
  return (
    <section className="services-approach">
      <div className="section-inner">
        <h2 className="section-title">{heading}</h2>
        <p className="section-intro">{intro}</p>

        <div className="approach-grid">
          {steps.map((step, index) => (
            <div className="vmt-glass-card no-hover process-card" key={index}>
              <span className="step-number">{String(index + 1).padStart(2, '0')}</span>

              <h3>{step.title}</h3>
              <p className="process-desc">{step.description}</p>

              <ul className="approach-list">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
