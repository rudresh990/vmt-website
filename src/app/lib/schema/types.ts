import { LoadComponentsReturnType } from "next/dist/server/load-components";

export interface BaseSchema {
    "@context"?: "https://schema.org",
    "@type": string,
    "@id": string
}
export interface Person {
    "@type": "Person";
    name: string;
}

export interface ImageObject {
    "@type": "ImageObject";
    url: string;
}

export interface Place {
    "@type": "Country" | "Place";
    name: string;
}

export interface Country {
    "@type": "Country";
    name: string;
    "@id"?: string;
}

export type AreaServed = Country | Place

export interface OrganizationSchema extends BaseSchema {
    "@type": "Organization";
    name: string;
    legalName?: string,
    url: string;
    logo?: ImageObject;
    foundingDate?: string;
    founder: Person;
    areaServed?: AreaServed[];
    sameAs?: string[];
}