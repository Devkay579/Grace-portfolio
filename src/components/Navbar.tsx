// components/Navbar.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll(50);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <div className="w-full h-full bg-blue-50 flex items-center justify-center text-gray-600">
                <img src="../images/grace.jpg" alt="image"  />
              </div>
              </div>
              <span className="font-bold text-xl text-gray-900">
                AF
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  whileHover={{ y: -2 }}
                  className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </motion.button>
              ))}
              
              {/* Contact Info */}
              <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-300">
                <motion.a
                  href="mailto:folaranmialetan@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                >
                  <Mail size={16} />
                </motion.a>
                <motion.a
                  href="tel:+2349123405631"
                  whileHover={{ scale: 1.05 }}
                  className="p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors"
                >
                  <Phone size={16} />
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="block w-full text-left py-3 text-gray-700 hover:text-blue-600 font-medium border-b border-gray-100 transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href="mailto:folaranmialetand@gmail.com"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Mail size={16} />
                    <span>Email</span>
                  </motion.a>
                  <motion.a
                    href="tel:+2349028406631"
                    className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone size={16} />
                    <span>Call</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;