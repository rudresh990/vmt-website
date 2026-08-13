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
  title: 'CI/CD Pipeline Development Company in Mumbai & India',

  description:
    'Build faster and safer with CI/CD pipeline development, deployment automation, testing, and DevOps solutions for businesses across India and global markets.',

  path: '/services/cicd-pipelines',
});

const s_data = serviceData['/services/cicd-pipelines'];

const contents = [
  {
    id: 'cicd1',

    para: 'CI/CD pipelines automate the process of building, testing, and deploying software. They connect development workflows with automated quality checks and deployment environments so teams can deliver application updates faster, more consistently, and with fewer manual errors.',
  },

  {
    id: 'cicd2',

    para: 'Without a structured CI/CD pipeline, development teams often depend on manual builds, testing, server deployments, and release procedures. These processes can slow down development, increase deployment risks, and make it difficult to release frequent updates as applications grow.',
  },

  {
    id: 'cicd3',

    para: 'At Void Matrix Technology, we design and implement CI/CD pipelines for websites, web applications, SaaS platforms, APIs, mobile backends, and enterprise software. Our pipelines can automate code validation, testing, builds, containerization, deployments, database migrations, and release workflows.',
  },

  {
    id: 'cicd4',

    para: 'We work with modern development and cloud environments including GitHub Actions, GitLab CI/CD, Jenkins, Docker, Kubernetes, AWS, Azure, Google Cloud, and other infrastructure platforms based on the requirements of your application and engineering team.',
  },

  {
    id: 'cicd5',

    para: 'Businesses across Mumbai, Pune, Bangalore, Hyderabad, India, and global markets use CI/CD automation to shorten release cycles, improve software quality, reduce deployment risk, and establish reliable engineering workflows for continuous product development.',
  },
];

export default function CICDPipelinesPage() {
  return (
    <>
      <Hero
        eyebrow="CI/CD Pipeline Development Company in Mumbai, India"
        title={
          <>
            Automate Your <span className="text-(--primary)">CI/CD Pipeline</span> For Faster
            Software <span className="text-(--primary)">Delivery</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Build, test, and deploy software with reliable automation.
                </span>
                <br />
                VMT designs CI/CD pipelines for SaaS platforms, web applications, APIs, and
                enterprise software. We automate testing, builds, deployments, container workflows,
                and release processes using modern DevOps practices designed for speed, reliability,
                and scalable software delivery.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                CI/CD Projects from <span className="text-(--primary)">₹40,000</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Automated <span className="text-(--primary)">Deployments</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Automated <span className="text-(--primary)">Testing</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Long-term <span className="text-(--primary)">Support</span>
              </span>
            </div>
          </>
        }
      />

      <WhaIsService heading="What is CI/CD Pipeline Development?" contents={contents} />
      <ServiceCoreSection
        heading="Our CI/CD Pipeline Development Services"
        intro="We build automated software delivery pipelines that connect source control, testing, build systems, infrastructure, and production environments. Our CI/CD solutions help development teams release software faster while improving consistency, quality, deployment reliability, and operational visibility."
        items={[
          {
            item_link: 'pipeline-setup',
            title: 'CI/CD Pipeline Setup',
            description:
              'Design and implement automated build, test, and deployment pipelines for modern applications.',
          },

          {
            item_link: 'testing',
            title: 'Automated Testing Pipelines',
            description:
              'Integrate automated testing and quality checks into your software delivery workflow.',
          },

          {
            item_link: 'deployment',
            title: 'Deployment Automation',
            description:
              'Automate application deployments across development, staging, and production environments.',
          },
        ]}
        details={[
          {
            item_link_id: 'pipeline-setup',

            heading: 'CI/CD Pipeline Setup',

            descriptions: [
              {
                para: 'A properly designed CI/CD pipeline creates a repeatable path from source code to production. We design pipelines around your development workflow, technology stack, infrastructure, and release requirements.',
              },

              {
                para: 'Our CI/CD implementations can automate source-code validation, dependency installation, application builds, testing, artifact creation, environment configuration, and deployment. This reduces manual release work and creates a consistent process for every software update.',
              },

              {
                para: 'We work with platforms such as GitHub Actions, GitLab CI/CD, Jenkins, and cloud-native deployment services to create pipelines suitable for startups, SaaS products, and enterprise engineering teams.',
              },
            ],
          },

          {
            item_link_id: 'testing',

            heading: 'Automated Testing Pipelines',

            descriptions: [
              {
                para: 'Automated testing is an important part of reliable continuous integration. We integrate automated quality checks into CI/CD pipelines so code changes can be validated before reaching production environments.',
              },

              {
                para: 'Depending on your application, pipelines can execute unit tests, integration tests, API tests, linting, type checks, security checks, and other automated validation processes whenever new code is committed or a release is prepared.',
              },

              {
                para: 'Automated testing helps development teams identify problems earlier, reduce regression risks, and maintain consistent software quality as applications become more complex.',
              },
            ],
          },

          {
            item_link_id: 'deployment',

            heading: 'Deployment Automation',

            descriptions: [
              {
                para: 'Manual deployments can introduce configuration mistakes and inconsistent release procedures. We automate application deployment so approved builds can move through development, staging, and production environments using predictable workflows.',
              },

              {
                para: 'Our deployment pipelines can manage environment variables, build artifacts, database migrations, container images, infrastructure configuration, and deployment approvals based on your release strategy.',
              },

              {
                para: 'Automated deployments allow teams to release new features more frequently while reducing repetitive operational work and improving deployment consistency.',
              },
            ],
          },

          {
            item_link_id: 'docker-kubernetes',

            heading: 'Docker & Kubernetes CI/CD Pipelines',

            descriptions: [
              {
                para: 'Containerized applications require deployment workflows capable of building, testing, publishing, and deploying container images consistently. We create CI/CD pipelines for Docker-based applications and Kubernetes environments.',
              },

              {
                para: 'Our pipelines can automatically build container images, run application tests, push approved images to container registries, and deploy releases to Kubernetes environments using controlled workflows.',
              },

              {
                para: 'This approach provides development teams with repeatable container deployments while supporting scalable infrastructure and modern cloud-native application architectures.',
              },
            ],
          },

          {
            item_link_id: 'cloud',

            heading: 'Cloud CI/CD Deployment Pipelines',

            descriptions: [
              {
                para: 'Cloud applications often require automated deployment workflows that integrate source control, cloud infrastructure, application services, databases, and monitoring systems. We build CI/CD pipelines for cloud-based applications and digital products.',
              },

              {
                para: 'Our engineers work with AWS, Microsoft Azure, and Google Cloud environments to create deployment workflows aligned with your infrastructure architecture and application requirements.',
              },

              {
                para: 'Cloud-based CI/CD automation helps teams manage multiple environments, release application updates efficiently, and maintain a consistent deployment process as infrastructure scales.',
              },
            ],
          },

          {
            item_link_id: 'release',

            heading: 'Release, Rollback & Environment Automation',

            descriptions: [
              {
                para: 'Reliable software delivery requires more than simply deploying the latest build. We design release workflows that provide controlled deployments, environment management, approvals, and rollback mechanisms when an issue occurs.',
              },

              {
                para: 'Depending on the architecture, we can implement strategies such as staged releases, deployment approvals, versioned artifacts, automated rollback workflows, and environment-specific configuration.',
              },

              {
                para: 'These practices help engineering teams reduce production risk and respond quickly when a release does not perform as expected.',
              },
            ],
          },
        ]}
      />
      <ServiceCost
        heading="CI/CD Pipeline Development Cost in India"
        costdesc={[
          {
            para: 'The cost of CI/CD pipeline development depends on application complexity, number of environments, testing requirements, deployment targets, cloud infrastructure, security controls, and the level of automation required. A basic pipeline for a small application has very different requirements from an enterprise delivery platform supporting multiple applications and production environments.',
          },

          {
            para: 'CI/CD development may include source-control integration, automated testing, build automation, artifact management, Docker image creation, cloud deployment, Kubernetes workflows, environment configuration, database migrations, approval gates, monitoring, and rollback mechanisms. These requirements determine the overall implementation effort.',
          },

          {
            para: 'At Void Matrix Technology, we design CI/CD pipelines around your existing engineering workflow and technology stack. We focus on practical automation that improves release speed and reliability without introducing unnecessary infrastructure complexity.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors That Affect CI/CD Pipeline Cost"
        intro="Every software delivery environment has different automation requirements. These factors influence the complexity and investment required to build a reliable CI/CD pipeline."
        facts={[
          'Application architecture and technology stack',

          'Number of applications and repositories',

          'Number of development, staging, and production environments',

          'Automated testing requirements',

          'Build and artifact management',

          'Docker and container requirements',

          'Kubernetes deployment requirements',

          'AWS, Azure, or Google Cloud infrastructure',

          'Database migration workflows',

          'Security and code-quality checks',

          'Deployment approval requirements',

          'Rollback and disaster recovery requirements',
        ]}
      />

      <ServiceComp
        heading="Manual Deployment vs CI/CD Pipeline Automation"
        desc="Manual deployment processes require developers or operations teams to repeatedly build applications, run tests, configure environments, transfer files, and deploy releases. CI/CD automation turns these repetitive tasks into consistent, repeatable workflows. Automated pipelines can validate code, run tests, create builds, deploy applications, and provide controlled rollback mechanisms. This allows engineering teams to release software more frequently while reducing human error and deployment risk."
      />

      <CtaButtonRe title="Get CI/CD Pipeline Estimate" url="/contact" />

      <ServiceApproachSection
        heading="Our CI/CD Pipeline Implementation Process"
        intro="A reliable CI/CD pipeline should match your development workflow rather than force your team into an unnecessary process. We assess your application, development practices, infrastructure, and release requirements before designing and implementing the automation."
        steps={[
          {
            title: 'Development Workflow Assessment',

            description:
              'We analyze your repositories, development process, environments, technology stack, release frequency, and existing deployment procedures.',

            points: [
              'Repository assessment',

              'Workflow analysis',

              'Environment review',

              'Release planning',
            ],
          },

          {
            title: 'CI/CD Architecture Design',

            description:
              'We design the pipeline stages, automation rules, testing strategy, deployment flow, security controls, and environment structure.',

            points: [
              'Pipeline architecture',

              'Build strategy',

              'Testing strategy',

              'Deployment planning',
            ],
          },

          {
            title: 'Pipeline Development',

            description:
              'Our engineers implement automated builds, tests, artifact management, deployments, environment configuration, and release workflows.',

            points: [
              'Build automation',

              'Automated testing',

              'Deployment automation',

              'Environment configuration',
            ],
          },

          {
            title: 'Testing & Security Validation',

            description:
              'We validate the pipeline using successful and failure scenarios while checking application quality, security, deployment behavior, and recovery workflows.',

            points: ['Pipeline testing', 'Security checks', 'Failure handling', 'Rollback testing'],
          },

          {
            title: 'Production Deployment & Optimization',

            description:
              'After deployment, we monitor the pipeline and optimize execution time, reliability, resource usage, and release workflows.',

            points: [
              'Production rollout',

              'Pipeline monitoring',

              'Performance optimization',

              'Ongoing improvements',
            ],
          },
        ]}
      />
      <ServiceCost
        heading="CI/CD Pipeline Development Company for Mumbai, Pune, Bangalore, Hyderabad, India & Global Businesses"
        costdesc={[
          {
            para: 'Businesses in Mumbai use CI/CD automation to improve the speed and reliability of software releases across SaaS platforms, web applications, APIs, eCommerce systems, and enterprise software. Our engineers design deployment pipelines that reduce manual release work and create consistent development-to-production workflows.',
          },

          {
            para: 'Across Pune, Bangalore, Hyderabad, and other technology hubs in India, development teams are adopting automated testing, cloud deployment, containerization, and continuous delivery to support faster product development. We help startups and enterprises implement CI/CD pipelines that match their existing engineering practices and technology stack.',
          },

          {
            para: 'For businesses in the USA, UK, UAE, Europe, Australia, and other global markets, we provide remote and offshore CI/CD engineering services. We can build new delivery pipelines, modernize existing deployment processes, automate testing, or improve CI/CD infrastructure for growing software products and enterprise applications.',
          },
        ]}
      />

      <ServiceFitSection
        heading="When Should You Invest in CI/CD Pipeline Automation?"
        intro="CI/CD becomes increasingly valuable as development teams release software more frequently or application complexity makes manual deployment difficult to manage. Automation creates a repeatable path from code changes to production while improving testing, consistency, and release reliability."
        subintro="CI/CD pipeline automation is a strong fit when:"
        points={[
          'Your team deploys applications manually',

          'Software releases take too much time',

          'Developers repeatedly perform the same build and deployment tasks',

          'Production deployments frequently result in configuration errors',

          'You need automated testing before code reaches production',

          'Your SaaS product requires frequent feature releases',

          'You manage separate development, staging, and production environments',

          'Your application is deployed using Docker or Kubernetes',

          'You need controlled deployment approvals and rollback workflows',

          'Your engineering team needs a more reliable software delivery process',
        ]}
        finalPara="CI/CD automation transforms software delivery from a repetitive manual process into a reliable engineering workflow. With automated builds, testing, deployments, and release controls, businesses can deliver improvements faster while reducing operational risk and creating a stronger foundation for continuous product development."
      />

      <MainServiceFAQ heading="CI/CD Pipeline Development FAQs" faqs={s_data.faqs} />

      <MainServiceCTA
        heading="Automate Your Software Delivery"
        description="Build a faster and more reliable CI/CD workflow."
      />
    </>
  );
}
