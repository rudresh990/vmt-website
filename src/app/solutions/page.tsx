import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
    title: "Solutions",
    description:
        "Explore the technology solutions offered by Void Matrix Technology. This page is currently under development.",
};

export default function SolutionPage() {
    // return <ComingSoon title="Solutions" />
    return (
        <Hero
            title="Solutions"
            subtitle="We design and deliver scalable software and platform solutions
                tailored to modern business needs."
            note="Detailed solutions coming soon."    
        />
    )
}