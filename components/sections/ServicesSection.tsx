"use client";

import { motion } from "framer-motion";
import { Sparkles, Scan, Smile, Zap, Heart, Users } from "lucide-react";

const services = [
  {
    icon: Scan,
    title: "Invisalign & 3D Digital Scanning",
    description: "iTero intraoral 3D digital scanner provides a dynamic snapshot of your oral health with caries detection and demonstrates treatment plans for Invisalign.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Smile,
    title: "Cosmetic & Restorative Dentistry",
    description: "Complete smile makeovers including teeth whitening, veneers, crowns, orthodontic treatment, fillings, and fixed appliances to restore functionality and boost confidence.",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Laser Dentistry",
    description: "Fotona Lightwalker - the most powerful dental laser with 2 wavelengths. Enhanced treatments including Nightlase anti-snoring, pain management, and facial aesthetics.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Family Dental Care",
    description: "Comprehensive dental care for all ages, from routine check-ups to advanced treatments. We focus on prevention and patient education for long-term oral health.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Sparkles,
    title: "Emergency Dental Services",
    description: "Prompt and professional emergency dental care when you need it most. We understand dental emergencies can't wait and offer same-day appointments.",
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Chinese-Speaking Dentists",
    description: "Experienced Chinese-speaking dentists and long-standing staff providing personalized, high-quality care in a language you're comfortable with.",
    gradient: "from-rose-500 to-pink-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16 sm:mb-20"
        >
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-1 h-8 bg-black"></div>
            <span className="text-xs font-medium tracking-widest uppercase text-gray-600">
              Services
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[0.95] tracking-tight">
            Premium dental
            <br />
            <span className="text-gray-400">care services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            From routine check-ups to advanced treatments, experience excellence in every visit
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 card-hover cursor-pointer"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-4 sm:mb-6 scale-hover`}>
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-black transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Book Your Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
