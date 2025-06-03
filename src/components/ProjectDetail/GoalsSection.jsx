import React from 'react';

const GoalsSection = ({ title = "Goals", goals, id }) => {
  return (
    <section id={id || "goals"} className="mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight lg:w-[70%]">{title}</h2>
      {goals.map((goalGroup, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-lg md:text-xl font-semibold mb-2 font-inter-tight lg:w-[70%]">{goalGroup.title}</h3>
          {goalGroup.items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <h4 className="text-base md:text-lg font-semibold mb-2 font-inter-tight lg:w-[70%]">{item.heading}</h4>
              <p className="text-base md:text-lg font-light mb-4 lg:w-[70%]">{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default GoalsSection; 