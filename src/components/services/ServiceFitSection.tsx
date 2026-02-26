interface Props{
    heading:string,
    intro:string,
    points:string[];
}

export default function ServiceFitSection({heading,intro,points}:Props){
    return(
        <section className="services-core">
            <div className="section-inner">
                <h2 className="section-title">{heading}</h2>
                <p className="section-intro">{intro}</p>
                <ul className="fit-list">
                    {points.map((point,index)=>(
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}