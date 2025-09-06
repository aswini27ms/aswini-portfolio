import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and</span>
            <Code className="w-4 h-4 text-cyan-400" />
            <span>by {personalInfo.name.split(' ')[0]}</span>
            <Coffee className="w-4 h-4 text-yellow-600" />
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          
          <motion.div
            className="mt-4 text-xs text-gray-400 dark:text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;