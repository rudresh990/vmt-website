import {
  BRAND_DESC,
  BRAND_LOGO,
  CONTACT_POINT,
  KNOWS,
  LEGAL_NAME,
  NAME,
  ORGANIZATION_ID,
  PERSON,
  SITE_URL,
  SOCIAL_LINKS,
} from './config';
import { OrganizationSchema } from './types';

export function generateOrganization(): OrganizationSchema {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    logo: BRAND_LOGO,
    founder: PERSON,
    description: BRAND_DESC,
    contactPoint: CONTACT_POINT,
    knowsAbout: KNOWS,
    sameAs: SOCIAL_LINKS,
  };
}
