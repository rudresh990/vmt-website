import type { Metadata } from 'next';
import LegalLayout from '@/components/layout/LegalLayout';
import { buildMetada } from '../lib/schema/seo';

export const metadata: Metadata = buildMetada({
  title: 'Disclaimer | Void Matrix Technology',
  description:
    'Review the official website disclaimer of Void Matrix Technology regarding service details and development representations.',
  path: '/disclaimer',
});

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer">
      <p>
        The information provided on this website by Void Matrix Technology is for general
        informational purposes only. All content is published in good faith and for general
        guidance.
      </p>

      <h2>No Professional Guarantee</h2>
      <p>
        While we strive to ensure accuracy, we make no representations or warranties of any kind,
        express or implied, about the completeness, reliability, suitability, or availability of the
        information contained on this website.
      </p>

      <h2>Project Estimates</h2>
      <p>
        Any cost estimates provided through our estimator tool are indicative and non-binding. Final
        pricing depends on detailed project requirements, technical evaluation, and agreed scope.
      </p>

      <h2>External Links</h2>
      <p>
        Our website may contain links to third-party websites or services. We do not control or
        assume responsibility for the content, privacy policies, or practices of any third-party
        sites.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Under no circumstances shall Void Matrix Technology be liable for any loss or damage arising
        from the use of this website or reliance on the information provided herein.
      </p>

      <h2>Updates</h2>
      <p>
        We reserve the right to modify this Disclaimer at any time without prior notice. Continued
        use of the website signifies acceptance of any updates.
      </p>

      <p className="legal-updated">Last updated: February 2026</p>
    </LegalLayout>
  );
}
