import React from 'react';

const Callout = ({ id, title, content }) => {
  const isEnhancedFinancialProtection = title === "Enhanced Financial Protection";

  return (
    <section id={id} className="mb-12 lg:w-[70%]">
      <div className={`p-[2px] rounded-xl ${
        isEnhancedFinancialProtection 
          ? "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" 
          : "bg-gradient-to-r from-[#fedf89] via-[#ffc371] to-[#a84dc3]"
      }`}>
        <div className={`rounded-xl p-8 ${
          isEnhancedFinancialProtection 
            ? "bg-white/95 backdrop-blur-sm" 
            : "bg-gray-100"
        }`}>
          <h2 className={`text-xl md:text-2xl font-semibold mb-4 font-inter-tight ${
            isEnhancedFinancialProtection 
              ? "text-gray-800" 
              : ""
          }`}>{title}</h2>
          {Array.isArray(content) ? (
            content.map((paragraph, index) => (
              <p key={index} className={`text-base md:text-lg font-light mb-4 ${
                isEnhancedFinancialProtection 
                  ? "text-gray-700" 
                  : ""
              }`}>{paragraph}</p>
            ))
          ) : (
            <p className={`text-base md:text-lg font-light mb-4 ${
              isEnhancedFinancialProtection 
                ? "text-gray-700" 
                : ""
            }`}>{content}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Callout; 