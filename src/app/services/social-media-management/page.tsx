import { Metadata } from 'next';

import Hero from '@/components/sections/common/Hero';

import WhaIsService from '@/components/services/WhatIsService';

import { serviceData } from '@/app/lib/schema/data/services_data';

import { buildMetadata } from '@/app/lib/schema/seo';

import MainServiceCTA from '@/components/services/MainServiceCTA';

import MainServiceFAQ from '@/components/services/MainServiceFAQ';

import ServiceFitSection from '@/components/services/ServiceFitSection';

import ServiceCost from '@/components/services/ServiceCost';

import ServiceApproachSection from '@/components/services/ServiceApproachSection';

import CtaButtonRe from '@/components/ui/CtaButtonRe';

import ServiceComp from '@/components/services/ServiceComp';

import ServiceFactors from '@/components/services/ServiceFactors';

import ServiceCoreSection from '@/components/services/ServiceCoreSection';

export const metadata: Metadata = buildMetadata({
  title: 'Social Media Management Company in Mumbai & India | Social Media Marketing Services',

  description:
    'Social media management services for businesses in Mumbai, Pune and India. Build your brand presence, publish engaging content, manage social platforms and grow audience engagement.',

  path: '/services/social-media-management',
});

const s_data = serviceData['/services/social-media-management'];

const contents = [
  {
    id: 'social1',

    para: 'Social media management is the process of planning, creating, publishing, managing, and optimizing content across social media platforms to build a consistent brand presence and engage the target audience.',
  },

  {
    id: 'social2',

    para: 'Effective social media marketing is more than regularly posting images or promotional messages. A strong social media strategy connects content with business objectives such as brand awareness, audience growth, customer engagement, website traffic, lead generation, and conversions.',
  },

  {
    id: 'social3',

    para: 'At VoidMatrix Technology, we provide social media management services for startups, B2B companies, SaaS businesses, eCommerce brands, service businesses, manufacturers, and growing companies. Our approach combines content planning, creative direction, publishing, community management, and performance analysis.',
  },

  {
    id: 'social4',

    para: 'Social media can also support other digital marketing channels. Content published on social platforms can strengthen brand visibility, distribute website content, support campaigns, drive traffic to landing pages, and create additional touchpoints between your business and potential customers.',
  },

  {
    id: 'social5',

    para: 'A consistent social media presence helps businesses remain visible to their audience while communicating their expertise, products, services, updates, offers, achievements, and brand values. The right content mix depends on the industry, audience, platform, and business objectives.',
  },

  {
    id: 'social6',

    para: 'We provide social media management services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Whether you need social media management from scratch or want to improve an existing social media presence, we structure the work around your business goals and target audience.',
  },
];

export default function SocialMediaManagementPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Social Media Management Company in Mumbai, India"
        title={
          <>
            Build a Stronger
            <span className="text-(--primary)"> Social Media Presence</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Build visibility, engagement, and trust across social platforms.
                </span>
                <br />
                VoidMatrix provides social media management services focused on content strategy,
                social media marketing, audience engagement, brand visibility, and measurable
                business growth across Mumbai, Pune, India, and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Social Media <span className="text-(--primary)">Strategy</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Content <span className="text-(--primary)">Management</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Audience <span className="text-(--primary)">Engagement</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Brand <span className="text-(--primary)">Growth</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS SOCIAL MEDIA MANAGEMENT?
      ===================================================== */}

      <WhaIsService heading="What Is Social Media Management?" contents={contents} />

      {/* =====================================================
          CORE SOCIAL MEDIA SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Social Media Management Services"
        intro="We manage social media around your brand, target audience, industry, content requirements, and business objectives. Our social media management services cover strategy, content planning, publishing, community management, platform optimization, and performance analysis."
        items={[
          {
            item_link: 'social-strategy',

            title: 'Social Media Strategy',

            description:
              'Develop a social media strategy based on your business goals, target audience, industry, brand positioning, and selected social platforms.',
          },

          {
            item_link: 'social-content',

            title: 'Social Media Content Management',

            description:
              'Plan and manage social media content including educational posts, promotional content, brand updates, industry insights, and audience-focused communication.',
          },

          {
            item_link: 'social-platform',

            title: 'Social Media Platform Management',

            description:
              'Manage your business presence across relevant platforms while maintaining consistent branding, messaging, publishing schedules, and content quality.',
          },

          {
            item_link: 'social-community',

            title: 'Community Management',

            description:
              'Monitor audience interactions, comments, messages, and relevant conversations to help businesses maintain active and responsive social media profiles.',
          },

          {
            item_link: 'social-branding',

            title: 'Social Media Branding',

            description:
              'Create a consistent social media identity through coordinated messaging, content themes, visual direction, brand communication, and platform presentation.',
          },

          {
            item_link: 'social-growth',

            title: 'Social Media Growth',

            description:
              'Improve social media visibility and audience engagement through consistent content, relevant topics, platform optimization, and audience-focused strategies.',
          },

          {
            item_link: 'social-performance',

            title: 'Social Media Performance Analysis',

            description:
              'Review social media performance and identify opportunities to improve content, engagement, audience growth, reach, and business outcomes.',
          },
        ]}
        details={[
          {
            item_link_id: 'social-strategy',

            heading: 'Social Media Strategy',

            descriptions: [
              {
                para: 'A strong social media presence begins with a clear strategy. We identify your target audience, business objectives, brand positioning, industry, competitors, and the platforms most relevant to your business.',
              },

              {
                para: 'The strategy can focus on objectives such as brand awareness, audience engagement, website traffic, lead generation, customer communication, product visibility, or community building.',
              },

              {
                para: 'We also consider how social media can support your wider SEO, content marketing, paid advertising, website, and lead generation activities.',
              },
            ],
          },

          {
            item_link_id: 'social-content',

            heading: 'Social Media Content Management',

            descriptions: [
              {
                para: 'Consistent content is one of the foundations of social media management. We plan content around your business, industry, audience interests, products, services, announcements, and marketing objectives.',
              },

              {
                para: 'Content may include educational posts, product or service communication, industry insights, company updates, customer-focused content, promotional campaigns, and other relevant formats.',
              },

              {
                para: 'The objective is to maintain a useful and consistent social media presence rather than publishing content without a defined purpose.',
              },
            ],
          },

          {
            item_link_id: 'social-platform',

            heading: 'Social Media Platform Management',

            descriptions: [
              {
                para: 'Different social media platforms attract different audiences and support different types of content. We manage the platforms that are relevant to your business and target audience.',
              },

              {
                para: 'Depending on your business, this may include platforms such as Instagram, Facebook, LinkedIn, X, YouTube, or other relevant channels.',
              },

              {
                para: 'Content and communication can be adapted to the characteristics of each platform while maintaining a consistent overall brand identity.',
              },
            ],
          },

          {
            item_link_id: 'social-community',

            heading: 'Community Management',

            descriptions: [
              {
                para: 'Social media is also a communication channel between businesses and their audiences. Community management helps businesses remain responsive to comments, messages, questions, and relevant interactions.',
              },

              {
                para: 'We help organize and manage audience interactions so that important conversations can be identified and handled consistently.',
              },

              {
                para: 'Community management can also provide useful insights into customer questions, interests, objections, and feedback.',
              },
            ],
          },

          {
            item_link_id: 'social-branding',

            heading: 'Social Media Branding',

            descriptions: [
              {
                para: 'A consistent social media identity helps customers recognize your business across different platforms. We structure social content around your brand positioning, communication style, visual direction, and business objectives.',
              },

              {
                para: 'This can include content themes, messaging, visual consistency, profile presentation, calls to action, and recurring communication formats.',
              },

              {
                para: 'The objective is to create a recognizable and professional social media presence that supports your overall brand.',
              },
            ],
          },

          {
            item_link_id: 'social-growth',

            heading: 'Social Media Growth',

            descriptions: [
              {
                para: 'Social media growth should focus on reaching the right audience rather than simply increasing follower numbers. We use relevant content, consistent publishing, audience engagement, and platform-specific strategies to improve visibility.',
              },

              {
                para: 'Growth opportunities can include improving content topics, publishing consistency, engagement, profile optimization, audience targeting, and distribution.',
              },

              {
                para: 'The appropriate growth strategy depends on the business, industry, target audience, platform, and marketing objectives.',
              },
            ],
          },

          {
            item_link_id: 'social-performance',

            heading: 'Social Media Performance Analysis',

            descriptions: [
              {
                para: 'Social media performance should be reviewed regularly to understand which content and campaigns are generating useful engagement and business outcomes.',
              },

              {
                para: 'Performance analysis can include reach, impressions, engagement, profile activity, audience growth, website traffic, leads, and other relevant metrics depending on the platform and campaign objectives.',
              },

              {
                para: 'Insights from performance data can be used to improve future content, campaigns, publishing strategies, and audience targeting.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Social Media Management Cost in India"
        costdesc={[
          {
            para: 'The cost of social media management depends on the number of platforms, content volume, publishing frequency, creative requirements, community management, campaign complexity, reporting requirements, and level of ongoing management required.',
          },

          {
            para: 'A small business may require management of one or two social platforms with a focused content calendar, while a larger company may require multiple platforms, frequent content, campaigns, community management, creative production, and ongoing optimization.',
          },

          {
            para: 'Our social media management recommendations are based on your actual requirements. This allows us to prioritize the platforms, content, campaigns, and management activities that can provide the most value for your business.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Social Media Management Cost"
        intro="Every business has different social media requirements. These factors influence the scope, complexity, and investment required."
        facts={[
          'Number of social media platforms',

          'Number of posts per month',

          'Content creation requirements',

          'Graphic design requirements',

          'Video and short-form content',

          'Social media copywriting',

          'Content calendar complexity',

          'Community management',

          'Campaign management',

          'Audience research',

          'Performance reporting',

          'Ongoing optimization requirements',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL SOCIAL MEDIA MANAGEMENT
      ===================================================== */}

      <ServiceComp
        heading="Basic Social Media Posting vs Professional Social Media Management"
        desc="Basic social media posting usually focuses on publishing occasional content. Professional social media management takes a broader approach by combining strategy, content planning, platform management, audience engagement, branding, performance analysis, and continuous optimization. The objective is to turn social media into a structured business communication and marketing channel rather than simply maintaining inactive profiles."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Social Media Management Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Social Media Management Process"
        intro="We follow a structured process to understand your brand, identify the right platforms, plan content, manage your social presence, engage with your audience, and improve performance over time."
        steps={[
          {
            title: 'Business & Audience Analysis',

            description:
              'We understand your business, products, services, target audience, industry, competitors, existing social presence, and marketing objectives.',

            points: [
              'Business analysis',
              'Audience research',
              'Competitor analysis',
              'Marketing objectives',
            ],
          },

          {
            title: 'Social Media Strategy & Planning',

            description:
              'We determine the appropriate platforms, content themes, communication direction, publishing frequency, and social media objectives.',

            points: [
              'Platform selection',
              'Content themes',
              'Content calendar',
              'Campaign planning',
            ],
          },

          {
            title: 'Content Creation & Management',

            description:
              'We develop and manage social media content based on your brand, audience, industry, products, services, and campaign requirements.',

            points: [
              'Social media copy',
              'Content planning',
              'Creative direction',
              'Publishing management',
            ],
          },

          {
            title: 'Publishing & Community Management',

            description:
              'We manage scheduled publishing and monitor relevant audience interactions, comments, messages, and conversations.',

            points: [
              'Content publishing',
              'Audience engagement',
              'Comment monitoring',
              'Message management',
            ],
          },

          {
            title: 'Performance Monitoring',

            description:
              'We review social media performance to understand audience engagement, reach, content performance, and other relevant metrics.',

            points: [
              'Reach analysis',
              'Engagement analysis',
              'Audience growth',
              'Content performance',
            ],
          },

          {
            title: 'Optimization & Growth',

            description:
              'We use performance insights to improve content topics, publishing strategies, audience engagement, and future social media campaigns.',

            points: [
              'Content optimization',
              'Audience insights',
              'Campaign optimization',
              'Growth opportunities',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Social Media Management Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we provide social media management services for startups, local businesses, B2B companies, service providers, manufacturers, eCommerce brands, and growing companies that want to build a stronger digital presence.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, we develop social media strategies based on the target audience, industry, products, services, and markets the business wants to reach.',
          },

          {
            para: 'For businesses targeting customers across India, social media management can support brand awareness, customer engagement, product visibility, website traffic, lead generation, and customer communication.',
          },

          {
            para: 'We also provide social media management services for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global regions. Social strategies can be structured around the target market, audience, platform, brand positioning, and business objectives.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Social Media Management Services?"
        intro="Social media management can benefit businesses that want to build a consistent digital presence, communicate with their audience, increase brand visibility, and use social platforms as part of their wider marketing strategy."
        subintro="Our social media management services are suitable for:"
        points={[
          'Startups building their brand presence',

          'B2B companies communicating with decision-makers',

          'SaaS companies building industry visibility',

          'eCommerce businesses promoting products',

          'Manufacturers showcasing products and capabilities',

          'Professional service businesses',

          'Local businesses targeting nearby customers',

          'Companies launching new products or services',

          'Businesses expanding into new markets',

          'Companies that need consistent social media management',
        ]}
        finalPara="Whether you are starting your social media presence from scratch or want to improve existing profiles, a structured social media strategy can help your business communicate consistently, reach relevant audiences, build brand visibility, and create additional opportunities for engagement and growth."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="Social Media Management Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Build a Stronger Social Media Presence"
        description="Get your business reviewed for social media management opportunities."
      />
    </>
  );
}
