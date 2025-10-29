"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enfield Medical & Dental
            </h3>
            <p className="text-gray-400 mb-4">
              Trusted family dentists with over 30 years of experience, combining personalised care and advanced technology.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Invisalign & 3D Scanning</li>
              <li>Laser Dentistry</li>
              <li>Cosmetic Dentistry</li>
              <li>Restorative Dentistry</li>
              <li>Family Dental Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-blue-400" />
                <span>10 Coronation Pde, Enfield NSW 2136</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0 text-blue-400" />
                <span>(02) 9747 1988</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0 text-blue-400" />
                <span>info@enfieldmedical.com.au</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={20} className="mt-1 flex-shrink-0 text-blue-400" />
                <div>
                  <div>Mon-Fri: 9:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 2:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} Enfield Medical and Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
