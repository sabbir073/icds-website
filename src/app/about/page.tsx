import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Target, Eye, CheckCircle, Award, Users, Globe } from "lucide-react";
import { siteConfig, generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us - Leading Marine Services Company in Bangladesh",
  description:
    "Learn about ICDS - International Commercial Diving Services. Established in 2020, we are Bangladesh's leading marine repairing and underwater survey/inspection company with Bureau Veritas certification and IMCA certified divers.",
  keywords: [
    "about ICDS",
    "commercial diving company Bangladesh",
    "marine services company",
    "underwater inspection company",
    "Bureau Veritas certified diving",
    "IMCA certified divers Bangladesh",
    "marine repair company Chittagong",
    "diving company history",
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About ICDS - International Commercial Diving Services",
    description:
      "Established in 2020, ICDS is Bangladesh's leading marine repairing and underwater survey/inspection company.",
    url: `${siteConfig.url}/about`,
    images: [
      {
        url: `${siteConfig.url}/images/og-about.jpg`,
        width: 1200,
        height: 630,
        alt: "About ICDS - Commercial Diving Services",
      },
    ],
  },
};

const breadcrumbData = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
];

export default function AboutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbData);

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <PageHeader
        title="About Us"
        subtitle="Leading marine services provider in Bangladesh since 2020"
        breadcrumb="About"
        backgroundImage="/images/hero-1.jpg"
      />

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Introduction
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                M/S International Commercial Diving Services
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We at <strong className="text-emerald-700">M/S International Commercial Diving Services</strong> are
                  proud to introduce ourselves as a leading marine repairing and underwater survey/inspection
                  company in Bangladesh, led by highly experienced professionals.
                </p>
                <p>
                  Established in 2020, we provide all kinds of marine-related repair, supply, and underwater
                  survey & inspection services to the marine industry in Bangladesh. We pledge to offer
                  cost-effective, reliable, and trustworthy services with the entire satisfaction of our
                  valuable clients and principals.
                </p>
                <p>
                  We have a team of highly qualified professionals to deal with any marine-related repairs,
                  supply, underwater survey inspection & repairs matters. Our team is led by highly experienced
                  professionals from shipping backgrounds who have served on board at the top management level.
                </p>
                <p>
                  M/S International Commercial Diving Services was formed with a view to provide quality services
                  to the marine industry including Marine Repair and Underwater Survey & Inspection including
                  salvage in Bangladesh Territory&apos;s Rivers & Sea.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/otheer-1.jpg"
                  alt="ICDS Team Briefing at Work Site"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-2xl -z-0" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/20 rounded-2xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-emerald-600">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-emerald-100 font-medium mb-4">
                &ldquo;We are your business partner&rdquo;
              </p>
              <p className="text-emerald-50 leading-relaxed mb-4">
                Aiming to be the leading global underwater survey, inspection, and marine repair service
                provider with competent and qualified personnel.
              </p>
              <p className="text-emerald-50 leading-relaxed">
                Shipping is an industry that never sleeps, where &apos;time&apos; is a valuable resource. We help
                our partners save this important resource while we handle their marine service needs,
                allowing them to focus on other areas of their business.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Cost-effective</span>
                    <p className="text-gray-600 text-sm">Delivering maximum value for your investment</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Global Quality</span>
                    <p className="text-gray-600 text-sm">Meeting international statutory standards</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Ethical</span>
                    <p className="text-gray-600 text-sm">Maintaining integrity in all our dealings</p>
                  </div>
                </li>
              </ul>
              <p className="text-gray-600 text-sm leading-relaxed">
                We deliver our services to the principal&apos;s needs worldwide, maintaining ethical and
                mutually beneficial relationships with our partners. We commit to operate responsibly
                and care for our seafarers, employees, and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity & Professionalism</h3>
              <p className="text-gray-600">
                We uphold the highest standards of integrity in all our business dealings and maintain
                professional excellence in every service we provide.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Globe className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Respect for All Cultures</h3>
              <p className="text-gray-600">
                We embrace diversity and show respect for all cultures, creating an inclusive environment
                for partners and employees worldwide.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">
                We believe in open and honest communication, ensuring our clients are informed at every
                stage of our collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-emerald-800 text-xl md:text-2xl italic leading-relaxed mb-8">
            &ldquo;If you need any marine repairs, underwater repairs & underwater survey/inspection
            with video graphic evidence under class surveyor attendance, don&apos;t hesitate to
            contract with us.&rdquo;
          </p>
          <div>
            <p className="font-bold text-gray-900 text-lg">Md. Ashraful Alam Neerob</p>
            <p className="text-emerald-600">Master Mariner (Class-1), Merchant Navy</p>
            <p className="text-gray-600">CEO (Chief Executive Officer)</p>
            <p className="text-gray-500 text-sm mt-1">International Commercial Diving Services</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
