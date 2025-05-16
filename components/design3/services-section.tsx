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
    <section id="services" className="py-24 bg-[#F0F0F0] dark:bg-[#222222]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
            ref={ref}
          >
            <span className="inline-block bg-white dark:bg-[#111111] text-[#BD1010] px-4 py-2 text-sm font-medium mb-4 rounded-full">
              OUR SERVICES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] dark:text-white mb-6">What We Offer</h2>
            <div className="w-20 h-1 bg-[#BD1010] mb-6"></div>
            <p className="text-lg text-[#585858] dark:text-[#AAAAAA] mb-8">
              We provide all your cyber security needs starting from cyber consultation, training, to providing the
              security devices you need.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center bg-[#222222] dark:bg-white text-white dark:text-[#222222] px-6 py-3 hover:bg-[#333333] dark:hover:bg-gray-200 transition-all rounded-full"
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-[#111111] p-8 shadow-lg hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-[#BD1010] rounded-3xl"
              >
                <div className="bg-[#F0F0F0] dark:bg-[#222222] p-4 inline-block mb-6 rounded-2xl">{service.icon}</div>
                <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-3">{service.title}</h3>
                <p className="text-[#585858] dark:text-[#AAAAAA]">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.slice(4).map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-[#111111] p-8 shadow-lg hover:shadow-xl transition-shadow border-b-4 border-transparent hover:border-[#BD1010] rounded-3xl"
            >
              <div className="bg-[#F0F0F0] dark:bg-[#222222] p-4 inline-block mb-6 rounded-2xl">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-3">{service.title}</h3>
              <p className="text-[#585858] dark:text-[#AAAAAA]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
