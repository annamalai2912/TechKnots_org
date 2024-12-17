import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Wrench, CircuitBoard, Cog } from 'lucide-react';

const workshops = [
  {
    title: "IoT Smart Home",
    description: "Build complete smart home automation systems using IoT technologies",
    icon: CircuitBoard,
    //duration: "2 weeks"
  },
  {
    title: "Robotics & Automation",
    description: "Hands-on experience with industrial robotics and automation",
    icon: Cog,
    //duration: "3 weeks"
  },
  {
    title: "Drone Technology",
    description: "Design and program autonomous drones",
    icon: Wrench,
    //duration: "2 weeks"
  },
  {
    title: "AI & Machine Learning",
    description: "Practical implementation of AI algorithms and ML models",
    icon: BookOpen,
    //duration: "4 weeks"
  }
];

export default function WorkshopCard() {
  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Hands-On Workshops</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workshops.map((workshop, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <workshop.icon className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{workshop.title}</h4>
                <p className="text-gray-600 mt-1">{workshop.description}</p>
                <p className="text-green-600 font-medium mt-2"> {workshop.duration}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}