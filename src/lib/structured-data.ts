import { SITE_CONFIG } from "@/config/site";

function isValidUrl(url: string | null | undefined): url is string {
  return typeof url === "string" && url.trim().length > 0;
}

export function generateOrganizationSchema() {
  const sameAs = Object.values(SITE_CONFIG.social).filter(isValidUrl);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/branding/logo.svg`,
    description: SITE_CONFIG.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.location.city,
      addressCountry: "KE",
    },
    ...(sameAs.length > 0 && { sameAs }),
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONFIG.contact.email,
      telephone: SITE_CONFIG.contact.phoneRaw,
      contactType: "customer service",
      areaServed: "KE",
    },
  };
}

// --- ADDED MISSING FUNCTION ---
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Founder Name", // TODO: Replace with actual founder name
    jobTitle: "Founder & Lead Developer", // TODO: Replace with actual title
    url: `${SITE_CONFIG.url}/about`,
    worksFor: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    // Uncomment and map if you add founder-specific social links to SITE_CONFIG
    // sameAs: Object.values(SITE_CONFIG.social).filter(isValidUrl), 
  };
}
// --------------------------------

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: "Full-Stack Software Development and Custom Business Systems",
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

export function generateWebPageSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${SITE_CONFIG.url}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

export function generateProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    areaServed: {
      "@type": "Place",
      name: "Nairobi, Kenya",
    },
    serviceType: "Full-Stack Software Development",
    knowsAbout: [
      "Business Management Systems",
      "Custom Web Applications",
      "SaaS Development",
      "Business Automation",
      "API Integrations",
    ],
  };
}