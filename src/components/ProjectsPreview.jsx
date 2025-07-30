import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects"; // if stored in a separate file

function Projects() {
  return (
    <div className="flex flex-col   gap-12 py-16">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          techStack={project.techStack}
          description={project.description}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
          videoEmbedUrl={project.videoEmbedUrl}
        />
      ))}
    </div>
  );
}

export default Projects;
