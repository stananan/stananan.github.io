import { ArrowDown } from "lucide-react"
import { WaveBackground } from "./WaveBackground"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WaveBackground />

      {/* Top fade only — lets waves show at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-background from-5% via-transparent via-40% to-transparent pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-widest uppercase text-muted-foreground border border-border/60 rounded-full backdrop-blur-sm">
            Software Engineer
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
          Stanley Ho
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Building clean, performant software with a focus on great user experiences.
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-background bg-foreground rounded-full hover:bg-accent transition-colors"
        >
          Learn More
          <ArrowDown size={16} />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
