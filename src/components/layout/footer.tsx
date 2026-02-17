import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer-legal">
            <div className="footer-legal-inner">

                {/* Left: Brand */}
                <div className="footer-brand">
                    <Link href="/">
                        <span className="footer-brand-name">
                            VOID MATRIX TECHNOLOGY
                        </span>
                    </Link>
                    <p className="footer-brand-tagline">
                        STRUCTURED INTELLIGENCE
                    </p>
                    <p className="footer-copy">
                        © {new Date().getFullYear()} Void Matrix Technology. All rights reserved.
                    </p>
                </div>

                {/* Right: Legal links + Social */}
                <nav className="footer-links">
                    <Link href="/privacy">Privacy Notice</Link>
                    <Link href="/cookies">Cookie Policy</Link>
                    <Link href="/accessibility">Accessibility</Link>
                    <Link href="/disclaimer">Disclaimer</Link>
                    <Link href="/security">Security Policy</Link>

                    {/* Social Icons */}
                    <div className="footer-social">
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
                    </div>


                </nav>

            </div>
        </footer>
    );
}
