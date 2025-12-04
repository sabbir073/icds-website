"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    ],
  },
  {
    name: "Air Supply Systems",
    items: [
      "Air Compressor",
      "SCUBA Cylinders",
      "Portable water jet machine",
    ],
  },
  {
    name: "Work Equipment",
    items: [
      "Underwater welding cutting machine with Torch & Holder",
      "Diving Magnet",
      "Shot rope various size",
    ],
  },
  {
    name: "Support Vessels",
    items: [
      "Diving support boat",
      "Craft inflatable rubber boat",
    ],
  },
];

export default function Equipment() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

  return (
    <section id="equipment" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Our Equipment
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            State-of-the-Art Diving Equipment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain a comprehensive inventory of professional-grade diving and marine
            equipment to ensure safe and efficient operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Equipment List */}
          <div className="space-y-4">
            {equipmentCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() =>
                    setExpandedCategory(expandedCategory === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{category.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-emerald-600 font-medium">
                      {category.items.length} items
                    </span>
                    {expandedCategory === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCategory === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-600 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Equipment Image Gallery */}
          <div className="space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Diving Equipment"
                width={600}
                height={400}
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
                <Image
                  src="https://images.unsplash.com/photo-1586508577428-120d15d19b72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Underwater Camera"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                  Underwater Cameras
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Welding Equipment"
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">
                  Welding Systems
                </div>
              </div>
            </div>

            {/* Equipment Stats */}
            <div className="bg-emerald-600 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-4">Equipment Highlights</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold">30+</div>
                  <p className="text-emerald-200 text-sm">Equipment Types</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <p className="text-emerald-200 text-sm">Safety Certified</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <p className="text-emerald-200 text-sm">Availability</p>
                </div>
                <div>
                  <div className="text-3xl font-bold">Regular</div>
                  <p className="text-emerald-200 text-sm">Maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
