import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ContactForm from "@/components/contact/ContactForm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Void Matrix Technology to discuss your requirements, ask questions, or explore potential collaboration opportunities.",
};

type EstimateParams = {
    source?: string,
    projectType?: string,
    complexity?: string,
    scale?: string,
    timeline?: string
}

export default async function ContactPage({
    searchParams,
}: { searchParams: Promise<EstimateParams>; }) {
    const {
        source,
        projectType,
        complexity,
        scale,
        timeline,
    } = await searchParams;

    const hasEstimateData =
        source === "estimate" &&
        projectType &&
        complexity &&
        scale &&
        timeline

    function EstimateSummary({
        projectType,
        complexity,
        scale,
        timeline,
    }: EstimateParams) {
        return (
            <div className="estimate-summary-li">
                <h2>Your Project Overview</h2>

                <ul>
                    <li><strong>Project Type:</strong>{projectType}</li>
                    <li><strong>Complexity:</strong>{complexity}</li>
                    <li><strong>Scale:</strong>{scale}</li>
                    <li><strong>Timeline:</strong>{timeline}</li>
                </ul>

                <p className="estimate-summary-note">
                    This summary is based on your inputs and helps us prepare for a more meaningful conversation.
                </p>
            </div>
        );
    }
    return (

        <section className="contact">
            <header className="contact-header">
                <Hero title="Void Matrix Technology" subtitle="Tell us about your project and we'll help you move forward."></Hero>
            </header>

            {hasEstimateData && (
                <EstimateSummary
                    projectType={projectType}
                    complexity={complexity}
                    scale={scale}
                    timeline={timeline}
                />
            )}

            {/* load contact form from component */}
            <ContactForm estimateContext={hasEstimateData ? searchParams : null} />

            <p className="contact-trust">
                No spam. No sales pressure. Just a focused technical discussion.
            </p>
        </section>

    )
}