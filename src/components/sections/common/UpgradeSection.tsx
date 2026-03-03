import Link from 'next/link';

interface UpgradeSectionProps {
  id?: string;
  title: string;
  intro: string;
  points: string[];
  ctaTitle: string;
  ctaDesc: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function UpgradeSection({
  id = 'upgrade-section',
  title,
  intro,
  points,
  ctaTitle,
  ctaDesc,
  ctaLabel,
  ctaHref,
}: UpgradeSectionProps) {
  return (
    <section className="services-fit" id={id}>
      <div className="section-inner">
        <h2 className="section-title">{title}</h2>

        <p className="section-intro">{intro}</p>

        <ul className="fit-list">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>

        <div className="services-cta">
          <div className="vmt-glass-card">
            <h2>{ctaTitle}</h2>
            <p>{ctaDesc}</p>

            <Link href={ctaHref} className="btn btn-primary">
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
