import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import DecryptText from "../components/DecryptText";
import SectionReveal from "../components/SectionReveal";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects" className="projects-page section">
      <div className="container">
        <SectionReveal>
          <DecryptText
            text="Projects"
            as="h1"
            className="section-title"
            delay={0}
            speed={30}
            animateOn="view"
          />
          <DecryptText
            text="list of programming projects, more are public on my github. some are vibecoded, some are not..."
            as="p"
            className="projects-intro"
            delay={200}
            speed={15}
            animateOn="view"
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}

export default Projects;
