"use client";

import { useEffect, useState } from "react";
import { Anchor, Shield, Award } from "lucide-react";
import Link from "next/link";

// Pre-defined bubble positions to avoid hydration mismatch
const bubbleData = [
  { width: 15, height: 15, left: 10, top: 20, delay: 0, duration: 4 },
  { width: 20, height: 20, left: 25, top: 45, delay: 1, duration: 5 },
  { width: 12, height: 12, left: 40, top: 15, delay: 2, duration: 3.5 },
  { width: 18, height: 18, left: 55, top: 70, delay: 0.5, duration: 4.5 },
  { width: 14, height: 14, left: 70, top: 30, delay: 1.5, duration: 3.8 },
  { width: 22, height: 22, left: 85, top: 55, delay: 2.5, duration: 5.2 },
  { width: 16, height: 16, left: 15, top: 80, delay: 3, duration: 4.2 },
  { width: 19, height: 19, left: 30, top: 60, delay: 0.8, duration: 3.6 },
  { width: 13, height: 13, left: 60, top: 85, delay: 1.8, duration: 4.8 },
  { width: 17, height: 17, left: 75, top: 10, delay: 2.2, duration: 3.3 },
  { width: 21, height: 21, left: 90, top: 40, delay: 3.5, duration: 5.5 },
  { width: 11, height: 11, left: 5, top: 50, delay: 4, duration: 4.1 },
  { width: 24, height: 24, left: 45, top: 35, delay: 1.2, duration: 3.9 },
  { width: 14, height: 14, left: 65, top: 65, delay: 2.8, duration: 4.4 },
  { width: 18, height: 18, left: 80, top: 25, delay: 0.3, duration: 5.1 },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-1.jpg')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

      {/* Animated bubbles - only render after mount to avoid hydration issues */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {bubbleData.map((bubble, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-float"
              style={{
                width: `${bubble.width}px`,
                height: `${bubble.height}px`,
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                animationDelay: `${bubble.delay}s`,
                animationDuration: `${bubble.duration}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-emerald-600/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            Since 2020 - Trusted Marine Solutions
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-shadow leading-tight">
          International Commercial
          <br />
          <span className="text-emerald-400">Diving Services</span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 text-shadow">
          Leading marine repairing and underwater survey/inspection company in Bangladesh,
          delivering cost-effective, reliable, and trustworthy services.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/services"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Services
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30">
            <Anchor className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
            <h3 className="text-3xl font-bold text-emerald-400">5+</h3>
            <p className="text-white">Years Experience</p>
          </div>
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30">
            <Shield className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
            <h3 className="text-3xl font-bold text-emerald-400">100%</h3>
            <p className="text-white">Safety Record</p>
          </div>
          <div className="bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30">
            <Award className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
            <h3 className="text-3xl font-bold text-emerald-400">Bureau Veritas</h3>
            <p className="text-white">Certified</p>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
