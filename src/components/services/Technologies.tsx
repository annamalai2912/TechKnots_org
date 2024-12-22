import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CircuitBoard, Brain, Cog, Send, Cloud, Smartphone, Shield, Wifi, ExternalLink, Users, Trophy } from 'lucide-react';

const technologies = [
  { 
    name: "IoT",
    icon: Wifi,
    color: "bg-blue-500",
    users: "2.5K+",
    projects: 48,
    description: "Connect and control smart devices through advanced IoT networks",
    achievements: ["Smart City Integration", "Industrial IoT Solutions"]
  },
  { 
    name: "AI & ML",
    icon: Brain,
    color: "bg-purple-500",
    users: "3K+",
    projects: 56,
    description: "Implement cutting-edge artificial intelligence and machine learning solutions",
    achievements: ["Computer Vision", "Natural Language Processing"]
  },
  { 
    name: "Robotics",
    icon: Cog,
    color: "bg-green-500",
    users: "1.8K+",
    projects: 35,
    description: "Build and program advanced robotic systems and automation solutions",
    achievements: ["Industrial Automation", "Collaborative Robots"]
  },
  { 
    name: "Drones",
    icon: Send,
    color: "bg-orange-500",
    users: "1.2K+",
    projects: 42,
    description: "Design and develop autonomous drone systems for various applications",
    achievements: ["Aerial Mapping", "Delivery Systems"]
  },
  { 
    name: "Cloud Computing",
    icon: Cloud,
    color: "bg-indigo-500",
    users: "4K+",
    projects: 62,
    description: "Deploy and manage scalable cloud infrastructure and services",
    achievements: ["Serverless Architecture", "Cloud Migration"]
  },
  { 
    name: "Cybersecurity",
    icon: Shield,
    color: "bg-red-500",
    users: "2.8K+",
    projects: 53,
    description: "Implement robust security measures and threat detection systems",
    achievements: ["Threat Detection", "Security Auditing"]
  },
  { 
    name: "Mobile Apps",
    icon: Smartphone,
    color: "bg-yellow-500",
    users: "3.5K+",
    projects: 71,
    description: "Create innovative mobile applications for iOS and Android platforms",
    achievements: ["Cross-platform Development", "App Store Success"]
  },
  { 
    name: "Embedded Systems",
    icon: CircuitBoard,
    color: "bg-pink-500",
    users: "1.5K+",
    projects: 39,
    description: "Develop efficient embedded systems for specialized applications",
    achievements: ["Hardware Integration", "Real-time Systems"]
  }
];

export default function Technologies() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const expandedCardVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Our Technologies
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative flex flex-col bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedTech(selectedTech === index ? null : index)}
            >
              <div className="p-6">
                <motion.div
                  className={`p-3 rounded-full ${tech.color} w-16 h-16 flex items-center justify-center mx-auto`}
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                    scale: hoveredIndex === index ? 1.1 : 1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <tech.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="mt-4 font-semibold text-gray-900 text-center">{tech.name}</h3>
                
                <AnimatePresence>
                  {selectedTech === index && (
                    <motion.div
                      variants={expandedCardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="mt-4 space-y-3"
                    >
                      <p className="text-sm text-gray-600">{tech.description}</p>
                      
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-blue-500" />
                          <span>{tech.users}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Trophy className="h-4 w-4 text-yellow-500" />
                          <span>{tech.projects} Projects</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {tech.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center space-x-2"
                          >
                            <ExternalLink className="h-4 w-4 text-green-500" />
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                className="absolute top-0 left-0 w-full h-1"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: hoveredIndex === index ? 1 : 0,
                  backgroundColor: tech.color.replace('bg-', '')
                }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}