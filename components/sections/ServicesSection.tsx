"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Invisalign & 3D Digital Scanning",
    description: "iTero intraoral 3D digital scanner provides a dynamic snapshot of your oral health with caries detection and demonstrates treatment plans for Invisalign.",
    image: "/enfield-dental/images/office-1.jpg",
    gradient: "from-blue-500 to-cyan-500",
    iconSvg: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Cosmetic & Restorative Dentistry",
    description: "Complete smile makeovers including teeth whitening, veneers, crowns, orthodontic treatment, fillings, and fixed appliances to restore functionality and boost confidence.",
    image: "/enfield-dental/images/office-2.jpg",
    gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    iconSvg: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/>
        <circle cx="8.5" cy="10.5" r="1.5" fill="currentColor"/>
        <circle cx="15.5" cy="10.5" r="1.5" fill="currentColor"/>
        <path d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Laser Dentistry",
    description: "Fotona Lightwalker - the most powerful dental laser with 2 wavelengths. Enhanced treatments including Nightlase anti-snoring, pain management, and facial aesthetics.",
    image: "/enfield-dental/images/office-1.jpg",
    gradient: "from-orange-500 to-red-500",
    iconSvg: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Family Dental Care",
    description: "Comprehensive dental care for all ages, from routine check-ups to advanced treatments. We focus on prevention and patient education for long-term oral health.",
    image: "/enfield-dental/images/team-photo.jpg",
    gradient: "from-green-500 to-teal-500",
    iconSvg: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
        <path d="M20 10h-2V8h-2v2h-2v2h2v2h2v-2h2v-2z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Emergency Dental Services",
    description: "Prompt and professional emergency dental care when you need it most. We understand dental emergencies can't wait and offer same-day appointments.",
    image: "/enfield-dental/images/office-2.jpg",
    gradient: "from-indigo-500 to-blue-500",
    iconSvg: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Chinese-Speaking Dentists",
    description: "Experienced Chinese-speaking dentists and long-standing staff providing personalized, high-quality care in a language you're comfortable with.",
    image: "/enfield-dental/images/team-photo-full.jpg",
    gradient: "from-rose-500 to-pink-500",
    iconSvg: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" fill="currentColor"/>
        <path d="M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" fill="currentColor"/>
      </svg>
    ),
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
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 card-hover cursor-pointer touch-manipulation shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-70 group-hover:opacity-80 transition-opacity duration-300`}></div>
                
                {/* Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white opacity-90 group-hover:scale-110 transition-transform duration-300">
                    {service.iconSvg}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 lg:p-8">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
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
