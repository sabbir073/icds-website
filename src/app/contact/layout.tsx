import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
  jsonLdString,
  siteConfig,
  absoluteUrl,
} from "@/lib/seo";

export { metadata } from "./metadata";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "/" },
  { name: "Contact", url: "/contact" },
]);

const contactPageSchema = generateWebPageSchema({
  url: "/contact",
  name: "Contact ICDS — Marine & Diving Services in Bangladesh",
  description:
    "Get in touch with the International Commercial Diving Services team. Offices in Dhaka and Chittagong. 24/7 emergency response.",
  breadcrumbId: breadcrumbSchema["@id"],
  image: "/images/og-contact.jpg",
  type: "ContactPage",
});

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${absoluteUrl("/contact")}#contactpage`,
  url: absoluteUrl("/contact"),
  mainEntity: {
    "@id": `${siteConfig.url}/#organization`,
  },
  potentialAction: {
    "@type": "CommunicateAction",
    target: [
      `mailto:${siteConfig.contact.primaryEmail}`,
      `tel:${siteConfig.contact.primaryPhoneE164}`,
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(contactPointSchema) }}
      />
      {children}
    </>
  );
}
