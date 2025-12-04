"use client";

import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "Capt. Md. Ashraful Alam Neerob",
    role: "CEO (Chief Executive Officer)",
    qualification: "Master Mariner (Class-1), Merchant Navy",
    phone: "+8801813-087877",
    email: "info@icdsbd.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "A.K.M Zakir Hossain",
    role: "COO (Chief Operating Officer)",
    qualification: "MEO - Class 1 (Singapore)",
    phone: "+8801841-576804",
    email: "info@icdsbd.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mar. Engr. Md Al Mamun",
    role: "CTO (Chief Technical Officer)",
    qualification: "MEO - Class 1 (Singapore), ASNT NDT Level II",
    phone: "+8801716530686",
    email: "info@icdsbd.com",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Md. Jamal Hossain Rubel",
    role: "Managing Partner",
    qualification: "Specialist/Expert on Salvage & Towing Operation",
    phone: "+8801782526828",
    email: "info@icdsbd.com",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Md. Towhidul Islam",
    role: "Partner",
    qualification: "Diving Supervisor, In-Water Cutting & Welding, Survey & Inspection",
    phone: "+65 9279 3564",
    email: "info@icdsbd.com",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Lt. Fazal Haque SCPO(X)(CD)",
    role: "Diving Supervisor",
    qualification: "Survey & Inspection Specialist",
    phone: "",
    email: "info@icdsbd.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Md. Sazzad Hossain",
    role: "Specialist Diver",
    qualification: "In-water Cutting & Welding, Survey & Inspection",
    phone: "",
    email: "info@icdsbd.com",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Meet Our Expert Professionals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team consists of highly qualified professionals from shipping backgrounds with
            extensive experience in marine operations and underwater services.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Contact Icons Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.phone && (
                    <a
                      href={`tel:${member.phone}`}
                      className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-lg mb-1 line-clamp-1">
                  {member.name}
                </h3>
                <p className="text-emerald-600 font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs line-clamp-2">
                  {member.qualification}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Team Certifications
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-emerald-600 mb-2">SSDE</div>
              <p className="text-gray-600 text-sm">Surface Supplied Diving Equipment</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-emerald-600 mb-2">CSCUBA</div>
              <p className="text-gray-600 text-sm">Commercial SCUBA Certification</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-emerald-600 mb-2">NDT II</div>
              <p className="text-gray-600 text-sm">Non-Destructive Testing Level II</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-3xl font-bold text-emerald-600 mb-2">MEO-1</div>
              <p className="text-gray-600 text-sm">Marine Engineer Officer Class 1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
