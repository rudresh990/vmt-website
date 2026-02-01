import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import { Inter,IBM_Plex_Sans } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display:"swap",
});

const IBMPlex = IBM_Plex_Sans({
  variable:"--font-plex",
  subsets:["latin"],
  weight:["400","500","600"],
  display:"swap",
});

export const metadata: Metadata = {
  title: "VMT",
  description: "Void Matrix Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${IBMPlex.variable}`}>
      <body
        className="bg-authkit overflow-hidden min-h-screen" 
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
