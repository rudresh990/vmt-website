import { Metadata } from 'next';
import Hero from '@/components/sections/common/Hero';
import WhaIsService from '@/components/services/WhatIsService';
import ServiceCoreSection from '@/components/services/ServiceCoreSection';
import { serviceData } from '@/app/lib/schema/data/services_data';
import { buildMetadata } from '@/app/lib/schema/seo';
import ServiceCost from '@/components/services/ServiceCost';
import ServiceFactors from '@/components/services/ServiceFactors';
import ServiceComp from '@/components/services/ServiceComp';
import CtaButtonRe from '@/components/ui/CtaButtonRe';
import ServiceApproachSection from '@/components/services/ServiceApproachSection';
import ServiceFitSection from '@/components/services/ServiceFitSection';
import MainServiceCTA from '@/components/services/MainServiceCTA';
import MainServiceFAQ from '@/components/services/MainServiceFAQ';

export const metadata: Metadata = buildMetadata({
  title: 'Payment Integration Services Company in Mumbai & India',

  description:
    'Secure payment integration services for websites, apps, SaaS platforms, and marketplaces with UPI, cards, wallets, subscriptions, and automated payment workflows.',

  path: '/services/payment-integration',
});

const s_data = serviceData['/services/payment-integration'];

const contents = [
  {
    id: 'payment1',

    para: 'Payment integration connects digital platforms with payment providers to enable secure and seamless online transactions. Businesses use payment integrations to accept payments through UPI, credit cards, debit cards, wallets, net banking, and international payment methods.',
  },

  {
    id: 'payment2',

    para: 'Modern payment systems require more than a checkout page. Businesses need reliable transaction processing, automated payment confirmations, refund management, recurring billing, fraud protection, reporting, and secure API communication between applications and payment providers.',
  },

  {
    id: 'payment3',

    para: 'At Void Matrix Technology, we build secure payment integration solutions for eCommerce platforms, SaaS products, marketplaces, mobile applications, and enterprise software systems. Our payment architectures are designed for reliability, scalability, and better customer experiences.',
  },

  {
    id: 'payment4',

    para: 'We integrate leading payment platforms including Razorpay, Stripe, PayPal, Cashfree, PayU, and custom banking solutions while following secure development practices for transaction handling and sensitive payment data.',
  },

  {
    id: 'payment5',

    para: 'Businesses across Mumbai, Pune, India, and global markets use our payment integration services to simplify online transactions, automate financial workflows, and build digital products that are ready to scale.',
  },
];

export default function PaymentIntegrationPage() {
  return (
    <>
      <Hero
        eyebrow="Payment Integration Company in Mumbai, India"
        title={
          <>
            Secure <span className="text-(--primary)">Payment Integration</span>
            Solutions For <span className="text-(--primary)">Digital Businesses</span>
          </>
        }
        herosub={
          <>
            <div className="my-2.5">
              <p>
                <span className="text-white">
                  Accept payments securely across websites, apps, and digital platforms.
                </span>
                <br />
                VMT develops payment integration solutions for businesses across Mumbai, India, and
                global markets. We integrate payment gateways, UPI, subscriptions, wallets, cards,
                and automated transaction workflows using secure APIs and scalable architecture.
              </p>
            </div>
          </>
        }
        subtitle={
          <>
            <div className="flex flex-wrap w-full text-sm gap-4 justify-center items-center">
              <span>
                Projects from <span className="text-(--primary)">₹50,000</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Secure <span className="text-(--primary)">Transactions</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                UPI & Gateway <span className="text-(--primary)">Integration</span>
              </span>

              <span className="text-glow">|</span>

              <span>
                Long-term <span className="text-(--primary)">Support</span>
              </span>
            </div>
          </>
        }
      />

      <WhaIsService heading="What is Payment Integration?" contents={contents} />

      <ServiceCoreSection
        heading="Our Payment Integration Services"
        intro="We build secure and scalable payment solutions that help businesses accept, process, and manage digital transactions efficiently. From simple payment gateway integration to complex marketplace payment systems, our solutions are designed for reliability, security, automation, and seamless user experiences."
        items={[
          {
            item_link: 'gateway',

            title: 'Payment Gateway Integration',

            description:
              'Integrate secure payment gateways for websites, applications, and digital platforms.',
          },

          {
            item_link: 'upi',

            title: 'UPI Payment Integration',

            description: 'Enable fast and secure UPI transactions for modern Indian businesses.',
          },

          {
            item_link: 'subscription',

            title: 'Subscription Billing Systems',

            description:
              'Build recurring payment systems for SaaS and subscription-based businesses.',
          },
        ]}
        details={[
          {
            item_link_id: 'gateway',

            heading: 'Payment Gateway Integration',

            descriptions: [
              {
                para: 'Payment gateways act as the connection between your application, customers, and financial institutions. We integrate secure payment gateways into websites, mobile applications, SaaS platforms, and enterprise systems to enable smooth and reliable transactions.',
              },

              {
                para: 'Our payment gateway integration services include checkout implementation, transaction processing, payment verification, refund workflows, webhook handling, payment status tracking, and secure API communication.',
              },

              {
                para: 'We work with popular payment platforms including Razorpay, Stripe, PayPal, Cashfree, PayU, and custom banking APIs based on business requirements and target markets.',
              },
            ],
          },

          {
            item_link_id: 'upi',

            heading: 'UPI Payment Integration',

            descriptions: [
              {
                para: 'UPI has become one of the most widely used digital payment methods in India. We help businesses integrate UPI payment solutions that provide fast, convenient, and secure payment experiences for customers.',
              },

              {
                para: 'Our UPI integrations support payment collection, transaction verification, automated status updates, QR-based payments, and integration with existing business applications.',
              },

              {
                para: 'Whether you are building an eCommerce platform, SaaS application, marketplace, or customer portal, we create reliable UPI payment flows optimized for Indian users.',
              },
            ],
          },

          {
            item_link_id: 'subscription',

            heading: 'Subscription Billing Systems',

            descriptions: [
              {
                para: 'Subscription-based businesses require automated recurring payment systems to manage customer plans, billing cycles, renewals, invoices, and payment failures efficiently.',
              },

              {
                para: 'We develop subscription billing solutions for SaaS platforms, membership websites, digital products, and service-based businesses with features such as recurring charges, plan management, automated invoices, and subscription lifecycle handling.',
              },

              {
                para: 'Our payment architectures help businesses create predictable revenue models while providing customers with simple and secure subscription experiences.',
              },
            ],
          },

          {
            item_link_id: 'marketplace',

            heading: 'Marketplace Split Payment Integration',

            descriptions: [
              {
                para: 'Multi-vendor marketplaces require advanced payment workflows to collect customer payments, distribute seller earnings, calculate commissions, and manage settlements automatically.',
              },

              {
                para: 'We build marketplace payment systems with seller payouts, commission management, payment splitting, refund handling, transaction tracking, and vendor settlement workflows.',
              },

              {
                para: 'These solutions are suitable for marketplaces, booking platforms, service platforms, and multi-vendor eCommerce businesses that require automated financial operations.',
              },
            ],
          },

          {
            item_link_id: 'international',

            heading: 'International Payment Integration',

            descriptions: [
              {
                para: 'Businesses serving global customers need payment systems that support multiple currencies, international cards, regional payment methods, and secure cross-border transactions.',
              },

              {
                para: 'We integrate international payment providers and design payment workflows that support global SaaS products, eCommerce businesses, digital services, and enterprise applications.',
              },

              {
                para: 'Our solutions help businesses accept payments from customers worldwide while maintaining secure and reliable transaction processing.',
              },
            ],
          },

          {
            item_link_id: 'api',

            heading: 'Payment API Development & Integration',

            descriptions: [
              {
                para: 'Custom payment requirements often require direct API integrations between applications, payment providers, banking systems, and internal business platforms.',
              },

              {
                para: 'We develop secure payment APIs, webhook systems, transaction management modules, reconciliation workflows, and custom financial integrations based on business requirements.',
              },

              {
                para: 'API-driven payment architecture provides better flexibility, automation, and control over complex payment operations.',
              },
            ],
          },
        ]}
      />
      <ServiceCost
        heading="Payment Integration Cost in India"
        costdesc={[
          {
            para: 'The cost of payment integration depends on the complexity of your application, selected payment providers, transaction workflows, security requirements, business logic, and the level of customization required. A basic payment gateway integration has different requirements compared to a complete marketplace payment system or subscription billing platform.',
          },

          {
            para: 'Payment development costs may include gateway integration, API development, transaction management, webhook handling, refund workflows, subscription logic, payment security, reporting dashboards, reconciliation systems, and integration with existing business applications.',
          },

          {
            para: 'At Void Matrix Technology, we design payment solutions based on your business model. Whether you need a simple checkout system, SaaS billing architecture, marketplace payment splitting, or enterprise payment workflows, we create scalable solutions aligned with your growth requirements.',
          },
        ]}
      />

      <ServiceFactors
        heading="Factors That Affect Payment Integration Cost"
        intro="Payment integration requirements vary depending on transaction volume, business model, security requirements, and platform complexity. These factors influence development effort and overall investment."
        facts={[
          'Payment gateway selection',

          'Number of payment methods',

          'UPI, card, wallet, and net banking support',

          'Subscription and recurring billing requirements',

          'Marketplace split payment logic',

          'Vendor payout workflows',

          'International payment support',

          'Currency conversion requirements',

          'Payment API customization',

          'Refund and cancellation workflows',

          'Transaction reporting',

          'Security and compliance requirements',
        ]}
      />

      <ServiceComp
        heading="Hosted Payment Gateway vs Custom Payment Integration"
        desc="Hosted payment gateways provide a quick way to accept online payments with minimal development effort, making them suitable for basic business requirements. Custom payment integrations provide greater control over checkout experiences, transaction workflows, automation, reporting, and business-specific payment logic. For SaaS platforms, marketplaces, and enterprise applications, custom payment architecture provides better flexibility, scalability, and control over financial operations."
      />

      <CtaButtonRe title="Get Payment Integration Estimate" url="/contact" />

      <ServiceApproachSection
        heading="Our Payment Integration Process"
        intro="A reliable payment system requires careful planning, secure implementation, and thorough testing. Our process ensures smooth transaction flows, secure data handling, and seamless integration with your existing digital platforms."
        steps={[
          {
            title: 'Payment Requirement Analysis',

            description:
              'We understand your business model, transaction requirements, payment methods, user flows, and integration goals before development begins.',

            points: [
              'Business analysis',

              'Payment flow planning',

              'Gateway selection',

              'Security requirements',
            ],
          },

          {
            title: 'Payment Architecture Design',

            description:
              'We design scalable payment workflows including APIs, transaction handling, database structures, and security mechanisms.',

            points: [
              'API architecture',

              'Database design',

              'Transaction workflow',

              'Error handling',
            ],
          },

          {
            title: 'Gateway Integration',

            description:
              'Our engineers integrate payment providers and configure secure communication between your application and payment systems.',

            points: [
              'Gateway setup',

              'API integration',

              'Webhook configuration',

              'Payment verification',
            ],
          },

          {
            title: 'Testing & Security Validation',

            description:
              'Every payment system undergoes testing to ensure reliability, security, and accurate transaction processing.',

            points: [
              'Transaction testing',

              'Security checks',

              'Failure handling',

              'Refund testing',
            ],
          },

          {
            title: 'Deployment & Monitoring',

            description:
              'After deployment, we monitor payment workflows and optimize performance for reliable transaction processing.',

            points: [
              'Production deployment',

              'Monitoring',

              'Issue resolution',

              'Performance optimization',
            ],
          },
        ]}
      />

      <ServiceCost
        heading="Payment Integration Company for Mumbai, Pune, Bangalore, Hyderabad, India & Global Businesses"
        costdesc={[
          {
            para: 'Businesses in Mumbai require reliable payment solutions to support eCommerce platforms, SaaS products, mobile applications, marketplaces, and digital services. Our payment integration services help companies accept online payments securely while improving transaction reliability and customer experience.',
          },

          {
            para: 'Across Pune, Bangalore, Hyderabad, and other technology hubs in India, businesses are adopting advanced payment systems to automate billing, support subscriptions, manage marketplace transactions, and integrate financial workflows into their digital platforms.',
          },

          {
            para: 'For global businesses across the USA, UK, UAE, Europe, Australia, and other international markets, we build payment integrations supporting international cards, multiple currencies, global payment providers, and scalable transaction architectures.',
          },
        ]}
      />

      <ServiceFitSection
        heading="When Should You Invest in Payment Integration?"
        intro="A professional payment integration becomes essential when businesses need secure, automated, and scalable transaction processing. The right payment architecture improves customer experience, reduces manual financial operations, and supports business growth."
        subintro="Payment integration is the right choice when:"
        points={[
          'Your website or application needs online payment acceptance',

          'You want to integrate UPI, cards, wallets, or net banking',

          'Your SaaS product requires recurring subscription billing',

          'Your marketplace needs seller payouts and payment splitting',

          'Your business requires automated payment confirmations',

          'You need refund and transaction management workflows',

          'Your existing payment system has reliability issues',

          'You want international payment acceptance',

          'You need payment APIs integrated with business software',

          'You require a scalable payment architecture for future growth',
        ]}
        finalPara="Payment integration is not only about accepting transactions—it is about building a secure financial workflow that supports customers, business operations, and future scalability. A well-designed payment system helps businesses improve reliability, automation, and revenue growth."
      />
      
<MainServiceFAQ

  heading="Payment Integration FAQs"

  faqs={s_data.faqs}

/>



<MainServiceCTA

  heading="Build a Secure Payment System"

  description="Let's create reliable payment workflows for your digital platform."


/>
    </>
  );
}
