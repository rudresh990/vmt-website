'use client';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
type HeroProps = {
  title: ReactNode;
  herosub?: ReactNode;
  subtitle?: ReactNode;
  ctaLable?: string;
  ctaRoute?: string;
  note?: string;
  eyebrow?: string;
};
export default function Hero({
  title,
  eyebrow,
  herosub,
  subtitle,
  ctaLable,
  ctaRoute,
  note,
}: HeroProps) {
  const router = useRouter();
  return (
    <section className="hero">
      <div className="hero-inner">
        {eyebrow && (
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot"></span>
            {eyebrow}
            <span className="hero-eyebrow-dot"></span>
          </div>
        )}
        <h1 className="hero-title">{title}</h1>
        {herosub && <h2 className="h-subtitle">{herosub}</h2>}
        {subtitle && <div className="hero-subtitle">{subtitle}</div>}
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
