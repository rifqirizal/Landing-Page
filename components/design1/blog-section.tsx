"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
    <section className="py-20 bg-[#F0F0F0] dark:bg-[#111111]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#222222] dark:text-white mb-6">Latest from Our Blog</h2>
          <p className="text-lg text-[#585858] dark:text-[#AAAAAA]">
            Stay updated with the latest trends, insights, and best practices in cybersecurity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {recentPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-[#222222] overflow-hidden shadow-lg hover:shadow-xl transition-shadow rounded-3xl"
            >
              <div className="relative h-60">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-sm text-[#585858] dark:text-[#AAAAAA]">{post.date}</span>
                  <span className="mx-2 text-[#585858] dark:text-[#AAAAAA]">•</span>
                  <span className="text-sm text-[#585858] dark:text-[#AAAAAA]">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-[#222222] dark:text-white mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#BD1010] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-[#585858] dark:text-[#AAAAAA] mb-4 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#BD1010] font-medium hover:underline"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="rounded-3xl inline-flex items-center bg-[#222222] dark:bg-white text-white dark:text-[#222222] px-6 py-3 hover:bg-[#222222]/90 dark:hover:bg-white/90 transition-all transform hover:translate-y-[-2px]"
          >
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
