"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"

interface NavbarProps {
  currentDesign?: "design1" | "design2" | "design3"
}

export default function Navbar({ currentDesign = "design1" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const [storedValue, setStoredValue] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("design")
      setStoredValue(value)
    }
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Determine text color based on design and scroll state
  const getTextColor = () => {
    if (isScrolled) {
      return "text-[#222222] dark:text-white"
    }

    if (currentDesign === "design1" || currentDesign === "design2") {
      return "text-white dark:text-white"
    }
    if (currentDesign === "design3") {
      return "text-black dark:text-white"
    }

    return "text-black dark:text-white"
  }

  const getDefaultHome = () => {
    if (currentDesign === "design1" || storedValue == "design1") {
      return "/"
    } else if (currentDesign === "design2" || storedValue == "design2") {
      return "/design2"
    } else {
      return "/design3"
    }
  }

  const textColor = getTextColor()
  const activeColor = "text-[#BD1010]"

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/90 dark:bg-[#111111]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href={getDefaultHome()} className={`text-2xl font-medium ${textColor} tracking-tight`}>
            TriData
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href={getDefaultHome()}
              className={`text-sm ${pathname === "/" || pathname === "/design1" || pathname === "/design2" || pathname === "/design3"
                ? activeColor
                : textColor
                } transition-colors hover:opacity-80`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`text-sm ${pathname.startsWith("/blog") ? activeColor : textColor
                } transition-colors hover:opacity-80`}
            >
              Blog
            </Link>
            <button
              onClick={toggleTheme}
              className={`p-2 ${isScrolled
                ? "bg-[#222222] dark:bg-white text-white dark:text-[#222222]"
                : currentDesign === "design2"
                  ? "bg-[#222222] text-white"
                  : "bg-white text-[#222222]"
                } hover:opacity-90 transition-opacity rounded-full`}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>

          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 ${isScrolled
                ? "bg-[#222222] dark:bg-white text-white dark:text-[#222222]"
                : currentDesign === "design2"
                  ? "bg-[#222222] text-white"
                  : "bg-white text-[#222222]"
                } hover:opacity-90 transition-opacity rounded-full`}
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button className={textColor} onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white dark:bg-[#111111] z-50 flex flex-col p-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#222222] dark:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
              <Link
                href="/"
                className={`text-[#222222] dark:text-white text-2xl font-medium ${pathname === "/" || pathname === "/design1" || pathname === "/design2" || pathname === "/design3"
                  ? activeColor
                  : ""
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className={`text-[#222222] dark:text-white text-2xl font-medium ${pathname.startsWith("/blog") ? activeColor : ""}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
