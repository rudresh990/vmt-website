import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about Void Matrix Technology, our mission, values, and approach to building reliable technology solutions for modern businesses.",
};

export default function CompanyPage(){
    return <Hero
        title="Company"
        subtitle="Void Matrix Technology is focused on building reliable, scalable, and secure technology platforms designed for long-term business impact."
        note="Company overview coming soon"
      />
}