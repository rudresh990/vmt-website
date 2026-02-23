import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import CoreServices from "@/components/sections/CoreServices";
import EngineeringApproach from "@/components/sections/EngineeringApproach";
import WhenToChooseVMT from "@/components/sections/WhenToChooseVMT";
import ServicesCTA from "@/components/sections/ServicesCTA";
import CtaButtonRe from "@/components/ui/CtaButtonRe";
import ServicesFAQ from "@/components/sections/ServicesFAQ";
import { buildGraph } from "../lib/schema/graph";
import { generateServicePage } from "../lib/schema/services-page";

export const metadata: Metadata = {
    title:
        "Technical SEO & Custom Software Development",
    description:
        "Custom software development, scalable platform engineering, technical SEO, and Core Web Vitals optimization for fast, growth-ready websites.",
};

export default function SolutionPage() {
    const services = [
    { name: "Scalable Custom Software Development", slug: "custom-software-development" },
    { name: "Web & Mobile Application Development", slug: "web-mobile-application-development" },
    { name: "Scalable Platform Engineering", slug: "platform-engineering" },
    { name: "APIs, Integrations & Internal Tools", slug: "api-integrations-internal-tools" },
    { name: "Technical SEO & Website Performance Optimization", slug: "technical-seo-performance" }
  ];

  const collectionSchema = generateServicePage(services);
  const schema = buildGraph([collectionSchema]);
    return (
        <>
            <script type="application/ld+json"
                    dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}
            />
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