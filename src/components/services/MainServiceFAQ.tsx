interface FAQItem {
  id?: number;
  q: string;
  a: string;
}

interface Props {
  heading: string;
  faqs: FAQItem[];

  sectionClassName?: string;
  listClassName?: string;
  itemClassName?: string;
}

export default function MainServiceFAQ({
  heading,
  faqs,
  sectionClassName = 'services-core',
  listClassName = 'faq-list',
  itemClassName = 'faq-item',
}: Props) {
  return (
    <section className={sectionClassName}>
      <h2 className="section-title">{heading}</h2>

      <div className={listClassName}>
        {faqs.map((faq, index) => (
          <details className={itemClassName} key={faq.id ?? `faq-${index}`}>
            <summary>{faq.q}</summary>

            <p className="text-justify">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
