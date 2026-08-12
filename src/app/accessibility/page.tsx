import type { Metadata } from 'next';
import LegalLayout from '@/components/layout/LegalLayout';
import { buildMetadata } from '../lib/schema/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Accessibility Statement | VoidMatrix Technology',
  description:
    'VoidMatrix Technology is committed to digital accessibility standards to ensure inclusive and usable web experiences.',
  path: '/accessibility',
});

export default function AccessibilityPage() {
  return (
    <LegalLayout title="Accessibility Statement">
      <p>
        VoidMatrix Technology is committed to ensuring digital accessibility for all users,
        including individuals with disabilities. We strive to improve the user experience for
        everyone by applying relevant accessibility standards and best practices.
      </p>

      <h2>Our Commitment</h2>
      <p>
        We aim to follow widely recognized accessibility guidelines, including the Web Content
        Accessibility Guidelines (WCAG), to ensure our website remains usable and inclusive.
      </p>

      <h2>Measures We Take</h2>
      <ul>
        <li>Semantic HTML structure for better screen reader support</li>
        <li>Keyboard navigability across interactive elements</li>
        <li>Clear content hierarchy and readable typography</li>
        <li>Proper color contrast for text and UI components</li>
        <li>Accessible form labels and validation messaging</li>
      </ul>

      <h2>Ongoing Improvements</h2>
      <p>
        Accessibility is an ongoing process. We continuously evaluate and improve our website to
        enhance usability and remove barriers wherever possible.
      </p>

      <h2>Need Assistance?</h2>
      <p>
        If you experience any accessibility issues or require assistance, please contact us at
        hello@voidmatrixtech.com.
      </p>

      <p className="legal-updated">Last updated: February 2026</p>
    </LegalLayout>
  );
}
