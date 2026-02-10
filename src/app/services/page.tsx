import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CoreServices from "@/components/sections/CoreServices";
import EngineeringApproach from "@/components/sections/EngineeringApproach";
import WhenToChooseVMT from "@/components/sections/WhenToChooseVMT";
import ServicesCTA from "@/components/sections/ServicesCTA";

export const metadata = {
    title: "Software Development Services & Platform Engineering | Void Matrix Technology",
    description:
        "Void Matrix Technology provides custom software development, scalable platform engineering, and digital system services for startups and growing businesses.",
};


export default function SolutionPage() {
    // return <ComingSoon title="Solutions" />
    return (
        <>
            <Hero
                title="Services"
                subtitle="We design and deliver scalable software and platform solutions
                tailored to modern business needs."
                // note="Detailed solutions coming soon."
            />
            <CoreServices/>
            <EngineeringApproach/>
            <WhenToChooseVMT/>
            <ServicesCTA/>
        </>
    )
}