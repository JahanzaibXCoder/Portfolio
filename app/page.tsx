"use client"

import { motion } from "framer-motion"
import ParticleSystem from "./components/ParticleSystem"
import Link from "next/link"

export default function HomePage() {
  const categories = ["Web Development", "Mobile Apps", "Machine Learning", "DevOps"]

  return (
    <div className="min-h-screen w-full relative">
      {/* Particle Animation */}
      <div className="absolute inset-0 h-screen">
        <ParticleSystem shape="rocket" mouseFollow={true} scrollDisperse={true} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-8 text-center"
          >
            Senior Developer
          </motion.h1>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <p className="text-xl mb-8">showcasing innovative projects and insightful blogs</p>
            <Link
              href="/projects"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              View Projects
            </Link>
          </motion.section>

          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Project Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{category}</h3>
                  <Link href={`/projects?category=${category}`} className="text-blue-500 hover:underline">
                    View Projects
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

