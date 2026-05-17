export interface BaseSchema {
  '@id'?: string;
  '@type': string | string[];

  url?: string;

  name?: string;

  description?: string;

  inLanguage?: string;
}

export interface ImageObject {
  '@type': 'ImageObject';
  url: string;
}

export interface Person {
  '@type': 'Person';
  '@id'?: string;
  name: string;
}

export interface Address {
  '@type': 'PostalAddress';

  addressLocality: string;

  addressRegion: string;

  addressCountry: string;
}

export interface AreaServed {
  '@type': string;
  name: string;
}

export interface ContactPoint {
  '@type': 'ContactPoint';

  contactType: string;

  email?: string;

  telephone?: string;

  url?: string;

  areaServed?: AreaServed[];

  availableLanguage?: string[];
}

export interface SearchAction {
  '@type': 'SearchAction';

  target: string;

  'query-input': string;
}

export interface BreadcrumbSchema {
  '@type': 'BreadcrumbList';

  '@id': string;

  name?: string;

  inLanguage?: string;

  itemListElement: {
    '@type': 'ListItem';

    position: number;

    name: string;

    item:
      | string
      | {
          '@id': string;
        };
  }[];
}

export interface WebsiteSchema extends BaseSchema {
  '@type': 'WebSite';

  alternateName?: string;

  about?: {
    '@id': string;
  };

  publisher: {
    '@type'?: 'Organization';
    '@id': string;
  };

  copyrightHolder?: {
    '@id': string;
  };

  potentialAction?: SearchAction;

  keywords?: string[];

  mainEntity?: {
    '@id': string;
  };
}

export interface OrganizationSchema extends BaseSchema {
  '@type': string[];

  logo?: ImageObject;

  image?: ImageObject;

  founder?: Person;

  email?: string;

  telephone?: string;

  address?: Address;

  areaServed?: AreaServed[];

  contactPoint?: ContactPoint;

  knowsAbout?: string[];

  sameAs?: string[];

  keywords?: string[];

  slogan?: string;
}

export interface Audience {
  '@type': 'BusinessAudience';

  audienceType: string;
}

export interface PriceSpecification {
  '@type': 'PriceSpecification';

  priceCurrency: string;

  minPrice: number;

  maxPrice: number;

  valueAddedTaxIncluded?: boolean;
}

export interface OfferSchema extends BaseSchema {
  '@type': 'Offer';

  category?: string;

  priceCurrency: string;

  businessFunction?: string;

  availability?: string;

  seller?: {
    '@id': string;
  };

  itemOffered?: {
    '@id': string;
  };

  eligibleRegion?: {
    '@type': string;
    name: string;
  }[];

  audience?: Audience;

  areaServed?: AreaServed[];

  priceSpecification: PriceSpecification;
}

export interface SpeakableSpecification {
  '@type': 'SpeakableSpecification';

  cssSelector: string[];
}

export interface ItemListSchema {
  '@type': 'ItemList';

  '@id'?: string;

  numberOfItems?: number;

  itemListOrder?: string;

  itemListElement: {
    '@type': 'ListItem';

    position: number;

    name?: string;

    url?: string;

    item?: {
      '@id': string;
    };
  }[];
}

export interface CollectionPageSchema extends BaseSchema {
  '@type': 'CollectionPage';

  isPartOf?: {
    '@type'?: 'WebSite';
    '@id': string;
  };

  about?: {
    '@id': string;
  };

  hasPart?: {
    '@id': string;
  }[];

  mainEntity?: ItemListSchema;
}
