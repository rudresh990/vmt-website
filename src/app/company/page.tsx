import Hero from '@/components/sections/common/Hero';
import CompanyPhilosophy from '@/components/sections/CompanyPhilosophy';
import CompanyCollabration from '@/components/sections/CompanyCollabration';
import CompanyStandards from '@/components/sections/CompanyStandards';
import CompanyCTA from '@/components/sections/CompanyCTA';
export const metadata = {
  title: 'About Our Engineering Approach | Void Matrix Technology',
  description:
    'Learn how Void Matrix Technology builds scalable websites and custom software using an architecture-first development philosophy.',
};

export default function CompanyPage() {
  return (
    <>
      <Hero
        title="About Void Matrix Technology"
        subtitle="We are an engineering-focused technology partner building scalable,
          reliable software systems for modern businesses."
        // note="Company overview coming soon"
      />
      <CompanyPhilosophy />
      <CompanyCollabration />
      <CompanyStandards />
      <CompanyCTA />
    </>
  );
}
