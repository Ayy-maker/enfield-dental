"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 sm:space-x-3 smooth-hover"
            >
              <img 
                src="/images/team-logo.jpg" 
                alt="Enfield Medical & Dental Team" 
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-teal-500/20 hover:ring-teal-500/40 transition-all"
              />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent hidden sm:inline">
                Enfield Medical & Dental
              </span>
              <span className="text-base font-bold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent sm:hidden">
                EMD
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow"
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
