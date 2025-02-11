import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { projects } from "../../data/projects"
import { blogs } from "../../data/blogs"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)
  const relatedBlogs = blogs.filter((blog) => blog.projectId === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-8">
        {project.title}
      </motion.h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
        <p>{project.description}</p>
        <p className="mt-2">
          <strong>Category:</strong> {project.category}
        </p>
        <p>
          <strong>Technologies:</strong> {project.technologies.join(", ")}
        </p>
      </motion.div>

      {project.videoUrl && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Video</h2>
          <video src={project.videoUrl} controls className="w-full max-w-2xl mx-auto" />
        </motion.div>
      )}

      {relatedBlogs.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <h2 className="text-2xl font-semibold mb-4">Related Blog Posts</h2>
          <ul className="list-disc pl-6">
            {relatedBlogs.map((blog) => (
              <li key={blog.id}>
                <Link href={`/blog/${blog.id}`} className="text-blue-500 hover:underline">
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  )
}

