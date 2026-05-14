export interface EntityReference {
  '@id': string;
}

export interface TypedEntityReference extends EntityReference {
  '@type'?: string;
}

export interface BaseSchema {
  '@id'?: string;

  '@type': string | string[];

  url?: string;

  name?: string;

  description?: string;

  inLanguage?: string;
}
