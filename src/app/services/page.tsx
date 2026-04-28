import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import {
  Camera,
  Wrench,
  Droplets,
  Layers,
  Search,
  Anchor,
  HelpCircle,
  Ship,
  Truck,
  CheckCircle,
} from "lucide-react";
import {
  buildMetadata,
  generateBreadcrumbSchema,
  generateServiceCatalogSchema,
  generateWebPageSchema,
  generateFAQSchema,
  jsonLdString,
} from "@/lib/seo";

const TITLE =
  "Underwater Survey, Repair, Welding & Salvage Services in Bangladesh";

const DESCRIPTION =
  "Bureau Veritas-approved commercial diving services in Bangladesh: underwater survey & inspection, class-approved underwater welding, hull cleaning, propeller polishing, salvage operations, channel setting, buoy maintenance, ROV inspection and full marine equipment supply.";

export const metadata: Metadata = buildMetadata({
  title: "Our Services — Underwater Survey, Repair, Welding & Salvage",
  description: DESCRIPTION,
  path: "/services",
  image: "/images/og-services.jpg",
  imageAlt: "ICDS marine services — underwater survey, welding and salvage in Bangladesh",
  keywords: [
    "underwater survey Bangladesh",
    "underwater inspection services",
    "underwater repair contractor",
    "ship hull cleaning Chittagong",
    "propeller polishing in-water",
    "salvage operations Bangladesh",
    "class approved underwater welding",
    "ROV inspection Bay of Bengal",
    "subsea pipeline inspection",
    "channel setting Bangladesh",
    "geo bag setting service",
    "buoy maintenance Bangladesh",
    "fouled anchor removal",
    "marine equipment supply Bangladesh",
    "in-water survey class society",
    "scuba diving commercial Bangladesh",
  ],
});

const breadcrumbData = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
];

const services = [
  {
    icon: Camera,
    title: "Underwater Survey & Inspection",
    description:
      "Comprehensive underwater survey & inspection with video graphic evidence by well-qualified and trained divers, supervisors & marine engineers. Performed under class surveyor attendance for Bureau Veritas, Lloyd's Register, ABS, DNV and other classification societies.",
    features: [
      "Video Graphic Evidence",
      "Class Surveyor Attendance",
      "Detailed Technical Reports",
      "CCTV Inspection",
      "Hull Condition Assessment",
      "Propeller Inspection",
    ],
  },
  {
    icon: Wrench,
    title: "Underwater Repair Services",
    description:
      "Expert underwater repair of ship's hull, propeller, gas & oil pipe, and submersed cables including class-approved welding, cutting & propeller polishing for vessels at anchor or in port without dry-docking.",
    features: [
      "Class Approved Welding",
      "Propeller Polishing",
      "Hull Plate Repairs",
      "Cable Repairs",
      "Pipe Repairs",
      "Structural Repairs",
    ],
  },
  {
    icon: Droplets,
    title: "Underwater Cleaning",
    description:
      "Professional underwater cleaning services for ship's hull, propeller, sea chests and pipelines using manual scraping, brush-kart and high-pressure hydraulic water-jet cleaning to remove biofouling and improve fuel efficiency.",
    features: [
      "Hull Cleaning",
      "High-Pressure Jet Cleaning",
      "Propeller Cleaning",
      "Manual Scraping",
      "Brush Kart Cleaning",
      "Biofouling Removal",
    ],
  },
  {
    icon: Layers,
    title: "Channel Setting & Construction",
    description:
      "Specialised waterway construction services including geo-bag setting, sand-bag placement, CC-block installation, batch recognition and water survey operations for river training, bank protection and infrastructure projects.",
    features: [
      "Geo Bag Setting",
      "Sand Bag Placing",
      "CC Block Installation",
      "Batch Recognition",
      "Water Survey",
      "Bank Protection",
    ],
  },
  {
    icon: Search,
    title: "Salvage & Searching Operations",
    description:
      "Complete underwater video soil testing, search & salvage work, scuba diving, dock diving and dock preparation services. We support post-incident recovery, lost-cargo location and submerged-object recovery anywhere in Bangladesh waters.",
    features: [
      "Salvage Operations",
      "Underwater Soil Testing",
      "Search & Recovery",
      "Scuba Diving",
      "Dock Diving",
      "Dock Preparation",
    ],
  },
  {
    icon: Anchor,
    title: "Buoy Services",
    description:
      "Comprehensive buoy maintenance, buoy laying & re-positioning, mooring inspection and the clearing and removal of fouled anchors for ports, harbours and offshore mooring systems.",
    features: [
      "Buoy Maintenance",
      "Buoy Laying",
      "Re-positioning",
      "Anchor Clearing",
      "Fouled Anchor Removal",
      "Mooring Services",
    ],
  },
  {
    icon: HelpCircle,
    title: "Technical Advisory",
    description:
      "Expert technical advisory for in-water survey, inspection, plotting, positioning of pipe, cable laying, in-water gas cutting, welding and debris removing — ideal for project planning, risk assessment and feasibility studies.",
    features: [
      "Expert Consultation",
      "Technical Reports",
      "Project Planning",
      "Safety Advisory",
      "Buoy Positioning",
      "Debris Removal Planning",
    ],
  },
  {
    icon: Ship,
    title: "Salvage & Towing",
    description:
      "Any kind of salvage operation, towing arrangements and preparation of technical reports for marine incidents — including emergency response, wreck removal and vessel recovery throughout Bangladesh's rivers and coastal waters.",
    features: [
      "Salvage Operations",
      "Towing Arrangements",
      "Technical Reports",
      "Emergency Response",
      "Wreck Removal",
      "Vessel Recovery",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Equipment",
    description:
      "Arrangement of tugs, barges, cranes, excavators, payloaders, dump trucks and complete marine logistics support for projects of any size, ensuring on-time mobilisation across Bangladesh.",
    features: [
      "Tug Arrangement",
      "Barge Services",
      "Crane Services",
      "Excavators",
      "Payloaders",
      "Full Logistics Support",
    ],
  },
];

const servicesForSchema = services.map((s) => ({
  name: s.title,
  description: s.description,
  url: "/services",
  image: "/images/og-services.jpg",
}));

const servicesFaqs = [
  {
    question: "Do you provide class-approved underwater welding in Bangladesh?",
    answer:
      "Yes. ICDS performs class-approved underwater welding using qualified SMAW welders certified for shielded-metal-arc welding in 3G position. Our welds on the Bangabandhu Sheikh Mujib Railway Bridge were completed at depths up to 14 m without a single non-conformance.",
  },
  {
    question: "How quickly can ICDS mobilise a diving team for an emergency?",
    answer:
      "We maintain 24/7 emergency response capability from both our Dhaka and Chittagong offices. Standard mobilisation time within Chittagong Port is under 2 hours; nationwide mobilisation including barges and support vessels is typically 6–24 hours depending on location and scope.",
  },
  {
    question: "Can you perform an in-water survey accepted by Bureau Veritas, Lloyd's, ABS or DNV?",
    answer:
      "Yes. As an officially approved Bureau Veritas Service Supplier we deliver in-water surveys with HD video graphic evidence under class-surveyor attendance, suitable for credit by Bureau Veritas, Lloyd's Register, ABS, DNV, RINA, NK and IRS.",
  },
  {
    question: "Do you offer hull cleaning that complies with biofouling regulations?",
    answer:
      "Yes. Our brush-kart, manual-scraping and high-pressure hydraulic jet cleaning techniques are aligned with IMO 2023 biofouling guidelines, with proper waste capture and biosecurity protocols where required by port state authorities.",
  },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);
  const webPageSchema = generateWebPageSchema({
    url: "/services",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbId: breadcrumbSchema["@id"],
    image: "/images/og-services.jpg",
    type: "CollectionPage",
  });
  const serviceSchema = generateServiceCatalogSchema(servicesForSchema);
  const faqSchema = generateFAQSchema(servicesFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString(faqSchema) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen">
        <PageHeader
          title="Our Marine Services"
          subtitle="Bureau Veritas-approved underwater survey, inspection, repair, welding and salvage solutions across Bangladesh"
          breadcrumb="Services"
          backgroundImage="/images/other-2.jpg"
        />

        {/* Services List */}
        <section aria-labelledby="services-list-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                What We Offer
              </span>
              <h2
                id="services-list-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
              >
                Our Core Marine Services
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We deliver services that give you leverage — from class-approved underwater
                surveys to full salvage operations, ICDS is your complete commercial diving
                partner in Bangladesh.
              </p>
            </div>

            <div className="space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={index}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                    aria-labelledby={`service-${index}-heading`}
                  >
                    <div className={`${!isEven ? "lg:order-2" : ""}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-emerald-600" aria-hidden="true" />
                        </div>
                        <h3
                          id={`service-${index}-heading`}
                          className="text-2xl font-bold text-gray-900"
                        >
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center gap-2 text-gray-700"
                          >
                            <CheckCircle
                              className="w-4 h-4 text-emerald-500 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${!isEven ? "lg:order-1" : ""}`}>
                      <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                        <Icon className="w-16 h-16 mb-4 opacity-80" aria-hidden="true" />
                        <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                        <p className="text-emerald-100 text-sm">
                          Professional services with qualified personnel and modern equipment.
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section aria-labelledby="additional-services-heading" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                id="additional-services-heading"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                Additional Specialised Services
              </h2>
              <p className="text-gray-600">
                Complementary capabilities that round out our commercial diving offering.
              </p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Ship's Hull Cleaning",
                "Propeller Repair & Polishing",
                "Cleared & Removing of Fouled Anchor",
                "Underwater Welding (Class Approved)",
                "Hydraulic Jet Cleaning",
                "Pipe Laying & Inspection",
                "Dock Preparation & Inspection",
                "Under Water Video Soil Testing",
                "Scuba Diving Services",
              ].map((service, index) => (
                <li
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center gap-4"
                >
                  <div
                    className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-gray-800 font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="services-faq-heading" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Service FAQ
              </span>
              <h2
                id="services-faq-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-2"
              >
                Service Questions, Answered
              </h2>
            </div>
            <div className="space-y-4">
              {servicesFaqs.map((faq, index) => (
                <details key={index} className="group bg-gray-50 rounded-xl p-6">
                  <summary className="font-semibold text-gray-900 cursor-pointer">
                    {faq.question}
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          aria-labelledby="services-cta-heading"
          className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 id="services-cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-emerald-100 text-lg mb-8">
              Contact us today for a free consultation and quote for your marine service needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:+8801813087877"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                aria-label="Call ICDS at +880 1813-087877"
              >
                Call Us Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
