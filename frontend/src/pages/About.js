import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, Brain, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['Python', 'Java', 'C++', 'JavaScript', 'Node.js'],
      icon: Code,
      color: 'blue'
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React', 'Express.js', 'FastAPI', 'Flask', 'jQuery'],
      icon: Zap,
      color: 'purple'
    },
    {
      category: 'Databases & Cloud',
      items: ['MongoDB', 'SQL', 'Azure', 'REST APIs'],
      icon: Database,
      color: 'green'
    },
    {
      category: 'AI/ML & Tools',
      items: ['OpenCV', 'TensorFlow', 'CNN', 'GitHub', 'VS Code', 'Figma'],
      icon: Brain,
      color: 'orange'
    },
    {
      category: 'Technologies',
      items: ['WebRTC', 'HTML5', 'CSS3', 'Tailwind CSS', 'Power BI', 'Tableau'],
      icon: Cloud,
      color: 'pink'
    }
  ];

  const education = {
    degree: 'Bachelor of Technology in Computer Science & Business Systems',
    institution: 'Mahindra University',
    duration: '2020 - 2024',
    location: 'Hyderabad, India'
  };

  const achievements = [
    'Led design and execution of promotional materials for Technical Symposium 2024',
    'Completed multiple technical certifications in AI/ML and cloud technologies',
    'Published research papers in innovative technology domains',
    'Active contributor to open-source projects',
    'Experienced in hackathons and competitive programming'
  ];

  const colorClasses = {
    blue: 'text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900',
    purple: 'text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900',
    green: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900',
    orange: 'text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900',
    pink: 'text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900'
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
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate AI/ML Engineer and Full Stack Developer with a strong foundation 
            in computer science and a drive to create innovative solutions.
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Based in Hyderabad, Telangana, I am a recent graduate with a BTech in Computer Science & Business Systems 
              from Mahindra University. My passion lies in the intersection of artificial intelligence, machine learning, 
              and full-stack development. I enjoy building scalable applications and intelligent systems that solve 
              real-world problems.
            </p>
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Cpu className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {education.degree}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                {education.institution}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {education.duration} • {education.location}
              </p>
            </div>
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${colorClasses[skill.color]}`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Achievements & Highlights
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 dark:text-gray-400">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Whether it's AI/ML solutions or full-stack development, I'm ready to contribute.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;