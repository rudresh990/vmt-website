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
  title: 'Email Marketing Company in Mumbai & India | Email Marketing Services',

  description:
    'Email marketing services for businesses that want to generate leads, nurture customers, increase conversions, and build long-term customer relationships through targeted email campaigns.',

  path: '/services/email-marketing',
});

const s_data = serviceData['/services/email-marketing'];

const contents = [
  {
    id: 'email1',

    para: 'Email marketing is a digital marketing channel that allows businesses to communicate directly with prospects and customers through targeted email campaigns. It can be used for lead nurturing, customer retention, product promotion, sales campaigns, newsletters, announcements, and automated customer communication.',
  },

  {
    id: 'email2',

    para: 'Effective email marketing is more than sending promotional emails to a large contact list. A successful email marketing strategy combines audience segmentation, relevant messaging, compelling copy, campaign design, personalization, automation, and performance tracking to deliver the right message to the right audience.',
  },

  {
    id: 'email3',

    para: 'At VoidMatrix Technology, we provide email marketing services for startups, B2B companies, SaaS businesses, eCommerce brands, service businesses, and growing companies. Our approach focuses on building email campaigns that support measurable business objectives such as lead generation, customer engagement, sales, and retention.',
  },

  {
    id: 'email4',

    para: 'Email marketing can work alongside SEO, paid advertising, social media, landing pages, and CRM systems. Instead of treating email as an isolated marketing channel, we can structure campaigns around the wider customer journey, from acquiring a lead to nurturing the relationship and encouraging conversion.',
  },

  {
    id: 'email5',

    para: 'Businesses can use email marketing for different stages of the customer lifecycle. New leads may receive educational or nurturing campaigns, existing customers may receive product updates and offers, while inactive customers can be targeted through re-engagement campaigns designed to bring them back.',
  },

  {
    id: 'email6',

    para: 'We provide email marketing services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Whether you are starting email marketing from scratch or improving an existing campaign system, we build strategies around your audience, industry, offers, and business goals.',
  },
];

export default function EmailMarketingPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="Email Marketing Company in Mumbai, India"
        title={
          <>
            Turn Email Into a<span className="text-(--primary)"> Growth Channel</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Build stronger relationships with your customers and leads.
                </span>
                <br />
                VoidMatrix provides email marketing services focused on lead nurturing, customer
                engagement, automated campaigns, promotions, retention, and measurable business
                growth across Mumbai, Pune, India, and global markets.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Email <span className="text-(--primary)">Campaigns</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Lead <span className="text-(--primary)">Nurturing</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Marketing <span className="text-(--primary)">Automation</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Customer <span className="text-(--primary)">Retention</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS EMAIL MARKETING?
      ===================================================== */}

      <WhaIsService heading="What Is Email Marketing?" contents={contents} />

      {/* =====================================================
          CORE EMAIL MARKETING SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our Email Marketing Services"
        intro="We build email marketing campaigns around your audience, business goals, customer journey, and conversion objectives. Our email marketing services cover campaign strategy, copywriting, automation, segmentation, personalization, and performance optimization."
        items={[
          {
            item_link: 'email-strategy',

            title: 'Email Marketing Strategy',

            description:
              'Develop an email marketing strategy based on your audience, business goals, customer journey, products, services, and conversion objectives.',
          },

          {
            item_link: 'email-campaigns',

            title: 'Email Campaign Management',

            description:
              'Plan, create, schedule, and manage targeted email campaigns for promotions, newsletters, announcements, product launches, and lead nurturing.',
          },

          {
            item_link: 'email-copywriting',

            title: 'Email Copywriting',

            description:
              'Create clear and persuasive email copy designed to communicate your offer, educate prospects, encourage action, and improve engagement.',
          },

          {
            item_link: 'email-segmentation',

            title: 'Audience Segmentation',

            description:
              'Segment subscribers and customers based on interests, behaviour, customer stage, engagement, purchase history, and other relevant characteristics.',
          },

          {
            item_link: 'email-automation',

            title: 'Email Automation',

            description:
              'Build automated email sequences for lead nurturing, onboarding, follow-ups, abandoned actions, customer retention, and re-engagement.',
          },

          {
            item_link: 'email-personalization',

            title: 'Email Personalization',

            description:
              'Create personalized email experiences using customer information, audience segments, behaviour, interests, and lifecycle stages.',
          },

          {
            item_link: 'email-performance',

            title: 'Email Performance Optimization',

            description:
              'Monitor campaign performance and optimize subject lines, content, calls to action, audience segments, and campaign timing.',
          },
        ]}
        details={[
          {
            item_link_id: 'email-strategy',

            heading: 'Email Marketing Strategy',

            descriptions: [
              {
                para: 'A successful email marketing campaign begins with a clear strategy. We identify your target audience, business objectives, customer journey, products or services, and the role email should play within your wider marketing system.',
              },

              {
                para: 'We can structure campaigns around objectives such as lead generation, lead nurturing, customer retention, product promotion, repeat purchases, customer education, or re-engagement.',
              },

              {
                para: 'The strategy can also be aligned with SEO, paid advertising, landing pages, CRM systems, and other acquisition channels to create a connected customer journey.',
              },
            ],
          },

          {
            item_link_id: 'email-campaigns',

            heading: 'Email Campaign Management',

            descriptions: [
              {
                para: 'Email campaigns can be used for newsletters, promotional offers, product launches, announcements, educational content, seasonal campaigns, and customer communication.',
              },

              {
                para: 'We structure campaigns around a defined objective and audience instead of sending the same message to every subscriber.',
              },

              {
                para: 'Campaign planning can include email frequency, messaging, segmentation, scheduling, calls to action, and performance measurement.',
              },
            ],
          },

          {
            item_link_id: 'email-copywriting',

            heading: 'Email Copywriting',

            descriptions: [
              {
                para: 'Email copy needs to communicate value quickly because subscribers often decide within seconds whether to continue reading. We create concise and relevant messaging based on the audience and campaign objective.',
              },

              {
                para: 'Email copy can include subject lines, preview text, headlines, body content, product messaging, offers, benefits, and calls to action.',
              },

              {
                para: 'The objective is to make every email useful and relevant while guiding the reader toward the intended action.',
              },
            ],
          },

          {
            item_link_id: 'email-segmentation',

            heading: 'Audience Segmentation',

            descriptions: [
              {
                para: 'Different subscribers have different interests, needs, and positions within the customer journey. Audience segmentation allows businesses to create more relevant campaigns for different groups.',
              },

              {
                para: 'Segments can be created using factors such as customer type, interests, engagement level, purchase history, lead stage, location, or other available customer information.',
              },

              {
                para: 'Better segmentation can help businesses avoid sending irrelevant messages and create campaigns that are more closely aligned with subscriber needs.',
              },
            ],
          },

          {
            item_link_id: 'email-automation',

            heading: 'Email Automation',

            descriptions: [
              {
                para: 'Email automation allows businesses to send predefined messages based on customer actions, lifecycle stages, or specific triggers.',
              },

              {
                para: 'Automated workflows can be used for welcome emails, lead nurturing, onboarding, follow-ups, abandoned actions, customer education, re-engagement, and retention campaigns.',
              },

              {
                para: 'Automation reduces repetitive manual work while allowing businesses to maintain consistent communication with leads and customers.',
              },
            ],
          },

          {
            item_link_id: 'email-personalization',

            heading: 'Email Personalization',

            descriptions: [
              {
                para: 'Personalization allows email campaigns to use relevant subscriber information and behaviour to create more targeted communication.',
              },

              {
                para: 'Depending on the available data, personalization can include names, customer segments, product interests, previous interactions, lifecycle stage, or other relevant information.',
              },

              {
                para: 'Personalized campaigns should remain useful and relevant rather than adding personalization simply for the sake of personalization.',
              },
            ],
          },

          {
            item_link_id: 'email-performance',

            heading: 'Email Performance Optimization',

            descriptions: [
              {
                para: 'Email marketing should be measured using meaningful campaign and business metrics. We review engagement and conversion data to identify opportunities for improvement.',
              },

              {
                para: 'Performance analysis can include delivery, opens, clicks, conversions, unsubscribes, engagement, and campaign-level performance where reliable tracking is available.',
              },

              {
                para: 'Insights from campaign performance can be used to improve messaging, segmentation, calls to action, timing, and future campaigns.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="Email Marketing Cost in India"
        costdesc={[
          {
            para: 'The cost of email marketing depends on the number of campaigns, subscriber database size, campaign complexity, content requirements, automation workflows, segmentation requirements, integrations, and level of ongoing management required.',
          },

          {
            para: 'A small business may require a limited number of campaigns and basic automation, while an eCommerce, SaaS, or enterprise business may require multiple customer segments, automated workflows, integrations, personalization, and continuous optimization.',
          },

          {
            para: 'Our email marketing recommendations are based on the actual requirements of your business. This allows us to prioritize the campaigns, automation, content, and optimization work that can provide the most value instead of applying the same package to every business.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect Email Marketing Cost"
        intro="Every business has different email marketing requirements. These factors influence the scope, complexity, and investment required."
        facts={[
          'Number of email campaigns',

          'Subscriber database size',

          'Email campaign frequency',

          'Email copywriting requirements',

          'Audience segmentation',

          'Personalization requirements',

          'Marketing automation workflows',

          'CRM integrations',

          'eCommerce integrations',

          'Email design requirements',

          'Performance tracking',

          'Ongoing optimization requirements',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL EMAIL MARKETING
      ===================================================== */}

      <ServiceComp
        heading="Basic Email Marketing vs Professional Email Marketing"
        desc="Basic email marketing often involves sending occasional promotional emails to a general contact list. Professional email marketing takes a broader approach by combining strategy, audience segmentation, relevant messaging, personalization, automation, campaign management, tracking, and continuous optimization. The objective is to turn email into a structured customer communication and growth channel rather than simply another promotional activity."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get Email Marketing Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our Email Marketing Process"
        intro="We follow a structured process to understand your audience, plan campaigns, build relevant communication, automate customer journeys, and improve email performance over time."
        steps={[
          {
            title: 'Business & Audience Analysis',

            description:
              'We understand your business, products, services, customers, existing database, marketing objectives, and customer journey.',

            points: [
              'Business analysis',
              'Audience research',
              'Customer journey',
              'Marketing objectives',
            ],
          },

          {
            title: 'Email Strategy & Campaign Planning',

            description:
              'We determine which email campaigns and communication workflows are most relevant to your business and audience.',

            points: [
              'Campaign planning',
              'Content themes',
              'Audience segments',
              'Campaign objectives',
            ],
          },

          {
            title: 'Email Content & Campaign Creation',

            description:
              'We create email messaging, subject lines, calls to action, campaign content, and other communication assets required for the campaign.',

            points: ['Email copywriting', 'Subject lines', 'Campaign messaging', 'Calls to action'],
          },

          {
            title: 'Segmentation & Personalization',

            description:
              'We organize audiences into relevant segments and use available customer information to make email communication more targeted.',

            points: [
              'Audience segmentation',
              'Customer groups',
              'Personalization',
              'Lifecycle targeting',
            ],
          },

          {
            title: 'Automation & Integration',

            description:
              'Where required, we create automated email workflows and connect email marketing with relevant CRM, website, eCommerce, or marketing systems.',

            points: [
              'Email automation',
              'CRM integration',
              'Website integration',
              'Customer workflows',
            ],
          },

          {
            title: 'Performance Monitoring & Optimization',

            description:
              'We review campaign performance and identify opportunities to improve engagement, conversions, messaging, segmentation, and future campaigns.',

            points: [
              'Campaign reporting',
              'Engagement analysis',
              'Conversion tracking',
              'Continuous optimization',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="Email Marketing Company in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we develop email marketing campaigns for local businesses, startups, service companies, B2B organizations, eCommerce brands, and growing companies that want to strengthen customer communication and lead nurturing.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, we can create email strategies based on the target audience, industry, products, services, and markets the business wants to reach.',
          },

          {
            para: 'For companies targeting customers across India, email marketing can support lead nurturing, customer retention, product promotion, newsletters, educational campaigns, and repeat customer engagement.',
          },

          {
            para: 'We also provide email marketing services for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other global regions. Campaigns can be structured around the target market, audience, language, customer journey, and business objectives.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs Email Marketing Services?"
        intro="Email marketing can benefit businesses that want to build direct communication with prospects and customers and create a structured channel for nurturing, engagement, sales, and retention."
        subintro="Our email marketing services are suitable for:"
        points={[
          'Startups building their customer communication system',

          'SaaS companies nurturing leads and users',

          'eCommerce businesses promoting products and repeat purchases',

          'B2B companies managing long sales cycles',

          'Service businesses nurturing potential customers',

          'Local businesses communicating with existing customers',

          'Businesses launching new products or services',

          'Companies building customer retention campaigns',

          'Businesses with existing subscriber databases',

          'Companies expanding into new Indian or international markets',
        ]}
        finalPara="Whether you are starting email marketing from scratch or improving an existing campaign system, a structured email strategy can help your business maintain consistent communication, nurture leads, engage customers, and create additional opportunities for conversions and retention."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ heading="Email Marketing Services FAQs" faqs={s_data.faqs} />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Build a Stronger Email Marketing System"
        description="Get your business reviewed for email marketing opportunities."
      />
    </>
  );
}
