import { BaseSchema } from "./base";
import { NAME, ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "./config";

export interface WebSiteSchema extends BaseSchema{
    "@type":"WebSite";
    name:string,
    url:string,
    publisher:{
        "@type":"Organization";
        "@id":string;
    };
};

export function generateWebSite(): WebSiteSchema{
    return{
        "@type":"WebSite",
        "@id":WEBSITE_ID,
        name:NAME,
        url:SITE_URL,
        publisher:{
            "@type":"Organization",
            "@id":ORGANIZATION_ID,
        }
    };
}