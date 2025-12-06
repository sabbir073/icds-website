import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Award, CheckCircle, ExternalLink } from "lucide-react";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects - Completed Marine & Underwater Works",
  description:
    "Explore ICDS's portfolio of completed marine projects including Bangabandhu Railway Bridge underwater welding, Jamuna Bridge repair, ship hull inspections, and salvage operations in Bangladesh.",
  keywords: [
    "marine projects Bangladesh",
    "underwater welding projects",
    "Bangabandhu Railway Bridge",
    "Jamuna Bridge repair",
    "ship hull inspection",
    "salvage operations",
    "underwater construction",
    "marine infrastructure",
    "pipeline inspection",
    "propeller repair projects",
  ],
  alternates: {
    canonical: `${siteConfig.url}/projects`,
  },
  openGraph: {
    title: "Our Projects - ICDS Marine Works Portfolio",
    description:
      "Successfully completed marine projects including bridge construction, underwater welding, and salvage operations.",
    url: `${siteConfig.url}/projects`,
    images: [
      {
        url: `${siteConfig.url}/images/og-projects.jpg`,
        width: 1200,
        height: 630,
        alt: "ICDS Completed Projects",
      },
    ],
  },
};

const breadcrumbData = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
];

const projects = [
  {
    title: "Bangabandhu Sheikh Mujib Railway Bridge Construction",
    description:
      "Underwater Installation and Welding of MS Plate to SPSP Body under IHI-SMCC Joint Venture. Completed underwater welding work (depth up to 14m) with 6mm thick MS plate installation. Total quantity: approximately 30 meters of underwater welding length. Work completed without any accident or non-conformance.",
    client: "IHI-SMCC Joint Venture",
    location: "Bangladesh",
    year: "2023",
    featured: true,
    stats: [
      { label: "Depth", value: "14m" },
      { label: "Welding Length", value: "30m" },
      { label: "Plate Thickness", value: "6mm" },
      { label: "Safety Incidents", value: "0" },
    ],
  },
  {
    title: "Jamuna Bridge Repair Work",
    description:
      "Comprehensive underwater inspection and repair services for the iconic Jamuna Bridge. Our team conducted structural assessment, underwater welding repairs, and detailed condition reporting to ensure the bridge's continued safe operation.",
    client: "Government Project",
    location: "Jamuna River, Bangladesh",
    year: "2023",
    featured: true,
    stats: [
      { label: "Project Type", value: "Repair" },
      { label: "Duration", value: "Multiple phases" },
      { label: "Team Size", value: "Full team" },
      { label: "Completion", value: "100%" },
    ],
  },
  {
    title: "Ship Hull Inspection & Cleaning",
    description:
      "Complete underwater hull survey and cleaning services for commercial vessels at Chittagong Port. Services included hull condition assessment, biofouling removal, and propeller inspection.",
    client: "Multiple Shipping Companies",
    location: "Chittagong Port",
    year: "2024",
    featured: false,
  },
  {
    title: "Pipeline Inspection Project",
    description:
      "Underwater video inspection and survey of subsea pipelines with detailed reporting and documentation. Comprehensive assessment of pipeline integrity and condition.",
    client: "Oil & Gas Sector",
    location: "Bay of Bengal",
    year: "2024",
    featured: false,
  },
  {
    title: "Propeller Repair & Polishing",
    description:
      "In-water propeller repair and polishing services for various commercial vessels, improving fuel efficiency and vessel performance without dry-docking.",
    client: "Maritime Fleet",
    location: "Bangladesh Waters",
    year: "2024",
    featured: false,
  },
  {
    title: "Salvage Operations",
    description:
      "Emergency salvage and recovery operations for submerged vessels and equipment in challenging conditions. Successful recovery with zero safety incidents.",
    client: "Various Clients",
    location: "Bangladesh Rivers & Sea",
    year: "2023-2024",
    featured: false,
  },
  {
    title: "Channel Setting & Bank Protection",
    description:
      "Geo bag setting, CC block placement, and bank protection works for river channel maintenance and erosion control projects.",
    client: "Infrastructure Projects",
    location: "Various Locations",
    year: "2023-2024",
    featured: false,
  },
  {
    title: "Underwater Welding Services",
    description:
      "Class-approved underwater welding services for various marine structures including ships, offshore platforms, and underwater pipelines.",
    client: "Various Maritime Clients",
    location: "Bangladesh",
    year: "Ongoing",
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <PageHeader
        title="Our Projects"
        subtitle="Showcasing our expertise through successful completions"
        breadcrumb="Projects"
        backgroundImage="/images/other-2.jpg"
      />

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our flagship projects demonstrating our capabilities in complex marine operations
            </p>
          </div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full mb-4">
                      Featured Project
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                      <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                        Client: {project.client}
                      </span>
                      <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                        Location: {project.location}
                      </span>
                      <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                        Year: {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 lg:p-12 text-white">
                    <h4 className="text-xl font-bold mb-6">Project Statistics</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {project.stats?.map((stat, idx) => (
                        <div key={idx} className="bg-white/10 rounded-xl p-4">
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <p className="text-emerald-100 text-sm">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Projects</h2>
            <p className="text-gray-600">Additional projects showcasing our diverse capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                    {project.client}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Highlight */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Bureau Veritas Certified</h2>
                  <p className="text-emerald-200">Valid until January 2028</p>
                </div>
              </div>
              <p className="text-emerald-100 mb-6 leading-relaxed">
                Our work on the Bangabandhu Sheikh Mujib Railway Bridge was completed as per
                specification and instruction without any accident and non-conformance, as
                certified by IHI-SMCC Joint Venture.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Certificate of Approval for In-Water Survey</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Docking Survey by Diver or ROV</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300" />
                  <span>Ships and Offshore Units Certification</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Work Completion Certificate</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-emerald-200">Project</span>
                  <span className="font-medium">Railway Bridge Construction</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-emerald-200">Work Type</span>
                  <span className="font-medium">Underwater Welding</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-emerald-200">Depth</span>
                  <span className="font-medium">Up to 14m</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                  <span className="text-emerald-200">Total Welding</span>
                  <span className="font-medium">~30 meters</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-200">Accidents</span>
                  <span className="font-medium text-emerald-300">Zero</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Contact us to discuss your marine service requirements. Our expert team is ready
            to deliver quality results for your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors"
          >
            Start Your Project
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
