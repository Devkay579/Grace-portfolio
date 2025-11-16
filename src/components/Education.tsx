// components/Education.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Bsc. Mass Communication",
      institution: "Federal University, Oye-Ektil",
      period: " 2021-2025",
      icon: <GraduationCap className="w-6 h-6" />,
      location: "Oye-Ektil, Nigeria",
      description: "Specialized in digital media and communication strategies",
      achievements: ["Media Studies", "Digital Communication", "Brand Management"]
    },
    {
      degree: "Secondary School",
      institution: "Lagos State Model College, Igbokuta",
      period: "August 2013 - July 2019",
      icon: <GraduationCap className="w-6 h-6" />,
      location: "Lagos, Nigeria",
      description: "Completed with focus on arts and social sciences",
      achievements: ["Art & Design", "Social Studies", "Leadership"]
    }
  ];

  return (
    <section ref={ref} id="education" className="py-20 px-4 bg-white">
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
            EDUCATION
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Academic <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation in communication and media studies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.achievements.map((achievement, achIndex) => (
                  <span
                    key={achIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;