import { SITE_CONFIG } from "./site";

export const COMPANY = {
  brand: {
    name: SITE_CONFIG.name,
    tagline: SITE_CONFIG.description,
  },
  registeredBusiness: {
    name: SITE_CONFIG.legalName,
  },
  website: SITE_CONFIG.url,
  contact: {
    email: SITE_CONFIG.contact.email,
    phone: SITE_CONFIG.contact.phone,
    phoneRaw: SITE_CONFIG.contact.phoneRaw,
    whatsapp: SITE_CONFIG.contact.whatsapp,
    whatsappRaw: SITE_CONFIG.contact.whatsappRaw,
    secondaryPhone: SITE_CONFIG.contact.secondaryPhone,
  },
  location: {
    city: SITE_CONFIG.location.city,
    country: SITE_CONFIG.location.country,
    globalPositioning: SITE_CONFIG.location.globalPositioning,
  },
  social: SITE_CONFIG.social,
} as const;