interface Props {
  heading: string;
  intro: string;
  subintro?: string;
  finalPara?: string;
  points: string[];
}

export default function ServiceFitSection({ heading, intro, subintro, finalPara, points }: Props) {
  return (
    <section className="services-core">
      <div className="section-inner">
        <h2 className="section-title">{heading}</h2>
        <p className="section-intro">{intro}</p>
        <p>{subintro}</p>
        <ul className="fit-list">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <p className="section-intro mt-6">{finalPara}</p>
      </div>
    </section>
  );
}
