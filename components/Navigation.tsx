"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
          <a href="#home" className="flex items-center group">
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
              Enfield Medical & Dental
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm xl:text-base font-medium text-gray-700 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-4 px-6 xl:px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full text-sm xl:text-base font-medium hover:shadow-lg transition-shadow"
            >
              Book appointment
            </a>
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 sm:px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-medium py-3 px-4 rounded-lg min-h-[44px] text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-4 mt-4 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white rounded-full font-medium shadow-lg min-h-[48px]"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
