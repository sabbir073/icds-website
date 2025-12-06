"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bangabandhu Sheikh Mujib Railway Bridge",
    description:
      "Underwater Installation and Welding of MS Plate to SPSP Body under IHI-SMCC Joint Venture. Completed underwater welding work (depth up to 14m) with 6mm thick MS plate installation. Total quantity: approximately 30 meters of underwater welding length.",
    client: "IHI-SMCC Joint Venture",
    location: "Bangladesh",
    year: "2023",
    image: "/images/other-2.jpg",
    featured: true,
  },
  {
    title: "Railway Bridge Construction Project",
    description:
      "Comprehensive underwater inspection and diving support services for major railway bridge construction, including structural assessment and maintenance work with our expert diving team.",
    client: "Government Project",
    location: "Bangladesh",
    year: "2023",
    image: "/images/other-3.jpg",
    featured: true,
  },
  {
    title: "Ship Hull Inspection & Cleaning",
    description:
      "Complete underwater hull survey and cleaning services for commercial vessels at Chittagong Port.",
    client: "Multiple Shipping Companies",
    location: "Chittagong Port",
    year: "2024",
    image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "Pipeline Inspection Project",
    description:
      "Underwater video inspection and survey of subsea pipelines with detailed reporting and documentation.",
    client: "Oil & Gas Sector",
    location: "Bay of Bengal",
    year: "2024",
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "Propeller Repair & Polishing",
    description:
      "In-water propeller repair and polishing services for various commercial vessels, improving fuel efficiency.",
    client: "Maritime Fleet",
    location: "Bangladesh Waters",
    year: "2024",
    image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
  {
    title: "Salvage Operations",
    description:
      "Emergency salvage and recovery operations for submerged vessels and equipment in challenging conditions.",
    client: "Various Clients",
    location: "Bangladesh Rivers & Sea",
    year: "2023-2024",
    image: "https://images.unsplash.com/photo-1566371220531-8cc31fe4d0c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Completed Projects Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successfully completed marine projects, from major
            infrastructure works to specialized diving operations.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(projects.indexOf(project))}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-300 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 mt-3 text-sm">
                      <span className="text-emerald-400">{project.client}</span>
                      <span className="text-gray-400">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer card-hover"
                onClick={() =>
                  setSelectedProject(projects.indexOf(project))
                }
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-bold text-sm">{project.title}</h4>
                    <p className="text-gray-300 text-xs mt-1">{project.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Work Completion Certificate Highlight */}
        <div className="mt-16 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Certified Excellence
              </h3>
              <p className="text-emerald-100 mb-6">
                Our work on the Bangabandhu Sheikh Mujib Railway Bridge was completed as per
                specification and instruction without any accident and non-conformance, as
                certified by IHI-SMCC Joint Venture.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <ExternalLink className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold">Bureau Veritas Certified</p>
                  <p className="text-emerald-200 text-sm">Valid until January 2028</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">30m</div>
                <p className="text-emerald-200 text-sm">Underwater Welding</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">14m</div>
                <p className="text-emerald-200 text-sm">Depth Achieved</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">0</div>
                <p className="text-emerald-200 text-sm">Safety Incidents</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">100%</div>
                <p className="text-emerald-200 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-64 md:h-96">
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {projects[selectedProject].title}
              </h3>
              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">
                  {projects[selectedProject].client}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  {projects[selectedProject].location}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                  {projects[selectedProject].year}
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {projects[selectedProject].description}
              </p>

              <div className="mt-6 flex gap-4">
                <button
                  onClick={() =>
                    setSelectedProject(
                      selectedProject > 0 ? selectedProject - 1 : projects.length - 1
                    )
                  }
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <button
                  onClick={() =>
                    setSelectedProject(
                      selectedProject < projects.length - 1 ? selectedProject + 1 : 0
                    )
                  }
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
