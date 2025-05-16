"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, BookOpen, Bell, Gamepad2, Search, Lock, FileSearch, Server } from "lucide-react"

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
    <section id="services" className="py-20 bg-[#F0F0F0]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#222222] mb-6"
            ref={ref}
          >
            Our Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#585858]"
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
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-[#F0F0F0] p-4 rounded-full inline-block mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#222222] mb-3">{service.title}</h3>
              <p className="text-[#585858]">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
