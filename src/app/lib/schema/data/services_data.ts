type servicePage = {
  name?: string;
  description: string;
  faqs: { q: string; a: string }[];
  serviceType?: string;
  offer?: [number, number];
};

export const serviceData = {
  // ─── existing entries (unchanged) ────────────────────────────────────────────
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

  // ─── new entries ──────────────────────────────────────────────────────────────

  '/services/cicd-pipelines': {
    name: 'ci/cd pipeline setup',
    description:
      'We provide CI/CD pipeline setup and automation services in India, helping software teams in Mumbai, Pune, Bangalore, and other technology hubs achieve faster, reliable, and repeatable software delivery. Continuous Integration and Continuous Deployment pipelines eliminate manual deployment bottlenecks, reduce human error, and accelerate release cycles for startups and enterprise engineering teams. Our team designs and implements automated build, test, and deployment workflows using industry-standard tools. We work with product companies, SaaS platforms, and technology teams that want to improve engineering velocity and deployment confidence. Our CI/CD services include pipeline design, automated testing integration, environment management, containerized deployments, and infrastructure-as-code automation. Whether you are deploying to AWS, Azure, or on-premise infrastructure, we build pipelines that ensure every release is tested, validated, and deployed consistently. Businesses across Mumbai and Pune rely on our DevOps expertise to modernize their software delivery processes and reduce time-to-market for new features.',
    faqs: [
      {
        q: 'What is a CI/CD pipeline?',
        a: 'A CI/CD pipeline automates the process of building, testing, and deploying software so teams can release faster and more reliably.',
      },
      {
        q: 'Why do software teams need CI/CD pipelines?',
        a: 'CI/CD pipelines reduce manual errors, speed up release cycles, and ensure every code change is automatically tested before deployment.',
      },
      {
        q: 'How much does CI/CD pipeline setup cost in India?',
        a: 'CI/CD pipeline setup projects in India typically range from ₹80,000 to ₹5,00,000 depending on infrastructure complexity and toolchain requirements.',
      },
      {
        q: 'Which tools do you use for CI/CD?',
        a: 'We work with GitHub Actions, GitLab CI, Jenkins, CircleCI, and other pipeline tools depending on your existing infrastructure.',
      },
      {
        q: 'Do you set up CI/CD for containerized applications?',
        a: 'Yes. We configure pipelines for Docker-based and Kubernetes-based deployments with full container orchestration.',
      },
      {
        q: 'Can you integrate automated testing into our pipeline?',
        a: 'Yes. We integrate unit tests, integration tests, and security scans into the pipeline to ensure code quality at every stage.',
      },
      {
        q: 'Do you provide CI/CD services in Mumbai and Pune?',
        a: 'Yes. We help startups and technology teams across Mumbai and Pune automate their software delivery workflows.',
      },
    ],
    offer: [80000, 500000],
  },

  '/services/cloud-devops': {
    name: 'cloud and devops services',
    description:
      'We provide cloud and DevOps services in India, helping businesses in Mumbai, Pune, Bangalore, and other technology ecosystems build scalable infrastructure, automate deployments, and improve engineering productivity. Modern software products require reliable cloud architecture, automated workflows, and robust monitoring systems to operate efficiently at scale. Our team designs and implements cloud infrastructure, DevOps automation, container orchestration, and infrastructure-as-code systems for startups and enterprises. We work with SaaS companies, fintech platforms, and product engineering teams that require scalable, secure, and cost-optimized cloud environments. Our cloud and DevOps services include AWS and Azure infrastructure setup, Kubernetes cluster management, CI/CD pipelines, monitoring and alerting systems, and security hardening. Whether you are migrating to the cloud or optimizing existing infrastructure, we build systems that improve deployment speed, system reliability, and operational efficiency for businesses across India.',
    faqs: [
      {
        q: 'What are cloud and DevOps services?',
        a: 'Cloud and DevOps services involve building and managing cloud infrastructure, automating deployments, and improving engineering workflows to deliver software faster and more reliably.',
      },
      {
        q: 'How much do cloud and DevOps services cost in India?',
        a: 'Cloud and DevOps projects in India typically range from ₹1,50,000 to ₹15,00,000 depending on infrastructure scale and automation requirements.',
      },
      {
        q: 'Which cloud platforms do you work with?',
        a: 'We primarily work with AWS and Azure, and can also support GCP depending on project requirements.',
      },
      {
        q: 'Do you manage Kubernetes deployments?',
        a: 'Yes. We set up and manage Kubernetes clusters for containerized workloads, ensuring high availability and automated scaling.',
      },
      {
        q: 'Do you provide cloud cost optimization?',
        a: 'Yes. We audit existing cloud infrastructure and implement cost-optimization strategies to reduce unnecessary spend.',
      },
      {
        q: 'Do you set up monitoring and alerting?',
        a: 'Yes. We configure monitoring systems, dashboards, and alerting workflows so your team is always aware of system health.',
      },
      {
        q: 'Do you provide cloud and DevOps services in Mumbai and Pune?',
        a: 'Yes. We support technology teams and startups across Mumbai and Pune with cloud infrastructure and DevOps automation.',
      },
    ],
    offer: [150000, 1500000],
  },

  '/services/cms-development': {
    name: 'cms development',
    description:
      'We provide CMS development services in India, helping businesses in Mumbai, Pune, Bangalore, and other digital markets build content-driven websites and platforms with powerful editorial tools. A well-built CMS empowers marketing teams to publish, update, and manage content independently without relying on developers for every change. Our team designs and builds custom CMS solutions and headless CMS integrations for corporate websites, media platforms, eCommerce stores, and SaaS products. We work with businesses that require flexible, scalable content management systems aligned with their publishing workflows and digital growth strategy. Our CMS development services include headless CMS architecture, custom admin panels, content modeling, multi-language support, media management, and SEO-friendly content structures. Whether you need a custom-built CMS, a headless setup using Sanity or Contentful, or a WordPress-based enterprise system, we build editorial platforms that improve content operations and support long-term digital growth.',
    faqs: [
      {
        q: 'What is CMS development?',
        a: 'CMS development involves building content management systems that allow teams to create, edit, and publish website content without technical knowledge.',
      },
      {
        q: 'Should I use a custom CMS or an existing platform?',
        a: 'It depends on your content complexity and team requirements. Headless CMS platforms like Sanity or Contentful offer flexibility, while custom solutions provide complete control over features and workflows.',
      },
      {
        q: 'How much does CMS development cost in India?',
        a: 'CMS development projects in India typically range from ₹75,000 to ₹6,00,000 depending on complexity, features, and integrations.',
      },
      {
        q: 'Do you build headless CMS solutions?',
        a: 'Yes. We build headless CMS architectures that separate content management from frontend delivery for maximum flexibility.',
      },
      {
        q: 'Do you integrate CMS with existing websites?',
        a: 'Yes. We integrate CMS platforms with existing websites, eCommerce stores, and marketing platforms.',
      },
      {
        q: 'Do you support multi-language CMS setups?',
        a: 'Yes. We build multilingual content systems for businesses targeting Indian and global audiences.',
      },
      {
        q: 'Do you provide CMS development services in Mumbai and Pune?',
        a: 'Yes. We build CMS platforms for businesses and content teams across Mumbai and Pune.',
      },
    ],
    offer: [75000, 600000],
  },

  '/services/consulting-and-strategy': {
    name: 'technology consulting and strategy',
    description:
      'We provide technology consulting and strategy services in India, helping businesses in Mumbai, Pune, Bangalore, and other major markets make informed technology decisions that drive long-term growth. Many startups and enterprises face challenges selecting the right technology stack, architecting scalable systems, or aligning digital investments with business objectives. Our consulting team works with founders, product leaders, and CTOs to define technology roadmaps, evaluate build-versus-buy decisions, and design scalable digital architectures. We provide strategic guidance across software architecture, cloud infrastructure, product development, and digital transformation. Our consulting process includes discovery workshops, technical assessments, competitive analysis, and structured recommendation reports. Whether you are planning a new product, modernizing legacy systems, or scaling your technology team, we provide the strategic clarity needed to make faster and more confident decisions. Businesses across Mumbai and Pune rely on our technology consulting expertise to align engineering investments with business priorities and achieve sustainable digital growth.',
    faqs: [
      {
        q: 'What is technology consulting?',
        a: 'Technology consulting involves advising businesses on technology decisions, architecture, and digital strategy to achieve their business goals efficiently.',
      },
      {
        q: 'Who needs technology consulting services?',
        a: 'Startups planning new products, enterprises modernizing legacy systems, and businesses evaluating digital transformation strategies benefit most from technology consulting.',
      },
      {
        q: 'How much do technology consulting services cost in India?',
        a: 'Technology consulting engagements in India typically range from ₹50,000 to ₹5,00,000 depending on scope, duration, and deliverables.',
      },
      {
        q: 'Do you provide technology roadmap planning?',
        a: 'Yes. We help businesses define multi-phase technology roadmaps aligned with product vision and business growth objectives.',
      },
      {
        q: 'Do you advise on technology stack selection?',
        a: 'Yes. We evaluate technology options and recommend stacks based on scalability, team expertise, long-term maintainability, and business requirements.',
      },
      {
        q: 'Do you support digital transformation projects?',
        a: 'Yes. We guide businesses through process digitization, platform modernization, and cloud migration strategies.',
      },
      {
        q: 'Do you provide consulting services in Mumbai and Pune?',
        a: 'Yes. We work with founders, product teams, and enterprise leaders across Mumbai and Pune.',
      },
    ],
    offer: [50000, 500000],
  },

  '/services/content-marketing': {
    name: 'content marketing',
    description:
      'We provide content marketing services in India, helping businesses in Mumbai, Pune, Bangalore, and other growing markets attract qualified traffic, build authority, and generate inbound leads through strategic content. Content marketing is one of the highest-ROI digital channels for B2B companies, SaaS platforms, and service businesses that want to build long-term organic growth. Our team creates and distributes SEO-optimized content including blog articles, industry guides, case studies, whitepapers, and thought leadership pieces aligned with your target audience and business goals. We work with startups, technology companies, consulting firms, and service businesses that want to establish domain authority and attract high-intent search traffic. Our content marketing approach combines keyword research, audience analysis, content strategy, production, and performance measurement. Whether you need a full content marketing program or targeted content campaigns, we create content systems that drive consistent traffic and qualified leads for businesses across India.',
    faqs: [
      {
        q: 'What is content marketing?',
        a: 'Content marketing involves creating and distributing valuable content to attract, engage, and convert target audiences into leads and customers.',
      },
      {
        q: 'Why is content marketing important for B2B companies in India?',
        a: 'B2B buyers research extensively before purchasing. Content marketing builds trust, establishes authority, and generates inbound leads from high-intent audiences.',
      },
      {
        q: 'How much do content marketing services cost in India?',
        a: 'Content marketing programs in India typically range from ₹30,000 to ₹2,00,000 per month depending on content volume and strategy scope.',
      },
      {
        q: 'What types of content do you create?',
        a: 'We create blog articles, industry guides, case studies, whitepapers, landing page copy, and thought leadership content.',
      },
      {
        q: 'Do you create SEO-optimized content?',
        a: 'Yes. Every piece of content is researched and optimized for target keywords to drive organic search traffic.',
      },
      {
        q: 'How long does it take to see results from content marketing?',
        a: 'Content marketing typically shows measurable organic traffic growth within 3-6 months of consistent execution.',
      },
      {
        q: 'Do you provide content marketing services in Mumbai and Pune?',
        a: 'Yes. We create content strategies and production programs for businesses across Mumbai and Pune.',
      },
    ],
    offer: [30000, 200000],
  },

  '/services/content-strategy': {
    name: 'content strategy',
    description:
      'We provide content strategy services in India, helping businesses in Mumbai, Pune, and other digital markets build structured content programs that support SEO, brand authority, and lead generation. Many businesses produce content without a clear plan, resulting in inconsistent messaging, poor search performance, and low audience engagement. Our content strategy process begins with a deep understanding of your business goals, target audience, competitive landscape, and existing content assets. We develop comprehensive content strategies including topic clusters, keyword frameworks, editorial calendars, content formats, and distribution plans. We work with SaaS companies, technology brands, consulting firms, and service businesses that want to build scalable content engines. Our deliverables include content audits, keyword mapping documents, topical authority plans, and structured editorial roadmaps. Whether you are starting a content program or improving an existing one, our content strategies provide the clarity and structure needed to generate consistent organic growth for businesses across India.',
    faqs: [
      {
        q: 'What is content strategy?',
        a: 'Content strategy is the planning and governance of content creation to achieve specific business goals such as SEO growth, lead generation, and brand authority.',
      },
      {
        q: 'Why do businesses need a content strategy?',
        a: 'Without strategy, content efforts are scattered and ineffective. A clear content strategy ensures every piece contributes to measurable business outcomes.',
      },
      {
        q: 'How much does content strategy cost in India?',
        a: 'Content strategy engagements in India typically range from ₹40,000 to ₹2,50,000 depending on scope and deliverables.',
      },
      {
        q: 'What does a content strategy include?',
        a: 'A content strategy includes audience research, keyword mapping, topic cluster planning, content audit, editorial calendar, and distribution framework.',
      },
      {
        q: 'Do you perform content audits?',
        a: 'Yes. We audit existing content to identify gaps, cannibalization issues, and optimization opportunities.',
      },
      {
        q: 'Do you build topical authority strategies?',
        a: 'Yes. We develop topic cluster frameworks that position your website as an authority in your niche.',
      },
      {
        q: 'Do you provide content strategy services in Mumbai and Pune?',
        a: 'Yes. We build content strategies for startups and businesses across Mumbai and Pune.',
      },
    ],
    offer: [40000, 250000],
  },

  '/services/crm-erp-development': {
    name: 'crm and erp development',
    description:
      'We provide CRM and ERP development services in India, helping businesses in Mumbai, Pune, Bangalore, and other major markets build custom systems that streamline operations, manage customer relationships, and improve business visibility. Off-the-shelf CRM and ERP solutions often fail to match the specific workflows, reporting requirements, and integration needs of growing businesses. Our team designs and builds custom CRM systems, ERP platforms, and business management tools that align with your exact operational processes. We work with manufacturing companies, consulting firms, logistics businesses, retail brands, and service organizations that require tailored systems for managing sales pipelines, customer data, inventory, HR, and finance. Our CRM and ERP development services include requirements analysis, system architecture, module development, data migration, third-party integrations, and user training. Whether you need a lightweight CRM for your sales team or a full ERP system for multi-department operations, we build business management platforms that improve efficiency and decision-making for companies across India.',
    faqs: [
      {
        q: 'What is CRM and ERP development?',
        a: 'CRM development focuses on managing customer relationships and sales pipelines, while ERP development covers broader business operations including finance, HR, inventory, and logistics in a unified system.',
      },
      {
        q: 'Why build a custom CRM or ERP instead of using existing software?',
        a: 'Custom systems are built around your specific workflows, data structures, and integrations, providing better fit, control, and long-term scalability compared to generic solutions.',
      },
      {
        q: 'How much does CRM/ERP development cost in India?',
        a: 'CRM and ERP development projects in India typically range from ₹3,00,000 to ₹30,00,000 depending on module complexity and integrations.',
      },
      {
        q: 'How long does it take to build a custom CRM or ERP?',
        a: 'Custom CRM systems typically take 2–4 months, while comprehensive ERP platforms may require 4–9 months depending on module count and data complexity.',
      },
      {
        q: 'Do you integrate CRM/ERP with existing systems?',
        a: 'Yes. We integrate with payment systems, communication platforms, analytics tools, eCommerce stores, and third-party APIs.',
      },
      {
        q: 'Do you support data migration from legacy systems?',
        a: 'Yes. We handle data migration from existing spreadsheets, legacy software, and older CRM/ERP systems.',
      },
      {
        q: 'Do you provide CRM/ERP development in Mumbai and Pune?',
        a: 'Yes. We build custom business management systems for companies across Mumbai and Pune.',
      },
    ],
    offer: [300000, 3000000],
  },

  '/services/cro-design': {
    name: 'conversion-focused design',
    description:
      'We provide conversion-focused design services in India, helping businesses in Mumbai, Pune, and other competitive digital markets design landing pages, product pages, and website experiences that convert more visitors into leads and customers. Many businesses invest heavily in traffic generation but lose potential customers due to poor design, confusing layouts, or weak calls to action. Our design team combines UX principles, persuasion psychology, and data-driven insights to create conversion-optimized pages that guide visitors toward taking action. We work with SaaS companies, startups, eCommerce brands, and service businesses that want to improve lead generation and sales performance through better design. Our CRO design services include landing page design, hero section optimization, form design, trust signal placement, mobile experience optimization, and visual hierarchy improvements. Whether you need a high-converting homepage, a campaign landing page, or a product page redesign, we design digital experiences that improve conversion performance and maximize the return on your marketing investment.',
    faqs: [
      {
        q: 'What is conversion-focused design?',
        a: 'Conversion-focused design applies UX principles and persuasion techniques to create page layouts and visual experiences that encourage visitors to take specific actions.',
      },
      {
        q: 'How is CRO design different from regular web design?',
        a: 'Regular web design prioritizes aesthetics, while conversion-focused design prioritizes user behavior, clarity of messaging, and measurable outcomes like form submissions and purchases.',
      },
      {
        q: 'How much does conversion-focused design cost in India?',
        a: 'CRO design projects in India typically range from ₹40,000 to ₹3,00,000 depending on the number of pages and design complexity.',
      },
      {
        q: 'Do you design landing pages for ad campaigns?',
        a: 'Yes. We design dedicated landing pages optimized for Google Ads, Meta Ads, and other paid traffic campaigns.',
      },
      {
        q: 'Do you optimize existing page designs?',
        a: 'Yes. We audit current pages and redesign elements that are reducing conversion rates.',
      },
      {
        q: 'Do you design mobile-optimized conversion pages?',
        a: 'Yes. All our conversion-focused designs are fully optimized for mobile devices.',
      },
      {
        q: 'Do you provide CRO design services in Mumbai and Pune?',
        a: 'Yes. We help businesses across Mumbai and Pune improve conversion performance through better page design.',
      },
    ],
    offer: [40000, 300000],
  },

  '/services/digital-marketing': {
    name: 'digital marketing',
    description:
      'We provide digital marketing services in India, helping businesses in Mumbai, Pune, Bangalore, and other major markets build online visibility, attract qualified traffic, and generate consistent leads and revenue. A comprehensive digital marketing strategy combines SEO, paid advertising, content marketing, social media, and email campaigns to build a multi-channel growth engine. Our team works with startups, SMEs, and enterprises across technology, eCommerce, real estate, healthcare, education, and B2B services to design and execute digital marketing programs aligned with business goals. We focus on measurable outcomes including traffic growth, lead generation, customer acquisition, and return on ad spend. Our digital marketing services include search engine optimization, Google Ads management, Meta Ads campaigns, content marketing, email marketing, and performance analytics. Whether you need a full-funnel digital marketing strategy or focused campaign management, we deliver marketing programs that drive predictable business growth for companies across India.',
    faqs: [
      {
        q: 'What is digital marketing?',
        a: 'Digital marketing encompasses all online marketing activities including SEO, paid advertising, content marketing, social media, and email campaigns to attract and convert customers.',
      },
      {
        q: 'Why do businesses in Mumbai need digital marketing?',
        a: "Mumbai is one of India's most competitive business markets. Digital marketing helps businesses reach their target audience online, generate leads, and grow revenue efficiently.",
      },
      {
        q: 'How much do digital marketing services cost in India?',
        a: 'Digital marketing programs in India typically range from ₹25,000 to ₹2,00,000 per month depending on channels, ad budgets, and campaign scope.',
      },
      {
        q: 'What digital marketing channels do you manage?',
        a: 'We manage SEO, Google Ads, Meta Ads (Facebook and Instagram), content marketing, email marketing, and performance analytics.',
      },
      {
        q: 'How do you measure digital marketing performance?',
        a: 'We track metrics including organic traffic, lead volume, cost per lead, conversion rates, and return on ad spend.',
      },
      {
        q: 'How long before digital marketing shows results?',
        a: 'Paid advertising delivers results immediately, while SEO and content marketing typically show measurable growth within 3-6 months of consistent execution.',
      },
      {
        q: 'Do you provide digital marketing services in Mumbai and Pune?',
        a: 'Yes. We run digital marketing programs for businesses across Mumbai, Pune, and other Indian cities.',
      },
    ],
    offer: [25000, 200000],
  },

  '/services/email-marketing': {
    name: 'email marketing',
    description:
      'We provide email marketing services in India, helping businesses in Mumbai, Pune, and other digital markets build, manage, and optimize email campaigns that nurture leads, retain customers, and drive revenue. Email marketing consistently delivers one of the highest returns on investment among digital marketing channels, making it essential for SaaS companies, eCommerce brands, and B2B service businesses. Our team designs and executes email marketing programs including welcome sequences, lead nurture campaigns, promotional campaigns, newsletters, and automated lifecycle emails. We work with businesses that want to build stronger customer relationships, increase repeat purchases, and convert marketing leads into paying customers. Our email marketing services include list management, campaign design, copywriting, automation workflows, A/B testing, and deliverability optimization. Whether you need a complete email marketing program or targeted campaign execution, we deliver email strategies that improve engagement and drive measurable business outcomes for companies across India.',
    faqs: [
      {
        q: 'Why is email marketing important for businesses in India?',
        a: 'Email marketing delivers high ROI by reaching existing leads and customers directly, nurturing relationships, and driving repeat purchases or conversions.',
      },
      {
        q: 'How much do email marketing services cost in India?',
        a: 'Email marketing programs in India typically range from ₹20,000 to ₹1,50,000 per month depending on list size, campaign frequency, and automation complexity.',
      },
      {
        q: 'What types of email campaigns do you create?',
        a: 'We create welcome sequences, lead nurture drips, promotional campaigns, newsletters, cart abandonment emails, and customer retention campaigns.',
      },
      {
        q: 'Do you set up email automation?',
        a: 'Yes. We build automated email workflows triggered by user behavior, signup events, and purchase actions.',
      },
      {
        q: 'Which email platforms do you work with?',
        a: 'We work with Mailchimp, Klaviyo, HubSpot, SendGrid, and other email marketing platforms.',
      },
      {
        q: 'Do you write email copy?',
        a: 'Yes. We provide complete email copywriting and design services aligned with your brand voice.',
      },
      {
        q: 'Do you provide email marketing services in Mumbai and Pune?',
        a: 'Yes. We manage email marketing programs for businesses across Mumbai and Pune.',
      },
    ],
    offer: [20000, 150000],
  },

  '/services/enterprise-seo': {
    name: 'enterprise seo',
    description:
      'We provide enterprise SEO services in India, helping large businesses, national brands, and high-traffic websites in Mumbai, Pune, Bangalore, and other major markets build scalable organic search strategies. Enterprise websites face unique SEO challenges including large-scale technical issues, content governance, cross-team coordination, and competitive keyword environments that require specialized expertise. Our enterprise SEO team works with established businesses, eCommerce platforms, SaaS companies, and digital brands that need systematic SEO programs to protect and grow organic search performance. We develop enterprise SEO strategies covering technical architecture, site-wide content optimization, link authority development, international SEO, and advanced analytics. Our services include enterprise-level technical audits, large-scale content strategy, competitive analysis, backlink profile management, and structured data implementation. Whether you manage a website with thousands of pages or a multi-brand digital presence, we deliver enterprise SEO programs that drive consistent organic growth and protect search visibility at scale.',
    faqs: [
      {
        q: 'What is enterprise SEO?',
        a: 'Enterprise SEO focuses on optimizing large-scale websites with thousands of pages, multiple stakeholders, and complex technical architectures for sustained organic search performance.',
      },
      {
        q: 'How is enterprise SEO different from standard SEO?',
        a: 'Enterprise SEO requires managing larger content libraries, cross-department coordination, advanced technical infrastructure, and competitive authority-building strategies.',
      },
      {
        q: 'How much do enterprise SEO services cost in India?',
        a: 'Enterprise SEO programs in India typically range from ₹1,50,000 to ₹10,00,000 per month depending on website scale and competitive landscape.',
      },
      {
        q: 'Do you provide enterprise technical SEO audits?',
        a: 'Yes. We perform large-scale technical audits covering site architecture, crawl efficiency, indexation, Core Web Vitals, and structured data.',
      },
      {
        q: 'Do you manage enterprise link building?',
        a: 'Yes. We develop authority-building strategies including editorial link acquisition, digital PR, and backlink profile management.',
      },
      {
        q: 'Do you support international SEO for enterprise websites?',
        a: 'Yes. We implement hreflang configurations, international site architecture, and multi-region content strategies.',
      },
      {
        q: 'Do you provide enterprise SEO services in Mumbai and Pune?',
        a: 'Yes. We work with large businesses and national brands across Mumbai and Pune.',
      },
    ],
    offer: [150000, 1000000],
  },

  '/services/google-ads': {
    name: 'google ads management',
    description:
      'We provide Google Ads management services in India, helping businesses in Mumbai, Pune, Bangalore, and other competitive markets run profitable paid search campaigns that generate qualified leads and sales. Google Ads is one of the most powerful channels for reaching high-intent buyers at the exact moment they are searching for your product or service. Our certified team manages search campaigns, display campaigns, Shopping ads, and Performance Max campaigns for startups, SMEs, and enterprises across B2B services, eCommerce, real estate, healthcare, education, and technology sectors. Our Google Ads approach focuses on keyword strategy, ad copy optimization, landing page alignment, bid management, and continuous performance improvement. We set up and manage complete Google Ads accounts including campaign structure, negative keyword lists, audience targeting, and conversion tracking. Whether you are launching your first Google Ads campaign or improving an underperforming account, we deliver campaigns that reduce cost per lead and maximize return on ad spend for businesses across India.',
    faqs: [
      {
        q: 'How much should I spend on Google Ads in India?',
        a: 'Google Ads budgets in India typically start from ₹20,000 to ₹50,000 per month for small businesses, with higher budgets for competitive industries. Our management fees are separate from ad spend.',
      },
      {
        q: 'How much do Google Ads management services cost in India?',
        a: 'Google Ads management fees in India typically range from ₹15,000 to ₹80,000 per month depending on campaign complexity and ad spend volume.',
      },
      {
        q: 'How quickly do Google Ads generate results?',
        a: 'Google Ads can generate leads within days of launch. Campaign performance improves over 4-8 weeks as data accumulates and optimization is applied.',
      },
      {
        q: 'Do you manage Google Shopping campaigns?',
        a: 'Yes. We set up and manage Google Shopping campaigns for eCommerce businesses to promote products directly in search results.',
      },
      {
        q: 'Do you set up conversion tracking?',
        a: 'Yes. Accurate conversion tracking is the foundation of our campaign management and we configure it for every account.',
      },
      {
        q: 'Can you improve an underperforming Google Ads account?',
        a: 'Yes. We audit existing accounts, identify wasted spend, and restructure campaigns to improve performance.',
      },
      {
        q: 'Do you provide Google Ads management in Mumbai and Pune?',
        a: 'Yes. We manage Google Ads campaigns for businesses across Mumbai, Pune, and other Indian cities.',
      },
    ],
    offer: [15000, 80000],
  },

  '/services/growth-consulting': {
    name: 'growth consulting',
    description:
      'We provide growth consulting services in India, helping startups and businesses in Mumbai, Pune, Bangalore, and other major markets identify growth levers, remove bottlenecks, and build repeatable systems for sustainable business expansion. Many early-stage and scaling businesses struggle to prioritize initiatives, allocate resources effectively, or create structured growth processes that survive beyond founder-led efforts. Our growth consulting engagements focus on diagnosing current business performance, identifying high-leverage opportunities, and building execution frameworks across marketing, product, and sales. We work with startup founders, growth teams, and business leaders who want to move from ad-hoc experimentation to systematic, compounding growth. Our consulting process includes business model analysis, growth audit, competitive benchmarking, channel strategy development, and structured growth roadmap delivery. Whether you need strategic clarity on your next growth phase or a complete growth framework for your team, we provide the strategic direction and operational guidance to accelerate business outcomes for companies across India.',
    faqs: [
      {
        q: 'What is growth consulting?',
        a: 'Growth consulting focuses on identifying and implementing high-leverage strategies across marketing, product, and sales to accelerate business growth.',
      },
      {
        q: 'Who benefits most from growth consulting?',
        a: 'Startups scaling beyond initial traction and businesses looking to break through growth plateaus benefit most from structured growth consulting.',
      },
      {
        q: 'How much does growth consulting cost in India?',
        a: 'Growth consulting engagements in India typically range from ₹75,000 to ₹5,00,000 depending on engagement scope and duration.',
      },
      {
        q: 'Do you provide growth audits?',
        a: 'Yes. We perform comprehensive growth audits covering marketing, product, retention, and sales funnel performance.',
      },
      {
        q: 'Do you help with go-to-market strategy?',
        a: 'Yes. We develop go-to-market strategies including positioning, channel selection, pricing, and customer acquisition frameworks.',
      },
      {
        q: 'Do you work with B2B and B2C businesses?',
        a: 'Yes. We have experience with both B2B technology companies and B2C consumer brands across India.',
      },
      {
        q: 'Do you provide growth consulting in Mumbai and Pune?',
        a: 'Yes. We work with founders and growth teams across Mumbai and Pune.',
      },
    ],
    offer: [75000, 500000],
  },

  '/services/landing-pages': {
    name: 'landing page design and development',
    description:
      'We provide landing page design and development services in India, helping businesses in Mumbai, Pune, and other digital markets build high-converting pages for product launches, ad campaigns, lead generation, and event registrations. A well-designed landing page is one of the highest-leverage assets in digital marketing, directly determining the conversion rate of paid traffic, email campaigns, and organic visitors. Our team combines conversion-focused design, persuasive copywriting, and performance-optimized development to build landing pages that turn visitors into leads and customers. We work with SaaS companies, real estate developers, educational platforms, eCommerce brands, and B2B service businesses that want to maximize the return on their marketing spend. Our landing page services include conversion audit, wireframe design, copywriting, visual design, development, and performance tracking setup. Whether you need a standalone campaign page or a systematic library of tested landing pages, we build pages that deliver measurable conversion improvements for businesses across India.',
    faqs: [
      {
        q: 'What makes a landing page different from a regular webpage?',
        a: 'A landing page has a single focused goal — to convert visitors into leads or customers — with no distracting navigation or competing calls to action.',
      },
      {
        q: 'How much does landing page development cost in India?',
        a: 'Landing page projects in India typically range from ₹20,000 to ₹1,50,000 depending on design complexity, copywriting requirements, and integrations.',
      },
      {
        q: 'Do you write landing page copy?',
        a: 'Yes. We provide full copywriting services for landing pages including headline, body copy, and call-to-action development.',
      },
      {
        q: 'Do you design landing pages for Google and Meta Ads?',
        a: 'Yes. We design campaign-specific landing pages optimized for paid traffic from Google Ads, Meta Ads, and other channels.',
      },
      {
        q: 'Do you A/B test landing pages?',
        a: 'Yes. We set up A/B testing to identify the highest-performing version of each page.',
      },
      {
        q: 'How fast can a landing page be delivered?',
        a: 'Most landing pages can be delivered within 1-2 weeks depending on scope and revision cycles.',
      },
      {
        q: 'Do you provide landing page services in Mumbai and Pune?',
        a: 'Yes. We design and develop landing pages for businesses and campaigns across Mumbai and Pune.',
      },
    ],
    offer: [20000, 150000],
  },

  '/services/lead-generation': {
    name: 'lead generation',
    description:
      'We provide lead generation services in India, helping businesses in Mumbai, Pune, Bangalore, and other competitive markets build systematic pipelines that attract, capture, and qualify high-intent prospects. Consistent lead generation is the foundation of predictable revenue growth, yet many businesses rely on referrals and ad-hoc outreach without building scalable acquisition systems. Our team designs and executes multi-channel lead generation strategies combining SEO, paid advertising, content marketing, landing page optimization, and lead nurturing workflows. We work with B2B technology companies, consulting firms, real estate businesses, educational platforms, and service organizations that need reliable pipelines of qualified prospects. Our lead generation services include target audience definition, channel strategy, campaign execution, lead capture optimization, CRM integration, and performance reporting. Whether you need inbound lead generation through organic content or outbound campaigns targeting specific decision-makers, we build lead generation systems that deliver consistent, qualified prospects for businesses across India.',
    faqs: [
      {
        q: 'What is lead generation?',
        a: 'Lead generation involves attracting and capturing contact information from potential customers who have shown interest in your product or service.',
      },
      {
        q: 'Which lead generation channels work best in India?',
        a: 'Google Ads, SEO, LinkedIn outreach, and content marketing are among the most effective lead generation channels for B2B businesses in India.',
      },
      {
        q: 'How much do lead generation services cost in India?',
        a: 'Lead generation programs in India typically range from ₹30,000 to ₹2,50,000 per month depending on channels, ad spend, and campaign complexity.',
      },
      {
        q: 'How do you qualify leads?',
        a: 'We define qualification criteria based on company size, industry, intent signals, and budget indicators, then design campaigns that attract the right audience.',
      },
      {
        q: 'Do you integrate leads with CRM systems?',
        a: 'Yes. We connect lead generation campaigns with CRM platforms to ensure seamless pipeline management.',
      },
      {
        q: 'Do you provide B2B lead generation?',
        a: 'Yes. We specialize in B2B lead generation for technology companies, consulting firms, and service businesses across India.',
      },
      {
        q: 'Do you provide lead generation services in Mumbai and Pune?',
        a: 'Yes. We build lead generation programs for businesses across Mumbai and Pune.',
      },
    ],
    offer: [30000, 250000],
  },

  '/services/marketplace-development': {
    name: 'marketplace development',
    description:
      'We provide marketplace development services in India, helping entrepreneurs and businesses build multi-vendor platforms, service marketplaces, and digital commerce ecosystems. Marketplaces are among the most scalable business models in the digital economy, connecting buyers and sellers on a single platform while generating revenue through commissions, subscriptions, or listing fees. Our team designs and develops custom marketplace platforms for product commerce, service booking, freelancing, rental, and B2B procurement across Indian and international markets. We work with founders and businesses in Mumbai, Pune, Bangalore, and other technology hubs who want to build scalable marketplace products. Our marketplace development services include platform architecture, vendor onboarding systems, search and discovery features, secure payment processing, dispute management, reviews and ratings, and admin dashboards. Whether you are building a niche B2B marketplace or a consumer-facing multi-category platform, we develop the technical infrastructure needed to launch and scale successful marketplace businesses.',
    faqs: [
      {
        q: 'What is marketplace development?',
        a: 'Marketplace development involves building platforms that connect multiple buyers and sellers, enabling transactions and value exchange between them.',
      },
      {
        q: 'How much does marketplace development cost in India?',
        a: 'Marketplace development projects in India typically range from ₹5,00,000 to ₹35,00,000 depending on feature complexity, vendor management, and payment infrastructure.',
      },
      {
        q: 'How long does it take to build a marketplace platform?',
        a: 'A marketplace MVP typically takes 3–5 months, while full-featured platforms may require 6–10 months depending on scope.',
      },
      {
        q: 'Do you build service marketplaces?',
        a: 'Yes. We build service booking platforms, freelancing marketplaces, and professional services networks.',
      },
      {
        q: 'Do you integrate payment systems for marketplace transactions?',
        a: 'Yes. We integrate split payment systems, escrow mechanisms, and commission management for marketplace transactions.',
      },
      {
        q: 'Can you build marketplace mobile apps?',
        a: 'Yes. We develop mobile applications for marketplace platforms on both Android and iOS.',
      },
      {
        q: 'Do you provide marketplace development services in Mumbai and Pune?',
        a: 'Yes. We work with entrepreneurs and businesses across Mumbai and Pune to build scalable marketplace platforms.',
      },
    ],
    offer: [500000, 3500000],
  },

  '/services/meta-ads': {
    name: 'meta ads management',
    description:
      'We provide Meta Ads management services in India, helping businesses in Mumbai, Pune, Bangalore, and other major markets run profitable Facebook and Instagram advertising campaigns that build brand awareness, generate leads, and drive online sales. Meta platforms reach over 400 million users in India, making them one of the most powerful channels for reaching targeted audiences based on demographics, interests, and behavior. Our team manages Meta Ads campaigns for eCommerce brands, real estate developers, educational institutions, healthcare providers, SaaS companies, and service businesses. Our Meta Ads approach focuses on audience research, creative strategy, campaign structure, budget optimization, and continuous performance improvement. We handle full campaign management including ad creative briefing, copywriting, audience targeting, pixel setup, conversion tracking, retargeting, and detailed performance reporting. Whether you want to generate qualified leads at lower cost or scale eCommerce revenue through Instagram Shopping, we build Meta Ads strategies that deliver measurable results for businesses across India.',
    faqs: [
      {
        q: 'What are Meta Ads?',
        a: "Meta Ads are paid advertising campaigns that run across Facebook, Instagram, and Meta's network of partner platforms, targeting users based on detailed demographic and interest data.",
      },
      {
        q: 'How much should I spend on Meta Ads in India?',
        a: 'Meta Ads campaigns in India typically start from ₹15,000 to ₹30,000 per month in ad spend, with higher budgets for national campaigns or competitive industries.',
      },
      {
        q: 'How much do Meta Ads management services cost in India?',
        a: 'Meta Ads management fees in India typically range from ₹15,000 to ₹75,000 per month depending on campaign scale and complexity.',
      },
      {
        q: 'Do you create ad creatives and copy?',
        a: 'Yes. We develop ad creative briefs, write ad copy, and coordinate creative production for all campaigns.',
      },
      {
        q: 'Do you set up Facebook Pixel and conversion tracking?',
        a: 'Yes. Pixel setup and conversion event tracking are standard parts of every campaign setup.',
      },
      {
        q: 'Do you run retargeting campaigns?',
        a: 'Yes. We build retargeting audiences based on website visitors, video viewers, and lead form engagements.',
      },
      {
        q: 'Do you provide Meta Ads management in Mumbai and Pune?',
        a: 'Yes. We manage Meta Ads campaigns for businesses across Mumbai, Pune, and other Indian cities.',
      },
    ],
    offer: [15000, 75000],
  },

  '/services/mobile-ui-design': {
    name: 'mobile ui design',
    description:
      'We provide mobile UI design services in India, helping startups and product companies in Mumbai, Pune, Bangalore, and other technology ecosystems design intuitive and visually refined mobile interfaces for Android and iOS applications. Great mobile UI design reduces user friction, increases engagement, and directly impacts app store ratings and retention. Our design team creates pixel-perfect mobile interfaces that combine modern design principles with platform-specific guidelines for iOS and Android. We work with startups building consumer apps, SaaS companies developing mobile extensions, and enterprises creating internal mobile tools. Our mobile UI design process includes user flow mapping, wireframing, high-fidelity screen design, interactive prototyping, design system creation, and developer handoff documentation. We design screens for onboarding flows, dashboards, transaction views, settings, and all core user journeys within the application. Whether you need complete mobile app UI design from scratch or a redesign of an existing product, we deliver mobile interfaces that improve usability and visual quality for businesses across India.',
    faqs: [
      {
        q: 'What is mobile UI design?',
        a: 'Mobile UI design focuses on creating the visual layout, components, and interactions for mobile application screens on Android and iOS platforms.',
      },
      {
        q: 'How much does mobile UI design cost in India?',
        a: 'Mobile UI design projects in India typically range from ₹80,000 to ₹4,00,000 depending on the number of screens and design complexity.',
      },
      {
        q: 'Do you design for both Android and iOS?',
        a: 'Yes. We design mobile interfaces following platform-specific guidelines for both iOS and Android.',
      },
      {
        q: 'Do you create interactive prototypes?',
        a: 'Yes. We deliver clickable prototypes that demonstrate user flows and interactions before development begins.',
      },
      {
        q: 'Do you create design systems for mobile apps?',
        a: 'Yes. We build component libraries and design tokens that ensure consistency across all screens.',
      },
      {
        q: 'Do you provide developer handoff?',
        a: 'Yes. We deliver developer-ready Figma files with annotated specifications, assets, and component documentation.',
      },
      {
        q: 'Do you provide mobile UI design services in Mumbai and Pune?',
        a: 'Yes. We design mobile interfaces for startups and product companies across Mumbai and Pune.',
      },
    ],
    offer: [80000, 400000],
  },

  '/services/on-page-seo': {
    name: 'on-page seo',
    description:
      'We provide on-page SEO services in India, helping businesses in Mumbai, Pune, Bangalore, and other digital markets optimize individual web pages to rank higher in search engines and attract more qualified organic traffic. On-page SEO covers all the elements within a webpage that influence search rankings, including content quality, keyword optimization, page structure, internal linking, and metadata. Many businesses have websites with untapped ranking potential because individual pages lack proper optimization aligned with target search queries. Our team conducts thorough on-page audits and implements structured optimization across all key service pages, landing pages, and blog content. We work with startups, service businesses, eCommerce stores, and SaaS platforms that want to improve organic visibility for specific keywords and service categories. Our on-page SEO services include keyword research, content optimization, title tag and meta description writing, header structure improvement, internal linking strategy, and image optimization. Whether you need a single-page optimization or a site-wide on-page SEO program, we deliver improvements that increase organic rankings and qualified traffic for businesses across India.',
    faqs: [
      {
        q: 'What is on-page SEO?',
        a: 'On-page SEO involves optimizing individual web pages — including content, headings, metadata, and internal links — to rank higher for target keywords in search results.',
      },
      {
        q: 'Why is on-page SEO important?',
        a: 'On-page SEO ensures that search engines understand what each page is about, helping pages rank for relevant queries and attract qualified traffic.',
      },
      {
        q: 'How much do on-page SEO services cost in India?',
        a: 'On-page SEO projects in India typically range from ₹30,000 to ₹2,00,000 depending on the number of pages and optimization depth.',
      },
      {
        q: 'Do you perform keyword research for on-page optimization?',
        a: 'Yes. Every on-page optimization is grounded in keyword research to ensure pages target the right queries.',
      },
      {
        q: 'Do you optimize meta titles and descriptions?',
        a: 'Yes. We rewrite title tags and meta descriptions to improve click-through rates from search results.',
      },
      {
        q: 'Do you improve internal linking as part of on-page SEO?',
        a: 'Yes. Internal linking improvements are a core part of our on-page optimization process.',
      },
      {
        q: 'Do you provide on-page SEO services in Mumbai and Pune?',
        a: 'Yes. We optimize websites for businesses across Mumbai and Pune.',
      },
    ],
    offer: [30000, 200000],
  },

  '/services/payment-integration': {
    name: 'payment gateway integration',
    description:
      'We provide payment gateway integration services in India, helping businesses integrate secure, reliable payment systems into websites, mobile applications, and digital platforms. Smooth payment experiences directly impact conversion rates, customer trust, and transaction completion rates for eCommerce stores, SaaS platforms, marketplace businesses, and service companies. Our team integrates leading Indian and international payment gateways including Razorpay, PayU, Cashfree, Stripe, and PayPal into web and mobile applications. We work with startups, eCommerce brands, subscription businesses, and marketplaces across Mumbai, Pune, Bangalore, and other Indian cities. Our payment integration services include gateway selection consulting, API integration, webhook configuration, subscription billing, split payments, refund management, and compliance with RBI and PCI DSS guidelines. Whether you need a basic checkout integration or a complex multi-party payment flow with escrow, we build payment infrastructure that handles transactions securely and reliably for businesses across India.',
    faqs: [
      {
        q: 'Which payment gateways do you integrate?',
        a: 'We integrate Razorpay, PayU, Cashfree, Stripe, PayPal, and other gateways depending on business requirements.',
      },
      {
        q: 'How much does payment gateway integration cost in India?',
        a: 'Payment integration projects in India typically range from ₹40,000 to ₹2,50,000 depending on complexity and features required.',
      },
      {
        q: 'Do you support UPI payments?',
        a: 'Yes. We integrate UPI payment flows through Razorpay, Cashfree, and other platforms that support UPI.',
      },
      {
        q: 'Do you build subscription billing systems?',
        a: 'Yes. We implement recurring billing, subscription management, and dunning workflows for SaaS and membership businesses.',
      },
      {
        q: 'Do you handle split payments for marketplaces?',
        a: 'Yes. We implement multi-party payment splitting and vendor payout systems for marketplace platforms.',
      },
      {
        q: 'Is your payment integration PCI DSS compliant?',
        a: 'Yes. We follow secure payment integration practices that comply with PCI DSS and RBI guidelines.',
      },
      {
        q: 'Do you provide payment integration services in Mumbai and Pune?',
        a: 'Yes. We integrate payment systems for businesses and startups across Mumbai and Pune.',
      },
    ],
    offer: [40000, 250000],
  },

  '/services/product-engineering': {
    name: 'product engineering',
    description:
      'We provide product engineering services in India, helping startups and technology companies in Mumbai, Pune, Bangalore, and other ecosystems design, build, and scale digital products. Product engineering goes beyond development — it encompasses product thinking, architecture decisions, iterative development, and technical quality to build software products that users love and businesses can scale. Our team works as an embedded product engineering partner for founders and product leaders who need full-stack technical execution combined with strategic product thinking. We build SaaS products, consumer applications, B2B platforms, and internal tools using modern engineering practices including agile development, continuous deployment, and test-driven quality assurance. Our product engineering services include product scoping, technical architecture design, frontend and backend development, API design, cloud deployment, performance optimization, and ongoing product iteration. Whether you are building your first product MVP or scaling an existing platform, we provide the engineering expertise and product discipline needed to ship high-quality digital products faster.',
    faqs: [
      {
        q: 'What is product engineering?',
        a: 'Product engineering combines software development with product thinking to design, build, and iterate on digital products that solve user problems and achieve business goals.',
      },
      {
        q: 'How is product engineering different from custom software development?',
        a: 'Product engineering focuses on building user-facing software products with continuous iteration, whereas custom software development often targets internal business systems and process automation.',
      },
      {
        q: 'How much does product engineering cost in India?',
        a: 'Product engineering engagements in India typically range from ₹3,00,000 to ₹25,00,000 depending on product complexity and team size.',
      },
      {
        q: 'Do you build SaaS products?',
        a: 'Yes. We design and build SaaS platforms including multi-tenant architecture, subscription management, and user dashboards.',
      },
      {
        q: 'Do you work as a dedicated product engineering team?',
        a: 'Yes. We can work as an extended product team for startups that need full-stack engineering without building an in-house team.',
      },
      {
        q: 'Do you follow agile development practices?',
        a: 'Yes. We use sprint-based agile workflows with regular planning, reviews, and retrospectives.',
      },
      {
        q: 'Do you provide product engineering services in Mumbai and Pune?',
        a: 'Yes. We partner with startups and product companies across Mumbai and Pune.',
      },
    ],
    offer: [300000, 2500000],
  },

  '/services/product-strategy': {
    name: 'product strategy',
    description:
      'We provide product strategy services in India, helping startup founders and product leaders in Mumbai, Pune, Bangalore, and other technology ecosystems define clear product visions, prioritize features, and build executable roadmaps that align development with business objectives. Many technology products fail not because of poor execution but because of unclear strategy, misaligned priorities, or a lack of market understanding. Our product strategy engagements help teams cut through ambiguity, validate assumptions, and focus engineering resources on the features and workflows that drive the most business value. We work with early-stage startups defining their initial product scope, scaling companies managing growing product complexity, and enterprises planning new digital product lines. Our product strategy services include product discovery workshops, user research synthesis, competitive analysis, feature prioritization frameworks, product roadmap development, and go-to-market alignment. Whether you are defining a new product from scratch or rethinking an existing one, we provide the strategic clarity needed to build products that users need and businesses can grow.',
    faqs: [
      {
        q: 'What is product strategy?',
        a: 'Product strategy defines the vision, goals, and prioritized roadmap for a digital product to ensure development efforts align with user needs and business objectives.',
      },
      {
        q: 'When should a startup invest in product strategy?',
        a: 'Before significant development investment. A clear product strategy prevents costly pivots and ensures the team is building the right product for the right market.',
      },
      {
        q: 'How much does product strategy cost in India?',
        a: 'Product strategy engagements in India typically range from ₹60,000 to ₹4,00,000 depending on scope and deliverables.',
      },
      {
        q: 'Do you conduct product discovery workshops?',
        a: 'Yes. We run structured discovery workshops with founders and stakeholders to align on product vision and priorities.',
      },
      {
        q: 'Do you create product roadmaps?',
        a: 'Yes. We deliver structured product roadmaps with phased feature priorities aligned to business goals.',
      },
      {
        q: 'Do you conduct user research?',
        a: 'Yes. We synthesize user research findings into actionable product insights and feature recommendations.',
      },
      {
        q: 'Do you provide product strategy consulting in Mumbai and Pune?',
        a: 'Yes. We work with founders and product teams across Mumbai and Pune.',
      },
    ],
    offer: [60000, 400000],
  },

  '/services/saas-development': {
    name: 'saas development',
    description:
      'We provide SaaS development services in India, helping founders and technology companies in Mumbai, Pune, Bangalore, and other ecosystems build scalable software-as-a-service products. SaaS businesses require specific technical architecture — multi-tenancy, subscription billing, user management, analytics, and API access — that differs significantly from standard application development. Our team designs and builds SaaS platforms from MVP to production-ready products used by paying customers. We work with early-stage founders validating new SaaS ideas, growing companies adding product features, and enterprises building internal SaaS tools. Our SaaS development services include product scoping, technical architecture design, frontend and backend development, subscription billing integration, multi-tenant database design, onboarding flows, admin dashboards, and cloud deployment. Whether you are building a vertical SaaS for a specific industry, a horizontal productivity tool, or a developer-facing API product, we provide the engineering expertise to build and scale SaaS products that generate recurring revenue.',
    faqs: [
      {
        q: 'What is SaaS development?',
        a: 'SaaS development involves building cloud-based software products that customers access via subscription, typically through a web browser or API.',
      },
      {
        q: 'How much does SaaS development cost in India?',
        a: 'SaaS development projects in India typically range from ₹5,00,000 to ₹30,00,000 depending on product complexity and feature scope.',
      },
      {
        q: 'How long does it take to build a SaaS MVP?',
        a: 'A SaaS MVP typically takes 8–14 weeks depending on core feature scope, integrations, and design requirements.',
      },
      {
        q: 'Do you build multi-tenant SaaS architecture?',
        a: 'Yes. We design multi-tenant database structures and authentication systems for SaaS platforms.',
      },
      {
        q: 'Do you integrate subscription billing?',
        a: 'Yes. We integrate recurring billing systems including Razorpay subscriptions, Stripe billing, and custom subscription management.',
      },
      {
        q: 'Do you build SaaS admin dashboards?',
        a: 'Yes. We build internal admin panels for managing users, subscriptions, and platform health.',
      },
      {
        q: 'Do you provide SaaS development services in Mumbai and Pune?',
        a: 'Yes. We build SaaS products for founders and companies across Mumbai and Pune.',
      },
    ],
    offer: [500000, 3000000],
  },

  '/services/saas-ui-design': {
    name: 'saas ui design',
    description:
      'We provide SaaS UI design services in India, helping software companies and founders in Mumbai, Pune, Bangalore, and other technology ecosystems design clean, functional, and scalable user interfaces for web-based software products. SaaS products have unique design challenges — complex feature sets, data-heavy screens, varied user roles, and the need for consistent design systems across dozens of views. Poor SaaS UI leads to user confusion, high support costs, and elevated churn rates. Our design team creates SaaS interfaces that balance visual clarity with functional density, making complex software feel intuitive and easy to learn. We work with early-stage SaaS founders needing their first product design and scaling companies redesigning existing interfaces for better usability. Our SaaS UI design services include user flow design, information architecture, wireframing, high-fidelity screen design, component library development, and developer handoff. Whether you are designing a new SaaS product from scratch or improving an existing one, we deliver design systems and screen designs that improve user satisfaction and reduce churn.',
    faqs: [
      {
        q: 'What is SaaS UI design?',
        a: 'SaaS UI design focuses on creating user interface systems for web-based software products, covering dashboards, data tables, settings, onboarding flows, and all user-facing screens.',
      },
      {
        q: 'How much does SaaS UI design cost in India?',
        a: 'SaaS UI design projects in India typically range from ₹1,00,000 to ₹6,00,000 depending on product scope and number of screens.',
      },
      {
        q: 'Do you design SaaS dashboards?',
        a: 'Yes. We design data dashboards, analytics views, and management interfaces for SaaS products.',
      },
      {
        q: 'Do you create SaaS design systems?',
        a: 'Yes. We build reusable component libraries and design tokens that ensure consistency across all product screens.',
      },
      {
        q: 'Do you design SaaS onboarding flows?',
        a: 'Yes. We design onboarding experiences that help new users activate quickly and understand core product value.',
      },
      {
        q: 'Do you provide developer-ready design handoffs?',
        a: 'Yes. We deliver annotated Figma files with all specifications, components, and assets ready for development.',
      },
      {
        q: 'Do you provide SaaS UI design services in Mumbai and Pune?',
        a: 'Yes. We design SaaS interfaces for software companies and founders across Mumbai and Pune.',
      },
    ],
    offer: [100000, 600000],
  },

  '/services/seo-audit': {
    name: 'seo audit',
    description:
      'We provide SEO audit services in India, helping businesses in Mumbai, Pune, Bangalore, and other major digital markets identify the technical, content, and authority issues preventing their websites from ranking in Google search results. An SEO audit is the essential first step for any website that wants to improve organic search performance systematically. Without a thorough audit, SEO efforts are unfocused and often address symptoms rather than root causes of poor ranking performance. Our SEO audit process covers technical health, site architecture, content quality, on-page optimization, internal linking, backlink profile analysis, Core Web Vitals, and competitive positioning. We work with startups launching new websites, businesses experiencing traffic drops, and established companies wanting a comprehensive baseline before investing in SEO. Our SEO audit deliverables include a prioritized issues report, competitive benchmarking, keyword opportunity analysis, and a structured action plan with specific recommendations. Whether you need a quick health check or a comprehensive strategic SEO audit, we provide the clarity needed to build an effective search optimization program.',
    faqs: [
      {
        q: 'What is an SEO audit?',
        a: "An SEO audit is a systematic evaluation of a website's technical health, content quality, backlink profile, and optimization to identify issues and opportunities for ranking improvement.",
      },
      {
        q: 'How much does an SEO audit cost in India?',
        a: 'SEO audit services in India typically range from ₹20,000 to ₹1,50,000 depending on website size and audit depth.',
      },
      {
        q: 'What does an SEO audit include?',
        a: 'Our audits cover technical SEO, crawlability, indexation, content quality, on-page optimization, Core Web Vitals, internal linking, and backlink profile analysis.',
      },
      {
        q: 'How long does an SEO audit take?',
        a: 'A comprehensive SEO audit typically takes 5–10 business days depending on website size.',
      },
      {
        q: 'Do you provide an action plan with the audit?',
        a: 'Yes. Every audit includes a prioritized recommendations report so you know exactly what to fix and in what order.',
      },
      {
        q: 'Can an SEO audit help diagnose a traffic drop?',
        a: 'Yes. We analyze historical data, algorithm updates, and technical changes to diagnose and explain organic traffic losses.',
      },
      {
        q: 'Do you provide SEO audits in Mumbai and Pune?',
        a: 'Yes. We audit websites for businesses across Mumbai, Pune, and other Indian cities.',
      },
    ],
    offer: [20000, 150000],
  },

  '/services/seo-blog-writing': {
    name: 'seo blog writing',
    description:
      'We provide SEO blog writing services in India, helping businesses in Mumbai, Pune, Bangalore, and other digital markets publish high-quality, search-optimized content that attracts organic traffic, builds topical authority, and generates inbound leads. Consistent blog publishing is one of the most effective long-term SEO strategies, yet most businesses struggle to produce content at the volume, quality, and frequency needed to rank competitively. Our writing team combines SEO expertise with industry research to create blog articles that rank in Google and genuinely inform and engage target audiences. We work with B2B technology companies, SaaS platforms, consulting firms, healthcare providers, and service businesses that want to build organic traffic through content. Every article we write is grounded in keyword research, aligned with search intent, structured for readability, and optimized with proper metadata, heading hierarchy, internal links, and schema markup. Whether you need one article per week or a high-volume content production program, we deliver SEO blog content that builds long-term organic visibility for businesses across India.',
    faqs: [
      {
        q: 'What is SEO blog writing?',
        a: 'SEO blog writing involves creating articles that are researched, optimized, and structured to rank for target keywords while providing genuine value to readers.',
      },
      {
        q: 'How much does SEO blog writing cost in India?',
        a: 'SEO blog writing in India typically ranges from ₹3,000 to ₹15,000 per article depending on length, research depth, and subject complexity.',
      },
      {
        q: 'How many words should an SEO blog post be?',
        a: 'Optimal length varies by keyword and competition. Most competitive topics require 1,500–3,000 word articles for ranking, though some queries rank with shorter content.',
      },
      {
        q: 'Do you perform keyword research before writing?',
        a: 'Yes. Every article starts with keyword research to ensure the content targets relevant search queries with realistic ranking potential.',
      },
      {
        q: 'Do you write content for technical industries?',
        a: 'Yes. We write SEO content for technology, SaaS, fintech, healthcare, logistics, and other specialized industries.',
      },
      {
        q: 'Do you optimize articles with metadata and schema?',
        a: 'Yes. We include optimized title tags, meta descriptions, header structure, internal links, and schema where applicable.',
      },
      {
        q: 'Do you provide SEO blog writing services in Mumbai and Pune?',
        a: 'Yes. We write SEO blog content for businesses across Mumbai, Pune, and other Indian cities.',
      },
    ],
    offer: [3000, 15000],
  },

  '/services/seo-services': {
    name: 'seo services',
    description:
      'We provide comprehensive SEO services in India, helping businesses in Mumbai, Pune, Bangalore, and other competitive markets build sustainable organic search visibility, attract qualified traffic, and generate consistent inbound leads. SEO remains the highest ROI digital marketing channel for businesses with longer sales cycles and research-driven buyers. Our team delivers full-service SEO programs covering technical optimization, content strategy, on-page improvements, and authority building for startups, SMEs, and enterprises. We work across industries including technology, fintech, healthcare, eCommerce, education, real estate, and professional services. Our SEO programs are tailored to business goals — whether you want to rank for local Mumbai keywords, dominate a niche vertical, or build national organic reach. Services include technical SEO audits, keyword research, content planning, on-page optimization, link building, and monthly performance reporting. Whether you need a focused SEO sprint or a long-term managed SEO program, we deliver measurable organic growth for businesses across India.',
    faqs: [
      {
        q: 'What is SEO and why does my business need it?',
        a: 'SEO helps your website rank higher in Google search results, driving organic traffic from people actively searching for your services without paying per click.',
      },
      {
        q: 'How much do SEO services cost in India?',
        a: 'SEO programs in India typically range from ₹20,000 to ₹1,50,000 per month depending on competition, website size, and service scope.',
      },
      {
        q: 'How long does SEO take to show results?',
        a: 'Most businesses see measurable ranking improvements within 3-6 months, with significant traffic growth developing over 6-12 months of consistent SEO work.',
      },
      {
        q: 'Do you provide local SEO for Mumbai businesses?',
        a: 'Yes. We specialize in local SEO for businesses in Mumbai, Pune, and other Indian cities, targeting geo-specific keywords and Google Business Profile optimization.',
      },
      {
        q: 'Do you build backlinks?',
        a: 'Yes. Link building is part of our SEO programs through editorial outreach, content promotion, and digital PR strategies.',
      },
      {
        q: 'Do you provide SEO for competitive industries?',
        a: 'Yes. We have experience with highly competitive niches including fintech, real estate, eCommerce, and B2B technology services.',
      },
      {
        q: 'Do you provide monthly SEO reporting?',
        a: 'Yes. We provide detailed monthly reports covering rankings, traffic, technical health, and next-month priorities.',
      },
    ],
    offer: [20000, 150000],
  },

  '/services/social-media-management': {
    name: 'social media management',
    description:
      'We provide social media management services in India, helping businesses in Mumbai, Pune, Bangalore, and other major markets build consistent brand presence, grow engaged audiences, and generate leads through strategic social media content and community management. Social media is a critical touchpoint for brand visibility, customer trust, and audience engagement for businesses across B2B services, eCommerce, healthcare, education, and hospitality sectors. Our team manages brand social media profiles on LinkedIn, Instagram, Facebook, and other platforms relevant to your audience. We work with startups, SMEs, and enterprises that want to maintain a professional, consistent social presence without dedicating internal resources to content creation and community management. Our social media management services include content strategy, post design, copywriting, publishing, community engagement, hashtag strategy, and monthly performance reporting. Whether you need full social media management or content production support for your team, we help businesses across India build stronger digital brand presence and audience engagement.',
    faqs: [
      {
        q: 'What does social media management include?',
        a: 'Social media management includes content strategy, graphic design, copywriting, post scheduling, community management, and performance analysis across social platforms.',
      },
      {
        q: 'How much does social media management cost in India?',
        a: 'Social media management in India typically ranges from ₹15,000 to ₹80,000 per month depending on platforms, posting frequency, and content complexity.',
      },
      {
        q: 'Which social media platforms do you manage?',
        a: 'We manage LinkedIn, Instagram, Facebook, and Twitter/X accounts depending on audience and business goals.',
      },
      {
        q: 'Do you create graphic designs for social media?',
        a: 'Yes. We design all social media graphics, templates, and visual content aligned with brand identity.',
      },
      {
        q: 'Do you write social media captions and copy?',
        a: 'Yes. We write all captions, hashtags, and engagement copy for every post.',
      },
      {
        q: 'Do you manage LinkedIn for B2B companies?',
        a: 'Yes. LinkedIn management for B2B brands is a core part of our social media services.',
      },
      {
        q: 'Do you provide social media management in Mumbai and Pune?',
        a: 'Yes. We manage social media for businesses across Mumbai, Pune, and other Indian cities.',
      },
    ],
    offer: [15000, 80000],
  },

  '/services/software-consulting': {
    name: 'software consulting',
    description:
      'We provide software consulting services in India, helping businesses in Mumbai, Pune, Bangalore, and other technology markets evaluate, plan, and optimize their software systems and technology investments. Many businesses face challenges with outdated systems, poor software choices, unscalable architecture, or unclear technology roadmaps that limit growth and operational efficiency. Our software consulting team works with founders, CTOs, and business leaders to diagnose technology problems, evaluate options, and define actionable improvement plans. We provide objective guidance on software architecture, technology stack selection, vendor evaluation, build-versus-buy decisions, and system modernization strategies. Our consulting engagements are structured and time-bound, delivering clear recommendations, decision frameworks, and implementation roadmaps. Whether you need a technical assessment of your current systems, guidance on selecting enterprise software, or a modernization strategy for legacy platforms, we provide the clarity and expertise needed to make confident technology decisions for businesses across India.',
    faqs: [
      {
        q: 'What is software consulting?',
        a: 'Software consulting provides expert guidance on technology decisions, architecture, vendor selection, and system optimization to help businesses use technology more effectively.',
      },
      {
        q: 'When should a business hire software consultants?',
        a: 'When planning a major technology investment, evaluating system modernization, experiencing performance issues with current software, or needing a second opinion before a significant build decision.',
      },
      {
        q: 'How much does software consulting cost in India?',
        a: 'Software consulting engagements in India typically range from ₹50,000 to ₹4,00,000 depending on scope and deliverable requirements.',
      },
      {
        q: 'Do you evaluate existing software systems?',
        a: 'Yes. We assess current systems for scalability, security, performance, and technical debt.',
      },
      {
        q: 'Do you help with vendor and technology selection?',
        a: 'Yes. We define requirements, evaluate options, and provide structured vendor comparison recommendations.',
      },
      {
        q: 'Do you advise on legacy system modernization?',
        a: 'Yes. We create modernization strategies including migration plans, refactoring approaches, and replacement timelines.',
      },
      {
        q: 'Do you provide software consulting in Mumbai and Pune?',
        a: 'Yes. We work with businesses and technology teams across Mumbai and Pune.',
      },
    ],
    offer: [50000, 400000],
  },

  '/services/startup-consulting': {
    name: 'startup consulting',
    description:
      'We provide startup consulting services in India, helping early-stage founders in Mumbai, Pune, Bangalore, and other entrepreneurial ecosystems navigate critical early decisions around product development, technology architecture, go-to-market strategy, and operational setup. Building a startup requires making consequential decisions under uncertainty — wrong technology choices, premature scaling, or unclear positioning can cost founders months and significant capital. Our startup consulting team works with pre-seed and seed-stage founders who want experienced guidance on shaping their product, technology, and market approach before committing to large development investments. We provide advisory support across product scope definition, technical architecture planning, MVP development strategy, digital marketing setup, and early growth frameworks. Our consulting process is practical and execution-focused, delivering concrete recommendations rather than theoretical frameworks. Whether you are validating a new idea, preparing for your first fundraise, or navigating your first 100 customers, we provide the strategic and technical guidance needed to build smarter and faster in the Indian startup ecosystem.',
    faqs: [
      {
        q: 'What is startup consulting?',
        a: 'Startup consulting provides early-stage founders with expert guidance on product, technology, marketing, and operations to reduce risk and accelerate growth.',
      },
      {
        q: 'When should a startup hire a consultant?',
        a: 'Before significant development investment, when facing a major strategic decision, or when experiencing early-stage growth challenges that need structured solutions.',
      },
      {
        q: 'How much does startup consulting cost in India?',
        a: 'Startup consulting engagements in India typically range from ₹40,000 to ₹3,00,000 depending on scope and advisory duration.',
      },
      {
        q: 'Do you help with MVP planning?',
        a: 'Yes. We help founders define the right MVP scope — what to build first, what to defer, and how to validate assumptions cheaply.',
      },
      {
        q: 'Do you advise on technology stack for startups?',
        a: 'Yes. We recommend technology choices based on startup stage, team capability, and long-term scalability requirements.',
      },
      {
        q: 'Do you support fundraise preparation?',
        a: 'Yes. We can help with technical due diligence preparation and technology narrative for investor conversations.',
      },
      {
        q: 'Do you provide startup consulting in Mumbai and Pune?',
        a: 'Yes. We work with founders across Mumbai, Pune, and other Indian startup ecosystems.',
      },
    ],
    offer: [40000, 300000],
  },

  '/services/technical-advisory': {
    name: 'technical advisory',
    description:
      'We provide technical advisory services in India, helping business leaders, non-technical founders, and boards in Mumbai, Pune, Bangalore, and other markets make informed technology decisions with the support of experienced engineering guidance. Many organizations make costly technology mistakes because business decision-makers lack the technical depth to evaluate vendor proposals, architecture decisions, or development team performance objectively. Our technical advisors serve as trusted, independent experts who translate complex technical topics into business-relevant insights and help leaders ask the right questions. We work with non-technical founders managing development teams, business leaders evaluating technology vendors, and boards overseeing digital transformation programs. Our technical advisory services include technology due diligence, architecture review, vendor assessment, development team evaluation, and strategic technical guidance on an ongoing or project basis. Whether you need a technical advisor for a specific decision or ongoing support as a fractional CTO, we provide the engineering expertise that gives business leaders confidence in their technology choices.',
    faqs: [
      {
        q: 'What is technical advisory?',
        a: 'Technical advisory provides expert technology guidance to business leaders and non-technical founders, helping them make informed decisions about software, vendors, and engineering teams.',
      },
      {
        q: 'Who needs technical advisory services?',
        a: 'Non-technical founders managing development teams, business leaders evaluating technology vendors, and organizations going through digital transformation benefit most.',
      },
      {
        q: 'How much do technical advisory services cost in India?',
        a: 'Technical advisory retainers in India typically range from ₹40,000 to ₹2,50,000 per month depending on engagement depth and time commitment.',
      },
      {
        q: 'Do you offer fractional CTO services?',
        a: 'Yes. We can serve as a fractional CTO for startups and SMEs that need senior technology leadership without a full-time hire.',
      },
      {
        q: 'Do you review vendor proposals and contracts?',
        a: 'Yes. We evaluate technology vendor proposals and highlight risks, hidden costs, and technical assumptions.',
      },
      {
        q: 'Do you audit existing development teams?',
        a: 'Yes. We assess development team processes, code quality, and delivery performance.',
      },
      {
        q: 'Do you provide technical advisory in Mumbai and Pune?',
        a: 'Yes. We work with business leaders and founders across Mumbai and Pune.',
      },
    ],
    offer: [40000, 250000],
  },

  '/services/technical-seo': {
    name: 'technical seo',
    description:
      'We provide technical SEO services in India, helping businesses in Mumbai, Pune, Bangalore, and other major digital markets build strong search engine foundations that support long-term organic growth. Technical SEO ensures that search engines can efficiently crawl, index, and understand your website — without these foundations, even high-quality content cannot rank effectively. Our technical SEO team works with startups, SaaS platforms, eCommerce stores, and enterprises that want to fix underlying website issues preventing ranking performance. We identify and resolve crawlability problems, indexation errors, duplicate content issues, slow page speeds, poor site architecture, and missing structured data. Our technical SEO services include comprehensive website audits, crawl budget optimization, canonical tag implementation, XML sitemap management, robots.txt configuration, Core Web Vitals improvements, schema markup implementation, and log file analysis. Whether you have an existing ranking penalty, a newly launched website needing proper setup, or an established site requiring a thorough health check, we deliver technical SEO improvements that create the foundation for sustainable organic growth.',
    faqs: [
      {
        q: 'What is technical SEO?',
        a: "Technical SEO focuses on improving a website's technical infrastructure so search engines can crawl, index, and rank pages efficiently.",
      },
      {
        q: 'How do I know if my website has technical SEO issues?',
        a: 'Signs include pages not appearing in Google search, sudden traffic drops, slow loading times, duplicate content warnings, or poor Core Web Vitals scores.',
      },
      {
        q: 'How much do technical SEO services cost in India?',
        a: 'Technical SEO services in India typically range from ₹50,000 to ₹4,00,000 depending on website complexity and issue depth.',
      },
      {
        q: 'Do you fix indexing and crawl issues?',
        a: 'Yes. Crawl and indexation fixes are a core part of our technical SEO services.',
      },
      {
        q: 'Do you implement schema markup?',
        a: 'Yes. We implement appropriate structured data schemas including LocalBusiness, FAQ, Article, Product, and other relevant types.',
      },
      {
        q: 'Do you optimize Core Web Vitals?',
        a: 'Yes. We diagnose and improve LCP, CLS, and INP scores as part of technical SEO optimization.',
      },
      {
        q: 'Do you provide technical SEO services in Mumbai and Pune?',
        a: 'Yes. We support businesses across Mumbai and Pune with technical website optimization.',
      },
    ],
    offer: [50000, 400000],
  },

  '/services/technology-roadmaps': {
    name: 'technology roadmap planning',
    description:
      'We provide technology roadmap planning services in India, helping businesses in Mumbai, Pune, Bangalore, and other major markets create structured, phased plans for technology investment, product development, and digital transformation. A technology roadmap translates business goals into prioritized engineering and digital initiatives, ensuring every technology investment is aligned with company strategy and growth objectives. Many organizations operate with ad-hoc technology decisions that lack strategic sequencing, resulting in technical debt, misaligned systems, and wasted investment. Our roadmap planning engagements work with leadership teams and CTOs to assess current technology capabilities, define future-state requirements, and build executable multi-phase roadmaps with clear milestones and priorities. We deliver roadmaps for product development, infrastructure modernization, digital marketing maturity, and organizational technology capability building. Whether you are planning a 12-month product development sprint or a multi-year digital transformation, we provide the strategic technology planning needed to make investments with confidence.',
    faqs: [
      {
        q: 'What is a technology roadmap?',
        a: 'A technology roadmap is a strategic plan that outlines technology investments, development priorities, and milestones aligned with business goals over a defined time horizon.',
      },
      {
        q: 'Who needs technology roadmap planning?',
        a: 'Startups planning product development phases, enterprises managing digital transformation, and businesses evaluating major technology investments benefit from structured roadmaps.',
      },
      {
        q: 'How much does technology roadmap planning cost in India?',
        a: 'Technology roadmap engagements in India typically range from ₹60,000 to ₹4,00,000 depending on scope and stakeholder complexity.',
      },
      {
        q: 'What does a technology roadmap include?',
        a: 'A roadmap includes current-state assessment, future-state vision, phased initiatives, resource requirements, dependencies, milestones, and success metrics.',
      },
      {
        q: 'Do you facilitate roadmap workshops with leadership teams?',
        a: 'Yes. We run structured workshops to align stakeholders and gather the inputs needed to build an accurate roadmap.',
      },
      {
        q: 'Do you create product development roadmaps?',
        a: 'Yes. We build phased product roadmaps that sequence feature development against business priorities.',
      },
      {
        q: 'Do you provide technology roadmap services in Mumbai and Pune?',
        a: 'Yes. We work with leadership teams and founders across Mumbai and Pune.',
      },
    ],
    offer: [60000, 400000],
  },

  '/services/third-party-integration': {
    name: 'third-party integrations',
    description:
      'We provide third-party integration services in India, helping businesses in Mumbai, Pune, Bangalore, and other technology markets connect their digital platforms with external software, data sources, and service providers. Modern digital products rely on ecosystems of third-party tools — communication platforms, analytics services, CRM systems, payment processors, logistics APIs, and marketing automation — and seamless integration between these systems is essential for operational efficiency. Our integration team designs and builds reliable connections between web applications, mobile platforms, enterprise software, and third-party APIs. We work with SaaS companies, eCommerce platforms, startups, and enterprises that need to automate workflows, synchronize data, and extend platform functionality through external services. Our third-party integration services include API research and selection, integration architecture design, webhook implementation, data mapping, error handling, and ongoing maintenance. Whether you need a single integration or a complex multi-system data pipeline, we build reliable connectors that keep your digital ecosystem functioning smoothly.',
    faqs: [
      {
        q: 'What are third-party integrations?',
        a: 'Third-party integrations connect your software platform with external services and tools through APIs, enabling data exchange and workflow automation across systems.',
      },
      {
        q: 'How much do integration services cost in India?',
        a: 'Integration projects in India typically range from ₹50,000 to ₹3,00,000 depending on the number of systems and data complexity.',
      },
      {
        q: 'Which types of systems do you integrate?',
        a: 'We integrate CRMs, ERPs, payment gateways, communication tools, analytics platforms, logistics APIs, marketing platforms, and custom third-party APIs.',
      },
      {
        q: 'Do you build webhook-based integrations?',
        a: 'Yes. We implement real-time webhook systems for event-driven data exchange between platforms.',
      },
      {
        q: 'Do you handle error management for integrations?',
        a: 'Yes. We build retry logic, error logging, and alerting systems to ensure integrations remain reliable.',
      },
      {
        q: 'Can you integrate Indian platforms like Razorpay, Shiprocket, or Zoho?',
        a: 'Yes. We have experience integrating popular Indian platforms including Razorpay, Shiprocket, Zoho CRM, and other local service providers.',
      },
      {
        q: 'Do you provide integration services in Mumbai and Pune?',
        a: 'Yes. We build integrations for businesses across Mumbai and Pune.',
      },
    ],
    offer: [50000, 300000],
  },

  '/services/ui-ux-design': {
    name: 'ui/ux design',
    description:
      'We provide UI/UX design services in India, helping startups, product companies, and enterprises in Mumbai, Pune, Bangalore, and other technology ecosystems design digital experiences that are intuitive, visually refined, and aligned with user needs. Great design is not just aesthetics — it reduces friction, accelerates user goals, builds trust, and directly impacts product adoption, conversion rates, and customer retention. Our design team works across web applications, mobile apps, SaaS products, eCommerce platforms, and marketing websites. We bring both strategic UX thinking and meticulous visual design execution to every project. Our UI/UX design process includes user research, information architecture, user flow mapping, wireframing, high-fidelity visual design, interactive prototyping, usability testing, and developer handoff. We work with founders building new products, product managers improving existing platforms, and marketing teams redesigning conversion-critical pages. Whether you need end-to-end product design or targeted UX improvements to a specific user journey, we design experiences that improve business outcomes for companies across India.',
    faqs: [
      {
        q: 'What is UI/UX design?',
        a: 'UI design focuses on visual interface elements while UX design focuses on the overall user experience and usability of a product. Together they ensure digital products are both beautiful and easy to use.',
      },
      {
        q: 'How much does UI/UX design cost in India?',
        a: 'UI/UX design projects in India typically range from ₹80,000 to ₹8,00,000 depending on product complexity and scope.',
      },
      {
        q: 'Do you conduct user research?',
        a: 'Yes. We conduct user interviews, surveys, and usability testing to ground design decisions in real user behavior.',
      },
      {
        q: 'Do you create interactive prototypes?',
        a: 'Yes. We deliver clickable Figma prototypes that demonstrate user flows before development begins.',
      },
      {
        q: 'Do you design both web and mobile interfaces?',
        a: 'Yes. We design responsive web experiences and native mobile interfaces for iOS and Android.',
      },
      {
        q: 'Do you provide design systems?',
        a: 'Yes. We build scalable design systems including component libraries, color palettes, typography, and spacing guidelines.',
      },
      {
        q: 'Do you provide UI/UX design services in Mumbai and Pune?',
        a: 'Yes. We design digital products for companies across Mumbai and Pune.',
      },
    ],
    offer: [80000, 800000],
  },

  '/services/ux-research': {
    name: 'ux research',
    description:
      'We provide UX research services in India, helping product teams and businesses in Mumbai, Pune, Bangalore, and other major markets understand their users deeply and make design and product decisions grounded in real behavior, needs, and mental models. Building products without user research leads to features that users do not need, interfaces that cause confusion, and missed opportunities to solve real problems. Our UX research team conducts qualitative and quantitative research to surface insights that inform product strategy, design direction, and marketing messaging. We work with startup founders, product managers, and design teams that want evidence-based input before investing in product development or redesign. Our UX research services include user interviews, contextual inquiry, survey design, usability testing, competitive UX analysis, jobs-to-be-done research, and insight synthesis workshops. Whether you need exploratory research to understand a new market segment or evaluative research to identify friction in an existing product, we deliver actionable insights that reduce product risk for businesses across India.',
    faqs: [
      {
        q: 'What is UX research?',
        a: 'UX research involves studying users — their behaviors, needs, and mental models — to inform product and design decisions with evidence rather than assumptions.',
      },
      {
        q: 'Why is UX research important before building a product?',
        a: "Research reduces the risk of building features users don't need, ensures the product solves real problems, and provides data to prioritize design decisions.",
      },
      {
        q: 'How much does UX research cost in India?',
        a: 'UX research projects in India typically range from ₹60,000 to ₹4,00,000 depending on research methods, participant count, and deliverables.',
      },
      {
        q: 'What research methods do you use?',
        a: 'We use user interviews, usability tests, surveys, contextual inquiry, card sorting, and competitive UX benchmarking.',
      },
      {
        q: 'Do you recruit research participants?',
        a: 'Yes. We help define participant criteria and can support participant recruitment for research studies.',
      },
      {
        q: 'Do you provide usability testing for existing products?',
        a: 'Yes. We test existing interfaces with real users and deliver structured reports with prioritized usability findings.',
      },
      {
        q: 'Do you provide UX research services in Mumbai and Pune?',
        a: 'Yes. We conduct user research for product teams across Mumbai and Pune.',
      },
    ],
    offer: [60000, 400000],
  },

  '/services/website-copywriting': {
    name: 'website copywriting',
    description:
      'We provide website copywriting services in India, helping businesses in Mumbai, Pune, Bangalore, and other major markets write clear, compelling, and SEO-optimized copy that communicates value, builds trust, and converts website visitors into leads and customers. Most websites fail to convert because the copy is vague, product-focused rather than benefit-focused, or fails to speak to the specific problems and goals of the target audience. Our copywriting team combines persuasion principles, SEO best practices, and deep audience research to write website copy that resonates and converts. We write copy for homepages, service pages, landing pages, about pages, and product pages across technology, consulting, healthcare, eCommerce, real estate, and professional services sectors. Our website copywriting process includes audience research, brand voice definition, competitor messaging analysis, page-by-page copy development, and SEO optimization. Whether you are launching a new website or rewriting existing pages to improve conversion performance, we deliver website copy that strengthens your brand and generates more qualified inquiries for businesses across India.',
    faqs: [
      {
        q: 'What is website copywriting?',
        a: 'Website copywriting involves writing the text content on your website — headlines, body copy, calls to action — to clearly communicate your value and persuade visitors to take action.',
      },
      {
        q: 'How much does website copywriting cost in India?',
        a: 'Website copywriting in India typically ranges from ₹15,000 to ₹1,50,000 depending on the number of pages and content depth.',
      },
      {
        q: 'Do you write SEO-optimized copy?',
        a: 'Yes. All website copy is written with target keywords integrated naturally to support organic search rankings.',
      },
      {
        q: 'Do you research competitor messaging?',
        a: 'Yes. Competitor messaging analysis helps us position your brand more distinctively in the market.',
      },
      {
        q: 'Do you write copy for service pages?',
        a: 'Yes. Service page copy is one of our most common deliverables for technology and consulting businesses.',
      },
      {
        q: 'Do you write homepage copy?',
        a: 'Yes. We write homepage copy including hero headlines, value propositions, feature sections, and calls to action.',
      },
      {
        q: 'Do you provide copywriting services in Mumbai and Pune?',
        a: 'Yes. We write website copy for businesses across Mumbai and Pune.',
      },
    ],
    offer: [15000, 150000],
  },

  '/services/website-ui-design': {
    name: 'website ui design',
    description:
      'We provide website UI design services in India, helping businesses in Mumbai, Pune, Bangalore, and other technology markets design visually refined, brand-aligned, and conversion-optimized website interfaces. A professionally designed website builds credibility, communicates brand quality, and directly influences visitor trust and conversion rates. Our design team creates modern website UI designs for corporate websites, startup platforms, SaaS marketing sites, professional service firms, and eCommerce storefronts. We combine visual design expertise with UX principles and conversion best practices to ensure websites look great and perform commercially. Our website UI design process includes competitive design research, brand alignment review, wireframing, visual design, responsive design, and developer handoff. We design with development in mind, ensuring every design is technically achievable and optimized for speed, accessibility, and cross-device consistency. Whether you need a new website design or a redesign of an existing one, we create digital experiences that strengthen brand perception and improve business outcomes for companies across India.',
    faqs: [
      {
        q: 'What is website UI design?',
        a: 'Website UI design focuses on creating the visual layout, typography, color system, and interactive elements of a website to create a cohesive, professional digital presence.',
      },
      {
        q: 'How much does website UI design cost in India?',
        a: 'Website UI design projects in India typically range from ₹50,000 to ₹4,00,000 depending on the number of pages and design complexity.',
      },
      {
        q: 'Do you design responsive websites?',
        a: 'Yes. All our website designs are fully responsive and optimized for desktop, tablet, and mobile.',
      },
      {
        q: 'Do you provide Figma design files?',
        a: 'Yes. We deliver production-ready Figma files with all components, styles, and assets organized for developer handoff.',
      },
      {
        q: 'Do you design landing pages?',
        a: 'Yes. We design campaign landing pages, product pages, and other conversion-focused web pages.',
      },
      {
        q: 'Do you align website design with brand guidelines?',
        a: 'Yes. We work within existing brand guidelines or can develop a visual identity as part of the engagement.',
      },
      {
        q: 'Do you provide website UI design services in Mumbai and Pune?',
        a: 'Yes. We design websites for businesses across Mumbai and Pune.',
      },
    ],
    offer: [50000, 400000],
  },

  '/services/wireframing': {
    name: 'wireframing and prototyping',
    description:
      'We provide wireframing and prototyping services in India, helping product teams, founders, and businesses in Mumbai, Pune, Bangalore, and other technology ecosystems define and visualize product structures before committing to full design and development. Wireframing translates product requirements into clear page layouts and user flows, enabling teams to identify structural issues, misaligned assumptions, and usability problems early — when changes are inexpensive. Our design team creates low-fidelity wireframes and interactive prototypes for web applications, mobile apps, SaaS platforms, eCommerce stores, and marketing websites. We work with founders planning new products, product managers structuring feature additions, and business stakeholders who need to visualize digital products before development investment decisions. Our wireframing process includes requirement analysis, information architecture design, user flow mapping, wireframe creation, and interactive prototype development in Figma. Whether you need wireframes to align your team internally or a clickable prototype for investor presentations or user testing, we deliver clear, structured visualizations that accelerate product decisions for businesses across India.',
    faqs: [
      {
        q: 'What is wireframing?',
        a: 'Wireframing involves creating simplified visual blueprints of web or app pages that show layout, content hierarchy, and user flow without visual design elements.',
      },
      {
        q: 'Why is wireframing important before development?',
        a: 'Wireframes identify structural and usability issues before expensive development begins, saving significant time and cost in revisions.',
      },
      {
        q: 'How much does wireframing cost in India?',
        a: 'Wireframing projects in India typically range from ₹30,000 to ₹2,00,000 depending on the number of screens and complexity.',
      },
      {
        q: 'Do you create interactive prototypes?',
        a: 'Yes. We build clickable Figma prototypes that demonstrate user flows and interactions for testing and presentations.',
      },
      {
        q: 'What tools do you use for wireframing?',
        a: 'We primarily use Figma for both wireframing and interactive prototyping.',
      },
      {
        q: 'Do you wireframe both web and mobile products?',
        a: 'Yes. We create wireframes for web applications, mobile apps, and responsive websites.',
      },
      {
        q: 'Do you provide wireframing services in Mumbai and Pune?',
        a: 'Yes. We work with product teams and founders across Mumbai and Pune.',
      },
    ],
    offer: [30000, 200000],
  },

  '/services/workflow-automation': {
    name: 'workflow automation',
    description:
      'We provide workflow automation services in India, helping businesses in Mumbai, Pune, Bangalore, and other major markets eliminate manual processes, reduce operational overhead, and build scalable systems that run reliably without constant human intervention. Manual workflows in sales, operations, finance, HR, and customer service drain team productivity and introduce errors that cost businesses time and money. Our automation team designs and implements workflow automation solutions using custom code, API integrations, and no-code/low-code platforms to connect systems and trigger actions automatically. We work with SMEs, startups, and enterprises across retail, logistics, consulting, healthcare, and technology sectors that want to scale operations without proportionally scaling headcount. Our workflow automation services include process mapping, automation architecture design, integration development, testing, and documentation. Whether you need to automate lead routing, invoice generation, data synchronization, approval workflows, or customer communication, we build automation systems that free your team to focus on high-value work.',
    faqs: [
      {
        q: 'What is workflow automation?',
        a: 'Workflow automation involves using software to automatically trigger and execute repetitive business tasks that would otherwise require manual effort.',
      },
      {
        q: 'Which business processes can be automated?',
        a: 'Lead routing, invoice generation, data entry, email sequences, approval workflows, inventory updates, customer notifications, and reporting are common automation candidates.',
      },
      {
        q: 'How much does workflow automation cost in India?',
        a: 'Workflow automation projects in India typically range from ₹75,000 to ₹5,00,000 depending on process complexity and system integrations.',
      },
      {
        q: 'Do you use no-code tools for automation?',
        a: 'Yes. We use tools like Zapier, Make, and n8n for suitable use cases, and build custom automation when no-code tools have limitations.',
      },
      {
        q: 'Do you automate multi-system workflows?',
        a: 'Yes. We connect CRMs, ERPs, communication tools, payment systems, and other platforms into automated end-to-end workflows.',
      },
      {
        q: 'How quickly can automation be implemented?',
        a: 'Simple single-process automations can be implemented in 1-2 weeks, while complex multi-system workflows may take 4-8 weeks.',
      },
      {
        q: 'Do you provide workflow automation services in Mumbai and Pune?',
        a: 'Yes. We automate business processes for companies across Mumbai and Pune.',
      },
    ],
    offer: [75000, 500000],
  },
} satisfies Record<string, servicePage>;
