import React from 'react';

const LearningsSection = ({ id, title, learnings }) => {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 font-inter-tight lg:w-[70%]">{title}</h2>
      <div className="space-y-6 lg:w-[70%]">
        {learnings.map((learning, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold mb-2 font-inter-tight">{learning.title}</h3>
            <p className="text-base md:text-lg font-light text-gray-700">{learning.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningsSection; 