import Hero from '@/components/sections/Hero';
import CompanyPhilosophy from '@/components/sections/CompanyPhilosophy';
import CompanyCollabration from '@/components/sections/CompanyCollabration';
import CompanyStandards from '@/components/sections/CompanyStandards';
import CompanyCTA from '@/components/sections/CompanyCTA';
export const metadata = {
  title: 'About Void Matrix Technology | Engineering-Focused Software Partner',
  description:
    'Learn about Void Matrix Technology, our engineering philosophy, development standards, and how we collaborate with clients to build scalable software systems.',
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
