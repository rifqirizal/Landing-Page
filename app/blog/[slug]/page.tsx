"use client"

import type React from "react"

import { useState, useEffect,use } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { blogPosts } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, MessageCircle, Clock, Bookmark } from "lucide-react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

export default function BlogDetailPage(rawParams: { params: Promise<{ slug: string }> }) {
  const { slug } = use(rawParams.params)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  // Generate tags from the post category and related keywords
  const tags = [post.category, "Cybersecurity", "Technology", "Security"]

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2)

  // Calculate read time (average reading speed: 200 words per minute)
  const wordCount = post.content.join(" ").split(/\s+/).length
  const readTime = Math.ceil(wordCount / 200)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Comment submitted successfully!")
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
      <Navbar currentDesign="design3" />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#585858] dark:text-[#AAAAAA] hover:text-[#BD1010] dark:hover:text-[#BD1010] mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          <article className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center text-xs bg-[#F0F0F0] dark:bg-[#222222] text-[#585858] dark:text-[#AAAAAA] px-3 py-1 rounded-full"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl font-medium text-[#222222] dark:text-white mb-6 tracking-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center text-[#585858] dark:text-[#AAAAAA] mb-8 gap-6">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span className="text-sm">{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{readTime} min read</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-full h-[500px] mb-12 overflow-hidden rounded-3xl"
            >
              <Image src={post.image || "/blog-1.jpg"} alt={post.title} fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="prose prose-lg max-w-none text-[#222222] dark:text-white"
            >
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg leading-relaxed text-[#222222] dark:text-[#F0F0F0]">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#F0F0F0] dark:border-[#222222]">
              <div className="flex items-center">
                <button className="flex items-center text-[#222222] dark:text-white hover:text-[#BD1010] dark:hover:text-[#BD1010] transition-colors mr-4">
                  <Bookmark size={18} className="mr-1" />
                  <span className="text-sm">Save</span>
                </button>
                <div className="flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2 text-[#585858] dark:text-[#AAAAAA]" />
                  <span className="text-sm text-[#585858] dark:text-[#AAAAAA]">0 Comments</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#F5F5F7] dark:bg-[#222222] rounded-2xl">
              <h4 className="text-sm font-medium text-[#222222] dark:text-white mb-4">Share this article:</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `${post.title} - Check out this article: ${window.location.href}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    window.location.href,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    `${post.title} - ${window.location.href}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href={`https://www.instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#405DE6] via-[#E1306C] to-[#FFDC80] text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>

            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-medium text-[#222222] dark:text-white mb-8 tracking-tight">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost, index) => (
                    <div key={index} className="group">
                      <div className="relative h-48 overflow-hidden mb-4 rounded-2xl">
                        <Image
                          src={relatedPost.image || "/blog-1.jpg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h4 className="text-lg font-medium text-[#222222] dark:text-white mb-2 tracking-tight">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-[#BD1010] transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <p className="text-sm text-[#585858] dark:text-[#AAAAAA] line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-[#F0F0F0] dark:border-[#222222]">
              <h3 className="text-2xl font-medium text-[#222222] dark:text-white mb-8 tracking-tight">
                Leave a Comment
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#585858] dark:text-[#AAAAAA] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#F0F0F0] dark:bg-[#222222] border-none py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#BD1010] rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#585858] dark:text-[#AAAAAA] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#F0F0F0] dark:bg-[#222222] border-none py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#BD1010] rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm text-[#585858] dark:text-[#AAAAAA] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-[#F0F0F0] dark:bg-[#222222] border-none py-3 px-4 focus:outline-none focus:ring-1 focus:ring-[#BD1010] rounded-lg"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#222222] dark:bg-white text-white dark:text-[#222222] px-8 py-3 hover:bg-[#333333] dark:hover:bg-[#F0F0F0] transition-colors rounded-full"
                  >
                    Submit Comment
                  </button>
                </div>
              </form>
            </div>
          </article>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
