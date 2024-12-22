import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GraduationCap, Book, Code, Users } from 'lucide-react';
import Cube from './3D/Cube';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
  >
    <div className="flex items-center gap-4 mb-3">
      <div className="p-2 bg-green-100 rounded-lg">
        <Icon className="w-6 h-6 text-green-600" />
      </div>
      <h3 className="font-bold text-lg text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FloatingElement = ({ delay, children }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-t from-green-50 to-green-200 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <FloatingElement delay={0}>
              <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-semibold mb-6">
                Transform Your Learning Journey
              </span>
            </FloatingElement>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              <span className="block">Bridging the Gap</span>
              <span className="block text-green-600 relative">
                Theory to Practice
                <motion.span
                  className="absolute -right-8 top-0"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl leading-relaxed"
            >
              TechKnots ties the knot between theoretical and practical engineering education,
              providing hands-on training from beginner to advanced levels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 rounded-full bg-green-600 text-white font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              >
                Get Started
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="px-8 py-3 rounded-full bg-white text-green-600 font-medium border-2 border-green-600 hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, scale: 0.8}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="h-[500px] w-full relative"
          >
            <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <Cube />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>

        
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="#ffffff"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;