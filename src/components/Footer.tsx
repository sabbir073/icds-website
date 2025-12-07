"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter, Instagram, ArrowUp, Anchor } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Underwater Survey & Inspection",
  "Underwater Repair Services",
  "Underwater Cleaning",
  "Salvage Operations",
  "Underwater Welding",
  "Buoy Maintenance",
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="ICDS Logo"
                width={60}
                height={60}
                className="h-14 w-auto bg-white rounded-lg p-1"
              />
              <div>
                <h3 className="font-bold text-lg">ICDS</h3>
                <p className="text-emerald-400 text-sm">Since 2020</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              International Commercial Diving Services - Your trusted partner for marine
              repair and underwater survey services in Bangladesh.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Anchor className="w-5 h-5 text-emerald-500" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Anchor className="w-5 h-5 text-emerald-500" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Anchor className="w-5 h-5 text-emerald-500" />
              Contact Info
            </h4>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-medium text-white mb-1">Head Office - Dhaka:</p>
                <p className="text-sm">
                  Omar Shahjahan Tower, 506 Shah Kabir Mazar Road,
                  Azampur Rail Gate, Uttara-1230, Dhaka
                </p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Chittagong Office:</p>
                <p className="text-sm">
                  IIUC Tower, Holding # 1700/A, 11th Floor, Plot # 9,
                  Agrabad C/A, Sheikh Mujib Road, Chittagong - 4100
                </p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Phone:</p>
                <div className="space-y-1 text-sm">
                  <a href="tel:+8801813087877" className="block hover:text-emerald-400">
                    +880 1813-087877 (Capt. Ashraful)
                  </a>
                  <a href="tel:+8801782526828" className="block hover:text-emerald-400">
                    +880 1782-526828 (Md. Jamal)
                  </a>
                </div>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email:</p>
                <div className="space-y-1 text-sm">
                  <a href="mailto:info@icdsbd.com" className="block hover:text-emerald-400">
                    info@icdsbd.com
                  </a>
                  <a href="mailto:icdsctg@gmail.com" className="block hover:text-emerald-400">
                    icdsctg@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600/20 rounded flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-xs">BV</span>
              </div>
              <span>Bureau Veritas Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600/20 rounded flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-xs">TIN</span>
              </div>
              <span>Tax Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600/20 rounded flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-xs">VAT</span>
              </div>
              <span>VAT Registered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600/20 rounded flex items-center justify-center">
                <span className="text-emerald-400 font-bold text-xs">CCC</span>
              </div>
              <span>Chittagong City Corporation Licensed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} International Commercial Diving Services.
              All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
