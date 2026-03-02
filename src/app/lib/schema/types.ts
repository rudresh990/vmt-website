export interface BaseSchema {
  '@type': SchemaType;
  '@id': string;
}
export interface Person {
  '@type': 'Person';
  '@id': string;
  name: string;
}

export interface ImageObject {
  '@type': 'ImageObject';
  url: string;
}

export interface Place {
  '@type': 'Place' | 'City' | 'AdministrativeArea';
  name: string;
}

export interface Country {
  '@type': 'Country';
  name: string;
  '@id'?: string;
}

export interface ContactPoint {
  '@type': 'ContactPoint';
  contactType: string;
  email: string;
}

export interface Address {
  '@type': 'PostalAddress';
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
}

export interface Offer {
  '@type': 'Offer';
  priceCurrency: string;
  priceSpecification: {
    '@type': 'PriceSpecification';
    priceCurrency: string;
    minPrice: number;
    maxPrice: number;
  };
}
export type AreaServed = Country | Place;

export interface OrganizationSchema extends BaseSchema {
  '@type': ['Organization', 'ProfessionalService'];
  name: string;
  legalName?: string;
  url: string;
  logo?: ImageObject;
  foundingDate?: string;
  founder?: Person;
  areaServed?: AreaServed[];
  description: string;
  contactPoint: ContactPoint;
  sameAs?: string[];
  knowsAbout?: string[];
  address: Address;
}
export interface potentialAction {
  '@type': 'SearchAction';
  target: string;
  'query-input': string;
}

export interface ImageObject {
  '@type': 'ImageObject';
  url: string;
}

// schema vocab controll wanna or remove schema we have to update this union
export type SchemaType =
  | ['Organization', 'ProfessionalService']
  | 'Service'
  | 'FAQPage'
  | 'BreadcrumbList'
  | 'WebSite';
