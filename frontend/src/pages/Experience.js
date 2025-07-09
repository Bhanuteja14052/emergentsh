import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Salesforce Developer Intern",
      company: "Salesforce",
      type: "Internship",
      duration: "2024",
      location: "Remote",
      description: "Completed an internship focused on Salesforce CRM development, covering Apex programming, data modeling, and automation tools. Gained hands-on experience with Lightning components, Flow, and Process Builder for application customization. Built and configured CRM workflows, enhancing understanding of end-to-end customer lifecycle management. Applied Salesforce best practices to develop scalable and maintainable solutions.",
      achievements: [
        "Developed custom Lightning components for improved user experience",
        "Implemented automated workflows using Process Builder and Flow",
        "Configured CRM solutions for customer lifecycle management",
        "Applied Salesforce best practices for scalable development"
      ],
      skills: ["Salesforce", "Apex", "Lightning Components", "CRM", "Process Builder", "Flow"],
      current: false
    },
    {
      title: "AI/ML Intern",
      company: "NSIC, Hyderabad",
      type: "Internship",
      duration: "2023",
      location: "Hyderabad, India",
      description: "Successfully completed a comprehensive internship program focused on Artificial Intelligence and Machine Learning concepts and their implementation using Python. Delivered assigned modules within the stipulated time frame and met the program's requirements. Gained hands-on experience in AI/ML techniques, tools, and frameworks under the guidance of industry professionals.",
      achievements: [
        "Completed comprehensive AI/ML training program",
        "Developed projects using Python and ML libraries",
        "Implemented AI algorithms for real-world applications",
        "Gained expertise in data analysis and model training"
      ],
      skills: ["Python", "Machine Learning", "TensorFlow", "Data Analysis", "AI Algorithms"],
      current: false
    }
  ];

  const certifications = [
    {
      title: "Smart Interviews Certification",
      issuer: "Smart Interviews",
      type: "Gold Certified Smart Coder",
      year: "2025",
      verified: true
    },
    {
      title: "Salesforce Developer",
      issuer: "Salesforce",
      type: "Certified Salesforce Platform Developer",
      year: "2024",
      verified: true
    },
    {
      title: "Java Foundations",
      issuer: "Oracle Academy",
      type: "Certification",
      year: "2024",
      verified: true
    },
    {
      title: "Database Design and Programming with SQL",
      issuer: "Oracle Academy",
      type: "Certification",
      year: "2024",
      verified: true
    },
    {
      title: "Python (Basic)",
      issuer: "HackerRank",
      type: "Certification",
      year: "2023",
      verified: true
    },
    {
      title: "Intro to Machine Learning",
      issuer: "Kaggle",
      type: "Certification",
      year: "2023",
      verified: true
    },
    {
      title: "Introduction to Networks",
      issuer: "Cisco Networking Academy",
      type: "Certification",
      year: "2022",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Professional journey through internships, certifications, and continuous learning in AI/ML and software development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              My journey in the tech industry
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Timeline indicator */}
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full mt-6 relative z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Experience card */}
                  <div className="flex-1">
                    <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-8">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-3">
                              <div className="flex items-center gap-1">
                                <Briefcase className="h-4 w-4" />
                                <span className="font-medium">{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                            <Badge variant="outline" className="mb-4">
                              {exp.type}
                            </Badge>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                            Technologies & Skills:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill) => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-3 top-12 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -z-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Certifications & Achievements
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Continuous learning and professional development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {cert.year}
                        </span>
                      </div>
                      {cert.verified && (
                        <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                          Verified
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      {cert.issuer}
                    </p>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                      {cert.type}
                    </p>
                    
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">View Certificate</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Development Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I believe in staying up-to-date with the latest technologies and continuously improving my skills through various learning platforms and industry projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Skills",
                description: "Constantly learning new programming languages, frameworks, and tools",
                icon: "🔧"
              },
              {
                title: "Industry Knowledge",
                description: "Staying updated with latest trends in AI/ML and software development",
                icon: "📚"
              },
              {
                title: "Project Experience",
                description: "Applying knowledge through hands-on projects and real-world applications",
                icon: "🚀"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              I'm always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-200">
                Get in Touch
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Download Resume
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;