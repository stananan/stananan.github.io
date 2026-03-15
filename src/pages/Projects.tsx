import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import DecryptText from "../components/DecryptText";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="projects-page section">
      <div className="container">
        <DecryptText
          text="Projects"
          as="h1"
          className="section-title"
          delay={0}
          speed={30}
        />
        <DecryptText
          text="list of programming projects, more are public on my github. some are vibecoded, some are not..."
          as="p"
          className="projects-intro"
          delay={200}
          speed={15}
        />
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
