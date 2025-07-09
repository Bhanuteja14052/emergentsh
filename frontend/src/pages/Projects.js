import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Zap, Eye, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'GestureArt - Virtual Drawing Platform',
      description: 'A real-time gesture-based drawing system that enables users to draw on screen without physical contact. Features advanced gesture recognition, real-time brush switching, and WebRTC integration for collaborative drawing.',
      tech: ['React', 'WebRTC', 'MongoDB', 'Computer Vision', 'JavaScript'],
      features: [
        'Real-time gesture-based drawing system',
        'Integrated gesture recognition for seamless brush switching',
        'WebRTC implementation for collaborative features',
        'API optimizations for 30% faster performance',
        'Intuitive user interface with smooth interactions'
      ],
      icon: Zap,
      gradient: 'from-blue-500 to-purple-600',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Face Recognition System - Intelligent Authentication',
      description: 'An advanced biometric authentication system using face recognition technology. Implements CNN for model training with positive imaging techniques and optimized recognition algorithms.',
      tech: ['Python', 'OpenCV', 'Flask', 'TensorFlow', 'CNN'],
      features: [
        'Complete face recognition with positive imaging',
        'CNN implementation for accurate model training',
        'JANN & CNN model training and recognition',
        'Optimized for live prediction accuracy',
        'Secure authentication with biometric verification'
      ],
      icon: Eye,
      gradient: 'from-green-500 to-teal-600',
      demoLink: '#',
      githubLink: '#'
    },
    {
      title: 'Edutube - Educational Video Platform',
      description: 'A comprehensive educational video platform with enhanced content discoverability and personalized learning experience. Features customized API integrations and advanced recommendation algorithms.',
      tech: ['React', 'Node.js', 'REST APIs', 'Express.js', 'MongoDB'],
      features: [
        'Enhanced content discoverability through customized API integrations',
        'Reduced video buffering by 30% with optimization',
        'Enhanced video recommendation logic',
        'Improved lesson duration by 25% with usability tests',
        'Responsive design for multiple devices'
      ],
      icon: Brain,
      gradient: 'from-orange-500 to-red-600',
      demoLink: '#',
      githubLink: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical projects spanning AI/ML, full-stack development, 
            and innovative solutions that solve real-world problems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <project.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={project.demoLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-full font-medium hover:shadow-lg transition-all duration-300`}
                    >
                      <ExternalLink className="mr-2" size={20} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
                    >
                      <Github className="mr-2" size={20} />
                      Source Code
                    </motion.a>
                  </div>
                </div>

                {/* Features List */}
                <div className="p-8 lg:p-12 bg-gray-50 dark:bg-gray-900/50">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    Key Features
                  </h4>
                  <ul className="space-y-4">
                    {project.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-400">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              More Projects Coming Soon
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring emerging technologies. 
              Stay tuned for more innovative solutions!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Discuss a Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;