import { SITE_URL, ORGINAZASTION_ID, AREA_SERVED } from "./config";
interface GenerateServicesProps {
    slug: string;
    name: string;
    description: string;
    serviceType: string;
}

export const generateServicesSchema = ({
    slug,
    name,
    description,
    serviceType,
}: GenerateServicesProps) => {
    const url = `${SITE_URL}/${slug}`;
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${url}/#service`,
        name,
        description,
        url,
        serviceType,
        provider: {
            "@id": ORGINAZASTION_ID
        },
        areaServed: AREA_SERVED,
    };
};