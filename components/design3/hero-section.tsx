"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShieldCheck, ArrowRight, Lock, Server } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-[#111111] text-black dark:text-white pt-32">
      {/* Background design elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[80%] h-[90%] bg-[#F5F5F7] dark:bg-[#0a0a0a] transform -skew-x-12 translate-x-1/4 -translate-y-1/4 opacity-90"></div>
        <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-[#F0F0F0] dark:bg-[#222222] transform -skew-x-12 translate-x-1/3 -translate-y-1/4 opacity-80"></div>
      </div>

      <div className="container mx-auto px-6 pt-16 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center bg-[#222222] text-white px-4 py-2 mb-6 rounded-full"
            >
              <ShieldCheck className="h-5 w-5 text-[#BD1010] mr-2" />
              <span className="font-medium text-sm">TRUSTED SECURITY PARTNER</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#222222] dark:text-white leading-tight tracking-tight"
            >
              <span className="block">Secure, Safety</span>
              <span className="block text-[#BD1010] mt-2">Simply.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 text-xl text-[#585858] dark:text-gray-300 leading-relaxed max-w-xl"
            >
              TriData is a trusted Cyber Security Consultant company that can help you to provide the best consultation,
              training, and security services for your needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="#services"
                className="bg-[#222222] text-white px-8 py-4 rounded-full hover:bg-[#333333] transition-all transform hover:-translate-y-1 flex items-center"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="bg-[#BD1010] text-white px-8 py-4 rounded-full hover:bg-[#BD1010]/90 transition-all transform hover:-translate-y-1"
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-16 flex items-center"
            >
              <div className="bg-[#F5F5F7] dark:bg-[#222222] p-4 rounded-full mr-4">
                <ShieldCheck className="h-6 w-6 text-[#BD1010]" />
              </div>
              <p className="text-[#222222] dark:text-white font-medium">Trusted by 500+ companies worldwide</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-1 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white dark:bg-[#222222] shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center">
                  <div className="bg-[#F5F5F7] dark:bg-[#333333] p-4 rounded-2xl mr-6">
                    <ShieldCheck className="h-8 w-8 text-[#BD1010]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-[#222222] dark:text-white">Advanced Protection</h3>
                    <p className="text-[#585858] dark:text-gray-300">
                      Comprehensive security solutions for your digital assets.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="bg-white dark:bg-[#222222] shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center">
                  <div className="bg-[#F5F5F7] dark:bg-[#333333] p-4 rounded-2xl mr-6">
                    <Lock className="h-8 w-8 text-[#BD1010]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-[#222222] dark:text-white">24/7 Monitoring</h3>
                    <p className="text-[#585858] dark:text-gray-300">
                      Real-time threat detection and response for your systems.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="bg-white dark:bg-[#222222] shadow-xl p-8 rounded-3xl hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center">
                  <div className="bg-[#F5F5F7] dark:bg-[#333333] p-4 rounded-2xl mr-6">
                    <Server className="h-8 w-8 text-[#BD1010]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-[#222222] dark:text-white">Security Consultation</h3>
                    <p className="text-[#585858] dark:text-gray-300">
                      Expert guidance to strengthen your security posture.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Link href="#achievements" className="flex flex-col items-center">
            <div className="h-14 w-8 border-2 border-[#222222] dark:border-white rounded-full flex justify-center pt-2">
              <div className="h-3 w-1 bg-[#222222] dark:bg-white rounded-full animate-bounce" />
            </div>
            <p className="mt-2 text-sm text-[#585858] dark:text-gray-400">Scroll Down</p>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
