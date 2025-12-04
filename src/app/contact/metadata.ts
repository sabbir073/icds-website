import { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Quote",
  description:
    "Contact ICDS for commercial diving and marine services in Bangladesh. Request a free quote for underwater survey, inspection, repair, and salvage operations. 24/7 emergency support available.",
  keywords: [
    "contact ICDS",
    "marine services quote",
    "diving services contact",
    "underwater services Bangladesh",
    "commercial diving inquiry",
    "marine repair quote",
    "Chittagong diving services",
    "Dhaka marine services",
    "24/7 marine support",
    "emergency diving services",
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact ICDS - Get a Free Quote for Marine Services",
    description:
      "Contact our expert team for underwater survey, inspection, repair, and salvage services. Offices in Dhaka and Chittagong.",
    url: `${siteConfig.url}/contact`,
    images: [
      {
        url: `${siteConfig.url}/images/og-contact.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact ICDS",
      },
    ],
  },
};
