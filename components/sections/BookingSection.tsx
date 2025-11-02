"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, CheckCircle2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  },
};

export function BookingSection() {

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4"
          >
            Book Appointment
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-4">
            Schedule Your Visit
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Choose a convenient time for your appointment. We'll confirm via email or phone
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          {/* Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          >
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all"
            >
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-teal-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We offer convenient appointment times to fit your busy schedule, including Saturday mornings.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-100 hover:border-cyan-300 hover:shadow-xl transition-all"
            >
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Quick Response</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We'll confirm your appointment within 24 hours via email or phone call.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all"
            >
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">New Patients Welcome</h3>
              <p className="text-sm sm:text-base text-gray-600">
                First-time visitors receive a comprehensive consultation and treatment plan discussion.
              </p>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">Why Book With Us?</h3>
              <ul className="space-y-2 text-sm sm:text-base text-teal-100">
                <li>✓ Same-day emergency appointments</li>
                <li>✓ No long waiting times</li>
                <li>✓ Reminder notifications</li>
                <li>✓ Easy rescheduling</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
