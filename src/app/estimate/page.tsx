import Calculator from "@/components/calculator/Calculator";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Project Cost Estimator | Void Matrix Technology",
  description:
    "Estimate the cost of your software project based on scope, complexity, scale, and timeline. Get a realistic price range tailored for Indian and global businesses.",
};


export default function EstimatePage(){
    return <Calculator/>
}