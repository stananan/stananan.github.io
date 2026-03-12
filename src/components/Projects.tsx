import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application with real-time features and a modern UI. Built with React, Node.js, and WebSockets.",
    tags: ["React", "Node.js", "WebSocket"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description:
      "CLI tool for automating development workflows. Supports custom plugins and configuration.",
    tags: ["Python", "CLI", "Automation"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description:
      "Data visualization dashboard with interactive charts and filtering capabilities.",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Projects
        </h2>
        <div className="w-12 h-0.5 bg-muted-foreground/30 mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-lg border border-border bg-card hover:border-muted-foreground/30 transition-all"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="View source code"
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.live}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="View live site"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
