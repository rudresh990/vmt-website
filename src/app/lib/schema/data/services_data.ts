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
      'VoidMatrix Technology delivers custom software development services in India - built for startups, SMEs, and enterprises that need more than what off-the-shelf tools can offer. Based in Mumbai, we design and develop tailored web applications, enterprise platforms, SaaS products, automation tools, and business process software that align with your exact workflows, compliance requirements, and growth targets. Our clients span fintech, healthcare, eCommerce, logistics, manufacturing, and consulting - industries where generic software creates operational bottlenecks rather than solving them. Every engagement starts with deep requirement analysis and moves through architecture planning, UI/UX design, full-stack development, API integration, cloud deployment, and ongoing support. We build on React, Next.js, Node.js, Python, and cloud platforms including AWS and Azure - choosing technologies based on your scalability goals, not convenience. Whether you are replacing a legacy system, launching a new platform, or automating complex internal processes, our custom software development team in Mumbai builds solutions that reduce costs, improve efficiency, and give you complete ownership of your technology.',
    faqs: [
      {
        q: 'How much does custom software development cost in India?',
        a: 'Custom software development in India typically ranges from ₹3,00,000 to ₹25,00,000 or more, depending on the complexity, number of integrations, user roles, and scalability demands. A lightweight internal business tool sits at the lower end; an enterprise-grade SaaS platform with AI components, cloud architecture, and multi-tenant design sits at the higher end. At VMT, we share a detailed cost breakdown after a free scoping session - no surprises, no vague estimates.',
      },
      {
        q: 'How long does it take to build custom software?',
        a: 'A focused MVP typically takes 6-10 weeks. A mid-complexity business platform with integrations and custom workflows runs 3-5 months. Enterprise-grade systems requiring multi-department coordination and compliance reviews can take 6-9 months. We follow an agile sprint model, so you see working software every 2 weeks - not just a delivery at the end.',
      },
      {
        q: 'Why choose custom software over off-the-shelf solutions?',
        a: 'Off-the-shelf tools are built for the average business - which means they are rarely a perfect fit for yours. Custom software is built around your actual processes, giving you better performance, tighter security, full integration capability, and no recurring per-seat licensing costs. Businesses that invest in custom software consistently report higher operational efficiency and lower long-term technology costs versus patching together SaaS subscriptions.',
      },
      {
        q: 'Which industries do you serve?',
        a: 'We have built custom software for businesses in fintech, healthcare, logistics, manufacturing, eCommerce, education, and management consulting. If your industry has unique compliance requirements, workflow complexity, or data sensitivity, custom software almost always outperforms generic alternatives. We are comfortable in both regulated and unregulated sectors.',
      },
      {
        q: 'What technologies do you use?',
        a: 'Our primary stack includes React and Next.js on the frontend, Node.js and Python on the backend, PostgreSQL and MongoDB for data, and AWS or Azure for cloud deployment. We do not push a one-size-fits-all stack - technology decisions are made based on your performance requirements, team capabilities, and long-term maintenance needs.',
      },
      {
        q: 'Do you handle cloud deployment and DevOps?',
        a: 'Yes - cloud deployment, CI/CD pipeline setup, server configuration, infrastructure-as-code, and DevOps automation are all part of our delivery. We do not hand off a codebase and leave you to figure out hosting. Your software launches in a production-ready, monitored cloud environment.',
      },
      {
        q: 'How do you keep the software secure?',
        a: 'Security is built into our development process, not added at the end. We implement secure coding practices, role-based access control, encrypted data storage, JWT and OAuth authentication, secure API design, and pre-launch security reviews. For clients in fintech or healthcare, we align with applicable Indian regulatory and data protection standards.',
      },
      {
        q: 'What happens after launch - do you provide support?',
        a: 'Yes. We offer post-launch maintenance retainers covering bug fixes, performance monitoring, dependency updates, feature additions, and scaling support. Custom software is a living system - we stay involved as your business evolves.',
      },
      {
        q: 'Can the software scale as my user base grows?',
        a: 'Scalability is an architecture decision, not an afterthought. We design systems with horizontal scaling, database optimization, load balancing, and caching layers from the start - whether you are serving 100 users today or planning for 100,000 tomorrow.',
      },
      {
        q: 'Do you sign NDAs before project discussions?',
        a: 'Absolutely. We sign a Non-Disclosure Agreement before any detailed project conversation. Your business idea, operational processes, and proprietary data remain confidential throughout the engagement and after it ends.',
      },
    ],
    offer: [300000, 2500000],
  },

  '/services/website-development': {
    name: 'website development',
    description:
      'VoidMatrix Technology provides professional website development services in India for startups, SMEs, and enterprises that want a digital presence that actually performs. Based in Mumbai, we build modern business websites, corporate platforms, product landing pages, and marketing sites optimized for speed, search rankings, and conversions. Every website we deliver is mobile-first, SEO-architected from the ground up, and built for long-term maintainability - not just a good-looking launch. We serve companies across technology, fintech, healthcare, eCommerce, consulting, and professional services, handling everything from UI/UX design and frontend engineering to backend integration, CMS setup, and cloud deployment. Our process prioritizes clean code, Core Web Vitals performance, and content architecture that helps search engines understand and rank your pages. Whether you are launching your first business website, replacing an underperforming one, or scaling a marketing platform, our Mumbai-based website development team builds digital experiences that generate real business outcomes.',
    faqs: [
      {
        q: 'How much does website development cost in India?',
        a: 'Website development cost in India ranges from ₹25,000 for a straightforward business brochure site to ₹3,00,000 or more for a dynamic platform with custom functionality, eCommerce, or CMS integration. The biggest cost drivers are design complexity, number of pages, backend requirements, and integrations. We offer a free scoping call to give you an accurate estimate before any commitment.',
      },
      {
        q: 'How long does it take to build a professional website?',
        a: 'A standard business website typically takes 3-5 weeks from kickoff to launch. eCommerce sites, content-heavy platforms, or websites with custom backend logic take 5-10 weeks. Timeline depends on content readiness, revision cycles, and feature scope - we share a clear project schedule upfront so nothing is a surprise.',
      },
      {
        q: 'Is SEO included in your website development?',
        a: 'Yes - SEO-friendly architecture is standard in every website we build. This includes proper heading hierarchy, clean URL structures, optimized page speed, mobile-first design, schema markup, and XML sitemap generation. We build sites that search engines can crawl and rank, not just ones that look good.',
      },
      {
        q: 'Can you redesign my existing website without hurting my SEO?',
        a: 'Yes, and this is something we handle carefully. A poor redesign can destroy years of ranking equity. We audit your existing URL structure, backlinks, and indexed pages before redesigning - and implement proper redirects, canonical tags, and content migration to preserve your SEO value while modernizing the site.',
      },
      {
        q: 'Do you provide website maintenance after launch?',
        a: 'Yes. We offer monthly maintenance plans covering security updates, plugin management, performance monitoring, content updates, and uptime tracking. A website is not a one-time project - it needs ongoing care to stay fast, secure, and competitive.',
      },
      {
        q: 'Do you work with businesses in Mumbai and Pune?',
        a: 'Yes - Mumbai and Pune businesses make up a significant share of our client base. We work remotely with structured weekly check-ins, shared project management, and video reviews at every milestone. Location is never a barrier to quality or communication.',
      },
      {
        q: 'Why hire a website development agency in Mumbai instead of a freelancer?',
        a: 'A freelancer might be cheaper upfront, but agencies provide something freelancers rarely can: accountability across design, development, SEO, and post-launch support simultaneously. At VMT, you get a dedicated project manager, a structured process, and a team that handles every layer - so nothing falls through the cracks.',
      },
    ],
    offer: [25000, 500000],
  },

  '/services/enterprise-software-development': {
    name: 'enterprise software development',
    description:
      'VoidMatrix Technology builds enterprise software in India for organizations that have outgrown spreadsheets, disconnected tools, and rigid off-the-shelf systems. Based in Mumbai, our team designs and develops ERP systems, enterprise dashboards, workflow automation platforms, internal management systems, and data-driven business applications for companies across fintech, healthcare, logistics, manufacturing, SaaS, and consulting. Enterprise software demands a different level of engineering rigor - multi-department workflows, complex permission models, high-volume data processing, and integration with legacy systems. We approach every engagement with architecture-first thinking: defining scalable data models, secure authentication systems, and modular codebases that can evolve with your business over years, not months. Our end-to-end delivery covers requirements workshops, system architecture, cloud infrastructure, API development, DevOps automation, user training, and long-term support. If your organization needs software that handles real operational complexity - not a watered-down generic tool - our enterprise development team in Mumbai is built for that.',
    faqs: [
      {
        q: 'What qualifies as enterprise software development?',
        a: 'Enterprise software development involves building large-scale systems that manage complex organizational operations - ERP platforms, workflow automation engines, analytics dashboards, internal portals, and multi-department management tools. These systems typically serve dozens to thousands of internal users and integrate with multiple other business systems.',
      },
      {
        q: 'How much does enterprise software development cost in India?',
        a: 'Enterprise software projects in India range from ₹5,00,000 for a focused departmental tool to ₹40,00,000 or more for a full multi-module ERP or enterprise platform. Cost is driven by the number of modules, user roles, integrations, compliance requirements, and infrastructure complexity. We provide detailed cost estimates after a thorough discovery session.',
      },
      {
        q: 'Which industries need enterprise software most?',
        a: 'Fintech, logistics, healthcare, manufacturing, SaaS, and management consulting are the heaviest users of custom enterprise software in India. These industries deal with high transaction volumes, regulatory complexity, multi-location operations, and data that cannot safely live in generic tools.',
      },
      {
        q: 'How long does enterprise software development take?',
        a: 'Enterprise projects typically run 3-8 months, depending on module count, integration complexity, and testing requirements. We break delivery into phases so you get working functionality early rather than waiting for a full launch. Each phase goes through UAT before moving forward.',
      },
      {
        q: 'Do you build custom ERP systems?',
        a: 'Yes. Custom ERP development is one of our core enterprise offerings. We build modular ERP systems covering finance, operations, HR, inventory, and procurement - designed around your actual workflows rather than forcing you to adapt to software limitations.',
      },
      {
        q: 'Can you integrate the enterprise software with our existing systems?',
        a: 'Yes - legacy system integration is something we do regularly. We connect enterprise software with payment processors, CRMs, analytics platforms, communication tools, third-party APIs, and existing internal systems through secure, well-documented APIs and ETL pipelines.',
      },
      {
        q: 'Do you serve enterprises in Mumbai and Pune?',
        a: 'Yes. We actively work with mid-size and large enterprises in Mumbai, Pune, and other Indian cities. Our remote-first delivery model with structured milestones and dedicated project management works effectively for enterprise clients regardless of location.',
      },
      {
        q: 'How do you ensure the software handles our scale?',
        a: 'Scale is a design decision made before a single line of code is written. We architect enterprise systems with horizontal scalability, database sharding where needed, read replicas for reporting workloads, and load-balanced cloud infrastructure - so the system performs at 10x your current scale.',
      },
    ],
    offer: [500000, 4000000],
  },

  '/services/platform-engineering': {
    name: 'platform engineering',
    description:
      'VoidMatrix Technology provides platform engineering services in India, helping technology companies build internal developer platforms and cloud infrastructure that eliminate deployment friction, standardize engineering practices, and let product teams ship faster. Based in Mumbai, we work with SaaS companies, fintech startups, and enterprise engineering teams that have grown to the point where ad-hoc infrastructure becomes a bottleneck. Platform engineering is the discipline of building the systems that engineering teams build on top of - automated pipelines, self-service deployment environments, container orchestration layers, and observability stacks. We design and implement internal developer platforms, CI/CD pipelines, Kubernetes clusters, infrastructure-as-code systems, and cloud-native deployment environments using tools like Terraform, Helm, GitHub Actions, and AWS or Azure. The result is an engineering organization that deploys confidently, scales reliably, and spends time building product rather than fighting infrastructure.',
    faqs: [
      {
        q: 'What exactly is platform engineering?',
        a: 'Platform engineering is the practice of building internal infrastructure platforms that abstract away operational complexity for product engineering teams. Instead of every developer managing their own deployment, monitoring, and scaling concerns, a platform team builds shared tooling - CI/CD pipelines, environment management, observability - that the whole organization runs on.',
      },
      {
        q: 'How is platform engineering different from DevOps?',
        a: 'DevOps is a philosophy around collaboration between development and operations teams. Platform engineering is the concrete output of that philosophy - the tools, platforms, and automated systems that let development teams operate autonomously. Think of platform engineering as building the product that your engineers use internally.',
      },
      {
        q: 'How much do platform engineering services cost in India?',
        a: 'Platform engineering engagements in India typically range from ₹4,00,000 to ₹30,00,000 depending on team size, existing infrastructure maturity, cloud complexity, and automation depth required. Most engagements start with an infrastructure audit to scope the actual work needed.',
      },
      {
        q: 'Which companies need platform engineering?',
        a: 'You need platform engineering when your engineering team is large enough that deployment inconsistency, environment drift, or manual operations are slowing product delivery. Typically this becomes critical at 5+ engineers or when release cycles exceed 2 weeks due to infrastructure coordination overhead.',
      },
      {
        q: 'Do you build CI/CD pipelines?',
        a: 'Yes - automated CI/CD pipeline design is a core deliverable. We implement pipelines on GitHub Actions, GitLab CI, or Jenkins that handle build, test, security scan, staging deployment, and production promotion - with appropriate approval gates.',
      },
      {
        q: 'Which cloud platforms do you work with?',
        a: 'We work primarily with AWS and Azure. Infrastructure is defined as code using Terraform or Pulumi so environments are reproducible, version-controlled, and auditable.',
      },
      {
        q: 'Do you work with companies in Mumbai and Pune?',
        a: 'Yes. We partner with technology startups and product engineering teams in Mumbai and Pune, operating in a remote-first model with async communication and structured milestone reviews.',
      },
    ],
    offer: [400000, 3000000],
  },

  '/services/api-integration': {
    name: 'api development and integrations',
    description:
      'VoidMatrix Technology delivers API development and integration services in India for businesses that need their software systems to communicate reliably, share data securely, and automate workflows across platforms. Based in Mumbai, we build REST APIs, GraphQL APIs, microservice communication layers, webhook systems, and enterprise integration pipelines for startups and enterprises across fintech, eCommerce, logistics, healthcare, and SaaS. We handle integrations with payment gateways like Razorpay and Stripe, CRM platforms, ERP systems, logistics providers, analytics tools, and third-party SaaS products - connecting the tools your business already uses into a coherent, automated system. Our API engineering prioritizes reliability, security, clear documentation, and versioning so integrations do not become technical debt. Whether you are building an API-first product, connecting two existing systems, or replacing a fragile point-to-point integration with a robust architecture, our Mumbai-based API team delivers connections that hold up at production scale.',
    faqs: [
      {
        q: 'What do API development services actually involve?',
        a: 'API development involves designing, building, securing, and documenting interfaces that allow software systems to exchange data and trigger actions programmatically. This includes defining endpoints, authentication mechanisms, request/response schemas, error handling, rate limiting, and versioning - everything needed for a reliable, maintainable integration.',
      },
      {
        q: 'How much does API development cost in India?',
        a: 'API development in India ranges from ₹1,50,000 for a focused single-system integration to ₹15,00,000 or more for complex multi-system enterprise integration architectures. The main cost drivers are the number of systems being connected, data transformation complexity, real-time versus batch processing requirements, and security specifications.',
      },
      {
        q: 'What types of APIs do you build?',
        a: 'We build REST APIs, GraphQL APIs, microservices APIs, webhook-based event systems, and enterprise middleware integrations. The choice depends on your use case - REST for standard CRUD operations, GraphQL for flexible data querying, webhooks for real-time event triggers.',
      },
      {
        q: 'Which systems can you connect?',
        a: 'We regularly integrate CRMs (Zoho, HubSpot, Salesforce), ERPs, payment gateways (Razorpay, Stripe, PayU), communication platforms (WhatsApp Business API, SendGrid, Twilio), analytics tools, logistics APIs, and custom internal systems. If it has an API, we can connect to it.',
      },
      {
        q: 'How do you secure API integrations?',
        a: 'We implement OAuth 2.0, JWT authentication, API key management, IP whitelisting where appropriate, TLS encryption, rate limiting, and input validation. Security is designed per-integration based on the sensitivity of data being exchanged - not applied generically.',
      },
      {
        q: 'Do you integrate Indian platforms like Razorpay, Shiprocket, or Zoho?',
        a: 'Yes - Indian platform integrations are a regular part of our work. Razorpay, Cashfree, PayU, Shiprocket, Zoho CRM, and other India-specific services are well within our scope. We understand the nuances of Indian payment infrastructure and compliance.',
      },
      {
        q: 'Do you serve businesses in Mumbai and Pune?',
        a: 'Yes. We work with startups and enterprises across Mumbai and Pune, building API integrations that connect their operational systems and reduce manual data handling.',
      },
    ],
    offer: [150000, 1500000],
  },

  '/services/web-application-development': {
    name: 'web application development',
    description:
      'VoidMatrix Technology builds web applications in India for startups, SaaS companies, and enterprises that need software their users interact with daily - not just a website, but a functioning digital product. Based in Mumbai, we design and develop custom web apps, SaaS platforms, internal dashboards, customer portals, workflow tools, and business automation systems built for performance, scalability, and real-world usage. Our approach focuses on clean architecture, responsive user experience, secure backend systems, and API-first design that makes future integrations straightforward. We build on React, Next.js, Node.js, and cloud infrastructure - with database design, authentication, and deployment handled as part of every engagement. Whether you are a founder shipping your first product, an operations team replacing an Excel-based process, or an enterprise building internal tooling, our web application development team in Mumbai delivers software that works reliably at the scale you need today and the scale you are targeting tomorrow.',
    faqs: [
      {
        q: 'How much does website development cost in Mumbai?',
        a: 'Professional website development in Mumbai starts from ₹75,000 for a standard business website built on Next.js with up to 8-10 pages, contact form, basic SEO setup, and mobile optimisation. More complex websites with CMS integration, custom animations, multiple service sections, and blog infrastructure typically range from ₹1,20,000 to ₹3,00,000. We provide a detailed written estimate after a free consultation with no hidden charges.',
      },
      {
        q: 'Why does VMT build on Next.js instead of WordPress?',
        a: "WordPress sites typically score between 40 and 65 on Google's Lighthouse audit due to plugin overhead and PHP rendering limitations. Next.js websites built by VMT routinely achieve scores above 90, delivering faster load times, stronger Core Web Vitals, and a superior technical foundation for SEO. WordPress is convenient. Next.js is built to compete.",
      },
      {
        q: 'How long does it take to build a website in India?',
        a: 'A professional business website generally takes 3-5 weeks from design approval to launch. Web applications and eCommerce platforms usually require 8-14 weeks depending on complexity, while SaaS products and marketplaces are delivered in phased releases over 4-6 months. Every project includes a milestone-based delivery plan before development begins.',
      },
      {
        q: 'Do you build mobile apps for Android and iOS in Mumbai?',
        a: 'Yes. We develop cross-platform mobile applications using React Native for businesses across Mumbai and India, allowing a single codebase for both Android and iOS. For products requiring platform-specific performance, we also build native Android applications with Kotlin and native iOS applications with Swift. UPI and Indian payment gateway integrations are available on request.',
      },
      {
        q: 'Can you rebuild my existing WordPress website on Next.js?',
        a: 'Yes. We migrate existing WordPress websites to a modern Next.js architecture, preserving your content while improving performance, restructuring information architecture, and integrating technical SEO from launch. Many clients experience measurable improvements in search visibility within 60-90 days after relaunch.',
      },
      {
        q: 'Do you integrate Indian payment gateways like Razorpay and UPI?',
        a: 'Yes. We integrate Razorpay, PayU, Cashfree, CCAvenue, UPI, and other Indian payment gateways into eCommerce websites, marketplaces, SaaS products, and custom web applications. We also support payment reconciliation, refund workflows, subscriptions, and GST-compliant invoice generation where required.',
      },
      {
        q: 'Will my website be optimised for SEO from launch day?',
        a: 'Absolutely. Technical SEO is integrated throughout our development process rather than added after launch. Every website includes schema markup, canonical URLs, XML sitemaps, robots.txt configuration, metadata architecture, Open Graph tags, and Core Web Vitals optimisation to ensure Google can efficiently crawl, index, and rank your website.',
      },
      {
        q: 'Do you work with clients outside Mumbai across India and internationally?',
        a: 'Yes. While VoidMatrix Technology is based in Mumbai, we work with startups, SMEs, and enterprises throughout India, including Pune, Delhi NCR, Bangalore, Hyderabad, Chennai, and Ahmedabad, as well as international clients in the UAE, UK, USA, and Southeast Asia. Projects are managed remotely through structured communication, shared project management tools, and scheduled progress reviews.',
      },
    ],

    offer: [300000, 2000000],
  },

  // ─────────────────────────────────────────────
  // DIGITAL MARKETING & CONTENT
  // ─────────────────────────────────────────────

  '/services/digital-marketing-and-content': {
    name: 'digital marketing & content',
    description:
      'VoidMatrix Technology provides digital marketing and content marketing services for businesses across Mumbai and India that want sustainable organic growth rather than short-term traffic spikes. We combine technical SEO, conversion-focused copywriting, content strategy, landing page optimisation, blog writing, local SEO, analytics, and performance reporting to increase qualified traffic and generate measurable business enquiries. Every strategy is tailored to your business goals, target audience, and competitive landscape, ensuring your website becomes a long-term growth asset rather than just an online brochure.',

    faqs: [
      {
        q: 'How much does digital marketing cost in India?',
        a: 'Professional digital marketing services typically start from ₹40,000 per month for SEO, content creation, social media management, and reporting. More comprehensive campaigns involving technical SEO, paid advertising, conversion optimisation, and multi-channel content marketing generally range from ₹75,000 to ₹3,00,000+ per month. VMT prepares a customised proposal after understanding your business objectives.',
      },
      {
        q: 'Do you provide SEO-friendly content writing?',
        a: 'Yes. Every page is researched around search intent, topical authority, internal linking, semantic keywords, and conversion optimisation. Our content is written for both search engines and real users without relying on keyword stuffing.',
      },
      {
        q: 'How long does digital marketing take to show results?',
        a: 'SEO and content marketing generally begin showing measurable improvements within 3-6 months, although highly competitive industries may require additional time. Paid campaigns can generate traffic much sooner where appropriate.',
      },
      {
        q: 'Can you manage both our website and marketing?',
        a: 'Yes. Since we design and develop websites ourselves, we continuously optimise technical SEO, landing pages, content, Core Web Vitals, and conversion rates without relying on third-party developers.',
      },
      {
        q: 'Do you work with clients outside Mumbai across India and internationally?',
        a: 'Yes. While VoidMatrix Technology is based in Mumbai, we work with startups, SMEs, and enterprises throughout India, including Pune, Delhi NCR, Bangalore, Hyderabad, Chennai, and Ahmedabad, as well as international clients in the UAE, UK, USA, and Southeast Asia. Projects are managed remotely through structured communication, shared project management tools, and scheduled progress reviews.',
      },
    ],

    offer: [40000, 300000],
  },

  '/services/local-seo': {
    name: 'local seo',
    description:
      'VoidMatrix Technology helps businesses improve their visibility in Google Search and Google Maps through comprehensive Local SEO services. We optimise Google Business Profiles, location pages, local citations, structured data, reviews, and technical SEO to increase local enquiries and qualified leads. Whether you operate from a single location or manage multiple branches across India, our Local SEO strategies are designed to improve rankings, increase calls, and generate more local business.',

    faqs: [
      {
        q: 'What is local SEO?',
        a: 'Local SEO is the process of optimizing a business website and online presence to improve visibility for location-based searches on Google Search and Google Maps. It helps customers find relevant businesses, products, and services in their area.',
      },

      {
        q: 'What does a local SEO company do?',
        a: 'A local SEO company improves a business’s local search presence through Google Business Profile optimization, local keyword research, location page optimization, citations, local content, internal linking, structured data, technical SEO, and local authority building.',
      },

      {
        q: 'How can local SEO help my business?',
        a: 'Local SEO can help your business become more visible when potential customers search for relevant products or services in your target location. Improved local visibility can contribute to more website visits, phone calls, enquiries, store visits, and leads.',
      },

      {
        q: 'How much does local SEO cost in India?',
        a: 'Local SEO costs in India vary depending on the number of locations, competition, services being targeted, website condition, Google Business Profile requirements, content needs, citation work, and the level of ongoing optimization required.',
      },

      {
        q: 'How long does local SEO take to show results?',
        a: 'The time required to see local SEO results depends on competition, existing website authority, Google Business Profile condition, location, industry, and the amount of optimization required. Some improvements can appear relatively quickly, while stronger and more consistent organic growth generally requires ongoing SEO work.',
      },

      {
        q: 'Can local SEO improve my Google Maps ranking?',
        a: 'Local SEO can improve the factors that contribute to local search and Google Maps visibility, including Google Business Profile optimization, local relevance, website signals, citations, reviews, and local authority. Rankings cannot be guaranteed because Google determines search results dynamically.',
      },

      {
        q: 'What is Google Business Profile optimization?',
        a: 'Google Business Profile optimization involves improving and maintaining important business information such as categories, services, descriptions, contact details, business information, images, and other relevant profile elements to create a stronger local search presence.',
      },

      {
        q: 'Do I need local SEO if I already have a website?',
        a: 'Yes. Having a website does not automatically provide strong local search visibility. Local SEO connects your website with location-based search intent through Google Business Profile optimization, local keywords, location pages, citations, local content, structured data, and other local search signals.',
      },

      {
        q: 'Is local SEO useful for small businesses?',
        a: 'Yes. Local SEO can be particularly valuable for small businesses that depend on customers from specific cities, neighborhoods, or service areas. It can help smaller businesses compete for relevant local searches without relying entirely on broad national keywords.',
      },

      {
        q: 'Do you provide local SEO services in Mumbai?',
        a: 'Yes. We provide local SEO services for businesses targeting Mumbai and surrounding areas. Strategies can include Google Business Profile optimization, local keyword research, location pages, local on-page SEO, citations, and local authority building.',
      },

      {
        q: 'Do you provide local SEO services in Pune?',
        a: 'Yes. We provide local SEO services for businesses targeting Pune. The strategy can be tailored around local search demand, business services, target areas, competitors, website structure, and Google Business Profile visibility.',
      },

      {
        q: 'What is the difference between local SEO and regular SEO?',
        a: 'Traditional SEO focuses broadly on improving organic search visibility, while local SEO focuses specifically on searches connected to geographic locations. Local SEO includes additional areas such as Google Business Profile, Google Maps visibility, local citations, location pages, reviews, and geographic search intent.',
      },

      {
        q: 'Do you optimize Google Business Profiles for local SEO?',
        a: 'Yes. Google Business Profile optimization can be an important part of a local SEO strategy. We review business information, categories, services, descriptions, profile content, and the relationship between the profile and the website.',
      },

      {
        q: 'Do you create location pages for local SEO?',
        a: 'Yes. Location pages can be created and optimized when they represent genuine business locations or service areas. We focus on creating useful location-specific content rather than producing thin pages that only change the city name.',
      },

      {
        q: 'Do local citations still matter for SEO?',
        a: 'Relevant and consistent local citations can support a business’s local search presence by providing consistent information about the business across appropriate online platforms. We focus on relevant and trustworthy citation opportunities rather than building large volumes of low-quality listings.',
      },

      {
        q: 'Can local SEO help generate more leads?',
        a: 'Yes. Local SEO is designed to improve visibility for searches performed by people looking for relevant businesses, products, or services in a specific area. Greater visibility for high-intent local searches can create additional opportunities for calls, enquiries, visits, and leads.',
      },

      {
        q: 'Do you provide local SEO for multi-location businesses?',
        a: 'Yes. Multi-location businesses can use a structured local SEO strategy covering individual locations, Google Business Profiles, location pages, local keywords, citations, internal linking, and location-specific content.',
      },

      {
        q: 'Do you provide local SEO services across India?',
        a: 'Yes. We provide local SEO services for businesses targeting cities and markets across India. The strategy can be adapted according to the business location, services, competition, target customers, and search demand.',
      },

      {
        q: 'Can local SEO help a new business?',
        a: 'Yes. Local SEO can help establish the search presence of a new business by creating and optimizing relevant business information, Google Business Profile, website pages, local keywords, citations, content, and other local search assets.',
      },

      {
        q: 'How do I choose the right local SEO company?',
        a: 'Look for a local SEO company that explains its strategy clearly, understands your target locations and customers, focuses on relevant search intent, provides transparent reporting, avoids unrealistic ranking guarantees, and can demonstrate how its SEO work connects to meaningful business outcomes.',
      },
    ],

    offer: [25000, 200000],
  },

  '/services/maintenance-and-support': {
    name: 'maintenance & support',
    description:
      'VoidMatrix Technology provides ongoing website and web application maintenance for businesses that require security, reliability, and continuous improvements after launch. Our maintenance plans include software updates, security monitoring, backups, bug fixing, performance optimisation, uptime monitoring, technical support, and feature enhancements. Whether your website was developed by VMT or another agency, we ensure it remains secure, fast, and ready for future growth.',

    faqs: [
      {
        q: 'What are software maintenance and support services?',
        a: 'Software maintenance and support services keep applications secure, stable, and high-performing after deployment. They include bug fixes, security updates, framework upgrades, performance optimization, cloud monitoring, feature enhancements, and ongoing technical support.',
      },
      {
        q: 'Why is software maintenance important?',
        a: 'Regular maintenance prevents security vulnerabilities, reduces downtime, improves application performance, ensures compatibility with modern technologies, and extends the lifespan of your software. Proactive maintenance is significantly more cost-effective than fixing critical failures after they occur.',
      },
      {
        q: 'What types of software do you maintain?',
        a: 'We maintain SaaS platforms, web applications, enterprise software, CRM systems, ERP solutions, eCommerce platforms, internal business applications, APIs, customer portals, and custom software built using modern or legacy technologies.',
      },
      {
        q: 'Do you provide Annual Maintenance Contracts (AMC)?',
        a: 'Yes. We offer flexible Annual Maintenance Contracts (AMC) and monthly maintenance plans that include monitoring, bug fixes, security updates, technical support, performance optimization, infrastructure management, and ongoing software improvements based on your business requirements.',
      },
      {
        q: 'Can you maintain software developed by another company?',
        a: 'Absolutely. Our engineers can review existing applications, understand the architecture, perform technical audits, resolve outstanding issues, and provide long-term maintenance even if the software was developed by another vendor.',
      },
      {
        q: 'How much do software maintenance services cost?',
        a: 'The cost depends on application size, technology stack, cloud infrastructure, business criticality, support coverage, response times, and maintenance scope. After assessing your software, we provide a transparent proposal tailored to your support requirements.',
      },
      {
        q: 'Do you provide emergency support for critical issues?',
        a: 'Yes. We offer priority support for production issues, critical bugs, security incidents, server failures, and application downtime. Response times depend on the selected maintenance plan or SLA.',
      },
      {
        q: 'Can you improve software performance as part of maintenance?',
        a: 'Yes. Our maintenance services include database optimization, API tuning, caching strategies, server optimization, cloud infrastructure improvements, code refactoring, and performance monitoring to keep applications fast and reliable.',
      },
      {
        q: 'Do you support cloud-hosted applications?',
        a: 'Yes. We maintain applications hosted on modern cloud platforms, providing server management, monitoring, backups, deployment support, scalability planning, security updates, and infrastructure optimization.',
      },
      {
        q: 'Why choose VoidMatrix Technology for software maintenance?',
        a: 'VoidMatrix Technology provides proactive, architecture-aware maintenance rather than reactive bug fixing. Our engineering team focuses on security, performance, scalability, monitoring, and continuous improvements to ensure your software remains reliable, future-ready, and aligned with your business goals.',
      },
    ],

    offer: [15000, 250000],
  },

  '/case-studies': {
    name: 'case studies',
    description:
      "Explore real-world projects delivered by VoidMatrix Technology across website development, web applications, eCommerce platforms, SEO, and business automation. Each case study highlights the client's challenge, our technical approach, the technologies used, and the measurable business outcomes achieved.",

    faqs: [
      {
        q: 'What is a website development case study?',
        a: 'A website development case study explains a real website project, including the business requirements, challenges, technology decisions, development process, implementation, and outcomes.',
      },

      {
        q: 'What do SEO case studies show?',
        a: 'SEO case studies explain how technical SEO, on-page SEO, local SEO, content strategy, website architecture, performance optimization, and other search optimization activities are used to address organic search challenges.',
      },

      {
        q: 'Why are case studies important when choosing an SEO company?',
        a: 'Case studies help businesses understand how an SEO company approaches real search problems, develops a strategy, implements SEO improvements, and measures progress instead of evaluating an agency only from its list of services.',
      },

      {
        q: 'What types of website development projects does VoidMatrix Technology handle?',
        a: 'VoidMatrix Technology works on business websites, corporate websites, SaaS websites, eCommerce platforms, web applications, landing pages, website redesigns, and custom digital platforms.',
      },

      {
        q: 'Do you have website redesign case studies?',
        a: 'Yes. Website redesign case studies can cover the analysis of an existing website, redesign strategy, website architecture, performance improvements, SEO considerations, responsive development, and user experience improvements.',
      },

      {
        q: 'Do your case studies include technical SEO?',
        a: 'Yes. Relevant SEO case studies can cover crawlability, indexing, website architecture, internal linking, structured data, Core Web Vitals, page performance, metadata, and other technical SEO factors.',
      },

      {
        q: 'Do you provide eCommerce development case studies?',
        a: 'Yes. eCommerce case studies can cover storefront development, product and category architecture, payment integrations, inventory workflows, performance, SEO, and scalable commerce functionality.',
      },

      {
        q: 'Can I find an SEO case study from India?',
        a: 'Yes. VoidMatrix Technology works with businesses across Mumbai, Pune, and India. Relevant case studies can demonstrate SEO strategies for Indian businesses, local markets, national search, and industry-specific search queries.',
      },

      {
        q: 'Do your case studies include digital marketing projects?',
        a: 'Yes. Digital marketing case studies can cover SEO, content marketing, paid advertising, lead generation, landing pages, conversion optimization, and other digital acquisition strategies.',
      },

      {
        q: 'Can VoidMatrix Technology build a website similar to a case study?',
        a: 'Yes. A case study can be used as a reference for understanding our approach, but every project is planned around the specific business model, audience, technical requirements, SEO objectives, and growth goals of the client.',
      },

      {
        q: 'Do you provide website development and SEO together?',
        a: 'Yes. VoidMatrix Technology can combine website development with technical SEO, on-page optimization, performance optimization, content strategy, structured data, and other search-focused requirements.',
      },

      {
        q: 'Do you provide SEO and website services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix Technology provides website development, SEO, eCommerce, and digital marketing services for businesses in Mumbai, Pune, across India, and international markets.',
      },

      {
        q: 'How much does a website development or SEO project cost?',
        a: 'Project cost depends on the scope, number of pages, technology requirements, integrations, SEO requirements, content requirements, complexity, and ongoing support. We recommend evaluating the actual project requirements before determining the investment.',
      },

      {
        q: 'How can I start a project with VoidMatrix Technology?',
        a: 'You can contact VoidMatrix Technology with your website development, SEO, eCommerce, digital marketing, or technology requirements. We can then review the project scope and discuss the appropriate strategy and implementation approach.',
      },
    ],

    offer: [30000, 250000],
  },

  '/services/web-app-development': {
    name: 'web application development',
    description:
      'VoidMatrix Technology builds web applications in India for startups, SaaS companies, and enterprises that need software their users interact with daily - not just a website, but a functioning digital product. Based in Mumbai, we design and develop custom web apps, SaaS platforms, internal dashboards, customer portals, workflow tools, and business automation systems built for performance, scalability, and real-world usage. Our approach focuses on clean architecture, responsive user experience, secure backend systems, and API-first design that makes future integrations straightforward. We build on React, Next.js, Node.js, and cloud infrastructure - with database design, authentication, and deployment handled as part of every engagement. Whether you are a founder shipping your first product, an operations team replacing an Excel-based process, or an enterprise building internal tooling, our web application development team in Mumbai delivers software that works reliably at the scale you need today and the scale you are targeting tomorrow.',
    faqs: [
      {
        q: 'How much does web application development cost in India?',
        a: 'Web application development in India typically starts from ₹3,00,000 for a focused MVP with core user flows, authentication, basic data management, and a clean UI. More complex applications with multi-role user management, third-party integrations, reporting dashboards, and scalable infrastructure range from ₹6,00,000 to ₹20,00,000+. VMT provides a detailed estimate after a scoping session - no ballpark figures without understanding your requirements.',
      },
      {
        q: 'How long does it take to build a web application in Mumbai?',
        a: 'A focused MVP with clearly defined scope typically takes 8-14 weeks. A full-featured web application with multiple user roles, complex workflows, and third-party integrations usually takes 4-8 months, delivered in structured phases. VMT does not provide delivery timelines without a scoping session because timelines without scope are simply guesses.',
      },
      {
        q: 'What is the difference between a web application and a website?',
        a: 'A website primarily presents information about your business, services, or products. A web application allows users to log in, manage data, perform actions, and complete workflows such as bookings, reporting, ordering, or collaboration. If users interact with the software rather than just read content, you need a web application. VMT builds both and helps businesses choose the right solution during a free consultation.',
      },
      {
        q: 'Can you build a web application that replaces our current Excel and WhatsApp workflows?',
        a: 'Yes. This is one of the most common projects we undertake for Indian SMEs. We analyse your existing Excel sheets, WhatsApp communication, approval processes, and operational workflow before designing a custom web application with the right data model, user roles, permissions, and automation. The result is a centralised system that improves efficiency, reduces manual errors, and provides complete visibility across your business.',
      },
      {
        q: 'Will my web application work on mobile devices?',
        a: 'Yes. Every web application developed by VMT is fully responsive and optimised for modern mobile browsers, tablets, laptops, and desktops. If your business requires deeper device integration or offline capabilities, we can also advise whether a Progressive Web App (PWA) or a dedicated native mobile application is the better long-term solution.',
      },
      {
        q: 'Do you build web applications for startups in Mumbai?',
        a: 'Yes. Building scalable MVPs for startups is one of VMT’s core specialities. We follow lean product development principles by identifying the smallest feature set needed to validate your business idea before expanding based on real user feedback. This approach helps founders avoid unnecessary development costs while creating a strong technical foundation for future growth.',
      },
    ],
    offer: [250000, 400000],
  },

  '/services/mobile-application-development': {
    name: 'mobile application development',
    description:
      'VoidMatrix Technology develops mobile applications in India for startups and businesses that want to put their product or service in their users hands - on Android and iOS. Based in Mumbai, we design and build cross-platform mobile apps for digital products, eCommerce platforms, on-demand services, customer engagement tools, and internal enterprise mobile software. We build on React Native, which gives you a single codebase that performs natively on both platforms - reducing cost and development time without sacrificing user experience. Every app we deliver includes a scalable backend API, secure authentication, push notification infrastructure, and a deployment-ready build submitted to Google Play and the App Store. We handle the full delivery cycle - UX design, development, backend integration, testing, and launch - so you ship a polished product your users want to use, not a rough MVP that needs immediate rework.',
    faqs: [
      {
        q: 'Do you build for both Android and iOS?',
        a: 'Yes. We use React Native to build cross-platform apps that run natively on both Android and iOS from a single codebase. This approach delivers 80-90% cost efficiency compared to building two separate native apps, with no meaningful performance or UX compromise for most product types.',
      },
      {
        q: 'How much does mobile app development cost in India?',
        a: 'Mobile app development in India ranges from ₹4,00,000 for a focused single-feature MVP to ₹25,00,000 or more for feature-rich platforms with complex integrations, real-time features, and advanced UX. Cost is driven by feature complexity, backend requirements, third-party integrations, and design polish level.',
      },
      {
        q: 'What types of businesses should invest in a mobile app?',
        a: 'Any business where the primary user interaction happens on a phone benefits from a mobile app - eCommerce, on-demand services, logistics tracking, customer loyalty, healthcare appointments, SaaS with mobile workflows, and internal field operations. If your users are already using your website on mobile, a dedicated app almost always increases engagement and conversions.',
      },
      {
        q: 'Do you build the backend for the app too?',
        a: 'Yes - backend development is included in our mobile app engagements. We build RESTful APIs, authentication systems, database architecture, push notification infrastructure, and cloud hosting. You get a complete product, not just a frontend shell.',
      },
      {
        q: 'Do you handle App Store and Google Play submission?',
        a: 'Yes. We manage the full app store submission process - developer account setup if needed, app store listing optimization, screenshots, metadata, and compliance with platform guidelines. We also handle rejection resolution if Apple or Google flags anything during review.',
      },
      {
        q: 'How long does mobile app development take?',
        a: 'A well-scoped MVP takes 8-12 weeks. A full-featured consumer or enterprise app takes 4-6 months. Timeline depends on feature set, design complexity, and integration requirements. We publish a project schedule at kickoff so expectations are clear.',
      },
      {
        q: 'Do you serve businesses in Mumbai and Pune?',
        a: 'Yes. We build mobile applications for startups and businesses in Mumbai, Pune, and across India - working in a structured remote model with regular delivery check-ins.',
      },
    ],
    offer: [400000, 2500000],
  },

  '/services/ecommerce-development': {
    name: 'ecommerce development',
    description:
      'VoidMatrix Technology develops eCommerce platforms in India for brands, retailers, and D2C businesses that need online stores built to convert, scale, and sell. Based in Mumbai, we build custom eCommerce websites, multi-vendor marketplaces, product management systems, and integrated payment and logistics infrastructure for growing businesses across India. Our eCommerce development prioritizes conversion-focused design, fast page load times, secure checkout experiences, and inventory management systems that do not break as order volumes grow. We integrate leading Indian payment gateways including Razorpay, Cashfree, and PayU, along with logistics partners, WhatsApp for Business, and CRM systems. Whether you are a D2C brand launching your first store, a manufacturer moving online, or a marketplace operator building a multi-vendor platform, our Mumbai-based eCommerce development team delivers stores that generate revenue - not just online storefronts that look the part.',
    faqs: [
      {
        q: 'Do you build custom eCommerce websites or use platforms like Shopify?',
        a: 'Both. We build fully custom eCommerce systems for businesses with complex requirements, and we also implement and customize Shopify, WooCommerce, and similar platforms where they are a good fit. The right approach depends on your product catalog, customization needs, and growth plans - we guide you to the most practical solution, not the most expensive one.',
      },
      {
        q: 'How much does eCommerce development cost in India?',
        a: 'eCommerce development in India ranges from ₹2,00,000 for a straightforward product store to ₹15,00,000 or more for custom marketplace platforms with multi-vendor management, complex product configurators, or enterprise integrations. We size projects based on actual requirements - not templates.',
      },
      {
        q: 'Which payment gateways do you integrate?',
        a: "We integrate Razorpay, Cashfree, PayU, Stripe, and PayPal - including UPI, net banking, card payments, and EMI options. We also set up Razorpay's subscription billing for membership or subscription box eCommerce models.",
      },
      {
        q: 'Can you build a multi-vendor marketplace?',
        a: 'Yes. Multi-vendor marketplace development is a core offering - we build vendor onboarding systems, product listing management, commission calculation, split payment infrastructure, dispute handling, and vendor dashboards. Both B2C and B2B marketplace models are within scope.',
      },
      {
        q: 'What should I look for in an eCommerce developer in India?',
        a: 'Beyond design skills, look for deep understanding of conversion rate optimization, mobile performance, Indian payment infrastructure, and post-launch support capability. Many eCommerce builds look good but underperform commercially because checkout flows are clunky, mobile performance is poor, or payment integrations are unreliable. We build for sales, not aesthetics.',
      },
      {
        q: 'Do you integrate logistics and shipping?',
        a: 'Yes. We integrate with Shiprocket, Delhivery, and other logistics aggregators - including order tracking widgets, automated shipping label generation, and returns management.',
      },
      {
        q: 'Do you serve eCommerce businesses in Mumbai and Pune?',
        a: 'Yes. We work with D2C brands, retailers, and marketplace operators across Mumbai and Pune, handling everything from initial store development to ongoing performance optimization.',
      },
    ],
    offer: [200000, 1500000],
  },

  '/services/technical-seo-performance-optimization': {
    name: 'technical seo and performance',
    description:
      'VoidMatrix Technology provides technical SEO and performance optimization services in India for businesses whose websites are failing to rank despite good content - because the underlying technical foundation is broken. Based in Mumbai, we work with startups, SaaS companies, eCommerce brands, and service businesses in Mumbai, Pune, Bangalore, and across India that are struggling with crawl errors, indexing failures, slow Core Web Vitals, broken site architecture, and poor internal linking. These are the issues that prevent Google from properly understanding, indexing, and ranking your pages - no amount of content creation fixes them without technical remediation first. Our process begins with a comprehensive audit covering crawlability, indexation health, site architecture, structured data, page speed, mobile usability, and duplicate content. We then implement systematic fixes with measurable before/after benchmarks. If your organic traffic is stagnant or declining and content is not the problem, technical SEO is where the answer lives.',
    faqs: [
      {
        q: 'What exactly does technical SEO fix?',
        a: 'Technical SEO addresses the infrastructure issues that prevent search engines from properly crawling and indexing your site - crawl errors, indexation blocks, duplicate content, broken redirects, missing canonical tags, slow page speed, Core Web Vitals failures, poor mobile usability, and missing or incorrect structured data. These are the invisible issues that suppress rankings even when your content is strong.',
      },
      {
        q: 'How do I know if my website has technical SEO problems?',
        a: 'Key signals: pages that should rank are not indexed in Google Search Console, organic traffic has dropped without an obvious content reason, Core Web Vitals show poor scores, crawl reports flag thousands of errors, or your site has significant duplicate content across URLs. If any of these are true, a technical SEO audit is the right starting point.',
      },
      {
        q: 'How much do technical SEO services cost in India?',
        a: 'Technical SEO projects in India range from ₹60,000 for a focused audit and fix of a small website to ₹4,00,000 or more for comprehensive technical remediation of large, complex platforms with significant indexing and architecture issues. We scope based on site size and issue depth.',
      },
      {
        q: 'Do startups in India need technical SEO?',
        a: 'Especially startups. New websites that are not technically configured correctly from day one can take 6-12 months longer to rank - time your growth cannot afford to waste. Setting up technical SEO early prevents compounding problems that are expensive to fix later.',
      },
      {
        q: 'Do you fix crawl budget and indexation problems?',
        a: 'Yes. Crawl budget optimization, indexation control, sitemap management, robots.txt configuration, and index bloat reduction are all services we deliver - including diagnosing why valuable pages are stuck in a discovered-not-indexed state.',
      },
      {
        q: 'Do you implement structured data schemas?',
        a: 'Yes. We implement LocalBusiness, FAQPage, Article, Product, Review, BreadcrumbList, and other relevant schema types - with proper JSON-LD implementation and Search Console rich result validation.',
      },
      {
        q: 'Do you serve businesses in Mumbai and Pune?',
        a: 'Yes. We work with startups, SaaS platforms, and service businesses across Mumbai and Pune - in competitive local markets where technical SEO quality is often the difference between page 1 and page 3.',
      },
    ],
    offer: [60000, 400000],
  },

  '/services/website-speed-optimization': {
    name: 'website speed optimization',
    description:
      'VoidMatrix Technology provides website speed optimization services in India for businesses whose slow websites are costing them search rankings, ad performance, and customers. Based in Mumbai, we diagnose and fix performance bottlenecks for startups, SaaS platforms, eCommerce stores, and service businesses across Mumbai, Pune, Bangalore, and other Indian cities. A one-second improvement in load time can increase conversions by 7% and reduce bounce rates by 11% - for paid traffic, slow pages mean higher CPCs and lower Quality Scores, effectively making every ad rupee less efficient. Our optimization process covers Core Web Vitals (LCP, CLS, INP), JavaScript and CSS payload reduction, image compression and next-gen format delivery, server response time improvements, caching layer implementation, CDN configuration, and third-party script management. We deliver before/after benchmarks using Google PageSpeed, WebPageTest, and Core Web Vitals field data - so results are measurable, not subjective.',
    faqs: [
      {
        q: 'Why does website speed matter for my business?',
        a: 'Speed affects three things that directly cost you money: SEO rankings (Google uses Core Web Vitals as a ranking signal), paid ad efficiency (slow landing pages get penalized with lower Quality Scores and higher CPCs), and user behavior (53% of mobile users abandon a page that takes more than 3 seconds to load). Slow sites lose traffic, waste ad spend, and reduce conversions.',
      },
      {
        q: 'What are Core Web Vitals and why do they matter?',
        a: "Core Web Vitals are Google's user experience metrics: LCP (Largest Contentful Paint) measures loading speed, CLS (Cumulative Layout Shift) measures visual stability, and INP (Interaction to Next Paint) measures responsiveness. Google uses these as ranking factors, and poor scores actively suppress your pages in search results. Improving them is both an SEO and UX investment.",
      },
      {
        q: 'How much does website speed optimization cost in India?',
        a: 'Website speed optimization in India typically ranges from ₹40,000 for a focused performance audit and targeted fixes to ₹2,50,000 for comprehensive optimization of complex platforms with multiple performance bottlenecks. We always deliver a free initial assessment before quoting.',
      },
      {
        q: 'What is typically causing a slow website?',
        a: 'The most common culprits are unoptimized images (WebP conversion and lazy loading fix this), render-blocking JavaScript and CSS, slow server response times (often fixed with caching and CDN), heavy third-party scripts (analytics, chat widgets, pixels), and poor hosting infrastructure. Most websites have multiple contributing issues.',
      },
      {
        q: 'Do you optimize server infrastructure?',
        a: 'Yes - server-side optimization including hosting configuration, PHP version upgrades, MySQL query optimization, Redis or Memcached caching, and CDN implementation are all within scope.',
      },
      {
        q: 'How much faster can my website get?',
        a: 'Results vary by starting point, but most clients see 40-70% reductions in load time and significant Core Web Vitals improvements. We share realistic expectations based on your audit findings before work begins.',
      },
      {
        q: 'Do you work with businesses in Mumbai and Pune?',
        a: 'Yes. We optimize websites for businesses across Mumbai and Pune - including businesses using Google Ads where landing page speed directly impacts campaign ROI.',
      },
    ],
    offer: [40000, 250000],
  },

  '/services/conversion-rate-optimization': {
    name: 'conversion rate optimization',
    description:
      'VoidMatrix Technology provides conversion rate optimization services in India for businesses that are generating traffic but not converting it into leads or revenue at the rate they should be. Based in Mumbai, we work with SaaS companies, startups, service businesses, and eCommerce brands in Mumbai, Pune, Bangalore, and across India to systematically identify and remove the friction points preventing visitors from taking action. CRO is one of the highest-leverage investments you can make - it multiplies the return on every other marketing channel by making existing traffic work harder. Our process combines behavioral data analysis, heuristic UX evaluation, user journey mapping, landing page auditing, and structured A/B testing. We do not guess - we diagnose what is preventing conversion, design solutions grounded in data and persuasion psychology, test those solutions rigorously, and implement what wins. The result is a website that converts a meaningfully higher percentage of every visitor it receives.',
    faqs: [
      {
        q: 'What is conversion rate optimization and what does it involve?',
        a: 'CRO is the systematic process of improving the percentage of website visitors who take a desired action - filling out a form, making a purchase, booking a call. It involves analyzing user behavior with tools like heatmaps and session recordings, identifying friction points, redesigning page elements, writing stronger copy, and A/B testing changes to prove what actually moves conversion rates.',
      },
      {
        q: 'How much of an improvement can CRO realistically deliver?',
        a: 'Typical CRO programs deliver 15-40% conversion rate improvements over 3-6 months of systematic testing. The exact uplift depends on how well-optimized the current site is, how much traffic is available for testing, and how significant the identified friction points are. We share realistic projections based on your site audit before engagement begins.',
      },
      {
        q: 'How much do CRO services cost in India?',
        a: 'CRO engagements in India range from ₹50,000 for a targeted landing page optimization to ₹3,00,000 or more for a comprehensive site-wide conversion program with ongoing A/B testing and reporting.',
      },
      {
        q: 'Do you use data to drive CRO decisions?',
        a: 'Yes - always. We analyze Google Analytics behavior reports, heatmaps, scroll maps, session recordings, and funnel drop-off data before recommending any changes. Intuition-based redesigns often hurt performance; our recommendations are grounded in evidence.',
      },
      {
        q: 'Do you run A/B tests?',
        a: 'Yes. We design, implement, and analyze A/B tests using tools like Google Optimize, VWO, or AB Tasty - ensuring test results reach statistical significance before declaring a winner.',
      },
      {
        q: 'Which businesses benefit most from CRO?',
        a: 'Any business with meaningful website traffic. But the ROI is highest for businesses spending on paid ads - if you are spending ₹5,00,000/month on Google or Meta Ads, a 25% improvement in landing page conversion rate is worth more than reducing your ad spend. CRO multiplies the return on paid media.',
      },
      {
        q: 'Do you work with businesses in Mumbai and Pune?',
        a: 'Yes. We run CRO programs for businesses across Mumbai and Pune - particularly for companies running Google Ads and Meta Ads who want to improve cost per lead.',
      },
    ],
    offer: [50000, 300000],
  },

  '/services/cicd-pipelines': {
    name: 'ci/cd pipeline setup',
    description:
      'VoidMatrix Technology sets up CI/CD pipelines in India for software teams that are spending too much time on manual deployments, environment inconsistencies, and release anxiety. Based in Mumbai, we design and implement automated build, test, and deployment workflows for startups and enterprise engineering teams in Mumbai, Pune, Bangalore, and other technology hubs. A well-designed CI/CD pipeline eliminates the manual bottlenecks that slow release cycles, reduces human error in deployment processes, and gives engineering teams the confidence to ship to production multiple times per day. We work with GitHub Actions, GitLab CI, Jenkins, CircleCI, and other tooling - integrating automated unit tests, integration tests, security scans, and staging deployments before any code reaches production. We also handle containerized deployments with Docker and Kubernetes, infrastructure-as-code with Terraform, and environment parity between staging and production. The result is a deployment process your engineers trust and a release cadence your business can rely on.',
    faqs: [
      {
        q: 'What is a CI/CD pipeline?',

        a: 'A CI/CD pipeline is an automated workflow that takes software changes from source code through building, testing, and deployment. It helps development teams release applications more consistently while reducing manual work and deployment errors.',
      },

      {
        q: 'What is the difference between CI and CD?',

        a: 'Continuous Integration (CI) focuses on automatically integrating and validating code changes through processes such as builds, testing, linting, and quality checks. Continuous Delivery or Continuous Deployment (CD) extends the workflow by automating the delivery or deployment of validated software to target environments.',
      },

      {
        q: 'How much does CI/CD pipeline development cost in India?',

        a: 'CI/CD development cost depends on the application architecture, number of environments, testing requirements, deployment infrastructure, cloud platform, containerization, security controls, and rollback requirements. A basic application pipeline requires less engineering effort than a multi-application enterprise delivery platform.',
      },

      {
        q: 'Which CI/CD tools do you work with?',

        a: 'We work with modern CI/CD and DevOps tools including GitHub Actions, GitLab CI/CD, Jenkins, Docker, Kubernetes, AWS, Microsoft Azure, and Google Cloud. The tooling is selected according to your application architecture, development workflow, and infrastructure requirements.',
      },

      {
        q: 'Can you build a CI/CD pipeline for a SaaS application?',

        a: 'Yes. We build CI/CD pipelines for SaaS applications that automate code validation, testing, builds, deployments, environment management, database migrations, and production releases. The pipeline can be designed to support frequent feature releases as the SaaS product grows.',
      },

      {
        q: 'Can CI/CD pipelines include automated testing?',

        a: 'Yes. Automated tests can be integrated directly into the CI/CD workflow. Depending on the application, pipelines can run unit tests, integration tests, API tests, linting, type checks, security checks, and other quality validations before deployment.',
      },

      {
        q: 'Can you create CI/CD pipelines for Docker and Kubernetes applications?',

        a: 'Yes. We build CI/CD workflows that automatically build and test Docker images, publish approved images to container registries, and deploy applications to Kubernetes environments. These pipelines can also include environment-specific configurations and controlled release processes.',
      },

      {
        q: 'Can you automate deployment to AWS, Azure, or Google Cloud?',

        a: 'Yes. We implement automated cloud deployment pipelines for AWS, Microsoft Azure, and Google Cloud environments. The pipeline can manage application builds, environment configuration, deployments, database migrations, approvals, and other release activities.',
      },

      {
        q: 'Can a CI/CD pipeline support rollback?',

        a: 'Yes. CI/CD workflows can include controlled rollback mechanisms using versioned builds, deployment history, container images, release strategies, and environment configuration. The appropriate rollback approach depends on the application architecture and deployment infrastructure.',
      },

      {
        q: 'Why choose Void Matrix Technology for CI/CD development?',

        a: 'Void Matrix Technology designs CI/CD pipelines around your actual development workflow, application architecture, and infrastructure. We focus on practical automation, reliable deployments, automated quality checks, security, and long-term maintainability for startups and enterprises.',
      },
    ],
    offer: [80000, 500000],
  },

  '/services/cloud-devops': {
    name: 'cloud and devops services',
    description:
      'VoidMatrix Technology provides cloud and DevOps services in India for businesses that need scalable, secure, and cost-efficient infrastructure - not just hosted applications. Based in Mumbai, we design and implement cloud infrastructure, container orchestration, CI/CD automation, monitoring systems, and security hardening for SaaS companies, fintech platforms, and product engineering teams in Mumbai, Pune, Bangalore, and other Indian technology hubs. Poor cloud architecture is expensive in two ways: financially, through over-provisioned or inefficiently used resources, and operationally, through reliability incidents that affect users and erode trust. Our team builds cloud environments on AWS and Azure that are right-sized for your current scale, designed to grow with you, and monitored continuously so issues surface before users feel them. We handle everything from initial cloud account setup and infrastructure-as-code implementation to Kubernetes cluster management, cost optimization audits, and incident response runbook creation.',
    faqs: [
      {
        q: 'What are Cloud and DevOps services?',
        a: 'Cloud and DevOps services help businesses build, deploy, manage, and scale applications using modern cloud infrastructure and automation practices. These services include cloud architecture, CI/CD pipelines, infrastructure automation, monitoring, security, migration, and ongoing optimization.',
      },

      {
        q: 'Why do businesses need Cloud and DevOps?',
        a: 'Cloud and DevOps help organizations release software faster, improve reliability, automate repetitive operations, reduce infrastructure risks, and scale applications efficiently. They enable businesses to build secure and flexible technology foundations for long-term growth.',
      },

      {
        q: 'Which cloud platforms do you support?',
        a: 'We work with leading cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform. The right cloud provider is selected based on application requirements, scalability needs, security considerations, and business objectives.',
      },

      {
        q: 'How much do Cloud and DevOps services cost in India?',
        a: 'The cost depends on infrastructure requirements, application complexity, cloud platform, automation needs, security requirements, and ongoing support requirements. After understanding your goals, we recommend an optimized cloud and DevOps strategy.',
      },

      {
        q: 'Can you migrate our existing application to the cloud?',
        a: 'Yes. We provide cloud migration services including application assessment, migration planning, infrastructure setup, database migration, security configuration, deployment optimization, and post-migration monitoring.',
      },

      {
        q: 'What is CI/CD pipeline automation?',
        a: 'CI/CD automation enables teams to automatically build, test, and deploy software changes. It reduces manual errors, accelerates releases, improves development efficiency, and allows businesses to deliver new features faster and more reliably.',
      },

      {
        q: 'Do you provide Docker and Kubernetes services?',
        a: 'Yes. We help businesses containerize applications using Docker and manage scalable deployments using Kubernetes. Our services include container setup, cluster configuration, deployment automation, scaling strategies, and production management.',
      },

      {
        q: 'Can you improve our existing cloud infrastructure?',
        a: 'Yes. We analyze existing cloud environments and improve architecture, performance, security, scalability, monitoring, and cost efficiency through cloud optimization and DevOps best practices.',
      },

      {
        q: 'Do you provide ongoing Cloud and DevOps support?',
        a: 'Yes. We provide continuous cloud management, infrastructure monitoring, security updates, performance optimization, deployment support, and technical consulting to ensure reliable operations.',
      },

      {
        q: 'Why choose VoidMatrix Technology for Cloud and DevOps services?',
        a: 'VoidMatrix Technology builds secure and scalable cloud foundations using modern DevOps practices. We combine cloud architecture, automation, security, monitoring, and engineering expertise to help startups and enterprises build reliable digital platforms ready for growth.',
      },
    ],
    offer: [150000, 1500000],
  },

  '/services/cms-development': {
    name: 'cms development',
    description:
      'VoidMatrix Technology builds CMS platforms in India for businesses whose marketing and content teams need to publish and update website content without filing a developer ticket every time. Based in Mumbai, we develop headless CMS architectures, custom admin panels, and editorial platforms for corporate websites, media properties, eCommerce stores, and SaaS marketing sites across Mumbai, Pune, Bangalore, and beyond. The right CMS investment pays back quickly - when your team can publish a new service page, update pricing, or push a blog post independently, content velocity increases and developer bandwidth goes toward product work. We implement headless CMS solutions using Sanity, Contentful, and Strapi for modern frontend architectures, and WordPress-based systems for teams comfortable in that ecosystem. We build content models, editorial workflows, media management, multi-language support, and SEO-friendly publishing systems - and we document everything so your team can operate independently from day one.',
    faqs: [
      {
        q: 'What is a Content Management System (CMS)?',
        a: 'A Content Management System (CMS) is software that enables businesses to create, organize, manage, and publish digital content without modifying application code. Modern CMS platforms support websites, portals, mobile applications, documentation, and omnichannel content delivery.',
      },
      {
        q: 'What is the difference between a traditional CMS and a headless CMS?',
        a: 'A traditional CMS manages both content and presentation within the same platform, while a headless CMS separates content management from the frontend. This allows content to be delivered through APIs to websites, mobile apps, kiosks, and other digital channels using a single content repository.',
      },
      {
        q: 'Do you build custom CMS solutions?',
        a: 'Yes. We develop fully custom CMS platforms tailored to your business workflows, user roles, publishing processes, approval systems, and integration requirements. Every solution is designed for security, scalability, and long-term maintainability.',
      },
      {
        q: 'Which CMS technologies do you work with?',
        a: 'We build modern CMS solutions using Payload CMS, Strapi, Sanity, WordPress (when appropriate), Next.js, React, Node.js, PostgreSQL, REST APIs, and GraphQL. The technology stack is selected based on your business objectives and scalability requirements.',
      },
      {
        q: 'Can you migrate our existing CMS?',
        a: 'Yes. We migrate websites and applications from legacy or traditional CMS platforms to modern custom or headless CMS architectures while preserving content, media, SEO metadata, URLs, and existing business workflows whenever possible.',
      },
      {
        q: 'How much does CMS development cost?',
        a: 'The investment depends on the type of CMS, content structure, user roles, workflow complexity, integrations, security requirements, and scalability goals. After understanding your requirements, we provide a transparent proposal with phased development recommendations.',
      },
      {
        q: 'Can a CMS integrate with CRM, ERP, or eCommerce platforms?',
        a: 'Absolutely. We integrate CMS platforms with CRM systems, ERP software, eCommerce solutions, payment gateways, marketing automation platforms, analytics tools, and other third-party business applications using secure APIs.',
      },
      {
        q: 'Do you provide CMS maintenance and support?',
        a: 'Yes. We provide ongoing CMS maintenance including security updates, framework upgrades, performance optimization, bug fixes, monitoring, cloud management, feature enhancements, and long-term engineering support.',
      },
      {
        q: 'Is a headless CMS suitable for growing businesses?',
        a: 'Yes. Headless CMS platforms provide greater flexibility, faster performance, API-first architecture, and omnichannel content delivery, making them an excellent choice for businesses planning long-term digital growth.',
      },
      {
        q: 'Why choose VoidMatrix Technology for CMS development?',
        a: 'VoidMatrix Technology builds architecture-first CMS solutions that combine intuitive content management with modern engineering practices. Our custom and headless CMS platforms are secure, scalable, SEO-friendly, and designed to support long-term business growth across websites, applications, and digital ecosystems.',
      },
    ],
    offer: [75000, 600000],
  },

  '/services/consulting-and-strategy': {
    name: 'technology consulting and strategy',
    description:
      'VoidMatrix Technology provides technology consulting and strategy services in India for founders, product leaders, and CTOs who need experienced, independent guidance on technology decisions - before they make costly commitments. Based in Mumbai, we work with businesses across Mumbai, Pune, Bangalore, and other major Indian markets who are planning new digital products, evaluating technology vendors, navigating system modernization, or aligning technology investment with business strategy. Bad technology choices are expensive: wrong stack selection, premature architectural decisions, or misaligned vendor contracts can cost months and millions of rupees to unwind. Our consulting team brings the engineering depth and business context to help you make decisions with clarity - evaluating build-versus-buy questions, defining phased technology roadmaps, assessing vendor proposals, and designing scalable architectures before any development spend is committed. Our engagements are structured and time-bound, delivering concrete recommendations, decision frameworks, and actionable roadmaps - not slide decks full of generic advice.',
    faqs: [
      {
        q: 'What does technology consulting actually deliver?',
        a: 'Technology consulting delivers structured guidance on technology decisions: which stack to build on, whether to build or buy, how to architect a scalable system, which vendor to choose, how to phase a digital transformation. The output is a clear recommendation with rationale - not a list of options. You leave the engagement knowing what to do and why.',
      },
      {
        q: 'Who benefits most from technology consulting?',
        a: 'Non-technical founders managing development teams or evaluating significant software investment. CTOs and engineering leaders facing major architectural decisions. Business leaders planning digital transformation without internal technology leadership. Any organization about to spend significant budget on technology and wanting an independent perspective before committing.',
      },
      {
        q: 'How much does technology consulting cost in India?',
        a: 'Technology consulting engagements in India range from ₹50,000 for a focused technology assessment to ₹5,00,000 for a comprehensive strategy engagement with workshops, competitive analysis, and a detailed implementation roadmap.',
      },
      {
        q: 'Can you review a vendor proposal we have received?',
        a: 'Yes - vendor proposal review is one of the most common consulting engagements. We evaluate technical proposals for scope completeness, architectural soundness, hidden risks, and pricing fairness - giving you an independent perspective before you sign.',
      },
      {
        q: 'Do you help with technology stack selection?',
        a: 'Yes. We evaluate technology options against your specific requirements: team expertise, scalability needs, hiring market availability in India, long-term maintenance cost, and integration with existing systems. Recommendations are grounded in data, not preferences.',
      },
      {
        q: 'Do you support digital transformation projects?',
        a: 'Yes. We help businesses map current-state processes, define digital-first target states, evaluate platform options, sequence implementation phases, and manage technology vendor selection - from process digitization to cloud migration to customer-facing product development.',
      },
      {
        q: 'Do you serve clients in Mumbai and Pune?',
        a: 'Yes. We work with founders, product teams, and enterprise leaders across Mumbai and Pune - both in structured consulting engagements and as ongoing technical advisors.',
      },
    ],
    offer: [50000, 500000],
  },

  '/services/content-marketing': {
    name: 'content marketing',
    description:
      "VoidMatrix Technology delivers content marketing services in India for B2B companies, SaaS platforms, and service businesses that want to build sustainable organic traffic and inbound lead pipelines - not just publish content for the sake of it. Based in Mumbai, we create and distribute SEO-optimized content for businesses in Mumbai, Pune, Bangalore, and across India targeting high-intent search audiences. Content marketing compounds over time: articles that rank generate leads every month without incremental ad spend, building an asset that grows in value with every piece published. Our process combines keyword research, competitive content analysis, audience intent mapping, article production, and distribution strategy. We write blog articles, industry guides, case studies, comparison pages, and thought leadership content that ranks in Google and converts readers into qualified leads. Every piece we produce is researched, optimized, structured for search intent, and internally linked to support your site's topical authority.",
    faqs: [
      {
        q: 'How is content marketing different from just blogging?',
        a: 'Blogging is publishing content. Content marketing is publishing strategically targeted content designed to rank for specific keywords, attract specific audiences, and convert readers into leads or customers. Every piece is chosen because it serves a business goal - whether ranking for a commercial keyword, establishing topical authority, or nurturing buyers in a specific stage of the decision process.',
      },
      {
        q: 'How long before content marketing generates leads?',
        a: 'Most businesses see measurable organic traffic growth from content within 3-6 months of consistent publishing. Lead generation typically follows traffic, often picking up by month 4-8 as articles rank and accumulate clicks. Content marketing is a compounding channel - the payoff grows over time, unlike paid ads which stop the moment you stop spending.',
      },
      {
        q: 'How much does content marketing cost in India?',
        a: 'Content marketing programs in India typically range from ₹30,000 to ₹2,00,000 per month, depending on content volume, article complexity, and whether the program includes strategy, production, and distribution or production only.',
      },
      {
        q: 'What types of content do you produce?',
        a: 'We produce SEO-optimized blog articles, comparison and alternative pages, industry guides, how-to content, case studies, whitepapers, and thought leadership articles. Format selection is driven by keyword intent - we write what the search query actually calls for, not a generic article format.',
      },
      {
        q: 'Do you do keyword research before writing?',
        a: 'Yes - always. Every article is mapped to a specific keyword cluster with confirmed search volume, competitive analysis, and realistic ranking potential. We do not write content first and optimize later.',
      },
      {
        q: 'How many articles should I publish per month?',
        a: 'For meaningful topical authority growth, 4-8 articles per month is a productive cadence for most businesses. However, quality consistently outperforms quantity - one well-researched, expertly written 2,000-word article beats five thin posts every time.',
      },
      {
        q: 'Do you work with businesses in Mumbai and Pune?',
        a: 'Yes. We run content marketing programs for technology companies, consulting firms, and service businesses across Mumbai and Pune - including businesses targeting both local Indian audiences and international markets.',
      },
    ],
    offer: [30000, 200000],
  },

  '/services/content-strategy': {
    name: 'content strategy',
    description:
      'VoidMatrix Technology provides content strategy services in India for businesses that are producing content without a clear plan - and wondering why organic traffic is not growing. Based in Mumbai, we build structured content programs for SaaS companies, technology brands, consulting firms, and service businesses in Mumbai, Pune, Bangalore, and across India that want to turn their website into a consistent lead generation channel through search. A content strategy is the difference between publishing randomly and building topical authority systematically. We start with a content audit of what you already have, then map keyword opportunities to your service areas, build topic cluster frameworks, define content formats by intent type, and deliver a prioritized editorial calendar your team can execute against. Our deliverables include audience research, keyword mapping documents, topical authority plans, content gap analysis, and a 3-6 month editorial roadmap. Whether you are starting from zero or improving an existing program, we give you the structure that makes every content investment compound.',
    faqs: [
      {
        q: 'What is content strategy?',
        a: 'Content strategy is the planning, organization, and management of content to achieve specific business goals such as SEO growth, lead generation, customer education, brand authority, and organic traffic growth.',
      },

      {
        q: 'Why do businesses need a content strategy?',
        a: 'Without a clear strategy, businesses often publish unrelated content without a defined search or business objective. A content strategy connects keywords, search intent, audience needs, business priorities, and content formats so every important piece of content has a clear purpose.',
      },

      {
        q: 'How much does content strategy cost in India?',
        a: 'Content strategy engagements in India typically range from ₹40,000 to ₹2,50,000 depending on website size, research requirements, number of topics, competitor analysis, content audit requirements, target markets, and the depth of the strategy.',
      },

      {
        q: 'What does a content strategy include?',
        a: 'A professional content strategy can include audience research, keyword research, search intent analysis, competitor research, content audits, content gap analysis, topic clusters, keyword mapping, topical authority planning, editorial calendars, content formats, and internal linking recommendations.',
      },

      {
        q: 'Do you perform content audits?',
        a: 'Yes. We audit existing website content to identify content gaps, outdated pages, keyword overlap, cannibalization opportunities, weak content, internal linking opportunities, and pages that may require improvement or consolidation.',
      },

      {
        q: 'Do you build topic clusters for SEO?',
        a: 'Yes. We develop topic cluster frameworks that organize related subjects around important business themes. These clusters can connect service pages, product pages, blogs, guides, comparisons, FAQs, and supporting content.',
      },

      {
        q: 'Can content strategy improve SEO?',
        a: 'A well-executed content strategy can support SEO by identifying relevant search opportunities, improving topical coverage, aligning content with search intent, strengthening internal linking, and creating useful content around subjects relevant to the target audience.',
      },

      {
        q: 'Do you provide content strategy services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix Technology provides content strategy services for startups, SMEs, technology companies, SaaS businesses, manufacturers, professional service firms, and other businesses across Mumbai and Pune.',
      },

      {
        q: 'Do you provide content strategy services across India?',
        a: 'Yes. We develop content strategies for businesses targeting Mumbai, Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, other Indian markets, and nationwide search visibility.',
      },

      {
        q: 'Can you create a content strategy for SaaS companies?',
        a: 'Yes. SaaS content strategies can be built around product education, problem-based searches, use cases, integrations, comparisons, industry topics, commercial investigation, customer questions, and long-tail queries relevant to the SaaS product.',
      },

      {
        q: 'Can content strategy support lead generation?',
        a: 'Yes. Content strategy can connect informational and commercial search opportunities with service pages, product pages, landing pages, case studies, comparison content, and conversion paths so organic traffic has a clearer route toward business enquiries.',
      },

      {
        q: 'Do you create the content after developing the strategy?',
        a: 'Yes. Content strategy can be implemented alongside SEO blog writing, website copywriting, service page content, landing page content, case studies, and other content services depending on the requirements of the business.',
      },
    ],
    offer: [40000, 250000],
  },

  '/services/crm-erp-development': {
    name: 'crm and erp development',
    description:
      'VoidMatrix Technology builds custom CRM and ERP systems in India for businesses that have grown beyond what spreadsheets and generic software can handle - and need systems that actually match how they work. Based in Mumbai, we design and develop CRM platforms, ERP systems, and business management tools for manufacturing companies, consulting firms, logistics businesses, retail brands, and service organizations in Mumbai, Pune, Bangalore, and across India. Off-the-shelf CRM and ERP tools are built for average workflows - which means every business using them is making workflow compromises to fit the software. Custom systems eliminate those compromises, giving you a platform that matches your sales process, reporting structure, operational hierarchy, and integration requirements exactly. We handle the complete delivery: requirements workshops, system architecture, module development, data migration from legacy systems or spreadsheets, third-party integrations, user training, and post-launch support. Whether you need a lightweight CRM for a 5-person sales team or a full multi-department ERP, we build it to scale with your business.',
    faqs: [
      {
        q: 'What is the difference between CRM and ERP software?',
        a: 'CRM software focuses on managing customer relationships, sales pipelines, marketing, and customer support, while ERP software manages internal business operations such as finance, inventory, HR, procurement, manufacturing, and reporting. Many growing businesses benefit from integrating both systems into a single platform.',
      },
      {
        q: 'Should my business build a CRM, an ERP, or both?',
        a: 'The right solution depends on your business processes. Companies primarily focused on sales and customer management usually begin with a CRM, while organizations managing inventory, finance, HR, or production often require an ERP. Businesses with multiple departments frequently benefit from an integrated CRM and ERP platform.',
      },
      {
        q: 'How much does custom CRM or ERP development cost in India?',
        a: 'The cost depends on the number of modules, workflow complexity, integrations, reporting requirements, security, user roles, and scalability. After understanding your business processes, we provide a detailed project scope and transparent development estimate.',
      },
      {
        q: 'Can you migrate our existing Excel sheets or legacy software into a new CRM or ERP?',
        a: 'Yes. We help businesses migrate data from spreadsheets, desktop applications, legacy software, and existing databases into modern cloud-based CRM and ERP systems while maintaining data accuracy and minimizing operational disruption.',
      },
      {
        q: 'Can the CRM or ERP integrate with third-party software?',
        a: 'Absolutely. We develop secure integrations with payment gateways, accounting software, ERP systems, WhatsApp Business, email platforms, logistics providers, cloud services, and custom APIs to create a connected business ecosystem.',
      },
      {
        q: 'Which industries do you develop CRM and ERP software for?',
        a: 'We build custom business software for manufacturing, logistics, healthcare, finance, education, retail, professional services, construction, real estate, technology companies, and many other industries requiring workflow automation and centralized business management.',
      },
      {
        q: 'Can multiple departments use the same CRM or ERP platform?',
        a: 'Yes. Our platforms support role-based access control, allowing departments such as sales, finance, HR, inventory, procurement, management, and customer support to securely access the information relevant to their responsibilities.',
      },
      {
        q: 'Is the CRM or ERP scalable as our business grows?',
        a: 'Yes. Every platform is architected for scalability so additional users, departments, business modules, reports, integrations, and automation workflows can be added as your organization expands.',
      },
      {
        q: 'Do you provide support and maintenance after deployment?',
        a: 'Yes. We offer ongoing maintenance, performance optimization, security updates, feature enhancements, cloud infrastructure support, and long-term technical assistance to ensure your business software continues to evolve with your organization.',
      },
      {
        q: 'Why choose VoidMatrix Technology for CRM and ERP development?',
        a: 'We build architecture-first CRM and ERP solutions using modern technologies such as Next.js, React, Node.js, PostgreSQL, and cloud infrastructure. Every platform is engineered specifically for your business workflows, emphasizing scalability, security, performance, and long-term maintainability rather than generic templates.',
      },
    ],
    offer: [300000, 3000000],
  },

  '/services/cro-design': {
    name: 'conversion-focused design',
    description:
      'VoidMatrix Technology provides conversion-focused design services in India for businesses that are driving traffic to pages that are not converting - and losing potential customers to poor design, unclear messaging, or weak calls to action. Based in Mumbai, we design landing pages, product pages, and website experiences for SaaS companies, startups, eCommerce brands, and service businesses in Mumbai, Pune, Bangalore, and across India that need more from their existing traffic. Conversion-focused design is not about making things pretty - it is about understanding how users make decisions and designing page experiences that guide them toward the action you want. We combine UX principles, persuasion psychology, visual hierarchy, and mobile-first execution to create pages that convert. Our process includes conversion auditing of existing pages, wireframe design, copy refinement, visual design, and developer handoff - all grounded in what the data about your specific audience tells us about their decision-making process.',
    faqs: [
      {
        q: 'What is CRO design?',
        a: 'CRO design, or Conversion Rate Optimization design, is the process of designing and improving digital experiences to help more users complete important actions such as submitting a lead form, making a purchase, requesting a quote, registering for a service, or signing up for a SaaS product.',
      },

      {
        q: 'What is the difference between CRO and UI design?',
        a: 'UI design focuses primarily on the visual interface and usability of a digital product. CRO design additionally considers conversion goals, user intent, messaging, calls to action, trust signals, friction points, forms, and the complete journey users follow before taking an important business action.',
      },

      {
        q: 'How much does CRO design cost in India?',
        a: 'CRO design cost in India depends on the number of pages or screens, conversion goals, website complexity, research requirements, available analytics data, user journey complexity, and the level of optimization required.',
      },

      {
        q: 'Can CRO design improve website conversion rates?',
        a: 'CRO design can help identify and reduce usability and conversion friction by improving information hierarchy, messaging, calls to action, forms, trust elements, navigation, and important user journeys. Actual conversion improvement depends on factors including traffic quality, offer, audience, pricing, and implementation.',
      },

      {
        q: 'What types of websites can benefit from CRO design?',
        a: 'Lead-generation websites, B2B websites, eCommerce stores, SaaS websites, service businesses, landing pages, technology websites, and other digital experiences with measurable conversion goals can benefit from CRO-focused design.',
      },

      {
        q: 'Do you provide landing page CRO design?',
        a: 'Yes. VoidMatrix provides landing page CRO design focused on user intent, value propositions, messaging hierarchy, trust signals, calls to action, forms, objections, and the specific conversion objective of the campaign or landing page.',
      },

      {
        q: 'Do you provide eCommerce CRO design?',
        a: 'Yes. eCommerce CRO design can focus on product discovery, product pages, product information, pricing presentation, cart, checkout, forms, trust signals, and other parts of the purchasing journey where users may experience friction.',
      },

      {
        q: 'Do you provide SaaS CRO design?',
        a: 'Yes. VoidMatrix provides CRO design for SaaS websites and selected product journeys involving demo requests, free trials, registrations, onboarding, upgrades, and other important conversion or activation actions.',
      },

      {
        q: 'Can you optimize website forms for conversions?',
        a: 'Yes. Form CRO can focus on reducing unnecessary friction, improving field organization, clarifying instructions, improving calls to action, addressing error states, and creating a clearer form completion experience while maintaining the information required by the business.',
      },

      {
        q: 'Do you use A/B testing for CRO design?',
        a: 'A/B testing can be used to compare different design, messaging, layout, or conversion approaches when sufficient traffic and suitable measurement infrastructure are available. CRO design can also identify testing opportunities for future experimentation.',
      },

      {
        q: 'Can you perform CRO design on an existing website?',
        a: 'Yes. Existing websites can be reviewed for conversion friction, information hierarchy, messaging, calls to action, forms, navigation, and important user journeys before redesign or optimization recommendations are implemented.',
      },

      {
        q: 'Do you provide CRO design services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix provides CRO design services for businesses in Mumbai, Pune, Bangalore, Hyderabad, other Indian cities, and international markets.',
      },

      {
        q: 'Is CRO design the same as SEO?',
        a: 'No. SEO focuses on improving a website’s visibility and organic search performance, while CRO focuses on improving the percentage of users who complete desired actions after reaching the website or digital product. SEO and CRO can work together because increasing qualified traffic and improving conversion performance address different parts of the customer journey.',
      },

      {
        q: 'Can CRO design be combined with UX research?',
        a: 'Yes. UX research can provide evidence about user needs, behavior, problems, and expectations, while CRO design can use those insights to improve conversion-focused journeys, page structure, messaging, forms, and calls to action.',
      },
    ],
    offer: [40000, 300000],
  },

  '/services/digital-marketing': {
    name: 'digital marketing',
    description:
      'VoidMatrix Technology delivers digital marketing services in India for startups, SMEs, and enterprises that need a multi-channel growth engine - not individual tactics working in isolation. Based in Mumbai, we design and execute integrated digital marketing programs for businesses in Mumbai, Pune, Bangalore, and across India combining SEO, Google Ads, Meta Ads, content marketing, email marketing, and performance analytics into a cohesive strategy that drives predictable revenue growth. Digital marketing in India is increasingly competitive - businesses that grow are those with coordinated strategies across channels, not those boosting individual posts or running isolated campaigns. Our team works across B2B technology, eCommerce, real estate, healthcare, education, and professional services - building programs tailored to industry-specific buyer journeys and conversion patterns. We are accountable to business outcomes: leads, revenue, cost per acquisition, and return on ad spend - not vanity metrics.',
    faqs: [
      {
        q: 'What does a digital marketing program from VMT include?',
        a: 'Our digital marketing programs are built to fit your growth stage and goals. Typical components include SEO (technical and content), Google Ads management, Meta Ads (Facebook and Instagram), content marketing, email marketing, conversion rate optimization, and monthly performance reporting. We build the right combination based on your business model, competitive landscape, and budget - not a fixed package.',
      },
      {
        q: 'How much do digital marketing services cost in India?',
        a: 'Digital marketing programs in India range from ₹25,000 to ₹2,00,000 per month in service fees, depending on channel mix, campaign complexity, and content volume. Ad spend (Google, Meta) is separate and budgeted based on your goals and competitive market.',
      },
      {
        q: 'How quickly will I see results?',
        a: 'Paid advertising (Google Ads, Meta Ads) typically generates leads within the first 2-4 weeks of a well-structured campaign. SEO and content marketing show meaningful traffic growth within 3-6 months. A combined program delivers short-term paid leads while building the long-term organic engine simultaneously.',
      },
      {
        q: 'Do you work with both B2B and B2C businesses?',
        a: 'Yes. B2B digital marketing (LinkedIn, content marketing, Google Ads targeting decision-maker keywords) and B2C marketing (Meta Ads, Google Shopping, SEO for consumer queries) require different strategies and we have active programs in both models.',
      },
      {
        q: 'How do you measure and report performance?',
        a: 'We track metrics that matter to revenue: qualified leads generated, cost per lead by channel, conversion rates, organic traffic growth, and return on ad spend. Monthly reports cover performance vs targets, what worked, what did not, and priorities for the next month.',
      },
      {
        q: 'Can you take over an underperforming existing campaign?',
        a: 'Yes. Campaign audits and takeovers are common. We audit the existing account structure, identify wasted spend and missed opportunities, and restructure with a clear performance improvement plan before implementing.',
      },
      {
        q: 'Do you serve businesses in Mumbai and Pune?',
        a: 'Yes. We run digital marketing programs for businesses across Mumbai, Pune, and other Indian cities - including hyper-local campaigns targeting specific Mumbai neighborhoods and pan-India brand campaigns.',
      },
    ],
    offer: [25000, 200000],
  },

  '/services/email-marketing': {
    name: 'email marketing',
    description:
      'VoidMatrix Technology provides email marketing services in India for SaaS companies, eCommerce brands, and B2B service businesses that want to turn their contact lists into consistent revenue - through welcome sequences, nurture campaigns, promotional emails, and lifecycle automation that work while you sleep. Based in Mumbai, we build and manage email marketing programs for businesses across Mumbai, Pune, Bangalore, and across India. Email marketing consistently delivers the highest ROI of any digital marketing channel in India - averaging ₹40+ return per ₹1 spent when executed correctly. The difference between email campaigns that convert and ones that get ignored is strategy, segmentation, copywriting, and deliverability - all areas where most businesses underinvest. We handle the full program: list health management, automation workflow design, email copywriting, template design, A/B testing, deliverability optimization, and performance analytics.',
    faqs: [
      {
        q: 'What is email marketing?',
        a: 'Email marketing is a digital marketing strategy that uses targeted emails to communicate with prospects and customers. Businesses can use it for lead nurturing, promotions, customer engagement, newsletters, retention, product updates, and automated customer communication.',
      },

      {
        q: 'How can email marketing help my business?',
        a: 'Email marketing can help businesses nurture leads, communicate with existing customers, promote products and services, increase repeat purchases, improve customer engagement, and maintain long-term relationships with their audience.',
      },

      {
        q: 'How much does email marketing cost in India?',
        a: 'Email marketing costs in India depend on campaign frequency, subscriber database size, content requirements, automation, segmentation, integrations, design requirements, and ongoing management. The exact investment should be determined according to the scope of the email marketing strategy.',
      },

      {
        q: 'Is email marketing suitable for small businesses?',
        a: 'Yes. Small businesses can use email marketing to nurture leads, communicate with existing customers, promote offers, share updates, and build repeat business without requiring a large marketing infrastructure.',
      },

      {
        q: 'Can you create automated email campaigns?',
        a: 'Yes. Email automation can be used for welcome emails, lead nurturing, onboarding, follow-ups, customer education, abandoned actions, re-engagement, and retention workflows.',
      },

      {
        q: 'Can email marketing generate leads?',
        a: 'Yes. Email marketing can support lead generation and lead nurturing. Email campaigns can be connected with website forms, landing pages, lead magnets, CRM systems, and other acquisition channels to move prospects through the customer journey.',
      },

      {
        q: 'Do you provide email copywriting services?',
        a: 'Yes. Email copywriting can include subject lines, preview text, headlines, body content, promotional messaging, benefits, and calls to action based on the campaign objective and target audience.',
      },

      {
        q: 'Can you segment our email subscriber list?',
        a: 'Yes. Subscriber lists can be segmented using relevant information such as customer type, interests, engagement, purchase history, lead stage, location, or other available customer data.',
      },

      {
        q: 'Can email marketing integrate with our CRM?',
        a: 'Yes. Email marketing systems can be integrated with suitable CRM, website, eCommerce, and other business systems depending on the platforms being used and the available integration capabilities.',
      },

      {
        q: 'How do you measure email marketing performance?',
        a: 'Email marketing performance can be evaluated using metrics such as delivery, opens, clicks, conversions, engagement, unsubscribes, and campaign-level performance. The most important metrics depend on the business objective of each campaign.',
      },

      {
        q: 'Do you provide email marketing services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix provides email marketing services for businesses in Mumbai, Pune, other Indian cities, and international markets. Campaign strategies can be developed around the target audience, industry, market, and business objectives.',
      },

      {
        q: 'Can email marketing work with SEO and digital marketing?',
        a: 'Yes. Email marketing can complement SEO, paid advertising, social media, landing pages, content marketing, and other digital marketing channels. Combining these channels can create a more connected customer acquisition and retention strategy.',
      },
    ],
    offer: [20000, 150000],
  },

  '/services/enterprise-seo': {
    name: 'enterprise seo',
    description:
      'VoidMatrix Technology provides enterprise SEO services in India for large businesses, national brands, and high-traffic websites that need systematic, scalable search optimization programs - not the same tactics applied to a 10-page website. Based in Mumbai, we work with enterprises, eCommerce platforms, SaaS companies, and digital brands in Mumbai, Pune, Bangalore, and across India managing websites with thousands of pages, multiple stakeholder teams, and competitive keyword environments. Enterprise SEO requires a different approach: large-scale technical audits, content governance frameworks, cross-department coordination, international SEO architecture, advanced link authority programs, and analytics infrastructure that can measure performance across hundreds of keyword clusters simultaneously. Our enterprise SEO team has the processes and tooling to operate at this scale - delivering technical fixes, content strategies, and authority building programs that compound into sustainable organic traffic growth for businesses where a single ranking improvement can generate significant revenue.',
    faqs: [
      {
        q: 'What is enterprise SEO?',
        a: 'Enterprise SEO is the process of improving organic search visibility for large and complex websites through scalable technical SEO, website architecture, keyword strategy, content optimization, internal linking, indexation management, structured data, and ongoing search optimization.',
      },

      {
        q: 'What does an enterprise SEO company do?',
        a: 'An enterprise SEO company helps large organizations improve organic search performance across complex websites. This can include technical SEO, site architecture, crawl and indexation management, enterprise keyword research, content strategy, internal linking, migrations, structured data, and ongoing SEO monitoring.',
      },

      {
        q: 'How is enterprise SEO different from regular SEO?',
        a: 'Enterprise SEO operates at a much larger scale. Instead of optimizing only individual pages, enterprise SEO addresses website architecture, templates, technical systems, thousands of URLs, large keyword portfolios, content systems, internal linking, indexation, multiple locations, and organizational implementation processes.',
      },

      {
        q: 'Why is enterprise SEO important for large websites?',
        a: 'Large websites can contain thousands or millions of URLs, making technical and structural SEO issues more difficult to manage. Enterprise SEO creates scalable systems that help search engines discover, crawl, index, and understand important pages while supporting long-term organic growth.',
      },

      {
        q: 'How much does enterprise SEO cost in India?',
        a: 'Enterprise SEO pricing in India depends on website size, number of URLs, technical complexity, target markets, keyword competition, content requirements, technology stack, number of locations, and the level of ongoing SEO support required.',
      },

      {
        q: 'How long does enterprise SEO take to show results?',
        a: 'Enterprise SEO timelines vary according to website size, technical condition, authority, competition, implementation speed, content requirements, and the number of markets being targeted. Technical improvements can sometimes produce relatively quick changes, while broader organic growth generally requires ongoing optimization.',
      },

      {
        q: 'Can enterprise SEO help large eCommerce websites?',
        a: 'Yes. Enterprise SEO can help large eCommerce websites address product and category architecture, faceted navigation, crawl management, indexation, internal linking, product content, structured data, technical performance, and large-scale keyword targeting.',
      },

      {
        q: 'Can enterprise SEO help SaaS companies?',
        a: 'Yes. SaaS companies can use enterprise SEO to build scalable strategies across product pages, solution pages, industry pages, integrations, use cases, educational content, comparison pages, and other search opportunities while maintaining a technically sound website architecture.',
      },

      {
        q: 'Can enterprise SEO improve website architecture?',
        a: 'Yes. Enterprise SEO includes analyzing and improving information architecture, URL structures, navigation, breadcrumbs, internal linking, category systems, content hubs, and relationships between important website sections.',
      },

      {
        q: 'What is enterprise technical SEO?',
        a: 'Enterprise technical SEO focuses on technical issues that affect large websites, including crawlability, indexation, JavaScript rendering, canonicalization, redirects, duplicate URLs, XML sitemaps, website performance, faceted navigation, and other technical systems.',
      },

      {
        q: 'How does enterprise SEO handle thousands of pages?',
        a: 'Enterprise SEO uses scalable systems and patterns instead of relying entirely on manual page-by-page optimization. Templates, URL structures, internal linking systems, content frameworks, technical controls, and keyword mappings can be designed to support large numbers of pages.',
      },

      {
        q: 'Can enterprise SEO help with website migrations?',
        a: 'Yes. Enterprise SEO can support redesigns, CMS migrations, replatforming, domain changes, URL restructuring, technology migrations, mergers, and other large website changes by planning redirects, URL mappings, metadata, canonical signals, internal links, sitemaps, and post-launch monitoring.',
      },

      {
        q: 'Do you provide enterprise SEO services in Mumbai?',
        a: 'Yes. We provide enterprise SEO services for businesses and organizations in Mumbai, including SaaS companies, eCommerce platforms, technology businesses, manufacturers, professional services, and other large organizations.',
      },

      {
        q: 'Do you provide enterprise SEO services in Pune?',
        a: 'Yes. We provide enterprise SEO services for businesses targeting Pune and other major Indian markets. Strategies can be adapted according to website complexity, industry, competition, technology, and target customers.',
      },

      {
        q: 'Do you provide enterprise SEO services across India?',
        a: 'Yes. Enterprise SEO strategies can be developed for organizations targeting Mumbai, Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian markets, as well as businesses targeting customers nationwide.',
      },

      {
        q: 'Can enterprise SEO support international websites?',
        a: 'Yes. Enterprise SEO can support international websites targeting multiple countries and markets through appropriate website architecture, international search strategies, location targeting, content structures, technical SEO, and market-specific keyword research.',
      },

      {
        q: 'How do you measure enterprise SEO performance?',
        a: 'Enterprise SEO performance can be evaluated using organic traffic, keyword visibility, rankings, indexed pages, crawl patterns, qualified leads, conversions, revenue-related search performance, technical SEO metrics, and other business-specific KPIs.',
      },

      {
        q: 'Does enterprise SEO require developers?',
        a: 'Some enterprise SEO improvements require development support, particularly when they involve website architecture, templates, rendering, URL systems, structured data, internal linking systems, migrations, or technical indexation controls. SEO and development teams often need to collaborate on these changes.',
      },

      {
        q: 'How do I choose an enterprise SEO company?',
        a: 'Look for an enterprise SEO company that understands technical SEO, large-scale website architecture, content systems, development workflows, search intent, analytics, and business objectives. A strong provider should also explain its methodology clearly and avoid unrealistic ranking guarantees.',
      },

      {
        q: 'Can enterprise SEO increase organic leads and revenue?',
        a: 'Enterprise SEO can create more opportunities for qualified organic traffic by improving visibility across relevant commercial and informational searches. The potential impact depends on search demand, competition, website authority, conversion performance, implementation quality, and the business model.',
      },
    ],
    offer: [150000, 1000000],
  },

  '/services/google-ads': {
    name: 'google ads management',
    description:
      'VoidMatrix Technology manages Google Ads campaigns in India for businesses that want to reach high-intent buyers at the exact moment they are searching for what you offer - and generate qualified leads and sales profitably. Based in Mumbai, we run search campaigns, display campaigns, Shopping ads, and Performance Max campaigns for startups, SMEs, and enterprises across B2B services, eCommerce, real estate, healthcare, education, and technology in Mumbai, Pune, Bangalore, and across India. Google Ads is the most measurable paid acquisition channel in India, but it is also one of the easiest to waste budget on - poor campaign structure, weak ad copy, misaligned landing pages, and manual bidding strategies cost businesses thousands of rupees daily in wasted spend. Our team fixes that: we build tightly structured campaigns, write ads that earn high Quality Scores, align landing pages with ad messaging, set up accurate conversion tracking, and optimize continuously based on real performance data.',
    faqs: [
      {
        q: 'Why are my Google Ads generating clicks but not enough leads?',
        a: 'Google Ads can generate clicks without producing enough leads when keywords are too broad, search intent is mismatched, negative keywords are missing, advertisements are not relevant, landing pages are weak, or conversion tracking is inaccurate. We analyze the complete campaign and conversion journey to identify where performance is being lost.',
      },

      {
        q: 'How quickly can Google Ads generate results?',
        a: 'Google Ads can begin generating relevant traffic and enquiries shortly after campaigns are launched. However, consistent performance usually requires several weeks of data collection, testing, search-term analysis, and optimization. Results vary depending on industry competition, budget, targeting, landing pages, and conversion rates.',
      },

      {
        q: 'How much should I spend on Google Ads in India?',
        a: 'There is no single Google Ads budget that works for every business. Smaller local campaigns may start with around ₹20,000 to ₹50,000 per month in advertising spend, while competitive industries and larger campaigns may require significantly higher budgets. The appropriate budget depends on search demand, competition, customer value, and conversion economics.',
      },

      {
        q: 'How much do Google Ads management services cost in India?',
        a: 'Google Ads management fees in India commonly range from around ₹15,000 to ₹80,000 or more per month depending on campaign complexity, advertising budget, number of campaigns, locations, products or services, and optimization requirements. The Google advertising budget is separate from the management fee.',
      },

      {
        q: 'Do you provide Google Shopping and Performance Max campaign management?',
        a: 'Yes. We provide Google Shopping and Performance Max campaign management for suitable eCommerce and product-based businesses. Campaigns can include product feed configuration, targeting, conversion tracking, performance monitoring, and ongoing optimization.',
      },

      {
        q: 'Do you set up Google Ads conversion tracking?',
        a: 'Yes. Conversion tracking is an important part of our Google Ads management process. Depending on the business, we can track forms, phone calls, purchases, bookings, signups, enquiries, and other meaningful conversion actions.',
      },

      {
        q: 'Can you improve an existing Google Ads campaign that is wasting money?',
        a: 'Yes. We can audit existing Google Ads accounts to identify wasted spend, irrelevant search terms, weak keyword targeting, poor campaign structure, ineffective advertisements, tracking issues, and landing page problems. We then restructure and optimize the account based on the findings.',
      },

      {
        q: 'Do you provide Google Ads management in Mumbai and Pune?',
        a: 'Yes. VoidMatrix Technology provides Google Ads management services for businesses in Mumbai, Pune, and other Indian cities. Campaigns can target local, regional, national, or international markets depending on the business objective.',
      },

      {
        q: 'Can Google Ads work together with SEO?',
        a: 'Yes. Google Ads and SEO can complement each other. Google Ads can provide immediate visibility for high-intent searches while SEO builds long-term organic search visibility. Search query and conversion data from paid campaigns can also provide useful insights for broader search marketing strategies.',
      },
    ],
    offer: [15000, 80000],
  },

  '/services/growth-consulting': {
    name: 'growth consulting',
    description:
      "VoidMatrix Technology provides growth consulting services in India for startups and scaling businesses that have moved past initial traction but are struggling to identify what to do next - and how to do it systematically. Based in Mumbai, we work with founders and growth teams in Mumbai, Pune, Bangalore, and across India who are ready to replace ad-hoc experimentation with structured, repeatable growth systems. Growth consulting is not strategy for strategy's sake: our engagements diagnose exactly what is suppressing growth (acquisition bottlenecks, activation failures, retention problems, or sales funnel leaks), identify the highest-leverage interventions, and build execution frameworks your team can run without consultants present. We have worked across B2B SaaS, consumer apps, eCommerce, and service businesses - understanding that growth levers differ significantly by business model and market.",
    faqs: [
      {
        q: 'What is growth consulting and how is it different from marketing consulting?',
        a: 'Marketing consulting typically focuses on channel strategy - which platforms to use and how to use them. Growth consulting takes a broader view across the entire customer lifecycle: acquisition, activation, retention, referral, and revenue. We identify which part of your funnel has the highest leverage potential and build systems to improve it - which might be marketing, or might be onboarding, pricing, retention, or sales.',
      },
      {
        q: 'Who benefits most from growth consulting?',
        a: 'Startups that have achieved initial product-market fit and are trying to scale beyond founder-led growth. Businesses that have tried various marketing tactics without a consistent framework. Companies experiencing a growth plateau and unsure which lever to pull. Founders preparing for a funding round who need a credible growth narrative backed by data.',
      },
      {
        q: 'How much does growth consulting cost in India?',
        a: 'Growth consulting engagements in India range from ₹75,000 for a focused growth audit to ₹5,00,000 for a comprehensive engagement including audit, strategy development, and execution framework delivery.',
      },
      {
        q: 'What does a growth audit involve?',
        a: 'A growth audit systematically reviews every stage of your customer lifecycle - how people find you, how they first experience the product, what drives them to convert, what makes them stay or leave, and how you generate referrals. We use data from analytics tools, CRM, and customer interviews to identify the biggest growth constraint and quantify the revenue opportunity of fixing it.',
      },
      {
        q: 'Do you help with go-to-market strategy for new products?',
        a: 'Yes. Go-to-market engagements cover positioning, ideal customer profile definition, channel selection and sequencing, pricing strategy, sales playbook development, and launch execution planning - giving you a structured plan for reaching and converting your target market.',
      },
      {
        q: 'Do you work with B2B and B2C businesses?',
        a: 'Yes. Growth strategies differ significantly between B2B (longer sales cycles, relationship-driven, content and outreach heavy) and B2C (volume-driven, UX and conversion-critical, paid acquisition intensive). We tailor the approach to your business model.',
      },
      {
        q: 'Do you work with companies in Mumbai and Pune?',
        a: 'Yes. We work with founders and growth teams across Mumbai and Pune - both as project-based consultants and as ongoing growth advisors.',
      },
    ],
    offer: [75000, 500000],
  },

  '/services/landing-pages': {
    name: 'landing page design and development',
    description:
      'VoidMatrix Technology designs and develops landing pages in India for businesses that are spending money driving traffic - and losing too many of those visitors before they convert. Based in Mumbai, we build high-converting landing pages for paid campaigns, product launches, lead generation, webinar registrations, and event sign-ups for SaaS companies, real estate developers, educational platforms, eCommerce brands, and B2B service businesses across Mumbai, Pune, Bangalore, and India. A landing page is the most directly measurable marketing asset you have: it converts a known percentage of visitors into leads or customers, and improving that percentage has an immediate, calculable impact on cost per lead and campaign ROI. We combine conversion-optimized layout, persuasive copywriting, trust signal design, mobile performance optimization, and tracking setup into pages that outperform generic homepages for paid traffic - typically by 40-150%.',
    faqs: [
      {
        q: 'What is landing page development?',
        a: 'Landing page development is the process of designing and developing a focused web page around a specific marketing, advertising, product, service, or lead generation objective.',
      },

      {
        q: 'How is a landing page different from a website?',
        a: 'A website usually contains multiple pages and serves several purposes, while a landing page is generally focused on a specific audience, offer, campaign, and conversion objective.',
      },

      {
        q: 'How much does landing page development cost in India?',
        a: 'Landing page development cost in India depends on the design complexity, number of sections, integrations, animations, tracking requirements, CMS requirements, content requirements, and technical features required.',
      },

      {
        q: 'How much does it cost to develop a landing page in Mumbai?',
        a: 'The cost of developing a landing page in Mumbai depends on the scope of design and development, integrations, content requirements, conversion features, analytics, SEO requirements, and overall technical complexity.',
      },

      {
        q: 'Does VoidMatrix develop landing pages for Google Ads?',
        a: 'Yes. VoidMatrix develops landing pages for Google Ads campaigns with campaign-focused messaging, responsive design, clear calls to action, performance optimization, and conversion tracking requirements.',
      },

      {
        q: 'Does VoidMatrix develop landing pages for Meta Ads?',
        a: 'Yes. VoidMatrix develops landing pages for Meta Ads campaigns with mobile-friendly layouts, focused messaging, lead generation functionality, fast performance, and conversion tracking.',
      },

      {
        q: 'Can you develop a landing page for lead generation?',
        a: 'Yes. VoidMatrix develops lead generation landing pages with focused messaging, forms, calls to action, trust elements, and integrations with analytics, CRM, and other lead management systems where required.',
      },

      {
        q: 'Can landing pages rank on Google?',
        a: 'Yes. Landing pages can be developed with SEO-friendly architecture, relevant content, proper headings, metadata, semantic HTML, internal linking opportunities, responsive design, and performance optimization to support organic search visibility.',
      },

      {
        q: 'Do you provide SEO-friendly landing page development?',
        a: 'Yes. VoidMatrix develops SEO-friendly landing pages with technical SEO considerations including page structure, headings, metadata, semantic HTML, internal linking opportunities, responsive design, and performance optimization.',
      },

      {
        q: 'Can you integrate Google Analytics with a landing page?',
        a: 'Yes. Analytics and conversion tracking can be integrated into landing pages to help businesses measure traffic, user behavior, leads, and other relevant conversion events.',
      },

      {
        q: 'Can you integrate a CRM with a landing page?',
        a: 'Yes. Landing pages can be integrated with CRM systems and other lead management platforms so that submitted lead information can be transferred into the appropriate business workflow.',
      },

      {
        q: 'Can you develop SaaS landing pages?',
        a: 'Yes. VoidMatrix develops SaaS landing pages that communicate product value, features, use cases, integrations, benefits, and calls to action while maintaining a responsive and performance-focused experience.',
      },

      {
        q: 'Can you develop product landing pages?',
        a: 'Yes. VoidMatrix develops product landing pages for product launches, marketing campaigns, advertising traffic, product education, and conversion-focused customer journeys.',
      },

      {
        q: 'Can you develop service landing pages?',
        a: 'Yes. VoidMatrix develops dedicated landing pages for individual services with focused messaging, service information, trust elements, FAQs, calls to action, and conversion-focused structures.',
      },

      {
        q: 'How long does it take to develop a landing page?',
        a: 'Development time depends on the design, number of sections, content, integrations, animations, tracking requirements, and approval process. A straightforward landing page generally requires less development time than a highly customized campaign or SaaS landing page.',
      },

      {
        q: 'Can you redesign an existing landing page?',
        a: 'Yes. VoidMatrix can redesign existing landing pages to improve their structure, responsiveness, performance, SEO, usability, messaging, and conversion experience.',
      },

      {
        q: 'Do you provide landing page development services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix provides landing page development services for businesses in Mumbai, Pune, across India, and for organizations targeting international markets.',
      },

      {
        q: 'Do you develop landing pages using Next.js and React?',
        a: 'Yes. VoidMatrix can develop high-performance landing pages using Next.js, React, and other appropriate frontend technologies based on the project requirements.',
      },
    ],
    offer: [20000, 150000],
  },

  '/services/lead-generation': {
    name: 'lead generation',
    description:
      'VoidMatrix Technology provides lead generation services in India for B2B companies, consulting firms, real estate businesses, educational platforms, and service organizations that need a consistent pipeline of qualified prospects - not just occasional inquiries. Based in Mumbai, we build multi-channel lead generation systems for businesses in Mumbai, Pune, Bangalore, and across India combining SEO, Google Ads, Meta Ads, landing page optimization, LinkedIn outreach, and CRM-integrated lead nurturing into a coordinated acquisition engine. Most businesses treat lead generation as a collection of disconnected tactics. We build it as a system: defined target audience, matched channels, optimized conversion points, qualification criteria, and nurturing workflows that move prospects from awareness to a sales-ready conversation. The output is a predictable, scalable pipeline - not month-to-month fluctuation based on which tactic is currently running.',
    faqs: [
      {
        q: 'What is lead generation?',
        a: 'Lead generation is the process of attracting potential customers and converting their interest into business enquiries. It can use channels such as SEO, Google Ads, Meta Ads, landing pages, content marketing, and conversion optimization.',
      },

      {
        q: 'What lead generation services does VoidMatrix Technology provide?',
        a: 'VoidMatrix Technology provides SEO lead generation, landing page lead generation, Google Ads, Meta Ads, B2B lead generation, conversion optimization, and lead tracking and analytics.',
      },

      {
        q: 'How does SEO help with lead generation?',
        a: 'SEO can attract people who are actively searching for products, services, solutions, or providers. By optimizing relevant pages around commercial and high-intent searches, businesses can generate organic traffic that has a stronger potential to become qualified enquiries.',
      },

      {
        q: 'How much does lead generation cost in India?',
        a: 'Lead generation costs vary depending on the target market, industry competition, acquisition channels, advertising budget, website requirements, landing pages, content, tracking, and optimization requirements. A specific estimate should be based on the actual business and lead generation goals.',
      },

      {
        q: 'How long does it take to generate leads?',
        a: 'The timeline depends on the acquisition channel. Paid advertising can begin generating enquiries after campaigns and conversion tracking are properly configured, while SEO-based lead generation generally requires a longer period to build organic search visibility and rankings.',
      },

      {
        q: 'Is SEO or Google Ads better for lead generation?',
        a: 'SEO and Google Ads serve different purposes. Google Ads can provide immediate access to relevant paid search traffic, while SEO can build longer-term organic visibility. Many businesses benefit from using both channels as part of a broader lead generation strategy.',
      },

      {
        q: 'Can you generate B2B leads for manufacturers?',
        a: 'Yes. B2B lead generation for manufacturers can target products, applications, industries, locations, technical requirements, distributors, buyers, and commercial search queries using SEO, landing pages, Google Ads, content, and other relevant acquisition channels.',
      },

      {
        q: 'Can you create landing pages for lead generation?',
        a: 'Yes. Landing pages can be designed around specific campaigns, audiences, products, services, offers, and conversion goals. They can include focused messaging, calls to action, enquiry forms, trust signals, FAQs, and conversion-focused page structures.',
      },

      {
        q: 'Can you run Google Ads for lead generation?',
        a: 'Yes. Google Ads campaigns can be structured around relevant commercial and high-intent searches, with appropriate keyword targeting, ad groups, conversion tracking, negative keywords, landing page alignment, and ongoing campaign optimization.',
      },

      {
        q: 'Can you run Meta Ads for lead generation?',
        a: 'Yes. Meta Ads can be used to reach targeted audiences on Facebook and Instagram through website conversion campaigns, lead forms, remarketing, audience testing, and campaign-specific landing pages.',
      },

      {
        q: 'How do you measure lead generation performance?',
        a: 'Lead generation can be measured using metrics such as qualified leads, conversion rate, cost per lead, lead source, campaign performance, landing page conversion rate, and other business-specific conversion actions. The most useful measurement depends on the sales process and business model.',
      },

      {
        q: 'Do you provide lead generation services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix Technology provides lead generation services for businesses targeting Mumbai, Pune, other Indian cities, nationwide markets, and international customers.',
      },
    ],
    offer: [30000, 250000],
  },

  '/services/marketplace-development': {
    name: 'marketplace development',
    description:
      'VoidMatrix Technology builds marketplace platforms in India for entrepreneurs and businesses that want to create the infrastructure connecting buyers and sellers - and build a scalable, defensible business on top of it. Based in Mumbai, we develop multi-vendor eCommerce marketplaces, service booking platforms, B2B procurement networks, freelancing platforms, and rental marketplaces for founders across Mumbai, Pune, Bangalore, and India. Marketplace development is technically complex: you are building two products simultaneously (the buyer experience and the vendor experience) while managing trust, payments, disputes, and discovery between parties who have no prior relationship. We have built the systems that make this work - vendor onboarding and verification workflows, search and discovery infrastructure, split payment and commission management, review and rating systems, dispute resolution flows, and admin dashboards that give operators visibility and control. Whether you are building a niche B2B marketplace or a consumer multi-category platform, we engineer the technical foundation your marketplace needs to launch and scale.',
    faqs: [
      {
        q: 'What is involved in marketplace development?',
        a: 'Marketplace development involves building the entire platform infrastructure - vendor onboarding and management, product or service listings and search, buyer and seller authentication, secure payment processing with split payments and commission management, messaging, reviews and ratings, dispute resolution, admin dashboards, and analytics. It is significantly more complex than a standard eCommerce store because you are orchestrating interactions between multiple parties.',
      },
      {
        q: 'How much does marketplace development cost in India?',
        a: 'Marketplace development in India ranges from ₹5,00,000 for a focused MVP with core buyer-seller transaction flow to ₹35,00,000 or more for full-featured platforms with sophisticated search, complex payment flows, mobile apps, and enterprise-grade admin tooling.',
      },
      {
        q: 'How long does it take to launch a marketplace?',
        a: 'A marketplace MVP - with core vendor management, product listings, search, and payment - typically takes 3-5 months. Full-featured platforms with mobile apps, advanced search, and comprehensive vendor tools take 6-10 months. We recommend launching an MVP to validate market demand before building every planned feature.',
      },
      {
        q: 'How do you handle payments in a marketplace?',
        a: 'We implement split payment architecture using Razorpay Route, Cashfree Marketplace, or Stripe Connect - allowing buyers to pay on the platform while automatically splitting funds between the vendor and platform commission. We also build escrow flows for high-value transactions where buyer protection is important.',
      },
      {
        q: 'Do you build service marketplaces as well as product ones?',
        a: 'Yes. Service marketplaces - booking platforms, freelancing networks, on-demand services, professional service directories - involve scheduling, availability management, and service delivery workflows that differ from product commerce. We have built both models.',
      },
      {
        q: 'Can you build mobile apps for the marketplace?',
        a: 'Yes. Cross-platform marketplace mobile apps on iOS and Android using React Native are available as part of the engagement - including separate buyer and vendor app experiences where appropriate.',
      },
      {
        q: 'Do you work with marketplace founders in Mumbai and Pune?',
        a: 'Yes. We work with entrepreneurs and businesses across Mumbai and Pune building marketplace businesses - from niche B2B procurement platforms to consumer-facing multi-category markets.',
      },
    ],
    offer: [500000, 3500000],
  },

  '/services/meta-ads': {
    name: 'meta ads management',
    description:
      "VoidMatrix Technology manages Meta Ads campaigns in India - Facebook and Instagram - for businesses that want to build brand awareness, generate qualified leads, and drive online sales through India's largest social advertising platform. Based in Mumbai, we run Meta Ads for eCommerce brands, real estate developers, educational institutions, healthcare providers, SaaS companies, and service businesses across Mumbai, Pune, Bangalore, and India. With over 400 million Meta users in India, the audience reach is unmatched - but the platform's complexity and competitive advertising market mean poorly managed campaigns waste budget rapidly. Our team manages the complete campaign lifecycle: audience research and segmentation, creative briefing and copy development, campaign structure, pixel setup and conversion tracking, retargeting audiences, budget optimization, and detailed performance reporting. We optimize for the metrics that matter - cost per qualified lead, cost per purchase, and return on ad spend - not just impressions and clicks.",
    faqs: [
      {
        q: 'Why are my Meta Ads getting engagement but not enough leads or sales?',
        a: 'Meta Ads can generate likes, views, clicks, and other engagement without producing enough business results when audience targeting is too broad, creative messaging is weak, the offer is unclear, landing pages are not optimized, or conversion tracking is inaccurate. We analyze the complete campaign and conversion journey to identify where performance is being lost.',
      },

      {
        q: 'How quickly can Meta Ads generate results?',
        a: 'Meta Ads can begin generating reach, traffic, leads, or sales shortly after campaigns are launched. However, consistent performance usually requires time for audience testing, creative testing, conversion data collection, and campaign optimization. Results vary depending on the industry, audience, budget, offer, creative quality, and conversion process.',
      },

      {
        q: 'How much should I spend on Meta Ads in India?',
        a: 'There is no single Meta Ads budget that works for every business. Smaller local campaigns may start with around ₹20,000 to ₹50,000 per month in advertising spend, while competitive industries, eCommerce businesses, and larger customer acquisition campaigns may require significantly higher budgets. The appropriate budget depends on the target audience, competition, customer value, and conversion economics.',
      },

      {
        q: 'How much do Meta Ads management services cost in India?',
        a: 'Meta Ads management fees in India commonly range from around ₹15,000 to ₹80,000 or more per month depending on campaign complexity, advertising budget, number of campaigns, target locations, creative requirements, and optimization requirements. The advertising budget paid to Meta is separate from the management fee.',
      },

      {
        q: 'Do you manage both Facebook Ads and Instagram Ads?',
        a: 'Yes. We manage advertising campaigns across Facebook and Instagram through Meta Ads. Campaigns can be structured around the most relevant audiences, placements, creative formats, campaign objectives, and conversion goals for the business.',
      },

      {
        q: 'Do you provide Meta Ads lead generation campaigns?',
        a: 'Yes. We provide Meta lead generation campaigns for businesses that want to generate enquiries through Facebook and Instagram. Depending on the campaign strategy, leads can be captured through Meta lead forms, website forms, landing pages, or other conversion journeys.',
      },

      {
        q: 'Do you provide Meta Ads retargeting?',
        a: 'Yes. We can create retargeting campaigns for website visitors, previous customers, engaged users, product viewers, social media audiences, and other relevant warm audiences. Retargeting helps businesses reconnect with people who have already interacted with their brand.',
      },

      {
        q: 'Do you set up Meta Ads conversion tracking?',
        a: 'Yes. Conversion tracking is an important part of our Meta Ads management process. Depending on the business, we can track leads, purchases, registrations, enquiries, bookings, and other meaningful customer actions.',
      },

      {
        q: 'Can you improve an existing Meta Ads campaign that is wasting money?',
        a: 'Yes. We can review existing Meta Ads campaigns to identify inefficient audiences, weak creatives, poor campaign structures, unnecessary spending, tracking issues, weak retargeting strategies, and conversion problems. We then optimize or restructure the campaigns based on the findings.',
      },

      {
        q: 'Do you provide Meta Ads management in Mumbai and Pune?',
        a: 'Yes. VoidMatrix Technology provides Meta Ads management services for businesses in Mumbai, Pune, and other Indian cities. Campaigns can target local, regional, national, or international audiences depending on the business objective.',
      },

      {
        q: 'Can Meta Ads work together with SEO and Google Ads?',
        a: 'Yes. Meta Ads, Google Ads, and SEO can complement each other as part of a broader digital marketing strategy. Meta Ads can help build demand and reach targeted audiences, Google Ads can capture active search intent, and SEO can build long-term organic visibility. Combining these channels can provide broader coverage across different stages of the customer journey.',
      },
    ],
    offer: [15000, 75000],
  },

  '/services/mobile-ui-design': {
    name: 'mobile ui design',
    description:
      'VoidMatrix Technology provides mobile UI design services in India for startups and product companies that want their mobile app to look and feel as good as the best apps users compare it to - because first impressions in mobile are everything. Based in Mumbai, we design mobile interfaces for Android and iOS applications for companies in Mumbai, Pune, Bangalore, and across India. Great mobile UI is not decoration - it directly affects App Store ratings, user retention, and whether users recommend the app to others. Our design team creates pixel-perfect mobile interfaces following iOS Human Interface Guidelines and Android Material Design principles, applying modern visual design with the functional clarity that mobile users demand. We design the complete screen set for every user journey - onboarding, core features, dashboards, transactions, settings, notifications, and error states - with interactive Figma prototypes and developer-ready handoff documentation that eliminates ambiguity during development.',
    faqs: [
      {
        q: 'What is mobile UI design?',
        a: 'Mobile UI design is the process of designing the visual interface and interactive elements of a mobile application. It includes screen layouts, navigation, buttons, forms, cards, typography, icons, interaction states and other components required for a usable mobile experience.',
      },

      {
        q: 'How much does mobile UI design cost in India?',
        a: 'Mobile UI design cost in India depends on the number of screens, application complexity, user flows, number of user roles, UX requirements, interaction complexity, prototype requirements and design system requirements. A mobile MVP generally requires a smaller scope than a large application with multiple modules and workflows.',
      },

      {
        q: 'What is the difference between mobile UI design and mobile UX design?',
        a: 'Mobile UI design focuses primarily on the visual interface and interaction elements of the application, while mobile UX design focuses on the overall user journey, navigation, information architecture, workflows and usability. Professional mobile app design often combines both UI and UX considerations.',
      },

      {
        q: 'Do you provide mobile app UI and UX design services?',
        a: 'Yes. VoidMatrix provides mobile UI and UX design services including user flows, information architecture, wireframing, screen design, navigation, interaction patterns, prototypes and reusable interface components according to the project scope.',
      },

      {
        q: 'Can you design a mobile app MVP?',
        a: 'Yes. VoidMatrix can design mobile MVP interfaces around the essential features and user workflows required for the initial product launch and validation.',
      },

      {
        q: 'Do you design both iOS and Android app interfaces?',
        a: 'Yes. Mobile UI designs can be planned for iOS, Android or both platforms depending on the product requirements. Platform-specific interface considerations can be incorporated where required.',
      },

      {
        q: 'Can you redesign an existing mobile application?',
        a: 'Yes. We can redesign existing mobile applications by reviewing the current interface, navigation, user flows, visual hierarchy and component consistency and then creating an improved mobile UI system.',
      },

      {
        q: 'Do you create mobile app design systems?',
        a: 'Yes. A mobile design system can include reusable buttons, forms, cards, navigation components, typography, spacing, icons, colors, interaction states and other interface elements required for consistent product development.',
      },

      {
        q: 'Do you design mobile dashboards?',
        a: 'Yes. We design mobile dashboards for analytics products, business applications, SaaS platforms, fintech applications, operational systems and other products that require data-driven mobile interfaces.',
      },

      {
        q: 'Do you provide mobile app prototypes?',
        a: 'Yes. Interactive mobile prototypes can be created to demonstrate navigation, user flows and interactions before development, depending on the project scope.',
      },

      {
        q: 'Do you provide Figma mobile app UI design?',
        a: 'Mobile UI projects can be delivered as structured design files and prototypes suitable for development handoff, including reusable components, screen specifications and design-system references according to the project scope.',
      },

      {
        q: 'Do you provide mobile UI design services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix provides mobile UI design services for businesses in Mumbai, Pune, Bangalore, Hyderabad, other Indian cities and international markets.',
      },

      {
        q: 'Why should I hire a mobile UI design company?',
        a: 'A professional mobile UI design process considers the complete application experience including navigation, touch interactions, user flows, screen hierarchy, responsive layouts, accessibility, reusable components and design systems rather than focusing only on individual screen visuals.',
      },
    ],
    offer: [80000, 400000],
  },

  '/services/on-page-seo': {
    name: 'on-page seo',
    description:
      'VoidMatrix Technology provides on-page SEO services in India for businesses whose pages have good content but are not ranking - because the optimization signals search engines need are missing, weak, or misaligned. Based in Mumbai, we optimize individual web pages for startups, service businesses, eCommerce stores, and SaaS platforms in Mumbai, Pune, Bangalore, and across India targeting specific commercial and informational keywords. On-page SEO is the layer of optimization you fully control: keyword placement in titles, headings, and body content; title tag and meta description quality; internal link structure; image optimization; structured data; and content depth aligned with search intent. Most pages have significant on-page optimization gaps - and closing those gaps is one of the fastest ways to move rankings without building more links or creating new content. We perform thorough page-by-page audits and implement structured optimizations that search engines register within weeks.',
    faqs: [
      {
        q: 'What is on-page SEO?',
        a: 'On-page SEO is the process of optimizing individual website pages to improve their relevance, structure, content quality, and visibility for relevant search queries.',
      },

      {
        q: 'What does on-page SEO include?',
        a: 'On-page SEO can include keyword research and mapping, title tags, meta descriptions, headings, content optimization, internal linking, URL optimization, image SEO, and relevant structured data.',
      },

      {
        q: 'Why is on-page SEO important for a website?',
        a: 'On-page SEO helps search engines understand what your pages are about and whether they are relevant to particular searches. It also improves the structure and usability of important website pages.',
      },

      {
        q: 'How does on-page SEO improve Google rankings?',
        a: 'On-page SEO improves the relevance, structure, and quality of website pages so search engines can better understand their relationship to search queries. Ranking improvements depend on many factors, including competition, website authority, content quality, and technical SEO.',
      },

      {
        q: 'How much does on-page SEO cost in India?',
        a: 'On-page SEO pricing depends on the number of pages, website size, existing SEO condition, keyword competition, content requirements, website architecture, and optimization scope. The appropriate cost can be determined after reviewing the website.',
      },

      {
        q: 'How long does on-page SEO take to show results?',
        a: 'The timeframe varies depending on the website, competition, existing search visibility, domain strength, content quality, and the extent of optimization. Some changes can be reflected relatively quickly, while meaningful organic growth generally requires ongoing optimization and monitoring.',
      },

      {
        q: 'Can you optimize existing website content for SEO?',
        a: 'Yes. Existing content can be reviewed and optimized for search intent, keyword relevance, topical coverage, headings, metadata, readability, internal linking, and overall page structure.',
      },

      {
        q: 'Do you provide keyword research with on-page SEO services?',
        a: 'Yes. Keyword research and search intent analysis are important parts of on-page SEO because they help determine what each page should target and how the content should be structured.',
      },

      {
        q: 'Can on-page SEO help businesses in Mumbai and Pune?',
        a: 'Yes. On-page SEO can support local and commercial search visibility by optimizing relevant service pages, location pages, business content, metadata, internal links, and other page-level elements around relevant searches.',
      },

      {
        q: 'Do you provide on-page SEO services across India?',
        a: 'Yes. VMT provides on-page SEO services for businesses targeting Mumbai, Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, other Indian cities, and nationwide searches.',
      },

      {
        q: 'Do you provide on-page SEO for international websites?',
        a: 'Yes. We optimize websites targeting international markets including the USA, UK, UAE, Europe, Australia, and other global markets based on the target audience, search intent, language, location, and business objectives.',
      },

      {
        q: 'Do you provide on-page SEO for eCommerce websites?',
        a: 'Yes. eCommerce on-page SEO can cover product pages, category pages, collection pages, metadata, content, internal linking, URLs, images, product information, and appropriate structured data.',
      },

      {
        q: 'Do you provide on-page SEO for SaaS websites?',
        a: 'Yes. SaaS on-page SEO can include optimization of product pages, feature pages, solution pages, landing pages, comparison pages, integrations, educational content, and other pages targeting relevant software searches.',
      },

      {
        q: 'Is on-page SEO the same as technical SEO?',
        a: 'No. On-page SEO primarily focuses on page-level content and elements such as keywords, headings, metadata, internal links, URLs, and content structure. Technical SEO focuses more broadly on areas such as crawling, indexing, site performance, rendering, architecture, and technical accessibility.',
      },

      {
        q: 'Can you audit my existing website before doing on-page SEO?',
        a: 'Yes. An initial website and SEO analysis can identify existing optimization gaps, important pages, keyword opportunities, content issues, internal linking opportunities, and other areas that should be addressed.',
      },
    ],
    offer: [30000, 200000],
  },

  '/services/payment-integration': {
    name: 'payment gateway integration',
    description:
      'VoidMatrix Technology provides payment gateway integration services in India for businesses that need to accept payments reliably - without checkout failures, compliance gaps, or integration debt that creates problems at scale. Based in Mumbai, we integrate Razorpay, PayU, Cashfree, Stripe, PayPal, and other payment systems into websites, mobile applications, SaaS platforms, and marketplace infrastructure for startups, eCommerce brands, subscription businesses, and platform operators across Mumbai, Pune, Bangalore, and India. Payment integration quality directly impacts conversion rates: checkout errors, limited payment method support, slow redirect flows, and failed webhook handling all cost revenue. We build payment infrastructure that handles the Indian payments landscape comprehensively - UPI, net banking, credit and debit cards, wallets, EMI - with proper webhook handling, idempotency, refund management, reconciliation support, and RBI/PCI DSS compliance.',

    faqs: [
      {
        q: 'What is payment integration?',

        a: 'Payment integration connects websites, applications, and digital platforms with payment providers to enable secure online transactions. It allows businesses to accept payments through UPI, cards, wallets, net banking, and other payment methods while automating transaction processing.',
      },

      {
        q: 'What payment gateways can you integrate?',

        a: 'We integrate popular payment platforms including Razorpay, Stripe, PayPal, Cashfree, PayU, and custom payment APIs. The right payment provider depends on your business model, target customers, transaction requirements, and geographic markets.',
      },

      {
        q: 'How much does payment integration cost in India?',

        a: 'Payment integration cost depends on the number of payment methods, gateway complexity, customization requirements, security needs, subscription logic, marketplace workflows, and required integrations. After understanding your requirements, we provide a suitable development approach and estimate.',
      },

      {
        q: 'Can you integrate UPI payments into websites and applications?',

        a: 'Yes. We develop UPI payment integrations for websites, mobile applications, SaaS platforms, and marketplaces. Solutions can include payment collection, transaction verification, QR payments, automated status updates, and payment reconciliation workflows.',
      },

      {
        q: 'Do you build subscription payment systems for SaaS products?',

        a: 'Yes. We build recurring billing systems for SaaS platforms and subscription businesses. These systems can include subscription plans, automatic renewals, invoice generation, payment failure handling, and customer billing management.',
      },

      {
        q: 'Can you develop marketplace payment systems?',

        a: 'Yes. We develop marketplace payment workflows including split payments, vendor payouts, commission calculation, settlements, refunds, and transaction tracking for multi-vendor platforms.',
      },

      {
        q: 'Do you support international payment integration?',

        a: 'Yes. We integrate international payment providers and build payment systems supporting global customers, multiple currencies, international cards, and cross-border transactions for businesses expanding worldwide.',
      },

      {
        q: 'Is payment integration secure?',

        a: 'Yes. We follow secure development practices including encrypted communication, secure API handling, webhook validation, proper authentication, and safe transaction processing workflows to reduce payment risks.',
      },

      {
        q: 'Can you integrate payments with existing software?',

        a: 'Yes. We integrate payment systems with existing websites, SaaS platforms, CRM systems, ERP software, mobile applications, and custom business applications using secure APIs.',
      },

      {
        q: 'Why choose VoidMatrix Technology for payment integration?',

        a: 'VoidMatrix Technology builds scalable payment solutions designed around your business model. We focus on secure architecture, reliable transaction flows, automation, and long-term maintainability for eCommerce platforms, SaaS products, marketplaces, and enterprise applications.',
      },
    ],
    offer: [40000, 250000],
  },

  '/services/product-engineering': {
    name: 'product engineering',
    description:
      'VoidMatrix Technology provides product engineering services in India for startups and technology companies that need a technical partner who thinks about the product, not just the code. Based in Mumbai, we work as an embedded product engineering team for founders and product leaders in Mumbai, Pune, Bangalore, and across India who need full-stack technical execution combined with the product judgment to know what to build, how to build it, and when to cut scope. Product engineering is the discipline of building software products users actually want to use - combining frontend and backend development, API design, cloud deployment, and iterative quality improvement with the product thinking that ensures engineering effort goes toward features that create business value. We build SaaS products, consumer applications, B2B platforms, and internal tools on React, Node.js, and cloud infrastructure, using agile sprint delivery that gives you visibility into progress every two weeks rather than a finished product at the end.',
    faqs: [
      {
        q: 'What is product engineering?',
        a: 'Product engineering is the end-to-end process of designing, developing, launching, maintaining, and continuously improving digital products. It combines product strategy, software engineering, cloud infrastructure, security, and continuous innovation to build products that remain scalable and competitive throughout their lifecycle.',
      },
      {
        q: 'How is product engineering different from software development?',
        a: 'Software development typically focuses on delivering a predefined application, while product engineering covers the entire lifecycle of a product—from idea validation and architecture to product launch, scaling, modernization, and continuous improvement. It is a long-term engineering approach rather than a one-time development project.',
      },
      {
        q: 'Can you build MVPs for startups?',
        a: 'Yes. We develop Minimum Viable Products (MVPs) that allow startups to validate business ideas, launch faster, gather user feedback, and attract investors. Every MVP is designed with scalable architecture so it can evolve into a complete production-ready product without rebuilding the foundation.',
      },
      {
        q: 'Which technologies do you use for product engineering?',
        a: 'Our engineering team builds digital products using modern technologies including Next.js, React, TypeScript, Node.js, PostgreSQL, REST APIs, Docker, cloud infrastructure, and scalable backend architectures selected according to each product’s requirements.',
      },
      {
        q: 'Can you modernize our existing software product?',
        a: 'Yes. We help businesses modernize legacy applications by upgrading outdated technologies, improving performance, redesigning user experiences, migrating to cloud-native architectures, strengthening security, and implementing scalable engineering practices while minimizing business disruption.',
      },
      {
        q: 'How much do product engineering services cost in India?',
        a: 'The investment depends on the product scope, engineering complexity, integrations, infrastructure, security, and long-term roadmap. After understanding your business objectives and technical requirements, we provide a detailed proposal with transparent pricing and phased development recommendations.',
      },
      {
        q: 'Do you provide product engineering for enterprises?',
        a: 'Yes. We work with startups, SMEs, and enterprise organizations to develop customer-facing applications, SaaS products, internal platforms, enterprise portals, and mission-critical software engineered for scalability, security, and long-term growth.',
      },
      {
        q: 'Can you scale our product after launch?',
        a: 'Absolutely. Product engineering continues after launch. We provide infrastructure scaling, performance optimization, new feature development, cloud optimization, analytics, monitoring, security updates, and ongoing engineering support to help products grow with increasing user demand.',
      },
      {
        q: 'Do you offer dedicated product engineering teams?',
        a: 'Yes. Businesses can work with dedicated cross-functional engineering teams including product engineers, frontend developers, backend developers, UI/UX designers, QA engineers, DevOps specialists, and technical architects depending on project requirements.',
      },
      {
        q: 'Why choose VoidMatrix Technology for product engineering?',
        a: 'VoidMatrix Technology builds architecture-first digital products designed for long-term success. We combine product strategy, modern engineering, cloud-native development, scalable architecture, security, and continuous product evolution to help startups and enterprises transform ideas into successful digital products.',
      },
    ],
    offer: [300000, 2500000],
  },

  '/services/product-strategy': {
    name: 'product strategy',
    description:
      'VoidMatrix Technology provides product strategy services in India for startup founders and product leaders who need to cut through ambiguity and focus engineering investment on the features, workflows, and user journeys that actually move the business forward. Based in Mumbai, we work with companies in Mumbai, Pune, Bangalore, and across India at every stage: pre-seed teams defining their initial product scope, scaling companies managing growing feature complexity, and enterprises planning new digital product lines. Most failed products fail on strategy, not execution - they build the wrong thing, for the wrong user, solving the wrong problem. Our product strategy engagements are designed to prevent that: through structured discovery workshops, user research synthesis, competitive positioning analysis, and rigorous prioritization, we help you arrive at a product definition your team can build and your market actually wants. Deliverables include product roadmaps, feature priority frameworks, and go-to-market alignment documentation that your entire team can execute against.',
    faqs: [
      {
        q: 'What does product strategy deliver?',
        a: 'A product strategy engagement delivers: a clearly defined product vision, a prioritized feature roadmap phased against business milestones, user personas grounded in research, competitive positioning analysis, a feature prioritization framework (so your team can evaluate future requests consistently), and go-to-market alignment. You leave knowing what to build first, second, and third - and why.',
      },
      {
        q: 'When should a startup invest in product strategy?',
        a: 'Before committing significant engineering budget to a build. The best time is after you have a validated problem hypothesis but before you have written a single line of product code. Strategy prevents the most common and costly startup mistake: building a fully realized product for a problem that did not need that exact solution.',
      },
      {
        q: 'How much does product strategy cost in India?',
        a: 'Product strategy engagements in India range from ₹60,000 for a focused 2-week sprint covering roadmap prioritization to ₹4,00,000 for a comprehensive engagement including user research, competitive analysis, full product definition, and go-to-market alignment.',
      },
      {
        q: 'Do you facilitate discovery workshops?',
        a: 'Yes. Structured discovery workshops with founders and key stakeholders are a core part of our strategy process - surfacing assumptions, aligning on user problems, and building shared clarity on product priorities before documentation begins.',
      },
      {
        q: 'Do you conduct user research?',
        a: 'Yes. User interviews, survey design, and synthesis into product-relevant insights are included in comprehensive strategy engagements. We turn qualitative research findings into specific, actionable design and prioritization recommendations.',
      },
      {
        q: 'How do you prioritize features?',
        a: 'We use a combination of impact-effort scoring, Jobs-to-be-Done alignment, and business goal mapping - applied to a complete feature inventory. Every feature on the roadmap has a rationale tied to a user need and a business outcome, not just stakeholder preference.',
      },
      {
        q: 'Do you work with founders in Mumbai and Pune?',
        a: 'Yes. We work with startup founders and product teams across Mumbai and Pune - both in intensive strategy sprints and as ongoing product advisors.',
      },
    ],
    offer: [60000, 400000],
  },

  '/services/saas-development': {
    name: 'saas development',
    description:
      'VoidMatrix Technology builds SaaS products in India for founders and technology companies who want to launch recurring-revenue software businesses - built on architecture that can scale from 10 paying users to 10,000 without a complete rebuild. Based in Mumbai, we work with SaaS founders in Mumbai, Pune, Bangalore, and across India building vertical SaaS tools, horizontal productivity software, API products, and enterprise SaaS platforms. SaaS development requires specific architectural thinking that standard app development does not: multi-tenant data isolation, subscription billing with plan management and dunning, usage metering, role-based access control across organizations, onboarding flows designed for self-serve activation, and admin infrastructure for managing the platform at scale. We handle every layer - product scoping, technical architecture, frontend and backend development, subscription billing integration, cloud deployment, and post-launch iteration - delivering a SaaS product your first customers can adopt confidently and your business can grow on.',
    faqs: [
      {
        q: 'How much does SaaS development cost in India?',
        a: 'The cost of SaaS development depends on the scope, architecture, integrations, security requirements, and scalability goals. A lean MVP typically requires a significantly lower investment than an enterprise-grade multi-tenant SaaS platform with subscription billing, advanced analytics, and third-party integrations. We provide a detailed technical estimate after understanding your product requirements rather than offering generic pricing packages.',
      },
      {
        q: 'How long does it take to build a SaaS MVP?',
        a: 'Most SaaS MVPs can be delivered within 8–12 weeks depending on feature complexity, integrations, authentication requirements, and user workflows. Our goal is to launch a production-ready MVP that can evolve into a complete SaaS platform without requiring major architectural rewrites.',
      },
      {
        q: 'What technologies do you use for SaaS development?',
        a: 'We primarily build SaaS products using Next.js, React, TypeScript, Node.js, PostgreSQL, Prisma, Docker, cloud infrastructure, REST APIs, and secure authentication systems. The technology stack is selected based on scalability, long-term maintainability, and business requirements rather than short-term convenience.',
      },
      {
        q: 'Can you build a multi-tenant SaaS platform?',
        a: 'Yes. Multi-tenant architecture is one of our core capabilities. We design secure tenant isolation, role-based access control, scalable databases, subscription management, and cloud infrastructure that supports thousands of organizations while maintaining performance and security.',
      },
      {
        q: 'Do you develop SaaS products for startups as well as enterprises?',
        a: 'Yes. We work with early-stage founders validating new ideas, growing startups preparing for scale, and established enterprises launching new SaaS products or modernizing existing platforms. Our development approach adapts to your current stage while planning for future growth.',
      },
      {
        q: 'Can you modernize or rebuild an existing SaaS application?',
        a: 'Absolutely. We help businesses migrate legacy SaaS applications built on outdated technologies to modern cloud-native architectures. Our modernization process focuses on improving performance, maintainability, security, scalability, and developer productivity while minimizing disruption for existing customers.',
      },
      {
        q: 'Do you integrate payment gateways and subscription billing?',
        a: 'Yes. We integrate subscription billing platforms such as Stripe, Razorpay, Paddle, and custom payment solutions. Features can include recurring subscriptions, usage-based pricing, invoices, coupon management, plan upgrades, downgrades, payment recovery, and customer billing portals.',
      },
      {
        q: 'Will my SaaS platform be scalable as my business grows?',
        a: 'Scalability is considered from the very beginning of every project. We design cloud-native architectures, optimized databases, API-first systems, caching strategies, and modular codebases that allow your platform to support increasing users, features, and business requirements without major redevelopment.',
      },
      {
        q: 'Do you provide support after the SaaS product is launched?',
        a: 'Yes. We offer post-launch support that includes performance optimization, infrastructure monitoring, feature development, security updates, bug fixes, cloud scaling, and technical consulting. Many clients continue working with us as their long-term technology partner after launch.',
      },
      {
        q: 'Why choose VoidMatrix Technology for SaaS development?',
        a: 'We follow an architecture-first engineering approach instead of simply building features. Every SaaS platform is designed for scalability, security, maintainability, and long-term product evolution. You work directly with experienced engineers throughout the project, ensuring faster communication, technical transparency, and software built to support business growth.',
      },
    ],
    offer: [500000, 3000000],
  },

  '/services/saas-ui-design': {
    name: 'saas ui design',
    description:
      'VoidMatrix Technology provides SaaS UI design services in India for software companies and founders whose product needs to be as good to use as it is to demo. Based in Mumbai, we design clean, functional, and scalable user interfaces for web-based software products for companies in Mumbai, Pune, Bangalore, and across India. SaaS UI is uniquely challenging: complex feature sets, data-heavy screens, multiple user roles with different needs, and the requirement for design consistency across dozens or hundreds of views. Poor SaaS UI means longer onboarding, higher support ticket volume, lower feature adoption, and elevated churn - even when the underlying product works well. Our design team creates SaaS interfaces where visual clarity and functional density coexist - making complex software feel approachable without dumbing it down. We build complete design systems, not just pretty screens, so every future feature your team builds fits consistently into the existing product.',
    faqs: [
      {
        q: 'What is SaaS UI design?',
        a: 'SaaS UI design is the process of designing user interfaces for software-as-a-service products, dashboards, web applications, and B2B platforms. It focuses on usability, visual hierarchy, navigation, workflows, responsive layouts, and consistent interface components.',
      },

      {
        q: 'How much does SaaS UI design cost in India?',
        a: 'SaaS UI design cost in India depends on the number of screens, product complexity, user roles, workflows, UX requirements, responsive design, design system requirements, and prototype requirements. A SaaS MVP generally requires a smaller design scope than a large enterprise SaaS platform.',
      },

      {
        q: 'How is SaaS UI design different from website UI design?',
        a: 'Website UI design primarily focuses on presenting information, services, products, and calls to action. SaaS UI design focuses on interactive software experiences such as dashboards, workflows, forms, tables, analytics, settings, navigation, user roles, and application functionality.',
      },

      {
        q: 'Do you provide SaaS UX design along with UI design?',
        a: 'Yes. SaaS UI design can include UX planning such as user flows, information architecture, navigation, workflow analysis, wireframing, interaction patterns, and interface design depending on the project scope.',
      },

      {
        q: 'Can you design a SaaS MVP?',
        a: 'Yes. VoidMatrix can design SaaS MVP interfaces around the core features and workflows required for the initial product launch. The design can later be expanded into a larger design system as the product grows.',
      },

      {
        q: 'Do you design SaaS dashboards?',
        a: 'Yes. We design SaaS dashboards for analytics platforms, CRM systems, ERP applications, fintech products, HR platforms, project management tools, operational software, and other business applications.',
      },

      {
        q: 'Do you create SaaS design systems?',
        a: 'Yes. SaaS design systems can include reusable buttons, forms, inputs, cards, tables, navigation components, typography, spacing, interaction states, and other reusable interface elements that support consistent product development.',
      },

      {
        q: 'Can you redesign an existing SaaS application?',
        a: 'Yes. We can redesign existing SaaS products by reviewing the current interface, identifying usability and consistency issues, improving user flows, restructuring important screens, and creating a more scalable UI system.',
      },

      {
        q: 'Do you provide responsive SaaS UI design?',
        a: 'Yes. We design responsive SaaS interfaces for desktop, tablet, and mobile screen sizes where the product requirements call for multi-device access.',
      },

      {
        q: 'Do you provide Figma designs for SaaS products?',
        a: 'SaaS UI projects can be delivered as structured design files and prototypes suitable for developer handoff, including reusable components, interface specifications, and design-system references according to the project scope.',
      },

      {
        q: 'Do you provide SaaS UI design services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix provides SaaS UI design services for businesses in Mumbai, Pune, Bangalore, Hyderabad, other Indian cities, and international markets.',
      },

      {
        q: 'Why should I hire a SaaS UI design company instead of a general UI designer?',
        a: 'SaaS products contain complex workflows, dashboards, navigation systems, forms, tables, user roles, and application states. A SaaS-focused UI design approach considers these product requirements together so the interface can remain usable and consistent as the application grows.',
      },
    ],
    offer: [100000, 600000],
  },

  '/services/seo-audit': {
    name: 'seo audit',
    description:
      'VoidMatrix Technology provides SEO audits in India for businesses that want to understand exactly why their website is not ranking - and have a clear, prioritized plan to fix it. Based in Mumbai, we audit websites for businesses in Mumbai, Pune, Bangalore, and across India: startups launching new sites, established businesses that have seen organic traffic decline, and companies preparing for a serious SEO investment who need a defensible baseline. An SEO audit without recommendations is just a report. Every VMT audit delivers a prioritized issues list tied to specific ranking impact, competitive benchmarking against your top organic competitors, keyword opportunity analysis showing untapped search demand you could be capturing, and a structured 90-day action plan. We cover technical health, site architecture, content quality, on-page optimization, Core Web Vitals, internal linking, structured data, and backlink profile - the complete picture of why your site is where it is in search results.',
    faqs: [
      {
        q: 'What is an SEO audit?',
        a: 'An SEO audit is a detailed analysis of a website to identify technical, on-page, content, indexing, performance, architecture, internal linking, structured data, and other factors that may affect organic search visibility.',
      },

      {
        q: 'What does an SEO audit company do?',
        a: 'An SEO audit company analyzes a website to identify SEO problems and opportunities. The audit can cover technical SEO, crawling, indexing, content, on-page optimization, website architecture, internal linking, structured data, performance, rankings, and search visibility.',
      },

      {
        q: 'Why does my website need an SEO audit?',
        a: 'An SEO audit can help identify technical problems, indexing issues, content gaps, poor page optimization, architecture problems, and other factors that may be limiting organic search performance.',
      },

      {
        q: 'How much does an SEO audit cost in India?',
        a: 'SEO audit pricing in India depends on website size, number of URLs, technical complexity, technology stack, content volume, number of target markets, and the depth of analysis required.',
      },

      {
        q: 'How long does an SEO audit take?',
        a: 'The time required for an SEO audit depends on the size and complexity of the website. A small website may require a focused review, while large eCommerce, SaaS, marketplace, or enterprise websites require significantly deeper technical, architectural, content, and indexation analysis.',
      },

      {
        q: 'What does a technical SEO audit include?',
        a: 'A technical SEO audit can include crawlability, indexation, rendering, robots.txt, XML sitemaps, canonicalization, redirects, URL structures, JavaScript SEO, website performance, mobile usability, duplicate URLs, and other technical SEO factors.',
      },

      {
        q: 'What is included in an on-page SEO audit?',
        a: 'An on-page SEO audit can review title tags, meta descriptions, headings, content structure, keyword targeting, URLs, images, internal links, anchor text, duplicate page elements, and search intent alignment.',
      },

      {
        q: 'Can an SEO audit improve Google rankings?',
        a: 'An SEO audit itself does not directly improve rankings. It identifies issues and opportunities that can then be implemented to improve technical SEO, content, architecture, relevance, and other factors that may contribute to better organic search performance.',
      },

      {
        q: 'Can an SEO audit find why my organic traffic dropped?',
        a: 'Yes. An SEO audit can investigate changes in organic traffic, rankings, indexed pages, technical issues, content changes, website migrations, search visibility, and other factors that may help explain a decline in organic performance.',
      },

      {
        q: 'Can you audit an eCommerce website?',
        a: 'Yes. eCommerce SEO audits can examine product and category architecture, faceted navigation, duplicate URLs, crawlability, indexation, product content, internal linking, structured data, technical performance, and other factors affecting organic visibility.',
      },

      {
        q: 'Can you audit a SaaS website?',
        a: 'Yes. SaaS SEO audits can cover product pages, solution pages, integrations, use cases, content architecture, technical SEO, internal linking, search intent, indexation, structured data, and other factors relevant to SaaS organic growth.',
      },

      {
        q: 'Can an SEO audit identify indexing problems?',
        a: 'Yes. An SEO audit can analyze indexing signals such as robots.txt, noindex directives, canonical tags, XML sitemaps, redirects, duplicate URLs, crawl paths, parameter pages, and other factors that can affect search engine indexation.',
      },

      {
        q: 'Do you check website speed during an SEO audit?',
        a: 'Yes. Website performance can be reviewed as part of a technical SEO audit. The analysis can include page performance, Core Web Vitals-related factors, loading behavior, mobile performance, resource issues, and technical opportunities affecting user experience and search performance.',
      },

      {
        q: 'Do you audit website architecture?',
        a: 'Yes. A website architecture audit can review URL structures, navigation, categories, breadcrumbs, internal linking, page hierarchy, content relationships, and other structural elements that affect users and search engines.',
      },

      {
        q: 'Do you provide SEO audits in Mumbai?',
        a: 'Yes. We provide SEO audit services for businesses in Mumbai, including SaaS companies, eCommerce businesses, service businesses, manufacturers, corporate websites, and technology companies.',
      },

      {
        q: 'Do you provide SEO audits in Pune?',
        a: 'Yes. We provide SEO audit services for businesses targeting Pune and other major Indian markets. Audits can be customized according to the website, industry, technology stack, competition, and SEO objectives.',
      },

      {
        q: 'Do you provide SEO audits across India?',
        a: 'Yes. We provide SEO audits for businesses across India, including companies targeting Mumbai, Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian markets.',
      },

      {
        q: 'Can you perform an SEO audit before a website migration?',
        a: 'Yes. A pre-migration SEO audit can identify existing SEO assets, technical issues, important URLs, internal linking relationships, metadata, indexation requirements, and other areas that should be protected during a migration.',
      },

      {
        q: 'What do I receive after an SEO audit?',
        a: 'The audit should provide identified SEO issues, opportunities, priorities, and actionable recommendations. The exact format depends on the scope of the audit and may include technical findings, content recommendations, architecture observations, and an SEO implementation roadmap.',
      },

      {
        q: 'How often should a website have an SEO audit?',
        a: 'The ideal frequency depends on website size, development activity, SEO investment, migrations, content changes, and business objectives. Large or frequently changing websites may benefit from more regular technical monitoring and periodic comprehensive audits.',
      },

      {
        q: 'How do I choose the right SEO audit company?',
        a: 'Look for an SEO audit company that analyzes more than automated tool scores, understands technical SEO and website development, explains findings clearly, prioritizes issues according to impact, provides actionable recommendations, and avoids unrealistic ranking guarantees.',
      },
    ],
    offer: [20000, 150000],
  },

  '/services/seo-blog-writing': {
    name: 'seo blog writing',
    description:
      'VoidMatrix Technology provides SEO blog writing services in India for businesses that understand content marketing in principle but need execution - articles that actually rank in Google, attract the right audience, and convert readers into leads. Based in Mumbai, we write SEO-optimized blog content for B2B technology companies, SaaS platforms, consulting firms, healthcare providers, and service businesses across Mumbai, Pune, Bangalore, and India. Most SEO blog writing in India fails for one of three reasons: thin content that does not satisfy search intent, generic articles that do not demonstrate expertise, or keyword stuffing that alienates readers. Our writing process starts with keyword research and search intent analysis, produces articles with genuine depth and industry relevance, and optimizes every structural element - heading hierarchy, meta data, internal linking, and schema - so search engines know exactly what the article is about and why it deserves to rank.',
    faqs: [
      {
        q: 'What is SEO blog writing?',
        a: 'SEO blog writing is the process of creating useful blog content around relevant search queries, keywords, and user intent while applying appropriate on-page SEO practices. The objective is to create content that is useful for readers and capable of supporting organic search visibility.',
      },

      {
        q: 'What does an SEO blog writing company do?',
        a: 'An SEO blog writing company researches relevant keywords and topics, analyzes search intent, plans content structures, writes articles, applies on-page SEO recommendations, identifies internal linking opportunities, and creates content aligned with a broader organic search strategy.',
      },

      {
        q: 'How is SEO blog writing different from normal blog writing?',
        a: 'Normal blog writing may focus primarily on communicating information about a topic. SEO blog writing additionally considers search queries, keyword relevance, search intent, content structure, competitors, internal linking, on-page SEO, and opportunities to attract organic search traffic.',
      },

      {
        q: 'How much does SEO blog writing cost in India?',
        a: 'SEO blog writing costs in India depend on article length, topic complexity, research requirements, industry specialization, keyword research, search intent analysis, optimization requirements, and the number of articles required.',
      },

      {
        q: 'How long should an SEO blog be?',
        a: 'There is no fixed ideal word count for an SEO blog. The article should be long enough to properly satisfy the search intent and cover the important information required by the reader. Some queries require short answers while complex topics may require detailed articles.',
      },

      {
        q: 'Can SEO blog writing improve Google rankings?',
        a: 'SEO blog writing can support organic rankings when the content is relevant, useful, well-structured, technically accessible, and aligned with search intent. Rankings also depend on factors such as website authority, competition, technical SEO, internal linking, content quality, and overall search relevance.',
      },

      {
        q: 'Do you perform keyword research before writing SEO blogs?',
        a: 'Yes. Keyword and topic research can be performed before writing to identify relevant search queries, related terms, questions, long-tail opportunities, and topics that align with the business and its target audience.',
      },

      {
        q: 'What is search intent in SEO blog writing?',
        a: 'Search intent refers to the purpose behind a search query and what the user expects to find. Understanding search intent helps determine the appropriate content format, depth, structure, and information required for an SEO blog.',
      },

      {
        q: 'Can SEO blogs target long-tail keywords?',
        a: 'Yes. SEO blogs are particularly useful for targeting relevant long-tail keywords and specific questions because these searches often represent clear information needs and can expand the number of relevant queries a website addresses.',
      },

      {
        q: 'Can SEO blog writing help build topical authority?',
        a: 'Yes. A structured collection of high-quality articles covering related subjects can help a website develop broader topical coverage. Topic clusters and internal linking can connect related content and create a more organized information structure.',
      },

      {
        q: 'Can you write SEO blogs for SaaS companies?',
        a: 'Yes. SEO blog content for SaaS companies can target product-related questions, use cases, integrations, industry topics, comparisons, educational searches, technical questions, and other queries relevant to potential customers.',
      },

      {
        q: 'Can you write SEO blogs for eCommerce websites?',
        a: 'Yes. eCommerce SEO blog content can target product research, buying guides, comparisons, product questions, use cases, educational topics, category-related searches, and other informational queries that support the customer journey.',
      },

      {
        q: 'Can you write SEO blogs for B2B companies?',
        a: 'Yes. B2B SEO blog writing can target industry questions, technical topics, business problems, solution research, comparisons, use cases, and educational searches that potential customers may use during longer buying journeys.',
      },

      {
        q: 'Do SEO blogs need internal links?',
        a: 'Internal links can help connect blog articles with relevant service pages, product pages, category pages, and other supporting content. A relevant internal linking structure can also help users navigate the website and help search engines understand relationships between pages.',
      },

      {
        q: 'Do you optimize blog titles and meta descriptions?',
        a: 'Yes. SEO blog optimization can include recommendations or optimization for title tags, meta descriptions, headings, URLs, internal links, images, content structure, and other relevant on-page SEO elements.',
      },

      {
        q: 'Do you provide SEO blog writing services in Mumbai?',
        a: 'Yes. We provide SEO blog writing services for businesses in Mumbai across industries including technology, SaaS, eCommerce, manufacturing, professional services, B2B, and other sectors.',
      },

      {
        q: 'Do you provide SEO blog writing services in Pune?',
        a: 'Yes. We provide SEO blog writing services for businesses targeting Pune and other major Indian markets. Content strategies can be adapted according to the business, industry, audience, and search opportunities.',
      },

      {
        q: 'Do you provide SEO blog writing services across India?',
        a: 'Yes. We provide SEO blog writing services for businesses across India, including companies targeting Mumbai, Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad, and other Indian markets.',
      },

      {
        q: 'Can you write SEO blogs for international audiences?',
        a: 'Yes. SEO blog content can be created for international markets including the USA, UK, UAE, Europe, Australia, and other regions. Content strategies can be adapted according to market-specific search behavior, terminology, audience needs, and search intent.',
      },

      {
        q: 'How many SEO blogs should I publish per month?',
        a: 'There is no universal number of blogs that every business should publish. The appropriate publishing frequency depends on available search opportunities, competition, content quality, business objectives, website authority, resources, and the overall SEO strategy.',
      },

      {
        q: 'How do I choose an SEO blog writing company?',
        a: 'Look for an SEO blog writing company that understands keyword research, search intent, content strategy, on-page SEO, internal linking, and your industry. The provider should focus on useful, original content rather than keyword stuffing or producing large quantities of low-value articles.',
      },
    ],
    offer: [3000, 15000],
  },

  '/services/seo-services': {
    name: 'seo services',
    description:
      'VoidMatrix Technology provides comprehensive SEO services in India for startups, SMEs, and enterprises that want to build organic traffic that compounds over time - reducing dependence on paid advertising and generating consistent inbound leads from search. Based in Mumbai, we run full-service SEO programs for businesses in Mumbai, Pune, Bangalore, and across India competing in technology, fintech, healthcare, eCommerce, education, real estate, and professional services. SEO in India has evolved significantly - rankings are earned through technical excellence, content depth, topical authority, and backlink quality, not quick fixes or keyword density games. Our programs are built around what actually moves rankings in 2025: clean technical infrastructure, systematically developed topical authority, on-page precision, and authority building through quality content and editorial links. Whether your goal is ranking for local Mumbai keywords, dominating a vertical niche, or building national organic reach, we build the program that fits your business and competitive environment.',
    faqs: [
      {
        q: 'What does an SEO program from VMT include?',
        a: 'A full VMT SEO program covers: technical SEO audit and ongoing monitoring, keyword research and competitive analysis, content strategy and topical authority planning, on-page optimization across target pages, internal linking architecture improvements, link building through editorial outreach and digital PR, structured data implementation, and monthly performance reporting with next-step priorities.',
      },
      {
        q: 'How much do SEO services cost in India?',
        a: 'SEO programs in India range from ₹20,000 per month for focused local SEO for small businesses to ₹1,50,000 per month for comprehensive programs covering technical SEO, content production, and aggressive link building for competitive industries. We scope programs based on your competitive landscape and growth targets, not a fixed menu.',
      },
      {
        q: 'How long before SEO shows results?',
        a: 'Honest a: meaningful ranking movements typically take 3-5 months; significant organic traffic growth develops over 6-12 months. SEO is a compounding investment - the organic traffic you build in month 6 keeps generating leads in month 18 without additional spend. The businesses that win with SEO are the ones who start early and stay consistent.',
      },
      {
        q: 'Do you provide local SEO for Mumbai businesses?',
        a: 'Yes. Local SEO for Mumbai and Pune businesses is a core offering - including Google Business Profile optimization, Mumbai-specific landing pages, local citation building, and geo-targeted keyword strategy. If your customers are in Mumbai, your SEO should reflect that.',
      },
      {
        q: 'Do you build backlinks?',
        a: 'Yes. Link building through editorial outreach, content partnerships, digital PR, and resource page placement is part of our SEO programs. We do not use paid links, private blog networks, or link schemes - only methods that build sustainable domain authority.',
      },
      {
        q: 'Can SEO work for competitive industries in India?',
        a: 'Yes - but it requires more investment and patience in competitive verticals like fintech, real estate, eCommerce, and B2B technology. We audit your competitive landscape before starting so you know exactly what ranking in your space requires and can make an informed investment decision.',
      },
      {
        q: 'Do you provide monthly reporting?',
        a: 'Yes. Monthly reports cover keyword ranking movements, organic traffic trends, technical health status, content published, links earned, and priorities for the next month - so you always know what is happening and why.',
      },
    ],
    offer: [20000, 150000],
  },

  '/services/social-media-management': {
    name: 'social media management',
    description:
      'VoidMatrix Technology provides social media management services in India for businesses that need a consistent, professional brand presence on LinkedIn, Instagram, Facebook, and other platforms - without pulling internal resources away from core business operations. Based in Mumbai, we manage social media for startups, SMEs, and enterprises across Mumbai, Pune, Bangalore, and India in B2B services, eCommerce, healthcare, education, real estate, and hospitality sectors. Social media without strategy is noise. Our programs start with a clear content strategy aligned to your business goals - brand awareness, lead generation, talent attraction, or customer retention - and execute consistently with designed graphics, written copy, publishing schedules, and community engagement management. We produce content that reflects your actual brand, not a generic corporate template, and report on metrics that matter for your specific goal rather than vanity numbers.',
    faqs: [
      {
        q: 'What is social media management?',
        a: 'Social media management is the process of planning, creating, publishing, managing, and optimizing content across social media platforms to build brand visibility, engage audiences, communicate with customers, and support business objectives.',
      },

      {
        q: 'How can social media management help my business?',
        a: 'Social media management can help businesses build brand awareness, maintain a consistent online presence, engage customers, promote products and services, drive website traffic, support lead generation, and strengthen customer relationships.',
      },

      {
        q: 'How much does social media management cost in India?',
        a: 'Social media management costs in India depend on the number of platforms, posting frequency, content volume, creative requirements, community management, campaign requirements, reporting, and ongoing optimization. The exact cost depends on the scope required by the business.',
      },

      {
        q: 'Is social media marketing suitable for small businesses?',
        a: 'Yes. Small businesses can use social media marketing to build local visibility, communicate with customers, showcase products and services, answer questions, promote offers, and establish a consistent digital presence.',
      },

      {
        q: 'Which social media platforms do you manage?',
        a: 'We can manage relevant social media platforms based on the business and target audience. Depending on the requirements, this may include Instagram, Facebook, LinkedIn, X, YouTube, and other relevant platforms.',
      },

      {
        q: 'Do you create social media content?',
        a: 'Yes. Social media content management can include content planning, social media copywriting, creative direction, educational posts, promotional content, product communication, company updates, industry content, and other relevant formats.',
      },

      {
        q: 'Can you manage our LinkedIn social media page?',
        a: 'Yes. LinkedIn management can be used for B2B brand building, company communication, industry insights, thought leadership, recruitment communication, product or service visibility, and audience engagement.',
      },

      {
        q: 'Can you manage Instagram and Facebook for our business?',
        a: 'Yes. Instagram and Facebook can be managed through structured content planning, publishing, audience engagement, promotional communication, brand content, and performance analysis based on the business objectives.',
      },

      {
        q: 'Does social media management include community management?',
        a: 'Community management can be included depending on the selected scope. It may involve monitoring comments, messages, audience interactions, questions, and relevant conversations across managed social platforms.',
      },

      {
        q: 'Can social media marketing generate leads?',
        a: 'Yes. Social media can support lead generation by building audience awareness, promoting relevant offers, driving users to websites or landing pages, supporting campaigns, and creating opportunities for prospects to contact the business.',
      },

      {
        q: 'Does social media management help SEO?',
        a: 'Social media and SEO are different marketing channels, but social media can support broader digital visibility by distributing website content, increasing brand exposure, generating referral traffic, and creating additional opportunities for people to discover and engage with a business.',
      },

      {
        q: 'How do you measure social media performance?',
        a: 'Social media performance can be evaluated using metrics such as reach, impressions, engagement, profile activity, audience growth, website traffic, leads, and other relevant metrics depending on the platform and campaign objectives.',
      },

      {
        q: 'Do you provide social media management services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix provides social media management services for businesses in Mumbai, Pune, other Indian cities, and international markets. Strategies can be developed according to the target audience, industry, platform, and business objectives.',
      },

      {
        q: 'Can social media management work with SEO and digital marketing?',
        a: 'Yes. Social media management can complement SEO, content marketing, email marketing, Google Ads, Meta Ads, landing pages, website development, and lead generation. Integrating these channels can create a stronger overall digital marketing strategy.',
      },
    ],
    offer: [15000, 80000],
  },

  '/services/software-consulting': {
    name: 'software consulting',
    description:
      'VoidMatrix Technology provides software consulting services in India for businesses that need independent, experienced technical guidance before making consequential technology decisions. Based in Mumbai, we work with founders, CTOs, and business leaders in Mumbai, Pune, Bangalore, and across India who are evaluating significant software investments, facing architectural challenges, dealing with underperforming systems, or navigating technology modernization. Software consulting is different from software development - we are not here to build, we are here to advise. Our engagements are structured and time-bound, delivering concrete recommendations, risk assessments, and implementation roadmaps based on objective analysis of your situation. We provide guidance on software architecture, technology stack evaluation, build-versus-buy decisions, vendor selection, legacy system assessment, and technical due diligence - giving you the clarity to make decisions you can defend and execute with confidence.',
    faqs: [
      {
        q: 'When should a business hire software consultants instead of building internally?',
        a: 'Hire consultants when: you are about to make a major technology decision without internal expertise to evaluate it properly; your current software is not performing and you need an objective diagnosis; you are assessing a vendor proposal and want independent technical review; you are modernizing legacy systems and need a prioritized migration strategy; or you need technical due diligence for an acquisition or investment decision.',
      },
      {
        q: 'How much does software consulting cost in India?',
        a: 'Software consulting engagements in India range from ₹50,000 for a focused technical assessment or vendor proposal review to ₹4,00,000 for a comprehensive consulting engagement including system audit, architecture review, competitive technology analysis, and implementation roadmap.',
      },
      {
        q: 'Do you evaluate existing software and identify problems?',
        a: 'Yes. Technical debt assessment, scalability evaluation, security review, performance benchmarking, and architecture quality analysis are all services we provide. We produce a clear findings report with prioritized recommendations rather than a list of generic observations.',
      },
      {
        q: 'Can you review a software vendor proposal before we sign?',
        a: 'Yes - and this is highly recommended before any significant vendor commitment. We review proposals for technical completeness (are all requirements properly addressed?), architectural soundness (will it scale?), hidden risks (vendor lock-in, integration complexity, data migration assumptions), and pricing fairness relative to scope.',
      },
      {
        q: 'Do you advise on build vs buy decisions?',
        a: 'Yes. Build-versus-buy analysis is one of our most requested consulting services. We evaluate the actual total cost of ownership for both options - including hidden costs of off-the-shelf tools (licensing, customization limits, integration overhead) versus custom development (initial investment, ongoing maintenance, team capability requirements).',
      },
      {
        q: 'Can you help modernize legacy systems?',
        a: 'Yes. Legacy modernization consulting includes: assessing what in the current system should be preserved versus replaced; evaluating technology migration paths; sequencing modernization phases to minimize operational disruption; and creating a realistic timeline and investment estimate for the full transformation.',
      },
      {
        q: 'Do you serve businesses in Mumbai and Pune?',
        a: 'Yes. We work with technology teams and business leaders across Mumbai and Pune - both in one-time consulting projects and as ongoing technical advisors.',
      },
    ],
    offer: [50000, 400000],
  },

  '/services/startup-consulting': {
    name: 'startup consulting',
    description:
      "VoidMatrix Technology provides startup consulting services in India for early-stage founders who need experienced guidance on the decisions that determine whether their startup succeeds or fails - before they have burned through budget on the wrong things. Based in Mumbai, we work with pre-seed and seed-stage founders across Mumbai, Pune, Bangalore, and India's growing startup ecosystem on product definition, technology architecture, go-to-market strategy, and MVP development planning. The cost of bad early-stage decisions is not just financial - it is time, momentum, and team morale. Founders who validate assumptions before building, choose technology stacks they can actually hire for, and structure their MVP around the highest-leverage proof points consistently move faster and waste less. Our startup consulting engagements are practical and execution-focused, delivering concrete recommendations on specific decisions rather than generic frameworks. We engage with founders as thinking partners who have built and advised technology companies - bringing direct experience to the challenges that matter most in the first 12-18 months.",
    faqs: [
      {
        q: 'What decisions does startup consulting help with?',
        a: "The most common areas: product scope definition (what to build first and what to defer), technology stack selection (which technologies fit your team's skills, hiring market, and scaling needs in India), MVP planning (how to validate your core hypothesis with minimum build), go-to-market approach (which customer segment to target first and how to reach them), and operational setup (legal structure, banking, early hiring decisions).",
      },
      {
        q: 'How early should I engage a startup consultant?',
        a: 'Before committing significant development spend - ideally in the idea validation or early product definition phase. The most common (and expensive) mistake is building for 3-6 months before discovering that the feature set is wrong, the target customer is wrong, or a simpler solution exists. Consulting before building saves that cost.',
      },
      {
        q: 'How much does startup consulting cost in India?',
        a: 'Startup consulting engagements in India range from ₹40,000 for a focused advisory session on a specific decision to ₹3,00,000 for an ongoing advisory relationship through early product launch and first customer acquisition.',
      },
      {
        q: 'Do you help with MVP planning?',
        a: 'Yes. MVP scoping is one of our most common startup consulting engagements. We help founders define the minimum feature set that proves the core hypothesis, estimate realistic development timelines and costs, identify what can be validated without building (landing pages, concierge service, prototype testing), and avoid the common trap of building an over-engineered v1.',
      },
      {
        q: 'Do you recommend technology stacks for Indian startups?',
        a: 'Yes - with market context. Technology recommendations for Indian startups consider the local hiring market (which technologies you can actually recruit for in Mumbai/Pune/Bangalore), community and support quality, startup-stage appropriateness (avoid enterprise-grade complexity at MVP stage), and what your likely technical co-founder profile will be comfortable with.',
      },
      {
        q: 'Can you help with investor preparation?',
        a: 'Yes. We support technical due diligence preparation, help founders articulate their technology architecture clearly to non-technical investors, review pitch deck technology sections, and prepare responses to common technical questions from investors and VCs.',
      },
      {
        q: 'Do you work with founders in Mumbai and Pune?',
        a: 'Yes. We are active in the Mumbai and Pune startup ecosystems and work with founders at every stage from idea to post-seed - both in structured consulting engagements and as ongoing advisors.',
      },
    ],
    offer: [40000, 300000],
  },

  '/services/technical-advisory': {
    name: 'technical advisory',
    description:
      'VoidMatrix Technology provides technical advisory services in India for business leaders and non-technical founders who are making significant technology decisions without the internal expertise to evaluate them objectively - and need an independent, experienced technical perspective they can trust. Based in Mumbai, we serve as technical advisors and fractional CTOs for businesses in Mumbai, Pune, Bangalore, and across India: founders managing development teams without engineering backgrounds, business leaders evaluating technology vendors or digital transformation programs, and boards overseeing major technology investments. The cost of poor technical oversight is steep: vendors who deliver substandard work, technology stacks that cannot scale, development teams running without accountability, and platforms that need rebuilding 18 months after launch. Our technical advisory services put experienced engineering judgment in the room for the decisions that matter - vendor selection, architecture reviews, development team evaluation, and technology investment prioritization.',
    faqs: [
      {
        q: 'What is technical advisory and what does it include?',
        a: 'Technical advisory provides on-demand engineering expertise to business leaders and non-technical founders. Engagements typically include: reviewing vendor proposals and development contracts, assessing development team performance and code quality, evaluating technology architecture decisions, advising on build-versus-buy choices, conducting technical due diligence for partnerships or acquisitions, and serving as the technical voice in leadership meetings. We translate complex technical topics into business-relevant terms so you can make informed decisions.',
      },
      {
        q: 'What is a fractional CTO and do I need one?',
        a: 'A fractional CTO provides part-time senior technology leadership for businesses that need engineering oversight but are not ready to hire a full-time CTO. If you have a development team you cannot fully evaluate, are making technology decisions without confidence, or are experiencing persistent delivery problems with no internal accountability mechanism, fractional CTO support fills that gap at a fraction of the cost of a full-time hire.',
      },
      {
        q: 'How much does technical advisory cost in India?',
        a: 'Technical advisory retainers in India range from ₹40,000 per month for light-touch advisory (a few hours monthly for specific reviews) to ₹2,50,000 per month for deep fractional CTO engagement with regular team involvement, sprint reviews, and architecture oversight.',
      },
      {
        q: 'Can you review a vendor proposal before we sign a contract?',
        a: 'Yes - and strongly recommended for any engagement above ₹5,00,000. We review proposals for technical scope completeness, hidden assumptions, realistic timeline assessment, technology choices relative to requirements, and pricing fairness. A one-time review cost is trivial compared to a poorly structured vendor contract.',
      },
      {
        q: 'Can you evaluate whether our development team is performing well?',
        a: 'Yes. Development team assessment covers: code quality review, delivery velocity analysis, process maturity, communication and transparency, technical debt accumulation, and security practices - producing a clear findings report with specific recommendations for addressing gaps.',
      },
      {
        q: 'Do you serve on advisory boards?',
        a: 'Yes. We serve in formal technical advisory board roles for startups that need credible technical oversight for investor confidence and governance purposes - including participating in board meetings and providing technical perspective on strategic decisions.',
      },
      {
        q: 'Do you work with business leaders in Mumbai and Pune?',
        a: 'Yes. We provide technical advisory services to founders, CEOs, and business leaders across Mumbai and Pune - both as ongoing retainer advisors and for specific project-based technical oversight.',
      },
    ],
    offer: [40000, 250000],
  },

  '/services/technical-seo': {
    name: 'technical seo',
    description:
      'VoidMatrix Technology provides technical SEO services in India for businesses whose websites are not ranking despite good content - because the technical foundation that search engines require to crawl, index, and understand your pages is broken. Based in Mumbai, we work with startups, SaaS platforms, eCommerce stores, and enterprises in Mumbai, Pune, Bangalore, and across India to diagnose and fix the technical issues silently suppressing organic rankings. Technical SEO problems are invisible to the naked eye but highly visible to search engine crawlers: pages stuck in discovered-not-indexed status, canonical tag errors that split ranking signals, slow Core Web Vitals penalizing pages in competitive results, duplicate content from URL parameter variations, and missing or malformed structured data. We identify and fix these issues systematically, with before/after measurements in Google Search Console so you can see the impact of each improvement. Strong technical SEO is the prerequisite for every other SEO investment - content and links do not work as well on a technically compromised site.',
    faqs: [
      {
        q: 'What is technical SEO?',
        a: 'Technical SEO is the process of improving the technical structure of a website so search engines can efficiently crawl, render, understand, and index its pages. It includes areas such as crawlability, indexation, website architecture, redirects, canonical URLs, structured data, JavaScript SEO, and website performance.',
      },

      {
        q: 'What does a technical SEO audit include?',
        a: 'A technical SEO audit examines the technical factors that can affect organic search visibility. Depending on the website, this can include crawlability, indexation, robots.txt, XML sitemaps, canonical URLs, redirects, status codes, internal linking, duplicate URLs, structured data, JavaScript rendering, page speed, and Core Web Vitals.',
      },

      {
        q: 'How can technical SEO improve Google rankings?',
        a: 'Technical SEO helps remove technical barriers that can prevent search engines from accessing, understanding, and indexing important website pages. A technically sound website provides a stronger foundation for organic search visibility when combined with relevant content, authority, and a broader SEO strategy.',
      },

      {
        q: 'What is included in your technical SEO services?',
        a: 'VMT technical SEO services can include technical SEO audits, crawlability and indexation analysis, website architecture optimization, Core Web Vitals and performance optimization, JavaScript SEO, structured data implementation, internal linking improvements, XML sitemap and robots.txt configuration, canonicalization, and technical SEO implementation.',
      },

      {
        q: 'Can you fix Core Web Vitals issues?',
        a: 'Yes. VMT can investigate Core Web Vitals and related performance problems involving page rendering, JavaScript execution, images, caching, server response time, layout stability, and frontend architecture. We focus on identifying the underlying engineering issues rather than simply reporting performance scores.',
      },

      {
        q: 'Do you provide technical SEO for Next.js and React websites?',
        a: 'Yes. VMT works with modern JavaScript websites including Next.js and React. Technical SEO for these websites can require additional attention to rendering, metadata, routing, internal links, JavaScript execution, structured data, and crawlability.',
      },

      {
        q: 'Can you perform a technical SEO audit for an eCommerce website?',
        a: 'Yes. eCommerce websites often require additional technical SEO analysis because of product URLs, category structures, filters, faceted navigation, pagination, duplicate pages, canonicalization, internal linking, structured data, and large numbers of crawlable URLs.',
      },

      {
        q: 'How do I know if my website has technical SEO problems?',
        a: 'Common warning signs include important pages not appearing in Google, indexing errors in Google Search Console, unexpected organic traffic declines, duplicate URLs, slow page performance, poor Core Web Vitals, broken internal links, incorrect canonical tags, crawling problems, and JavaScript-rendering issues.',
      },

      {
        q: 'Do you provide technical SEO services in Mumbai?',
        a: 'Yes. VMT provides technical SEO services for businesses in Mumbai, Pune, and across India. Our technical SEO work can be performed for corporate websites, SaaS platforms, eCommerce stores, startups, and custom web applications.',
      },

      {
        q: 'How much do technical SEO services cost in India?',
        a: 'Technical SEO pricing depends on the size and complexity of the website, the number of technical issues, the required implementation work, and whether ongoing optimization is required. VMT can assess your website and recommend an appropriate scope before development or optimization begins.',
      },

      {
        q: 'Do you fix crawlability and indexation problems?',
        a: 'Yes. We investigate crawl and indexation issues involving robots.txt, noindex directives, XML sitemaps, canonical URLs, redirects, HTTP status codes, internal linking, duplicate URLs, JavaScript rendering, and other technical factors that can affect how search engines discover and process website pages.',
      },

      {
        q: 'Do you implement structured data and schema markup?',
        a: 'Yes. VMT can implement and validate relevant structured data for supported website entities such as organizations, services, products, articles, and other appropriate content types. The implementation is based on the actual content and structure of the website rather than adding unnecessary schema markup.',
      },
    ],
    offer: [50000, 400000],
  },

  '/services/technology-roadmaps': {
    name: 'technology roadmap planning',
    description:
      'VoidMatrix Technology provides technology roadmap planning services in India for businesses that need to make significant technology investments over the next 12-36 months and want a structured, sequenced plan before committing budget. Based in Mumbai, we work with leadership teams, CTOs, and founders in Mumbai, Pune, Bangalore, and across India building product development roadmaps, infrastructure modernization plans, digital transformation strategies, and technology capability buildouts. Technology investment without sequencing is expensive: building system B before system A is ready, choosing a vendor that conflicts with a platform you plan to add in 6 months, or scaling infrastructure before the product architecture supports it. Our roadmap planning engagements audit current technology capabilities, define future-state requirements, identify dependencies and sequencing constraints, and deliver phased roadmaps with clear milestones, resource implications, and decision points - so your technology investment compounds intelligently rather than accruing debt.',
    faqs: [
      {
        q: 'What does a technology roadmap include?',
        a: 'A technology roadmap includes: current-state technology assessment, future-state vision aligned to business objectives, phased initiatives with sequencing rationale, resource requirements and team implications, key dependencies and sequencing constraints, risk identification and mitigation strategies, milestone definitions and success metrics, and a review governance framework. It is a living document - not a one-time artifact.',
      },
      {
        q: 'How is a technology roadmap different from a product roadmap?',
        a: 'A product roadmap sequences features from a user and business value perspective. A technology roadmap covers the broader infrastructure, platform, and capability investments that enable the product - cloud architecture, data infrastructure, security framework, engineering tooling, and integration ecosystem. Both are needed; they should be aligned.',
      },
      {
        q: 'How much does technology roadmap planning cost in India?',
        a: 'Technology roadmap engagements in India range from ₹60,000 for a focused 2-week planning sprint to ₹4,00,000 for a comprehensive engagement with stakeholder workshops, competitive technology benchmarking, vendor evaluation, and a detailed 18-24 month roadmap.',
      },
      {
        q: 'How do you facilitate stakeholder alignment around the roadmap?',
        a: 'We run structured workshops - typically 2-3 sessions with different stakeholder groups - that surface competing priorities, identify hidden dependencies, and build shared understanding before documentation begins. Roadmaps built on stakeholder consensus get funded and executed; ones built in isolation get ignored.',
      },
      {
        q: 'How do you prioritize what goes on the roadmap?',
        a: 'Prioritization is based on business impact (revenue, cost, risk), strategic dependency (what needs to exist before something else can be built), resource feasibility (what is realistic given team size and budget), and timing constraints (regulatory deadlines, market windows, competitive pressure). Every initiative on the roadmap has a rationale, not just a position.',
      },
      {
        q: 'Do you help with budget planning for the roadmap?',
        a: 'Yes. We provide order-of-magnitude investment estimates for each roadmap initiative - giving leadership a financial planning baseline for each phase without requiring detailed specifications at the planning stage.',
      },
      {
        q: 'Do you work with leadership teams in Mumbai and Pune?',
        a: 'Yes. We work with founders, CTOs, and executive teams across Mumbai and Pune - facilitating roadmap workshops and delivering technology investment plans for both startup growth stages and enterprise transformation programs.',
      },
    ],
    offer: [60000, 400000],
  },

  '/services/third-party-integration': {
    name: 'third-party integrations',
    description:
      'VoidMatrix Technology provides third-party integration services in India for businesses that need their digital platforms to work together - reliably, securely, and without constant manual data entry between disconnected systems. Based in Mumbai, we design and build integrations for SaaS companies, eCommerce platforms, startups, and enterprises across Mumbai, Pune, Bangalore, and India who need to connect web applications, mobile platforms, ERPs, CRMs, payment processors, communication tools, analytics services, and logistics providers into a coherent automated ecosystem. Every integration we build prioritizes reliability: proper error handling, webhook retry logic, idempotent operations, event logging, and alerting for failures - because integrations that silently fail are worse than no integration at all. We handle the complete integration lifecycle from API research and architecture design through implementation, testing, and documentation - so your team understands and can maintain what we build.',
    faqs: [
      {
        q: 'What is third-party integration?',

        a: 'Third-party integration connects your website, application, SaaS platform, or business software with an external service or system through APIs, webhooks, SDKs, or other integration methods. It allows different platforms to exchange data and automate business workflows.',
      },

      {
        q: 'What types of third-party systems can you integrate?',

        a: 'We integrate CRMs, ERPs, payment gateways, SaaS applications, communication platforms, marketing tools, analytics systems, eCommerce platforms, logistics services, cloud platforms, and other business applications through secure APIs and integration workflows.',
      },

      {
        q: 'How much does third-party integration cost in India?',

        a: 'The cost depends on the number of systems, API complexity, authentication requirements, data synchronization, custom business logic, transaction volume, and security requirements. A simple API connection will generally require less development than a multi-system integration platform.',
      },

      {
        q: 'Can you integrate CRM and ERP systems?',

        a: 'Yes. We integrate CRM and ERP systems with websites, SaaS platforms, eCommerce applications, and custom business software. Integrations can synchronize customers, leads, orders, inventory, invoices, and other operational information.',
      },

      {
        q: 'Can you integrate multiple SaaS applications?',

        a: 'Yes. We connect multiple SaaS platforms through APIs, webhooks, SDKs, and custom integration workflows. This can automate data synchronization and business processes across sales, marketing, customer support, finance, communication, and operations.',
      },

      {
        q: 'Do you provide API and webhook integration services?',

        a: 'Yes. We develop and integrate REST APIs, GraphQL APIs, webhooks, and third-party SDKs. Our integrations can include authentication, data validation, transformation, event processing, error handling, retries, and monitoring.',
      },

      {
        q: 'Can you integrate third-party services into an existing application?',

        a: 'Yes. We can integrate external services into existing websites, mobile applications, SaaS platforms, eCommerce systems, and enterprise software without requiring the entire application to be rebuilt.',
      },

      {
        q: 'Can third-party integrations automate business workflows?',

        a: 'Yes. Integrations can automatically transfer data and trigger actions between systems. Examples include creating CRM records from website leads, updating inventory after an order, sending customer notifications after payments, or synchronizing data between business applications.',
      },

      {
        q: 'Do you provide custom integration development?',

        a: 'Yes. When an existing connector does not support your requirements, we develop custom integrations using APIs, webhooks, SDKs, middleware, and application-specific business logic.',
      },

      {
        q: 'Why choose VoidMatrix Technology for third-party integrations?',

        a: 'VoidMatrix Technology focuses on reliable integration architecture rather than simply connecting two systems. We consider data flow, authentication, validation, error handling, scalability, security, and long-term maintainability when building integrations for startups and enterprises.',
      },
    ],
    offer: [50000, 300000],
  },

  '/services/ui-ux-design': {
    name: 'ui/ux design',
    description:
      'VoidMatrix Technology provides UI/UX design services in India for startups, product companies, and enterprises that understand great design is not an aesthetic choice - it is a business performance driver. Based in Mumbai, we design digital experiences for web applications, mobile apps, SaaS products, eCommerce platforms, and marketing websites for companies across Mumbai, Pune, Bangalore, and India. Good UI/UX design reduces user friction, shortens onboarding time, increases feature adoption, improves conversion rates, and builds the trust that makes users recommend products to others. Poor design does the opposite - at scale. Our design process is grounded in user research and business outcomes, not aesthetic trends. We conduct user interviews, build information architectures, map user flows, wireframe page structures, design high-fidelity interfaces, prototype interactions, and test with real users before delivery - ensuring designs that look right also work right when real people use them.',
    faqs: [
      {
        q: 'What is the difference between UI and UX design?',
        a: 'UX (User Experience) design focuses on how a product works - the structure, flows, information hierarchy, and logical organization that makes it intuitive. UI (User Interface) design focuses on how it looks - visual hierarchy, typography, color, components, and interaction states. Effective product design requires both: beautiful UI without solid UX creates visually impressive products that confuse users; strong UX without quality UI creates functional products that feel unprofessional.',
      },
      {
        q: 'How much does UI/UX design cost in India?',
        a: 'UI/UX design in India ranges from ₹80,000 for a focused product section or landing page design to ₹8,00,000 or more for comprehensive product design covering an entire web application or mobile app with extensive user research, design system, and iterative testing.',
      },
      {
        q: 'Do you conduct user research before designing?',
        a: 'Yes - for every engagement above a minimal scope. User interviews, competitive UX analysis, and behavioral data review are what separate design grounded in evidence from design based on assumptions. We invest in understanding your users because that understanding directly improves design quality and business outcomes.',
      },
      {
        q: 'Do you create interactive prototypes?',
        a: 'Yes. Clickable Figma prototypes demonstrating user flows and interactions are a standard deliverable - used for stakeholder alignment, investor presentations, developer briefing, and usability testing before development begins.',
      },
      {
        q: 'Do you build design systems?',
        a: 'Yes. A design system - component library, color tokens, typography scale, spacing system, icon set, and interaction patterns - is the foundation of scalable design. Without it, every new feature is designed inconsistently and development speed suffers. We build design systems as a standard part of product design engagements.',
      },
      {
        q: 'How do you ensure the design is technically implementable?',
        a: 'We design in close collaboration with development teams. Our Figma files are production-ready - annotated with specifications, organized with named components, and accompanied by developer notes on interaction behavior. We also support developers during implementation, reviewing builds to ensure design fidelity.',
      },
      {
        q: 'Do you work with companies in Mumbai and Pune?',
        a: 'Yes. We design digital products for companies across Mumbai and Pune - from early-stage startup MVPs to enterprise platform redesigns.',
      },
    ],
    offer: [80000, 800000],
  },

  '/services/ux-research': {
    name: 'ux research',
    description:
      'VoidMatrix Technology provides UX research services in India for product teams and businesses that want to build products users actually want - rather than discovering after launch that the design assumptions were wrong. Based in Mumbai, we conduct user research for startups, product managers, and design teams in Mumbai, Pune, Bangalore, and across India. UX research is risk management for product investment. Every unvalidated assumption about user behavior, terminology, workflow preference, or mental model is a potential source of design failure - and research is how you replace those assumptions with evidence. Our research team conducts user interviews, usability tests, surveys, contextual inquiry, card sorting, and jobs-to-be-done research - synthesizing findings into specific, actionable design and product recommendations. Whether you are exploring a new product opportunity, validating a design before development, or diagnosing why users are abandoning a specific flow, we deliver insights that reduce product risk and improve design quality.',
    faqs: [
      {
        q: 'What is UX research?',
        a: 'UX research is the process of studying users, their needs, behaviors, expectations, problems, and interactions with a digital product. It helps businesses make product and design decisions based on evidence rather than assumptions.',
      },

      {
        q: 'What does a UX researcher do?',
        a: 'A UX researcher studies users through methods such as interviews, usability testing, surveys, user journey research, competitor research, and behavioral analysis. The findings are analyzed to identify user needs, usability problems, friction points, and opportunities for improvement.',
      },

      {
        q: 'Why is UX research important for a website?',
        a: 'UX research helps identify how users navigate a website, what information they expect, where they experience confusion, and what prevents them from completing important actions. These insights can help improve usability, user experience, and conversion journeys.',
      },

      {
        q: 'Why does a SaaS company need UX research?',
        a: 'SaaS products often contain complex workflows, dashboards, onboarding processes, and multiple user roles. UX research helps identify where users struggle and provides evidence that can guide improvements to product usability, onboarding, navigation, and important workflows.',
      },

      {
        q: 'What UX research methods do you use?',
        a: 'UX research can include user interviews, usability testing, surveys, user journey research, competitor UX research, behavioral analysis, and other research methods selected according to the research objective and product requirements.',
      },

      {
        q: 'What is usability testing in UX research?',
        a: 'Usability testing involves observing users while they complete specific tasks on a website, application, or digital product. It helps identify confusion, navigation problems, unnecessary steps, unclear interfaces, and other usability issues.',
      },

      {
        q: 'How much does UX research cost in India?',
        a: 'UX research cost in India depends on factors such as the research objective, number of participants, user segments, methodology, product complexity, number of journeys being studied, and depth of analysis. A focused usability study will generally have different requirements from a large enterprise UX research project.',
      },

      {
        q: 'How long does a UX research project take?',
        a: 'The timeline depends on the research methodology, number of participants, product complexity, research scope, and analysis requirements. A focused usability study can be completed faster than a broader research program involving interviews, surveys, multiple user segments, and detailed analysis.',
      },

      {
        q: 'Can UX research be done before designing a website or app?',
        a: 'Yes. UX research can be conducted before design to understand target users, their needs, problems, expectations, workflows, and decision-making behavior. These findings can provide valuable direction for information architecture, user journeys, wireframes, and interface design.',
      },

      {
        q: 'Can UX research improve website conversion rates?',
        a: 'UX research can help identify usability problems, confusing journeys, information gaps, trust issues, and friction points that may affect conversions. The research findings can then be used to prioritize UX and conversion improvements.',
      },

      {
        q: 'Do you provide UX research services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix provides UX research services for businesses in Mumbai, Pune, Bangalore, Hyderabad, other Indian cities, and international markets.',
      },

      {
        q: 'Can UX research be combined with UI UX design?',
        a: 'Yes. UX research can be integrated with the UI UX design process. Research findings can guide information architecture, user flows, wireframes, prototypes, interface design, and usability validation before development.',
      },
    ],
    offer: [60000, 400000],
  },

  '/services/website-copywriting': {
    name: 'website copywriting',
    description:
      'VoidMatrix Technology provides website copywriting services in India for businesses whose websites look professional but are not generating enough leads - because the copy is not doing the selling work it should. Based in Mumbai, we write homepage copy, service page copy, landing pages, about pages, and product pages for technology companies, consulting firms, healthcare providers, eCommerce brands, real estate businesses, and professional service firms across Mumbai, Pune, Bangalore, and India. Most website copy fails for the same reasons: it describes features rather than communicating benefits, talks about the company rather than the customer, and uses vague generic language that says nothing memorable. Our copywriting combines audience research, competitive messaging analysis, persuasion principles, and SEO keyword integration to produce copy that speaks directly to buyer motivations, addresses real objections, and drives visitors to take action.',
    faqs: [
      {
        q: 'What is website copywriting?',
        a: 'Website copywriting is the process of creating clear, persuasive and purposeful content for website pages. It helps communicate a business, product or service, explain its value, address customer needs and guide visitors toward an appropriate action.',
      },

      {
        q: 'What does a website copywriting company do?',
        a: 'A website copywriting company researches the business and target audience, develops messaging, structures website content and writes pages such as homepages, service pages, product pages, landing pages and other important website sections.',
      },

      {
        q: 'How is website copywriting different from regular content writing?',
        a: 'Website copywriting focuses strongly on communication, positioning and conversion. It considers what visitors need to understand, what problems they have, why the business is relevant and what action the visitor should take. Content writing can have broader informational or editorial objectives.',
      },

      {
        q: 'How much does website copywriting cost in India?',
        a: 'Website copywriting costs in India depend on the number of pages, content length, industry complexity, research requirements, SEO requirements, conversion strategy, technical subject matter and level of customization required.',
      },

      {
        q: 'Can website copywriting improve conversions?',
        a: 'Good website copy can help improve conversion opportunities by making the value proposition clearer, addressing customer concerns, communicating benefits, strengthening calls to action and creating a more understandable customer journey. Actual conversion performance also depends on design, offer, traffic quality, pricing and other factors.',
      },

      {
        q: 'Can website copywriting help SEO?',
        a: 'Yes. Website copy can support SEO when it is created around relevant search intent, useful information, appropriate keywords, clear headings, internal linking and well-structured page content. SEO copywriting should prioritize usefulness rather than keyword stuffing.',
      },

      {
        q: 'Do you write homepage copy?',
        a: 'Yes. Homepage copywriting can communicate the business value proposition, services, benefits, differentiators, trust signals and important calls to action while helping visitors quickly understand what the company provides.',
      },

      {
        q: 'Do you write service page content?',
        a: 'Yes. Service page copywriting can explain the service, customer problems, benefits, process, differentiators, use cases, FAQs and relevant calls to action while incorporating appropriate SEO considerations.',
      },

      {
        q: 'Do you provide landing page copywriting?',
        a: 'Yes. Landing page copy can be created around a specific audience, campaign, product, service, search query or conversion objective. The messaging is structured to keep the visitor focused on the intended action.',
      },

      {
        q: 'Can you write website copy for SaaS companies?',
        a: 'Yes. SaaS website copywriting can cover homepages, product pages, feature pages, solution pages, industry pages, use cases, integrations, comparison pages and other content needed to explain software products clearly.',
      },

      {
        q: 'Can you write website copy for B2B companies?',
        a: 'Yes. B2B website copywriting can explain complex products and services around business problems, solutions, industries, capabilities, use cases, differentiators and customer outcomes.',
      },

      {
        q: 'Can you write eCommerce website copy?',
        a: 'Yes. eCommerce copywriting can include product descriptions, category content, buying guides, landing pages and supporting content designed to communicate product value and help customers make informed purchasing decisions.',
      },

      {
        q: 'Do you provide SEO website copywriting?',
        a: 'Yes. SEO website copywriting combines customer-focused messaging with search considerations such as keyword research, search intent, page structure, headings, internal linking and relevant on-page SEO elements.',
      },

      {
        q: 'Do you perform keyword research for website copy?',
        a: 'Keyword research can be included when SEO is part of the website copywriting requirement. Relevant queries and search intent can help determine what information should be included on important website pages.',
      },

      {
        q: 'Do you provide website copywriting services in Mumbai?',
        a: 'Yes. VoidMatrix provides website copywriting services for businesses in Mumbai, including technology companies, SaaS businesses, manufacturers, professional services, eCommerce businesses and startups.',
      },

      {
        q: 'Do you provide website copywriting services in Pune?',
        a: 'Yes. VoidMatrix provides website copywriting services for businesses targeting Pune and other major Indian markets. Content can be adapted according to the business, industry, audience and website objectives.',
      },

      {
        q: 'Do you provide website copywriting services across India?',
        a: 'Yes. VoidMatrix provides website copywriting services for businesses across India, including companies targeting Mumbai, Pune, Bangalore, Hyderabad, Delhi, Chennai, Ahmedabad and other markets.',
      },

      {
        q: 'Can you write website copy for international businesses?',
        a: 'Yes. VoidMatrix can create website copy for businesses targeting international markets such as the USA, UK, UAE, Europe, Australia and other regions. Content can be adapted according to the target audience, terminology, market and business positioning.',
      },

      {
        q: 'How long does website copywriting take?',
        a: 'The timeline depends on the number of pages, research requirements, industry complexity, content length, feedback cycles and project scope. A small website generally requires less time than a large SaaS, eCommerce or enterprise website.',
      },

      {
        q: 'How do I choose a website copywriting company?',
        a: 'Look for a website copywriting company that understands your audience, business model, positioning and conversion objectives. If SEO is also important, choose a provider that understands search intent, keyword research, website architecture and on-page SEO rather than simply producing generic website text.',
      },
    ],
    offer: [15000, 150000],
  },

  '/services/website-ui-design': {
    name: 'website ui design',
    description:
      'VoidMatrix Technology provides website UI design services in India for businesses that want their website to look as credible and professional as the best sites in their industry - because first impressions determine whether visitors stay or leave within 8 seconds. Based in Mumbai, we design corporate websites, startup platforms, SaaS marketing sites, professional service firm sites, and eCommerce storefronts for companies across Mumbai, Pune, Bangalore, and India. Website UI design is the visual execution that turns a content and structural plan into a digital presence that communicates quality, builds trust, and guides visitors toward conversion. Our design team combines brand alignment, conversion best practices, modern visual design, and technical implementation awareness to produce websites that look great across devices and perform commercially. We deliver Figma design files that are production-ready - organized, annotated, and built with developer implementation in mind.',
    faqs: [
      {
        q: 'What is website UI design?',
        a: 'Website UI design is the process of designing the visual interface of a website, including layouts, typography, colours, navigation, buttons, forms, cards, spacing, and interactive elements. The goal is to create a website that is visually consistent, easy to use, responsive, and aligned with business objectives.',
      },

      {
        q: 'How much does website UI design cost in India?',
        a: 'Website UI design cost in India depends on the number of pages, number of unique layouts, design complexity, responsive requirements, custom components, UX research, and interaction requirements. A small business website generally requires less design work than a SaaS platform, eCommerce website, or enterprise website with complex interfaces.',
      },

      {
        q: 'Why is UI design important for a business website?',
        a: 'Good UI design helps visitors understand information, navigate the website, identify important actions, and interact with the business more easily. A professional interface can also improve perceived credibility, usability, consistency, and the overall customer experience.',
      },

      {
        q: 'Do you provide responsive website UI design?',
        a: 'Yes. Our website UI design process considers desktop, tablet, and mobile layouts so the interface can adapt to different screen sizes and provide a consistent user experience across devices.',
      },

      {
        q: 'Do you provide UI design for website redesign projects?',
        a: 'Yes. We design UI systems for website redesign projects by reviewing the existing website structure, content, user experience, branding, and business objectives before developing the new interface direction.',
      },

      {
        q: 'Do you design UI for SaaS websites and products?',
        a: 'Yes. We design website interfaces for SaaS companies as well as product-oriented interfaces where the project requires structured components, dashboards, user journeys, responsive layouts, and reusable UI systems.',
      },

      {
        q: 'Can website UI design improve conversions?',
        a: 'Yes. UI design can support conversions by creating clearer page hierarchy, stronger calls to action, easier navigation, better forms, focused landing page layouts, and user journeys aligned with the intended business objective.',
      },

      {
        q: 'Do you provide website UI design services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix provides website UI design services for businesses in Mumbai, Pune, and other Indian cities. We work with startups, SMEs, SaaS companies, B2B businesses, professional services, and enterprises.',
      },

      {
        q: 'Do you provide UI design for SEO-friendly websites?',
        a: 'Yes. UI design can be planned alongside SEO requirements so important content remains accessible, page hierarchy is clear, navigation is logical, and the final design can be implemented without unnecessarily compromising search-friendly website structure.',
      },

      {
        q: 'Do you provide developer handoff with website UI design?',
        a: 'Yes. Website UI projects can include structured design specifications and component guidance so developers can implement layouts, responsive behaviour, typography, spacing, and reusable interface elements more consistently.',
      },

      {
        q: 'Should I hire a UI design company or a freelancer for my website?',
        a: 'The right choice depends on project complexity and requirements. A professional UI design company can provide structured design planning, responsive systems, reusable components, UX considerations, developer handoff, and ongoing design support, which can be valuable for businesses building larger or long-term digital platforms.',
      },
    ],
    offer: [50000, 400000],
  },

  '/services/wireframing': {
    name: 'wireframing and prototyping',
    description:
      'VoidMatrix Technology provides wireframing and prototyping services in India for product teams, founders, and businesses that need to see how a digital product will be structured before committing to visual design and development. Based in Mumbai, we create wireframes and interactive prototypes for web applications, mobile apps, SaaS platforms, eCommerce sites, and marketing websites for companies across Mumbai, Pune, Bangalore, and India. Wireframing is the fastest, cheapest way to discover structural and usability problems - when a problem is found at the wireframe stage, it takes an hour to fix. When the same problem is found in development, it costs days. Our wireframing process translates product requirements and user flows into clear page-level blueprints in Figma, identifying information hierarchy problems, navigation gaps, and content organization issues before a single pixel of visual design is applied. The output is a clickable prototype your team can review, test with users, and use to brief development teams unambiguously.',
    faqs: [
      {
        q: 'What is wireframing in UX design?',
        a: 'Wireframing is the process of creating a structural representation of a website, mobile application, SaaS product, or digital platform before detailed UI design. It defines layouts, navigation, content hierarchy, user flows, and the placement of important interface elements.',
      },

      {
        q: 'Why is wireframing important for website development?',
        a: 'Wireframing helps define the structure and user journey of a website before visual design and development begin. It allows teams to identify navigation problems, content hierarchy issues, unnecessary steps, and structural changes earlier in the project.',
      },

      {
        q: 'How much do wireframing services cost in India?',
        a: 'Wireframing cost in India depends on the number of screens or pages, product complexity, number of user journeys, information architecture requirements, user roles, workflow complexity, and level of detail required.',
      },

      {
        q: 'What is the difference between wireframing and UI design?',
        a: 'Wireframing focuses on the structure, layout, navigation, hierarchy, and functionality of a digital experience. UI design focuses on the visual appearance, including typography, colors, spacing, imagery, components, and detailed interaction states.',
      },

      {
        q: 'What is the difference between a wireframe and a prototype?',
        a: 'A wireframe represents the structure of a digital product, while a prototype can simulate interactions and navigation between screens. Wireframes can be used as the foundation for creating interactive prototypes.',
      },

      {
        q: 'Do you provide website wireframing services?',
        a: 'Yes. VoidMatrix provides website wireframing services covering page structure, navigation, content hierarchy, user journeys, calls to action, forms, and other important website elements.',
      },

      {
        q: 'Do you provide mobile app wireframing?',
        a: 'Yes. We create mobile app wireframes covering screens, navigation, onboarding, user journeys, forms, dashboards, account areas, transactions, and other application workflows.',
      },

      {
        q: 'Do you provide SaaS wireframing services?',
        a: 'Yes. VoidMatrix provides SaaS wireframing services for dashboards, workflows, modules, navigation, account areas, forms, tables, onboarding, reporting, and other SaaS product functionality.',
      },

      {
        q: 'Can you create wireframes for an MVP?',
        a: 'Yes. Wireframes can be created for an MVP around the essential screens, user journeys, features, navigation, and workflows required for the initial product launch and validation.',
      },

      {
        q: 'Can you create wireframes for an existing website or app redesign?',
        a: 'Yes. Existing websites and applications can be analyzed and restructured through wireframing to improve navigation, information hierarchy, user journeys, page structures, and important workflows before the redesigned UI is created.',
      },

      {
        q: 'Do you create low-fidelity and high-fidelity wireframes?',
        a: 'Wireframes can be created at different levels of detail depending on the project requirements. Low-fidelity wireframes are useful for establishing structure and flows, while more detailed wireframes can provide additional guidance before final UI design.',
      },

      {
        q: 'Do you provide wireframing services in Mumbai and Pune?',
        a: 'Yes. VoidMatrix provides wireframing services for businesses in Mumbai, Pune, Bangalore, Hyderabad, other Indian cities, and international markets.',
      },

      {
        q: 'Can wireframing be done before UI UX design?',
        a: 'Yes. Wireframing is commonly used before detailed UI design to establish page structure, information hierarchy, navigation, user journeys, and functionality before visual design decisions are finalized.',
      },

      {
        q: 'Do you provide Figma wireframes?',
        a: 'Wireframing projects can be delivered as structured design files and prototypes suitable for review, UI design, and developer handoff according to the project scope.',
      },
    ],
    offer: [30000, 200000],
  },

  '/services/workflow-automation': {
    name: 'workflow automation',
    description:
      'VoidMatrix Technology provides workflow automation services in India for businesses that are still doing manually what software should be doing automatically - losing hours every week to data entry, copy-paste between systems, manual reporting, and status update emails. Based in Mumbai, we design and build workflow automation solutions for SMEs, startups, and enterprises across Mumbai, Pune, Bangalore, and India in retail, logistics, consulting, healthcare, and technology sectors. The arithmetic on automation is usually compelling: if a process takes 10 hours per week at ₹500/hour and automation costs ₹2,00,000, it pays back in 40 weeks - then saves money every week indefinitely. Our automation team uses custom code, API integrations, and no-code/low-code platforms (Zapier, Make, n8n) to connect systems and trigger actions automatically - from lead routing and invoice generation to inventory updates, approval workflows, and customer communication sequences. We map the process, design the automation, build and test it rigorously, and document it so your team understands and can maintain what we build.',
    faqs: [
      {
        q: 'What is workflow automation?',
        a: 'Workflow automation uses software to automate repetitive business processes, approvals, notifications, and data movement based on predefined rules. It reduces manual work, improves operational efficiency, minimizes errors, and helps organizations complete tasks faster while maintaining consistency across departments.',
      },
      {
        q: 'What business processes can be automated?',
        a: 'Almost any repetitive business process can be automated, including approval workflows, employee onboarding, purchase requests, invoice processing, customer onboarding, document management, lead assignment, support ticket routing, inventory updates, procurement, HR operations, and recurring administrative tasks.',
      },
      {
        q: 'How much does workflow automation software cost in India?',
        a: 'The cost depends on the number of workflows, business rules, integrations, users, reporting requirements, and overall platform complexity. After understanding your operational requirements, we provide a detailed project scope with transparent pricing.',
      },
      {
        q: 'Can workflow automation integrate with our existing CRM or ERP?',
        a: 'Yes. We develop workflow automation platforms that integrate seamlessly with CRM systems, ERP software, HR platforms, accounting software, payment gateways, communication tools, and custom business applications using secure APIs.',
      },
      {
        q: 'Is workflow automation suitable for small and medium-sized businesses?',
        a: 'Absolutely. Small and medium-sized businesses often benefit the most because automation reduces administrative overhead, improves employee productivity, and enables teams to scale operations without significantly increasing staffing costs.',
      },
      {
        q: 'Can approval workflows be automated?',
        a: 'Yes. We develop approval workflow systems for finance, HR, procurement, purchase orders, quotations, contracts, reimbursements, leave requests, vendor onboarding, and other business processes that require one or multiple approval levels.',
      },
      {
        q: 'Can you automate paper-based or spreadsheet-driven processes?',
        a: 'Yes. We help organizations digitize manual workflows by replacing paper forms, spreadsheets, emails, and legacy approval processes with secure cloud-based workflow automation software that improves visibility, collaboration, and efficiency.',
      },
      {
        q: 'How long does it take to build workflow automation software?',
        a: 'Project timelines depend on the number of workflows, integrations, users, and business complexity. Smaller automation projects may take a few weeks, while enterprise workflow automation platforms with multiple departments typically require several months of structured development.',
      },
      {
        q: 'Will the workflow automation platform grow with our business?',
        a: 'Yes. Every workflow automation solution we develop is built using scalable architecture that allows additional workflows, departments, integrations, dashboards, users, and business modules to be added as your organization continues to grow.',
      },
      {
        q: 'Why choose VoidMatrix Technology for workflow automation development?',
        a: 'We engineer custom workflow automation software using Next.js, React, Node.js, PostgreSQL, and cloud-native technologies. Every solution is built around your existing business processes with an architecture-first approach that emphasizes scalability, security, performance, maintainability, and long-term business value.',
      },
    ],
    offer: [75000, 500000],
  },
} satisfies Record<string, servicePage>;
