import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { Target, Eye, CheckCircle, Award, Users, Globe } from "lucide-react";
import {
  buildMetadata,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generatePersonSchema,
  jsonLdString,
  siteConfig,
} from "@/lib/seo";

const TITLE = "About ICDS — Bangladesh's Bureau Veritas-Certified Diving Company";
const DESCRIPTION =
  "Founded in 2020, ICDS is a Bureau Veritas-certified commercial diving and marine repair company in Bangladesh. Our Master Mariners, MEO Class-1 marine engineers and IMCA-certified diving supervisors deliver underwater survey, inspection, salvage and class-approved welding services to shipping, port and government clients.";

export const metadata: Metadata = buildMetadata({
  title: "About Us — Leading Marine & Commercial Diving Company in Bangladesh",
  description: DESCRIPTION,
  path: "/about",
  image: "/images/og-about.jpg",
  imageAlt: "About ICDS — Bangladesh commercial diving company leadership team",
  keywords: [
    "about ICDS Bangladesh",
    "commercial diving company history",
    "marine services company Bangladesh",
    "underwater inspection company Chittagong",
    "Bureau Veritas service supplier Bangladesh",
    "IMCA certified diving company",
    "Master Mariner led marine company",
    "MEO Class 1 marine engineering",
    "Bangladesh maritime services since 2020",
    "ICDS founder CEO",
    "marine repair company Dhaka",
  ],
});

const breadcrumbData = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
];

const ceoPerson = generatePersonSchema({
  name: "Capt. Md. Ashraful Alam Neerob",
  jobTitle: "Founder & Chief Executive Officer",
  description:
    "Master Mariner (Class-1), Merchant Navy. Founder and CEO of International Commercial Diving Services (ICDS). Leads ICDS with over two decades of merchant navy and marine operations experience.",
  knowsAbout: [
    "Commercial Diving Operations",
    "Marine Surveying",
    "Underwater Inspection",
    "Ship Operations",
    "Maritime Safety",
  ],
  alumniOf: ["Bangladesh Marine Academy"],
});

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);
  const webPageSchema = generateWebPageSchema({
    url: "/about",
    name: TITLE,
    description: DESCRIPTION,
    breadcrumbId: breadcrumbSchema["@id"],
    image: "/images/og-about.jpg",
    type: "AboutPage",
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
        dangerouslySetInnerHTML={{ __html: jsonLdString(ceoPerson) }}
      />
      <Header />
      <main id="main-content" className="min-h-screen">
        <PageHeader
          title="About ICDS"
          subtitle="Bangladesh's leading Bureau Veritas-certified commercial diving and marine repair company since 2020"
          breadcrumb="About"
          backgroundImage="/images/hero-1.jpg"
        />

        {/* Introduction */}
        <section aria-labelledby="about-intro-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                  Who We Are
                </span>
                <h2
                  id="about-intro-heading"
                  className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6"
                >
                  M/S International Commercial Diving Services
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    We at <strong className="text-emerald-700">{siteConfig.legalName}</strong>{" "}
                    are proud to introduce ourselves as a leading marine repairing and underwater
                    survey/inspection company in Bangladesh, led by highly experienced
                    professionals from Master Mariner, Marine Engineer and Naval Diving
                    backgrounds.
                  </p>
                  <p>
                    Established in {siteConfig.foundingYear}, we provide a complete range of
                    marine-related repair, supply and underwater survey, inspection and salvage
                    services to the commercial shipping, port, oil &amp; gas and infrastructure
                    sectors. We pledge to offer cost-effective, reliable and class-approved
                    services to the entire satisfaction of our valuable clients and principals.
                  </p>
                  <p>
                    Our team consists of highly qualified Bureau Veritas-approved divers,
                    IMCA-certified supervisors and ASNT NDT Level-II inspectors who have served
                    on board commercial vessels at the top management level and on naval
                    salvage missions.
                  </p>
                  <p>
                    M/S International Commercial Diving Services was formed with a view to
                    provide world-class marine services to the marine industry — including
                    Marine Repair, Underwater Survey &amp; Inspection and Salvage — across
                    Bangladesh&apos;s Rivers and the Bay of Bengal.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/otheer-1.jpg"
                    alt="ICDS leadership team and divers conducting a pre-operation safety briefing on a Bangladesh job site"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-2xl -z-0" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/20 rounded-2xl -z-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section aria-label="Company milestones" className="py-16 bg-emerald-600">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">2020</div>
                <p className="text-emerald-100">Established</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <p className="text-emerald-100">Projects Completed</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">7+</div>
                <p className="text-emerald-100">Expert Team Members</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-emerald-100">Service Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section aria-labelledby="vision-mission-heading" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 id="vision-mission-heading" className="sr-only">
              Vision and Mission
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <article className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Eye className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Vision</h3>
                </div>
                <p className="text-emerald-100 font-medium mb-4">
                  &ldquo;We are your business partner&rdquo;
                </p>
                <p className="text-emerald-50 leading-relaxed mb-4">
                  To be the leading global underwater survey, inspection and marine repair
                  service provider with competent and qualified personnel.
                </p>
                <p className="text-emerald-50 leading-relaxed">
                  Shipping is an industry that never sleeps, where time is the most valuable
                  resource. We help our partners save this important resource while we handle
                  their marine service needs, allowing them to focus on the rest of their
                  business.
                </p>
              </article>

              {/* Mission */}
              <article className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-emerald-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">Cost-effective</span>
                      <p className="text-gray-600 text-sm">
                        Delivering maximum value for your investment
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">Global Quality</span>
                      <p className="text-gray-600 text-sm">
                        Meeting international statutory and class society standards
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">Ethical</span>
                      <p className="text-gray-600 text-sm">
                        Maintaining integrity in all our dealings
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We deliver our services to the principal&apos;s needs worldwide, maintaining
                  ethical and mutually beneficial relationships with our partners. We commit to
                  operate responsibly and care for our seafarers, employees and the environment.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Values */}
        <section aria-labelledby="values-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Our Values
              </span>
              <h2
                id="values-heading"
                className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4"
              >
                What We Stand For
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Integrity &amp; Professionalism
                </h3>
                <p className="text-gray-600">
                  We uphold the highest standards of integrity in all our business dealings and
                  maintain professional excellence in every service we provide.
                </p>
              </article>
              <article className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Globe className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Respect for All Cultures</h3>
                <p className="text-gray-600">
                  We embrace diversity and show respect for all cultures, creating an inclusive
                  environment for partners and employees worldwide.
                </p>
              </article>
              <article className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600">
                  We believe in open and honest communication, ensuring our clients are informed
                  at every stage of our collaboration.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CEO Message */}
        <section aria-label="Message from the CEO" className="py-20 bg-emerald-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <blockquote className="text-emerald-800 text-xl md:text-2xl italic leading-relaxed mb-8">
              &ldquo;If you need any marine repairs, underwater repairs or underwater
              survey/inspection with video graphic evidence under class surveyor attendance,
              don&apos;t hesitate to contact us.&rdquo;
            </blockquote>
            <div>
              <p className="font-bold text-gray-900 text-lg">Md. Ashraful Alam Neerob</p>
              <p className="text-emerald-600">Master Mariner (Class-1), Merchant Navy</p>
              <p className="text-gray-600">CEO (Chief Executive Officer)</p>
              <p className="text-gray-500 text-sm mt-1">
                International Commercial Diving Services
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
