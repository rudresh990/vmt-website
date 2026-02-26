interface Props{
    heading:string,
    intro:string,
    steps:string[];
}

export default function ServiceApproachSection({heading,intro,steps}:Props){

        return(
            <section className="services-core">
                <h2 className="section-title">{heading}</h2>
                <p className="section-intro">{intro}</p>

                <ul className="fit-list">
                    {steps.map((step,index)=>(
                        <li key={index}>{step}</li>
                    ))}
                </ul>
            </section>
        );
}