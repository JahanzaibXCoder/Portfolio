"use client"

import { motion } from "framer-motion"
import ParticleSystem from "./components/ParticleSystem"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const categories = ["Unity", "Web Apps", "SA-MP/Rockstar"]

  return (
    <div className="min-h-screen w-full relative flex flex-col">
      {/* Particle Animation */}
      <div className="absolute inset-0">
        <ParticleSystem shape="rocket" mouseFollow={true} scrollDisperse={false} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex-grow flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center"
          >
            Senior Developer
          </motion.h1>
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-lg sm:text-xl mb-8 dark:text-gray-200">
              showcasing innovative projects and insightful blogs
            </p>
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-semibold"
            >
              View Projects
            </Link>
          </motion.section>

          <section className="w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Project Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full max-w-sm border border-gray-200/20 dark:border-gray-700/30"
                >
                  <div className="mb-4 relative h-16 sm:h-20 overflow-hidden rounded-lg">
                    <Image
                      src={`/placeholder.svg?height=80&width=320`}
                      alt={`${category} collage`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{category}</h3>
                  <Link
                    href={`/projects?category=${category}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
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

