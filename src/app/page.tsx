import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Scalable Technology Platforms for Modern Businesses",
  description:
    "Void Matrix Techonology designs and engineers reliable software platforms, digital system, and technology solution built for scale, security, and long-term growth.",
};
export default function Home() {
  return (
    <>
      <Hero
        title="Building Scalable Technology Platforms for Modern Businesses"
        subtitle="We design and engineer reliable software systems, platforms, and digital
                    solutions-built for growth, security, and long-term impact."
        ctaLable="Estimate Cost"
        note="Solution Coming Soon."
      />
    </>
  );
}
