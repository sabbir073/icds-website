import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import {
  buildMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateItemListSchema,
  jsonLdString,
} from "@/lib/seo";

const TITLE = "Diving Equipment & Marine Inventory in Bangladesh";
const DESCRIPTION =
  "Professional commercial diving equipment maintained by ICDS in Bangladesh — KMB-18 helmets, dive control panels, surface-supplied diving systems, underwater welding/cutting machines, hydraulic jet cleaners, brush-karts, SCUBA cylinders, dive support boats and full marine logistics fleet.";

export const metadata: Metadata = buildMetadata({
  title: "Equipment — Professional Diving & Marine Equipment Inventory",
  description: DESCRIPTION,
  path: "/equipment",
  image: "/images/og-equipment.jpg",
  imageAlt: "ICDS professional commercial diving equipment in Bangladesh",
  keywords: [
    "commercial diving equipment Bangladesh",
    "KMB-18 diving helmet",
    "dive control panel",
    "surface supplied diving equipment Bangladesh",
    "underwater welding machine",
    "hydraulic jet cleaner marine",
    "SCUBA cylinder Bangladesh",
    "dive support boat Bangladesh",
    "underwater camera CCTV",
    "AGA full face dive mask",
    "diving umbilical",
    "marine equipment supply Chittagong",
    "diving safety equipment",
    "brush kart hull cleaner",
  ],
});

const breadcrumbData = [
  { name: "Home", url: "/" },
  { name: "Equipment", url: "/equipment" },
];

const equipmentCategories = [
  {
    name: "Diving Equipment",
    items: [
      "Diver wet suite complete",
      "Dive control panel",
      "Diving Mask / AGA mask",
      "KMB - 18",
      "Diving regulator",
      "Back Pack",
      "Umbilical",
      "Diving Knife",
      "Fins",
      "Booties",
    ],
  },
  {
    name: "Safety Equipment",
    items: [
      "Life Preserver",
      "Weight Belt with Weight",
      "Diver wrist Watch",
      "Life line",
      "Sinkers of various weight",
      "Diving Flag",
      "Diving ladder",
      "Diving platform",
    ],
  },
  {
    name: "Communication & Recording",
    items: [
      "Underwater Camera With monitor",
      "Diving underwater communication system",
      "Under water Torch",
      "CCTV Equipment",
    ],
  },
  {
    name: "Air Supply Systems",
    items: [
      "Air Compressor",
      "SCUBA Cylinders",
      "Portable water jet machine",
      "High-pressure air systems",
    ],
  },
  {
    name: "Work Equipment",
    items: [
      "Underwater welding cutting machine with Torch & Holder",
      "Diving Magnet",
      "Shot rope various size",
      "Brush kart for hull cleaning",
      "Propeller polishing equipment",
    ],
  },
  {
    name: "Support Vessels & Vehicles",
    items: [
      "Diving support boat",
      "Craft inflatable rubber boat",
      "Tugs arrangement capability",
      "Barge arrangement capability",
    ],
  },
];

export default function EquipmentPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);
  const webPageSchema = generateWebPageSchema({
    url: "/equipment",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbId: breadcrumbSchema["@id"],
    image: "/images/og-equipment.jpg",
    type: "CollectionPage",
  });
  const equipmentItemList = generateItemListSchema({
    url: "/equipment",
    name: "ICDS Diving Equipment Inventory",
    description:
      "Categorised listing of all professional commercial diving and marine equipment maintained by ICDS in Bangladesh.",
    items: equipmentCategories,
    toListItem: (category) => ({
      item: {
        "@type": "ItemList",
        name: category.name,
        numberOfItems: category.items.length,
        itemListElement: category.items.map((item, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: { "@type": "Product", name: item, category: category.name },
        })),
      },
    }),
  });

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
        dangerouslySetInnerHTML={{ __html: jsonLdString(equipmentItemList) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen">
        <PageHeader
          title="Our Equipment"
          subtitle="State-of-the-art commercial diving and marine equipment inventory maintained to international safety standards"
          breadcrumb="Equipment"
          backgroundImage="/images/other-4.jpg"
        />

        {/* Equipment Overview */}
        <section aria-labelledby="equipment-overview-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Professional Grade
              </span>
              <h2
                id="equipment-overview-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
              >
                Complete Commercial Diving Equipment Inventory
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We maintain a comprehensive inventory of professional-grade diving and marine
                equipment to ensure safe, efficient and class-compliant operations on every
                project.
              </p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipmentCategories.map((category, index) => (
                <li
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <article aria-labelledby={`eq-cat-${index}`}>
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4">
                      <h3 id={`eq-cat-${index}`} className="text-xl font-bold text-white">
                        {category.name}
                      </h3>
                      <p className="text-emerald-100 text-sm">{category.items.length} items</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {category.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <CheckCircle
                              className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Equipment Highlights */}
        <section aria-labelledby="equipment-highlights-heading" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                  Why Our Equipment
                </span>
                <h2
                  id="equipment-highlights-heading"
                  className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6"
                >
                  Industry-Standard, Class-Approved Equipment
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    All our diving and marine equipment meets or exceeds international safety
                    standards including IMCA D 014/015 and Singapore WSH guidelines. We perform
                    routine maintenance, periodic load tests and certification renewals on every
                    asset before deployment.
                  </p>
                  <p>
                    Our investment in quality equipment reflects our commitment to safety,
                    operational efficiency and delivering predictable, class-acceptable results
                    for our clients.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">30+</div>
                    <p className="text-gray-600 text-sm">Equipment Types</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                    <p className="text-gray-600 text-sm">Safety Certified</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">24/7</div>
                    <p className="text-gray-600 text-sm">Availability</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-3xl font-bold text-emerald-600 mb-1">Regular</div>
                    <p className="text-gray-600 text-sm">Maintenance</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <figure className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/other-4.jpg"
                    alt="ICDS commercial diving equipment storage including KMB-18 helmets, control panels and welding gear"
                    width={1200}
                    height={800}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <figcaption className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold">Professional Dive Gear</h3>
                    <p className="text-gray-200 text-sm">Industry-standard equipment</p>
                  </figcaption>
                </figure>

                <div className="grid grid-cols-2 gap-6">
                  <figure className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/other-2.jpg"
                      alt="Underwater welding work site at Bangabandhu Sheikh Mujib Railway Bridge construction"
                      width={600}
                      height={400}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                      Work Site Operations
                    </figcaption>
                  </figure>
                  <figure className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/other-3.jpg"
                      alt="ICDS expert diving team on-site at a railway bridge marine project"
                      width={600}
                      height={400}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <figcaption className="absolute bottom-3 left-3 text-white text-sm font-medium">
                      Our Expert Team
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Equipment Features */}
        <section
          aria-labelledby="equipment-features-heading"
          className="py-16 bg-emerald-600 text-white"
        >
          <div className="max-w-7xl mx-auto px-4">
            <h2
              id="equipment-features-heading"
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              Key Equipment Features
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Certified Equipment</h3>
                <p className="text-emerald-100 text-sm">
                  All equipment meets international safety standards
                </p>
              </div>
              <div>
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Regular Maintenance</h3>
                <p className="text-emerald-100 text-sm">Scheduled maintenance and inspections</p>
              </div>
              <div>
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Modern Technology</h3>
                <p className="text-emerald-100 text-sm">Latest diving and marine technology</p>
              </div>
              <div>
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center"
                  aria-hidden="true"
                >
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-bold mb-2">Ready Deployment</h3>
                <p className="text-emerald-100 text-sm">Equipment ready for immediate use</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
