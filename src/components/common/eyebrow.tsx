type EyebrowProps = {
  message?: string;
  cName?: string;
};

export default function Eyebrow({ message, cName }: EyebrowProps) {
  if (!message) return null;

  return (
    <div className={cName ? cName : 'hero-eyebrow uppercase my-3.5'}>
      {/* <span className="hero-eyebrow-dot"></span> */}
      <h2 className="uppercase">{message}</h2>
    </div>
  );
}
