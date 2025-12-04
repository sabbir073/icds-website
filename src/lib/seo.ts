import { Metadata } from "next";

export const siteConfig = {
  name: "International Commercial Diving Services",
  shortName: "ICDS",
  description:
    "Leading marine repairing and underwater survey/inspection company in Bangladesh. Expert commercial diving services, underwater repairs, salvage operations, and marine equipment supply since 2020.",
  url: "https://icds-bd.com",
  ogImage: "/images/og-image.jpg",
  keywords: [
    "commercial diving services",
    "underwater survey",
    "underwater inspection",
    "marine repair Bangladesh",
    "underwater repair",
    "salvage operations",
    "hull cleaning",
    "propeller polishing",
    "underwater welding",
    "marine services Bangladesh",
    "diving company Bangladesh",
    "ship repair",
    "vessel inspection",
    "Bureau Veritas certified",
    "IMCA certified divers",
    "underwater video inspection",
    "marine equipment supply",
    "Chittagong diving services",
    "Dhaka marine services",
    "Bangladesh maritime",
  ],
  author: "International Commercial Diving Services",
  creator: "ICDS",
  phone: "+880 1813-087877",
  email: "iaboron@gmail.com",
  addresses: {
    chittagong: "C/O Hotel Upoma, Badamtoli, Sadarghat, Chattogram-4000, Bangladesh",
    dhaka: "119/A, Nawab Abdul Gani Road, Narinda, Dhaka-1100, Bangladesh",
  },
  social: {
    facebook: "https://facebook.com/icds",
    linkedin: "https://linkedin.com/company/icds",
  },
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = "",
  image,
}: {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  image?: string;
}): Metadata {
  const fullTitle = title === "Home"
    ? `${siteConfig.name} | Commercial Diving & Marine Services in Bangladesh`
    : `${title} | ${siteConfig.shortName} - ${siteConfig.name}`;

  const fullUrl = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@icds_bd",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google-site-verification-code",
    },
  };
}

// JSON-LD Structured Data
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: siteConfig.description,
    foundingDate: "2020",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "C/O Hotel Upoma, Badamtoli, Sadarghat",
        addressLocality: "Chattogram",
        postalCode: "4000",
        addressCountry: "BD",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "119/A, Nawab Abdul Gani Road, Narinda",
        addressLocality: "Dhaka",
        postalCode: "1100",
        addressCountry: "BD",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+880-1813-087877",
        contactType: "customer service",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+880-1712-087877",
        contactType: "sales",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
      },
    ],
    email: siteConfig.email,
    sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin],
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 22.3569,
        longitude: 91.7832,
      },
      geoRadius: "500000",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/images/logo.png`,
    url: siteConfig.url,
    telephone: "+880-1813-087877",
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/O Hotel Upoma, Badamtoli, Sadarghat",
      addressLocality: "Chattogram",
      postalCode: "4000",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.3252,
      longitude: 91.8349,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
  };
}

export function generateServiceSchema(services: { name: string; description: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Diving Services",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marine Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
        position: index + 1,
      })),
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
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
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    image: person.image,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}
