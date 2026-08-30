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
  title: 'UX Research Company in Mumbai & India | UX Research Services',

  description:
    'UX research services for websites, SaaS products, mobile apps, and digital platforms using user research, usability testing, interviews, surveys, and data-driven UX insights.',

  path: '/services/ux-research',
});

const s_data = serviceData['/services/ux-research'];

const contents = [
  {
    id: 'uxresearch1',

    para: 'UX research is the process of understanding users, their needs, behaviors, expectations, problems, and decision-making patterns before or during the design of a digital product. It provides evidence that helps businesses make better product, website, and user experience decisions instead of relying only on assumptions.',
  },

  {
    id: 'uxresearch2',

    para: 'Effective UX research helps identify what users are trying to accomplish, where they experience friction, why they abandon a process, what information they expect to find, and how they interact with a website, SaaS product, mobile application, or digital platform.',
  },

  {
    id: 'uxresearch3',

    para: 'At VoidMatrix Technology, we provide UX research services for websites, SaaS products, mobile applications, eCommerce platforms, enterprise applications, and digital products. Our research can include user interviews, usability testing, surveys, competitor research, user journey analysis, and behavioral research.',
  },

  {
    id: 'uxresearch4',

    para: 'Our UX research process combines qualitative and quantitative research methods based on the product, audience, research objective, and available data. We use research findings to identify usability problems, customer expectations, conversion barriers, product opportunities, and areas where the user experience can be improved.',
  },

  {
    id: 'uxresearch5',

    para: 'UX research is particularly valuable when businesses are redesigning an existing website or application, launching a new product, improving conversion rates, validating product ideas, or trying to understand why users are not completing important actions.',
  },

  {
    id: 'uxresearch6',

    para: 'We provide UX research services for businesses in Mumbai, Pune, Bangalore, Hyderabad, across India, and international markets. Research methodologies can be adapted for B2B products, SaaS platforms, eCommerce businesses, consumer applications, enterprise software, and other digital experiences.',
  },
];

export default function UXResearchPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero
        eyebrow="UX Research Company in Mumbai, India"
        title={
          <>
            Understand Your Users
            <span className="text-(--primary)"> Before You Design</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Make product and design decisions based on real user behavior and evidence.
                </span>
                <br />
                VoidMatrix provides UX research services covering user interviews, usability
                testing, surveys, user journeys, competitor research, and behavioral analysis for
                websites, SaaS products, mobile apps, and digital platforms.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                User <span className="text-(--primary)">Research</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Usability <span className="text-(--primary)">Testing</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                User <span className="text-(--primary)">Interviews</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Data-Driven <span className="text-(--primary)">UX</span>
              </span>
            </div>
          </>
        }
      />

      {/* =====================================================
          WHAT IS UX RESEARCH?
      ===================================================== */}

      <WhaIsService
        heading="What Is UX Research?"
        contents={contents}
      />

      {/* =====================================================
          CORE UX RESEARCH SERVICES
      ===================================================== */}

      <ServiceCoreSection
        heading="Our UX Research Services"
        intro="We use structured research methods to understand users, identify usability problems, validate product decisions, and uncover opportunities to create better digital experiences. Our UX research strategy is selected according to the product, audience, business objective, and research question."
        items={[
          {
            item_link: 'user-interviews',
            title: 'User Interviews',
            description:
              'Conduct structured conversations with users to understand their goals, expectations, frustrations, motivations, and decision-making behavior.',
          },

          {
            item_link: 'usability-testing',
            title: 'Usability Testing',
            description:
              'Observe users interacting with websites, applications, and product interfaces to identify usability problems and areas of friction.',
          },

          {
            item_link: 'user-surveys',
            title: 'User Surveys',
            description:
              'Collect structured feedback from larger user groups to identify patterns, preferences, satisfaction levels, and recurring problems.',
          },

          {
            item_link: 'user-journey-research',
            title: 'User Journey Research',
            description:
              'Analyze the complete user journey to identify touchpoints, friction, drop-off areas, expectations, and opportunities for improvement.',
          },

          {
            item_link: 'competitor-ux-research',
            title: 'Competitor UX Research',
            description:
              'Study competing digital experiences to identify usability patterns, product expectations, feature opportunities, and experience gaps.',
          },

          {
            item_link: 'behavioral-analysis',
            title: 'Behavioral & Product Analysis',
            description:
              'Use available product and website data to identify behavioral patterns and understand where users encounter difficulties.',
          },

          {
            item_link: 'ux-research-recommendations',
            title: 'UX Research Recommendations',
            description:
              'Convert research findings into practical UX recommendations that designers, product teams, and developers can use.',
          },
        ]}
        details={[
          {
            item_link_id: 'user-interviews',

            heading: 'User Interviews',

            descriptions: [
              {
                para: 'User interviews help uncover the motivations, expectations, problems, and experiences that may not be visible through analytics alone. We structure interviews around specific research objectives rather than collecting unfocused feedback.',
              },

              {
                para: 'Questions can explore how users currently solve a problem, what influences their decisions, what prevents them from completing an action, and what they expect from a product or service.',
              },

              {
                para: 'Interview findings can be used to identify recurring user needs, assumptions that require validation, usability concerns, and opportunities for product or experience improvements.',
              },
            ],
          },

          {
            item_link_id: 'usability-testing',

            heading: 'Usability Testing',

            descriptions: [
              {
                para: 'Usability testing evaluates how easily users can complete important tasks within a website, application, or digital product.',
              },

              {
                para: 'We can test navigation, forms, onboarding, checkout flows, search functionality, account creation, product discovery, dashboards, and other important user journeys.',
              },

              {
                para: 'The objective is to identify friction, confusion, unnecessary steps, unclear messaging, navigation problems, and other usability issues that may affect the user experience.',
              },
            ],
          },

          {
            item_link_id: 'user-surveys',

            heading: 'User Surveys',

            descriptions: [
              {
                para: 'Surveys can provide structured feedback from a larger group of users and help identify patterns that may require deeper investigation.',
              },

              {
                para: 'We help structure survey questions around research objectives such as customer satisfaction, product expectations, usability concerns, feature preferences, and user behavior.',
              },

              {
                para: 'Survey findings can be combined with qualitative research and product data to build a more complete understanding of the user experience.',
              },
            ],
          },

          {
            item_link_id: 'user-journey-research',

            heading: 'User Journey Research',

            descriptions: [
              {
                para: 'User journey research examines how customers move through different stages of interacting with a business, product, or digital platform.',
              },

              {
                para: 'We identify important touchpoints, user expectations, friction areas, information gaps, conversion barriers, and points where users may abandon the journey.',
              },

              {
                para: 'Journey research is useful for websites, eCommerce platforms, SaaS products, applications, lead-generation funnels, and complex enterprise workflows.',
              },
            ],
          },

          {
            item_link_id: 'competitor-ux-research',

            heading: 'Competitor UX Research',

            descriptions: [
              {
                para: 'Competitor UX research helps businesses understand how alternative products and websites solve similar user problems.',
              },

              {
                para: 'We review navigation structures, onboarding flows, product discovery, information architecture, conversion journeys, messaging, and other relevant experience patterns.',
              },

              {
                para: 'The objective is not to copy competitors but to understand user expectations, identify experience gaps, and discover opportunities for differentiation.',
              },
            ],
          },

          {
            item_link_id: 'behavioral-analysis',

            heading: 'Behavioral & Product Analysis',

            descriptions: [
              {
                para: 'Existing website and product data can provide valuable evidence about how users interact with a digital experience.',
              },

              {
                para: 'Where appropriate, we analyze available behavioral information such as conversion paths, engagement patterns, navigation behavior, funnel drop-offs, and other relevant product signals.',
              },

              {
                para: 'Behavioral analysis can help prioritize research questions and identify areas that require deeper usability investigation.',
              },
            ],
          },

          {
            item_link_id: 'ux-research-recommendations',

            heading: 'UX Research Recommendations',

            descriptions: [
              {
                para: 'Research is most valuable when findings can be converted into practical decisions. We organize research findings into clear observations, usability problems, user needs, opportunities, and recommendations.',
              },

              {
                para: 'Recommendations can support UX designers, product managers, developers, marketing teams, and business stakeholders during product or website improvements.',
              },

              {
                para: 'The final objective is to reduce assumption-driven design decisions and provide teams with clearer evidence for prioritizing UX improvements.',
              },
            ],
          },
        ]}
      />

      {/* =====================================================
          COST
      ===================================================== */}

      <ServiceCost
        heading="UX Research Cost in India"
        costdesc={[
          {
            para: 'The cost of UX research depends on the research objective, number of users, research methodology, product complexity, number of user segments, number of journeys being evaluated, and depth of analysis required.',
          },

          {
            para: 'A small website project may require focused usability research around a few important journeys, while a SaaS platform or enterprise application may require research across multiple user roles, workflows, and product areas.',
          },

          {
            para: 'Our UX research recommendations are based on the actual research questions and product requirements. This allows us to select appropriate research methods instead of applying the same research process to every project.',
          },
        ]}
      />

      {/* =====================================================
          FACTORS
      ===================================================== */}

      <ServiceFactors
        heading="Factors That Affect UX Research Cost"
        intro="UX research projects differ significantly depending on the product, audience, research objectives, and methodology. These factors influence the scope and investment required."
        facts={[
          'Research objectives',

          'Number of user segments',

          'Number of participants',

          'Research methodology',

          'User interview requirements',

          'Usability testing requirements',

          'Survey requirements',

          'Product complexity',

          'Number of user journeys',

          'Competitor research scope',

          'Existing product data',

          'Depth of research analysis',
        ]}
      />

      {/* =====================================================
          BASIC VS PROFESSIONAL UX RESEARCH
      ===================================================== */}

      <ServiceComp
        heading="Basic User Feedback vs Professional UX Research"
        desc="Basic user feedback often consists of informal opinions, feature requests, or general comments from customers. Professional UX research uses structured research questions, appropriate methodologies, participant feedback, behavioral evidence, usability observations, and systematic analysis to identify meaningful patterns. The objective is to understand why users behave in a particular way and provide evidence that can support better product and design decisions."
      />

      {/* =====================================================
          CTA
      ===================================================== */}

      <CtaButtonRe title="Get UX Research Estimate" url="/contact" />

      {/* =====================================================
          APPROACH
      ===================================================== */}

      <ServiceApproachSection
        heading="Our UX Research Process"
        intro="We follow a structured research process to understand users, investigate important product questions, identify usability problems, and convert findings into actionable UX recommendations."
        steps={[
          {
            title: 'Research Objective Definition',

            description:
              'We first identify what the business and product team need to learn from the research so the study remains focused on meaningful questions.',

            points: [
              'Research objectives',

              'Business questions',

              'User problems',

              'Research scope',
            ],
          },

          {
            title: 'User & Audience Research',

            description:
              'We identify relevant user groups and understand their needs, behaviors, expectations, workflows, and relationship with the product.',

            points: [
              'User segments',

              'Audience analysis',

              'User needs',

              'Behavior patterns',
            ],
          },

          {
            title: 'Research Method Selection',

            description:
              'We select appropriate qualitative and quantitative research methods based on the product, audience, research questions, and available data.',

            points: [
              'User interviews',

              'Usability testing',

              'Surveys',

              'Behavioral analysis',
            ],
          },

          {
            title: 'Research Execution',

            description:
              'We conduct the selected research activities and collect structured observations, feedback, behavioral evidence, and user insights.',

            points: [
              'Interview research',

              'Usability studies',

              'User feedback',

              'Journey analysis',
            ],
          },

          {
            title: 'Analysis & Insight Development',

            description:
              'We organize the research findings to identify recurring problems, user needs, friction points, behavioral patterns, and opportunities.',

            points: [
              'Research analysis',

              'Pattern identification',

              'Usability findings',

              'Opportunity mapping',
            ],
          },

          {
            title: 'UX Recommendations',

            description:
              'We convert research findings into practical recommendations that can guide UX design, product decisions, development, and future research.',

            points: [
              'UX recommendations',

              'Priority areas',

              'Design opportunities',

              'Product improvements',
            ],
          },
        ]}
      />

      {/* =====================================================
          MUMBAI / PUNE / INDIA / GLOBAL
      ===================================================== */}

      <ServiceCost
        heading="UX Research Services in Mumbai, Pune, India & Global Markets"
        costdesc={[
          {
            para: 'For businesses in Mumbai, we conduct UX research for websites, SaaS platforms, eCommerce businesses, mobile applications, and digital products targeting local and commercial audiences.',
          },

          {
            para: 'For businesses in Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian cities, research can be adapted to B2B products, technology companies, startups, enterprise applications, and consumer digital experiences.',
          },

          {
            para: 'For businesses targeting customers across India, UX research can help understand different customer segments, product expectations, user journeys, and usability challenges across broader markets.',
          },

          {
            para: 'We also provide UX research services for businesses targeting international markets including the USA, UK, UAE, Europe, Australia, and other regions. Research methodologies can be adapted to the target market, product, audience, and research objectives.',
          },
        ]}
      />

      {/* =====================================================
          SERVICE FIT
      ===================================================== */}

      <ServiceFitSection
        heading="Who Needs UX Research Services?"
        intro="UX research is useful for businesses that want to understand their users before making important product, website, or interface decisions."
        subintro="Our UX research services are suitable for:"
        points={[
          'SaaS companies',

          'eCommerce businesses',

          'B2B companies',

          'Technology companies',

          'Mobile app businesses',

          'Startups',

          'Enterprise software companies',

          'Digital product teams',

          'Businesses redesigning websites',

          'Businesses targeting international markets',
        ]}
        finalPara="Whether you are validating a new product, redesigning an existing platform, investigating usability problems, or trying to understand customer behavior, UX research can provide evidence that helps your team make better design and product decisions."
      />

      {/* =====================================================
          FAQ
      ===================================================== */}

      <MainServiceFAQ
        heading="UX Research Services FAQs"
        faqs={s_data.faqs}
      />

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <MainServiceCTA
        heading="Make Better Decisions With User Research"
        description="Understand your users, identify UX problems, and build digital experiences around real user needs."
      />
    </>
  );
}