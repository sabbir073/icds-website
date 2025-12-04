"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Equipment", href: "/equipment" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-emerald-700 text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+8801813087877" className="flex items-center gap-2 hover:text-emerald-200 transition">
              <Phone size={14} />
              <span>+880 1813-087877</span>
            </a>
            <a href="mailto:info@icdsbd.com" className="flex items-center gap-2 hover:text-emerald-200 transition">
              <Mail size={14} />
              <span>info@icdsbd.com</span>
            </a>
          </div>
          <div className="text-emerald-200">
            Your Trusted Marine Services Partner Since 2020
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="ICDS Logo"
                width={70}
                height={70}
                className="h-16 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-emerald-700 font-bold text-lg leading-tight">
                  International Commercial
                </h1>
                <p className="text-emerald-600 text-sm">Diving Services</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 font-medium transition-colors relative group ${
                    pathname === link.href
                      ? "text-emerald-600"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-emerald-600 transition-all duration-300 ${
                      pathname === link.href
                        ? "w-3/4 left-[12.5%]"
                        : "w-0 group-hover:w-3/4 group-hover:left-[12.5%]"
                    }`}
                  />
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg"
              >
                Get Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 transition"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="bg-white border-t px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 font-medium border-b border-gray-100 transition-colors ${
                  pathname === link.href
                    ? "text-emerald-600"
                    : "text-gray-700 hover:text-emerald-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-4 px-6 py-3 bg-emerald-600 text-white text-center rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
