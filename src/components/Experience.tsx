// components/Experience.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Social Media Manager",
      company: "SwitchFest (Youth Lifestyle & Music Festival)",
      period: "1 Month",
      achievements: [
        "Supported the content strategy and social rollout for SwitchFest",
        "Created high-energy social content",
        "Assisted in organizing and uploading photo highlights from pre-events",
        "Engaged with vendors, artists, and attendees to boost reports and online buzz"
      ]
    },
    {
      role: "Social Media Manager",
      company: "Infortime (Social Innovation Driven Entrepreneurship SIDE project)",
      period: "1 Month",
      achievements: [
        "Crafted content that simplified the project's mission for easy audience connection",
        "Wrote informative captions to educate the public on infokine's goal and social impact",
        "Designed a mini countdown campaign and event reminders",
        "Managed engagement through comments, reports, and DM responses pre-event"
      ]
    },
    {
      role: "Social Media Manager",
      company: "Joyce's Haven (Beauty Brand)",
      period: "3 Months",
      achievements: [
        "Created branded content using soft, feminine aesthetics that resonated with the beauty audience",
        "Developed a weekly content calendar with post themes (Product Spotlight, Testimonials, Tips, Behind the Scenes)",
        "Used Instagram Stories to run mini Q&As and customer polls"
      ]
    }
  ];

  return (
    <section ref={ref} id="experience" className="py-20 px-4 bg-gray-50">
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
            PROFESSIONAL EXPERIENCE
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming brands through strategic social media management and innovative digital campaigns
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex items-start gap-4 mb-4 lg:mb-0">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 bg-blue-50 px-4 py-2 rounded-full">
                  <Calendar size={16} />
                  <span className="font-semibold">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, achIndex) => (
                  <motion.li
                    key={achIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;