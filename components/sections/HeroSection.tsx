"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Award, Phone } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="flex items-center space-x-2 px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                <Sparkles className="w-3 h-3" />
                <span>30+ YEARS EXCELLENCE</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
            >
              Discover
              <br />
              the perfect
              <br />
              <span className="text-teal-600">smile</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-lg"
            >
              Your trusted dental practice for premium care, offering personalized service and cutting-edge treatments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 bg-black text-white rounded-full font-medium flex items-center space-x-2 hover:bg-gray-900 transition-all glow-hover overflow-hidden"
              >
                <span>Book appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.a
                href="tel:+61297474777"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium border border-gray-200 hover:border-black transition-all flex items-center space-x-2 smooth-hover"
              >
                <Phone className="w-4 h-4" />
                <span>(02) 9747 4777</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="grid grid-cols-3 gap-6 sm:gap-8 pt-8 max-w-lg"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">5000+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Happy patients</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">30+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Years experience</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="cursor-default"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">4.9</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Rating</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[500px] sm:h-[600px] lg:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden group">
              <motion.img 
                src="/images/team-photo-full.jpg" 
                alt="Enfield Medical and Dental Team" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
              />
              {/* Overlay badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 glass px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-2xl"
              >
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-teal-500 border-2 border-white flex items-center justify-center text-white text-xs sm:text-sm font-bold">👨‍⚕️</div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500 border-2 border-white flex items-center justify-center text-white text-xs sm:text-sm font-bold">👩‍⚕️</div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-xs sm:text-sm font-bold">👨‍⚕️</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-gray-900">Expert team</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Certified professionals</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-5 h-8 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-1.5 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
