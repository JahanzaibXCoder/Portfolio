"use client"

import { motion } from "framer-motion"
import ParticleSystem from "../components/ParticleSystem"
import { blogs } from "../data/blogs"

export default function BlogPage() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Particle Animation */}
      <div className="absolute inset-0 h-screen">
        <ParticleSystem shape="brain" mouseFollow={true} scrollDisperse={true} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Blog Posts
        </motion.h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold mb-4">{blog.title}</h2>
              <p className="text-gray-600">{blog.content.substring(0, 150)}...</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}

