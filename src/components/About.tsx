"use client";

import Image from "next/image";
import { Target, Eye, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Leading Marine Services Provider in Bangladesh
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
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Bureau Veritas Certified</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Class Approved Welding</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Video Graphic Evidence</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/otheer-1.jpg"
                alt="ICDS Team Briefing at Work Site"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-emerald-100 rounded-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-600/20 rounded-2xl -z-0" />
          </div>
        </div>

        {/* Vision & Mission */}
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
          <div className="bg-gray-50 rounded-2xl p-8">
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

        {/* CEO Message */}
        <div className="mt-16 bg-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-emerald-800 text-lg md:text-xl italic leading-relaxed mb-6">
              &ldquo;If you need any marine repairs, underwater repairs & underwater survey/inspection
              with video graphic evidence under class surveyor attendance, don&apos;t hesitate to
              contract with us.&rdquo;
            </p>
            <div>
              <p className="font-bold text-gray-900">Md. Ashraful Alam Neerob</p>
              <p className="text-emerald-600">Master Mariner (Class-1), Merchant Navy</p>
              <p className="text-gray-600 text-sm">CEO (Chief Executive Officer)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
