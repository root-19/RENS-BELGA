import React from 'react';
import {
  FaShoppingCart,
  FaTooth,
  FaQrcode,
  FaCar,
  FaSeedling,
  FaBoxes
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Maria from "../assets/Maria.png";
import Cat from "../assets/Cat.png";
import Video from "../assets/Video.png";
import Movie from "../assets/Movie.png";
import Ecommer from "../assets/Ecommer.jpeg";
import Vote from "../assets/Vote.png";
import Auto from "../assets/Auto.png";
import Record from "../assets/Record.png";
import Inventory from "../assets/Inventory.jpeg";
import Dental from "../assets/Dental.png";
import pineapple from "../assets/pineapple.jpg";
import capstone from "../assets/capstone12.png";
import ecommer from "../assets/ecomer-2.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "HP Performance Exhaust E-commerce System",
      description: "The HP Performance Exhaust E-commerce System is a capstone project designed to provide an efficient and user-friendly platform for managing and selling performance exhaust products. Built using PHP, Bootstrap, MySQLi, and AI, the system offers seamless functionality for both clients and administrators.",
      image: ecommer,
      icon: <FaShoppingCart className="text-blue-400" size={24} />,
      tags: ["PHP", "Bootstrap", "MySQL", "AI"]
    },
    {
      id: 2,
      title: "Dental Clinic Appointment System",
      description: "The Dental Clinic Appointment Management System is an innovative solution designed to streamline the process of setting and managing appointments. This system is built using PHP, Bootstrap, MySQLi, and AI, providing a seamless experience for both users and administrators.",
      image: Dental,
      icon: <FaTooth className="text-blue-400" size={24} />,
      tags: ["PHP", "Bootstrap", "MySQL", "Appointments"]
    },
    {
      id: 3,
      title: "Attendance Monitoring System",
      description: "A QR code-based attendance monitoring system for efficient student tracking. Features real-time email notifications, user authentication, and comprehensive attendance data management. Built with PHP, MySQL, and Tailwind CSS.",
      image: capstone,
      icon: <FaQrcode className="text-blue-400" size={24} />,
      tags: ["PHP", "MySQL", "Tailwind", "QR Code"]
    },
    {
      id: 4,
      title: "RPJ Insured Auto",
      description: "An insurance agency platform specializing in automobile insurance. Features user authentication, insurance processing, and a modern responsive interface built with PHP, MySQL, and Tailwind CSS.",
      image: Auto,
      icon: <FaCar className="text-blue-400" size={24} />,
      tags: ["PHP", "MySQL", "Tailwind", "Insurance"]
    },
    {
      id: 5,
      title: "RJ Pineapple Farm",
      description: "An e-commerce platform for a pineapple farm featuring real-time chat, order tracking, and admin analytics. Includes visualized revenue graphs and comprehensive order management.",
      image: pineapple,
      icon: <FaSeedling className="text-blue-400" size={24} />,
      tags: ["PHP", "MySQL", "E-commerce", "Analytics"]
    },
    {
      id: 6,
      title: "Inventory Management System",
      description: "A comprehensive Sari-Sari Store inventory management solution built with PHP, MySQL, Tailwind CSS, HTML, and AJAX for efficient product stock handling.",
      image: Inventory,
      icon: <FaBoxes className="text-blue-400" size={24} />,
      tags: ["PHP", "MySQL", "Tailwind", "AJAX"]
    }
  ];

  return (
    <div name="project" className="w-full py-20 bg-gray-900">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="heading-primary">Projects</h2>
          <p className="paragraph">
            Here are some of my recent projects that showcase my skills and experience
            in web development and system design.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              className="card group hover:transform hover:scale-105 transition-all duration-300 bg-gray-800 rounded-xl overflow-hidden shadow-xl"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                className="relative overflow-hidden h-56"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
              </motion.div>

              <div className="p-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-4"
                >
                  {project.icon}
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  viewport={{ once: true }}
                  className="text-gray-300 mb-6 line-clamp-3 text-lg"
                >
                  {project.description}
                </motion.p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.1 + 0.7 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-blue-500/10 text-blue-400 text-sm rounded-full
                               border border-blue-500/20 hover:bg-blue-500/20 transition-colors duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;

