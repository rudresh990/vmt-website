interface Props {
  heading: string;
  intro: string;
  facts: string[];
}

export default function ServiceFactors({ heading, intro, facts }: Props) {
  return (
    <section className="services-core">
      <h2 className="section-title">{heading}</h2>
      <p className="section-intro">{intro}</p>

      <ul className="fit-list">
        {facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </section>
  );
}
