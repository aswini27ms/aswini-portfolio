import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import LottieAnimation from '../ui/LottieAnimation';
import { projects } from '../../data/portfolio';

// Map tech stack to icons (using simple emojis or lucide icons)
const techIcons: Record<string, string> = {
  React: '⚛️',
  Node: '🟩',
  Flutter: '💙',
  Python: '🐍',
  JavaScript: '🟨',
  TypeScript: '🔷',
  Tailwind: '🌊',
  Firebase: '🔥',
  Docker: '🐳',
};

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    Projects
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
                </motion.div>
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const link = project.demoLink || project.githubLink;

            return (
              <motion.a
                key={project.id}
                href={link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Project Preview with Lottie */}
                <div className="relative overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center relative overflow-hidden">
                    <LottieAnimation
                      animationUrl={project.techStack.includes('Flutter')
                        ? "https://lottie.host/embed/e1f2g3h4-bg2c-7f8d-ch9e-6d0e5f1a2b3c/Tk8zHzwdZs.json"
                        : "https://lottie.host/embed/f2g3h4i5-ch3d-8g9e-di0f-7e1f6a2b3c4d/Tk8zHzwdZs.json"
                      }
                      className="w-24 h-24"
                    />
                  </div>

                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5 text-gray-800" />
                      </motion.a>
                    )}
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5 text-gray-800" />
                      </motion.a>
                    )}
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack with icons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        className="flex items-center gap-1 px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-400/10 to-purple-500/10 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-200 dark:border-cyan-800"
                      >
                        <span>{techIcons[tech] || '💻'}</span> {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
