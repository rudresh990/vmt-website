import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
    title: "Platforms",
    description:
        "Discover the technology platforms developed by Void Matrix Technology to support scalable, reliable, and modern digital systems.",
};

export default function PlatformsPage() {
    return <Hero
        title="Platforms"
        subtitle="Our platform offerings are currently under development."
        note="Launching soon"
    />
}