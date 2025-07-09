import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Award, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Salesforce Developer',
      company: 'Salesforce Development & CRM Platform',
      duration: '2022',
      location: 'Remote',
      type: 'Development Role',
      responsibilities: [
        'Completed advanced internship focused on Salesforce CRM development',
        'Covering Apex programming, data modeling, and Lightning component development',
        'Built custom solutions for customer relationship management',
        'Gained expertise in Salesforce ecosystem and cloud-based solutions',
        'Worked on data integration and process automation'
      ],
      icon: Briefcase,
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Machine Learning Research Intern',
      company: 'The National Small Industries Corporation Ltd (NSIC)',
      duration: '2022',
      location: 'India',
      type: 'Research & Development',
      responsibilities: [
        'Contributed to intelligent system design and machine learning projects',
        'Focused on Python programming for data analysis and model development',
        'Developed ML models for business intelligence and automation',
        'Analyzed data patterns and implemented predictive algorithms',
        'Collaborated with research team on innovative AI solutions'
      ],
      icon: TrendingUp,
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Technical Symposium Lead',
      company: 'Mahindra University',
      duration: '2024',
      location: 'Hyderabad, India',
      type: 'Leadership Role',
      responsibilities: [
        'Led design and execution of promotional materials for Technical Symposium 2024',
        'Coordinated with teams for event planning and technical content',
        'Managed promotional campaigns and student engagement activities',
        'Organized technical workshops and competitive programming events',
        'Mentored junior students in technical project development'
      ],
      icon: Award,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const certifications = [
    {
      name: 'Introduction to Cloud Computing',
      issuer: 'Various Platforms',
      year: '2023'
    },
    {
      name: 'Machine Learning Fundamentals',
      issuer: 'Online Certification',
      year: '2023'
    },
    {
      name: 'Data Structures & Algorithms',
      issuer: 'Competitive Programming',
      year: '2022'
    },
    {
      name: 'Full Stack Development',
      issuer: 'Self-Paced Learning',
      year: '2023'
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
            My Experience
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A journey through my professional experiences, internships, and leadership roles 
            that have shaped my expertise in AI/ML and full-stack development.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-800 border-4 border-blue-500 rounded-full z-10"></div>

              {/* Experience Card */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center flex-shrink-0`}>
                      <exp.icon className="text-white" size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-1">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center">
                          <Calendar className="mr-1" size={16} />
                          {exp.duration}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="mr-1" size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="mb-6">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${exp.gradient} text-white`}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications & Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {cert.issuer}
                    </p>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {cert.year}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready for New Opportunities
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new roles, collaborations, and projects. 
              Let's connect and explore how we can work together!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Experience;