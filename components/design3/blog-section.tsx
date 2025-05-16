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
    <section className="py-24 bg-[#F0F0F0] dark:bg-[#222222] relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-[#BD1010] opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-[#222222] dark:bg-white opacity-10 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="lg:max-w-xl mb-10 lg:mb-0"
            ref={ref}
          >
            <span className="inline-block bg-white dark:bg-[#111111] text-[#BD1010] px-4 py-2 text-sm font-medium mb-4 rounded-3xl">
              OUR BLOG
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#222222] dark:text-white mb-6">Latest from Our Blog</h2>
            <div className="w-20 h-1 bg-[#BD1010] mb-6"></div>
            <p className="text-lg text-[#585858] dark:text-[#AAAAAA]">
              Stay updated with the latest trends, insights, and best practices in cybersecurity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="rounded-3xl inline-flex items-center bg-[#222222] dark:bg-white text-white dark:text-[#222222] px-6 py-3 hover:bg-[#333333] dark:hover:bg-gray-200 transition-all"
            >
              View All Posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {recentPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-[#111111] overflow-hidden shadow-lg hover:shadow-xl transition-shadow group rounded-3xl"
            >
              <div className="relative h-[240px] overflow-hidden">
                <Image
                  src={post.image || "/blog-1.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-[#BD1010] text-white text-sm px-3 py-1">{post.category}</span>
                </div>
              </div>

              <div className="p-6">
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

                <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#BD1010] transition-colors">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-[#585858] dark:text-[#AAAAAA] mb-6 line-clamp-2">{post.excerpt}</p>

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
      </div>
    </section>
  )
}
