import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Zap, Github, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const featuredProjects = [
    {
      title: "GestureArt",
      description: "A Python-based virtual painting app using OpenCV and MediaPipe",
      image: "/api/placeholder/600/400",
      tech: ["Python", "OpenCV", "MediaPipe"],
      github: "https://github.com/Gbhanuteja22/GestureArt",
      demo: "https://github.com/Gbhanuteja22/GestureArt"
    },
    {
      title: "Face Recognition System",
      description: "Complete face recognition system using ANN & CNN",
      image: "/api/placeholder/600/400",
      tech: ["Python", "TensorFlow", "OpenCV"],
      github: "https://github.com/Gbhanuteja22/Face-Detection-Using-ANN-CNN",
      demo: "https://github.com/Gbhanuteja22/Face-Detection-Using-ANN-CNN"
    },
    {
      title: "Edutube",
      description: "Educational video streaming platform with React & Node.js",
      image: "/api/placeholder/600/400",
      tech: ["React", "Node.js", "REST APIs"],
      github: "https://github.com/Gbhanuteja22/edutube",
      demo: "https://github.com/Gbhanuteja22/edutube"
    }
  ];

  const skills = [
    { name: "AI/ML", icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "Full Stack", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Performance", icon: Zap, color: "from-green-500 to-emerald-500" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium"
              >
                Available for opportunities
              </motion.div>
              
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white"
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Bhanu Teja
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300"
                >
                  AI & Full Stack Developer
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
                >
                  Problem Solver building smart & scalable solutions. Passionate about AI, computer vision, and creating impactful applications that blend functionality with seamless user experiences.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  Download Resume
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/api/placeholder/600/800')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">BT</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
              What I Do
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specializing in AI/ML, full-stack development, and creating high-performance applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                  <CardContent className="space-y-4">
                    <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${skill.color} text-white`}>
                      <skill.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {skill.name === 'AI/ML' && 'Building intelligent systems with TensorFlow, OpenCV, and modern ML frameworks'}
                      {skill.name === 'Full Stack' && 'Creating scalable web applications with React, Node.js, and modern technologies'}
                      {skill.name === 'Performance' && 'Optimizing applications for speed, scalability, and exceptional user experience'}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my latest work in AI/ML and full-stack development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                    <div className="absolute inset-0 bg-[url('/api/placeholder/600/400')] bg-cover bg-center opacity-50"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-2xl font-bold text-gray-700 dark:text-gray-300">
                        {project.title}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's collaborate and create innovative solutions together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View All Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;