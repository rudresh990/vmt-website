import Link from 'next/link';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';

import { RiThreadsLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="footer-legal">
      <div className="footer-legal-inner">
        {/* Left */}
        <div className="footer-brand">
          <Link href="/">
            <span className="footer-brand-name">VOIDMATRIX TECHNOLOGY PVT LTD</span>
          </Link>

          <p className="footer-brand-tagline">STRUCTURED INTELLIGENCE</p>

          <p className="footer-copy">
            © {new Date().getFullYear()} VoidMatrix Technology Pvt Ltd. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <nav className="footer-links">
          <Link href="/privacy">Privacy Notice</Link>

          <Link href="/cookies">Cookie Policy</Link>

          <Link href="/accessibility">Accessibility</Link>

          <Link href="/disclaimer">Disclaimer</Link>

          <Link href="/security">Security Policy</Link>
        </nav>
        <div className="footer-social ml-0!">
          <a
            href="https://www.linkedin.com/company/void-matrix-technology/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="social-icon" />
          </a>

          <a
            href="https://www.instagram.com/voidmatrixtechnology/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="social-icon" />
          </a>

          <a
            href="https://x.com/VoidMatrixTech"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <Twitter className="social-icon" />
          </a>

          <a
            href="https://www.facebook.com/people/Void-Matrix-Technology-VMT/61590040701979/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="social-icon" />
          </a>

          <a
            href="https://www.threads.net/@voidmatrixtechnology"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Threads"
          >
            <RiThreadsLine className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}
