import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, Award } from "lucide-react";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Team - Expert Marine & Diving Professionals",
  description:
    "Meet ICDS's expert team of IMCA certified divers, marine engineers, and diving supervisors. Led by Master Mariners and MEO Class-1 certified professionals with decades of experience.",
  keywords: [
    "IMCA certified divers",
    "marine engineers Bangladesh",
    "diving supervisor",
    "master mariner",
    "MEO class 1",
    "commercial diving team",
    "underwater welding experts",
    "diving professionals Bangladesh",
    "SSDE certified",
    "NDT level 2 certified",
  ],
  alternates: {
    canonical: `${siteConfig.url}/team`,
  },
  openGraph: {
    title: "Our Expert Team - ICDS Commercial Diving Professionals",
    description:
      "Meet our team of IMCA certified divers, marine engineers, and diving supervisors with decades of combined experience.",
    url: `${siteConfig.url}/team`,
    images: [
      {
        url: `${siteConfig.url}/images/og-team.jpg`,
        width: 1200,
        height: 630,
        alt: "ICDS Expert Team",
      },
    ],
  },
};

const breadcrumbData = [
  { name: "Home", url: "/" },
  { name: "Team", url: "/team" },
];

const teamMembers = [
  {
    name: "Capt. Md. Ashraful Alam Neerob",
    role: "CEO (Chief Executive Officer)",
    qualification: "Master Mariner (Class-1), Merchant Navy",
    phone: "+8801813-087877",
    email: "info@icdsbd.com",
    bio: "Leading the company with extensive maritime experience and expertise in marine operations.",
  },
  {
    name: "A.K.M Zakir Hossain",
    role: "COO (Chief Operating Officer)",
    qualification: "MEO - Class 1 (Singapore)",
    phone: "+8801841-576804",
    email: "info@icdsbd.com",
    bio: "Overseeing daily operations with deep knowledge in marine engineering.",
  },
  {
    name: "Mar. Engr. Md Al Mamun",
    role: "CTO (Chief Technical Officer)",
    qualification: "MEO - Class 1 (Singapore), ASNT NDT Level II",
    phone: "+8801716530686",
    email: "info@icdsbd.com",
    bio: "Technical expertise in marine engineering and non-destructive testing.",
  },
  {
    name: "Md. Jamal Hossain Rubel",
    role: "Managing Partner",
    qualification: "Specialist/Expert on Salvage & Towing Operation",
    phone: "+8801782526828",
    email: "info@icdsbd.com",
    bio: "Started career with PS. Salvage in 2003 as Salvage Supervisor, promoted to Salvage Manager. Started S.R. Logistics in 2016. Expert in Diving, Salvage and Towing operations with experience in offshore structures, marine sectors, pipeline, Oil & Gas projects.",
  },
  {
    name: "Md. Towhidul Islam",
    role: "Partner",
    qualification: "Diving Supervisor, In-Water Cutting & Welding, Survey & Inspection",
    phone: "+65 9279 3564",
    email: "info@icdsbd.com",
    bio: "Joined Bangladesh Navy in 2001 as AB Clearance Diver III. 10+ years Navy service including commando operations. 7+ years at Sembcorp Marine Singapore. 4+ years at Singapore Salvage Engineer. Certified SSDE Supervisor, CSCUBA Level I, SMAW 3G welder.",
  },
  {
    name: "Lt. Fazal Haque SCPO(X)(CD)",
    role: "Diving Supervisor",
    qualification: "Survey & Inspection Specialist",
    phone: "",
    email: "info@icdsbd.com",
    bio: "Navy Commando and Clearance Diver with advanced training. UN Mission experience in South Sudan. Force Commander's Commendation for salvage diving operations. Expertise in advanced dive supervision and diving medicine.",
  },
  {
    name: "Md. Sazzad Hossain",
    role: "Specialist Diver",
    qualification: "In-water Cutting & Welding, Survey & Inspection",
    phone: "",
    email: "info@icdsbd.com",
    bio: "14+ years experience as clearance diver in Bangladesh. 4+ years in channel setting, geo bag, soil testing, salvage work. 4.5 years shipyard diving experience. Certified ADC International Surface-Supplied Air Diver.",
  },
];

const certifications = [
  { code: "SSDE", name: "Surface Supplied Diving Equipment", description: "Professional diving certification" },
  { code: "CSCUBA", name: "Commercial SCUBA Certification", description: "Commercial underwater breathing apparatus" },
  { code: "NDT II", name: "Non-Destructive Testing Level II", description: "ASNT certified inspection" },
  { code: "MEO-1", name: "Marine Engineer Officer Class 1", description: "Highest marine engineering certification" },
  { code: "SMAW", name: "Shielded Metal Arc Welding", description: "Certified underwater welding" },
  { code: "WSH", name: "Workplace Safety & Health", description: "Singapore certified safety training" },
];

export default function TeamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <PageHeader
        title="Our Team"
        subtitle="Meet our expert professionals with decades of combined experience"
        breadcrumb="Team"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team consists of highly qualified professionals from shipping backgrounds with
              extensive experience in marine operations and underwater services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-center">{member.name}</h3>
                  <p className="text-emerald-100 text-center text-sm mt-1">{member.role}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-emerald-600 font-medium text-sm mb-2">{member.qualification}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>

                  {/* Contact */}
                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        {member.phone}
                      </a>
                    )}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Certifications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Team Qualifications
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team holds numerous certifications from internationally recognized institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-600">{cert.code}</h3>
                    <p className="text-gray-900 text-sm font-medium">{cert.name}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p className="text-emerald-100">Combined Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">7+</div>
              <p className="text-emerald-100">Expert Professionals</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-emerald-100">Certifications Held</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-emerald-100">Qualified Staff</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
