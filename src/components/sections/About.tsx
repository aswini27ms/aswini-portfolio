import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import Lottie from 'lottie-react';
import { personalInfo } from '../../data/portfolio';
import developerAnimation from '../../assets/animations/developer2.json';

const About: React.FC = () => {
  const highlights = [
    "Co-Founder of Orivox - Hardware & Software Solutions",
    "MERN Stack & Data Engineering Specialist",
    "150+ LeetCode Problems Solved",
    "Multiple Hackathon Winner",
    "NASA Space Apps Challenge Participant"
  ];

  return (
    <SectionWrapper id="about" className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Animation Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full animate-pulse"></div>
              <Lottie
                animationData={developerAnimation}
                loop={true}
                className="w-full h-full"
              />
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Career Highlights
              </h3>
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-500 mb-1">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Hackathon Wins</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
