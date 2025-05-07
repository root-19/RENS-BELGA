import React from 'react';
import { FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Me from "../assets/Me.jpg";
import Background from '../assets/Home-bg.jpg';

const AboutMe = () => {
  const skills = [
    {
      id: 1,
      icon: <FaCode size={40} />,
      title: 'Frontend Development',
      description: 'Experienced in React.js, Next.js, and modern CSS frameworks like Tailwind CSS.',
    },
    {
      id: 2,
      icon: <FaServer size={40} />,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Express,Laravel and RESTful API development.',
    },
    {
      id: 3,
      icon: <FaMobile size={40} />,
      title: 'Responsive Design',
      description: 'Creating mobile-first, responsive web applications that work across all devices.',
    },
    {
      id: 4,
      icon: <FaDatabase size={40} />,
      title: 'Database Management',
      description: 'Working with SQL and NoSQL databases including MongoDB and PostgreSQL.',
    },
  ];

  const technicalSkills = [
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Git',
    'Docker',
    'AWS',
    'TypeScript',
    'PHP',
    'Laravel',
    'tailwind.css',
    'Github',
  ];

  return (
    <div name="about" className="w-full py-20 bg-gray-900">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="heading-primary">About Me</h2>
          <p className="paragraph">
            I am a dedicated full-stack developer with a passion for creating elegant solutions
            to complex problems. With a strong foundation in both frontend and backend technologies,
            I strive to build scalable and maintainable applications that provide exceptional user experiences.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="flex items-center mb-4">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="text-blue-500 mr-4 group-hover:text-blue-400 transition-colors duration-300"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <p className="text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="heading-primary mb-8">TechStack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technicalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium
                         border border-gray-700 hover:border-blue-500 transition duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;




