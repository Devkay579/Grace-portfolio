// components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10  rounded-full overflow-hidden">
                <div className="w-full h-full bg-blue-50 flex items-center justify-center text-gray-600">
                <img src="../images/grace.jpg" alt="image"  />
              </div>
              </div>
              <span className="font-bold text-2xl text-gray-900">AF</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Transforming brands through compelling storytelling and data-driven social media 
              strategies. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:folaranmialetan@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="tel:+2349123405631"
                whileHover={{ scale: 1.1 }}
                className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition-colors"
              >
                <Phone size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Home', 'About', 'Experience', 'Education', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  whileHover={{ x: 5 }}
                  className="text-left text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail size={18} />
                <a href="mailto:folaranmialetan@gmail.com" className="hover:text-blue-600 transition-colors">
                  folaranmialetan@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={18} />
                <a href="tel:+2349123405631" className="hover:text-blue-600 transition-colors">
                  +234 9123405631
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-1 text-gray-600 mb-4 md:mb-0"
          >
            <span>&copy; {currentYear} Aletan Folaranmi</span>
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;