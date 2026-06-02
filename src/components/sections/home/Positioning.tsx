import { Children, ReactNode } from 'react';
import Eyebrow from '@/components/common/eyebrow';

type Props = {
  title: ReactNode;
  tagline?: string;
  heading?: string;
  clsName?: string;
  children: ReactNode;
};
export default function Position({ heading, title, clsName, tagline, children }: Props) {
  return (
    <section className="who-we-work-with">
      {heading && <Eyebrow message={heading} cName={clsName} />}
      {tagline && <div className="section-intro text-xl mt-2 mb-0!">{tagline}</div>}
      <div className="what-we-do-inner">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
