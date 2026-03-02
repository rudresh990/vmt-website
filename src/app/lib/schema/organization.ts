import {
  BRAND_DESC,
  BRAND_LOGO,
  CONTACT_POINT,
  KNOWS,
  NAME,
  ORGANIZATION_ID,
  PERSON,
  SITE_URL,
  SOCIAL_LINKS,
  LOCAL_ADDRESS,
} from './config';
import { OrganizationSchema } from './types';

export function generateOrganization(): OrganizationSchema {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORGANIZATION_ID,
    name: NAME,
    url: SITE_URL,
    logo: BRAND_LOGO,
    founder: PERSON,
    description: BRAND_DESC,
    contactPoint: CONTACT_POINT,
    knowsAbout: KNOWS,
    sameAs: SOCIAL_LINKS,
    address: LOCAL_ADDRESS,
  };
}
