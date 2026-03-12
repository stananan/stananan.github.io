import { Github, Linkedin, Mail } from "lucide-react"

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/stananan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "#",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@example.com",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Get in Touch
        </h2>
        <div className="w-12 h-0.5 bg-muted-foreground/30 mx-auto mb-8" />

        <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
          I'm always open to new opportunities and interesting conversations.
          Feel free to reach out.
        </p>

        <div className="flex items-center justify-center gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground border border-border rounded-full hover:text-foreground hover:border-muted-foreground/50 transition-colors"
            >
              <social.icon size={16} />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
