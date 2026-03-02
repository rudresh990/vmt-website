interface Props {
  heading: string;
  desc: string;
}
export default function ServiceComp({ heading, desc }: Props) {
  return (
    <section className="services-core">
      <div className="section-inner">
        <h2 className="section-title">{heading}</h2>
        <p>{desc}</p>
      </div>
    </section>
  );
}
