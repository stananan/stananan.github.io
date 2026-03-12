import { Code, Cpu, Globe } from "lucide-react"

const skills = [
  {
    icon: Code,
    title: "Frontend",
    description: "React, TypeScript, Tailwind CSS, Next.js",
  },
  {
    icon: Cpu,
    title: "Backend",
    description: "Node.js, Python, PostgreSQL, REST APIs",
  },
  {
    icon: Globe,
    title: "DevOps",
    description: "Docker, CI/CD, AWS, GitHub Actions",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          About
        </h2>
        <div className="w-12 h-0.5 bg-muted-foreground/30 mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm a software engineer passionate about building tools and applications
              that solve real problems. I enjoy working across the full stack, from
              crafting pixel-perfect interfaces to designing scalable backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source, or learning something new.
            </p>
          </div>

          <div className="grid gap-6">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:border-muted-foreground/30 transition-colors"
              >
                <div className="p-2 rounded-md bg-muted">
                  <skill.icon size={20} className="text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
