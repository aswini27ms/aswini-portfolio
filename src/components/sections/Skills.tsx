import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import Lottie from 'lottie-react';
import { skills } from '../../data/portfolio';

// Import animations for each category
import programmingAnimation from '../../assets/animations/programming.json';
import frontendAnimation from '../../assets/animations/frontend.json';
import backendAnimation from '../../assets/animations/backend.json';
import databaseAnimation from '../../assets/animations/database.json';
import toolsAnimation from '../../assets/animations/tools.json';
import cloudAnimation from '../../assets/animations/cloud.json';
import bigDataAnimation from '../../assets/animations/bigdata.json';
import analyticsAnimation from '../../assets/animations/analytics.json';

const animationMap: Record<string, any> = {
  Programming: programmingAnimation,
  Frontend: frontendAnimation,
  Backend: backendAnimation,
  Database: databaseAnimation,
  Tools: toolsAnimation,
  Cloud: cloudAnimation,
  "Big Data": bigDataAnimation,
  Analytics: analyticsAnimation,
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const getCategoryColor = (category: string) => {
    const colors = {
      Programming: 'from-blue-400 to-blue-600',
      Frontend: 'from-green-400 to-green-600',
      Backend: 'from-purple-400 to-purple-600',
      Database: 'from-red-400 to-red-600',
      Tools: 'from-yellow-400 to-yellow-600',
      Cloud: 'from-indigo-400 to-indigo-600',
      "Big Data": 'from-pink-400 to-pink-600',
      Analytics: 'from-teal-400 to-teal-600',
    };
    return colors[category as keyof typeof colors] || 'from-gray-400 to-gray-600';
  };

  return (
    <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-24">
          {categories.map((category, index) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const isLeft = index % 2 === 0; // Alternate animation side

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col lg:flex-row items-center gap-10"
              >
                {/* Lottie Animation */}
                <div className={`w-full lg:w-1/3 ${isLeft ? 'order-1' : 'order-2'}`}>
                  <Lottie
                    animationData={animationMap[category]}
                    loop={true}
                    className="w-full h-64 lg:h-80"
                  />
                </div>

                {/* Skills */}
                <div className={`w-full lg:w-2/3 ${isLeft ? 'order-2' : 'order-1'}`}>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {categorySkills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-medium text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${getCategoryColor(category)} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
