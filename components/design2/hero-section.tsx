"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Shield, Lock, Server } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black dark:bg-[#111111] text-white pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#111111] to-[#222222] dark:from-[#111111] dark:via-[#0a0a0a] dark:to-black z-0" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid-pattern.png')] bg-repeat" />
      </div>

      <div className="container mx-auto px-6 pt-12 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="bg-[#BD1010] text-white px-4 py-1 inline-block mb-6 text-sm rounded-full"
          >
            CYBER SECURITY SOLUTIONS
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6 text-white"
          >
            Secure. Safety. Simply.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            TriData is a trusted Cyber Security Consultant company that can help you to provide the best consultation,
            training, and security services for your needs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link
              href="#services"
              className="bg-white dark:bg-[#222222] text-black dark:text-white px-8 py-4 rounded-full hover:bg-gray-200 dark:hover:bg-[#333333] transition-all transform hover:scale-105 flex items-center"
            >
              Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="bg-[#BD1010] text-white px-8 py-4 rounded-full hover:bg-[#BD1010]/90 transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
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
            transition={{ delay: 1.0, duration: 0.6 }}
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
            transition={{ delay: 1.1, duration: 0.6 }}
            className="bg-[#222222] dark:bg-black p-8 rounded-3xl hover:bg-[#1a1a1a] dark:hover:bg-[#0a0a0a] transition-colors"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-[#222222] to-[#111111] dark:from-black dark:to-[#111111] p-8 rounded-3xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-medium mb-2">Ready to secure your digital assets?</h3>
              <p className="text-gray-400">Get started with our comprehensive security assessment.</p>
            </div>
            <Link
              href="#contact"
              className="bg-[#BD1010] text-white px-8 py-4 rounded-full hover:bg-[#BD1010]/90 transition-all whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="h-14 w-8 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="h-3 w-1 bg-white rounded-full animate-bounce" />
          </div>
          <p className="mt-2 text-sm text-gray-400">Scroll Down</p>
        </motion.div>
      </div>
    </section>
  )
}
