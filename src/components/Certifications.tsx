// components/Certifications.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Clock, BookOpen } from 'lucide-react';

const Certifications: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      name: "Digital Marketing Certification",
      issuer: "Google Digital Garage",
      status: "in progress",
      progress: 75,
      icon: <Award className="w-8 h-8" />,
      description: "Comprehensive digital marketing strategies including SEO, SEM, and social media marketing"
    },
    {
      name: "Jobberman Soft-Skill Training",
      issuer: "Jobberman Nigeria",
      status: "completed",
      icon: <Award className="w-8 h-8" />,
      description: "Professional development in communication, teamwork, and workplace ethics"
    }
  ];

  const ongoingLearning = [
    "Social Media Algorithm Updates",
    "Advanced Analytics & Reporting",
    "AI in Digital Marketing",
    "Influencer Marketing Strategies",
    "Content Strategy Development"
  ];

  return (
    <section ref={ref} id="certifications" className="py-20 px-4 bg-white">
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
            CERTIFICATIONS & TRAINING
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Continuous <span className="text-blue-600">Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Committed to professional development and staying ahead in the evolving digital landscape
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <Award className="text-blue-600" />
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{cert.name}</h4>
                        <p className="text-gray-600">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      cert.status === 'completed' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {cert.status === 'in progress' && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm font-semibold text-blue-600">{cert.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${cert.progress}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                          className="h-2 rounded-full bg-blue-600"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-gray-500">
                    {cert.status === 'in progress' ? (
                      <>
                        <Clock size={16} />
                        <span className="text-sm">Expected completion: 2024</span>
                      </>
                    ) : (
                      <>
                        <Award size={16} />
                        <span className="text-sm">Issued: 2023</span>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ongoing Learning */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <BookOpen className="text-blue-600" />
              Ongoing Learning Focus
            </h3>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100"
            >
              <p className="text-gray-700 mb-6 leading-relaxed">
                Staying current with industry trends and emerging technologies to deliver 
                cutting-edge social media strategies for clients.
              </p>

              <div className="grid gap-4">
                {ongoingLearning.map((topic, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 font-medium">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;