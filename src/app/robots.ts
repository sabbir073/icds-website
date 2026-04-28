import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

/**
 * Dynamic robots.txt — pulls the host from siteConfig (driven by
 * NEXT_PUBLIC_SITE_URL) so the sitemap and host directives always match
 * the deployed environment.
 */
export default function robots(): MetadataRoute.Robots {
  const base = siteConfig.url;

  return {
    rules: [
      // Default rules — allow everything except internals
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/admin/",
          "/*?*sort=",
          "/*?*filter=",
          "/*?*utm_",
        ],
      },

      // Major search engines — explicit allow
      { userAgent: "Googlebot", allow: ["/"], disallow: ["/api/"] },
      { userAgent: "Googlebot-Image", allow: ["/"] },
      { userAgent: "Googlebot-News", allow: ["/"] },
      { userAgent: "Bingbot", allow: ["/"], disallow: ["/api/"] },
      { userAgent: "Slurp", allow: ["/"] },
      { userAgent: "DuckDuckBot", allow: ["/"] },
      { userAgent: "Baiduspider", allow: ["/"] },
      { userAgent: "YandexBot", allow: ["/"] },
      { userAgent: "Applebot", allow: ["/"] },

      // Social crawlers
      { userAgent: "facebookexternalhit", allow: ["/"] },
      { userAgent: "Twitterbot", allow: ["/"] },
      { userAgent: "LinkedInBot", allow: ["/"] },

      // AI / LLM crawlers — allowed for content discoverability
      { userAgent: "GPTBot", allow: ["/"] },
      { userAgent: "ChatGPT-User", allow: ["/"] },
      { userAgent: "PerplexityBot", allow: ["/"] },
      { userAgent: "Claude-Web", allow: ["/"] },
      { userAgent: "ClaudeBot", allow: ["/"] },
      { userAgent: "Google-Extended", allow: ["/"] },
      { userAgent: "anthropic-ai", allow: ["/"] },

      // Block well-known scraper / SEO-harvesting bots
      { userAgent: "AhrefsBot", disallow: ["/"] },
      { userAgent: "SemrushBot", disallow: ["/"] },
      { userAgent: "MJ12bot", disallow: ["/"] },
      { userAgent: "DotBot", disallow: ["/"] },
      { userAgent: "PetalBot", disallow: ["/"] },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
