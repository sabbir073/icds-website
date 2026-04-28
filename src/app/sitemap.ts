import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

/**
 * Generates a fully-formed sitemap.xml. Every entry includes lastModified,
 * change frequency and a priority that reflects its commercial importance
 * for the business.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [`${baseUrl}/images/og-home.jpg`, `${baseUrl}/images/hero-1.jpg`],
      alternates: {
        languages: {
          "en-US": baseUrl,
          "en-BD": baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [`${baseUrl}/images/og-about.jpg`, `${baseUrl}/images/otheer-1.jpg`],
      alternates: {
        languages: {
          "en-US": `${baseUrl}/about`,
          "en-BD": `${baseUrl}/about`,
        },
      },
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
      images: [`${baseUrl}/images/og-services.jpg`],
      alternates: {
        languages: {
          "en-US": `${baseUrl}/services`,
          "en-BD": `${baseUrl}/services`,
        },
      },
    },
    {
      url: `${baseUrl}/team`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/images/og-team.jpg`],
      alternates: {
        languages: {
          "en-US": `${baseUrl}/team`,
          "en-BD": `${baseUrl}/team`,
        },
      },
    },
    {
      url: `${baseUrl}/equipment`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
      images: [`${baseUrl}/images/og-equipment.jpg`, `${baseUrl}/images/other-4.jpg`],
      alternates: {
        languages: {
          "en-US": `${baseUrl}/equipment`,
          "en-BD": `${baseUrl}/equipment`,
        },
      },
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [
        `${baseUrl}/images/og-projects.jpg`,
        `${baseUrl}/images/other-2.jpg`,
        `${baseUrl}/images/other-3.jpg`,
      ],
      alternates: {
        languages: {
          "en-US": `${baseUrl}/projects`,
          "en-BD": `${baseUrl}/projects`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
      images: [`${baseUrl}/images/og-contact.jpg`],
      alternates: {
        languages: {
          "en-US": `${baseUrl}/contact`,
          "en-BD": `${baseUrl}/contact`,
        },
      },
    },
  ];

  return routes;
}
