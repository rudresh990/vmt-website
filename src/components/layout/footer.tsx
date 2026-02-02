import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer-legal">
            <div className="footer-legal-inner">
                {/* Left: Brand */}
                <div className="footer-brand">
                    <span className="footer-brand-name">VOID MATRIX</span>
                    <p className="footer-brand-tagline">STRUCTURED INTELLIGENCE</p>
                    <p className="footer-copy">© {new Date().getFullYear()} Void Matrix Technology. All rights reserved.
                    </p>
                </div>

                {/* Bottom line */}

                {/* Center: Legal links */}
                <nav className="footer-links">
                    <Link href="/privacy">Privacy Notice</Link>
                    <Link href="/cookies">Cookie Policy</Link>
                    <Link href="/accessibility">Accessibility</Link>
                    <Link href="/disclaimer">Disclaimer</Link>
                    <Link href="/security">Security Policy</Link>
                </nav>
            </div>
        </footer>
    );
}
