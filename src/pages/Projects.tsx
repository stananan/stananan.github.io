import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-page section">
      <div className="container">
        <h1 className="section-title">Projects</h1>
        <p className="projects-intro">
          Write a short intro about your projects here.
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
