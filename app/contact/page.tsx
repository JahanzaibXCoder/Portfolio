"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import ParticleSystem from "../components/ParticleSystem"
import { getAnimationForPage } from "../utils/animations"
import Link from "next/link"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formError, setFormError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    setFormError(null)
  }

  return (
    <div className="min-h-screen w-full relative">
      <div className="absolute inset-0 h-screen">
        <ParticleSystem {...getAnimationForPage("contact")} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="min-h-screen flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-16 text-center"
          >
            Contact
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onSubmit={handleSubmit}
              className="w-full md:w-2/3 space-y-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
              >
                Send
              </button>
              {formError && <p className="text-red-500 text-sm">{formError}</p>}
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="w-full md:w-1/3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Connect on LinkedIn</h2>
              <p className="mb-4 dark:text-gray-300">Let's connect professionally and expand our network!</p>
              <Link
                href="https://www.linkedin.com/in/jahanzaib-sohail-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Visit LinkedIn Profile
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

