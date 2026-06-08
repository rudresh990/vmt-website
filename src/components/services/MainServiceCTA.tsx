import CtaButtonRe from '../ui/CtaButtonRe';
interface Props {
  heading: string;
  description: string;
  ctaTitle?: string;
  ctaTitle2?: string;
}

export default function MainServiceCTA({
  heading,
  description,
  ctaTitle = 'Start Your Project',
  ctaTitle2,
}: Props) {
  return (
    <section className="services-cta">
      <div className="vmt-glass-card no-hover">
        <h2>{heading}</h2>
        <p>{description}</p>

        <div className="flex w-full gap-6 items-center justify-center">
          <CtaButtonRe title={ctaTitle} url="/contact" />
          {ctaTitle2 && <CtaButtonRe title={ctaTitle2} url="/services" />}
        </div>
      </div>
    </section>
  );
}
