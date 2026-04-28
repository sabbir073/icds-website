import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Anchor, Home, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Page Not Found (404)",
  description:
    "The page you are looking for could not be found. Browse our commercial diving, underwater survey, marine repair and salvage services or contact ICDS in Bangladesh.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <section
          aria-labelledby="not-found-heading"
          className="relative py-32 bg-gradient-to-br from-emerald-600 to-teal-700 text-white"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div
              className="w-24 h-24 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <Anchor className="w-12 h-12" />
            </div>
            <p className="text-7xl md:text-8xl font-bold mb-4">404</p>
            <h1
              id="not-found-heading"
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              We couldn&apos;t locate that page
            </h1>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-8">
              The page you are looking for may have been moved, renamed or no longer exists.
              Use the links below to continue exploring our commercial diving and marine
              services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                <Home className="w-5 h-5" aria-hidden="true" />
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                View Services
              </Link>
              <a
                href="tel:+8801813087877"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                aria-label="Call ICDS at +880 1813-087877"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Us
              </a>
            </div>
          </div>
        </section>

        <section aria-label="Popular destinations" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Popular Destinations
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { name: "About ICDS", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Our Team", href: "/team" },
                { name: "Equipment", href: "/equipment" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
