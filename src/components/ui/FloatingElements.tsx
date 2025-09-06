import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Cpu, Zap } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { icon: Code, color: 'text-cyan-400', delay: 0 },
    { icon: Database, color: 'text-purple-500', delay: 0.5 },
    { icon: Smartphone, color: 'text-green-400', delay: 1 },
    { icon: Globe, color: 'text-blue-400', delay: 1.5 },
    { icon: Cpu, color: 'text-yellow-400', delay: 2 },
    { icon: Zap, color: 'text-pink-400', delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const Icon = element.icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${element.color}`}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: element.delay,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingElements;