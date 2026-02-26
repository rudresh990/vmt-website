import Hero from "@/components/sections/Hero";
import { Metadata } from "next";
import ServiceCoreSection from "@/components/services/ServiceCoreSection";
import ServiceApproachSection from "@/components/services/ServiceApproachSection";
import ServiceFitSection from "@/components/services/ServiceFitSection";
import MainServiceFAQ from "@/components/services/MainServiceFAQ";
import MainServiceCTA from "@/components/services/MainServiceCTA";
export const metadata: Metadata = {
    title: "Custom Software Development Company",
    description: "Scalable custom software development for startups and enterprises. High-performance architecture, automation, and SaaS solutions by VMT."
}
export default function CustomSoftwareDev() {
    return (
        <>
            <Hero
                title="Custom Software Development Company in India"
                subtitle="We design and build high-performance, scalable custom software solutions for startups, enterprises, and growing businesses across India."
            />
            <ServiceCoreSection
                heading="Our Custom Software Development Services in India"
                intro="We build high-performance systems tailored for Indian businesses."
                items={[
                    {
                        title: "Enterprise Application",
                        description: "Robust enterprise-grade systems built for scale and reliability.",
                    },
                    {
                        title: "SaaS Platforms",
                        description: "Cloud-native SaaS products engineered for high performance.",
                    },
                    {
                        title: "CRM & ERP Systems",
                        description: "Custom internal platforms to optimize workflows.",
                    },
                ]}
            />
            {/* approach */}

            <ServiceApproachSection
                heading="Our Engineering Approach"
                intro="We follow an architecture-first, scalable development methodology."
                steps={[
                    "Requirment discovery & system planning",
                    "Architecture & tech stack selection",
                    "Agile sprint-based development",
                    "Security & continuous scaling",
                ]}
            />

            {/* service fit */}

            <ServiceFitSection 
                heading="When to choose custom Software"
                intro="Custom software is ideal when:"
                points={[
                    "Your business has unique workflows",
                    "Off-the-shelf tools limit scalability",
                    "You require full data ownership",
                    "Security and compliance are critical",
                ]}
            />

            {/* service FAQ */}
            <MainServiceFAQ 
                faqs={[
                    {
                        q:"How much this custom software cost in India?",
                        a:"Costs vary based on complexity and scalability requirments."
                    },
                    {
                        q:"Do you provide long-term support?",
                        a:"Yes, we offer continuous optimization and scaling support"
                    },
                ]}
            />
            <MainServiceCTA
                heading="Ready to Build Scalable Software for Your Business in India?"
                description="Partner with Void Matrix Technology to design secure, scalable, and performance-driven custom software."
            />
        </>
    )
}