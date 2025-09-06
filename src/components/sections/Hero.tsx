import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Sparkles, Zap } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';
import FloatingElements from '../ui/FloatingElements';
import { personalInfo } from '../../data/portfolio';
import LottieAnimation from '../ui/LottieAnimation';
import developerAnimation from '../../assets/animations/developer.json'; // 👈 Lottie JSON

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const fullName = personalInfo.name;

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, fullName]);

  const handleDownloadResume = () => {
    const resumeUrl = '/assets/resume/Aswini_Resume.pdf';  // served from public/
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Aswini_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      y: -10,
      scale: 1.2,
      color: "#00D9FF",
      textShadow: "0 0 20px rgba(0, 217, 255, 0.8)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 
                 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
    >
      <ParticleBackground />
      <FloatingElements />

      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        {/* Animated mesh gradient */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(6,182,212,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(147,51,234,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 80%, rgba(6,182,212,0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(147,51,234,0.2) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 border border-purple-500/20 
                     transform rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Enhanced Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              {/* Enhanced Name with multiple effects */}
              <div className="relative mb-6">
                {/* Glowing background for name */}
                <motion.div
                  className="absolute inset-0 blur-2xl opacity-50"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #00D9FF, #8B5CF6)",
                      "linear-gradient(135deg, #8B5CF6, #FFB800)",
                      "linear-gradient(225deg, #FFB800, #00D9FF)",
                      "linear-gradient(315deg, #00D9FF, #8B5CF6)",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Main name with advanced typography */}
                <h1 className="relative text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
                  {/* 3D Text Shadow Effect */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent"
                    style={{ transform: 'translate(3px, 3px)' }}
                  >
                    {fullName.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        custom={index}
                        variants={letterVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="inline-block"
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </span>

                  {/* Main glowing text */}
                  {/* Main name with toned-down glow */}
<motion.span
  className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
             bg-clip-text text-transparent font-black"
  style={{
    fontFamily: '"Orbitron", "Inter", "SF Pro Display", -apple-system, sans-serif',
    textShadow: '0 0 8px rgba(0, 217, 255, 0.2)', // reduced glow
  }}
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "linear"
  }}
>
  {fullName.split('').map((letter, index) => (
    <motion.span
      key={index}
      custom={index}
      variants={letterVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="inline-block hover:cursor-default"
    >
      {letter === ' ' ? '\u00A0' : letter}
    </motion.span>
  ))}
</motion.span>


                  {/* Typewriter cursor */}
                  {isTyping && (
                    <motion.span
                      className="inline-block w-1 h-12 lg:h-16 bg-cyan-400 ml-1"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  )}
                </h1>

                {/* Floating sparkles around name */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Role with neon effect */}
              <motion.h2
                className="relative text-xl sm:text-2xl lg:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{
                  fontFamily: '"Space Grotesk", "Inter", sans-serif',
                }}
              >
                {/* Neon glow background */}
                <motion.span
                  className="absolute inset-0 text-cyan-400 blur-md"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {personalInfo.role}
                </motion.span>
                
                {/* Main role text */}
                <span className="relative text-gray-700 dark:text-gray-300 
                                 hover:text-cyan-400 transition-colors duration-300
                                 drop-shadow-[0_0_10px_rgba(0,200,255,0.3)]">
                  {personalInfo.role.split('').map((letter, index) => (
                    <motion.span
                      key={index}
                      className="inline-block"
                      whileHover={{ 
                        y: -5, 
                        scale: 1.1,
                        color: "#00D9FF",
                        textShadow: "0 0 15px rgba(0, 217, 255, 0.8)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                  ))}
                </span>
              </motion.h2>


            </motion.div>

            {/* Enhanced Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {/* Enhanced Download Button */}
              <motion.button
                onClick={handleDownloadResume}
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
                           text-white font-bold rounded-2xl overflow-hidden cursor-hover text-lg
                           border-2 border-transparent hover:border-white/50"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(0,200,255,0.4)",
                  rotate: [0, -1, 1, 0] 
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(45deg, #00D9FF, #3B82F6, #8B5CF6, #00D9FF)",
                  backgroundSize: "300% 300%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{
                  backgroundPosition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              >
                {/* Lightning bolt effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Download className="w-6 h-6" />
                  </motion.div>
                  <span className="font-black tracking-wide">View Resume</span>
                  <Zap className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                </span>
              </motion.button>

              {/* Enhanced Contact Button */}
              <motion.button
                onClick={handleContactClick}
                className="group relative px-10 py-5 border-3 border-cyan-400 text-cyan-400 
                           hover:text-white font-bold rounded-2xl transition-all duration-300 
                           cursor-hover text-lg overflow-hidden bg-transparent
                           hover:shadow-[0_0_30px_rgba(0,200,255,0.4)]"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "#00D9FF" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Sliding background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Button glow pulse */}
                <motion.div
                  className="absolute inset-0 bg-cyan-400/20 rounded-2xl"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3] 
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                <span className="relative flex items-center gap-3 font-black tracking-wide">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Mail className="w-6 h-6" />
                  </motion.div>
                  Contact Me
                  <motion.div
                    className="group-hover:translate-x-2 transition-transform duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right side - Enhanced Animation with more effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 }}
            className="relative order-1 lg:order-2 flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Enhanced floating skill badges with more effects */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, -5, 0] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1, z: 20 }}
                className="absolute -top-4 -left-4 bg-gradient-to-r from-cyan-400 to-blue-500 
                           text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl z-10
                           border border-white/20 backdrop-blur-sm
                           hover:shadow-[0_0_25px_rgba(0,200,255,0.6)] cursor-default"
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  React.js
                </motion.span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -3, 3, 0] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.1, z: 20 }}
                className="absolute top-8 -right-8 bg-gradient-to-r from-purple-500 to-pink-500 
                           text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl z-10
                           border border-white/20 backdrop-blur-sm
                           hover:shadow-[0_0_25px_rgba(147,51,234,0.6)] cursor-default"
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  Node.js
                </motion.span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [-5, 15, -5],
                  rotate: [0, 4, -4, 0] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.1, z: 20 }}
                className="absolute bottom-12 -left-8 bg-gradient-to-r from-green-400 to-emerald-500 
                           text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl z-10
                           border border-white/20 backdrop-blur-sm
                           hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] cursor-default"
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  MongoDB
                </motion.span>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [15, -5, 15],
                  rotate: [0, -5, 5, 0] 
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.1, z: 20 }}
                className="absolute bottom-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 
                           text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl z-10
                           border border-white/20 backdrop-blur-sm
                           hover:shadow-[0_0_25px_rgba(245,158,11,0.6)] cursor-default"
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                >
                  TypeScript
                </motion.span>
              </motion.div>

              {/* Enhanced Developer Animation Container */}
              <motion.div 
                className="relative w-full h-96 flex items-center justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Rotating ring effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                
                <motion.div
                  className="absolute inset-4 rounded-full border border-purple-500/20 border-dashed"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Main animation with enhanced glow */}
                <motion.div
                  className="relative z-10 w-full h-full"
                  animate={{
                    filter: [
                      "drop-shadow(0 0 20px rgba(0,200,255,0.3))",
                      "drop-shadow(0 0 30px rgba(147,51,234,0.4))",
                      "drop-shadow(0 0 20px rgba(0,200,255,0.3))",
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <LottieAnimation
                    animationData={developerAnimation}
                    className="w-full h-full"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>              
      </div>
    </section>
  );
};

export default Hero;