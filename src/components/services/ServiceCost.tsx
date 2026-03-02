interface serviceCostDesc {
  para: string;
}
interface Props {
  heading: string;
  costdesc: serviceCostDesc[];
}

export default function ServiceCost({ heading, costdesc }: Props) {
  return (
    <section className="services-core">
      <div className="section-inner">
        <h2 className="section-title">{heading}</h2>
        {costdesc.map((desc, index) => (
          <p key={`cost-desc-${index}`} className="mb-5">
            {desc.para}
          </p>
        ))}
      </div>
    </section>
  );
}
