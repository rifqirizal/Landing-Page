"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { blogPosts } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Search, Calendar, User, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [visiblePosts, setVisiblePosts] = useState(6)
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const results = blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredPosts(results)
    setVisiblePosts(6) // Reset visible posts when search changes
  }, [searchTerm])

  const loadMore = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Calculate read time for each post
  const getReadTime = (content: string[]) => {
    const wordCount = content.join(" ").split(/\s+/).length
    return Math.ceil(wordCount / 200) // Average reading speed: 200 words per minute
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#111111] transition-colors duration-300">
      <Navbar currentDesign="design3" />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-medium text-[#222222] dark:text-white mb-6 tracking-tight">
              Our Blog
            </h1>
            <p className="text-lg text-[#585858] dark:text-[#AAAAAA] mb-8">
              Stay updated with the latest trends, insights, and best practices in cybersecurity.
            </p>

            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#F0F0F0] dark:bg-[#222222] border-none py-4 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-[#BD1010] rounded-full"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#585858] dark:text-[#AAAAAA]"
                size={18}
              />
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-[#222222] dark:text-white mb-4">No results found</h3>
              <p className="text-[#585858] dark:text-[#AAAAAA]">Try different keywords or browse all our articles</p>
            </div>
          ) : (
            <>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                  <motion.article
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-[#222222] group rounded-3xl shadow-sm hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-60 overflow-hidden rounded-t-3xl">
                      <Image
                        src={post.image || "/blog-1.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-[#BD1010] text-white text-xs px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4 text-xs text-[#585858] dark:text-[#AAAAAA]">
                        <div className="flex items-center mr-4">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center mr-4">
                          <User className="h-3 w-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{getReadTime(post.content)} min read</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-medium text-[#222222] dark:text-white mb-3 tracking-tight">
                        <Link href={`/blog/${post.slug}`} className="hover:text-[#BD1010] transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-[#585858] dark:text-[#AAAAAA] mb-4 line-clamp-2 text-sm">{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-[#BD1010] text-sm font-medium hover:underline"
                      >
                        Read More <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              {visiblePosts < filteredPosts.length && (
                <div className="text-center mt-16">
                  <button
                    onClick={loadMore}
                    className="bg-[#F0F0F0] dark:bg-[#222222] text-[#222222] dark:text-white px-8 py-3 hover:bg-[#E0E0E0] dark:hover:bg-[#333333] transition-colors rounded-full"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
