import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { CheckCircle } from "lucide-react";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Equipment - Professional Diving & Marine Equipment",
  description:
    "State-of-the-art diving and marine equipment for professional underwater operations. SCUBA gear, dive control panels, underwater cameras, welding equipment, and support vessels.",
  keywords: [
    "diving equipment Bangladesh",
    "commercial diving gear",
    "underwater welding equipment",
    "dive control panel",
    "SCUBA cylinders",
    "underwater camera",
    "diving support boat",
    "KMB-18 diving helmet",
    "marine equipment",
    "diving safety equipment",
  ],
  alternates: {
    canonical: `${siteConfig.url}/equipment`,
  },
  openGraph: {
    title: "Professional Diving Equipment - ICDS",
    description:
      "Complete inventory of professional-grade diving and marine equipment for safe and efficient underwater operations.",
    url: `${siteConfig.url}/equipment`,
    images: [
      {
        url: `${siteConfig.url}/images/og-equipment.jpg`,
        width: 1200,
        height: 630,
        alt: "ICDS Professional Diving Equipment",
      },
    ],
  },
};

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

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <PageHeader
        title="Our Equipment"
        subtitle="State-of-the-art diving and marine equipment"
        breadcrumb="Equipment"
        backgroundImage="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Equipment Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Professional Grade
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Complete Equipment Inventory
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We maintain a comprehensive inventory of professional-grade diving and marine
              equipment to ensure safe and efficient operations for all our projects.
            </p>
          </div>

          {/* Equipment Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <p className="text-emerald-100 text-sm">{category.items.length} items</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Why Our Equipment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Industry-Standard Equipment
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  All our diving and marine equipment meets or exceeds international safety standards.
                  We ensure regular maintenance and certification of all equipment to guarantee
                  reliable performance during operations.
                </p>
                <p>
                  Our investment in quality equipment reflects our commitment to safety, efficiency,
                  and delivering the best results for our clients.
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
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1544551763-8dd44758c2dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Professional Diving Equipment"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold">Professional Dive Gear</h3>
                  <p className="text-gray-200 text-sm">Industry-standard equipment</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Welding Equipment"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Welding Systems
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Support Equipment"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                    Support Equipment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Equipment Features */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Key Equipment Features
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Certified Equipment</h3>
              <p className="text-emerald-100 text-sm">All equipment meets international standards</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Regular Maintenance</h3>
              <p className="text-emerald-100 text-sm">Scheduled maintenance and inspections</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Modern Technology</h3>
              <p className="text-emerald-100 text-sm">Latest diving and marine technology</p>
            </div>
            <div>
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-bold mb-2">Ready Deployment</h3>
              <p className="text-emerald-100 text-sm">Equipment ready for immediate use</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
