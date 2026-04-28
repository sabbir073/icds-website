import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { Award, CheckCircle, ExternalLink } from "lucide-react";
import {
  buildMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateItemListSchema,
  generateProjectSchema,
  jsonLdString,
} from "@/lib/seo";

const TITLE = "Marine Projects — Bangabandhu Bridge, Jamuna Bridge & More";
const DESCRIPTION =
  "Explore ICDS's portfolio of completed Bangladesh marine projects: underwater welding at Bangabandhu Sheikh Mujib Railway Bridge (depth 14 m, zero accidents), Jamuna Bridge underwater inspection & repair, ship hull surveys at Chittagong Port, Bay of Bengal pipeline inspection and emergency salvage operations.";

export const metadata: Metadata = buildMetadata({
  title: "Projects — Completed Marine, Bridge & Underwater Works",
  description: DESCRIPTION,
  path: "/projects",
  image: "/images/og-projects.jpg",
  imageAlt: "ICDS marine projects — Bangabandhu Bridge underwater welding, Jamuna Bridge repair and Chittagong Port hull surveys",
  keywords: [
    "Bangabandhu Sheikh Mujib Railway Bridge underwater welding",
    "Jamuna Bridge underwater repair",
    "Padma Bridge marine works",
    "Chittagong Port hull inspection",
    "marine projects Bangladesh",
    "underwater welding projects Bangladesh",
    "ship hull inspection portfolio",
    "salvage operations Bangladesh case studies",
    "underwater construction Bangladesh",
    "marine infrastructure projects",
    "subsea pipeline inspection projects",
    "propeller repair projects Bangladesh",
    "IHI-SMCC underwater welding",
    "Bay of Bengal pipeline inspection",
  ],
});

const breadcrumbData = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
];

const projects = [
  {
    title: "Bangabandhu Sheikh Mujib Railway Bridge — Underwater Welding",
    description:
      "Underwater Installation and Welding of MS Plate to SPSP Body under IHI-SMCC Joint Venture. Completed underwater welding work at depths up to 14 m using 6 mm-thick MS plate. Total quantity: approximately 30 metres of underwater welding length. The entire scope was completed without any accident or non-conformance, certified by IHI-SMCC.",
    client: "IHI-SMCC Joint Venture",
    location: "Bangladesh",
    year: "2023",
    image: "/images/other-2.jpg",
    featured: true,
    stats: [
      { label: "Depth", value: "14m" },
      { label: "Welding Length", value: "30m" },
      { label: "Plate Thickness", value: "6mm" },
      { label: "Safety Incidents", value: "0" },
    ],
  },
  {
    title: "Jamuna Bridge — Underwater Inspection & Repair",
    description:
      "Comprehensive underwater inspection and repair services for the iconic Jamuna Bridge. Our team conducted structural assessment, underwater welding repairs and detailed condition reporting to ensure the bridge's continued safe operation across the Jamuna River.",
    client: "Government Project",
    location: "Jamuna River, Bangladesh",
    year: "2023",
    image: "/images/other-3.jpg",
    featured: true,
    stats: [
      { label: "Project Type", value: "Repair" },
      { label: "Duration", value: "Multiple phases" },
      { label: "Team Size", value: "Full team" },
      { label: "Completion", value: "100%" },
    ],
  },
  {
    title: "Ship Hull Inspection & Cleaning at Chittagong Port",
    description:
      "Complete underwater hull survey and cleaning services for commercial vessels at Chittagong Port. Services included hull condition assessment with video evidence, biofouling removal using brush-kart and propeller inspection.",
    client: "Multiple Shipping Companies",
    location: "Chittagong Port",
    year: "2024",
    image: "/images/otheer-1.jpg",
    featured: false,
  },
  {
    title: "Subsea Pipeline Inspection — Bay of Bengal",
    description:
      "Underwater video inspection and survey of subsea pipelines with detailed reporting and documentation. Comprehensive assessment of pipeline integrity and condition for oil & gas operators.",
    client: "Oil & Gas Sector",
    location: "Bay of Bengal",
    year: "2024",
    image: "/images/other-4.jpg",
    featured: false,
  },
  {
    title: "In-Water Propeller Repair & Polishing",
    description:
      "In-water propeller repair and polishing services for various commercial vessels, improving fuel efficiency and vessel performance without the cost and downtime of dry-docking.",
    client: "Maritime Fleet",
    location: "Bangladesh Waters",
    year: "2024",
    image: "/images/other-2.jpg",
    featured: false,
  },
  {
    title: "Emergency Salvage Operations",
    description:
      "Emergency salvage and recovery operations for submerged vessels and equipment in challenging conditions. Successful recovery missions completed with zero safety incidents.",
    client: "Various Clients",
    location: "Bangladesh Rivers & Sea",
    year: "2023-2024",
    image: "/images/other-3.jpg",
    featured: false,
  },
  {
    title: "Channel Setting & Bank Protection",
    description:
      "Geo-bag setting, CC-block placement and bank protection works for river channel maintenance and erosion-control projects across multiple Bangladesh waterways.",
    client: "Infrastructure Projects",
    location: "Various Locations",
    year: "2023-2024",
    image: "/images/other-4.jpg",
    featured: false,
  },
  {
    title: "Class-Approved Underwater Welding Services",
    description:
      "Ongoing class-approved underwater welding services for various marine structures including ships, offshore platforms and underwater pipelines for shipping and offshore clients.",
    client: "Various Maritime Clients",
    location: "Bangladesh",
    year: "Ongoing",
    image: "/images/otheer-1.jpg",
    featured: false,
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);
  const webPageSchema = generateWebPageSchema({
    url: "/projects",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbId: breadcrumbSchema["@id"],
    image: "/images/og-projects.jpg",
    type: "CollectionPage",
  });
  const projectsItemList = generateItemListSchema({
    url: "/projects",
    name: "ICDS Completed Marine Projects",
    description:
      "Portfolio of completed and ongoing commercial diving, underwater welding, salvage and marine infrastructure projects delivered by ICDS in Bangladesh.",
    items: projects,
    toListItem: (p) => ({
      item: generateProjectSchema({
        title: p.title,
        description: p.description,
        client: p.client,
        location: p.location,
        year: p.year,
        image: p.image,
        url: "/projects",
      }),
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
        dangerouslySetInnerHTML={{ __html: jsonLdString(projectsItemList) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen">
        <PageHeader
          title="Our Marine Projects"
          subtitle="Showcasing our expertise through successful underwater welding, bridge inspection, salvage and ship-services projects across Bangladesh"
          breadcrumb="Projects"
          backgroundImage="/images/other-2.jpg"
        />

        {/* Featured Projects */}
        <section aria-labelledby="featured-projects-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Highlights
              </span>
              <h2
                id="featured-projects-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
              >
                Featured Marine Projects
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our flagship projects demonstrating ICDS&apos;s capability in complex marine and
                underwater operations.
              </p>
            </div>

            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <article
                  key={index}
                  className="bg-gray-50 rounded-3xl overflow-hidden shadow-lg"
                  aria-labelledby={`featured-${index}-title`}
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="p-8 lg:p-12">
                      <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full mb-4">
                        Featured Project
                      </div>
                      <h3
                        id={`featured-${index}-title`}
                        className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
                      >
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                      <ul className="flex flex-wrap gap-4 mb-6">
                        <li className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                          <strong className="text-emerald-700">Client:</strong> {project.client}
                        </li>
                        <li className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                          <strong className="text-emerald-700">Location:</strong> {project.location}
                        </li>
                        <li className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm">
                          <strong className="text-emerald-700">Year:</strong> {project.year}
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 lg:p-12 text-white">
                      <h4 className="text-xl font-bold mb-6">Project Statistics</h4>
                      <dl className="grid grid-cols-2 gap-6">
                        {project.stats?.map((stat, idx) => (
                          <div key={idx} className="bg-white/10 rounded-xl p-4">
                            <dt className="text-emerald-100 text-sm">{stat.label}</dt>
                            <dd className="text-2xl font-bold">{stat.value}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section aria-labelledby="more-projects-heading" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2
                id="more-projects-heading"
                className="text-3xl font-bold text-gray-900 mb-4"
              >
                More Completed Projects
              </h2>
              <p className="text-gray-600">
                Additional projects showcasing ICDS&apos;s diverse marine capabilities.
              </p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <li
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <article aria-labelledby={`other-${index}-title`}>
                    <h3
                      id={`other-${index}-title`}
                      className="text-xl font-bold text-gray-900 mb-3"
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                        {project.client}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certification Highlight */}
        <section
          aria-labelledby="certification-highlight-heading"
          className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 id="certification-highlight-heading" className="text-3xl font-bold">
                      Bureau Veritas Certified
                    </h2>
                    <p className="text-emerald-200">Valid until January 2028</p>
                  </div>
                </div>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  Our work on the Bangabandhu Sheikh Mujib Railway Bridge was completed as per
                  specification and instruction without any accident or non-conformance, as
                  certified by the IHI-SMCC Joint Venture and acknowledged by Bureau Veritas
                  Marine &amp; Offshore.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300" aria-hidden="true" />
                    <span>Certificate of Approval for In-Water Survey</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300" aria-hidden="true" />
                    <span>Docking Survey by Diver or ROV</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-300" aria-hidden="true" />
                    <span>Ships and Offshore Units Certification</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Work Completion Certificate</h3>
                <dl className="space-y-4">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <dt className="text-emerald-200">Project</dt>
                    <dd className="font-medium">Railway Bridge Construction</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <dt className="text-emerald-200">Work Type</dt>
                    <dd className="font-medium">Underwater Welding</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <dt className="text-emerald-200">Depth</dt>
                    <dd className="font-medium">Up to 14m</dd>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <dt className="text-emerald-200">Total Welding</dt>
                    <dd className="font-medium">~30 meters</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-emerald-200">Accidents</dt>
                    <dd className="font-medium text-emerald-300">Zero</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section aria-labelledby="projects-cta-heading" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2
              id="projects-cta-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Have a Project in Mind?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Contact ICDS to discuss your marine service requirements. Our expert team is ready
              to deliver class-approved, on-time results for your project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors"
            >
              Start Your Project
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
