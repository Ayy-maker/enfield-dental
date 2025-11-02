"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Award, Phone, Star, Heart, Smile } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [clicks, setClicks] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [buttonClicked, setButtonClicked] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, buttonId: string) => {
    // Don't prevent default - allow navigation to happen
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newClick = { id: Date.now(), x, y };
    setClicks([...clicks, newClick]);
    setButtonClicked(buttonId);
    
    setTimeout(() => {
      setClicks(prev => prev.filter(click => click.id !== newClick.id));
      setButtonClicked(null);
    }, 1000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 md:py-32 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              <div className="flex items-center space-x-2 px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                <Sparkles className="w-3 h-3" />
                <span>30+ YEARS EXCELLENCE</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-[0.9] tracking-tight"
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
              transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed"
            >
              Your trusted dental practice for premium care, offering personalized service and cutting-edge treatments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <motion.a
                href="#contact"
                onClick={(e) => handleClick(e, 'booking')}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 sm:px-8 py-4 bg-black text-white rounded-full font-medium flex items-center justify-center space-x-2 hover:bg-gray-900 transition-all glow-hover overflow-hidden min-h-[48px] touch-manipulation shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <span>Book appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Click Ripple Effects */}
                <AnimatePresence>
                  {clicks.map((click) => (
                    <motion.span
                      key={click.id}
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{ scale: 8, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute rounded-full bg-white pointer-events-none z-40"
                      style={{ left: click.x - 25, top: click.y - 25, width: 50, height: 50 }}
                    />
                  ))}
                </AnimatePresence>
                
                {/* Floating Icons on Click */}
                {buttonClicked === 'booking' && (
                  <>
                    <motion.div
                      initial={{ y: 0, x: 0, opacity: 1, scale: 0 }}
                      animate={{ y: -60, x: -30, opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute z-50"
                    >
                      <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                    </motion.div>
                    <motion.div
                      initial={{ y: 0, x: 0, opacity: 1, scale: 0 }}
                      animate={{ y: -70, x: 20, opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.3, ease: "easeOut" }}
                      className="absolute z-50"
                    >
                      <Smile className="w-8 h-8 text-teal-400 drop-shadow-lg" />
                    </motion.div>
                    <motion.div
                      initial={{ y: 0, x: 0, opacity: 1, scale: 0 }}
                      animate={{ y: -65, x: 40, opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.25, ease: "easeOut" }}
                      className="absolute z-50"
                    >
                      <Sparkles className="w-7 h-7 text-cyan-400 drop-shadow-lg" />
                    </motion.div>
                  </>
                )}
              </motion.a>

              <motion.a
                href="tel:+61297474777"
                onClick={(e) => handleClick(e, 'phone')}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 sm:px-8 py-4 bg-white text-gray-900 rounded-full font-medium border-2 border-gray-200 hover:border-black transition-all flex items-center justify-center space-x-2 smooth-hover min-h-[48px] touch-manipulation shadow-sm hover:shadow-md text-sm sm:text-base overflow-hidden"
              >
                <Phone className="w-4 h-4" />
                <span className="whitespace-nowrap">(02) 9747 4777</span>
                
                {/* Click Ripple Effects */}
                <AnimatePresence>
                  {clicks.map((click) => (
                    <motion.span
                      key={click.id}
                      initial={{ scale: 0, opacity: 0.7 }}
                      animate={{ scale: 8, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="absolute rounded-full bg-teal-500 pointer-events-none z-40"
                      style={{ left: click.x - 25, top: click.y - 25, width: 50, height: 50 }}
                    />
                  ))}
                </AnimatePresence>
                
                {/* Floating Icons on Click */}
                {buttonClicked === 'phone' && (
                  <>
                    <motion.div
                      initial={{ y: 0, rotate: 0, opacity: 1, scale: 0 }}
                      animate={{ y: -60, rotate: 360, opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="absolute z-50"
                    >
                      <Heart className="w-8 h-8 text-red-500 fill-red-500 drop-shadow-lg" />
                    </motion.div>
                    <motion.div
                      initial={{ y: 0, x: 0, opacity: 1, scale: 0 }}
                      animate={{ y: -70, x: -30, opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.3, ease: "easeOut" }}
                      className="absolute z-50"
                    >
                      <Phone className="w-8 h-8 text-teal-600 drop-shadow-lg" />
                    </motion.div>
                    <motion.div
                      initial={{ y: 0, x: 0, opacity: 1, scale: 0 }}
                      animate={{ y: -65, x: 30, opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.25, ease: "easeOut" }}
                      className="absolute z-50"
                    >
                      <Sparkles className="w-7 h-7 text-blue-400 drop-shadow-lg" />
                    </motion.div>
                  </>
                )}
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-8 max-w-lg"
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer relative"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">5000+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">Happy patients</div>
                <motion.div
                  className="absolute -inset-2 bg-teal-100 rounded-lg -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer relative"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">30+</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">Years experience</div>
                <motion.div
                  className="absolute -inset-2 bg-cyan-100 rounded-lg -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.3 }}
                className="cursor-pointer relative"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">4.9</div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">Rating</div>
                <motion.div
                  className="absolute -inset-2 bg-yellow-100 rounded-lg -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Large Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative mt-8 lg:mt-0"
          >
            <motion.div 
              className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden group shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const sparkles = Array.from({ length: 8 }).map((_, i) => ({
                  id: Date.now() + i,
                  x: Math.random() * 100,
                  y: Math.random() * 100,
                }));
                // Trigger sparkle effect
              }}
            >
              <motion.img 
                src="/enfield-dental/images/team-photo-full.jpg" 
                alt="Enfield Medical and Dental Team - Your trusted family dentists with over 30 years of experience" 
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              />
              
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
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
            </motion.div>
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
