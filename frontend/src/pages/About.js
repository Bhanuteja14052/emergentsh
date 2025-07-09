import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Award, MapPin, Mail, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const About = () => {
  const skills = {
    programmingLanguages: ["Python", "Java", "C", "JavaScript"],
    webTechnologies: ["HTML5", "CSS3", "React", "Node.js", "Express.js", "REST APIs"],
    pythonLibraries: ["TensorFlow", "OpenCV", "MediaPipe", "Tkinter", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn", "PIL"],
    databases: ["SQL Plus", "MongoDB"],
    toolsAndPlatforms: ["Microsoft Azure", "GitHub", "Tableau", "Power BI", "Figma"]
  };

  const education = [
    {
      degree: "B.Tech - Computer Science & Business Systems",
      institution: "Mahatma Gandhi Institute of Technology",
      years: "2022 - 2026",
      current: true
    },
    {
      degree: "Intermediate Education (11th and 12th)",
      institution: "Narayana Junior College",
      years: "2020 - 2022",
      current: false
    }
  ];

  const achievements = [
    {
      title: "Academic Silver Medalist",
      description: "Secured Silver Medal for academic excellence in undergraduate studies",
      icon: Award
    },
    {
      title: "Diamond Certified Smart Coder",
      description: "Achieved Diamond certification in Smart Interviews coding assessment platform",
      icon: Award
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies Mastered", value: "20+" },
    { label: "Years of Experience", value: "3+" },
    { label: "Certifications", value: "8" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                About{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a passionate and motivated developer with a strong interest in AI, computer vision, and full-stack web development. I enjoy building intelligent systems as well as scalable, user-friendly web applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                With hands-on experience in both backend and frontend technologies, I strive to create impactful solutions that blend functionality with seamless user experiences.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Hyderabad, Telangana</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>bhanutejagummadevelli@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+91 9059246713</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/api/placeholder/600/800')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">BT</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {category === 'programmingLanguages' && <Code className="h-5 w-5 text-blue-600" />}
                      {category === 'webTechnologies' && <Code className="h-5 w-5 text-green-600" />}
                      {category === 'pythonLibraries' && <Brain className="h-5 w-5 text-purple-600" />}
                      {category === 'databases' && <Database className="h-5 w-5 text-orange-600" />}
                      {category === 'toolsAndPlatforms' && <Code className="h-5 w-5 text-red-600" />}
                      {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
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
              Education
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 relative z-10">
                    {edu.current && (
                      <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <Card className="border-l-4 border-l-blue-600">
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                            {edu.years}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {edu.institution}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                {index < education.length - 1 && (
                  <div className="absolute left-2 top-6 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Achievements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-8">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white mb-4">
                      <achievement.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;