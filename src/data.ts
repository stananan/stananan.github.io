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
  name: "Stanley Anandaraj",
  title: "High School CS Student",
  tagline: "Write your tagline here",
  email: "your.email@example.com",
  github: "https://github.com/stananan",
  linkedin: "#",
  resumeLink: "/resume.pdf",
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Project Title 1",
    description: "Write a short description of this project here.",
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    githubLink: "#",
    liveLink: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=360&fit=crop",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Write a short description of this project here.",
    technologies: ["Tech 1", "Tech 2"],
    githubLink: "#",
    liveLink: "",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=360&fit=crop",
  },
  {
    id: 3,
    title: "Project Title 3",
    description: "Write a short description of this project here.",
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    githubLink: "#",
    liveLink: "#",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=360&fit=crop",
  },
  {
    id: 4,
    title: "Project Title 4",
    description: "Write a short description of this project here.",
    technologies: ["Tech 1", "Tech 2"],
    githubLink: "#",
    liveLink: "",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=360&fit=crop",
  },
  {
    id: 5,
    title: "Project Title 5",
    description: "Write a short description of this project here.",
    technologies: ["Tech 1", "Tech 2", "Tech 3"],
    githubLink: "#",
    liveLink: "#",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=360&fit=crop",
  },
];

export const skills = {
  strong: ["Skill 1", "Skill 2", "Skill 3", "Skill 4", "Skill 5"],
  familiar: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
  learning: ["Skill 1", "Skill 2", "Skill 3"],
};

export const education = {
  school: "Your School Name",
  graduationYear: "2026",
  relevantCourses: [
    "Course 1",
    "Course 2",
    "Course 3",
    "Course 4",
  ],
};

export const interests: string[] = [
  "Interest 1",
  "Interest 2",
  "Interest 3",
  "Interest 4",
  "Interest 5",
  "Interest 6",
];

export const navLinks: NavLink[] = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];
