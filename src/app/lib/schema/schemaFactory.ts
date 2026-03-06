import { generateOrganization } from './organization';
import { generateWebSite } from './website';
import { generateService } from './service';
import { serviceData } from './data/services_data';
import { coreServicesData, serviceCollectionFAQs } from './data/services_collection_data';
import { generateGlobalWebpage } from './globalWebpage';
import { generateAutoBreadcrumb } from './breadcrumb-auto';
import { generateServiceCollectionPage } from './services-collection-page';
import { generateFAQPage } from './faq-generator';
import { generateOffer } from './offer';

export function schemaFactory(pathname: string) {
  type ServicePath = keyof typeof serviceData;
  const service = serviceData[pathname as ServicePath];
  const isService = Boolean(service);
  const graph: any[] = [];
  graph.push(generateOrganization());
  graph.push(generateWebSite());
  if (isService) {
    graph.push(generateGlobalWebpage(pathname, service.description));
  } else {
    graph.push(generateGlobalWebpage(pathname));
  }
  if (pathname && pathname !== '/') {
    graph.push(generateAutoBreadcrumb(pathname));
  }
  if (pathname === '/services') {
    graph.push(generateServiceCollectionPage(coreServicesData));
    graph.push(generateFAQPage('services', serviceCollectionFAQs));
  }

  if (service) {
    if (service.offer) {
      const [lowPrice, highPrice] = service.offer;
      const serviceOffer = generateOffer(pathname, lowPrice, highPrice);
      graph.push(generateService(pathname, service.description, undefined, serviceOffer));
    } else {
      graph.push(generateService(pathname, service.description));
    }
    graph.push(generateFAQPage(pathname, service.faqs));
  }
  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
