import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulating data fetch
    setData(projects);
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;

