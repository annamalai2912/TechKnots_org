import React from 'react';
import { motion } from 'framer-motion';
import { CircuitBoard, Brain, Cog, Send, Cloud, Smartphone, Shield, Wifi } from 'lucide-react';

const technologies = [
  { name: "IoT", icon: Wifi, color: "bg-blue-500" },
  { name: "AI & ML", icon: Brain, color: "bg-purple-500" },
  { name: "Robotics", icon: Cog, color: "bg-green-500" },
  { name: "Drones", icon: Send, color: "bg-orange-500" },
  { name: "Cloud Computing", icon: Cloud, color: "bg-indigo-500" },
  { name: "Cybersecurity", icon: Shield, color: "bg-red-500" },
  { name: "Mobile Apps", icon: Smartphone, color: "bg-yellow-500" },
  { name: "Embedded Systems", icon: CircuitBoard, color: "bg-pink-500" }
];

export default function Technologies() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md"
            >
              <div className={`p-3 rounded-full ${tech.color}`}>
                <tech.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}