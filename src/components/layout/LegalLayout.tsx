import type { ReactNode } from 'react';

type LegalLayoutProps = {
  title: string;
  children: ReactNode;
};

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <section className="legal-page">
      <div className="legal-inner">
        <h1 className="legal-title">{title}</h1>
        <div className="legal-content">{children}</div>
      </div>
    </section>
  );
}
