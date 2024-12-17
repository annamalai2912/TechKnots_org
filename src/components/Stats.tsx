import React from 'react';

const stats = [
  { label: 'Projects Completed', value: '200+' },
  { label: 'Students Trained', value: '1000+' },
  { label: 'Workshops Conducted', value: '50+' },
  { label: 'Years of Experience', value: '4+' }
];

export default function Stats() {
  return (
    <div className="bg-green-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl font-extrabold text-white">{stat.value}</p>
              <p className="mt-2 text-xl font-semibold text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}