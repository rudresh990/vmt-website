import { SITE_URL } from '../config';

export function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '';
  }

  return pathname.replace(/\/$/, '');
}

export function buildSchemaUrl(pathname: string): string {
  return `${SITE_URL}${normalizePath(pathname)}`;
}

export function cleanSchema<T>(data: T): T {
  return JSON.parse(JSON.stringify(data));
}

export function formatSlugToTitle(slug: string): string {
  return (
    slug
      .replace(/^\/|\/$/g, '')
      .split('/')
      .pop()
      ?.replace(/[-_]/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase()) || ''
  );
}

export function createWebpageId(pathname: string): string {
  return `${buildSchemaUrl(pathname)}#webpage`;
}

export function createServiceId(pathname: string): string {
  return `${buildSchemaUrl(pathname)}#service`;
}

export function createFAQId(pathname: string): string {
  return `${buildSchemaUrl(pathname)}#faq`;
}

export function createOfferId(pathname: string): string {
  return `${buildSchemaUrl(pathname)}#offer`;
}

export function createBreadcrumbId(pathname: string): string {
  return `${buildSchemaUrl(pathname)}#breadcrumb`;
}
