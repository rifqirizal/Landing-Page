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
      icon: <Shield className="h-12 w-12 text-[#BD1010]" />,
      number: security.count,
      label: "Security Audits",
      countRef: security.ref,
    },
    {
      icon: <Users className="h-12 w-12 text-[#BD1010]" />,
      number: professionals.count,
      label: "Trained Professionals",
      countRef: professionals.ref,
    },
    {
      icon: <Award className="h-12 w-12 text-[#BD1010]" />,
      number: awards.count,
      label: "Industry Awards",
      countRef: awards.ref,
    },
    {
      icon: <Globe className="h-12 w-12 text-[#BD1010]" />,
      number: countries.count,
      label: "Countries Served",
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
    <section className="py-24 bg-[#F0F0F0] dark:bg-[#111111]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
          ref={ref}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] dark:text-white mb-6">Our Impact in Numbers</h2>
          <div className="w-20 h-1 bg-[#BD1010] mx-auto mb-6"></div>
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
              className="bg-white dark:bg-[#222222] p-10 text-center shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-1 rounded-3xl"
              ref={achievement.countRef}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-[#F0F0F0] dark:bg-[#333333] p-4 rounded-2xl">{achievement.icon}</div>
              </div>
              <h3 className="text-5xl font-bold mb-3 text-[#222222] dark:text-white">{achievement.number}</h3>
              <p className="text-lg text-[#585858] dark:text-[#AAAAAA]">{achievement.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
