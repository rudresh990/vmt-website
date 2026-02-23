import Hero from "@/components/sections/Hero";
import CtaButtonRe from "@/components/ui/CtaButtonRe";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Custom Software Development Company",
    description:"Scalable custom software development for startups and enterprises. High-performance architecture, automation, and SaaS solutions by VMT."
}
export default function CustomSoftwareDev() {
    return (
        <>
            <Hero
                title="Custom Software Development Services for Scalable Growth"
                subtitle="We design and build high-performance, scalable custom software tailored to your workflows, customers, and growth strategy."
            />
            <CtaButtonRe title="Start Your Project" url="/contact" />
            
        </>
    )
}