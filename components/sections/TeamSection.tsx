"use client";

import { motion } from "framer-motion";
import { Linkedin, Award, GraduationCap } from "lucide-react";

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Principal Dentist",
    specialization: "Cosmetic & Restorative Dentistry",
    experience: "25+ years",
    education: "BDS, University of Sydney",
    bio: "Specialized in creating beautiful smiles with a gentle approach to patient care.",
    avatar: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="100" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="100" cy="70" r="30" fill="currentColor" fillOpacity="0.3"/>
        <path d="M50 140c0-27.614 22.386-50 50-50s50 22.386 50 50" fill="currentColor" fillOpacity="0.3"/>
        <circle cx="85" cy="65" r="4" fill="currentColor"/>
        <circle cx="115" cy="65" r="4" fill="currentColor"/>
        <path d="M90 80c0 5.523 4.477 10 10 10s10-4.477 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    gradientFrom: "from-rose-400",
    gradientTo: "to-pink-500",
  },
  {
    name: "Dr. Michael Wong",
    role: "Senior Dentist",
    specialization: "Invisalign & Orthodontics",
    experience: "15+ years",
    education: "BDS, MDent (Ortho)",
    bio: "Expert in Invisalign and modern orthodontic treatments for all ages.",
    avatar: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="100" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="100" cy="70" r="30" fill="currentColor" fillOpacity="0.3"/>
        <path d="M50 140c0-27.614 22.386-50 50-50s50 22.386 50 50" fill="currentColor" fillOpacity="0.3"/>
        <circle cx="85" cy="65" r="4" fill="currentColor"/>
        <circle cx="115" cy="65" r="4" fill="currentColor"/>
        <path d="M90 80c0 5.523 4.477 10 10 10s10-4.477 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <rect x="70" y="50" width="60" height="8" rx="4" fill="currentColor" fillOpacity="0.2"/>
      </svg>
    ),
    gradientFrom: "from-blue-400",
    gradientTo: "to-cyan-500",
  },
  {
    name: "Dr. Lisa Zhang",
    role: "Laser Dentistry Specialist",
    specialization: "Laser Treatments & Periodontics",
    experience: "12+ years",
    education: "BDS, DClinDent (Perio)",
    bio: "Pioneer in laser dentistry with advanced pain management techniques.",
    avatar: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="100" cy="100" r="100" fill="currentColor" fillOpacity="0.1"/>
        <circle cx="100" cy="70" r="30" fill="currentColor" fillOpacity="0.3"/>
        <path d="M50 140c0-27.614 22.386-50 50-50s50 22.386 50 50" fill="currentColor" fillOpacity="0.3"/>
        <circle cx="85" cy="65" r="4" fill="currentColor"/>
        <circle cx="115" cy="65" r="4" fill="currentColor"/>
        <path d="M90 80c0 5.523 4.477 10 10 10s10-4.477 10-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M80 55c10-5 30-5 40 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    gradientFrom: "from-teal-400",
    gradientTo: "to-emerald-500",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold mb-4"
          >
            Our Team
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Dentists
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our experienced team of dental professionals is dedicated to providing you with the highest quality care
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 touch-manipulation"
            >
              {/* Avatar */}
              <div className={`relative h-48 sm:h-56 md:h-64 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} flex items-center justify-center overflow-hidden`}>
                <div className="w-40 h-40 sm:w-48 sm:h-48 text-white transform group-hover:scale-110 transition-transform duration-300">
                  {member.avatar}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* Medical Cross Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  <svg className="w-6 h-6 text-teal-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-semibold">{member.role}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <Award className="w-4 h-4 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-900">{member.specialization}</div>
                      <div className="text-gray-600">{member.experience}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <GraduationCap className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-600">{member.education}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
