import { OrganizationSchema } from "./types";

export const ORGINAZASTION_ID = "https://voidmatrixtech.com/#organization";

export const organizationSchema: OrganizationSchema = {
  "@type": "Organization",
  "@id": ORGINAZASTION_ID,
  name: "Void Matrix Technology",
  legalName: "Void Matrix Technology",
  url: "https://voidmatrixtech.com",
  logo: {
    "@type": "ImageObject",
    url: "https://voidmatrixtech.com/logo.png",
  },
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Rudresh Shrivastav"
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
      "@id": "https://www.wikidata.org/wiki/Q668"
    },
    {
      "@type": "Place",
      name: "Worldwide",
    }
  ],
  sameAs: [
    "https://www.linkedin.com/company/void-matrix-technology/",
    "https://www.instagram.com/voidmatrixtechnology/",
  ],
};