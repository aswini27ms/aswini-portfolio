export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}