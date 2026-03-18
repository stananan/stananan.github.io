import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { Project } from "../data";
import DecryptText from "./DecryptText";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-image-placeholder">
            <DecryptText text={project.title[0]} delay={100} speed={25} animateOn="view" />
          </div>
        )}
      </div>

      <div className="project-info">
        <DecryptText text={project.title} as="h3" className="project-title" delay={100} speed={25} animateOn="view" />
        <DecryptText text={project.description} as="p" className="project-description" delay={200} speed={20} animateOn="view" />

        <div className="project-tags">
          {project.technologies.map((tech, i) => (
            <span key={tech} className="tag">
              <DecryptText text={tech} delay={300 + i * 60} speed={20} animateOn="view" />
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FiGithub size={14} /> <DecryptText text="Code" delay={400} speed={25} animateOn="view" />
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FiExternalLink size={14} /> <DecryptText text="Live" delay={400} speed={25} animateOn="view" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
