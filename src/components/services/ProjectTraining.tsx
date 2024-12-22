import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Home, ShoppingCart, Cpu, Clock, Users, Target } from 'lucide-react';

const projects = [
  {
    title: "Electric Vehicle Systems",
    description: "Design and implement complete EV control systems",
    icon: Car,
    duration: "6 weeks",
    students: 24,
    difficulty: "Advanced",
    skills: ["Electronics", "Programming", "System Design"]
  },
  {
    title: "IoT Smart Home",
    description: "Build automated home systems with IoT integration",
    icon: Home,
    duration: "4 weeks",
    students: 32,
    difficulty: "Intermediate",
    skills: ["IoT", "Networking", "Mobile Dev"]
  },
  {
    title: "Shopping Cart App",
    description: "Develop full-stack e-commerce applications",
    icon: ShoppingCart,
    duration: "5 weeks",
    students: 28,
    difficulty: "Intermediate",
    skills: ["React", "Node.js", "Database"]
  },
  {
    title: "Industrial Automation",
    description: "Create industrial-grade automation solutions",
    icon: Cpu,
    duration: "6 weeks",
    students: 20,
    difficulty: "Advanced",
    skills: ["PLC", "SCADA", "Industrial IoT"]
  }
];

export default function ProjectTraining() {
  const [selectedProject, setSelectedProject] = useState(null);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const renderDifficultyBadge = (difficulty) => {
    const colors = {
      Beginner: "bg-blue-100 text-blue-800",
      Intermediate: "bg-yellow-100 text-yellow-800",
      Advanced: "bg-red-100 text-red-800"
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[difficulty]}`}>
        {difficulty}
      </span>
    );
  };

  return (
    <div className="py-8 px-4">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800 mb-6"
      >
        Project Training
      </motion.h3>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer"
            onClick={() => setSelectedProject(selectedProject === index ? null : index)}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <project.icon className="h-8 w-8 text-green-600" />
                </motion.div>
              </div>
              <div className="flex-grow">
                <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                <p className="text-gray-600 mt-1">{project.description}</p>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: selectedProject === index ? "auto" : 0,
                    opacity: selectedProject === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{project.students} students enrolled</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-gray-500" />
                      <div>{renderDifficultyBadge(project.difficulty)}</div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}