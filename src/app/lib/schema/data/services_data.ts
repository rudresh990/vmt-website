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
  '/services/web-application-development': {
    name: 'web application development',
    description:
      'We provide web application development services in India, helping startups, SaaS companies, and enterprises build scalable digital platforms. Our team designs and develops custom web applications, SaaS platforms, internal dashboards, automation systems, and business workflow software. From Mumbai, Pune, Bangalore, and other technology ecosystems in India, we support companies that require reliable software systems for product development and operational efficiency. Our web application development approach focuses on scalable architecture, clean user experience, secure backend systems, and high-performance APIs. We build modern web applications using React, Node.js, cloud infrastructure, and modular backend architecture to ensure long-term scalability and maintainability. Our solutions enable businesses to automate operations, manage complex workflows, and launch digital products faster.',
    faqs: [
      {
        q: 'What is web application development?',
        a: 'Web application development involves building browser-based software platforms such as dashboards, SaaS tools, and automation systems that users interact with online.',
      },
      {
        q: 'How is a web application different from a website?',
        a: 'A website mainly provides information, while a web application allows users to perform actions such as managing accounts, processing data, or using software tools.',
      },
      {
        q: 'How much does web application development cost in India?',
        a: 'Custom web application projects in India typically range from ₹3,00,000 to ₹20,00,000 depending on system complexity, integrations, and required features.',
      },
      {
        q: 'Which businesses need web applications?',
        a: 'Startups, SaaS companies, fintech platforms, marketplaces, and enterprises often require web applications to manage operations and digital products.',
      },
      {
        q: 'Do you build SaaS platforms?',
        a: 'Yes. We design and develop scalable SaaS applications including subscription systems, dashboards, and multi-tenant platforms.',
      },
      {
        q: 'Do you integrate APIs and third-party systems?',
        a: 'Yes. We integrate payment gateways, CRM platforms, analytics systems, and other APIs depending on project requirements.',
      },
      {
        q: 'Do you provide web application development services in Mumbai and Pune?',
        a: 'Yes. We work with startups and companies across Mumbai and Pune to build scalable digital platforms and software systems.',
      },
    ],

    offer: [300000, 2000000],
  },
  '/services/mobile-application-development': {
    name: 'mobile application development',
    description:
      'We provide mobile application development services in India, helping startups and businesses build scalable Android and iOS applications. Our team designs high-performance mobile apps for digital products, eCommerce platforms, on-demand services, and customer engagement systems. From Mumbai, Pune, Bangalore, and other technology ecosystems in India, we support companies that want to launch mobile products and improve user engagement. Our mobile app development approach focuses on intuitive user experience, performance optimization, secure backend systems, and scalable architecture. We build modern mobile applications using React Native and cloud-connected backend systems to ensure cross-platform compatibility and rapid development. Our solutions enable businesses to deliver seamless mobile experiences, scale user engagement, and launch mobile platforms efficiently.',

    faqs: [
      {
        q: 'What is mobile application development?',
        a: 'Mobile application development involves building applications for smartphones and tablets that run on platforms such as Android and iOS.',
      },
      {
        q: 'Do you develop both Android and iOS applications?',
        a: 'Yes. We build cross-platform mobile applications that work on both Android and iOS devices using modern frameworks.',
      },
      {
        q: 'How much does mobile app development cost in India?',
        a: 'Mobile app development projects in India typically range from ₹4,00,000 to ₹25,00,000 depending on features, integrations, and platform requirements.',
      },
      {
        q: 'Which businesses should build mobile apps?',
        a: 'Startups, marketplaces, eCommerce companies, service platforms, and SaaS businesses often benefit from mobile applications.',
      },
      {
        q: 'Do you build backend systems for mobile apps?',
        a: 'Yes. We build scalable backend APIs, authentication systems, and databases that power mobile applications.',
      },
      {
        q: 'Do you publish apps to Google Play and App Store?',
        a: 'Yes. We help deploy applications to Google Play Store and Apple App Store including configuration and launch support.',
      },
      {
        q: 'Do you provide mobile app development services in Mumbai and Pune?',
        a: 'Yes. We work with startups and businesses across Mumbai and Pune to build scalable mobile applications.',
      },
    ],

    offer: [400000, 2500000],
  },
  '/services/ecommerce-development': {
    name: 'ecommerce development',
    description:
      'We provide eCommerce development services in India, helping brands build scalable online stores and digital commerce platforms. Our team develops custom eCommerce websites, online marketplaces, product management systems, and integrated payment infrastructures for growing businesses. From Mumbai, Pune, Bangalore, and other technology ecosystems in India, we support startups and established brands launching or scaling online sales. Our eCommerce development approach focuses on conversion-focused design, performance optimization, secure checkout systems, and scalable backend architecture. We build modern eCommerce platforms using scalable frameworks, payment gateway integrations, and inventory management systems. Our solutions enable businesses to manage online sales efficiently, improve customer experience, and scale digital commerce operations.',

    faqs: [
      {
        q: 'What is eCommerce development?',
        a: 'eCommerce development involves building online stores and digital commerce platforms that allow businesses to sell products or services online.',
      },
      {
        q: 'Do you build custom eCommerce platforms?',
        a: 'Yes. We build custom eCommerce websites, marketplaces, and product management systems depending on business requirements.',
      },
      {
        q: 'How much does eCommerce development cost in India?',
        a: 'eCommerce development projects in India typically range from ₹2,00,000 to ₹15,00,000 depending on platform complexity and integrations.',
      },
      {
        q: 'Which businesses need eCommerce platforms?',
        a: 'Retail brands, manufacturers, marketplaces, and D2C businesses often require scalable eCommerce platforms.',
      },
      {
        q: 'Do you integrate payment gateways?',
        a: 'Yes. We integrate secure payment gateways including Razorpay, Stripe, and other payment providers.',
      },
      {
        q: 'Do you build multi-vendor marketplaces?',
        a: 'Yes. We develop marketplace platforms that allow multiple vendors to sell products on a single system.',
      },
      {
        q: 'Do you provide eCommerce development services in Mumbai and Pune?',
        a: 'Yes. We work with brands and startups across Mumbai and Pune to build scalable online stores.',
      },
    ],

    offer: [200000, 1500000],
  },
  '/services/technical-seo-performance-optimization': {
    name: 'technical seo and performance',
    description:
      'We provide technical SEO and website performance optimization services in India, helping businesses in Mumbai, Pune, Bangalore, and other major technology ecosystems improve search visibility and organic traffic. Our team works with startups, SaaS companies, service businesses, and eCommerce brands that require strong technical SEO foundations for long-term search growth. Many websites struggle with crawl errors, indexing problems, slow page speeds, and poor site architecture that prevent them from ranking in Google search results. Our technical SEO services focus on fixing these structural issues and building scalable search-friendly website architecture. We perform complete technical SEO audits, resolve crawlability and indexing issues, optimize Core Web Vitals, improve internal linking structures, and implement structured data schemas. Businesses in Mumbai and Pune rely on our technical SEO expertise to build high-performance websites that search engines can easily crawl, understand, and rank. Our goal is to create technically optimized websites that support long-term organic growth and consistent inbound leads.',
    faqs: [
      {
        q: 'What is technical SEO?',
        a: 'Technical SEO focuses on optimizing the technical structure of a website so search engines can crawl, index, and understand it effectively.',
      },
      {
        q: 'Why is technical SEO important for websites in Mumbai and Pune?',
        a: 'Businesses in competitive markets like Mumbai and Pune require technically optimized websites to rank effectively against competitors.',
      },
      {
        q: 'How much do technical SEO services cost in India?',
        a: 'Technical SEO projects in India typically range from ₹60,000 to ₹4,00,000 depending on website size and complexity.',
      },
      {
        q: 'Do startups need technical SEO?',
        a: 'Yes. Technical SEO helps startup websites get properly indexed by search engines and build long-term organic growth.',
      },
      {
        q: 'Do you fix crawl and indexing issues?',
        a: 'Yes. We identify crawl errors, indexing issues, duplicate pages, and technical architecture problems.',
      },
      {
        q: 'Do you implement structured data?',
        a: 'Yes. Structured data helps search engines better understand your website content and improves visibility in search results.',
      },
      {
        q: 'Do you provide technical SEO services in Mumbai and Pune?',
        a: 'Yes. We work with startups, SaaS companies, and service businesses across Mumbai and Pune.',
      },
    ],
    offer: [60000, 400000],
  },
  '/services/website-speed-optimization': {
    name: 'website speed optimization',
    description:
      'We provide website speed optimization services in India, helping businesses in Mumbai, Pune, and other growing digital markets improve website performance and loading speed. Slow websites reduce search rankings, increase bounce rates, and negatively impact user experience. Our performance optimization services focus on improving Core Web Vitals, reducing page load times, and optimizing server performance for modern websites. We work with startups, SaaS platforms, eCommerce stores, and service businesses that require fast digital experiences for customers. Our optimization process includes frontend performance tuning, JavaScript and CSS optimization, image compression, server configuration improvements, and advanced caching systems. Businesses in Mumbai and Pune rely on high-performance websites to compete in digital markets and attract more customers through search engines. Our website speed optimization solutions ensure faster page loading, improved search rankings, and better engagement across devices and networks.',
    faqs: [
      {
        q: 'What is website speed optimization?',
        a: 'Website speed optimization focuses on improving loading times and overall performance of webpages.',
      },
      {
        q: 'Why is website speed important for SEO?',
        a: 'Search engines consider page speed and Core Web Vitals as ranking factors for search visibility.',
      },
      {
        q: 'How much do website speed optimization services cost in India?',
        a: 'Website speed optimization projects in India typically range from ₹40,000 to ₹2,50,000 depending on technical complexity.',
      },
      {
        q: 'What are Core Web Vitals?',
        a: 'Core Web Vitals measure loading speed, interactivity, and visual stability of webpages.',
      },
      {
        q: 'Do you optimize JavaScript and CSS performance?',
        a: 'Yes. We reduce script blocking, optimize asset delivery, and improve frontend performance.',
      },
      {
        q: 'Do you optimize server infrastructure?',
        a: 'Yes. We implement caching systems, CDN optimization, and server configuration improvements.',
      },
      {
        q: 'Do you provide website speed optimization in Mumbai and Pune?',
        a: 'Yes. We help businesses in Mumbai and Pune improve website performance and loading speed.',
      },
    ],
    offer: [40000, 250000],
  },
  '/services/conversion-rate-optimization': {
    name: 'conversion rate optimization',
    description:
      'We provide conversion rate optimization services in India, helping businesses in Mumbai, Pune, and other digital markets convert more website visitors into leads and customers. Many websites generate traffic but fail to convert visitors due to poor user experience, unclear messaging, or ineffective page structure. Our conversion rate optimization process focuses on analyzing user behavior and improving the website journey from first visit to final conversion. We work with SaaS companies, startups, service businesses, and eCommerce brands that want to improve lead generation and sales performance. Our CRO strategies include landing page optimization, call-to-action improvements, user journey analysis, funnel optimization, and data-driven experimentation. Businesses in Mumbai and Pune operate in highly competitive digital markets where optimizing conversion performance is critical for growth. Our CRO services help companies increase lead generation, improve sales funnels, and maximize the value of their existing website traffic.',
    faqs: [
      {
        q: 'What is conversion rate optimization?',
        a: 'Conversion rate optimization focuses on improving website elements so more visitors become customers or leads.',
      },
      {
        q: 'Why is CRO important for websites in Mumbai and Pune?',
        a: 'Businesses in competitive cities like Mumbai and Pune benefit from higher conversion rates to maximize marketing ROI.',
      },
      {
        q: 'How much do CRO services cost in India?',
        a: 'Conversion rate optimization projects typically range from ₹50,000 to ₹3,00,000 depending on project scope.',
      },
      {
        q: 'Do you perform website conversion audits?',
        a: 'Yes. We analyze user behavior, page structure, and funnels to identify conversion barriers.',
      },
      {
        q: 'Do you run A/B testing?',
        a: 'Yes. We run controlled experiments to identify page designs that perform better.',
      },
      {
        q: 'Which businesses benefit from CRO?',
        a: 'SaaS platforms, eCommerce brands, and service companies with significant website traffic benefit the most.',
      },
      {
        q: 'Do you provide CRO services in Mumbai and Pune?',
        a: 'Yes. We help businesses across Mumbai and Pune improve website conversions.',
      },
    ],
    offer: [50000, 300000],
  },
} satisfies Record<string, servicePage>;
