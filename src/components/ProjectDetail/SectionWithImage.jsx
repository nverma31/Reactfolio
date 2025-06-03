import React from 'react';

const SectionWithImage = ({ id, title, description, image, imageAlt }) => {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 font-inter-tight lg:w-[70%]">{title}</h2>
      <p className="text-base md:text-lg font-light mb-4 lg:w-[70%]">{description}</p>
      <img
        src={image}
        alt={imageAlt || title}
        className="w-full h-auto rounded-md"
      />
    </section>
  );
};

export default SectionWithImage; 