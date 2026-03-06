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
} satisfies Record<string, servicePage>;
