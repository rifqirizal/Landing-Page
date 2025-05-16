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
    <section className="py-24 bg-[#F0F0F0] dark:bg-[#111111]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
          ref={ref}
        >
          <span className="text-[#BD1010] text-lg font-medium uppercase tracking-wider">Our Experts</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] dark:text-white mt-3 mb-6">Meet Our Team</h2>
          <div className="w-20 h-1 bg-[#BD1010] mx-auto mb-6"></div>
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
            <motion.div key={index} variants={itemVariants} className="bg-[#fff] dark:bg-[#222222] overflow-hidden group rounded-3xl">
              <div className="relative h-[400px] overflow-hidden mb-2">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex space-x-4 justify-center">
                    <a
                      href={member.social.linkedin}
                      className="bg-white text-[#222222] p-2 hover:bg-[#BD1010] hover:text-white transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="bg-white text-[#222222] p-2 hover:bg-[#BD1010] hover:text-white transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="bg-white text-[#222222] p-2 hover:bg-[#BD1010] hover:text-white transition-colors"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center p-6">
                <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-1">{member.name}</h3>
                <p className="text-[#BD1010]">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
