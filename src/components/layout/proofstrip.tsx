import Eyebrow from '../common/eyebrow';

type Props = {
  content: string[];
};
export default function ProofStrip({ content }: Props) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {Array(6)
          .fill(content)
          .flat()
          .map((item, i) => (
            <Eyebrow
              key={i}
              message={item}
              cName="hero-eyebrow-glowing-b uppercase mx-4 md:mx-6 shrink-0"
            />
          ))}
      </div>
    </div>
  );
}
