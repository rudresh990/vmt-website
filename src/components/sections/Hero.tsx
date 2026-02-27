'use client';
import { useRouter } from 'next/navigation';
type HeroProps = {
  title: string;
  herosub?: string;
  subtitle?: string;
  ctaLable?: string;
  ctaRoute?: string;
  note?: string;
};
export default function Hero({ title, herosub, subtitle, ctaLable, ctaRoute, note }: HeroProps) {
  const router = useRouter();
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">{title}</h1>
        {herosub && <h2 className="h-subtitle">{herosub}</h2>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        <div className="hero-actions">
          {ctaLable && ctaRoute && (
            <button className="btn btn-primary" onClick={() => router.push(ctaRoute)}>
              {ctaLable}
            </button>
          )}

          {note && <span className="hero-note">{note}</span>}
        </div>
      </div>
    </section>
  );
}
