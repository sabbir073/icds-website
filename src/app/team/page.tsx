import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Phone, Award } from "lucide-react";
import {
  buildMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateItemListSchema,
  jsonLdString,
  absoluteUrl,
} from "@/lib/seo";

const TITLE = "Our Expert Diving & Marine Engineering Team";
const DESCRIPTION =
  "Meet the ICDS team — Master Mariners, MEO Class-1 marine engineers, IMCA-certified diving supervisors, ASNT NDT Level-II inspectors and Bangladesh Navy commando divers delivering Bureau Veritas-approved underwater services across Bangladesh.";

export const metadata: Metadata = buildMetadata({
  title: "Our Team — Master Mariners, IMCA Divers & Marine Engineers",
  description: DESCRIPTION,
  path: "/team",
  image: "/images/og-team.jpg",
  imageAlt: "ICDS expert diving team — Bangladesh commercial diving professionals",
  keywords: [
    "IMCA certified divers Bangladesh",
    "marine engineers Bangladesh",
    "diving supervisor Chittagong",
    "Master Mariner diving company",
    "MEO Class 1 Bangladesh",
    "commercial diving team Bangladesh",
    "underwater welding experts",
    "diving professionals Chittagong",
    "SSDE certified diver",
    "ASNT NDT Level 2 inspector",
    "Bangladesh Navy clearance diver",
    "salvage supervisor Bangladesh",
  ],
});

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
    bio: "Leads ICDS with extensive merchant navy experience and deep expertise in marine operations, vessel management and class-society compliance.",
    knowsAbout: [
      "Marine Operations",
      "Ship Management",
      "Maritime Safety",
      "Class Society Compliance",
    ],
  },
  {
    name: "A.K.M Zakir Hossain",
    role: "COO (Chief Operating Officer)",
    qualification: "MEO - Class 1 (Singapore)",
    phone: "+8801841-576804",
    email: "info@icdsbd.com",
    bio: "Oversees daily operations across Dhaka and Chittagong with deep knowledge of marine engineering, vessel maintenance and dry-dock projects.",
    knowsAbout: ["Marine Engineering", "Operations Management", "Vessel Maintenance"],
  },
  {
    name: "Mar. Engr. Md Al Mamun",
    role: "CTO (Chief Technical Officer)",
    qualification: "MEO - Class 1 (Singapore), ASNT NDT Level II",
    phone: "+8801716530686",
    email: "info@icdsbd.com",
    bio: "Drives technical leadership at ICDS combining MEO Class-1 marine engineering credentials with ASNT NDT Level-II non-destructive testing expertise.",
    knowsAbout: ["Marine Engineering", "Non-Destructive Testing", "Technical Inspection"],
  },
  {
    name: "Md. Jamal Hossain Rubel",
    role: "Managing Partner",
    qualification: "Specialist / Expert on Salvage & Towing Operation",
    phone: "+8801782526828",
    email: "info@icdsbd.com",
    bio: "Started his career with PS. Salvage in 2003 as Salvage Supervisor and was promoted to Salvage Manager. Founded S.R. Logistics in 2016. Expert in diving, salvage and towing operations including offshore structures, marine sectors, pipelines and oil & gas projects.",
    knowsAbout: ["Salvage Operations", "Towing", "Offshore Logistics", "Oil & Gas Projects"],
  },
  {
    name: "Md. Towhidul Islam",
    role: "Partner",
    qualification: "Diving Supervisor — In-Water Cutting & Welding, Survey & Inspection",
    phone: "+65 9279 3564",
    email: "info@icdsbd.com",
    bio: "Joined Bangladesh Navy in 2001 as AB Clearance Diver III. 10+ years of Navy service including commando operations, 7+ years at Sembcorp Marine Singapore and 4+ years at Singapore Salvage Engineer. Certified SSDE Supervisor, CSCUBA Level I and SMAW 3G welder.",
    knowsAbout: [
      "Diving Supervision",
      "Underwater Welding",
      "In-Water Cutting",
      "Commercial SCUBA",
    ],
  },
  {
    name: "Lt. Fazal Haque SCPO(X)(CD)",
    role: "Diving Supervisor",
    qualification: "Survey & Inspection Specialist",
    email: "info@icdsbd.com",
    bio: "Bangladesh Navy Commando and Clearance Diver with advanced training and UN Mission experience in South Sudan. Recipient of Force Commander's Commendation for salvage diving operations. Specialises in advanced dive supervision and diving medicine.",
    knowsAbout: ["Dive Supervision", "Diving Medicine", "Underwater Salvage"],
  },
  {
    name: "Md. Sazzad Hossain",
    role: "Specialist Diver",
    qualification: "In-water Cutting & Welding, Survey & Inspection",
    email: "info@icdsbd.com",
    bio: "14+ years experience as a clearance diver in Bangladesh, 4+ years in channel setting, geo-bag work, soil testing and salvage operations, plus 4.5 years of shipyard diving experience. Certified ADC International Surface-Supplied Air Diver.",
    knowsAbout: [
      "Clearance Diving",
      "Channel Setting",
      "Soil Testing",
      "Shipyard Diving",
    ],
  },
];

const certifications = [
  { code: "SSDE", name: "Surface Supplied Diving Equipment", description: "Professional diving certification" },
  { code: "CSCUBA", name: "Commercial SCUBA Certification", description: "Commercial underwater breathing apparatus" },
  { code: "NDT II", name: "Non-Destructive Testing Level II", description: "ASNT certified inspection" },
  { code: "MEO-1", name: "Marine Engineer Officer Class 1", description: "Highest marine engineering certification" },
  { code: "SMAW", name: "Shielded Metal Arc Welding", description: "Certified underwater welding (3G position)" },
  { code: "WSH", name: "Workplace Safety & Health", description: "Singapore certified safety training" },
];

export default function TeamPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);
  const webPageSchema = generateWebPageSchema({
    url: "/team",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbId: breadcrumbSchema["@id"],
    image: "/images/og-team.jpg",
    type: "CollectionPage",
  });
  const teamItemList = generateItemListSchema({
    url: "/team",
    name: "ICDS Leadership and Specialist Diving Team",
    description:
      "Master Mariners, MEO Class-1 marine engineers, IMCA-certified diving supervisors and Bangladesh Navy clearance divers leading commercial diving operations at ICDS.",
    items: teamMembers,
    toListItem: (member) => ({
      item: {
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        ...(member.email ? { email: member.email } : {}),
        ...("phone" in member && member.phone ? { telephone: member.phone } : {}),
        knowsAbout: member.knowsAbout,
        worksFor: { "@id": `${absoluteUrl("/")}#organization` },
      },
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
        dangerouslySetInnerHTML={{ __html: jsonLdString(teamItemList) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen">
        <PageHeader
          title="Our Team"
          subtitle="Master Mariners, marine engineers, IMCA-certified diving supervisors and specialist divers with decades of combined experience"
          breadcrumb="Team"
          backgroundImage="/images/other-3.jpg"
        />

        {/* Team Members */}
        <section aria-labelledby="team-list-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Leadership
              </span>
              <h2
                id="team-list-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
              >
                Our Expert Diving Team
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Highly qualified professionals from shipping, naval and offshore backgrounds
                with extensive experience in marine operations and commercial diving.
              </p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <li
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <article aria-labelledby={`member-${index}-name`}>
                    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
                      <div
                        className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold"
                        aria-hidden="true"
                      >
                        {member.name.charAt(0)}
                      </div>
                      <h3
                        id={`member-${index}-name`}
                        className="text-xl font-bold text-center"
                      >
                        {member.name}
                      </h3>
                      <p className="text-emerald-100 text-center text-sm mt-1">{member.role}</p>
                    </div>

                    <div className="p-6">
                      <div className="mb-4">
                        <p className="text-emerald-600 font-medium text-sm mb-2">
                          {member.qualification}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 space-y-2">
                        {"phone" in member && member.phone && (
                          <a
                            href={`tel:${member.phone}`}
                            className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                            aria-label={`Call ${member.name}`}
                          >
                            <Phone className="w-4 h-4" aria-hidden="true" />
                            {member.phone}
                          </a>
                        )}
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors text-sm"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail className="w-4 h-4" aria-hidden="true" />
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section aria-labelledby="team-cert-heading" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Certifications
              </span>
              <h2
                id="team-cert-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
              >
                Team Qualifications &amp; Industry Certifications
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our team holds certifications from internationally recognised institutions
                including IMCA, ASNT, ADC International, Bangladesh Navy and Singapore WSH.
              </p>
            </div>

            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <article>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-bold text-emerald-600">{cert.code}</h3>
                        <p className="text-gray-900 text-sm font-medium">{cert.name}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Experience Stats */}
        <section aria-label="Team experience statistics" className="py-16 bg-emerald-600">
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
      </main>
      <Footer />
    </>
  );
}
