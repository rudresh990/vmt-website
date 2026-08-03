import Hero from '@/components/sections/common/Hero';
import { Metadata } from 'next';
import ServiceCoreSection from '@/components/services/ServiceCoreSection';
import ServiceApproachSection from '@/components/services/ServiceApproachSection';
import ServiceFitSection from '@/components/services/ServiceFitSection';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import WhaIsService from '@/components/services/WhatIsService';
import ServiceCost from '@/components/services/ServiceCost';
import ServiceFactors from '@/components/services/ServiceFactors';
import ServiceComp from '@/components/services/ServiceComp';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import { serviceData } from '@/app/lib/schema/data/services_data';
import { buildMetadata } from '@/app/lib/schema/seo';


export const metadata: Metadata = buildMetadata({
  title:
    'Cloud & DevOps Services Company in Mumbai & India',

  description:
    'Scale applications with cloud infrastructure, DevOps automation, CI/CD, and secure cloud solutions for startups and enterprises across India.',

  path:
    '/services/cloud-devops',
});


const s_data = serviceData['/services/cloud-devops'];

const contents = [

  {
    id: 'cloud1',

    para:
      'Cloud and DevOps services help businesses build, deploy, manage, and scale modern applications using secure cloud infrastructure and automated engineering practices. Instead of relying on traditional servers and manual deployments, organizations can use cloud-native technologies, automation, monitoring, and continuous delivery pipelines to improve reliability, performance, and operational efficiency.',
  },


  {
    id: 'cloud2',

    para:
      'Modern digital products require infrastructure that can handle increasing users, frequent updates, security requirements, and global availability. Cloud platforms combined with DevOps practices allow businesses to release software faster, reduce downtime, automate repetitive operations, and maintain consistent performance as applications grow.',
  },


  {
    id: 'cloud3',

    para:
      'At Void Matrix Technology, we design and implement cloud infrastructure, DevOps automation, CI/CD pipelines, containerized deployments, monitoring systems, and scalable cloud architectures using modern technologies such as AWS, Azure, Google Cloud, Docker, Kubernetes, and Infrastructure-as-Code solutions.',
  },


  {
    id: 'cloud4',

    para:
      'Whether you are migrating existing applications to the cloud, launching a SaaS product, improving deployment workflows, or building enterprise-grade infrastructure, our cloud and DevOps engineers create reliable foundations that support long-term business growth.',
  },


  {
    id: 'cloud5',

    para:
      'Businesses across Mumbai, Pune, Bangalore, Hyderabad, India, and global markets use cloud engineering and DevOps automation to improve scalability, strengthen security, reduce infrastructure costs, and accelerate digital transformation.',
  },

];



const engineeringSteps = [

  {
    title:
      'Cloud Infrastructure Assessment',

    description:
      'We analyze your existing infrastructure, application architecture, performance requirements, security needs, and scalability goals before designing the right cloud strategy.',

    points:[
      'Infrastructure audit',
      'Application assessment',
      'Cloud planning',
      'Security review',
    ],
  },


  {
    title:
      'Cloud Architecture Design',

    description:
      'Our engineers design scalable cloud architectures optimized for performance, availability, security, and future expansion.',

    points:[
      'AWS architecture',
      'Azure solutions',
      'Database planning',
      'Network design',
    ],
  },


  {
    title:
      'DevOps Automation',

    description:
      'We automate development and deployment workflows to help teams release software faster with improved reliability and consistency.',

    points:[
      'CI/CD pipelines',
      'Deployment automation',
      'Infrastructure automation',
      'Release management',
    ],
  },


  {
    title:
      'Containerization & Deployment',

    description:
      'Applications are packaged and deployed using modern container technologies to improve portability, scalability, and operational efficiency.',

    points:[
      'Docker containers',
      'Kubernetes deployment',
      'Environment management',
      'Application scaling',
    ],
  },


  {
    title:
      'Monitoring & Optimization',

    description:
      'We implement monitoring, logging, alerts, and optimization strategies to maintain application performance and reliability.',

    points:[
      'Performance monitoring',
      'Error tracking',
      'Resource optimization',
      'Availability monitoring',
    ],
  },


  {
    title:
      'Continuous Cloud Support',

    description:
      'Our engineers provide ongoing cloud management, security updates, infrastructure improvements, and technical support.',

    points:[
      'Cloud maintenance',
      'Security updates',
      'Scaling support',
      'Technical consulting',
    ],
  },

];

export default function CloudDevOpsPage(){

return (

<>


<Hero

  eyebrow="Cloud & DevOps Services Company in Mumbai, India"

  title={
    <>
      Scalable{' '}
      <span className="text-(--primary)">
        Cloud & DevOps
      </span>{' '}
      Solutions For Businesses Across{' '}
      <span className="text-(--primary)">
        India
      </span>
    </>
  }


  herosub={
    <>
      <div className="my-2.5">

        <p>

        <span className="text-white">
          Build faster, deploy smarter, and scale confidently.
        </span>

        <br />

        We help startups and enterprises build secure cloud
        infrastructure, automate deployments, implement CI/CD
        pipelines, and optimize application performance using
        modern DevOps practices. VMT designs reliable cloud
        foundations that support scalable digital products,
        SaaS platforms, and enterprise applications.

        </p>

      </div>
    </>
  }


  subtitle={

    <>
    <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">


      <span>
        Cloud Projects from{' '}
        <span className="text-(--primary)">
          ₹1L
        </span>
      </span>


      <span className="text-glow">
        |
      </span>


      <span>
        CI/CD{' '}
        <span className="text-(--primary)">
          Automation
        </span>
      </span>


      <span className="text-glow">
        |
      </span>


      <span>
        Cloud{' '}
        <span className="text-(--primary)">
          Security
        </span>
      </span>


      <span className="text-glow">
        |
      </span>


      <span>
        Long-term{' '}
        <span className="text-(--primary)">
          Support
        </span>
      </span>


    </div>
    </>

  }

/>


<WhaIsService

 heading="What is Cloud & DevOps?"

 contents={contents}

/>
<ServiceCoreSection

  heading="Our Cloud & DevOps Services"

  intro="Modern businesses require reliable, scalable, and automated infrastructure to support digital growth. Our Cloud and DevOps services help organizations build secure cloud environments, automate deployments, improve operational efficiency, and create technology foundations capable of handling increasing business demands."

  items={[

    {
      item_link: 'cloud-infrastructure',
      title: 'Cloud Infrastructure Development',
      description:
        'Design and build secure, scalable cloud environments for applications and digital products.',
    },


    {
      item_link: 'devops-consulting',
      title: 'DevOps Consulting Services',
      description:
        'Improve development workflows through automation, best practices, and modern DevOps strategies.',
    },


    {
      item_link: 'cicd',
      title: 'CI/CD Pipeline Automation',
      description:
        'Automate software delivery with reliable continuous integration and deployment workflows.',
    },

  ]}



  details={[


    {
      item_link_id: 'cloud-infrastructure',

      heading:
        'Cloud Infrastructure Development',

      descriptions:[

        {
          para:
          'A strong cloud foundation is essential for modern applications. We design and deploy scalable cloud infrastructure that supports high availability, security, performance, and future growth. Our engineers help businesses select the right cloud architecture based on application requirements, traffic expectations, and operational goals.',
        },


        {
          para:
          'We work with leading cloud platforms including AWS, Microsoft Azure, and Google Cloud to build reliable environments using best practices for networking, databases, storage, computing resources, security, and scalability.',
        },


        {
          para:
          'Whether you are launching a new SaaS product, migrating existing applications, or improving enterprise infrastructure, our cloud solutions provide the reliability and flexibility required for long-term success.',
        },

      ],

    },



    {
      item_link_id: 'devops-consulting',

      heading:
        'DevOps Consulting Services',

      descriptions:[

        {
          para:
          'DevOps connects development and operations teams through automation, collaboration, and continuous improvement. Our DevOps consulting services help businesses optimize software delivery processes, reduce deployment risks, and improve engineering efficiency.',
        },


        {
          para:
          'We analyze existing workflows, identify operational bottlenecks, implement automation strategies, and establish practices that enable faster and more reliable software releases.',
        },


        {
          para:
          'From startups building their first production environment to enterprises improving complex infrastructure, we design DevOps strategies aligned with business objectives and technical requirements.',
        },

      ],

    },



    {
      item_link_id: 'cicd',

      heading:
        'CI/CD Pipeline Automation',

      descriptions:[

        {
          para:
          'Continuous Integration and Continuous Deployment (CI/CD) enables teams to build, test, and release software faster while maintaining quality and reliability. We create automated pipelines that streamline development workflows and reduce manual deployment errors.',
        },


        {
          para:
          'Our CI/CD implementations include automated testing, build automation, deployment workflows, environment management, version control integration, and release automation for web applications, SaaS platforms, and enterprise software.',
        },


        {
          para:
          'By automating software delivery, businesses can release new features faster, improve developer productivity, and maintain consistent deployment processes across environments.',
        },

      ],

    },



    {
      item_link_id: 'migration',

      heading:
        'Cloud Migration Services',

      descriptions:[

        {
          para:
          'Moving applications to the cloud requires careful planning to avoid downtime, data loss, and performance issues. Our cloud migration services help businesses transition existing applications, databases, and infrastructure to secure cloud environments.',
        },


        {
          para:
          'We handle migration planning, architecture redesign, data transfer, application optimization, security configuration, and post-migration monitoring to ensure a smooth transition.',
        },


        {
          para:
          'Cloud migration enables organizations to improve scalability, reduce infrastructure limitations, increase reliability, and adopt modern cloud capabilities.',
        },

      ],

    },



    {
      item_link_id: 'kubernetes',

      heading:
      'Docker & Kubernetes Deployment',

      descriptions:[

        {
          para:
          'Containerization allows applications to run consistently across different environments while improving scalability and deployment efficiency. We use Docker and Kubernetes to create portable, automated, and resilient application environments.',
        },


        {
          para:
          'Our container solutions include application containerization, Kubernetes orchestration, cluster management, scaling strategies, and production deployment workflows.',
        },


        {
          para:
          'Container-based infrastructure helps businesses improve reliability, simplify deployments, and efficiently manage applications as user demand increases.',
        },

      ],

    },



    {
      item_link_id: 'monitoring',

      heading:
      'Cloud Monitoring & Security',

      descriptions:[

        {
          para:
          'Cloud environments require continuous monitoring to maintain security, availability, and performance. We implement monitoring systems that track infrastructure health, application performance, errors, and potential security issues.',
        },


        {
          para:
          'Our cloud security practices include access management, vulnerability monitoring, backup strategies, security updates, logging, and infrastructure optimization.',
        },


        {
          para:
          'With proactive monitoring and security management, businesses can reduce downtime, protect critical data, and maintain reliable digital operations.',
        },

      ],

    },


  ]}

/>
<ServiceCost

  heading="Cloud & DevOps Services Cost in India"

  costdesc={[

    {
      para:
      'The cost of Cloud and DevOps services depends on your infrastructure requirements, application complexity, cloud platform selection, automation needs, security requirements, and ongoing operational support. A startup launching a new SaaS product will have different requirements compared to an enterprise managing large-scale applications and multiple environments.',
    },


    {
      para:
      'Cloud engineering costs may include infrastructure architecture, cloud migration, server configuration, CI/CD automation, container deployment, monitoring systems, security implementation, database management, and continuous optimization. The right DevOps approach reduces operational costs over time by improving efficiency and preventing infrastructure issues.',
    },


    {
      para:
      'At Void Matrix Technology, we design cloud and DevOps solutions based on your business goals rather than unnecessary infrastructure complexity. Whether you need cloud migration, deployment automation, scalable architecture, or managed DevOps support, we create solutions that deliver reliability, performance, and long-term value.',
    },

  ]}

/>



<ServiceFactors

  heading="Factors That Affect Cloud & DevOps Cost"

  intro="Cloud and DevOps investment varies based on technical requirements, application scale, automation maturity, and business objectives. Understanding these factors helps businesses choose the right infrastructure strategy."

  facts={[

    'Cloud platform selection (AWS, Azure, Google Cloud)',

    'Application architecture complexity',

    'Cloud migration requirements',

    'Infrastructure size and resources',

    'CI/CD pipeline requirements',

    'Containerization and Kubernetes setup',

    'Database architecture',

    'Security and compliance requirements',

    'Monitoring and logging systems',

    'Backup and disaster recovery',

    'Performance optimization',

    'Managed DevOps support requirements',

  ]}

/>



<ServiceComp

  heading="Traditional Hosting vs Cloud & DevOps"

  desc="Traditional hosting environments often require manual deployments, limited scalability, and reactive infrastructure management. Cloud and DevOps practices provide automated deployments, flexible scaling, improved reliability, better monitoring, and stronger security controls. By adopting cloud-native infrastructure and automation, businesses can reduce operational risks, release software faster, and build technology platforms prepared for future growth."

/>



<CtaButtonRe

  title="Get Cloud Architecture Consultation"

  url="/contact"

/>



<ServiceApproachSection

  heading="Our Cloud & DevOps Implementation Process"

  intro="A successful cloud strategy requires more than moving applications to servers. Our approach combines architecture planning, automation, security, deployment optimization, and continuous improvement to create reliable infrastructure that supports business growth."

  steps={engineeringSteps}

/>
<ServiceCost

  heading="Cloud & DevOps Services for Mumbai, Pune, Bangalore, Hyderabad, India & Global Businesses"

  costdesc={[

    {
      para:
      'Businesses in Mumbai are rapidly adopting cloud technologies to improve scalability, security, and operational efficiency. Our Cloud and DevOps services help startups, enterprises, and growing businesses build reliable infrastructure for SaaS platforms, web applications, enterprise software, and digital products.',
    },


    {
      para:
      'Across Pune, Bangalore, Hyderabad, and other technology hubs in India, organizations require modern cloud architectures that support faster releases, automated deployments, and high-performance applications. We help engineering teams implement DevOps practices, cloud migration strategies, CI/CD automation, containerization, and infrastructure optimization.',
    },


    {
      para:
      'For global businesses across the USA, UK, UAE, Europe, Australia, and other international markets, we provide offshore Cloud and DevOps engineering support. From cloud architecture and migration to automation and ongoing infrastructure management, our solutions help organizations build secure and scalable digital platforms.',
    },

  ]}

/>



<ServiceFitSection

  heading="When Should You Invest in Cloud & DevOps?"

  intro="Cloud and DevOps become essential when businesses need reliable infrastructure, faster software delivery, better scalability, and improved operational efficiency. Instead of managing infrastructure manually, modern engineering practices help organizations automate processes and build technology platforms ready for growth."

  subintro="Cloud & DevOps services are ideal when:"

  points={[

    'Your application needs better scalability as users and traffic increase',

    'Your team spends too much time on manual deployments',

    'You want faster and more reliable software releases',

    'Your business is migrating applications to the cloud',

    'Your infrastructure requires better monitoring and security',

    'You need automated CI/CD pipelines for development teams',

    'Your application requires containerization using Docker or Kubernetes',

    'Your current hosting environment cannot support business growth',

    'You need high availability and disaster recovery planning',

    'You require a long-term cloud engineering partner',

  ]}


  finalPara=
  "Cloud and DevOps are not just infrastructure upgrades—they are the foundation for building reliable, scalable, and future-ready digital businesses. With the right cloud strategy and automation approach, organizations can release faster, operate efficiently, and confidently scale their technology."

/>
<MainServiceFAQ

  heading="Cloud & DevOps FAQs"

  faqs={s_data.faqs}

/>


<MainServiceCTA

  heading="Build a Scalable Cloud Foundation"

  description="Let's optimize your infrastructure with modern Cloud & DevOps solutions."
/>
</>
);
}