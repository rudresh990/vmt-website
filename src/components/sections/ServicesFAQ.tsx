import { serviceCollectionFAQs } from '@/app/lib/schema/data/services_collection_data';
export default function ServicesFAQ() {
  return (
    <section className="services-faq">
      <div className="section-inner">
        <h2 className="section-title">Frequently Asked Questions About Our Software Services</h2>
        <div className="faq-list">
          {serviceCollectionFAQs.map((faq) => (
            <details key={faq.q} className="faq-item">
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
