"use client";

import { useState } from "react";
import Image from "next/image";
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
  ChevronRight,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Underwater Survey & Inspection",
    description:
      "Comprehensive underwater survey & inspection with video graphic evidence by well-qualified and trained divers, supervisors & marine engineers.",
    image:
      "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Video Graphic Evidence",
      "Class Surveyor Attendance",
      "Detailed Reports",
      "CCTV Inspection",
    ],
  },
  {
    icon: Wrench,
    title: "Underwater Repair Services",
    description:
      "Expert underwater repair of ship's hull, propeller, gas & oil pipe, and submersed cables including welding, cutting & propeller polishing.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Class Approved Welding",
      "Propeller Polishing",
      "Hull Repairs",
      "Cable Repairs",
    ],
  },
  {
    icon: Droplets,
    title: "Underwater Cleaning",
    description:
      "Professional underwater cleaning services for ship's hull, propeller, gas & oil pipes using manual scraping, brush cutting & high-pressure water jet cleaning.",
    image:
      "https://images.unsplash.com/photo-1544551763-8dd44758c2dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: [
      "Hull Cleaning",
      "High-Pressure Jet",
      "Propeller Cleaning",
      "Manual Scraping",
    ],
  },
  {
    icon: Layers,
    title: "Channel Setting & Construction",
    description:
      "Specialized services including geo bag setting, sand bag placement, CC block installation, batch recognition, and water survey operations.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Geo Bag Setting", "CC Block Placing", "Water Survey", "Batch Recognition"],
  },
  {
    icon: Search,
    title: "Salvage & Searching Operations",
    description:
      "Complete underwater video soil testing, searching & salvage work, scuba diving, dock diving, dock preparation & inspection services.",
    image:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Salvage Operations", "Soil Testing", "Scuba Diving", "Dock Inspection"],
  },
  {
    icon: Anchor,
    title: "Buoy Services",
    description:
      "Comprehensive buoy maintenance, buoy laying & re-positioning, along with other shipping-related services as and when required.",
    image:
      "https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Buoy Maintenance", "Buoy Laying", "Re-positioning", "Anchor Services"],
  },
  {
    icon: HelpCircle,
    title: "Technical Advisory",
    description:
      "Expert technical advisory for in-water survey, inspection, plotting, positioning of pipe, cable laying, in-water gas cutting, welding, and debris removing.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Expert Consultation", "Technical Reports", "Project Planning", "Safety Advisory"],
  },
  {
    icon: Ship,
    title: "Salvage & Towing",
    description:
      "Any kind of salvage operation, towing arrangements, and preparation of technical reports for marine incidents.",
    image:
      "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Salvage Operations", "Towing Arrangement", "Technical Reports", "Emergency Response"],
  },
  {
    icon: Truck,
    title: "Logistics & Equipment",
    description:
      "Arrangement of tugs, barges, cranes, excavators, payloaders, dump trucks, and all kinds of logistics services.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    features: ["Tug Arrangement", "Crane Services", "Heavy Equipment", "Full Logistics"],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Marine Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver services that provide you leverage - from underwater inspections to
            salvage operations, we&apos;re your complete marine services partner.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 card-hover ${
                  activeService === index
                    ? "ring-2 ring-emerald-500 shadow-xl"
                    : "shadow-md hover:shadow-xl"
                }`}
                onClick={() => setActiveService(index)}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    activeService === index
                      ? "bg-emerald-600 text-white"
                      : "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white"
                  }`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{service.description}</p>
                <div className="mt-4 flex items-center text-emerald-600 text-sm font-medium">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Service Detail */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto">
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/50 to-transparent lg:hidden" />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-3 mb-4">
                {(() => {
                  const Icon = services[activeService].icon;
                  return (
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                  );
                })()}
                <h3 className="text-2xl font-bold text-gray-900">
                  {services[activeService].title}
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {services[activeService].description}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {services[activeService].features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-full hover:bg-emerald-700 transition-colors"
              >
                Request This Service
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
