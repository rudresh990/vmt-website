import Calculator from "@/components/calculator/Calculator";

import type { Metadata } from "next";

export const metadata: Metadata = {

  alternates:{
    canonical:"/software-development-cost-estimator",
  },
  
  title: "Software Development Cost Estimator for Web, SaaS & MVP Projects | Void Matrix Tech",
  description:
    "Estimate your software development budget based on scope, complexity, and timeline. Get realistic pricing insights for web applications, SaaS platforms, MVPs, and custom software projects in India and globally.",
};


export default function EstimatePage(){
    return <Calculator/>
}