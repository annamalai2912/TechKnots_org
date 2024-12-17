import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

// Stats data
const stats = [
  { label: 'Projects Completed', value: 200 },
  { label: 'Students Trained', value: 1000 },
  { label: 'Workshops Conducted', value: 50 },
  { label: 'Years of Experience', value: 4 }
];

export default function Stats() {
  const [startAnimation, setStartAnimation] = useState(false);
  const sectionRef = useRef(null);

  // Intersection observer to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        } else {
          setStartAnimation(false); // Reset animation when section is out of view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-green-600" ref={sectionRef}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-5xl font-extrabold text-white">
                {startAnimation ? (
                  <CountUp 
                    start={0} 
                    end={stat.value} 
                    duration={2} 
                    suffix={stat.label === 'Years of Experience' ? '+' : ''}
                    key={index + startAnimation} // Ensure a fresh key to re-render
                  />
                ) : (
                  0
                )}
              </p>
              <p className="mt-2 text-xl font-semibold text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
