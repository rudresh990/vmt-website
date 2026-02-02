import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{
    const baseUrl ="https://voidmatrixtech.com";
    return[{
        url: `${baseUrl}/`,
        lastModified:new Date(),
        changeFrequency:"weekly",
        priority:1,
    },
    {
        url:`${baseUrl}/solutions`,
        lastModified:new Date(),
        changeFrequency:"monthly",
        priority:0.7,
    },
    {
        url:`${baseUrl}/platforms`,
        lastModified:new Date(),
        changeFrequency:"monthly",
        priority:0.7,
    },
    {
        url:`${baseUrl}/company`,
        lastModified:new Date(),
        changeFrequency:"monthly",
        priority:0.6,
    },
    {
        url:`${baseUrl}/contact`,
        lastModified:new Date(),
        changeFrequency:"monthly",
        priority:0.6,
    },
];
}