import type { Metadata } from "next";
import ComingSoon from "@/components/common/ComingSoon";
export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about Void Matrix Technology, our mission, values, and approach to building reliable technology solutions for modern businesses.",
};

export default function CompanyPage(){
    return <ComingSoon title="Company"/>
}