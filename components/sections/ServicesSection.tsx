"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Invisalign & 3D Digital Scanning",
    description: "iTero intraoral 3D digital scanner provides a dynamic snapshot of your oral health with caries detection and demonstrates treatment plans for Invisalign.",
    image: "/enfield-dental/images/office-1.jpg",
  },
  {
    title: "Cosmetic & Restorative Dentistry",
    description: "Complete smile makeovers including teeth whitening, veneers, crowns, orthodontic treatment, fillings, and fixed appliances to restore functionality and boost confidence.",
    image: "/enfield-dental/images/office-2.jpg",
  },
  {
    title: "Laser Dentistry",
    description: "Fotona Lightwalker - the most powerful dental laser with 2 wavelengths. Enhanced treatments including Nightlase anti-snoring, pain management, and facial aesthetics.",
    image: "/enfield-dental/images/office-1.jpg",
  },
  {
    title: "Family Dental Care",
    description: "Comprehensive dental care for all ages, from routine check-ups to advanced treatments. We focus on prevention and patient education for long-term oral health.",
    image: "/enfield-dental/images/team-photo.jpg",
  },
  {
    title: "Emergency Dental Services",
    description: "Prompt and professional emergency dental care when you need it most. We understand dental emergencies can't wait and offer same-day appointments.",
    image: "/enfield-dental/images/office-2.jpg",
  },
  {
    title: "Chinese-Speaking Dentists",
    description: "Experienced Chinese-speaking dentists and long-standing staff providing personalized, high-quality care in a language you're comfortable with.",
    image: "/enfield-dental/images/team-photo-full.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-white">
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[0.95] tracking-tight">
            Premium dental
            <br />
            <span className="text-gray-400">care services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            From routine check-ups to advanced treatments, experience excellence in every visit
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
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
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200 cursor-pointer touch-manipulation shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Clean Image */}
              <div className="relative h-52 sm:h-60 md:h-64 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Subtle Dark Overlay on Hover Only */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 lg:p-8">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-teal-600 transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-4">
                  {service.description}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="#booking"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all min-h-[48px] touch-manipulation text-sm sm:text-base"
          >
            Book Your Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
