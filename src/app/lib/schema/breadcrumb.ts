import { BaseSchema } from "./base";
import { SITE_URL } from "./config";

export interface BreadcrumbItemInput {
    name:string,
    url:string
}

export interface BreadcrumbSchema extends BaseSchema{
    itemListElement:{
        "@type":"ListItem";
        position: Number,
        name:string,
        item:string,
    }[];
}

export function generateBreadcrumb(
    items:BreadcrumbItemInput[],
    idPath:string,
):BreadcrumbSchema{
    return{
        "@type":"BreadcrumbList",
        "@id":`${SITE_URL}/${idPath}/#breadcrumb`,
        itemListElement: items.map((item,index)=>({
            "@type":"ListItem",
            position: index+1,
            name:item.name,
            item:item.url
        }))
    }
}