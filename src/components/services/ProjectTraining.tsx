import React from 'react';
import { motion } from 'framer-motion';
import { Car, Home, ShoppingCart, Cpu } from 'lucide-react';

const projects = [
  {
    title: "Electric Vehicle Systems",
    description: "Design and implement complete EV control systems",
    icon: Car,
    //duration: "6 weeks"
  },
  {
    title: "IoT Smart Home",
    description: "Build automated home systems with IoT integration",
    icon: Home,
    //duration: "4 weeks"
  },
  {
    title: "Shopping Cart App",
    description: "Develop full-stack e-commerce applications",
    icon: ShoppingCart,
    //duration: "5 weeks"
  },
  {
    title: "Industrial Automation",
    description: "Create industrial-grade automation solutions",
    icon: Cpu,
    //duration: "6 weeks"
  }
];

export default function ProjectTraining() {
  return (
    <div className="py-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Project Training</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <project.icon className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{project.title}</h4>
                <p className="text-gray-600 mt-1">{project.description}</p>
                <p className="text-green-600 font-medium mt-2"> {project.duration}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}