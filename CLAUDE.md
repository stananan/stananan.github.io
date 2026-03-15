# Stanley Ho — Portfolio Website

## Overview
Personal portfolio website for Stanley Ho, a high school CS student. Single-page app with sections: Home (hero), Projects, About, and Contact. Uses hash-based navigation (`#home`, `#projects`, etc.). No footer — contact links serve as the final section.

## Tech Stack
- **Framework:** React 19 + TypeScript
- **Build:** Vite 8
- **Styling:** Tailwind CSS 4 (via `@tailwindcss/vite` plugin) + custom CSS files
- **Animations:** Framer Motion (used for DecryptText and AnimatedGridPattern background)
- **Icons:** react-icons (Feather icon set)
- **Font:** JetBrains Mono / Fira Code (monospace terminal aesthetic)
- **Utilities:** clsx + tailwind-merge (via `src/lib/utils.ts` `cn()` helper)

## File Structure
```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component, renders all sections + grid background
├── index.css             # Global styles, CSS variables, base components
├── data.ts               # All portfolio content (personal info, projects, skills, etc.)
├── lib/
│   └── utils.ts          # cn() utility (clsx + tailwind-merge)
├── components/
│   ├── Header.tsx/css    # Sticky nav (no logo, just nav links aligned left)
│   ├── Footer.tsx/css    # Exists but NOT used in App.tsx (removed from layout)
│   ├── ProjectCard.tsx/css # Individual project card
│   ├── DecryptText.tsx   # Character scramble/decrypt text animation
│   └── ui/
│       └── animated-grid-pattern.tsx  # Animated grid squares background
└── pages/
    ├── Home.tsx/css       # Hero section (greeting, name, tagline only — no buttons)
    ├── Projects.tsx/css   # Projects grid
    ├── About.tsx/css      # Skills (programming languages/technical/personal), education, interests
    └── Contact.tsx/css    # Contact links only (GitHub, LinkedIn, Email — no form, no resume)
```

## Design Rules

### Strict Black & White Theme
- **Allowed colors only:** `#000`, `#fff`, and neutral grays (`#111`, `#222`, `#333`, `#666`, `#999`, `#ccc`, `#eee`, `#f5f5f5`)
- CSS variables are defined in `src/index.css` under `:root`
- No accent colors, no colored highlights, no gradients with color
- All hover states, borders, buttons, and text must stay within the B&W palette

### No Fade-In Animations
- Do NOT add `initial={{ opacity: 0 }}`, `whileInView`, or similar Framer Motion entrance animations to page content
- The only animations allowed are:
  1. **DecryptText** (`src/components/DecryptText.tsx`) — character scramble/reveal effect. Default is `animateOn="mount"` so all text decrypts on page load. Every piece of visible text should be wrapped in DecryptText.
  2. **AnimatedGridPattern** (`src/components/ui/animated-grid-pattern.tsx`) — subtle animated squares background. Grid lines have been removed, only squares remain.

### No Decorative Dot Backgrounds
- Do not add dotted, particle, or dot-grid background effects

## Making Changes Safely

1. **Content changes:** Edit `src/data.ts` — all text, links, projects, and skills are centralized there
2. **Skills categories** in data.ts use keys `programminglanguages`, `technical`, `personal` — About.tsx maps `programminglanguages` to display text "programming languages"
3. **Styling:** Each component has a co-located `.css` file. Global styles and variables live in `src/index.css`
4. **Type-check before committing:** Run `npx tsc --noEmit`
5. **Build:** `npm run dev` for development, `npm run build` for production

## Implementation Notes
- All text uses DecryptText with `animateOn="mount"` — animation triggers immediately, not on scroll
- DecryptText caps sequential animation to max 60 frames so long text doesn't take forever to decrypt
- Project images are local files referenced from project root (e.g. `../../marincatholiccs.png`) with grayscale CSS filter
- The header is sticky (48px height). Sections use `scroll-margin-top: 56px` to offset for the header when navigating via hash links
- Section padding is tight: `1.5rem` desktop, `1rem` mobile
- No contact form — only social/email links in the Contact section
