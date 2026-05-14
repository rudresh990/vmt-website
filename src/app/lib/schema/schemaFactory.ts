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
import { generateBlogPosting } from './blog';

import { cleanSchema } from './utils/utils';

interface SchemaFactoryOptions {
  blog?: any;
}

export function schemaFactory(pathname: string, option?: SchemaFactoryOptions) {
  type ServicePath = keyof typeof serviceData;

  const service = serviceData[pathname as ServicePath];

  const isService = Boolean(service);

  const graph: Record<string, any>[] = [];

  // FAQ Detection
  const hasFAQ =
    pathname === '/services'
      ? Boolean(serviceCollectionFAQs?.length)
      : Boolean(service?.faqs?.length);

  // Organization
  graph.push(generateOrganization());

  // Website
  graph.push(generateWebSite());

  // WebPage
  graph.push(generateGlobalWebpage(pathname, service?.description, undefined, hasFAQ));

  // Breadcrumb
  if (pathname && pathname !== '/') {
    graph.push(generateAutoBreadcrumb(pathname));
  }

  // Services Collection Page
  if (pathname === '/services') {
    graph.push(generateServiceCollectionPage(coreServicesData));

    const servicesFAQ = generateFAQPage({
      slug: '/services',
      title: 'Services',
      faqs: serviceCollectionFAQs,
    });

    if (servicesFAQ) {
      graph.push(servicesFAQ);
    }
  }

  // Service Page
  else if (service) {
    const serviceOffer = service.offer
      ? generateOffer(pathname, service.offer[0], service.offer[1])
      : undefined;

    graph.push(generateService(pathname, service.description, service.name, serviceOffer));

    const serviceFAQ = generateFAQPage({
      slug: pathname,
      title: service.name,
      faqs: service.faqs,
    });

    if (serviceFAQ) {
      graph.push(serviceFAQ);
    }
  }

  // Blog
  if (option?.blog) {
    graph.push(generateBlogPosting(option.blog));
  }

  return cleanSchema({
    '@context': 'https://schema.org',

    '@graph': graph.filter(Boolean),
  });
}
