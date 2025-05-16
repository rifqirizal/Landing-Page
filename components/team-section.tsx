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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] mb-6">Meet Our Team</h2>
          <p className="text-lg text-[#585858]">
            Our team of cybersecurity experts is dedicated to providing the highest level of protection for your digital
            assets.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-[#F0F0F0] rounded-xl overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#222222]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-white hover:text-[#BD1010] transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.social.twitter} className="text-white hover:text-[#BD1010] transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-white hover:text-[#BD1010] transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#222222]">{member.name}</h3>
                <p className="text-[#585858]">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
