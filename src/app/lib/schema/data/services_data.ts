type servicePage = {
  name?: string;
  description: string;
  faqs: { q: string; a: string }[];
  serviceType?: string;
  offer?: [number, number];
};
export const serviceData = {
  '/services/custom-software-development': {
    name: 'custom software development',
    description:
      'We provide custom software development services in India, helping startups, SMEs, and enterprises build scalable, secure, and high-performance digital solutions. Our team designs and develops tailored web applications, enterprise systems, SaaS platforms, automation tools, and business process software aligned with Indian market needs and regulatory requirements. From Mumbai, Delhi, Bangalore, and other major Indian cities, we support businesses across fintech, healthcare, eCommerce, logistics, manufacturing, and consulting sectors. Our development approach focuses on performance optimization, data security, cloud scalability, and long-term maintainability. We offer end-to-end services including requirement analysis, UI/UX design, architecture planning, full-stack development, API integration, cloud deployment, and ongoing support. Whether you need enterprise software, CRM/ERP systems, or custom automation solutions, we build technology that improves operational efficiency and drives measurable growth in the Indian business ecosystem.',
    faqs: [
      {
        q: 'How much does custom software development cost in India?',
        a: 'Custom software development in India typically ranges from ₹3,00,000 to ₹25,00,000+, depending on complexity, integrations, features, and scalability requirements. Simple internal business tools cost less, while enterprise-grade platforms with cloud architecture, AI integration, and multi-user systems require larger investments. At VMT, we provide transparent cost breakdowns based on your exact business needs.',
      },
      {
        q: 'How long does it take to build custom software?',
        a: 'Development timelines vary based on project scope. A basic MVP can take 6-10 weeks, while enterprise software solutions may require 4–8 months. The timeline depends on feature depth, integrations, UI/UX complexity, and testing cycles. We follow an agile methodology to ensure faster delivery and iterative improvements.',
      },
      {
        q: 'Why choose custom software over off-the-shelf solutions?',
        a: 'Off-the-shelf software limits customization and scalability. Custom software is built specifically for your business workflows, operational systems, and long-term growth strategy. It provides better integration, higher performance, improved security, and complete ownership of your technology infrastructure.',
      },
      {
        q: 'Which industries benefit from custom software development?',
        a: 'Industries such as healthcare, fintech, logistics, manufacturing, eCommerce, and enterprise consulting benefit significantly from custom software solutions. Any business with unique operational workflows or scalability requirements gains long-term efficiency and competitive advantage through tailored software systems.',
      },
      {
        q: 'What technologies do you use for custom software development?',
        a: 'We use modern and scalable technologies including React, Next.js, Node.js, Python, cloud platforms (AWS, Azure), and secure database architectures. Technology selection depends on performance needs, scalability goals, and integration requirements.',
      },
      {
        q: 'Do you provide cloud deployment and DevOps support?',
        a: 'Yes, we provide full cloud deployment, CI/CD pipelines, server configuration, DevOps automation, and infrastructure scaling. Our architecture-first approach ensures your custom software runs securely and efficiently in cloud environments.',
      },
      {
        q: 'How do you ensure software security?',
        a: 'We implement secure coding practices, role-based access control, encrypted data handling, secure APIs, and regular security audits. Our development approach aligns with global security standards to protect business-critical data.',
      },
      {
        q: 'Do you offer post-launch maintenance and support?',
        a: 'Yes. We provide long-term maintenance, performance optimization, feature upgrades, and scaling support. Custom software is an evolving system, and we ensure continuous improvement as your business grows.',
      },
      {
        q: 'Can custom software scale as my business grows?',
        a: 'Absolutely. We design scalable architectures that handle increasing users, transactions, and integrations. From startups to enterprise systems, our solutions are built for long-term growth.',
      },
      {
        q: 'Do you sign NDAs and ensure confidentiality?',
        a: 'Yes, we sign Non-Disclosure Agreements (NDAs) before project discussions. Protecting your intellectual property, business strategy, and sensitive data is a top priority.',
      },
    ],
    offer: [300000, 2500000],
  },
  '/services/website-development': {
    name: 'website development',
    description:
      'We provide professional website development services in India, helping startups, SMEs, and enterprises build high-performance, scalable, and search-optimized websites. Our team designs and develops modern business websites, corporate platforms, product landing pages, marketing sites, and web portals tailored for Indian and global markets. From Mumbai, Delhi, Bangalore, and other major Indian cities, we work with companies across technology, fintech, healthcare, eCommerce, consulting, and service industries. Our development process focuses on fast performance, responsive design, SEO-friendly architecture, and long-term maintainability. We deliver end-to-end website development including UI/UX design, frontend engineering, backend integration, CMS development, SEO optimization, and cloud deployment. Whether you need a corporate website, startup landing platform, or a scalable marketing site, we build digital experiences that strengthen your brand and support business growth.',
    faqs: [
      {
        q: 'How much does website development cost in India?',
        a: 'Website development cost in India typically ranges from ₹25,000 to ₹3,00,000 depending on design complexity, features, integrations, and scalability requirements. A basic business website costs less, while dynamic and ecommerce platforms require higher investment. At Void Matrix Technology, we provide transparent pricing based on your exact business goals and scope.',
      },
      {
        q: 'How long does it take to build a business website?',
        a: 'Most professional business websites take 3-6 weeks from planning to launch. Ecommerce websites or dynamic platforms with custom functionality may take longer depending on features, integrations, and approval cycles.',
      },
      {
        q: 'Do you provide SEO with website development?',
        a: 'Yes. Every website we build includes SEO-friendly architecture, mobile-first development, optimized page structure, and performance improvements to help your business rank better on search engines.',
      },
      {
        q: 'Can you redesign my existing website without losing SEO rankings?',
        a: 'Yes. We carefully restructure and modernize outdated websites while preserving existing SEO value, improving speed, usability, and overall performance.',
      },
      {
        q: 'Do you offer website maintenance and long-term support?',
        a: 'Yes. We provide ongoing website maintenance, performance monitoring, security updates, and scalability planning to ensure long-term stability and growth.',
      },
      {
        q: 'Do you provide website development services in Mumbai and Pune?',
        a: 'Yes. We actively work with startups, SMEs, and enterprises in Mumbai and Pune. Our remote-first collaboration model ensures smooth communication, structured project management, and timely delivery regardless of location.',
      },
      {
        q: 'Why choose a professional website development company in Mumbai instead of a freelancer?',
        a: 'A professional website development company provides structured planning, scalable architecture, ongoing support, and accountability. While freelancers may offer lower upfront costs, businesses often benefit from long-term reliability, SEO-focused development, and technical support provided by an experienced team.',
      },
    ],
    offer: [25000, 500000],
  },
  '/services/enterprise-software-development': {
    name: 'enterprise software development',
    description:
      'We provide enterprise software development services in India, helping organizations build scalable digital infrastructure for complex business operations. Our team designs and develops ERP systems, enterprise dashboards, workflow automation platforms, internal management systems, and data-driven business applications. From Mumbai, Pune, Bangalore, and other major technology hubs in India, we support enterprises across fintech, healthcare, logistics, manufacturing, SaaS, and consulting industries. Our enterprise development approach focuses on scalability, performance optimization, data security, and long-term maintainability. We provide end-to-end enterprise software services including architecture design, cloud infrastructure planning, system integrations, API development, DevOps automation, and enterprise-grade deployment. Our solutions help businesses streamline operations, improve decision-making, and scale their digital capabilities across departments and global markets.',
    faqs: [
      {
        q: 'What is enterprise software development?',
        a: 'Enterprise software development focuses on building large-scale applications that support complex organizational operations such as ERP systems, workflow automation, analytics dashboards, and internal management platforms.',
      },
      {
        q: 'How much does enterprise software development cost in India?',
        a: 'Enterprise software development in India typically ranges from ₹5,00,000 to ₹40,00,000 depending on system complexity, integrations, user roles, and scalability requirements.',
      },
      {
        q: 'Which industries require enterprise software?',
        a: 'Industries such as fintech, logistics, healthcare, manufacturing, SaaS, and consulting rely heavily on enterprise software to manage operations and large-scale data workflows.',
      },
      {
        q: 'How long does enterprise software development take?',
        a: 'Enterprise software projects typically take 3–8 months depending on system architecture, integrations, testing cycles, and feature requirements.',
      },
      {
        q: 'Do you build custom ERP systems?',
        a: 'Yes. We design and build custom ERP systems that integrate finance, operations, HR, and inventory management into a unified platform.',
      },
      {
        q: 'Do you provide enterprise system integrations?',
        a: 'Yes. We integrate enterprise software with payment systems, analytics platforms, CRMs, ERPs, and third-party APIs.',
      },
      {
        q: 'Can enterprise software scale with business growth?',
        a: 'Yes. Our enterprise architecture is designed to scale with growing users, data, and operational requirements.',
      },
      {
        q: 'Do you provide enterprise software services in Mumbai and Pune?',
        a: 'Yes. We actively support enterprises and startups in Mumbai and Pune with scalable enterprise software systems.',
      },
    ],
    offer: [500000, 4000000],
  },

  '/services/platform-engineering': {
    name: 'platform engineering',
    description:
      'We provide platform engineering services in India, helping technology companies build scalable cloud infrastructure and developer platforms. Our team designs internal developer platforms, CI/CD pipelines, cloud-native infrastructure, DevOps automation systems, and scalable deployment environments for high-growth startups and enterprises. From Mumbai, Pune, Bangalore, and other technology ecosystems in India, we support SaaS companies, fintech startups, and enterprise engineering teams that require reliable infrastructure for rapid product development. Our platform engineering approach focuses on automation, infrastructure standardization, cloud scalability, and developer productivity. We build modern engineering platforms using Kubernetes, container orchestration, automated pipelines, infrastructure-as-code, and secure cloud architectures. Our solutions enable engineering teams to deploy faster, scale efficiently, and maintain reliable production systems.',
    faqs: [
      {
        q: 'What is platform engineering?',
        a: 'Platform engineering focuses on building internal developer platforms and infrastructure systems that enable engineering teams to develop, deploy, and scale software efficiently.',
      },
      {
        q: 'How is platform engineering different from DevOps?',
        a: 'DevOps focuses on collaboration between development and operations teams, while platform engineering builds reusable infrastructure platforms that automate development workflows.',
      },
      {
        q: 'How much do platform engineering services cost in India?',
        a: 'Platform engineering projects in India typically range from ₹4,00,000 to ₹30,00,000 depending on infrastructure complexity, automation systems, and cloud architecture.',
      },
      {
        q: 'Which companies need platform engineering?',
        a: 'Technology startups, SaaS companies, fintech platforms, and enterprises with large engineering teams benefit the most from platform engineering.',
      },
      {
        q: 'Do you build CI/CD pipelines?',
        a: 'Yes. We design automated CI/CD pipelines that streamline testing, deployment, and software delivery workflows.',
      },
      {
        q: 'Do you work with cloud platforms?',
        a: 'Yes. We build scalable infrastructure on AWS, Azure, and other cloud platforms depending on project requirements.',
      },
      {
        q: 'Do you provide platform engineering services in Mumbai and Pune?',
        a: 'Yes. We work with startups and technology companies across Mumbai and Pune to build scalable engineering platforms.',
      },
    ],
    offer: [400000, 3000000],
  },

  '/services/api-integration': {
    name: 'api development and integrations',
    description:
      'We provide API development and integration services in India, helping businesses connect software systems, third-party services, and digital platforms through secure and scalable APIs. Our team builds REST APIs, GraphQL APIs, microservice communication layers, and enterprise integration systems that power modern applications. From Mumbai, Pune, Bangalore, and other technology hubs across India, we support startups and enterprises integrating payment gateways, CRM systems, ERP platforms, logistics services, analytics tools, and SaaS products. Our API engineering approach focuses on reliability, performance optimization, and secure authentication systems. We develop API-first architectures that enable seamless communication between web platforms, mobile applications, cloud services, and enterprise software systems.',
    faqs: [
      {
        q: 'What are API development services?',
        a: 'API development services involve designing and building application programming interfaces that allow software systems to communicate and exchange data securely.',
      },
      {
        q: 'How much does API development cost in India?',
        a: 'API development in India typically ranges from ₹1,50,000 to ₹15,00,000 depending on integration complexity, security requirements, and system architecture.',
      },
      {
        q: 'What types of APIs do you develop?',
        a: 'We build REST APIs, GraphQL APIs, microservices APIs, and enterprise integration APIs.',
      },
      {
        q: 'Which systems can APIs integrate?',
        a: 'APIs can integrate CRMs, ERPs, payment gateways, analytics systems, SaaS platforms, and mobile applications.',
      },
      {
        q: 'Do you provide secure authentication for APIs?',
        a: 'Yes. We implement OAuth, JWT authentication, API keys, and secure access control mechanisms.',
      },
      {
        q: 'Do you integrate third-party services?',
        a: 'Yes. We integrate payment gateways, messaging services, cloud services, analytics platforms, and enterprise software.',
      },
      {
        q: 'Do you provide API services for Mumbai and Pune companies?',
        a: 'Yes. We support startups and enterprises in Mumbai and Pune with scalable API development and system integration.',
      },
    ],
    offer: [150000, 1500000],
  },
} satisfies Record<string, servicePage>;
