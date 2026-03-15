// ============================================
// Portfolio Data - Replace placeholder text with your own content
// ============================================

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  image: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  resumeLink: string;
}

export interface NavLink {
  path: string;
  label: string;
}

export const personalInfo: PersonalInfo = {
  name: "stanley ho",
  title: "High School Student",
  tagline: "junior @ marincatholic",
  email: "stanleyho862@gmail.com",
  github: "https://github.com/stananan",
  linkedin: "https://www.linkedin.com/in/stanley-ho-66748a338/",
  resumeLink: "/resume.pdf",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "marin catholic cs",
    description: "as co-president of the marin catholic cs club, i oversee and develop most of the projects. they range from fun parody web games to hackathon projects",
    technologies: ["react", "js", "firebase"],
    githubLink: "https://github.com/MarinCatholicCS/MarinCatholicCS.github.io",
    liveLink: "https://marincatholiccs.github.io/",
    image: "../../marincatholiccs.png",
  },
  {
    id: 2,
    title: "cos-visualizer",
    description: "after learning about dot product in pre-calc, i was inspired to make a cosine similarity visualizer to show the textual similarity of sentences in natural language processing when turned into vectors",
    technologies: ["react", "transformer.js", "three.js"],
    githubLink: "https://github.com/stananan/cos-visualizer",
    liveLink: "https://stananan.github.io/cos-visualizer/",
    image: "../../cos-visualizer.png",
  },
  {
    id: 3,
    title: "voluntir",
    description: "a platform (beta) that connects organizations and volunteers more effectivly than current solutions. in collaboration with nico zametto. this project won 1st @ bullhacks 2026 and honorable mention @ stanghacks 2026",
    technologies: ["react", "firebase", "claude api", "remotion.js", "leaflet.js", "transformer.js"],
    githubLink: "https://github.com/MarinCatholicCS/voluntir",
    liveLink: "https://marincatholiccs.github.io/voluntir/",
    image: "../../voluntir.png",
  },
  {
    id: 4,
    title: "blewit",
    description: "full stack app made in the summer of eighth grade in the class, 'advanced web development'. you can tell it was made by a eighth grader",
    technologies: ["php", "mysql", "css"],
    githubLink: "https://github.com/stananan/blewIt",
    liveLink: "https://atdpsites.berkeley.edu/sho/aic/blewIt/index.php",
    image: "../../blewit.png",
  },
];

export const skills = {
  programminglanguages: ["javascript", "typescript", "java", "python", "php"],
  technical: ["react", "git", "firebase", "rest apis", "cad", "arduino"],
  personal: ["public speaking", "leadership", "time management"],
};

export const education = {
  school: "marin catholic",
  graduationYear: "2027",
  relevantCourses: [
    "ap chem",
    "ap csa",
    "apush",
    "ap lang",
    "ap spanish",
    "macroeconomics (college of marin)",
    "intro to engineering (college of marin)"
  ],
};

export const interests: string[] = [
  "web development",
  "artificial inteligence",
  "robotics",
  "mechanical engineering",
  "entrepreneurship"
];

export const navLinks: NavLink[] = [
  { path: "#home", label: "Home" },
  { path: "#projects", label: "Projects" },
  { path: "#about", label: "About" },
  { path: "#contact", label: "Contact" },
];
