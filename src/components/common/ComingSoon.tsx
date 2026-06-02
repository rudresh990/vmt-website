export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="coming-soon section-title">
      <h1 className="font-extrabold">{title}</h1>
      <p>This page is under active development.</p>
      <p className="text-(--primary)!">Coming soon...</p>
    </section>
  );
}
