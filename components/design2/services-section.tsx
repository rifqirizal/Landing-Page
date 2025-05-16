"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, BookOpen, Bell, Gamepad2, Search, Lock, FileSearch, Server, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <Shield className="h-10 w-10 text-[#BD1010]" />,
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-[#BD1010]" />,
      title: "Cyber Security Training",
      description: "Expert-led training programs for security professionals.",
    },
    {
      icon: <Bell className="h-10 w-10 text-[#BD1010]" />,
      title: "Cyber Awareness",
      description: "Programs to raise awareness about cyber threats and best practices.",
    },
    {
      icon: <Gamepad2 className="h-10 w-10 text-[#BD1010]" />,
      title: "Cyber Simulation",
      description: "Realistic simulations to test your security readiness.",
    },
    {
      icon: <Search className="h-10 w-10 text-[#BD1010]" />,
      title: "Vulnerability Assessment",
      description: "Identify and address security vulnerabilities in your systems.",
    },
    {
      icon: <Lock className="h-10 w-10 text-[#BD1010]" />,
      title: "Penetration Test",
      description: "Authorized simulated attacks to evaluate security effectiveness.",
    },
    {
      icon: <FileSearch className="h-10 w-10 text-[#BD1010]" />,
      title: "Digital Forensic",
      description: "Investigation and analysis of digital evidence.",
    },
    {
      icon: <Server className="h-10 w-10 text-[#BD1010]" />,
      title: "Security Devices",
      description: "Advanced hardware and software solutions for comprehensive protection.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#BD1010] text-lg font-medium uppercase tracking-wider"
            ref={ref}
          >
            What We Offer
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mt-3 mb-6"
          >
            Our Services
          </motion.h2>

          <div className="w-20 h-1 bg-[#BD1010] mx-auto mb-6"></div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300"
          >
            We provide all your cyber security needs starting from cyber consultation, training, to providing the
            security devices you need.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#111111] border border-gray-800 p-8 hover:border-[#BD1010] transition-all duration-300 group rounded-3xl"
            >
              <div className="bg-black/50 p-4 inline-block mb-6 group-hover:bg-[#BD1010]/20 transition-colors duration-300 rounded-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <Link
                href="#"
                className="text-[#BD1010] font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
