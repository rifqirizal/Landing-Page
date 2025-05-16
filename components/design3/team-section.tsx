"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const team = [
    {
      name: "Alex Johnson",
      position: "Chief Security Officer",
      image: "/team-member-1.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "alex@tridata.com",
      },
    },
    {
      name: "Sarah Williams",
      position: "Security Analyst",
      image: "/team-member-2.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@tridata.com",
      },
    },
    {
      name: "Michael Chen",
      position: "Penetration Tester",
      image: "/team-member-3.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@tridata.com",
      },
    },
    {
      name: "Emily Rodriguez",
      position: "Digital Forensics Expert",
      image: "/team-member-4.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@tridata.com",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-24 bg-white dark:bg-[#111111] relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#F0F0F0] dark:bg-[#222222] opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#BD1010] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
          ref={ref}
        >
          <span className="inline-block bg-[#F0F0F0] dark:bg-[#222222] text-[#BD1010] px-4 py-2 text-sm font-medium mb-4 rounded-3xl">
            OUR EXPERTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] dark:text-white mb-6">Meet Our Team</h2>
          <p className="text-lg text-[#585858] dark:text-[#AAAAAA]">
            Our team of cybersecurity experts is dedicated to providing the highest level of protection for your digital
            assets.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants} className="relative group">
              <div className="rounded-3xl absolute inset-0 bg-gradient-to-r from-[#BD1010] to-[#222222] transform rotate-6 group-hover:rotate-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-white dark:bg-[#222222] overflow-hidden shadow-lg z-10 rounded-3xl">
                <div className="h-80 relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#222222] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="bg-white text-[#222222] p-2 hover:bg-[#BD1010] hover:text-white transition-colors transform hover:scale-110"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="bg-white text-[#222222] p-2 hover:bg-[#BD1010] hover:text-white transition-colors transform hover:scale-110"
                      >
                        <Twitter size={20} />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="bg-white text-[#222222] p-2 hover:bg-[#BD1010] hover:text-white transition-colors transform hover:scale-110"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-1">{member.name}</h3>
                  <p className="text-[#BD1010]">{member.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
