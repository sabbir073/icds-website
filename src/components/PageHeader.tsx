"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
  backgroundImage?: string;
}

export default function PageHeader({
  title,
  subtitle,
  breadcrumb,
  backgroundImage = "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
}: PageHeaderProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-sm mb-6">
          <Link href="/" className="text-emerald-300 hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 text-emerald-400" />
          <span className="text-white">{breadcrumb}</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-emerald-100 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
