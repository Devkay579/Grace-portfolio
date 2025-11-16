// components/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, TrendingUp, Heart } from 'lucide-react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const specialties = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Data-driven social media strategies tailored to your brand"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Content Creation",
      description: "Visually stunning content that captures your brand's essence"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Marketing",
      description: "Proven techniques to expand your reach and engagement"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community Building",
      description: "Fostering authentic connections with your audience"
    }
  ];

  return (
    <section ref={ref} id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-600 font-semibold text-lg mb-4 block"
          >
            ABOUT ME
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafting Digital Stories That <span className="text-blue-600">Inspire</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-blue-50 rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                I'm <span className="font-semibold text-blue-600">Folaranmi</span> – a passionate 
                freelance social media manager specializing in beauty, lifestyle, and diverse brand 
                storytelling.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With a strong eye for aesthetics and data-driven strategy, I help brands grow their 
                presence through intentional content, analytics, and paid advertising. From crafting 
                engaging content calendars to running targeted ad campaigns, I offer a full-stack 
                approach to boosting visibility, reach, and community engagement on social platforms.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specialties Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 gap-6"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="text-blue-600 mb-4">
                  {specialty.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  {specialty.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;