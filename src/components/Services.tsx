import React from 'react';
import WorkshopCard from './services/WorkshopCard';
import ProjectTraining from './services/ProjectTraining';
import Technologies from './services/Technologies';

export default function Services() {
  return (
    <div className="py-16 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive training solutions for the next generation of engineers
          </p>
        </div>

        <WorkshopCard />
        <ProjectTraining />
        <Technologies />
      </div>
    </div>
  );
}