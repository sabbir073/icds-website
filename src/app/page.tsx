import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Anchor, Shield, Award, Users, Wrench, Camera, Ship, ArrowRight } from "lucide-react";
import {
  buildMetadata,
  generateServiceCatalogSchema,
  generateFAQSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  jsonLdString,
} from "@/lib/seo";

const TITLE =
  "Commercial Diving, Underwater Survey & Marine Repair in Bangladesh";

const DESCRIPTION =
  "ICDS — Bureau Veritas-certified commercial diving company in Bangladesh. Underwater survey, inspection, hull cleaning, propeller polishing, salvage, and class-approved underwater welding for ships, ports, bridges and offshore structures. 100% safety record, 24/7 response.";

export const metadata: Metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  image: "/images/og-home.jpg",
  imageAlt: "ICDS commercial diving team performing underwater survey in Bangladesh",
  keywords: [
    "commercial diving Bangladesh",
    "underwater survey services Bangladesh",
    "marine repair Chittagong",
    "ship hull cleaning Bangladesh",
    "propeller polishing Bay of Bengal",
    "underwater inspection ships",
    "salvage operations Bangladesh",
    "IMCA certified divers Bangladesh",
    "Bureau Veritas approved diving",
    "underwater welding contractor",
    "ROV inspection Bangladesh",
    "commercial diving company Dhaka",
    "best diving company in Bangladesh",
    "in-water survey vessel",
    "subsea pipeline inspection Bay of Bengal",
  ],
});

const homePageFaqs = [
  {
    question: "What commercial diving services does ICDS provide in Bangladesh?",
    answer:
      "ICDS provides Bureau Veritas-certified commercial diving services across Bangladesh including underwater survey & inspection (with class-surveyor attendance and video evidence), underwater welding & cutting, ship hull cleaning, propeller polishing, salvage and towing, channel setting, geo-bag and CC block placement, buoy maintenance and full marine equipment supply.",
  },
  {
    question: "Is ICDS a Bureau Veritas-certified diving contractor?",
    answer:
      "Yes. ICDS is officially approved by Bureau Veritas Marine & Offshore as a Service Supplier engaged in carrying out in-water surveys on ships and offshore units by diver and/or Remotely Operated Vehicle (ROV). The current certification is valid until January 2028.",
  },
  {
    question: "Where are ICDS offices located and which areas do you serve?",
    answer:
      "ICDS operates from a Head Office in Uttara, Dhaka and a Chittagong office at IIUC Tower, Agrabad. We serve all Bangladeshi rivers and coastal waters including Chittagong Port, Mongla Port, Payra Port, the Karnaphuli, Meghna, Padma and Jamuna river systems, and the wider Bay of Bengal.",
  },
  {
    question: "Are ICDS divers IMCA certified?",
    answer:
      "Yes. Our diving supervisors and specialist divers hold internationally recognised certifications including IMCA Surface-Supplied Diving Equipment (SSDE), Commercial SCUBA, ASNT NDT Level II, MEO Class-1 (Singapore), SMAW underwater welding qualifications and Singapore WSH safety training.",
  },
  {
    question: "Do you offer 24/7 emergency salvage and underwater repair?",
    answer:
      "Yes. ICDS provides 24/7 emergency response for salvage, towing arrangements, underwater leak repair, hull damage, fouled-anchor clearance and post-incident underwater surveys anywhere in Bangladesh waters.",
  },
  {
    question: "Can ICDS clean a ship's hull and polish propellers without dry-docking?",
    answer:
      "Yes. Using brush-kart, manual scraping and high-pressure hydraulic jet systems we perform in-water hull cleaning and propeller polishing while the vessel remains in service, helping owners reduce fuel consumption and avoid costly dry-dock time.",
  },
  {
    question: "What major projects has ICDS completed?",
    answer:
      "Notable completed works include underwater MS-plate welding at the Bangabandhu Sheikh Mujib Railway Bridge (depth up to 14 m, ~30 m total weld length, zero accidents) under the IHI-SMCC Joint Venture, underwater inspection and repair work on the Jamuna Bridge, ongoing hull and propeller services at Chittagong Port and pipeline inspection in the Bay of Bengal.",
  },
];

const homeServices = [
  {
    name: "Underwater Survey & Inspection",
    description:
      "Comprehensive underwater surveys with HD video evidence performed under class-surveyor attendance, suitable for in-water survey credit.",
    url: "/services",
  },
  {
    name: "Underwater Repair & Welding",
    description:
      "Class-approved underwater welding, cutting and structural repair for ship hulls, propellers, sea chests and subsea pipelines.",
    url: "/services",
  },
  {
    name: "Salvage & Towing Operations",
    description:
      "Complete salvage, wreck removal and towing arrangements with dedicated tugs, barges and recovery teams.",
    url: "/services",
  },
  {
    name: "Hull Cleaning & Propeller Polishing",
    description:
      "In-water hull cleaning and propeller polishing using brush-kart, manual scraping and high-pressure hydraulic jet methods to improve fuel efficiency.",
    url: "/services",
  },
  {
    name: "Channel Setting & Bank Protection",
    description:
      "Geo-bag setting, sand-bag placement, CC-block installation and bank protection for waterways and infrastructure projects.",
    url: "/services",
  },
];

const breadcrumbData = [{ name: "Home", url: "/" }];

const highlights = [
  { icon: Anchor, title: "5+ Years", description: "Of Excellence" },
  { icon: Shield, title: "100%", description: "Safety Record" },
  { icon: Award, title: "Bureau Veritas", description: "Certified" },
  { icon: Users, title: "Expert Team", description: "Qualified Professionals" },
];

const services = [
  {
    icon: Camera,
    title: "Underwater Survey & Inspection",
    description: "Comprehensive surveys with video graphic evidence",
    href: "/services",
  },
  {
    icon: Wrench,
    title: "Underwater Repair",
    description: "Expert repair services for hulls, propellers & more",
    href: "/services",
  },
  {
    icon: Ship,
    title: "Salvage Operations",
    description: "Complete salvage and towing arrangements",
    href: "/services",
  },
];

export default function Home() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);
  const webPageSchema = generateWebPageSchema({
    url: "/",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbId: `${breadcrumbSchema["@id"]}`,
    image: "/images/og-home.jpg",
    type: "WebPage",
  });
  const serviceSchema = generateServiceCatalogSchema(homeServices);
  const faqSchema = generateFAQSchema(homePageFaqs);

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
        <Hero />

        {/* Quick Highlights */}
        <section
          aria-label="Company highlights"
          className="py-12 bg-emerald-600"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center text-white">
                    <Icon className="w-10 h-10 mx-auto mb-3 opacity-80" aria-hidden="true" />
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                    <p className="text-emerald-100 text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section aria-labelledby="about-preview-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                  About Us
                </span>
                <h2
                  id="about-preview-heading"
                  className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6"
                >
                  Leading Marine Services Provider in Bangladesh
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We at <strong>M/S International Commercial Diving Services (ICDS)</strong> are
                  proud to introduce ourselves as a leading marine repairing and underwater
                  survey/inspection company in Bangladesh, led by highly experienced Master
                  Mariners, MEO Class-1 marine engineers and IMCA-certified diving supervisors.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Established in 2020, we deliver cost-effective, reliable and class-approved
                  marine repair, supply and underwater survey &amp; inspection services to
                  shipping lines, ports, government infrastructure and oil &amp; gas operators
                  across Bangladesh and the Bay of Bengal.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
                  aria-label="Learn more about ICDS"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/otheer-1.jpg"
                    alt="ICDS commercial diving team conducting a pre-dive briefing at a Bangladesh port work site"
                    width={1200}
                    height={800}
                    className="w-full h-96 object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section aria-labelledby="services-preview-heading" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h2
                id="services-preview-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
              >
                Underwater Survey, Repair &amp; Salvage Solutions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive Bureau Veritas-certified marine solutions for ships, ports, bridges
                and offshore structures across Bangladesh.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <article
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 card-hover"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href={service.href}
                      className="text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 text-sm font-medium"
                    >
                      Explore {service.title}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
              >
                View All Services
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <Certifications />

        {/* FAQ Section (visible content matching JSON-LD FAQ schema) */}
        <section aria-labelledby="faq-heading" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Frequently Asked Questions
              </span>
              <h2
                id="faq-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
              >
                Commercial Diving in Bangladesh — FAQ
              </h2>
              <p className="text-gray-600">
                Quick answers to the questions ship owners, port operators and project managers
                ask us most often.
              </p>
            </div>

            <div className="space-y-4">
              {homePageFaqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900 list-none">
                    <span>{faq.question}</span>
                    <ArrowRight
                      className="w-5 h-5 text-emerald-600 transition-transform group-open:rotate-90"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          aria-labelledby="home-cta-heading"
          className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 id="home-cta-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Need Marine Services?
            </h2>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation. Our expert team is ready to help with all
              your underwater survey, inspection, repair and salvage needs across Bangladesh.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+8801813087877"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                aria-label="Call ICDS at +880 1813-087877"
              >
                Call: +880 1813-087877
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
