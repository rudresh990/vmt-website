'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

          {/* SERVICES (KEEP DROPDOWN) */}
          <div
            className={`nav-dropdown ${activeDropdown === 'services' ? 'desktop-open' : ''}`}
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href="/services"
              className={isActive('/services') ? 'nav-link active' : 'nav-link'}
            >
              Services
            </Link>

            <div className="mega-wrapper">
              <div className="mega-menu">
                <div className="mega-column">
                  <div className="mega-heading">Software Development</div>

                  <Link href="/services/custom-software-development" className="mega-item">
                    <div className="mega-title">Custom Software</div>
                  </Link>

                  <Link href="/services/enterprise-software-development" className="mega-item">
                    <div className="mega-title">Enterprise Software</div>
                  </Link>

                  <Link href="/services/platform-engineering" className="mega-item">
                    <div className="mega-title">Platform Engineering</div>
                  </Link>

                  <Link href="/services/api-integration" className="mega-item">
                    <div className="mega-title">API & Integrations</div>
                  </Link>
                </div>

                <div className="mega-column">
                  <div className="mega-heading">Web Development</div>

                  <Link href="/services/website-development" className="mega-item">
                    <div className="mega-title">Professional Website</div>
                  </Link>

                  <Link href="/services/web-application-development" className="mega-item">
                    <div className="mega-title">Web Application</div>
                  </Link>

                  <Link href="/services/mobile-application-development" className="mega-item">
                    <div className="mega-title">Mobile Application</div>
                  </Link>

                  <Link href="/services/ecommerce-development" className="mega-item">
                    <div className="mega-title">E-Commerce</div>
                  </Link>
                </div>

                <div className="mega-column">
                  <div className="mega-heading">Optimization</div>

                  <Link
                    href="/services/technical-seo-performance-optimization"
                    className="mega-item"
                  >
                    <div className="mega-title">Technical SEO & Performance</div>
                  </Link>

                  <Link href="/services/website-speed-optimization" className="mega-item">
                    <div className="mega-title">Website Speed Optimization</div>
                  </Link>

                  <Link href="/services/conversion-rate-optimization" className="mega-item">
                    <div className="mega-title">Conversion Rate Optimization</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* SIMPLE blogs LINK */}
          <Link href="/blog" className={isActive('/blog') ? 'nav-link active' : 'nav-link'}>
            Blogs
          </Link>

          <Link
            href="/platforms"
            className={isActive('/platforms') ? 'nav-link active' : 'nav-link'}
          >
            Platforms
          </Link>

          <Link href="/company" className={isActive('/company') ? 'nav-link active' : 'nav-link'}>
            Company
          </Link>

          <Link href="/contact" className={isActive('/contact') ? 'nav-link active' : 'nav-link'}>
            Contact
          </Link>
        </nav>

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

              <Link onClick={closeMobile} href="/services" className="mobile-item">
                Services
              </Link>

              {/* SIMPLE blogs */}
              <Link onClick={closeMobile} href="/bloggoog" className="mobile-item">
                Blogs
              </Link>
            </div>

            {/* SERVICES SECTIONS */}
            <div className="mobile-group">
              <div className="mobile-heading">Software Development</div>

              <Link
                onClick={closeMobile}
                href="/services/custom-software-development"
                className="mobile-item"
              >
                Custom Software
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
                href="/services/platform-engineering"
                className="mobile-item"
              >
                Platform Engineering
              </Link>

              <Link onClick={closeMobile} href="/services/api-integration" className="mobile-item">
                API & Integrations
              </Link>
            </div>

            <div className="mobile-group">
              <div className="mobile-heading">Web Development</div>

              <Link
                onClick={closeMobile}
                href="/services/website-development"
                className="mobile-item"
              >
                Professional Website
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/web-application-development"
                className="mobile-item"
              >
                Web Application
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/mobile-application-development"
                className="mobile-item"
              >
                Mobile Application
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/ecommerce-development"
                className="mobile-item"
              >
                E-Commerce
              </Link>
            </div>

            <div className="mobile-group">
              <div className="mobile-heading">Optimization</div>

              <Link
                onClick={closeMobile}
                href="/services/technical-seo-performance-optimization"
                className="mobile-item"
              >
                Technical SEO & Performance
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/website-speed-optimization"
                className="mobile-item"
              >
                Website Speed Optimization
              </Link>

              <Link
                onClick={closeMobile}
                href="/services/conversion-rate-optimization"
                className="mobile-item"
              >
                Conversion Rate Optimization
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
