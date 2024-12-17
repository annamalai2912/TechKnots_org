import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, CheckCircle } from 'lucide-react';

const reasons = [
  "Industry Expert Trainers",
  "Hands-on Learning Approach",
  "Real-world Projects",
  "Latest Technology Stack",
  "Placement Assistance",
  "Industry Partnerships"
];

export default function About() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-gray-900"
          >
            About TechKnots
          </motion.h2>
          <p className="mt-4 text-xl text-gray-600">
            Empowering students with practical engineering skills since 2019
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-green-600" />
                <div>
                  <h4 className="text-xl font-semibold">Our Mission</h4>
                  <p className="text-gray-600">Bridging the gap between academic theory and industry practice</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8 text-green-600" />
                <div>
                  <h4 className="text-xl font-semibold">Our Expertise</h4>
                  <p className="text-gray-600">4+ years of excellence in engineering education</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center space-x-4">
                <Users className="h-8 w-8 text-green-600" />
                <div>
                  <h4 className="text-xl font-semibold">Our Impact</h4>
                  <p className="text-gray-600">Trained 1000+ students in cutting-edge technologies</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}