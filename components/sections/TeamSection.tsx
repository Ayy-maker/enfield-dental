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
    avatarEmoji: "👩‍⚕️",
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
    avatarEmoji: "👨‍⚕️",
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
    avatarEmoji: "👩‍⚕️",
    gradientFrom: "from-teal-400",
    gradientTo: "to-emerald-500",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-white">
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
            className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4"
          >
            Our Team
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Expert Dentists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced team of dental professionals is dedicated to providing you with the highest quality care
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className={`relative h-64 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} flex items-center justify-center overflow-hidden`}>
                <div className="text-9xl transform group-hover:scale-110 transition-transform duration-300">
                  {member.avatarEmoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold">{member.role}</p>
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

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors group">
                  <Linkedin className="w-4 h-4" />
                  <span className="text-sm font-medium">View Profile</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
