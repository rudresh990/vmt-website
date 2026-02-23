import { BaseSchema } from "./base";
import { COLLECTION_ID, SITE_URL, WEBSITE_ID } from "./config";

export interface ServicePageSchema extends BaseSchema{
    "@type":"CollectionPage",
    description:string,
    name:string;
    isPartOf:{
        "@type":"WebSite",
        "@id":string,
    };
    mainEntity:{
        "@type":"ItemList",
        itemListElement:{
            "@type":"ListItem";
            position:number,
            name:string,
            url:string,
        }[];
    };
}
export interface ServiceListItem {
    name:string,
    slug:string,
}
export function generateServicePage(services:ServiceListItem[]):ServicePageSchema{
    return{
        "@type":"CollectionPage",
        "@id":COLLECTION_ID,
        name:"Our Services",
        description:"Explore web development, mobile apps, AI, automation, and digital transformation services offered by Void Matrix Technology.",
        isPartOf:{
            "@type":"WebSite",
            "@id":WEBSITE_ID,
        },
        mainEntity:{
            "@type":"ItemList",
            itemListElement: services.map((service,index) => ({
                "@type":"ListItem",
                position:index + 1,
                name:service.name,
                url: `${SITE_URL}/services/${service.slug}`
            }))
        }
    };
}