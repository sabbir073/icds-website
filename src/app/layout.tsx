import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  siteConfig,
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  jsonLdString,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#059669" },
    { media: "(prefers-color-scheme: dark)", color: "#047857" },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Commercial Diving, Underwater Survey & Marine Repair in Bangladesh`,
    template: `%s | ${siteConfig.shortName} — Commercial Diving Bangladesh`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords as unknown as string[],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "en-BD": siteConfig.url,
      "x-default": siteConfig.url,
    },
    types: {
      "application/rss+xml": `${siteConfig.url}/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    alternateLocale: ["en_GB", "bn_BD"],
    url: siteConfig.url,
    title: `${siteConfig.name} | Commercial Diving, Underwater Survey & Marine Repair in Bangladesh`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        secureUrl: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Bureau Veritas-certified commercial diving services in Bangladesh`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Commercial Diving Bangladesh`,
    description: siteConfig.shortDescription,
    images: [`${siteConfig.url}/images/og-image.jpg`],
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon-512x512.png",
        color: "#059669",
      },
    ],
  },
  manifest: "/site.webmanifest",
  category: "Business — Marine Services",
  classification: "Commercial Diving, Underwater Survey & Inspection, Marine Repair",
  verification: {
    // Replace with real verification IDs when available.
    google: "TODO-google-site-verification",
    yandex: "TODO-yandex-verification",
    other: {
      "msvalidate.01": "TODO-bing-verification",
      "facebook-domain-verification": "TODO-facebook-verification",
    },
  },
  other: {
    "geo.region": "BD",
    "geo.placename": "Chattogram, Bangladesh",
    "geo.position": "22.3252;91.8349",
    "ICBM": "22.3252, 91.8349",
    "rating": "general",
    "distribution": "global",
    "revisit-after": "7 days",
    "language": "English",
    "audience": "Shipping companies, port authorities, oil & gas operators, government agencies",
    "coverage": "Worldwide",
    "target": "all",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": siteConfig.shortName,
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#059669",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="alternate" type="application/rss+xml" title={`${siteConfig.name} RSS`} href="/rss.xml" />
        <meta name="format-detection" content="telephone=yes, address=yes, email=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdString(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-emerald-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
