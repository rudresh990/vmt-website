import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Void Matrix Technology | Scalable Technology Platforms",
  description:
    "Void Matrix Techonology designs and engineers reliable software platforms, digital system, and technology solution built for scale, security, and long-term growth.",
};
export default function Home() {
  return (
    <>
      <Hero
        title="Void Matrix Technology"
        herosub="Software • Platforms • Digital Solutions"
        subtitle="We design and engineer reliable software systems, platforms, and digital
                    solutions-built for growth, security, and long-term impact."
        ctaLable="Estimate Cost"
        ctaRoute="/estimate"
        // note="Solution Coming Soon."
      />
    </>
  );
}
