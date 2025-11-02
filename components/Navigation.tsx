"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "services", "about", "team", "testimonials", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-white/50 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 transition-transform hover:scale-105">
              Enfield Medical & Dental
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm xl:text-base font-medium transition-colors group"
                >
                  <span
                    className={cn(
                      "relative z-10 transition-colors duration-200",
                      isActive ? "text-white" : "text-gray-600 group-hover:text-white"
                    )}
                  >
                    {item.label}
                  </span>
                  {/* Animated pill background */}
                  <span
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full transition-all duration-200 ease-out",
                      isActive 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100"
                    )}
                  />
                </Link>
              );
            })}
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 xl:px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full text-sm xl:text-base font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              Book appointment
            </motion.a>
          </div>

          {/* Mobile Menu Button - Enhanced touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 active:scale-95 transition-all touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t shadow-lg overflow-hidden"
          >
            <div className="px-4 sm:px-6 py-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block font-medium py-3 px-4 rounded-lg min-h-[44px] touch-manipulation transition-all",
                      isActive 
                        ? "text-white bg-gradient-to-r from-teal-600 to-cyan-600" 
                        : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 active:scale-95"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <motion.a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center px-6 py-4 mt-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl active:shadow-md transition-all min-h-[48px] touch-manipulation"
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
