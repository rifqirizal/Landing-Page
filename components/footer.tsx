"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this to your backend
    console.log("Subscribed with email:", email)
    setSubscribed(true)
    setEmail("")
  }

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   })
  // }

  return (
    <footer id="contact" className="bg-[#222222] text-white pt-20 pb-10 relative">
      <div className="absolute top-0 right-0 transform -translate-y-1/2">
        {/* <button
          onClick={scrollToTop}
          className="bg-[#BD1010] text-white p-4 shadow-lg hover:bg-[#BD1010]/90 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button> */}
      </div>

      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-medium mb-6 tracking-tight">TriData</h3>
            <p className="text-[#F0F0F0]/80 mb-6">
              A trusted Cyber Security Consultant company that can help you to provide the best consultation, training,
              and security services for your needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#BD1010] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#BD1010] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#BD1010] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-[#BD1010] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#F0F0F0]/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#F0F0F0]/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#F0F0F0]/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F0F0F0]/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#F0F0F0]/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium mb-6 tracking-tight">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#BD1010] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#F0F0F0]/80">123 Security Street, Cyber City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#BD1010] mr-3 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-[#F0F0F0]/80 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#BD1010] mr-3 flex-shrink-0" />
                <a href="mailto:info@tridata.com" className="text-[#F0F0F0]/80 hover:text-white transition-colors">
                  info@tridata.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-medium mb-6 tracking-tight">Newsletter</h3>
            <p className="text-[#F0F0F0]/80 mb-4">Subscribe to our newsletter to get the latest updates.</p>

            {subscribed ? (
              <div className="bg-[#333333] p-4">
                <p className="text-white">Thank you for subscribing!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#333333] border-none py-3 px-4 text-white focus:outline-none focus:ring-1 focus:ring-[#BD1010] rounded-xl"
                />
                <button
                  type="submit"
                  className="bg-[#BD1010] text-white py-3 px-4 hover:bg-[#BD1010]/90 transition-colors rounded-xl"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div> */}
        </div>

        <div className="border-t border-[#333333] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F0F0F0]/60 text-sm">&copy; {currentYear} TriData. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-[#F0F0F0]/60 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-[#F0F0F0]/60 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
