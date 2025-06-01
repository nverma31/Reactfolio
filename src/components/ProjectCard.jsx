import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  projectName,
  projectDescription,
  date,
}) => {
  return (
    <div className="bg-gray-200 rounded-xl overflow-hidden flex flex-col p-8 gap-8 w-full max-w-4xl mx-auto transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      {/* Text Content (now top) */}
      <div className="flex flex-col flex-grow w-full">
        <h3 className="text-dark text-3xl font-bold mb-2 tracking-tight">{projectName}</h3>
        <p className="text-dark text-base mb-4">{date}</p>
        <p className="text-gray-700 flex-grow text-lg mb-6">{projectDescription}</p>

        <div>
          {/* Link to project details - placeholder path */}
          <Link to={`/projects/${projectName}`} className="inline-flex items-center text-dark text-lg font-semibold hover:text-gray-900 transition-colors duration-200">
            Read More
            {/* Arrow icon */}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>
      </div>

      {/* Placeholder for image (now bottom) */}
      <div className="w-full h-64 bg-gray-300 rounded-md flex-shrink-0"></div>
    </div>
  );
};

export default ProjectCard; 