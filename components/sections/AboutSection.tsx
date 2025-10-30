"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, Award, Users } from "lucide-react";

const features = [
  "Over 30 years of trusted dental care",
  "Chinese-speaking dentists available",
  "Latest dental technology and equipment",
  "Flexible payment options available",
  "Most insurance plans accepted",
  "Family-friendly environment",
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold"
            >
              About Us
            </motion.span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Welcome to Enfield Medical & Dental
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              <strong>Enfield Medical and Dental</strong> is a trusted, family-owned practice with experienced Chinese-speaking dentists and long-standing staff. We provide personalized, high-quality care for all ages—from routine check-ups to advanced treatments—using the latest technology.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We focus on prevention and patient education to support long-term oral health, with flexible payment options and most insurance plans accepted. Experience compassionate care in a warm, welcoming environment.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all mt-6 min-h-[48px] touch-manipulation text-sm sm:text-base"
            >
              Learn More About Us
            </motion.a>
          </motion.div>

          {/* Right Column - Office Photos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Office Photos Grid */}
            <div className="grid gap-4 sm:gap-6">
              {/* Large Office Photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-shadow"
              >
                <img
                  src="/enfield-dental/images/office-1.jpg"
                  alt="Modern Enfield Medical and Dental clinic interior with state-of-the-art facilities"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-semibold text-sm sm:text-base">Modern Clinic Interior</p>
                  <p className="text-xs sm:text-sm text-white/90">State-of-the-art facilities</p>
                </div>
              </motion.div>

              {/* Stats and Second Photo Row */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Second Office Photo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative h-[200px] sm:h-[250px] rounded-2xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src="/enfield-dental/images/office-2.jpg"
                    alt="Enfield Medical and Dental treatment room with advanced dental equipment"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-xs sm:text-sm">Treatment Room</p>
                    <p className="text-[10px] sm:text-xs text-white/90">Advanced equipment</p>
                  </div>
                </motion.div>

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 rounded-2xl p-6 text-white shadow-lg flex flex-col justify-center"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl sm:text-4xl font-bold">30+</div>
                        <div className="text-xs sm:text-sm text-teal-100">Years Experience</div>
                      </div>
                      <Award className="w-10 h-10 sm:w-12 sm:h-12 opacity-80" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl sm:text-4xl font-bold">5000+</div>
                        <div className="text-xs sm:text-sm text-teal-100">Happy Patients</div>
                      </div>
                      <Heart className="w-10 h-10 sm:w-12 sm:h-12 opacity-80" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl sm:text-4xl font-bold">⭐ 4.9</div>
                        <div className="text-xs sm:text-sm text-teal-100">Rating</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
