import CtaButtonRe from '@/components/ui/CtaButtonRe';
import Link from 'next/link';

type investment_card = {
  title: string;
  range: string;
  desc: string;
  url?: string;
};
type props = {
  cards: investment_card[];
};
export default function InvestmentRange({ cards }: props) {
  return (
    <section className="services-core">
      <h2 className="section-title">Indicative Investment Ranges</h2>
      <p className="section-intro">
        We maintain transparent pricing based on scope, features, and scalability requirements.
      </p>
      <div className="services-list">
        {cards.map((card, index) => (
          <Link key={index} className="card-link" href={card.url || '#'}>
            <div>
              <h3>{card.title}</h3>
              <p>{card.range}</p>
              <p>{card.desc}</p>
              <p className="internal-link">Explore This Solution</p>
            </div>
          </Link>
        ))}
      </div>
      <p className="m-10">
        Every project includes structured planning, performance optimization, and future scalability
        guidance.
      </p>
      <CtaButtonRe title="Get a Detailed Project Estimate" url="/contact" />
    </section>
  );
}
