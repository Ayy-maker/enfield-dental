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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Care
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From routine check-ups to advanced treatments, we offer a full range of dental services using the latest technology
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full opacity-50"></div>
              
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
