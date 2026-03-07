import Link from 'next/link';

interface ServiceItem {
  item_link: string;
  title: string;
  description: string;
}
type para = {
  para: string;
};
interface ItemDetail {
  item_link_id: string;
  heading: string;
  descriptions: para[];
}

interface Props {
  heading: string;
  intro: string;
  items: ServiceItem[];
  details: ItemDetail[];
}

export default function ServiceCoreSection({ heading, intro, items, details }: Props) {
  return (
    <section className="services-core">
      <h2 className="section-title">{heading}</h2>
      <p className="section-intro">{intro}</p>

      <div className="services-list mb-20">
        {items.map((item) => (
          // <Link href={`#${item.item_link}`} key={`${item.title}'-link'`} className="card-link">
          <Link
            href={item.item_link.startsWith('/') ? item.item_link : `#${item.item_link}`}
            key={`${item.item_link}-link`}
            className="card-link"
          >
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <div>
        {details.map((detail) => (
          <div key={detail.heading} id={`${detail.item_link_id}`} className="scroll-mt-0.5">
            <h2 className="section-intro">{detail.heading}</h2>
            {detail.descriptions.map((desc, index) => (
              <p key={`${detail.heading}-${index}`} className="mb-3">
                {desc.para}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
