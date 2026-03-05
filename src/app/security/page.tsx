import type { Metadata } from 'next';
import LegalLayout from '@/components/layout/LegalLayout';
import { buildMetadata } from '../lib/schema/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Application Security Standards | Void Matrix Technology',
  description:
    'Discover how Void Matrix Technology ensures secure website and software development through modern infrastructure and protection standards.',
  path: '/security',
});

export default function SecurityPage() {
  return (
    <LegalLayout title="Security Policy">
      <p>
        Void Matrix Technology prioritizes the security and integrity of the systems we build and
        the information shared with us. We implement industry-standard practices to safeguard data
        and maintain secure development workflows.
      </p>

      <h2>Secure Infrastructure</h2>
      <p>
        Our website and applications are deployed on secure, modern hosting environments with
        encrypted connections (HTTPS) and managed infrastructure safeguards.
      </p>

      <h2>Data Transmission</h2>
      <p>
        All data transmitted through our website is encrypted using secure communication protocols.
        Sensitive information submitted through forms is handled securely and not exposed publicly.
      </p>

      <h2>Application Security Practices</h2>
      <ul>
        <li>Input validation and server-side verification</li>
        <li>Protection against common web vulnerabilities</li>
        <li>Secure API communication</li>
        <li>Access control and authentication mechanisms</li>
      </ul>

      <h2>Data Handling</h2>
      <p>
        We collect only necessary information required to respond to enquiries and provide services.
        We do not sell or share personal data with unauthorized third parties.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use trusted third-party service providers for hosting, email delivery, or
        infrastructure support. These providers maintain their own security standards and compliance
        frameworks.
      </p>

      <h2>Responsible Disclosure</h2>
      <p>
        If you believe you have identified a security vulnerability in our systems, please report it
        responsibly by contacting us at hello@voidmatrixtech.com.
      </p>

      <p className="legal-updated">Last updated: February 2026</p>
    </LegalLayout>
  );
}
