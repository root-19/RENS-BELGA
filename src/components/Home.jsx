import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gray-900">
      <div className="section-container h-full flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-blue-500 font-bold text-lg mb-2"
          >
            Hi, my name is
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl sm:text-7xl font-bold text-white mb-4"
          >
            Rens Acuña
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-4xl sm:text-6xl font-bold text-gray-400 mb-6"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="paragraph max-w-2xl mb-8"
          >
            I'm a passionate full-stack developer specializing in building exceptional digital experiences.
            My focus is on creating responsive and user-friendly web applications
            that solve real-world problems.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex gap-4 mb-8"
          >
            <Link
              to="project"
              smooth
              duration={500}
              className="button-primary flex items-center gap-2"
            >
              View Work
              <HiArrowNarrowRight className="ml-2" />
            </Link>
            
            <a
              href="/src/assets/rens-resume.pdf"
              download="Rens_Belga_CV"
              className="button-secondary"
            >
              Download CV
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="flex gap-4"
          >
            <a
              href="https://github.com/root-19"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FaLinkedin size={30} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
