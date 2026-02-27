import { BaseSchema } from './base';

export interface SchemaGraph<T extends BaseSchema> {
  '@context': 'https://schema.org';
  '@graph': T[];
}

export function buildGraph<T extends BaseSchema>(schemas: T[]): SchemaGraph<T> {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
}
