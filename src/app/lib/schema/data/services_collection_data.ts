// ─────────────────────────────────────────────────────────────────────────────
// VMT - serviceData.ts
// Complete service registry + FAQ content for schema markup and service pages
// Local SEO: Mumbai, India, Pune, Bangalore, Delhi, Hyderabad
// ─────────────────────────────────────────────────────────────────────────────

// ─── TYPES ───────────────────────────────────────────────────────────────────

export type ServiceItem = {
  name: string;
  slug: string;
  category: ServiceCategory;
  description: string; // Used in schema ItemList and service cards
};

export type FAQItem = {
  q: string;
  a: string;
};

export type ServiceCategory =
  | 'software-development'
  | 'web-app-development'
  | 'platform-cloud'
  | 'seo-services'
  | 'digital-marketing'
  | 'content-marketing'
  | 'social-media'
  | 'ui-ux-design'
  | 'consulting'
  | 'optimization'
  | 'support-maintenance';

// ─── CORE SERVICES DATA ───────────────────────────────────────────────────────
// Full registry of all VMT services - used in:
//   • Schema.org ItemList markup on /services
//   • Pillar page service grids
//   • Sitemap generation
//   • Mega-menu navigation
// ─────────────────────────────────────────────────────────────────────────────

export const coreServicesData: ServiceItem[] = [
  // ── SOFTWARE DEVELOPMENT ──────────────────────────────────────────────────
  {
    name: 'Custom Software Development',
    slug: 'custom-software-development',
    category: 'software-development',
    description:
      'Architecture-first custom software development for startups, SMEs, and enterprises across Mumbai and India. Built to scale, engineered for performance.',
  },
  {
    name: 'SaaS Development',
    slug: 'saas-development',
    category: 'software-development',
    description:
      'End-to-end SaaS product development including architecture design, multi-tenancy, billing integrations, and scalable infrastructure for Indian and global markets.',
  },
  {
    name: 'Enterprise Software Development',
    slug: 'enterprise-software-development',
    category: 'software-development',
    description:
      'Large-scale enterprise software solutions for organisations across India - built for security, compliance, and long-term operational reliability.',
  },
  {
    name: 'CRM & ERP Development',
    slug: 'crm-erp-design',
    category: 'software-development',
    description:
      'Custom CRM and ERP systems designed around your business operations - replacing generic tools with software that fits how your business actually works.',
  },
  {
    name: 'Workflow Automation',
    slug: 'workflow-automation',
    category: 'software-development',
    description:
      'Business process automation for SMEs and enterprises across Mumbai and India - eliminating manual workflows and reducing operational overhead through intelligent automation.',
  },
  {
    name: 'Product Engineering',
    slug: 'product-engineering',
    category: 'software-development',
    description:
      'Full product lifecycle engineering from concept and architecture to launch and post-launch iteration - for startups and product-led businesses in India.',
  },

  // ── WEB & APP DEVELOPMENT ─────────────────────────────────────────────────
  {
    name: 'Professional Website Development',
    slug: 'website-development',
    category: 'web-app-development',
    description:
      'Fast, SEO-friendly professional websites built on Next.js for businesses across Mumbai, Pune, Bangalore, and India. 90+ Lighthouse scores. Built to rank and convert.',
  },
  {
    name: 'Web Application Development',
    slug: 'web-application-development',
    category: 'web-app-development',
    description:
      'Complex web application development for Indian businesses - dashboards, portals, SaaS interfaces, and data-heavy applications built on modern React and Next.js.',
  },
  {
    name: 'Mobile Application Development',
    slug: 'mobile-application-development',
    category: 'web-app-development',
    description:
      'iOS and Android mobile application development for startups and businesses across Mumbai and India - native performance, modern UI, and scalable backend integration.',
  },
  {
    name: 'eCommerce Development',
    slug: 'ecommerce-development',
    category: 'web-app-development',
    description:
      'High-performance eCommerce stores built on Next.js with UPI, Razorpay, and payment gateway integrations for Indian businesses - faster than Shopify, fully customisable.',
  },
  {
    name: 'Marketplace Development',
    slug: 'marketplace-development',
    category: 'web-app-development',
    description:
      'Multi-vendor marketplace development for Indian businesses - buyer and seller portals, payment splits, product management, and scalable catalogue architecture.',
  },
  {
    name: 'CMS Development',
    slug: 'cms-development',
    category: 'web-app-development',
    description:
      'Headless CMS development and custom content management systems for businesses across India - flexible, fast, and built for non-technical content teams.',
  },

  // ── PLATFORM & CLOUD ──────────────────────────────────────────────────────
  {
    name: 'Platform Engineering',
    slug: 'platform-engineering',
    category: 'platform-cloud',
    description:
      'Scalable platform architecture design and engineering for product companies and enterprises in India - built for reliability, performance, and long-term growth without technical debt.',
  },
  {
    name: 'Cloud & DevOps',
    slug: 'cloud-devops', // matches screenshot folder name
    category: 'platform-cloud',
    description:
      'Cloud infrastructure design on AWS and GCP combined with DevOps implementation for businesses across Mumbai and India - CI/CD pipelines, containerisation, infrastructure automation, and deployment optimisation.',
  },
  {
    name: 'CI/CD Pipelines',
    slug: 'cicd-pipelines',
    category: 'platform-cloud',
    description:
      'Continuous integration and continuous deployment pipeline setup for development teams across India - faster deployments, fewer errors, and reliable release cycles.',
  },
  {
    name: 'API Development',
    slug: 'api-integration',
    category: 'platform-cloud',
    description:
      'RESTful and GraphQL API development for businesses in Mumbai and India - well-documented, secure, versioned APIs built for long-term maintainability and third-party integration.',
  },
  {
    name: 'Payment Gateway Integration',
    slug: 'payment-integration',
    category: 'platform-cloud',
    description:
      'Payment gateway integration for Indian businesses - Razorpay, PayU, Cashfree, Stripe, and UPI integrations with secure transaction handling and reconciliation support.',
  },
  {
    name: 'WhatsApp Business Integration',
    slug: 'third-party-integration',
    category: 'platform-cloud',
    description:
      'WhatsApp Business API integration for Indian businesses - automated notifications, order updates, customer communication, and CRM sync via WhatsApp.',
  },
  {
    name: 'Infrastructure Automation',
    slug: 'infrastructure-automation',
    category: 'platform-cloud',
    description:
      'Infrastructure as code and automation for businesses across India - Terraform, Ansible, and cloud-native tooling that eliminates manual infrastructure management.',
  },
  {
    name: 'Performance Monitoring',
    slug: 'performance-monitoring',
    category: 'platform-cloud',
    description:
      'Application and infrastructure performance monitoring for businesses in Mumbai and India - real-time alerting, uptime tracking, and performance baseline management.',
  },

  // ── SEO SERVICES ──────────────────────────────────────────────────────────
  {
    name: 'SEO Services',
    slug: 'seo-services', // matches screenshot folder name
    category: 'seo-services',
    description:
      'Comprehensive SEO services for businesses across Mumbai and India - technical SEO, on-page SEO, local SEO, enterprise SEO, and SEO audits that grow organic traffic and generate consistent leads.',
  },
  {
    name: 'Technical SEO',
    slug: 'technical-seo',
    category: 'seo-services',
    description:
      'Technical SEO audits and implementation for businesses across Mumbai and India - crawl optimisation, indexing fixes, structured data, Core Web Vitals, and site architecture improvements.',
  },
  {
    name: 'On-Page SEO',
    slug: 'on-page-seo',
    category: 'seo-services',
    description:
      'On-page SEO optimisation for Indian businesses - keyword targeting, meta optimisation, content structure, internal linking, and semantic HTML improvements that improve Google rankings.',
  },
  {
    name: 'Local SEO',
    slug: 'local-seo',
    category: 'seo-services',
    description:
      'Local SEO services for businesses in Mumbai, Pune, Bangalore, Delhi, Hyderabad, and cities across India - Google Business Profile optimisation, local citations, and local pack rankings.',
  },
  {
    name: 'Enterprise SEO',
    slug: 'enterprise-seo',
    category: 'seo-services',
    description:
      'Enterprise-scale SEO for large organisations and eCommerce platforms in India - crawl budget management, programmatic SEO, international SEO, and large-scale content strategy.',
  },
  {
    name: 'SEO Audit',
    slug: 'seo-audit',
    category: 'seo-services',
    description:
      'Comprehensive SEO audits for websites across Mumbai and India - identifying technical issues, keyword gaps, content weaknesses, and competitor gaps with a prioritised fix roadmap.',
  },
  {
    name: 'SEO Consulting',
    slug: 'seo-consulting',
    category: 'seo-services',
    description:
      'SEO consulting for businesses and in-house teams across India - strategy advisory, keyword research, competitor analysis, and ongoing guidance from experienced SEO specialists.',
  },
  {
    name: 'Website Speed Optimisation',
    slug: 'website-speed-optimization',
    category: 'seo-services',
    description:
      'Website speed and Core Web Vitals optimisation for Indian businesses - LCP, FID, CLS improvements, image optimisation, and performance engineering targeting 90+ Lighthouse scores.',
  },

  // ── CONTENT MARKETING ─────────────────────────────────────────────────────
  {
    name: 'SEO Blog Writing',
    slug: 'seo-blog-writing',
    category: 'content-marketing',
    description:
      'SEO-optimised blog content for businesses across India - keyword-targeted, search-intent-driven articles that rank on Google and build topical authority in your industry.',
  },
  {
    name: 'Website Copywriting',
    slug: 'website-copywriting',
    category: 'content-marketing',
    description:
      'Conversion-focused website copy for Indian businesses - homepage, about, service pages, and landing pages written to rank for local keywords and convert Mumbai and India-based visitors.',
  },
  {
    name: 'Landing Page Copywriting',
    slug: 'landing-pages',
    category: 'content-marketing',
    description:
      'High-converting landing page copy for Indian businesses running Google Ads, Meta Ads, or organic campaigns - written to reduce bounce rates and maximise lead conversion.',
  },
  {
    name: 'Case Studies',
    slug: 'case-studies',
    category: 'content-marketing',
    description:
      'Professional case study writing for technology and service businesses in India - structured to build credibility, demonstrate measurable outcomes, and support sales conversations.',
  },
  {
    name: 'Content Strategy',
    slug: 'content-strategy',
    category: 'content-marketing',
    description:
      'Full content strategy for businesses across Mumbai and India - keyword research, content calendar planning, topic clustering, and editorial frameworks that grow organic traffic.',
  },

  // ── DIGITAL MARKETING ─────────────────────────────────────────────────────
  {
    name: 'Google Ads Management',
    slug: 'google-ads',
    category: 'digital-marketing',
    description:
      'Google Ads campaign management for businesses across Mumbai and India - search, display, and Performance Max campaigns optimised for cost per lead and return on ad spend.',
  },
  {
    name: 'Meta Ads Management',
    slug: 'meta-ads',
    category: 'digital-marketing',
    description:
      'Facebook and Instagram Ads management for Indian businesses - audience targeting, creative strategy, funnel optimisation, and lead generation campaigns across India.',
  },
  {
    name: 'Lead Generation',
    slug: 'lead-generation',
    category: 'digital-marketing',
    description:
      'End-to-end lead generation for B2B and B2C businesses across Mumbai and India - combining paid ads, landing pages, lead magnets, and CRM integration to build a consistent pipeline.',
  },
  {
    name: 'Email Marketing',
    slug: 'email-marketing',
    category: 'digital-marketing',
    description:
      'Email marketing strategy and execution for Indian businesses - list building, segmentation, automation sequences, and campaign management that nurtures leads and drives repeat revenue.',
  },
  {
    name: 'Marketing Automation',
    slug: 'marketing-automation',
    category: 'digital-marketing',
    description:
      'Marketing automation setup for businesses across India - CRM integration, lead scoring, automated email sequences, and multi-channel nurture workflows that convert leads without manual effort.',
  },

  // ── SOCIAL MEDIA ──────────────────────────────────────────────────────────
  {
    name: 'Social Media Management',
    slug: 'social-media-management',
    category: 'social-media',
    description:
      'Full-service social media management for businesses across Mumbai and India - content creation, scheduling, community management, and performance reporting across LinkedIn and Instagram.',
  },
  {
    name: 'LinkedIn Management',
    slug: 'linkedin-management',
    category: 'social-media',
    description:
      'LinkedIn page and personal profile management for Indian businesses and founders - thought leadership content, audience growth, and B2B lead generation through organic LinkedIn strategy.',
  },
  {
    name: 'Instagram Management',
    slug: 'instagram-management',
    category: 'social-media',
    description:
      'Instagram management for brands across Mumbai and India - content calendars, visual storytelling, reels strategy, community engagement, and follower growth.',
  },
  {
    name: 'Personal Branding',
    slug: 'personal-branding',
    category: 'social-media',
    description:
      'Personal branding strategy and content for founders and executives across India - LinkedIn presence building, thought leadership positioning, and consistent content that builds authority.',
  },

  // ── UI/UX DESIGN ──────────────────────────────────────────────────────────
  {
    name: 'Website UI Design',
    slug: 'website-ui-design',
    category: 'ui-ux-design',
    description:
      'Professional website UI design for businesses across Mumbai and India - modern, conversion-optimised interfaces built on design systems that translate directly to clean, fast front-end code.',
  },
  {
    name: 'SaaS UI Design',
    slug: 'saas-ui-design',
    category: 'ui-ux-design',
    description:
      'SaaS product UI design for Indian startups and product companies - dashboard design, onboarding flows, component libraries, and design systems built for complex web applications.',
  },
  {
    name: 'Mobile App UI Design',
    slug: 'mobile-ui-design',
    category: 'ui-ux-design',
    description:
      'iOS and Android mobile app UI design for businesses across India - intuitive interfaces, platform-native design patterns, and high-fidelity prototypes ready for developer handoff.',
  },
  {
    name: 'Wireframing & Prototyping',
    slug: 'wireframing',
    category: 'ui-ux-design',
    description:
      'Rapid wireframing and interactive prototyping for startups and product teams in Mumbai and India - validating user flows and product architecture before development begins.',
  },
  {
    name: 'UX Research',
    slug: 'ux-research',
    category: 'ui-ux-design',
    description:
      'User experience research for digital products across India - user interviews, usability testing, heatmap analysis, and data-informed design recommendations that reduce churn and improve retention.',
  },
  {
    name: 'Conversion Rate Optimisation',
    slug: 'conversion-rate-optimization',
    category: 'optimization',
    description:
      'CRO design and testing for Indian businesses - A/B testing, landing page optimisation, funnel analysis, and UX improvements that increase the percentage of visitors who become leads or customers.',
  },

  // ── CONSULTING ────────────────────────────────────────────────────────────
  {
    name: 'Consulting & Strategy',
    slug: 'consulting-and-strategy', // matches screenshot folder name
    category: 'consulting',
    description:
      'Technology and business consulting for startups, SMEs, and enterprises across Mumbai and India - product strategy, technology roadmaps, startup consulting, and growth advisory under one engagement.',
  },
  {
    name: 'Startup Consulting',
    slug: 'startup-consulting',
    category: 'consulting',
    description:
      'Technology and product consulting for startups across Mumbai and India - tech stack decisions, MVP scoping, build vs buy analysis, and growth strategy for early-stage founders.',
  },
  {
    name: 'Software Consulting',
    slug: 'software-consulting',
    category: 'consulting',
    description:
      'Software architecture and technology consulting for businesses in India - system design reviews, legacy modernisation roadmaps, and technical advisory for CTOs and engineering leads.',
  },
  {
    name: 'Product Strategy',
    slug: 'product-strategy',
    category: 'consulting',
    description:
      'Product strategy and roadmap development for startups and product-led companies across India - feature prioritisation, market positioning, and go-to-market planning grounded in user research.',
  },
  {
    name: 'Technology Roadmaps',
    slug: 'technology-roadmaps',
    category: 'consulting',
    description:
      'Multi-year technology roadmap planning for businesses across Mumbai and India - aligning your technical investments with business milestones, growth targets, and competitive requirements.',
  },
  {
    name: 'Technical Advisory',
    slug: 'technical-advisory',
    category: 'consulting',
    description:
      'Fractional CTO and technical advisory services for Indian startups and SMEs - ongoing guidance on architecture decisions, vendor selection, team structure, and technology strategy.',
  },
  {
    name: 'Growth Consulting',
    slug: 'growth-consulting',
    category: 'consulting',
    description:
      'Growth strategy consulting for businesses across India - combining SEO, digital marketing, product optimisation, and automation to build a compounding, scalable growth engine.',
  },

  // ── SUPPORT & MAINTENANCE ─────────────────────────────────────────────────
  {
    name: 'Website Maintenance',
    slug: 'website-maintenance',
    category: 'support-maintenance',
    description:
      'Ongoing website maintenance services for businesses across Mumbai and India - updates, security patches, performance monitoring, and content changes on a managed retainer.',
  },
  {
    name: 'Software Maintenance',
    slug: 'software-maintenance',
    category: 'support-maintenance',
    description:
      'Post-launch software maintenance and support for custom applications across India - bug fixes, dependency updates, security monitoring, and iterative feature development.',
  },
  {
    name: 'Application Monitoring',
    slug: 'application-monitoring',
    category: 'support-maintenance',
    description:
      'Real-time application monitoring and alerting for production systems across India - uptime tracking, error logging, performance baselines, and incident response.',
  },
  {
    name: 'Security Monitoring',
    slug: 'security-monitoring',
    category: 'support-maintenance',
    description:
      'Continuous security monitoring for web applications and infrastructure across Mumbai and India - vulnerability scanning, threat detection, and compliance-aligned security practices.',
  },
  {
    name: 'Managed Services',
    slug: 'managed-services',
    category: 'support-maintenance',
    description:
      'Fully managed technology services for Indian businesses - infrastructure management, application support, and proactive maintenance so your team can focus on the business.',
  },
];

// ─── HELPER: get services by category ────────────────────────────────────────

export function getServicesByCategory(category: ServiceCategory): ServiceItem[] {
  return coreServicesData.filter((s) => s.category === category);
}

// ─── HELPER: get all slugs (for sitemap / static params) ─────────────────────

export function getAllServiceSlugs(): string[] {
  return coreServicesData.map((s) => s.slug);
}

// ─── SERVICE COLLECTION PAGE FAQs ────────────────────────────────────────────
// 20 FAQs covering all service pillars + local Mumbai/India signals
// Used in:
//   • FAQPage schema on /services
//   • Accordion FAQ component on services hub
//   • Individual pillar pages (filter by category)
// ─────────────────────────────────────────────────────────────────────────────

export const serviceCollectionFAQs: FAQItem[] = [
  // ── GENERAL / TRUST ───────────────────────────────────────────────────────
  {
    q: 'What services does Void Matrix Technology offer?',
    a: 'Void Matrix Technology is a full-service technology and digital growth company based in Mumbai, India. We offer custom software development, SaaS development, enterprise software, web development, mobile app development, eCommerce development, platform engineering, cloud and DevOps services, API development, technical SEO, on-page SEO, local SEO, content marketing, Google Ads, Meta Ads, social media management, UI/UX design, and business consulting - all under one roof.',
  },
  {
    q: 'How much do your services cost in India?',
    a: 'Project pricing at VMT starts from ₹75,000 for professional website development and scales based on scope, complexity, and timeline. Custom software and SaaS development typically ranges from ₹3,00,000 to ₹25,00,000+ depending on architecture requirements. SEO and digital marketing retainers start from ₹15,000 per month. We provide a detailed written estimate before any commitment - no hidden charges.',
  },
  {
    q: 'Are you based in Mumbai? Do you work with clients across India?',
    a: 'Yes - VMT is headquartered in Mumbai, Maharashtra. We work with clients across all major Indian cities including Pune, Delhi NCR, Bangalore, Hyderabad, Chennai, Ahmedabad, Kolkata, and Surat, as well as international clients in the UAE, UK, USA, and Southeast Asia. All projects can be managed entirely remotely with regular video calls and transparent project management.',
  },
  {
    q: 'Do you sign an NDA before starting a project?',
    a: 'Yes. Every VMT engagement begins with a signed Non-Disclosure Agreement before any project details are shared. Your product ideas, business logic, technical architecture, and competitive strategy are protected from day one. NDA-protected engagements are standard practice at VMT, not an optional add-on.',
  },
  {
    q: 'What makes VMT different from other IT companies in Mumbai?',
    a: 'Three things set VMT apart from most IT companies in Mumbai and India. First, we build on modern technology - Next.js, not WordPress or Shopify - which means every product we deliver is faster, more SEO-friendly, and more scalable by default. Second, we are architecture-first - every system is designed before a line of code is written. Third, we are a full-stack partner - development, SEO, design, and marketing under one team, eliminating the coordination overhead of working with multiple agencies.',
  },

  // ── SOFTWARE DEVELOPMENT ──────────────────────────────────────────────────
  {
    q: 'How much does custom software development cost in India?',
    a: 'Custom software development in India typically ranges from ₹3,00,000 for smaller systems to ₹25,00,000+ for complex enterprise platforms. The cost depends on the number of user roles, integrations required, scalability architecture, and post-launch support scope. VMT provides a structured estimate after a free consultation - so you know exactly what you are investing before committing.',
  },
  {
    q: 'How long does a software development project take?',
    a: 'Timelines depend on complexity. A professional website takes 3–6 weeks. A web application or MVP typically takes 8–16 weeks. A full SaaS platform or enterprise software system is usually delivered in structured phases over 4–9 months. VMT provides a detailed project timeline with milestones and delivery dates before development begins.',
  },
  {
    q: 'Can you build a SaaS product for an Indian startup?',
    a: "Yes. SaaS development is one of VMT's core services. We have built SaaS platforms for startups across Mumbai and India - handling architecture design, multi-tenancy, subscription billing via Razorpay and Stripe, user management, and scalable backend infrastructure. We can take your SaaS product from idea to launch, or join an existing project mid-development.",
  },

  // ── WEB & APP DEVELOPMENT ─────────────────────────────────────────────────
  {
    q: 'Why do you build websites on Next.js instead of WordPress?',
    a: 'WordPress sites typically score 40–60 on Google Lighthouse due to plugin overhead, theme bloat, and PHP rendering limitations. VMT builds on Next.js, which delivers server-side rendering, static generation, and optimised asset loading - resulting in 90+ Lighthouse scores, sub-2-second load times, and a technical SEO foundation that is ready to rank from launch day. For Indian businesses competing for Google rankings, this performance difference directly impacts organic traffic and lead generation.',
  },
  {
    q: 'Do you develop mobile apps for Android and iOS in India?',
    a: 'Yes. VMT builds native and cross-platform mobile applications for Android and iOS for businesses across Mumbai and India. We develop using React Native for cross-platform projects and can deliver native iOS (Swift) and Android (Kotlin) applications for performance-critical use cases. All mobile apps include UPI and Indian payment gateway integration on request.',
  },
  {
    q: 'Can you build an eCommerce website for an Indian business?',
    a: 'Yes. VMT builds custom eCommerce stores on Next.js with full Indian payment gateway support - Razorpay, PayU, Cashfree, and UPI. Unlike Shopify, our eCommerce builds are fully customisable, significantly faster, and built for SEO from the ground up. Pricing for eCommerce development starts from ₹1,50,000 depending on catalogue size, integrations, and feature requirements.',
  },

  // ── SEO & PERFORMANCE ─────────────────────────────────────────────────────
  {
    q: 'What SEO services does VMT offer in Mumbai and India?',
    a: 'VMT offers technical SEO, on-page SEO, local SEO, enterprise SEO, SEO audits, website speed optimisation, Core Web Vitals optimisation, and SEO consulting. We work with businesses across Mumbai, Pune, Bangalore, Delhi, Hyderabad, and other Indian cities to improve Google rankings and grow organic lead generation. SEO retainers start from ₹15,000 per month.',
  },
  {
    q: 'What is technical SEO and why does it matter for Indian businesses?',
    a: "Technical SEO is the process of optimising the structural, speed, and crawlability aspects of your website so Google can index and rank it effectively. For Indian businesses, most websites have significant technical SEO issues - slow load times, improper canonicalisation, missing structured data, crawl errors, and poor Core Web Vitals scores - that actively prevent them from ranking regardless of how good their content is. VMT's technical SEO service identifies and fixes these issues systematically.",
  },
  {
    q: 'How long does SEO take to show results?',
    a: 'SEO is a compounding investment, not an instant channel. For most Indian businesses, technical fixes and on-page optimisation begin improving crawl health within 4–6 weeks. Keyword ranking improvements typically appear within 2–4 months. Significant organic traffic and lead growth usually becomes visible within 4–8 months, depending on competition and starting domain authority. VMT provides monthly SEO reports so you can track progress at every stage.',
  },

  // ── DIGITAL MARKETING ─────────────────────────────────────────────────────
  {
    q: 'Do you run Google Ads and Meta Ads campaigns in India?',
    a: 'Yes. VMT manages Google Ads (Search, Display, Performance Max) and Meta Ads (Facebook and Instagram) campaigns for businesses across Mumbai and India. Every campaign is structured around your cost-per-lead and return on ad spend targets - not impressions or reach. We handle audience research, ad creative, campaign setup, ongoing optimisation, and monthly performance reporting.',
  },
  {
    q: 'Can VMT handle both website development and SEO together?',
    a: "Yes - and this combination is one of VMT's strongest advantages. When the same team builds your website and runs your SEO, the technical foundation is SEO-ready from day one. There is no remediation gap between what your developer built and what your SEO team needs. We build websites with proper schema markup, canonical tags, sitemap structure, page speed optimisation, and keyword-targeted content architecture included as standard.",
  },

  // ── PLATFORM & CLOUD ──────────────────────────────────────────────────────
  {
    q: 'What is platform engineering and who needs it?',
    a: "Platform engineering is the discipline of designing and building the underlying systems, infrastructure, and developer tooling that support a software product's long-term scalability, reliability, and operational efficiency. Businesses in India that need platform engineering include SaaS companies approaching scale, enterprises running multiple internal applications, and product-led startups that are outgrowing their initial infrastructure. VMT's platform engineering work includes system architecture design, cloud infrastructure, CI/CD automation, and internal developer tooling.",
  },
  {
    q: 'Do you offer DevOps services for companies in Mumbai?',
    a: 'Yes. VMT provides DevOps consulting and implementation for businesses across Mumbai and India - including CI/CD pipeline setup, Docker and Kubernetes containerisation, AWS and GCP infrastructure management, infrastructure as code with Terraform, and ongoing deployment optimisation. Our DevOps work reduces deployment time, eliminates manual infrastructure tasks, and improves system reliability for development teams.',
  },

  // ── UI/UX & CONSULTING ────────────────────────────────────────────────────
  {
    q: 'Do you offer UI/UX design services for startups in India?',
    a: 'Yes. VMT offers website UI design, SaaS product UI design, mobile app UI design, wireframing, prototyping, and UX research for startups and businesses across Mumbai and India. Our design process is grounded in user research and conversion data - not aesthetic preference alone. Every design we produce is optimised for the specific business goal of the product, whether that is lead generation, user activation, or customer retention.',
  },
  {
    q: 'Can VMT act as a long-term technology partner for our business?',
    a: 'Yes - and this is how most of our best client relationships work. VMT offers long-term technology partnership covering ongoing software development, product iterations, SEO and content retainers, digital marketing management, application monitoring, security updates, and strategic consulting. Whether you are a startup that needs a technical co-founder equivalent or an SME that needs a full external tech team, VMT can structure an engagement that fits your stage and budget.',
  },
];

// ─── CATEGORY METADATA ────────────────────────────────────────────────────────
// Used for pillar page headings, descriptions, and schema breadcrumbs

export const serviceCategoryMeta: Record<
  ServiceCategory,
  { label: string; description: string; slug: string }
> = {
  'software-development': {
    label: 'Software Development',
    slug: 'software-development',
    description:
      'Custom software, SaaS platforms, enterprise systems, CRM/ERP, and workflow automation for businesses across Mumbai and India.',
  },
  'web-app-development': {
    label: 'Web & App Development',
    slug: 'web-app-development',
    description:
      'Professional websites, web applications, mobile apps, and eCommerce stores built on Next.js for Indian businesses.',
  },
  'platform-cloud': {
    label: 'Platform & Cloud Engineering',
    slug: 'platform-cloud',
    description:
      'DevOps, cloud infrastructure, platform engineering, API development, and third-party integrations for businesses in India.',
  },
  'seo-services': {
    label: 'SEO Services',
    slug: 'seo-services',
    description:
      'Technical SEO, on-page SEO, local SEO, enterprise SEO, and SEO audits for businesses across Mumbai, Pune, Bangalore, and India.',
  },
  'content-marketing': {
    label: 'Content Marketing',
    slug: 'content-marketing',
    description:
      'SEO blog writing, website copywriting, landing page content, and content strategy for Indian businesses.',
  },
  'digital-marketing': {
    label: 'Digital Marketing',
    slug: 'digital-marketing',
    description:
      'Google Ads, Meta Ads, lead generation, email marketing, and marketing automation for businesses across India.',
  },
  'social-media': {
    label: 'Social Media Management',
    slug: 'social-media',
    description:
      'LinkedIn, Instagram, and social media management, content calendars, and personal branding for Mumbai and India-based businesses.',
  },
  'ui-ux-design': {
    label: 'UI/UX Design',
    slug: 'ui-ux-design',
    description:
      'Website UI, SaaS design, mobile app UI, wireframing, UX research, and CRO design for startups and businesses in India.',
  },
  consulting: {
    label: 'Consulting & Strategy',
    slug: 'consulting',
    description:
      'Startup consulting, product strategy, technology roadmaps, and technical advisory for businesses across Mumbai and India.',
  },
  optimization: {
    label: 'Optimisation',
    slug: 'optimization',
    description:
      'Conversion rate optimisation, A/B testing, and performance improvements for websites and digital products in India.',
  },
  'support-maintenance': {
    label: 'Support & Maintenance',
    slug: 'support-maintenance',
    description:
      'Website maintenance, software maintenance, application monitoring, and managed services for businesses in Mumbai and India.',
  },
};
