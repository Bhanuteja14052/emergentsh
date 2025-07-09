import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter, Code, Brain, Globe } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: "GestureArt: A Virtual Drawing Platform",
      description: "A Python-based virtual painting app using OpenCV and MediaPipe that lets users draw in real-time using hand gestures. Includes gesture-based brush, pen, and color palette selection with dynamic drawing controls.",
      image: "/api/placeholder/600/400",
      category: "ai-ml",
      technologies: ["Python", "OpenCV", "MediaPipe", "Pillow"],
      github: "https://github.com/Gbhanuteja22/GestureArt",
      demo: "https://github.com/Gbhanuteja22/GestureArt",
      achievements: [
        "Engineered a real-time hand gesture-based drawing system",
        "Integrated gesture recognition to dynamically switch between brushes, colors, and pen sizes",
        "Achieved 85%+ frame processing accuracy"
      ]
    },
    {
      title: "Face Recognition System Using ANN & CNN",
      description: "A complete face recognition system built with Tkinter (GUI), OpenCV, and TensorFlow (ANN/CNN). Features include dataset collection, model training, and real-time recognition with a user-friendly interface.",
      image: "/api/placeholder/600/400",
      category: "ai-ml",
      technologies: ["Python", "TensorFlow", "OpenCV", "Tkinter"],
      github: "https://github.com/Gbhanuteja22/Face-Detection-Using-ANN-CNN",
      demo: "https://github.com/Gbhanuteja22/Face-Detection-Using-ANN-CNN",
      achievements: [
        "Implemented neural network architectures for accurate face recognition",
        "Created intuitive GUI for dataset collection and real-time recognition",
        "Optimized model performance for efficient real-time processing"
      ]
    },
    {
      title: "Edutube: Educational Video Streaming Platform",
      description: "A React & Node.js powered platform for curated educational videos with categorization, user management, and a clean, responsive frontend.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["React", "Node.js", "REST APIs", "MongoDB"],
      github: "https://github.com/Gbhanuteja22/edutube",
      demo: "https://github.com/Gbhanuteja22/edutube",
      achievements: [
        "Developed a modular educational video platform",
        "Reduced video buffering time by ~30% with optimized API call structures",
        "Designed a clean, responsive UI with enhanced video recommendation logic"
      ]
    },
    {
      title: "Voice Based Search Engine",
      description: "A voice-activated search engine that allows users to search the web using natural speech commands with optimized search algorithms.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["JavaScript", "HTML5", "CSS", "Web Speech API"],
      github: "https://github.com/Gbhanuteja22/Voice-Based-Search-Engine",
      demo: "https://gbhanuteja22.github.io/Voice-Based-Search-Engine/",
      achievements: [
        "Developed a voice search engine, optimizing search algorithms to reduce response time by 30%",
        "Ensured cross-device and cross-browser compatibility for smooth UX",
        "Used GitHub for version control and organized project structure"
      ]
    },
    {
      title: "Drum Kit Website",
      description: "An interactive drum kit website that allows users to play virtual drums using keyboard or mouse inputs with engaging user experience.",
      image: "/api/placeholder/600/400",
      category: "web",
      technologies: ["JavaScript", "HTML5", "CSS", "Web Audio API"],
      github: "https://github.com/Gbhanuteja22/Drum-Kit",
      demo: "https://gbhanuteja22.github.io/Drum-Kit/",
      achievements: [
        "Built an interactive drum kit playable via mouse clicks and keyboard keys",
        "Designed for engaging UX across devices",
        "Prioritized visually intuitive layout for higher user retention"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Filter },
    { id: 'ai-ml', label: 'AI/ML', icon: Brain },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Code }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              A collection of my work showcasing AI/ML innovations, full-stack applications, and creative solutions
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2"
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/api/placeholder/600/400')] bg-cover bg-center opacity-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        {project.category === 'ai-ml' ? 'AI/ML' : project.category === 'web' ? 'Web Development' : 'Mobile'}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Key Achievements */}
                      <div className="mb-6">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          {project.achievements.slice(0, 2).map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group-hover:border-blue-300 dark:group-hover:border-blue-700"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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
          </motion.div>
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
              Interested in Collaborating?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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
                View Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;