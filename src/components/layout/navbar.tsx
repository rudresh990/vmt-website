'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CtaButtonRe from '../ui/CtaButtonRe';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobile() {
    setMobileOpen(false);
  }

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* BRAND */}
        <div className="navbar-brand">
          <span className="brand-text">
            <Link href="/">
              <span className="braces">{` {  } `}</span> VOID MATRIX TECHNOLOGY
            </Link>
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="navbar-links">
          <Link href="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>

          {/* DEVELOPMENT */}
          <div
            className={`nav-dropdown ${activeDropdown === 'development' ? 'desktop-open' : ''}`}
            onMouseEnter={() => setActiveDropdown('development')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link nav-trigger">Development</button>

            <div className="mega-wrapper">
              <div className="mega-menu">
                <div className="mega-column">
                  <div className="mega-heading">Software</div>

                  <Link href="/services/custom-software-development" className="mega-item">
                    <div className="mega-title">Custom Software Dev</div>
                  </Link>

                  <Link href="/services/saas-development" className="mega-item">
                    <div className="mega-title">SaaS Development</div>
                  </Link>

                  <Link href="/services/enterprise-software-development" className="mega-item">
                    <div className="mega-title">Enterprise Software</div>
                  </Link>

                  <Link href="/services/crm-erp-development" className="mega-item">
                    <div className="mega-title">CRM & ERP Dev</div>
                  </Link>

                  <Link href="/services/workflow-automation" className="mega-item">
                    <div className="mega-title">Workflow Automation</div>
                  </Link>

                  <Link href="/services/product-engineering" className="mega-item">
                    <div className="mega-title">Product Engineering</div>
                  </Link>
                </div>

                <div className="mega-column">
                  <Link href={'/services/web-application-development'}>
                    <div className="mega-heading">Web & App</div>
                  </Link>

                  <Link href="/services/website-development" className="mega-item">
                    <div className="mega-title">Professional Websites</div>
                  </Link>

                  <Link href="/services/web-app-development" className="mega-item">
                    <div className="mega-title">Web Applications</div>
                  </Link>

                  <Link href="/services/mobile-application-development" className="mega-item">
                    <div className="mega-title">Mobile Applications</div>
                  </Link>

                  <Link href="/services/ecommerce-development" className="mega-item">
                    <div className="mega-title">eCommerce Dev</div>
                  </Link>

                  <Link href="/services/marketplace-development" className="mega-item">
                    <div className="mega-title">Marketplace Dev</div>
                  </Link>

                  <Link href="/services/cms-development" className="mega-item">
                    <div className="mega-title">CMS Development</div>
                  </Link>
                </div>

                <div className="mega-column">
                  <div className="mega-heading">Platform & API</div>

                  <Link href="/services/platform-engineering" className="mega-item">
                    <div className="mega-title">Platform Engineering</div>
                  </Link>

                  <Link href="/services/cloud-devops" className="mega-item">
                    <div className="mega-title">Cloud & DevOps</div>
                  </Link>

                  <Link href="/services/api-integration" className="mega-item">
                    <div className="mega-title">API Development</div>
                  </Link>

                  <Link href="/services/payment-integration" className="mega-item">
                    <div className="mega-title">Payment Integrations</div>
                  </Link>

                  <Link href="/services/third-party-integration" className="mega-item">
                    <div className="mega-title">Third-Party Integrations</div>
                  </Link>

                  <Link href="/services/cicd-pipelines" className="mega-item">
                    <div className="mega-title">CI/CD Pipelines</div>
                  </Link>
                </div>
                <div className="mega-footer mega-item">
                  <Link href="services/maintenance-and-support">Maintenance & Support</Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`nav-dropdown ${activeDropdown === 'marketing' ? 'desktop-open' : ''}`}
            onMouseEnter={() => setActiveDropdown('marketing')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link nav-trigger">Marketing & SEO</button>

            <div className="mega-wrapper">
              <div className="mega-menu">
                <div className="mega-column">
                  <div className="mega-heading">SEO</div>

                  <Link href="/services/technical-seo" className="mega-item">
                    <div className="mega-title">Technical SEO</div>
                  </Link>

                  <Link href="/services/on-page-seo" className="mega-item">
                    <div className="mega-title">On-Page SEO</div>
                  </Link>

                  <Link href="/services/local-seo" className="mega-item">
                    <div className="mega-title">Local SEO</div>
                  </Link>

                  <Link href="/services/enterprise-seo" className="mega-item">
                    <div className="mega-title">Enterprise SEO</div>
                  </Link>

                  <Link href="/services/seo-audit" className="mega-item">
                    <div className="mega-title">SEO Audits</div>
                  </Link>
                </div>

                <div className="mega-column">
                  <div className="mega-heading">Content & Growth</div>

                  <Link href="/services/seo-blog-writing" className="mega-item">
                    <div className="mega-title">SEO Blog Writing</div>
                  </Link>

                  <Link href="/services/website-copywriting" className="mega-item">
                    <div className="mega-title">Website Copywriting</div>
                  </Link>

                  <Link href="/services/landing-pages" className="mega-item">
                    <div className="mega-title">Landing Pages</div>
                  </Link>

                  <Link href="/services/content-strategy" className="mega-item">
                    <div className="mega-title">Content Strategy</div>
                  </Link>

                  <Link href="/services/case-studies" className="mega-item">
                    <div className="mega-title">Case Studies</div>
                  </Link>
                </div>

                <div className="mega-column">
                  <div className="mega-heading">Digital Marketing</div>

                  <Link href="/services/google-ads" className="mega-item">
                    <div className="mega-title">Google Ads</div>
                  </Link>

                  <Link href="/services/meta-ads" className="mega-item">
                    <div className="mega-title">Meta Ads</div>
                  </Link>

                  <Link href="/services/lead-generation" className="mega-item">
                    <div className="mega-title">Lead Generation</div>
                  </Link>

                  <Link href="/services/email-marketing" className="mega-item">
                    <div className="mega-title">Email Marketing</div>
                  </Link>

                  <Link href="/services/social-media-management" className="mega-item">
                    <div className="mega-title">Social Media Mgmt</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`nav-dropdown ${activeDropdown === 'design' ? 'desktop-open' : ''}`}
            onMouseEnter={() => setActiveDropdown('design')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link nav-trigger">Design</button>

            <div className="mega-wrapper">
              <div className="mega-menu mega-menu-two">
                <div className="mega-column">
                  <div className="mega-heading">UI Design</div>

                  <Link href="/services/website-ui-design" className="mega-item">
                    <div className="mega-title">Website UI Design</div>
                  </Link>

                  <Link href="/services/saas-ui-design" className="mega-item">
                    <div className="mega-title">SaaS UI Design</div>
                  </Link>

                  <Link href="/services/mobile-ui-design" className="mega-item">
                    <div className="mega-title">Mobile App UI Design</div>
                  </Link>
                </div>

                <div className="mega-column">
                  <div className="mega-heading">UX & Conversion</div>

                  <Link href="/services/ux-research" className="mega-item">
                    <div className="mega-title">UX Research</div>
                  </Link>

                  <Link href="/services/wireframing" className="mega-item">
                    <div className="mega-title">Wireframing</div>
                  </Link>

                  <Link href="/services/cro-design" className="mega-item">
                    <div className="mega-title">CRO Design</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`nav-dropdown ${activeDropdown === 'consulting' ? 'desktop-open' : ''}`}
            onMouseEnter={() => setActiveDropdown('consulting')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="nav-link nav-trigger">Consulting</button>

            <div className="mega-wrapper">
              <div className="mega-menu mega-menu-two">
                <div className="mega-column">
                  <div className="mega-heading">Strategy</div>

                  <Link href="/services/startup-consulting" className="mega-item">
                    <div className="mega-title">Startup Consulting</div>
                  </Link>

                  <Link href="/services/product-strategy" className="mega-item">
                    <div className="mega-title">Product Strategy</div>
                  </Link>

                  <Link href="/services/technology-roadmaps" className="mega-item">
                    <div className="mega-title">Technology Roadmaps</div>
                  </Link>
                </div>

                <div className="mega-column">
                  <div className="mega-heading">Advisory</div>

                  <Link href="/services/software-consulting" className="mega-item">
                    <div className="mega-title">Software Consulting</div>
                  </Link>

                  <Link href="/services/technical-advisory" className="mega-item">
                    <div className="mega-title">Technical Advisory</div>
                  </Link>

                  <Link href="/services/growth-consulting" className="mega-item">
                    <div className="mega-title">Growth Consulting</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog" className={isActive('/blog') ? 'nav-link active' : 'nav-link'}>
            Blog
          </Link>

          {/* <Link
            href="/platforms"
            className={isActive('/platforms') ? 'nav-link active' : 'nav-link'}
          >
            Platforms
          </Link> */}

          <Link href="/company" className={isActive('/company') ? 'nav-link active' : 'nav-link'}>
            Company
          </Link>
        </nav>

        <CtaButtonRe
          title="Get Free Estimate"
          url="/contact"
          cls="p-0 text-sm mx-0 hidden lg:block"
        />

        {/* MOBILE BUTTON */}
        <div className="navbar-right">
          <button className="navbar-menu-btn" onClick={() => setMobileOpen(true)}>
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="mobile-panel">
          <div className="mobile-header">
            <span className="brand-text">
              <Link href="/" onClick={closeMobile}>
                <span className="braces">{` {  } `}</span> VOID MATRIX TECHNOLOGY
              </Link>
            </span>

            <button className="mobile-close" onClick={closeMobile}>
              ✕
            </button>
          </div>

          <div className="mobile-scroll">
            <div className="mobile-group">
              <Link onClick={closeMobile} href="/" className="mobile-item">
                Home
              </Link>

              <Link onClick={closeMobile} href="/blog" className="mobile-item">
                Blog
              </Link>
            </div>

            {/* DEVELOPMENT */}

            <div className="mobile-group">
              <div className="mobile-heading">Software</div>

              <Link
                onClick={closeMobile}
                href="/services/custom-software-development"
                className="mobile-item"
              >
                Custom Software Dev
              </Link>

              <Link onClick={closeMobile} href="/services/saas-development" className="mobile-item">
                SaaS Development
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/enterprise-software-development"
                className="mobile-item"
              >
                Enterprise Software
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/crm-erp-development"
                className="mobile-item"
              >
                CRM & ERP Dev
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/workflow-automation"
                className="mobile-item"
              >
                Workflow Automation
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/product-engineering"
                className="mobile-item"
              >
                Product Engineering
              </Link>
            </div>

            <div className="mobile-group">
              <Link href={'/services/web-application-development'}>
                <div className="mobile-heading">Web & App</div>
              </Link>
              <Link
                onClick={closeMobile}
                href="/services/website-development"
                className="mobile-item"
              >
                Professional Websites
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/web-app-development"
                className="mobile-item"
              >
                Web Applications
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/mobile-application-development"
                className="mobile-item"
              >
                Mobile Applications
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/ecommerce-development"
                className="mobile-item"
              >
                eCommerce Development
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/marketplace-development"
                className="mobile-item"
              >
                Marketplace Development
              </Link>

              <Link onClick={closeMobile} href="/services/cms-development" className="mobile-item">
                CMS Development
              </Link>

              <Link href="services/maintenance-and-support" className="mobile-item">
                Maintenance & Support
              </Link>
            </div>

            <div className="mobile-group">
              <div className="mobile-heading">Platform & API</div>

              <Link
                onClick={closeMobile}
                href="/services/platform-engineering"
                className="mobile-item"
              >
                Platform Engineering
              </Link>

              <Link onClick={closeMobile} href="/services/cloud-devops" className="mobile-item">
                Cloud & DevOps
              </Link>

              <Link onClick={closeMobile} href="/services/api-integration" className="mobile-item">
                API Development
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/payment-integration"
                className="mobile-item"
              >
                Payment Integrations
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/third-party-integration"
                className="mobile-item"
              >
                Third-Party Integrations
              </Link>

              <Link onClick={closeMobile} href="/services/cicd-pipelines" className="mobile-item">
                CI/CD Pipelines
              </Link>
            </div>

            {/* MARKETING & SEO */}

            <div className="mobile-group">
              <div className="mobile-heading">SEO</div>

              <Link onClick={closeMobile} href="/services/technical-seo" className="mobile-item">
                Technical SEO
              </Link>

              <Link onClick={closeMobile} href="/services/on-page-seo" className="mobile-item">
                On-Page SEO
              </Link>

              <Link onClick={closeMobile} href="/services/local-seo" className="mobile-item">
                Local SEO
              </Link>

              <Link onClick={closeMobile} href="/services/enterprise-seo" className="mobile-item">
                Enterprise SEO
              </Link>

              <Link onClick={closeMobile} href="/services/seo-audit" className="mobile-item">
                SEO Audits
              </Link>
            </div>

            <div className="mobile-group">
              <div className="mobile-heading">Content & Growth</div>

              <Link onClick={closeMobile} href="/services/seo-blog-writing" className="mobile-item">
                SEO Blog Writing
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/website-copywriting"
                className="mobile-item"
              >
                Website Copywriting
              </Link>

              <Link onClick={closeMobile} href="/services/landing-pages" className="mobile-item">
                Landing Pages
              </Link>

              <Link onClick={closeMobile} href="/services/content-strategy" className="mobile-item">
                Content Strategy
              </Link>

              <Link onClick={closeMobile} href="/services/case-studies" className="mobile-item">
                Case Studies
              </Link>
            </div>

            <div className="mobile-group">
              <div className="mobile-heading">Digital Marketing</div>

              <Link onClick={closeMobile} href="/services/google-ads" className="mobile-item">
                Google Ads
              </Link>

              <Link onClick={closeMobile} href="/services/meta-ads" className="mobile-item">
                Meta Ads
              </Link>

              <Link onClick={closeMobile} href="/services/lead-generation" className="mobile-item">
                Lead Generation
              </Link>

              <Link onClick={closeMobile} href="/services/email-marketing" className="mobile-item">
                Email Marketing
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/social-media-management"
                className="mobile-item"
              >
                Social Media Management
              </Link>
            </div>

            {/* DESIGN */}

            <div className="mobile-group">
              <div className="mobile-heading">UI Design</div>

              <Link
                onClick={closeMobile}
                href="/services/website-ui-design"
                className="mobile-item"
              >
                Website UI Design
              </Link>

              <Link onClick={closeMobile} href="/services/saas-ui-design" className="mobile-item">
                SaaS UI Design
              </Link>

              <Link onClick={closeMobile} href="/services/mobile-ui-design" className="mobile-item">
                Mobile App UI Design
              </Link>
            </div>

            <div className="mobile-group">
              <div className="mobile-heading">UX & Conversion</div>

              <Link onClick={closeMobile} href="/services/ux-research" className="mobile-item">
                UX Research
              </Link>

              <Link onClick={closeMobile} href="/services/wireframing" className="mobile-item">
                Wireframing
              </Link>

              <Link onClick={closeMobile} href="/services/cro-design" className="mobile-item">
                CRO Design
              </Link>
            </div>

            {/* CONSULTING */}

            <div className="mobile-group">
              <div className="mobile-heading">Strategy</div>

              <Link
                onClick={closeMobile}
                href="/services/startup-consulting"
                className="mobile-item"
              >
                Startup Consulting
              </Link>

              <Link onClick={closeMobile} href="/services/product-strategy" className="mobile-item">
                Product Strategy
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/technology-roadmaps"
                className="mobile-item"
              >
                Technology Roadmaps
              </Link>
            </div>

            <div className="mobile-group">
              <div className="mobile-heading">Advisory</div>

              <Link
                onClick={closeMobile}
                href="/services/software-consulting"
                className="mobile-item"
              >
                Software Consulting
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/technical-advisory"
                className="mobile-item"
              >
                Technical Advisory
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/growth-consulting"
                className="mobile-item"
              >
                Growth Consulting
              </Link>
            </div>

            <div className="mobile-group">
              <Link onClick={closeMobile} href="/platforms" className="mobile-item">
                Platforms
              </Link>

              <Link onClick={closeMobile} href="/company" className="mobile-item">
                Company
              </Link>

              <Link onClick={closeMobile} href="/contact" className="mobile-item">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
