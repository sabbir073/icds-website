import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Anchor, Shield, Award, Users, Wrench, Camera, Ship, ArrowRight } from "lucide-react";
import { siteConfig, generateServiceSchema, generateFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description:
    "ICDS - Leading commercial diving and marine services company in Bangladesh. Expert underwater survey, inspection, repair, salvage operations, and hull cleaning services. Bureau Veritas certified with 100% safety record.",
  keywords: [
    "commercial diving Bangladesh",
    "underwater survey services",
    "marine repair Chittagong",
    "ship hull cleaning",
    "propeller polishing",
    "underwater inspection",
    "salvage operations Bangladesh",
    "IMCA certified divers",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: `${siteConfig.name} | Commercial Diving & Marine Services`,
    description:
      "Leading marine repairing and underwater survey/inspection company in Bangladesh since 2020.",
    url: siteConfig.url,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ICDS Commercial Diving Services",
      },
    ],
  },
};

const homePageFaqs = [
  {
    question: "What services does ICDS provide?",
    answer:
      "ICDS provides comprehensive marine services including underwater survey and inspection, underwater repair, hull cleaning, propeller polishing, salvage operations, and marine equipment supply in Bangladesh.",
  },
  {
    question: "Is ICDS certified for commercial diving?",
    answer:
      "Yes, ICDS is Bureau Veritas certified and our divers hold IMCA certifications, ensuring the highest standards of safety and quality in all our operations.",
  },
  {
    question: "Where is ICDS located?",
    answer:
      "ICDS has offices in Chittagong (Chattogram) and Dhaka, Bangladesh, serving the entire maritime industry across Bangladesh's rivers and seas.",
  },
];

const highlights = [
  {
    icon: Anchor,
    title: "5+ Years",
    description: "Of Excellence",
  },
  {
    icon: Shield,
    title: "100%",
    description: "Safety Record",
  },
  {
    icon: Award,
    title: "Bureau Veritas",
    description: "Certified",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Qualified Professionals",
  },
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

const homeServices = [
  { name: "Underwater Survey & Inspection", description: "Comprehensive underwater surveys with video graphic evidence under class surveyor attendance" },
  { name: "Underwater Repair", description: "Expert repair services for hulls, propellers, rudders, and sea chests" },
  { name: "Salvage Operations", description: "Complete salvage and towing arrangements for vessels" },
  { name: "Hull Cleaning", description: "Professional ship hull cleaning and maintenance services" },
  { name: "Propeller Polishing", description: "Precision propeller polishing for optimal vessel performance" },
];

export default function Home() {
  const serviceSchema = generateServiceSchema(homeServices);
  const faqSchema = generateFAQSchema(homePageFaqs);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero />

      {/* Quick Highlights */}
      <section className="py-12 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center text-white">
                  <Icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-emerald-100 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Leading Marine Services Provider in Bangladesh
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We at M/S International Commercial Diving Services are proud to introduce
                ourselves as a leading marine repairing and underwater survey/inspection
                company in Bangladesh, led by highly experienced professionals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Established in 2020, we provide all kinds of marine-related repair, supply,
                and underwater survey & inspection services. We pledge to offer cost-effective,
                reliable, and trustworthy services with the entire satisfaction of our clients.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Commercial Diver at Work"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive marine solutions from underwater inspections to salvage operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Marine Services?
          </h2>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation. Our expert team is ready to help
            with all your underwater survey, inspection, and marine repair needs.
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
            >
              Call: +880 1813-087877
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
