import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Rocket, Mail, Sparkles } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home, emoji: '🏠' },
    { name: 'About', href: '#about', icon: User, emoji: '👤' },
    { name: 'Skills', href: '#skills', icon: Code, emoji: '💻' },
    { name: 'Experience', href: '#experience', icon: Briefcase, emoji: '💼' },
    { name: 'Projects', href: '#projects', icon: FolderOpen, emoji: '📂' },
    { name: 'Contact', href: '#contact', icon: Mail, emoji: '✉️' },
  ];

  // Floating particles effect
  const generateParticles = () => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10,
    }));
  };

  const [particles] = useState(generateParticles);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = navItems.map(item => item.href.slice(1));
      let current = 'hero';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: { 
      scale: [1, 1.2, 1], 
      opacity: [0.7, 1, 0.7],
      transition: { 
        duration: 2, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <>
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 2,
            }}
          />
        ))}
      </div>

      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl border-b-2 border-cyan-400/60 dark:border-cyan-500/60' 
            : 'bg-gradient-to-r from-transparent via-white/5 to-transparent dark:via-gray-900/5'
        }`}
        style={{
          background: scrolled 
            ? undefined 
            : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,200,255,0.1) 0%, transparent 50%)`
        }}
      >
        {/* Aurora Effect Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            animate={{
              x: [-100, 100, -100],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center py-4">
            {/* Enhanced Logo with multiple effects */}
            {/* Logo without glowing effect */}
<motion.div
  className="relative text-2xl font-bold cursor-pointer group"
  whileHover={{ scale: 1.05 }}
  onClick={() => handleNavClick('#hero')}
>
  {/* Just gradient text, no blur/glow */}
  <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 
                   bg-clip-text text-transparent transition-all duration-300">
    ASWINI M S
  </span>

  {/* Keep sparkle if you want, or remove this too */}
  <motion.div
    className="absolute -top-1 -right-1"
    animate={{
      rotate: 360,
      scale: [0.8, 1.2, 0.8],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
    }}
  >
    <Sparkles className="w-4 h-4 text-cyan-400 opacity-70" />
  </motion.div>
</motion.div>


            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);
                
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 
                                   rounded-lg border border-cyan-400/50"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    <motion.button
                      onClick={() => handleNavClick(item.href)}
                      className={`relative text-sm transition-all duration-300 px-4 py-2 rounded-lg 
                                  border border-transparent group overflow-hidden ${
                        isActive 
                          ? 'text-cyan-400 border-cyan-400/50 shadow-[0_0_15px_rgba(0,200,255,0.4)]' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-white hover:border-cyan-400'
                      }`}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -2,
                        boxShadow: "0 10px 25px rgba(0,200,255,0.3)" 
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Hover background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 
                                   group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.2 }}
                      />
                      
                      {/* Navigation item content */}
                      <div className="relative z-10 flex items-center space-x-2">
                        <item.icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'group-hover:text-white'}`} />
                        <span className="font-exo2 font-semibold">
                          <span className="mr-1.5">{item.emoji}</span>
                          <span className="font-orbitron tracking-wide">{item.name}</span>
                        </span>
                      </div>
                    </motion.button>
                  </motion.div>
                );
              })}
              <ThemeToggle />
            </div>

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-3 rounded-xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 
                           border-2 border-cyan-400/50 group overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0,200,255,0.5)" 
                }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                />
                
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  {isOpen ? (
                    <X className="w-6 h-6 text-cyan-400" />
                  ) : (
                    <Menu className="w-6 h-6 text-cyan-400" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Enhanced Mobile Menu with advanced animations */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-x-0 top-20 z-40 mx-4 rounded-2xl
                         bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl
                         border-2 border-cyan-400/30 shadow-2xl lg:hidden
                         shadow-cyan-400/20"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 rounded-2xl opacity-20">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-2xl"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(6,182,212,0.3), rgba(59,130,246,0.3), rgba(147,51,234,0.3))",
                      "linear-gradient(135deg, rgba(147,51,234,0.3), rgba(6,182,212,0.3), rgba(59,130,246,0.3))",
                      "linear-gradient(225deg, rgba(59,130,246,0.3), rgba(147,51,234,0.3), rgba(6,182,212,0.3))",
                      "linear-gradient(45deg, rgba(6,182,212,0.3), rgba(59,130,246,0.3), rgba(147,51,234,0.3))",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              <div className="relative container mx-auto px-6 py-8">
                {/* Mobile menu header with effect */}
                <motion.div
                  className="flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center space-x-2 text-lg font-semibold 
                                  bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span>Navigation</span>
                    <Sparkles className="w-5 h-5 text-purple-500" />
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-3">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.slice(1);
                    
                    return (
                      <motion.button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className={`relative flex items-center space-x-4 p-4 rounded-xl
                                    transition-all duration-300 group overflow-hidden font-exo2 font-semibold
                                    border-2 ${
                          isActive 
                            ? 'bg-gradient-to-r from-cyan-400/20 to-purple-500/20 border-cyan-400/50 text-cyan-400'
                            : 'bg-white/40 dark:bg-gray-800/40 border-transparent hover:border-cyan-400/50 text-gray-700 dark:text-gray-300'
                        }`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 25 
                        }}
                        whileHover={{ 
                          x: 8, 
                          scale: 1.02,
                          boxShadow: "0 10px 30px rgba(0,200,255,0.3)" 
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Sliding background effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 
                                     group-hover:opacity-20 transition-opacity duration-300"
                          whileHover={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 0.6 }}
                        />
                        
                        {/* Icon with bounce effect */}
                        <motion.div
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            isActive 
                              ? 'bg-cyan-400/20 text-cyan-400' 
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 group-hover:bg-cyan-400/20 group-hover:text-cyan-400'
                          }`}
                          whileHover={{ 
                            rotate: [0, -10, 10, -5, 5, 0],
                            scale: 1.1 
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className="w-5 h-5" />
                        </motion.div>
                        
                        {/* Text with typewriter effect on hover */}
                        <motion.div className="relative z-10 flex-1 text-left">
                          <motion.span 
                            className={`font-medium transition-colors duration-300 ${
                              isActive 
                                ? 'text-cyan-400' 
                                : 'group-hover:text-cyan-400'
                            }`}
                          >
                            {item.name}
                          </motion.span>
                          
                          {/* Active indicator dot */}
                          {isActive && (
                            <motion.div
                              className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-2 h-2 
                                         bg-cyan-400 rounded-full"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            />
                          )}
                        </motion.div>
                        
                        {/* Ripple effect */}
                        <motion.div
                          className="absolute inset-0 bg-cyan-400/30 rounded-xl scale-0"
                          whileTap={{ 
                            scale: 1.5, 
                            opacity: [0.3, 0],
                            transition: { duration: 0.4 }
                          }}
                        />
                      </motion.button>
                    );
                  })}
                </div>
                
                {/* Decorative bottom element */}
                <motion.div
                  className="mt-6 flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div
                    className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                    animate={{ 
                      width: [48, 80, 48],
                      opacity: [0.5, 1, 0.5] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Progress Bar indicating scroll position */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-60 origin-left"
        initial={{ scaleX: 0 }}
        style={{
          scaleX: scrolled ? (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) : 0,
        }}
        transition={{ duration: 0.1 }}
      />

      {/* Navigation sound effect indicator (visual only) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            className="fixed top-24 right-6 w-12 h-12 rounded-full 
                       bg-gradient-to-r from-cyan-400/20 to-purple-500/20 
                       border border-cyan-400/30 backdrop-blur-md z-40
                       flex items-center justify-center"
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: -180 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;