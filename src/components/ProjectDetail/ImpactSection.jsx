import React from 'react';

const ImpactSection = ({ id, title, impactPoints, copyText }) => {
  return (
    <section id={id} className="mb-8">
      {title && <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-inter-tight">{title}</h2>}
      {copyText && (
        <p className="text-base md:text-lg font-light mb-8 lg:w-[70%]">
          {copyText}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-[100%] mx-auto">
        {impactPoints.map((point, index) => (
          <div key={index} className="md:col-span-5 border border-zinc-200 rounded-md px-8 py-6 flex flex-col items-start w-full">
            <span className={`text-sm font-inter-tight px-3 py-1 mb-4 rounded ${point.bgColor} ${point.textColor}`}>
              {point.label}
            </span>
            <p className="text-3xl md:text-4xl font-semibold mb-2 font-inter-tight">{point.value}</p>
            <p className="text-base md:text-lg font-regular mb-3 text-gray-800">{point.subtitle}</p>
            <p className="text-gray-700 text-sm">{point.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection; 