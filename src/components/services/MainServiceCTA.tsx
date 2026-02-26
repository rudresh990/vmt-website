import CtaButtonRe from "../ui/CtaButtonRe";
interface Props{
    heading:string;
    description:string;
}

export default function MainServiceCTA({heading,description}:Props){
    return (
        <section className="services-cta">
            <div className="vmt-glass-card">
                <h2>{heading}</h2>
                <p>{description}</p>

                <CtaButtonRe title="Start Your Project" url="/contact"/>
            </div>
        </section>
    )
}