"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#222222] opacity-5 z-0">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-8 [mask-image:linear-gradient(0deg,transparent,#222)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#222222] leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">Secure,</span>
              <span className="block">Safety, &</span>
              <span className="block">Simply.</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-[#585858] leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              TriData is a trusted Cyber Security Consultant company that can help you to provide the best consultation,
              training, and security services for your needs.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href="#services"
                className="bg-[#222222] text-white px-8 py-4 rounded-md hover:bg-[#222222]/90 transition-all transform hover:translate-y-[-2px]"
              >
                Our Services
              </Link>
              <Link
                href="#contact"
                className="bg-[#BD1010] text-white px-8 py-4 rounded-md hover:bg-[#BD1010]/90 transition-all transform hover:translate-y-[-2px]"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full">
              <Image src="/cyber-security.jpg" alt="Cyber Security" fill className="object-cover rounded-2xl" />
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-[#BD1010]/10 p-3 rounded-full">
                  <div className="h-4 w-4 rounded-full bg-[#BD1010] animate-pulse" />
                </div>
                <div>
                  <p className="font-medium text-[#222222]">Active Protection</p>
                  <p className="text-sm text-[#585858]">24/7 Monitoring</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div className="h-14 w-8 border-2 border-[#222222] rounded-full flex justify-center pt-2">
            <div className="h-3 w-1 bg-[#222222] rounded-full animate-bounce" />
          </div>
        </motion.div>
        <p className="mt-2 text-sm text-[#585858]">Scroll Down</p>
      </div>
    </section>
  )
}
