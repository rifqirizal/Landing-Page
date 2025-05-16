"use client"

import { useEffect } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/design1/hero-section"
import AchievementsSection from "@/components/design1/achievements-section"
import ServicesSection from "@/components/design1/services-section"
import TeamSection from "@/components/design1/team-section"
import BlogSection from "@/components/design1/blog-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Design1() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("design", "design1")
    }
  },[])

  return (
    <main className="min-h-screen bg-[#F0F0F0] dark:bg-[#111111] transition-colors duration-300">
      <Navbar currentDesign="design1" />
      <HeroSection />
      <AchievementsSection />
      <ServicesSection />
      <TeamSection />
      <BlogSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
