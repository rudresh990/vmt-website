// import { BRAND_LOGO, CONTACT_POINT, KNOWS, PERSON } from "./config";
// import { OrganizationSchema } from "./types";

// export const ORGINAZASTION_ID = "https://voidmatrixtech.com/#organization";

// export const organizationSchema: OrganizationSchema = {
//   "@type": "Organization",
//   "@id": ORGINAZASTION_ID,
//   name: "Void Matrix Technology",
//   legalName: "Void Matrix Technology",
//   url: "https://voidmatrixtech.com",
//   logo: BRAND_LOGO,
//   foundingDate: "2026",
//   founder: PERSON,
//   description: "Void Matrix Technology is a modern technology company specializing in SEO, website development, and high-performance web application solutions. We build scalable digital products using Next.js, React, AI, and cloud technologies to help businesses grow online.",
//   contactPoint:CONTACT_POINT,
//   knowsAbout:KNOWS,
//   sameAs: [
//     "https://www.linkedin.com/company/void-matrix-technology/",
//     "https://www.instagram.com/voidmatrixtechnology/",
//   ],
// };
import { BRAND_DESC, BRAND_LOGO, CONTACT_POINT, KNOWS, LEGAL_NAME, NAME, ORGANIZATION_ID, PERSON, SITE_URL, SOCIAL_LINKS } from "./config";
import { OrganizationSchema } from "./types";

export function generateOrganization(): OrganizationSchema {
  return {
    "@type":"Organization",
    "@id":ORGANIZATION_ID,
    name:NAME,
    legalName:LEGAL_NAME,
    url:SITE_URL,
    logo:BRAND_LOGO,
    founder:PERSON,
    description:BRAND_DESC,
    contactPoint:CONTACT_POINT,
    knowsAbout:KNOWS,
    sameAs:SOCIAL_LINKS,
  }
}