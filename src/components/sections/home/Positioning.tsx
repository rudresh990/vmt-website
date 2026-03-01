import { Children, ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};
export default function Position({ title, children }: Props) {
  return (
    <section className="who-we-work-with">
      <div className="what-we-do-inner">
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}
