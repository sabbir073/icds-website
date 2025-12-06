"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Award } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Bureau Veritas Certificate of Approval",
    description: "Certificate approving ICDS as a Service Supplier engaged in carrying out in-water survey on ships and offshore units by diver and/or Remotely Operated Vehicle. Valid until January 2028.",
    image: "/images/cert-1.jpg",
  },
  {
    id: 2,
    title: "Professional Diving Certifications",
    description: "Multiple diving certifications including SSDE Diver certification, Welder's Certificate, and Letter of Appointment as Commercial Air Diver from SSE Marine PTE LTD.",
    image: "/images/cert-2.jpg",
  },
  {
    id: 3,
    title: "Safety & Supervisory Certifications",
    description: "Shipyard Supervisors Safety Course, Surface Supplied Diving Equipment (SSDE) Diving Supervisor certification, and Special Warfare Diving and Salvage Centre Course Certificate.",
    image: "/images/cert-3.jpg",
  },
  {
    id: 4,
    title: "Naval & Military Training Certificates",
    description: "Naval Commando & Diving Course certificates, Campaign Planning and Tools Subject Matter Expert Exchange certifications, and Tiger Shark Counter-Terrorism Training completion certificates.",
    image: "/images/cert-4.jpg",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedCert !== null) {
      setSelectedCert(selectedCert > 0 ? selectedCert - 1 : certifications.length - 1);
    }
  };

  const handleNext = () => {
    if (selectedCert !== null) {
      setSelectedCert(selectedCert < certifications.length - 1 ? selectedCert + 1 : 0);
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Our Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Certifications & Accreditations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team holds internationally recognized certifications ensuring the highest
            standards of safety and professionalism in all diving operations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCert(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-sm line-clamp-2">{cert.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bureau Veritas Highlight */}
        <div className="mt-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Bureau Veritas Certified
              </h3>
              <p className="text-emerald-100 mb-6">
                ICDS is officially approved by Bureau Veritas Marine & Offshore as a Service Supplier
                for in-water surveys on ships and offshore units. Our certification is valid until
                January 2028, demonstrating our commitment to international quality standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-sm">Certificate No: ITB0/EIY/20250623073522</span>
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2">
                  <span className="text-sm">Valid Until: January 2028</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">100%</div>
                <p className="text-emerald-200 text-sm">Compliance Rate</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">NR 533</div>
                <p className="text-emerald-200 text-sm">Society Rule Note</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">ROV</div>
                <p className="text-emerald-200 text-sm">Capable</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold">Class</div>
                <p className="text-emerald-200 text-sm">Approved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-[70vh]">
              <Image
                src={certifications[selectedCert].image}
                alt={certifications[selectedCert].title}
                fill
                className="object-contain bg-gray-100"
              />
            </div>

            <div className="p-6 bg-white border-t">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {certifications[selectedCert].title}
              </h3>
              <p className="text-gray-600 text-sm">
                {certifications[selectedCert].description}
              </p>

              <div className="mt-4 flex gap-4">
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                <button
                  onClick={handleNext}
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
