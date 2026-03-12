export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Stanley Ho. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/50">
          Built with React + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
