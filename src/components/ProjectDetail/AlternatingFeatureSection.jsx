import React from 'react';

const AlternatingFeatureSection = ({ id, title, content, features }) => {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-inter-tight">{title}</h2>
      {content && (
        <p className="text-base md:text-lg font-light mb-8 lg:w-[70%]">{content}</p>
      )}
      <div className="space-y-16">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8 items-start`}
          >
            {/* Text Column - Now first in mobile view */}
            <div className="w-full lg:w-1/2 order-1 lg:order-none">
              {feature.title && (
                <h3 className="text-xl font-semibold mb-4 font-inter-tight">{feature.title}</h3>
              )}
              {feature.description && (
                <p className="text-base md:text-lg font-light">{feature.description}</p>
              )}
            </div>
            
            {/* Image Column - Now second in mobile view */}
            <div className="w-full lg:w-1/2 order-2 lg:order-none">
              <img
                src={feature.image}
                alt={feature.imageAlt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlternatingFeatureSection; 