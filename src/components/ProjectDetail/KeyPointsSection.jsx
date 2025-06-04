import React from 'react';

const KeyPointsSection = ({ id, title, keyPoints }) => {
  // Map labels to icons
  const getIcon = (label) => {
    switch (label.toLowerCase()) {
      case 'digital preference':
        return '💻';
      case 'journey':
        return '🔄';
      case 'trust':
        return '🤝';
      case 'clarity':
        return '✨';
      case 'price':
        return '💸';
      case 'comparison':
        return '🔄';
      case 'life changes':
        return '🧍‍♂️';
      case 'value':
        return '⭐';
      case 'engagement':
        return '🎯';
      case 'timing':
        return '⏰';
      default:
        return '💡';
    }
  };

  return (
    <section id={id} className="mb-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-inter-tight text-left">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:w-[70%]">
        {keyPoints.map((point, index) => (
          <div key={index} className="p-[2px] rounded-xl bg-gradient-to-r from-[#fedf89] via-[#ffc371] to-[#a84dc3] h-full">
            <div className="bg-gray-100 rounded-xl p-8 flex flex-col h-full">
              <div className="flex flex-col gap-4">
                <div className="text-2xl">{point.icon ? point.icon : getIcon(point.label)}</div>
                <h3 className="text-xl font-semibold font-inter-tight leading-tight text-left">{point.heading}</h3>
                <p className="text-gray-700 text-base md:text-lg font-light text-left">{point.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyPointsSection; 