type paras = {
  paraHeading?: string;
  para: string;
  id: string;
};
type Props = {
  heading: string;
  contents: paras[];
};
export default function WhyVmtService({ heading, contents }: Props) {
  return (
    <section className="services-core">
      <h2 className="section-title">{heading}</h2>
      {contents.map((content) => (
        <div key={content.id}>
          {content.paraHeading && <h3 className="text-xl font-bold mb-2">{content.paraHeading}</h3>}
          <p className="leading-8 mb-2.5">
            {content.para}
          </p>
        </div>
      ))}
    </section>
  );
}
