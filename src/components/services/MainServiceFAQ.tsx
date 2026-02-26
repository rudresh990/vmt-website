interface FAQItem{
    q:string;
    a:string;
}

interface Props{
    faqs:FAQItem[];
}

export default function MainServiceFAQ({faqs}:Props){
    return(
        <section className="services-core">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-list">
                {faqs.map((faq,index)=>(
                    <details className="faq-item" key={index}>
                        <summary>{faq.q}</summary>
                        <p>{faq.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
