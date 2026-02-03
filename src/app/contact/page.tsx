import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Void Matrix Technology to discuss your requirements, ask questions, or explore potential collaboration opportunities.",
};

export default function ContactPage() {
    return <Hero
        title="Contact"
        subtitle="We’re open to discussions around technology platforms, system design, and future collaboration."
        note="Contact details will be available soon"
      />
}