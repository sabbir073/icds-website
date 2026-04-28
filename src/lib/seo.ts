import type { Metadata } from "next";

/**
 * Resolve the canonical site URL. Reads `NEXT_PUBLIC_SITE_URL` from the
 * environment (set in `.env` / `.env.local` / hosting env), strips any
 * trailing slash so concatenation like `${SITE_URL}/about` always works,
 * and falls back to the production domain so SSR never produces a relative
 * `metadataBase`.
 */
function resolveSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://www.icdsbd.com";
  return raw.replace(/\/+$/, "");
}

const RESOLVED_SITE_URL = resolveSiteUrl();

/**
 * Central site configuration. Used by every metadata block, JSON-LD generator,
 * sitemap, and the manifest generator. Update values here to propagate
 * across the entire site.
 */
export const siteConfig = {
  name: "International Commercial Diving Services",
  legalName: "M/S International Commercial Diving Services",
  shortName: "ICDS",
  tagline: "Underwater Survey, Inspection, Marine Repair & Salvage in Bangladesh",
  description:
    "ICDS is Bangladesh's leading Bureau Veritas-certified commercial diving company providing underwater survey, inspection, repair, salvage, hull cleaning, propeller polishing and underwater welding services for ships, ports, bridges and offshore structures.",
  shortDescription:
    "Bureau Veritas-certified commercial diving, underwater survey, inspection, repair and salvage company in Bangladesh.",
  url: RESOLVED_SITE_URL,
  ogImage: "/images/og-image.jpg",
  locale: "en_US",
  language: "en",
  foundingYear: "2020",
  author: "International Commercial Diving Services",
  creator: "ICDS",
  publisher: "International Commercial Diving Services",
  twitterHandle: "@icds_bd",

  contact: {
    primaryPhone: "+880 1813-087877",
    primaryPhoneE164: "+8801813087877",
    secondaryPhone: "+880 1782-526828",
    secondaryPhoneE164: "+8801782526828",
    salesPhone: "+880 1712-087877",
    salesPhoneE164: "+8801712087877",
    primaryEmail: "info@icdsbd.com",
    secondaryEmail: "icdsctg@gmail.com",
    operationsEmail: "icdsoperataion@gmail.com",
  },

  addresses: {
    headOffice: {
      label: "Head Office - Dhaka",
      streetAddress:
        "Omar Shahjahan Tower, 506 Shah Kabir Mazar Road, Azampur Rail Gate, Uttara",
      addressLocality: "Dhaka",
      postalCode: "1230",
      addressRegion: "Dhaka Division",
      addressCountry: "BD",
      latitude: 23.8624,
      longitude: 90.4001,
    },
    chittagongOffice: {
      label: "Chittagong Office",
      streetAddress:
        "IIUC Tower, Holding # 1700/A, 11th Floor, Plot # 9, Agrabad C/A, Sheikh Mujib Road",
      addressLocality: "Chattogram",
      postalCode: "4100",
      addressRegion: "Chittagong Division",
      addressCountry: "BD",
      latitude: 22.3252,
      longitude: 91.8349,
    },
  },

  social: {
    facebook: "https://www.facebook.com/icdsbd",
    linkedin: "https://www.linkedin.com/company/icdsbd",
    twitter: "https://twitter.com/icds_bd",
    youtube: "https://www.youtube.com/@icdsbd",
  },

  /**
   * Brand-level keywords used across every page in addition to page-specific
   * keywords. Researched for 2026 commercial diving and marine services
   * search intent in Bangladesh and the broader Bay of Bengal region.
   */
  keywords: [
    "commercial diving services Bangladesh",
    "underwater survey Bangladesh",
    "underwater inspection Bangladesh",
    "marine repair Bangladesh",
    "ship hull cleaning",
    "propeller polishing",
    "underwater welding Bangladesh",
    "salvage operations Bangladesh",
    "Bureau Veritas certified diving",
    "IMCA certified divers",
    "ROV inspection Bangladesh",
    "in-water survey ship",
    "diving company Chittagong",
    "diving company Dhaka",
    "marine services Chattogram",
    "underwater video inspection",
    "underwater photogrammetry",
    "subsea pipeline inspection",
    "bridge underwater inspection",
    "vessel dry dock alternative",
    "hull biofouling removal",
    "anti-fouling diving",
    "dive support services Bangladesh",
    "marine equipment supply Bangladesh",
    "geo bag setting",
    "channel dredging support",
    "buoy maintenance",
    "Bay of Bengal diving",
    "Chittagong port diving services",
    "Mongla port diving services",
  ],
} as const;

export const SITE_URL = siteConfig.url;

/**
 * Build a fully-qualified absolute URL from a path. Accepts absolute URLs as-is.
 */
export function absoluteUrl(path: string = ""): string {
  if (!path) return SITE_URL;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path}`;
}

interface BuildMetadataInput {
  title: string;
  description: string;
  keywords?: readonly string[] | string[];
  path?: string;
  image?: string;
  imageAlt?: string;
  ogType?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

/**
 * Build a page-level Metadata object. Always returns canonical URL,
 * OpenGraph and Twitter cards, robots directives and consistent keyword set.
 */
export function buildMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image,
  imageAlt,
  ogType = "website",
  publishedTime,
  modifiedTime,
  noindex = false,
}: BuildMetadataInput): Metadata {
  const fullUrl = absoluteUrl(path);
  const ogImage = absoluteUrl(image || siteConfig.ogImage);
  const finalAlt = imageAlt || `${title} — ${siteConfig.name}`;

  // Merge brand + page keywords, dedupe and cap at 25 (best practice)
  const merged = Array.from(new Set([...(keywords as string[]), ...siteConfig.keywords])).slice(0, 25);

  const robots = noindex
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1 as const,
          "max-image-preview": "large" as const,
          "max-snippet": -1 as const,
        },
      };

  return {
    title,
    description,
    keywords: merged,
    authors: [{ name: siteConfig.author, url: siteConfig.url }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: fullUrl,
      languages: {
        "en-US": fullUrl,
        "en-BD": fullUrl,
        "x-default": fullUrl,
      },
    },
    applicationName: siteConfig.name,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    openGraph: {
      type: ogType,
      locale: siteConfig.locale,
      alternateLocale: ["en_GB", "bn_BD"],
      url: fullUrl,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          secureUrl: ogImage,
          width: 1200,
          height: 630,
          alt: finalAlt,
          type: "image/jpeg",
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: ogImage, alt: finalAlt }],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    robots,
    category: "business",
    other: {
      "geo.region": "BD",
      "geo.placename": "Chattogram, Bangladesh",
      "geo.position": "22.3252;91.8349",
      "ICBM": "22.3252, 91.8349",
      "rating": "general",
      "distribution": "global",
      "revisit-after": "7 days",
    },
  };
}

// =============================================================================
// JSON-LD STRUCTURED DATA
// =============================================================================

interface OfficeAddress {
  label: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressRegion: string;
  addressCountry: string;
  latitude: number;
  longitude: number;
}

const baseAddressSchema = (addr: OfficeAddress) => ({
  "@type": "PostalAddress",
  streetAddress: addr.streetAddress,
  addressLocality: addr.addressLocality,
  postalCode: addr.postalCode,
  addressRegion: addr.addressRegion,
  addressCountry: addr.addressCountry,
});

const allAddresses = [
  baseAddressSchema(siteConfig.addresses.headOffice),
  baseAddressSchema(siteConfig.addresses.chittagongOffice),
];

const contactPoints = [
  {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.primaryPhoneE164,
    contactType: "customer service",
    email: siteConfig.contact.primaryEmail,
    areaServed: "BD",
    availableLanguage: ["English", "Bengali"],
    contactOption: "TollFree",
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  },
  {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.salesPhoneE164,
    contactType: "sales",
    email: siteConfig.contact.primaryEmail,
    areaServed: "BD",
    availableLanguage: ["English", "Bengali"],
  },
  {
    "@type": "ContactPoint",
    telephone: siteConfig.contact.primaryPhoneE164,
    contactType: "emergency",
    email: siteConfig.contact.operationsEmail,
    areaServed: ["BD", "IN", "MM", "LK"],
    availableLanguage: ["English", "Bengali"],
  },
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/favicon-512x512.png"),
      width: 512,
      height: 512,
    },
    image: absoluteUrl("/images/og-image.jpg"),
    description: siteConfig.description,
    slogan: "We are your business partner",
    foundingDate: siteConfig.foundingYear,
    foundingLocation: {
      "@type": "Place",
      name: "Bangladesh",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 7,
      maxValue: 25,
    },
    knowsAbout: [
      "Commercial Diving",
      "Underwater Survey",
      "Underwater Inspection",
      "Underwater Welding",
      "Hull Cleaning",
      "Propeller Polishing",
      "Salvage Operations",
      "Marine Repair",
      "ROV Inspection",
      "Subsea Pipeline Inspection",
    ],
    address: allAddresses,
    contactPoint: contactPoints,
    email: siteConfig.contact.primaryEmail,
    telephone: siteConfig.contact.primaryPhoneE164,
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.youtube,
    ],
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Place", name: "Bay of Bengal" },
    ],
    award: [
      "Bureau Veritas Certified Service Supplier (Valid until January 2028)",
      "IHI-SMCC Joint Venture — Zero-incident Bangabandhu Railway Bridge underwater welding",
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: "Bureau Veritas Marine & Offshore Service Supplier Certificate",
      recognizedBy: { "@type": "Organization", name: "Bureau Veritas" },
      validFor: "P3Y",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: absoluteUrl("/images/og-image.jpg"),
    logo: absoluteUrl("/favicon-512x512.png"),
    url: siteConfig.url,
    telephone: siteConfig.contact.primaryPhoneE164,
    email: siteConfig.contact.primaryEmail,
    priceRange: "$$",
    currenciesAccepted: "BDT, USD",
    paymentAccepted: "Bank Transfer, Letter of Credit, Cash",
    address: baseAddressSchema(siteConfig.addresses.chittagongOffice),
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.addresses.chittagongOffice.latitude,
      longitude: siteConfig.addresses.chittagongOffice.longitude,
    },
    location: allAddresses.map((address, index) => ({
      "@type": "Place",
      address,
      ...(index === 0
        ? {
            geo: {
              "@type": "GeoCoordinates",
              latitude: siteConfig.addresses.headOffice.latitude,
              longitude: siteConfig.addresses.headOffice.longitude,
            },
          }
        : {
            geo: {
              "@type": "GeoCoordinates",
              latitude: siteConfig.addresses.chittagongOffice.latitude,
              longitude: siteConfig.addresses.chittagongOffice.longitude,
            },
          }),
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "City", name: "Chittagong" },
      { "@type": "City", name: "Dhaka" },
      { "@type": "City", name: "Mongla" },
      { "@type": "Place", name: "Bay of Bengal" },
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 22.3569,
        longitude: 91.7832,
      },
      geoRadius: 800000,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "62",
      reviewCount: "62",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        author: { "@type": "Organization", name: "IHI-SMCC Joint Venture" },
        reviewBody:
          "Underwater welding work on the Bangabandhu Sheikh Mujib Railway Bridge was completed as per specification and instruction without any accident or non-conformance.",
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: ["en", "en-BD", "bn-BD"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateWebPageSchema(input: {
  url: string;
  name: string;
  description: string;
  breadcrumbId?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage" | "ItemPage";
}) {
  const {
    url,
    name,
    description,
    breadcrumbId,
    image,
    datePublished,
    dateModified,
    type = "WebPage",
  } = input;
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(url)}#webpage`,
    url: absoluteUrl(url),
    name,
    description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(image || siteConfig.ogImage),
    },
    inLanguage: "en-US",
    publisher: { "@id": `${siteConfig.url}/#organization` },
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(items[items.length - 1]?.url ?? "/")}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

interface ServiceItem {
  name: string;
  description: string;
  url?: string;
  image?: string;
  serviceType?: string;
}

export function generateServiceCatalogSchema(services: ServiceItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Diving & Marine Services",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Place", name: "Bay of Bengal" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Shipping companies, port authorities, government agencies, oil & gas operators",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marine Services Catalog",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          serviceType: service.serviceType || service.name,
          provider: { "@id": `${siteConfig.url}/#organization` },
          ...(service.url ? { url: absoluteUrl(service.url) } : {}),
          ...(service.image ? { image: absoluteUrl(service.image) } : {}),
        },
      })),
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  email?: string;
  telephone?: string;
  knowsAbout?: string[];
  alumniOf?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    ...(person.image ? { image: absoluteUrl(person.image) } : {}),
    ...(person.email ? { email: person.email } : {}),
    ...(person.telephone ? { telephone: person.telephone } : {}),
    ...(person.knowsAbout ? { knowsAbout: person.knowsAbout } : {}),
    ...(person.alumniOf
      ? {
          alumniOf: person.alumniOf.map((name) => ({ "@type": "Organization", name })),
        }
      : {}),
    worksFor: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function generateItemListSchema<T>({
  url,
  name,
  description,
  items,
  toListItem,
}: {
  url: string;
  name: string;
  description?: string;
  items: T[];
  toListItem: (item: T, index: number) => Record<string, unknown>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${absoluteUrl(url)}#itemlist`,
    name,
    ...(description ? { description } : {}),
    numberOfItems: items.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      ...toListItem(item, index),
    })),
  };
}

export function generateProjectSchema(project: {
  title: string;
  description: string;
  client?: string;
  location?: string;
  year?: string;
  image?: string;
  url?: string;
}) {
  return {
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    ...(project.image ? { image: absoluteUrl(project.image) } : {}),
    ...(project.url ? { url: absoluteUrl(project.url) } : {}),
    ...(project.year ? { dateCreated: project.year } : {}),
    creator: { "@id": `${siteConfig.url}/#organization` },
    locationCreated: project.location
      ? { "@type": "Place", name: project.location }
      : undefined,
    ...(project.client
      ? { sourceOrganization: { "@type": "Organization", name: project.client } }
      : {}),
  };
}

/**
 * Helper to inline JSON-LD as a hashed React-safe string. Safer than passing
 * arbitrary objects through dangerouslySetInnerHTML since it strips the
 * problematic `</` sequence.
 */
export function jsonLdString(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
