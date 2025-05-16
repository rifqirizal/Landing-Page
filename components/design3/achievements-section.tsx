"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Users, Award, Globe } from "lucide-react"
import { useCountUp } from "@/hooks/use-count-up"

export default function AchievementsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const security = useCountUp({ end: 500, formatter: (value) => `${value}+` })
  const professionals = useCountUp({ end: 1000, formatter: (value) => `${value}+` })
  const awards = useCountUp({ end: 50, formatter: (value) => `${value}+` })
  const countries = useCountUp({ end: 30, formatter: (value) => `${value}+` })

  const achievements = [
    {
      icon: <Shield className="h-10 w-10 text-white" />,
      number: security.count,
      label: "Security Audits",
      color: "bg-gradient-to-br from-[#BD1010] to-[#FF5757]",
      countRef: security.ref,
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      number: professionals.count,
      label: "Trained Professionals",
      color: "bg-gradient-to-br from-[#222222] to-[#555555]",
      countRef: professionals.ref,
    },
    {
      icon: <Award className="h-10 w-10 text-white" />,
      number: awards.count,
      label: "Industry Awards",
      color: "bg-gradient-to-br from-[#BD1010] to-[#FF5757]",
      countRef: awards.ref,
    },
    {
      icon: <Globe className="h-10 w-10 text-white" />,
      number: countries.count,
      label: "Countries Served",
      color: "bg-gradient-to-br from-[#222222] to-[#555555]",
      countRef: countries.ref,
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
    <section id="achievements" className="py-24 bg-white dark:bg-[#111111]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
          ref={ref}
        >
          <span className="inline-block bg-[#F0F0F0] dark:bg-[#222222] text-[#BD1010] px-4 py-2 text-sm font-medium mb-4 rounded-full">
            OUR IMPACT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] dark:text-white mb-6">
            Our Achievements in Numbers
          </h2>
          <p className="text-lg text-[#585858] dark:text-[#AAAAAA]">
            We've helped hundreds of organizations strengthen their security posture and protect their valuable assets.
          </p>
        </motion.div>

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
              className={`${achievement.color} p-8 text-white shadow-xl transform transition-transform hover:scale-105 hover:-rotate-1 rounded-3xl`}
              ref={achievement.countRef}
            >
              <div className="bg-white/10 p-4 inline-block mb-6 rounded-2xl">{achievement.icon}</div>
              <h3 className="text-4xl font-bold mb-2">{achievement.number}</h3>
              <p className="text-white/80">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
