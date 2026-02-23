import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CoreServices from "@/components/sections/CoreServices";
import EngineeringApproach from "@/components/sections/EngineeringApproach";
import WhenToChooseVMT from "@/components/sections/WhenToChooseVMT";
import ServicesCTA from "@/components/sections/ServicesCTA";
import CtaButtonRe from "@/components/ui/CtaButtonRe";
import ServicesFAQ from "@/components/sections/ServicesFAQ";

export const metadata: Metadata = {
    title:
        "Technical SEO & Custom Software Development",
    description:
        "Custom software development, scalable platform engineering, technical SEO, and Core Web Vitals optimization for fast, growth-ready websites.",
};

export default function SolutionPage() {
    return (
        <>
            <Hero
                title="Performance-Driven Software & Technical SEO Services"
                subtitle="From scalable web development to Core Web Vitals optimization, we engineer fast, search-optimized digital platforms built to grow your business."
            />
            <CtaButtonRe title="Get Free Website Audit" url="/contact"/>
            <CoreServices />
            <EngineeringApproach />
            <WhenToChooseVMT />
            <ServicesFAQ/>
            <ServicesCTA />
        </>
    )
}