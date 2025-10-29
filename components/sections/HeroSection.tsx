"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-full border border-teal-200"
            >
              <Sparkles className="w-5 h-5 text-teal-600" />
              <span className="text-sm font-medium text-teal-700">30+ Years of Excellence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-responsive-xl font-bold text-gray-900 leading-tight"
            >
              Your Smile,
              <br />
              <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent gradient-animate">
                Our Passion
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-responsive-md text-gray-600 leading-relaxed"
            >
              Experience world-class dental care with our family-owned practice. Advanced technology, personalized attention, and a commitment to your perfect smile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-semibold shadow-2xl hover:shadow-teal-500/50 smooth-hover flex items-center space-x-2"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl smooth-hover border-2 border-gray-200 hover:border-teal-500"
              >
                Our Services
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-8"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-teal-600" />
                <span className="text-sm font-medium text-gray-700">Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-teal-600" />
                <span className="text-sm font-medium text-gray-700">Award Winning</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/hero-image.png" 
                  alt="Enfield Medical and Dental" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-teal-100"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">4.9⭐</div>
              <div className="text-sm text-gray-600 mt-1">Patient Rating</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-2xl border border-cyan-100"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">5000+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Patients</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
