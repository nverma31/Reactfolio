import React from 'react';

const ProjectHeader = ({ projectName, timeline, platform, role, customTitle }) => {
  return (
    <header className="mb-12 lg:w-[80%]">
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight mb-8 font-inter-tight break-words">{customTitle || projectName}</h1>
      <div className="border-b border-gray-300 mb-8"></div>
      <div className="text-gray-500 text-sm mb-8 font-inter-tight flex flex-col md:flex-row md:justify-between">
        <span className="mr-4 mb-2 md:mb-0"><strong>TIMELINE:</strong><br/>{timeline}</span>
        <span className="mr-4 mb-2 md:mb-0"><strong>PLATFORM:</strong><br/>{platform}</span>
        <span><strong>MY ROLE:</strong><br/>{role}</span>
      </div>
      <div className="border-b border-gray-300 mb-12"></div>
    </header>
  );
};

export default ProjectHeader; 