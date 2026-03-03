import CtaButtonRe from '../ui/CtaButtonRe';
interface Props {
  heading: string;
  description: string;
  ctaTitle?: string;
}

export default function MainServiceCTA({
  heading,
  description,
  ctaTitle = 'Start Your Project',
}: Props) {
  return (
    <section className="services-cta">
      <div className="vmt-glass-card">
        <h2>{heading}</h2>
        <p>{description}</p>

        <CtaButtonRe title={ctaTitle} url="/contact" />
      </div>
    </section>
  );
}
