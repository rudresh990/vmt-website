import PlatformGroup from '@/components/platfroms/PlatformGroup';
import PlatformsFit from '@/components/platfroms/PlatformFit';
import PlatformsCTA from '@/components/platfroms/PlatformCTA';
import Hero from '@/components/sections/common/Hero';
import { Metadata } from 'next';
import { buildMetadata } from '../lib/schema/seo';
export const metadata: Metadata = buildMetadata({
  title: 'Technology Stack & Platforms | Void Matrix Technology',
  description:
    'Explore the modern development technologies and platforms used by Void Matrix Technology to build scalable digital systems.',
  path: '/platforms',
});
export default function PlatformsPage() {
  return (
    <>
      <Hero
        title="Platforms We Build On"
        subtitle="We choose platforms based on reliability, scalability, and long-term
          maintainability - not trends."
      />

      <PlatformGroup
        title="Web & Frontend Platforms"
        description="User-facing platforms built for performance, accessibility, and long-term maintainability."
        points={[
          'Modern web applications',
          'SEO-first and performance-focused builds',
          'Component-driven UI systems',
        ]}
      />

      <PlatformGroup
        title="Backend & Application Platforms"
        description="Scalable backend systems that handle business logic, data flow, and integrations."
        points={[
          'Secure APIs and application services',
          'Clean domain-driven architecture',
          'Authentication and authorization systems',
        ]}
      />

      <PlatformGroup
        title="Data & Infrastructure Platforms"
        description="Reliable infrastructure designed to support growth and operational stability."
        points={[
          'Scalable databases (SQL & NoSQL)',
          'Cloud-native hosting and deployment',
          'Monitoring and observability',
        ]}
      />

      <PlatformGroup
        title="Integrations & Automation"
        description="Systems that connect services, automate workflows, and support real-world operations."
        points={[
          'Payment and billing integrations',
          'Email and notification pipelines',
          'Third-party service integrations',
        ]}
      />

      <PlatformsFit />
      <PlatformsCTA />
    </>
  );
}
