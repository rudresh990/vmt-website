interface Props {
  heading: string;
  intro: string;
  facts: string[];
  closing?: string;
}

export default function ServiceFactors({ heading, intro, facts, closing }: Props) {
  return (
    <section className="services-core">
      <div className="section-inner">
        <h2 className="section-title">{heading}</h2>

        <p className="section-intro">{intro}</p>

        <ul className="fit-list">
          {facts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>

        {closing && (
          <p className="section-intro" style={{ marginTop: '2rem' }}>
            {closing}
          </p>
        )}
      </div>
    </section>
  );
}
