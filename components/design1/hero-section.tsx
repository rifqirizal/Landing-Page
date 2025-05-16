"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Shield, Lock, Server } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black dark:bg-[#111111] text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#111111] dark:bg-black opacity-80 z-0">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-grid-8 [mask-image:linear-gradient(0deg,transparent,#222)]" />
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6"
            >
              <span className="bg-[#BD1010] text-white px-4 py-1 inline-block text-sm rounded-full">
                CYBER SECURITY EXPERTS
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="block">Secure, Safety</span>
              <motion.span
                className="block text-[#BD1010] mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Simply.
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-6 text-xl text-gray-400 leading-relaxed"
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
                className="bg-white text-black dark:bg-[#222222] dark:text-white px-8 py-4 rounded-full hover:bg-gray-200 dark:hover:bg-[#333333] transition-all transform hover:translate-y-[-2px] flex items-center"
              >
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="bg-[#BD1010] text-white px-8 py-4 rounded-full hover:bg-[#BD1010]/90 transition-all transform hover:translate-y-[-2px]"
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="flex items-center">
                <div className="bg-[#222222] dark:bg-black p-3 rounded-full mr-3">
                  <Shield className="h-5 w-5 text-[#BD1010]" />
                </div>
                <p className="text-white">Trusted by 500+ companies worldwide</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="bg-[#222222] dark:bg-black p-8 rounded-3xl hover:bg-[#1a1a1a] dark:hover:bg-[#0a0a0a] transition-colors"
            >
              <div className="bg-[#333333] dark:bg-[#222222] p-4 rounded-2xl inline-block mb-6">
                <Shield className="h-8 w-8 text-[#BD1010]" />
              </div>
              <h3 className="text-xl font-medium mb-3">Advanced Protection</h3>
              <p className="text-gray-400 mb-6">Comprehensive security solutions for your digital assets.</p>
              {/* <Link href="#services" className="text-[#BD1010] flex items-center text-sm hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-[#222222] dark:bg-black p-8 rounded-3xl hover:bg-[#1a1a1a] dark:hover:bg-[#0a0a0a] transition-colors"
            >
              <div className="bg-[#333333] dark:bg-[#222222] p-4 rounded-2xl inline-block mb-6">
                <Lock className="h-8 w-8 text-[#BD1010]" />
              </div>
              <h3 className="text-xl font-medium mb-3">24/7 Monitoring</h3>
              <p className="text-gray-400 mb-6">Real-time threat detection and response for your systems.</p>
              {/* <Link href="#services" className="text-[#BD1010] flex items-center text-sm hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="bg-[#222222] dark:bg-black p-8 rounded-3xl hover:bg-[#1a1a1a] dark:hover:bg-[#0a0a0a] transition-colors md:col-span-2"
            >
              <div className="bg-[#333333] dark:bg-[#222222] p-4 rounded-2xl inline-block mb-6">
                <Server className="h-8 w-8 text-[#BD1010]" />
              </div>
              <h3 className="text-xl font-medium mb-3">Security Consultation</h3>
              <p className="text-gray-400 mb-6">Expert guidance to strengthen your security posture and compliance.</p>
              {/* <Link href="#services" className="text-[#BD1010] flex items-center text-sm hover:underline">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link> */}
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
          <div className="h-14 w-8 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="h-3 w-1 bg-white rounded-full animate-bounce" />
          </div>
        </motion.div>
        <p className="mt-2 text-sm text-gray-400">Scroll Down</p>
      </div>
    </section>
  )
}
