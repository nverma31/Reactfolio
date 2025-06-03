import React from 'react';

const FeatureSection = ({ id, title, content, features }) => {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-inter-tight lg:w-[70%]">{title}</h2>
      {content && (
        <div className="mb-8 lg:w-[70%]">
          {Array.isArray(content) ? (
            content.map((paragraph, index) => (
              <p key={index} className="text-base md:text-lg font-light mb-4">{paragraph}</p>
            ))
          ) : (
            <p className="text-base md:text-lg font-light mb-4">{content}</p>
          )}
        </div>
      )}
      <div className="space-y-16">
        {features.map((feature, index) => (
          <div key={index}>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight lg:w-[70%]">{feature.title}</h3>
            <p className="text-base md:text-lg font-light mb-8 lg:w-[70%]">{feature.description}</p>
            {feature.images && (
              <div className="space-y-8">
                {feature.images.map((img, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto"
                    />
                    <p className="text-sm text-gray-600 mt-2 italic">{img.alt}</p>
                  </div>
                ))}
              </div>
            )}
            {feature.image && !feature.images && (
              <div className="w-full">
                <img
                  src={feature.image}
                  alt={feature.imageAlt || feature.title}
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-600 mt-2 italic">{feature.imageAlt || feature.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection; 