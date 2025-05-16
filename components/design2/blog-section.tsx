"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { blogPosts } from "@/lib/data"

export default function BlogSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  // Only show the 3 most recent posts
  const recentPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-24 bg-white dark:bg-[#222222]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
          ref={ref}
        >
          <span className="text-[#BD1010] text-lg font-medium uppercase tracking-wider">Our Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222222] dark:text-white mt-3 mb-6">
            Latest from Our Blog
          </h2>
          <div className="w-20 h-1 bg-[#BD1010] mx-auto mb-6"></div>
          <p className="text-lg text-[#585858] dark:text-[#AAAAAA]">
            Stay updated with the latest trends, insights, and best practices in cybersecurity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {recentPosts.map((post, index) => (
            <motion.article key={index} variants={itemVariants} className="bg-white dark:bg-[#111111] overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-3xl">
              <div className="relative h-[300px] overflow-hidden mb-6">
                <Image
                  src={post.image || "/blog-1.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-[#BD1010] text-white text-sm px-3 py-1 mb-3">{post.category}</span>
                </div>
              </div>

              <div className="p-6 mb-1">
                <div className="flex items-center mb-4 text-sm text-[#585858] dark:text-[#AAAAAA]">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-3 group-hover:text-[#BD1010] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <p className="text-[#585858] dark:text-[#AAAAAA] mb-4 line-clamp-2">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#BD1010] font-medium group-hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link
            href="/blog"
            className="rounded-3xl inline-flex items-center bg-[#222222] dark:bg-white text-white dark:text-[#222222] px-8 py-4 hover:bg-[#333333] dark:hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
