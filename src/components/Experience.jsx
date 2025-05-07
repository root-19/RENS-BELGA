import React from 'react';
import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Just10minute",
      period: "2025",
      description: "Working as a software engineer, developing and maintaining web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      icon: <FaLaptopCode size={24} />,
      skills: ["React", "PHP", "Laravel", "hostinger"]
    },
    {
      id: 2,
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      period: "2023 - 2024",
      description: "Developed and delivered custom web applications for various clients. Managed entire project lifecycles from requirement gathering to deployment. Implemented responsive designs and optimized application performance.",
      icon: <FaCode size={24} />,
      skills: ["PHP", "MySQL", "React", "Tailwind CSS", "API Integration"]
    }
  ];

  return (
    <div name="experience" className="w-full py-20 bg-gray-900">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <h2 className="heading-primary text-left">Experience</h2>
          <p className="paragraph text-left">
            My professional journey in software development and engineering.
          </p>
        </motion.div>

        <div className="max-w-4xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 py-6 group"
            >
              {/* Timeline line */}
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="absolute top-0 left-8 w-[2px] bg-gray-800 group-hover:bg-blue-500 transition-colors duration-300" 
              />
              
              {/* Timeline dot */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                viewport={{ once: true }}
                className="absolute left-6 top-8 w-6 h-6 bg-gray-900 border-2 border-blue-500 rounded-full"
              >
                <div className="absolute inset-[3px] bg-blue-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              </motion.div>

              {/* Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                viewport={{ once: true }}
                className="card ml-8 group-hover:border-blue-500 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500">
                      {exp.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <FaBriefcase className="text-blue-500" size={16} />
                    <span>{exp.company}</span>
                    <span className="text-blue-500">•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-400 mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + skillIndex * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full
                               border border-gray-700 hover:border-blue-500 transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 