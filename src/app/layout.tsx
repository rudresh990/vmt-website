import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./styles/globals.css";

export const metadata: Metadata = {
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
  return (
    <html lang="en" className={`${inter.variable} ${IBMPlex.variable}`}>
      <body
        className="bg-authkit min-h-screen"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
