type HeroProps = {
    title:string;
    subtitle?:string;
    ctaLable?:string;
    onCtaClick?:()=>void;
    note?:string;
};
export default function Hero({
    title,
    subtitle,
    ctaLable,
    onCtaClick,
    note,
}:HeroProps) {
    return (
        <section className="hero">
            <div className="hero-inner">
                <h1 className="hero-title">
                    {title}
                </h1>
                {subtitle && <p className="hero-subtitle">
                    {subtitle}
                </p>}
                <div className="hero-actions">
                    {ctaLable && <button className="btn btn-primary">
                        {ctaLable}
                    </button>}

                    {note && <span className="hero-note">
                        {note}
                    </span>}
                </div>
            </div>
        </section>
    );
}