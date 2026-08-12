import type { Metadata } from 'next';
import LegalLayout from '@/components/layout/LegalLayout';
import { buildMetadata } from '../lib/schema/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | VoidMatrix Technology',
  description:
    'Read how VoidMatrix Technology collects, uses, and protects information related to its website and software development services.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Notice">
      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly to us, including your name, email address, phone
        number, and project details submitted through our contact or estimator forms.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To respond to enquiries</li>
        <li>To provide project estimates</li>
        <li>To improve our services</li>
      </ul>

      <h2>Data Protection</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your data from
        unauthorized access, disclosure, or misuse.
      </p>

      <h2>Contact</h2>
      <p>For privacy-related questions, contact us at hello@voidmatrixtech.com.</p>
    </LegalLayout>
  );
}
