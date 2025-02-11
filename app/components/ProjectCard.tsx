"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <Image
        src={project.thumbnail || "/placeholder.svg"}
        alt={project.title}
        width={400}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline">
          View Details
        </Link>
      </div>
    </motion.div>
  )
}

export default ProjectCard

