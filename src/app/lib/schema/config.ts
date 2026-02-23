import { AreaServed, B_Logo, ContactPoint, Person } from "./types";

export const SITE_URL = "https://voidmatrixtech.com";

export const ORGINAZASTION_ID = `${SITE_URL}/#organization`;

export const BRAND_LOGO = {
    "@type":"ImageObject",
    url:`${SITE_URL}/logo.png`
}satisfies B_Logo;

export const CONTACT_POINT = {
    "@type":"ContactPoint",
    ContactType:"customer support",
    email:"hello@voidmatrixtech.com"
} satisfies ContactPoint;

export const AREA_SERVED = [
    { "@type": "City", name: "Mumbai" },
    { "@type": "City", name: "Pune" },
    { "@type": "City", name: "Bangalore" },
    { "@type": "City", name: "Delhi" },
    { "@type": "AdministrativeArea", name: "Maharastra" },
    { "@type": "Country", name: "India" },
    { "@type": "AdministrativeArea", name: "Worldwide" }
] satisfies AreaServed[];

export const SOCIAL_LINKS = [
    "https://www.linkedin.com/company/void-matrix-technology/",
    "https://www.instagram.com/voidmatrixtechnology/",
];

export const PERSON = {
    "@type": "Person",
    "@id":"https://voidmatrixtech.com/#rudresh",
    name: "Rudresh Shrivastav",
} satisfies Person;

export const KNOWS =[
        "Web Development",
        "SEO",
        "Next.js",
        "React",
        "Custom Software",
        "AI Solutions"
];