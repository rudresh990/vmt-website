type PlatformGroupProps = {
  title: string;
  description: string;
  points: string[];
};

export default function PlatformGroup({ title, description, points }: PlatformGroupProps) {
  return (
    <section className="platform-group">
      <div className="section-inner">
        <h2 className="section-title">{title}</h2>
        <p className="platform-desc">{description}</p>

        <ul className="platform-points">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
