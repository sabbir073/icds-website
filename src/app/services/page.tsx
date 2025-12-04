import { Metadata } from "next";
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
import { siteConfig, generateBreadcrumbSchema, generateServiceSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Services - Underwater Survey, Repair & Marine Solutions",
  description:
    "Comprehensive marine services in Bangladesh: underwater survey & inspection, underwater repair, hull cleaning, propeller polishing, salvage operations, underwater welding, and more. Bureau Veritas certified.",
  keywords: [
    "underwater survey Bangladesh",
    "underwater inspection services",
    "underwater repair",
    "hull cleaning services",
    "propeller polishing",
    "salvage operations Bangladesh",
    "underwater welding",
    "marine repair services",
    "ship hull inspection",
    "commercial diving services",
    "buoy maintenance",
    "channel setting",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Marine Services - ICDS | Underwater Survey, Repair & Salvage",
    description:
      "Professional underwater survey, inspection, repair, and salvage services in Bangladesh. Bureau Veritas certified.",
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: `${siteConfig.url}/images/og-services.jpg`,
        width: 1200,
        height: 630,
        alt: "ICDS Marine Services",
      },
    ],
  },
};

const breadcrumbData = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
];

const services = [
  {
    icon: Camera,
    title: "Underwater Survey & Inspection",
    description:
      "Comprehensive underwater survey & inspection with video graphic evidence by well-qualified and trained divers, supervisors & marine engineers.",
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
      "Expert underwater repair of ship's hull, propeller, gas & oil pipe, and submersed cables including welding, cutting & propeller polishing.",
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
      "Professional underwater cleaning services for ship's hull, propeller, gas & oil pipes using manual scraping, brush cutting & high-pressure water jet cleaning.",
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
      "Specialized services including geo bag setting, sand bag placement, CC block installation, batch recognition, and water survey operations.",
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
      "Complete underwater video soil testing, searching & salvage work, scuba diving, dock diving, dock preparation & inspection services.",
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
      "Comprehensive buoy maintenance, buoy laying & re-positioning, along with clearing and removing of fouled anchors.",
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
      "Expert technical advisory for in-water survey, inspection, plotting, positioning of pipe, cable laying, in-water gas cutting, welding, and debris removing.",
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
      "Any kind of salvage operation, towing arrangements, and preparation of technical reports for marine incidents.",
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
      "Arrangement of tugs, barges, cranes, excavators, payloaders, dump trucks, and all kinds of logistics services.",
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

const servicesForSchema = [
  { name: "Underwater Survey & Inspection", description: "Comprehensive underwater survey and inspection with video graphic evidence" },
  { name: "Underwater Repair Services", description: "Expert underwater repair of ship's hull, propeller, pipes and cables" },
  { name: "Underwater Cleaning", description: "Professional hull cleaning, propeller cleaning, and high-pressure jet cleaning" },
  { name: "Salvage Operations", description: "Complete salvage and recovery operations for vessels and equipment" },
  { name: "Underwater Welding", description: "Class-approved underwater welding and cutting services" },
  { name: "Buoy Services", description: "Buoy maintenance, laying, and repositioning services" },
  { name: "Channel Setting", description: "Geo bag setting, CC block installation, and bank protection" },
  { name: "Technical Advisory", description: "Expert consultation for marine operations and projects" },
  { name: "Logistics & Equipment", description: "Arrangement of tugs, barges, cranes, and marine equipment" },
];

export default function ServicesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);
  const serviceSchema = generateServiceSchema(servicesForSchema);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive marine solutions for all your underwater needs"
        breadcrumb="Services"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver services that provide you leverage - from underwater inspections to
              salvage operations, we&apos;re your complete marine services partner.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={`${!isEven ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`${!isEven ? "lg:order-1" : ""}`}>
                    <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
                      <Icon className="w-16 h-16 mb-4 opacity-80" />
                      <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                      <p className="text-emerald-100 text-sm">
                        Professional services with qualified personnel and modern equipment
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-gray-600">We also provide these specialized services</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex items-center gap-4"
              >
                <div className="w-3 h-3 bg-emerald-500 rounded-full flex-shrink-0" />
                <span className="text-gray-800 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
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
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
