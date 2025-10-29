"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Emily Chen",
    role: "Marketing Manager",
    content: "The team at Enfield Medical & Dental transformed my smile completely! The Invisalign treatment was seamless, and the staff made me feel comfortable every step of the way. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Wong",
    role: "Business Owner",
    content: "As someone who was terrified of dentists, I can't believe how comfortable and painless my treatments have been here. The laser dentistry is incredible, and having Chinese-speaking dentists makes communication so easy.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Teacher",
    content: "I've been bringing my family here for 5 years now. The staff knows us by name, and they're wonderful with my kids. The digital scanning technology is impressive, and they always explain everything clearly.",
    rating: 5,
  },
  {
    name: "Michael Li",
    role: "Software Engineer",
    content: "Professional, efficient, and genuinely caring. The cosmetic work they did on my teeth exceeded my expectations. The before and after difference is incredible!",
    rating: 5,
  },
  {
    name: "Jessica Park",
    role: "Nurse",
    content: "The anti-snoring laser treatment changed my life! I sleep better, and my partner is much happier. The technology here is world-class, and the results speak for themselves.",
    rating: 5,
  },
  {
    name: "Robert Zhang",
    role: "Accountant",
    content: "Best dental practice in Sydney! The 30+ years of experience really shows. Every visit is professional, thorough, and surprisingly pleasant. Won't go anywhere else!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
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
            className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our happy patients
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative corner gradient */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-50 to-transparent rounded-full"></div>
              
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-xl">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">4.9/5.0</div>
              <div className="text-sm text-gray-600">Based on 500+ reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
