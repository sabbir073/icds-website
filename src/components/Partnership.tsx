"use client";

import { Handshake, Award, Users, Globe, CheckCircle, Star } from "lucide-react";

const partnershipServices = [
  { icon: Users, title: "Customer Satisfaction", description: "Dedicated to exceeding client expectations" },
  { icon: Handshake, title: "Crew Welfare Services", description: "Supporting maritime workforce wellbeing" },
  { icon: Globe, title: "Documentation", description: "Comprehensive maritime documentation support" },
  { icon: Award, title: "Accounting", description: "Professional financial management" },
  { icon: Star, title: "Training", description: "Continuous skill development programs" },
];

const values = [
  {
    title: "Integrity and Professionalism",
    description: "We uphold the highest standards of integrity in all our business dealings and maintain professional excellence in every service we provide.",
  },
  {
    title: "Respect for All Cultures",
    description: "We embrace diversity and show respect for all cultures, creating an inclusive environment for partners and employees worldwide.",
  },
  {
    title: "Transparency",
    description: "We believe in open and honest communication, ensuring our clients are informed at every stage of our collaboration.",
  },
];

export default function Partnership() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Partnership Shop Concept */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Partnership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Partnership Shop Concept
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We aim to expand our services to help our partners further with their business.
              Our plan for growth includes delivering the following services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partnershipServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 card-hover"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Long-term Partnership */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left - Values */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Long-term Partnership Relation
              </h3>
              <p className="text-emerald-100 mb-8">
                The trust and confidence of our partners, employees, and other stakeholders
                are valuable to us. To maintain ethical and mutually beneficial relationships
                with our stakeholders, we designed our business model around these values:
              </p>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-emerald-300" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{value.title}</h4>
                      <p className="text-emerald-100 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Business Reputation */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Business Reputation
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reputation is an asset for a company. We help our partners maintain a reputable
                image in the industry through deploying competent and globally competitive
                workforce who will take an active role in contributing positively to the image
                of the company.
              </p>

              <div className="bg-emerald-50 rounded-2xl p-6 mb-8">
                <h4 className="font-bold text-gray-900 mb-4">What We Offer</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Competent and qualified personnel
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Globally competitive workforce
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Positive contribution to your company image
                  </li>
                  <li className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    Ethical business practices
                  </li>
                </ul>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-600">5+</div>
                  <p className="text-gray-600 text-xs">Years of Trust</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-600">100+</div>
                  <p className="text-gray-600 text-xs">Happy Clients</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-emerald-600">24/7</div>
                  <p className="text-gray-600 text-xs">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
