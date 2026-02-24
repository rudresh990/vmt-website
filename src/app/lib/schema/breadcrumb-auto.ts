import { BreadcrumbSchema } from "./breadcrumb";

export function generateAutoBreadcrumb (pathname:string):BreadcrumbSchema{
    const baseUrl = "https://voidmatrixtech.com";

    //removing leading / trailing slash

    const cleanPath = pathname.replace(/^\/|\/$/g, "");

    const segment = cleanPath ? cleanPath.split("/"):[];

    const items =[
        {
            name:"Home",
            url:baseUrl,
        }
    ];

    let currentPath = "";

    segment.forEach((segment)=> {
        currentPath += `/${segment}`;

        //convert slug to readable name

        const formattedName = segment.replace(/-/g," ").replace(/\b\w/g, (char)=> char.toUpperCase());

        items.push({
            name:formattedName,
            url: `${baseUrl}${currentPath}`
        });
    })

    return {
        "@type":"BreadcrumbList",
        "@id":`${baseUrl}${pathname.replace(/\/$/,"")}/#breadcrumb`,
        itemListElement:items.map((item,index)=>({
            "@type":"ListItem",
            position:index + 1,
            name:item.name,
            item:item.url
        }))
    };
}

