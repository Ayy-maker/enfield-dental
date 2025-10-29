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
    <section id="about" className="py-20 sm:py-32 bg-gray-50">
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

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Welcome to Enfield Medical & Dental
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Enfield Medical and Dental</strong> is a trusted, family-owned practice with experienced Chinese-speaking dentists and long-standing staff. We provide personalized, high-quality care for all ages—from routine check-ups to advanced treatments—using the latest technology.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We focus on prevention and patient education to support long-term oral health, with flexible payment options and most insurance plans accepted. Experience compassionate care in a warm, welcoming environment.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
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
              className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all mt-6"
            >
              Learn More About Us
            </motion.a>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl text-white">
                  <div>
                    <div className="text-3xl font-bold">30+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <Award className="w-12 h-12 opacity-80" />
                </div>

                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl text-white">
                  <div>
                    <div className="text-3xl font-bold">5000+</div>
                    <div className="text-green-100">Happy Patients</div>
                  </div>
                  <Heart className="w-12 h-12 opacity-80" />
                </div>

                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white">
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-orange-100">Satisfaction Rate</div>
                  </div>
                  <Users className="w-12 h-12 opacity-80" />
                </div>
              </div>
            </div>

            {/* Floating Element */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-6 rounded-2xl shadow-2xl"
            >
              <div className="text-3xl font-bold">⭐ 4.9</div>
              <div className="text-sm text-yellow-100">Rating</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
