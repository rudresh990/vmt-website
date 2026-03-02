type paras = {
  id: string;
  para: string;
};

type Props = {
  heading: string;
  contents: paras[];
};

export default function WhaIsService({ heading, contents }: Props) {
  return (
    <section className="services-core">
      <h2 className="section-title">{heading}</h2>
      {contents.map((content) => (
        <p key={content.id} className="leading-8 mb-2.5">
          {content.para}
        </p>
      ))}
    </section>
  );
}
