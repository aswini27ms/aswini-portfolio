import { Project, Experience, Skill, Achievement } from '../types';

export const personalInfo = {
  name: "ASWINI M S",
  role: "Full Stack Developer (MERN)",
  email: "aswini.ms2023eee@sece.ac.in",
  phone: "+91-7010917929",
  linkedin: "https://www.linkedin.com/in/aswini-m-s-8b10a8310/",
  github: "github.com/aswini27ms",
  bio: `Full Stack Developer (MERN) and Data Engineering Enthusiast with hands-on experience in building scalable web applications. ETL pipelines, and big data solutions. Co-Founder of Orivox, leading innovations in hardware and software solutions. Strong problem-solving, teamwork, and communication skills with proven success in hackathons and real-world projects.`,
  location: "Tamil Nadu, India"
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "JavaScript", level: 95, category: "Programming" },
  { name: "Java", level: 90, category: "Programming" },
  { name: "Python", level: 85, category: "Programming" },
  { name: "C/C++", level: 80, category: "Programming" },
  
  // Web Development
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "Node.js", level: 90, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "REST APIs", level: 90, category: "Backend" },
  
  // Databases & Tools
  { name: "MongoDB", level: 85, category: "Database" },
  { name: "MySQL", level: 80, category: "Database" },
  { name: "Firebase", level: 85, category: "Database" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "Docker", level: 75, category: "Tools" },
  { name: "AWS", level: 70, category: "Cloud" },
  
  // Data & Analytics
  { name: "Apache Spark", level: 75, category: "Big Data" },
  { name: "Hadoop", level: 70, category: "Big Data" },
  { name: "Kafka", level: 70, category: "Big Data" },
  { name: "Power BI", level: 80, category: "Analytics" }
];

export const experience: Experience[] = [
  {
    id: "1",
    role: "Data Engineering Intern",
    company: "Global Technologies",
    duration: "July 2025",
    description: [
      "Built automated ETL pipelines using Apache Airflow, Spark, and NiFi",
      "Reduced data processing time by 30% and improved system reliability",
      "Worked with enterprise datasets and cloud infrastructure"
    ]
  },
  {
    id: "2", 
    role: "MERN Stack Developer",
    company: "RV Tech",
    duration: "Jan 2025",
    description: [
      "Developed and deployed full-stack web applications using MERN stack",
      "Integrated REST APIs and MongoDB for enhanced application performance",
      "Improved user experience for client-facing projects"
    ]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "DCON - Disaster Response App",
    description: "Developed a disaster response app in Flutter with LoRa-based communication, enabling NGOs and donors to connect during crises. Selected from 1000+ teams.",
    techStack: ["Flutter", "LoRa", "Firebase", "Dart"]
  },
  {
    id: "2",
    title: "HealthifyMe Diet Planner",
    description: "Built a diet planner using Edamam API, allowing personalized nutrition tracking. Selected from 100+ teams in hackathon.",
    techStack: ["React", "Node.js", "Edamam API", "MongoDB"],
    githubLink: "https://github.com/aswini27ms/Healthify-Me.git",
  },
  {
    id: "3", 
    title: "CLIMA360 - Climate Data Viz",
    description: "Designed a climate data visualization tool with Power BI and NASA Space Apps Challenge integration for environmental insights.",
    techStack: ["Power BI", "Python", "NASA APIs", "Data Viz"],
    githubLink: "https://github.com/aswini27ms/CLIMA-360-PROJECT.git"
  },
  {
    id: "4",
    title: "Dev Forum Community",
    description: "Created a MERN-based developer forum with real-time discussions, user authentication, and community features.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/aswini27ms/developer_Forum.git",
    demoLink: "https://dev-forum-community.netlify.app"
  },
  {
    id: "5",
    title: "Crystal View - AR App",
    description: "Transparent screen laptops & TVs using Raspberry Pi + LCD display for innovative user interfaces.",
    techStack: ["Raspberry Pi", "Python", "IoT", "Hardware"],
    githubLink: "https://github.com/aswini-ms/crystal-view"
  },
  {
    id: "6",
    title: "Anime E-Commerce",
    description: "MERN-based e-commerce site with secure checkout, user authentication, and product management system.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    githubLink: "https://github.com/aswini27ms/e-commerce.git",
    demoLink: "https://anime-store.netlify.app"
  }
];

export const startups = [
  {
    id: "1",
    name: "Orivox",
    role: "Co-Founder",
    description: "Leading innovations in hardware and software solutions with focus on IoT and emerging technologies.",
    techStack: ["IoT", "Hardware", "Software Development", "Innovation"],
    achievements: [
      "Startup in Web/App + Hardware R&D",
      "Focus on scalable tech solutions",
      "Hardware-software integration projects"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    title: "NASA Space Apps Challenge 2024",
    description: "Top 947 global teams - Climate data visualization project",
    year: "2024"
  },
  {
    title: "HackFest 2024 (SSN College)",
    description: "Built DCON disaster response application",
    year: "2024"
  },
  {
    title: "Freshathon",
    description: "1st place, Top 10/250+ teams - Diet planning application",
    year: "2024"
  },
  {
    title: "LeetCode Problem Solving",
    description: "150+ problems solved with consistent practice",
    year: "2024"
  },
  {
    title: "HackerRank Achievements",
    description: "4(star) - C, 3(star) - Java, 1(star) - SQL, 4 Badges",
    year: "2024"
  }
];

export const certifications = [
  "Problem Solving Using C - NPTEL",
  "Data Structures & Algorithms - Sololearn",
  "SQL (Basics & Intermediate) - HackerRank", 
  "Data Visualization with Power BI - Great Learning",
  "Web Development Internship - Octanet"
];