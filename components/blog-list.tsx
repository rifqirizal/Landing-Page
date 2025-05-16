"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import type { BlogPost } from "@/lib/types"

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post, index) => (
        <motion.article
          key={index}
          variants={itemVariants}
          className="bg-white dark:bg-[#222222] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div className="relative h-60">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
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
  )
}
