"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  Clock,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    items: [
      { label: "Capt. Ashraful Alam", value: "+880 1813-087877" },
      { label: "Md. Jamal Hossain Rubel", value: "+880 1782-526828" },
      { label: "Md. Towhidul Islam", value: "+65 9279 3564" },
    ],
  },
  {
    icon: Mail,
    title: "Email Addresses",
    items: [
      { label: "General Inquiries", value: "info@icdsbd.com" },
      { label: "Operations", value: "icdsctg@gmail.com" },
      { label: "Additional", value: "icdsoperataion@gmail.com" },
    ],
  },
];

const offices = [
  {
    name: "Head Office - Dhaka",
    address:
      "Omar Shahjahan Tower, 506 Shah Kabir Mazar Road, Azampur Rail Gate, Uttara-1230, Dhaka, Bangladesh",
  },
  {
    name: "Chittagong Office",
    address:
      "IIUC Tower, Holding # 1700/A, 11th Floor, Plot # 9, Agrabad, C/A, Sheikh Mujib Road, Chittagong - 4100, Bangladesh",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    }, 5000);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our expert team"
        breadcrumb="Contact"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Request a Quote
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    Thank you for contacting International Commercial Diving Services.
                    Our team will review your inquiry and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="survey">Underwater Survey & Inspection</option>
                      <option value="repair">Underwater Repair</option>
                      <option value="cleaning">Underwater Cleaning</option>
                      <option value="salvage">Salvage Operations</option>
                      <option value="welding">Underwater Welding</option>
                      <option value="channel">Channel Setting & Construction</option>
                      <option value="buoy">Buoy Services</option>
                      <option value="towing">Salvage & Towing</option>
                      <option value="logistics">Logistics & Equipment</option>
                      <option value="other">Other Services</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Please describe your project requirements, timeline, and any specific details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="bg-emerald-50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
                    </div>
                    <div className="space-y-3">
                      {info.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-gray-600">{item.label}</span>
                          {info.icon === Phone ? (
                            <a
                              href={`tel:${item.value.replace(/\s/g, "")}`}
                              className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <a
                              href={`mailto:${item.value}`}
                              className="text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                            >
                              {item.value}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Offices */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Our Offices</h3>
                </div>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="border-l-2 border-emerald-500 pl-4">
                      <h4 className="font-semibold text-gray-900">{office.name}</h4>
                      <p className="text-gray-600 text-sm">{office.address}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-600 rounded-2xl p-6 text-white">
                  <Globe className="w-8 h-8 mb-3" />
                  <h4 className="font-bold mb-1">Website</h4>
                  <a
                    href="https://www.icdsbd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-200 hover:text-white text-sm"
                  >
                    www.icdsbd.com
                  </a>
                </div>
                <div className="bg-teal-700 rounded-2xl p-6 text-white">
                  <Clock className="w-8 h-8 mb-3" />
                  <h4 className="font-bold mb-1">Available</h4>
                  <p className="text-teal-200 text-sm">24/7 Emergency Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-emerald-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Serving All of Bangladesh</h2>
            <p className="text-emerald-100 max-w-2xl mx-auto">
              With offices in Dhaka and Chittagong, we provide marine services throughout
              Bangladesh&apos;s rivers and coastal waters. Our team is ready to deploy for your
              project anywhere in the country.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
