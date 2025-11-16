// components/Skills.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Languages, BarChart3, PenTool, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Content Creation",
      icon: <PenTool className="w-8 h-8" />,
      skills: ["Content Strategy", "Visual Storytelling", "Copywriting", "Photo Editing"]
    },
    {
      title: "Strategy & Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      skills: ["Campaign Planning", "Data Analysis", "ROI Tracking", "Performance Reporting"]
    },
    {
      title: "Platform Management",
      icon: <Users className="w-8 h-8" />,
      skills: ["Instagram Marketing", "Facebook Ads", "Community Management", "Influencer Research"]
    }
  ];

  const languages = [
    { name: "English", level: "Native" },
    { name: "Yoruba", level: "Fluent" }
  ];

  const tools = [
    "Meta Business Suite", "Canva Pro", "Google Analytics", "Buffer",
    "Adobe Creative Suite", "Trello", "Asana", "Hootsuite"
  ];

  return (
    <section ref={ref} id="skills" className="py-20 px-4 bg-gray-50">
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
            SKILLS & EXPERTISE
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My <span className="text-blue-600">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining creative vision with data-driven strategies to deliver exceptional social media results
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {category.title}
              </h3>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium text-gray-700">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages and Tools */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Languages</h3>
            </div>
            
            <div className="space-y-4">
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                >
                  <span className="font-semibold text-gray-900">{language.name}</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {language.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Tools & Platforms</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-600 text-white text-center py-3 px-4 rounded-xl font-medium shadow-lg"
                >
                  {tool}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;