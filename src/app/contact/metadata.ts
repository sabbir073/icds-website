import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact ICDS — Free Quote for Marine & Diving Services in Bangladesh",
  description:
    "Contact International Commercial Diving Services for a free quote on underwater survey, inspection, repair, salvage and marine equipment supply in Bangladesh. Offices in Dhaka and Chittagong. 24/7 emergency response. Call +880 1813-087877 or email info@icdsbd.com.",
  path: "/contact",
  image: "/images/og-contact.jpg",
  imageAlt: "Contact ICDS — commercial diving and marine services Bangladesh",
  keywords: [
    "contact ICDS Bangladesh",
    "marine services quote Bangladesh",
    "diving services contact Chittagong",
    "underwater services request quote",
    "commercial diving inquiry Bangladesh",
    "marine repair quote Dhaka",
    "Chittagong diving contact",
    "Dhaka marine services contact",
    "24/7 marine emergency Bangladesh",
    "emergency diving services Bangladesh",
    "salvage emergency contact",
    "ICDS phone number",
    "ICDS email address",
  ],
});
