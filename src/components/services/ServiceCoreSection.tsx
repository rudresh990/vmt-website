interface ServiceItem {
  title: string;
  description: string;
}

interface Props {
  heading: string;
  intro: string;
  items: ServiceItem[];
}

export default function ServiceCoreSection({ heading, intro, items }: Props) {
  return (
    <section className="services-core">
      <h2 className="section-title">{heading}</h2>
      <p className="section-intro">{intro}</p>

      <div className="services-list">
        {items.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
