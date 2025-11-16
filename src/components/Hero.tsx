// components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Download, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center justify-center min-h-screen pt-20 md:pt-32">
        
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-gray-900"
          >
            ALETAN <span className="text-blue-600">FOLARANMI</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-gray-700"
          >
            SOCIAL MEDIA MANAGER
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
          >
            Transforming brands through compelling storytelling, data-driven strategies, 
            and authentic engagement in the beauty and lifestyle space.
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-[200px] bg-blue-600 text-white rounded-lg py-3 px-6 font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              <Download size={20} />
              Download CV
            </motion.button>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-start items-center gap-6 text-gray-600"
          >
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+234 9123405631</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} />
              <a 
                href="mailto:folaranmialetan@gmail.com"
                className="hover:text-blue-600 transition-colors"
              >
                folaranmialetan@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        
        <div className="md:w-1/2 flex justify-center md:justify-end relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-100 shadow-2xl">
              
              <div className="w-full h-full bg-blue-50 flex items-center justify-center text-gray-600">
                <img src="../images/grace.jpg" alt="image"  />
              </div>
            </div>
            
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold transform rotate-6 hover:rotate-0 transition-transform duration-300 border-2 border-white"
            >
              3+ Years Experience
            </motion.div>

            
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -left-4 bg-blue-500 text-white p-3 rounded-full shadow-lg border-2 border-white"
            >
              <Mail size={20} />
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-1/2 -right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg border-2 border-white"
            >
              <Phone size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;