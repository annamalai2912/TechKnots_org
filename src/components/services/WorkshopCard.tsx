import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Wrench, CircuitBoard, Cog, Calendar, Users, Star, ChevronDown } from 'lucide-react';

const workshops = [
  {
    title: "IoT Smart Home",
    description: "Build complete smart home automation systems using IoT technologies",
    icon: CircuitBoard,
    duration: "2 weeks",
    participants: 15,
    rating: 4.8,
    topics: ["Sensors", "Home Automation", "Network Security"]
  },
  {
    title: "Robotics & Automation",
    description: "Hands-on experience with industrial robotics and automation",
    icon: Cog,
    duration: "3 weeks",
    participants: 12,
    rating: 4.9,
    topics: ["Robot Programming", "Motion Control", "Safety Systems"]
  },
  {
    title: "Drone Technology",
    description: "Design and program autonomous drones",
    icon: Wrench,
    duration: "2 weeks",
    participants: 10,
    rating: 4.7,
    topics: ["Flight Control", "Navigation", "Aerial Imaging"]
  },
  {
    title: "AI & Machine Learning",
    description: "Practical implementation of AI algorithms and ML models",
    icon: BookOpen,
    duration: "4 weeks",
    participants: 20,
    rating: 4.9,
    topics: ["Neural Networks", "Computer Vision", "Natural Language Processing"]
  }
];

export default function WorkshopCard() {
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const renderRatingStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: index < rating ? 1 : 0.3 }}
          >
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
          </motion.div>
        ))}
        <span className="ml-2 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="py-8 px-4">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-800 mb-6"
      >
        Hands-On Workshops
      </motion.h3>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {workshops.map((workshop, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-6 cursor-pointer"
              onClick={() => setSelectedWorkshop(selectedWorkshop === index ? null : index)}
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="flex-shrink-0 bg-green-100 p-3 rounded-lg"
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                    backgroundColor: hoveredIndex === index ? "#E5F6E5" : "#F0FDF4"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <workshop.icon className="h-6 w-6 text-green-600" />
                </motion.div>
                
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-gray-800">{workshop.title}</h4>
                    <motion.div
                      animate={{ rotate: selectedWorkshop === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </motion.div>
                  </div>
                  <p className="text-gray-600 mt-1">{workshop.description}</p>
                </div>
              </div>

              <AnimatePresence>
                {selectedWorkshop === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-3"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{workshop.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">Max {workshop.participants} participants</span>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      {renderRatingStars(workshop.rating)}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {workshop.topics.map((topic, topicIndex) => (
                        <motion.span
                          key={topicIndex}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: topicIndex * 0.1 }}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {topic}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}