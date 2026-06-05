import CtaButtonRe from '../ui/CtaButtonRe';

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="coming-soon section-title">
      <h1 className="font-extrabold">{title}</h1>
      <p>This page is under active development.</p>
      <p className="text-(--primary)! mb-5">Coming soon...</p>
      <CtaButtonRe title="Contact VMT" url="/contact" />
    </section>
  );
}
