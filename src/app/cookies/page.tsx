import type { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Void Matrix Technology",
  description:
    "Learn about the use of cookies on the Void Matrix Technology website.",
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy">
      <h2>Use of Cookies</h2>
      <p>
        Void Matrix Technology does not use cookies for tracking,
        advertising, or analytics purposes.
      </p>

      <h2>Essential Technical Functions</h2>
      <p>
        Our website may rely on essential technical mechanisms required for
        secure and reliable operation. These are not used to identify or track
        individual users.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We do not currently use third-party analytics tools, advertising
        networks, or tracking technologies that set cookies on your device.
      </p>

      <h2>Future Updates</h2>
      <p>
        If we introduce analytics or tracking technologies in the future,
        this Cookie Policy will be updated accordingly.
      </p>

      <h2>Contact</h2>
      <p>
        For any questions regarding this policy, please contact us at hello@voidmatrixtech.com.
      </p>
    </LegalLayout>
  );
}
