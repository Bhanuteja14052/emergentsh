import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Computer Vision: A Beginner's Guide",
      excerpt: "Explore the fundamentals of computer vision and learn how to build your first OpenCV project. This comprehensive guide covers everything from basic image processing to advanced techniques.",
      content: "Computer vision is one of the most exciting fields in AI today. In this post, we'll explore the basics of image processing, feature detection, and object recognition using OpenCV and Python.",
      author: "Bhanu Teja",
      date: "2024-12-15",
      readTime: "8 min read",
      tags: ["Computer Vision", "OpenCV", "Python", "AI"],
      category: "tutorial",
      featured: true
    },
    {
      id: 2,
      title: "My Journey with AI: From Novice to Building Recognition Systems",
      excerpt: "A personal reflection on my journey into artificial intelligence, the challenges I faced, and the projects that shaped my understanding of ML and computer vision.",
      content: "When I first started learning about AI, I was fascinated by the possibility of machines that could see and understand the world. This is the story of how I went from complete beginner to building facial recognition systems.",
      author: "Bhanu Teja",
      date: "2024-12-10",
      readTime: "6 min read",
      tags: ["AI", "Machine Learning", "Personal", "Journey"],
      category: "personal",
      featured: false
    },
    {
      id: 3,
      title: "Building Scalable Web Applications with React and Node.js",
      excerpt: "Learn best practices for developing full-stack applications that can handle growth. We'll cover architecture patterns, performance optimization, and deployment strategies.",
      content: "Scalability is crucial for modern web applications. In this post, I'll share my experience building Edutube and the lessons learned about creating applications that can grow with your user base.",
      author: "Bhanu Teja",
      date: "2024-12-05",
      readTime: "10 min read",
      tags: ["React", "Node.js", "Full Stack", "Scalability"],
      category: "tutorial",
      featured: true
    },
    {
      id: 4,
      title: "The Future of AI in Education: Opportunities and Challenges",
      excerpt: "An analysis of how artificial intelligence is transforming education, the potential benefits, and the challenges we need to address for successful implementation.",
      content: "AI has the potential to revolutionize education by personalizing learning experiences and making education more accessible. Let's explore the current state and future possibilities.",
      author: "Bhanu Teja",
      date: "2024-11-28",
      readTime: "7 min read",
      tags: ["AI", "Education", "Future", "Technology"],
      category: "insights",
      featured: false
    },
    {
      id: 5,
      title: "Gesture Recognition: Building Intuitive Human-Computer Interactions",
      excerpt: "Dive deep into the world of gesture recognition technology. Learn how to create applications that respond to human gestures using MediaPipe and computer vision.",
      content: "Gesture recognition is enabling new forms of human-computer interaction. In this post, I'll walk you through building a gesture-controlled application using MediaPipe and OpenCV.",
      author: "Bhanu Teja",
      date: "2024-11-20",
      readTime: "9 min read",
      tags: ["Gesture Recognition", "MediaPipe", "HCI", "Computer Vision"],
      category: "tutorial",
      featured: false
    },
    {
      id: 6,
      title: "Reflections on My First Hackathon Experience",
      excerpt: "Sharing my experience participating in hackathons, the lessons learned, and how these events have shaped my approach to problem-solving and innovation.",
      content: "Hackathons are incredible learning experiences that push you to think creatively and work under pressure. Here's what I learned from my first hackathon and how it changed my perspective on development.",
      author: "Bhanu Teja",
      date: "2024-11-15",
      readTime: "5 min read",
      tags: ["Hackathon", "Experience", "Innovation", "Problem Solving"],
      category: "personal",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'tutorial', label: 'Tutorials', count: blogPosts.filter(post => post.category === 'tutorial').length },
    { id: 'personal', label: 'Personal', count: blogPosts.filter(post => post.category === 'personal').length },
    { id: 'insights', label: 'Insights', count: blogPosts.filter(post => post.category === 'insights').length }
  ];

  const allTags = [...new Set(blogPosts.flatMap(post => post.tags))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedTag === 'all' || post.category === selectedTag;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

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
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Thoughts on AI, machine learning, web development, and the future of technology
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-80"
                />
              </div>
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Highlighted posts you shouldn't miss
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className="bg-blue-600 text-white">Featured</Badge>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              All Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No articles found matching your search criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to get notified when I publish new articles about AI, web development, and technology insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Input
                placeholder="Enter your email"
                className="flex-1 max-w-md bg-white/10 border-white/20 text-white placeholder-white/70"
              />
              <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-blue-100 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;