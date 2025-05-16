"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Users, Award, Globe } from "lucide-react"

export default function AchievementsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const achievements = [
    {
      icon: <Shield className="h-10 w-10 text-[#BD1010]" />,
      number: "500+",
      label: "Security Audits",
    },
    {
      icon: <Users className="h-10 w-10 text-[#BD1010]" />,
      number: "1000+",
      label: "Trained Professionals",
    },
    {
      icon: <Award className="h-10 w-10 text-[#BD1010]" />,
      number: "50+",
      label: "Industry Awards",
    },
    {
      icon: <Globe className="h-10 w-10 text-[#BD1010]" />,
      number: "30+",
      label: "Countries Served",
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
    <section className="py-20 bg-[#222222] text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          ref={ref}
        >
          Our Achievements in Numbers
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#333333] rounded-xl p-8 text-center transform transition-transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{achievement.number}</h3>
              <p className="text-[#F0F0F0]/80">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
