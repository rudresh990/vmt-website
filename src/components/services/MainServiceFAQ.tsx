interface FAQItem {
  q: string;
  a: string;
}

interface Props {
  heading: string;
  faqs: FAQItem[];
}

export default function MainServiceFAQ({ heading, faqs }: Props) {
  return (
    <section className="services-core">
      <h2 className="section-title">{heading}</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <details className="faq-item" key={index}>
            <summary>{faq.q}</summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
