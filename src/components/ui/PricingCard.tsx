import Link from 'next/link';
interface Props {
  heading: string;
  subhead?: string;
  desc: string;
  price_text: string;
  price_range: string;
  bullets?: string[];
  target_link?: string;
  featured?: boolean;
}

export default function PricingCard({
  heading,
  subhead,
  desc,
  price_text,
  price_range,
  featured = false,
  bullets,
  target_link,
}: Props) {
  return (
    <>
      <Link
        href={target_link || '#'}
        className={`card-link text-center !flex !items-center ${featured ? 'border !border-blue-400/60 !shadow-2xl !shadow-[0_0_25px_rgba(96,165,250,0.35)] scale-106' : ''}`}
      >
        <div>
          <h3>{heading}</h3>
          {subhead && (
            <p className="text-justify text-xs uppercase tracking-widest text-(--text-muted) !mb-4">
              {subhead}
            </p>
          )}
          <p className="text-justify text-sm leading-relaxed text-slate-300 ">{desc}</p>
          <ul className="text-left fit-list !m-0 !p-0">
            {bullets?.map((bullet, index) => (
              <li key={`price_bullet_${index}`}>{bullet}</li>
            ))}
          </ul>
          <p className="text-center uppercase tracking-wider text-slate-500">{price_text}</p>
          <p className="text-center text-2xl font-semibold text-white mt-1">{price_range}</p>
        </div>
      </Link>
    </>
  );
}
