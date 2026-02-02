import type { Metadata } from "next";
import ComingSoon from "@/components/common/ComingSoon";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Get in touch with Void Matrix Technology to discuss your requirements, ask questions, or explore potential collaboration opportunities.",
};

export default function ContactPage() {
    return <ComingSoon title="Contact" />
}