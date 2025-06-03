import React from 'react';

const Introduction = ({ title = "Introduction", content, id }) => {
  return (
    <section id={id || "introduction"} className="mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight lg:w-[70%]">{title}</h2>
      {Array.isArray(content) ? (
        content.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg font-light mb-4 lg:w-[70%]">{paragraph}</p>
        ))
      ) : (
        <p className="text-base md:text-lg font-light mb-4 lg:w-[70%]">{content}</p>
      )}
    </section>
  );
};

export default Introduction; 