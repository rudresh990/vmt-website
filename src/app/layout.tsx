import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import Script from "next/script";
import "./styles/globals.css";
// light speed vercel
import { SpeedInsights } from "@vercel/speed-insights/next";
// analytics
import { Analytics } from "@vercel/analytics/next"
import { organizationSchema } from "./lib/schema/organization";

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/favicon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon-96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon-180x180.png"
  },
  manifest: "/site.webmanifest",

  metadataBase: new URL("https://voidmatrixtech.com"),
  title: {
    default: "Void Matrix Technology",
    template: "%s | Void Matrix Technology",
  },

  description:
    "Void Matrix Technology builds scalable software platforms, digital systems and technology solutions for modern businesses.",
  applicationName: "Void Matrix Technology",


  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "Void Matrix Technology",
    title: "Void Matrix Technology",
    description:
      "Scalable technology platforms and digital solutions built for reliability, growth, and long-term impact.",
    url: "https://voidmatrixtech.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Void Matrix Technology",
    description:
      "Scalable technology platforms and digital solutions built for reliability, growth, and long-term impact.",
  },
}
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const IBMPlex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context":"https://schema.org",
    "@graph":[organizationSchema],
  }
  return (
    <html lang="en" className={`${inter.variable} ${IBMPlex.variable}`}>
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-THEJRBKYV5"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-THEJRBKYV5');
          `}
        </Script>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      </head>
      <body
        className="bg-authkit min-h-screen app-root"
      >
        <header>
          <Navbar />
        </header>

        <main id="main-content" className="app-main">
          {children}
          <SpeedInsights />
          <Analytics />
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
