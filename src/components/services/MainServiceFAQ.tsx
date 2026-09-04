"use client";

import { useState } from "react";

interface FAQItem {
  id?: number;
  q: string;
  a: string;
}

interface Props {
  heading: string;
  faqs: FAQItem[];

  initialVisible?: number;

  sectionClassName?: string;
  listClassName?: string;
  itemClassName?: string;
}

export default function MainServiceFAQ({
  heading,
  faqs,
  initialVisible = 5,
  sectionClassName = "services-core",
  listClassName = "faq-list",
  itemClassName = "faq-item",
}: Props) {
  const [showAll, setShowAll] = useState(false);

  const needsLoadMore = faqs.length > initialVisible;

  return (
    <section className={sectionClassName}>
      <h2 className="section-title">{heading}</h2>

      <div className={listClassName}>
        {faqs.map((faq, index) => {
          const isHidden = !showAll && index >= initialVisible;

          return (
            <details
              className={`${itemClassName} ${
                isHidden ? "faq-item-hidden" : ""
              }`}
              key={faq.id ?? `faq-${index}`}
            >
              <summary>{faq.q}</summary>

              <p className="text-justify">{faq.a}</p>
            </details>
          );
        })}
      </div>

      {needsLoadMore && (
        <div className="flex justify-center mt-4">
          <button
            type="button"
            className="hero-eyebrow"
            onClick={() => setShowAll((current) => !current)}
            aria-expanded={showAll}
          >
            {showAll
              ? "Show Less"
              : `Load ${faqs.length - initialVisible} More FAQs`}
          </button>
        </div>
      )}
    </section>
  );
}