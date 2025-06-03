import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProjectCard = ({
  projectName,
  projectDescription,
  date,
  urlId,
  imageUrl = "https://placehold.co/240x480/E2E8F0/4A5568?text=Project+Preview&font=sans"
}) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-[#ECEFF1] hover:bg-[#FFF] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 ease-in-out p-8 md:p-10 lg:p-12 max-w-4xl w-full flex flex-col md:flex-row items-center">
      {/* Left Text Section */}
      <div className="md:w-1/2 md:pr-10 lg:pr-12 text-center md:text-left mb-8 md:mb-0">
        <div className="flex justify-center md:justify-start mb-4">
          <div className="bg-green-100 p-3 rounded-lg inline-block">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-green-600"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">{projectName}</h1>
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">{date}</p>
        <p className="text-gray-700 text-base lg:text-lg mb-8 leading-relaxed">
          {projectDescription}
        </p>
        <Link 
          to={`/projects/${urlId || projectName.toLowerCase()}`} 
          className="bg-white hover:bg-gray-50 text-gray-600 font-normal py-4 px-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out flex items-center justify-center md:justify-start mx-auto md:mx-0 group text-lg max-w-[180px] font-['Satoshi']"
        >
          Read More
          <svg 
            className="ml-2 w-6 h-6 transition-transform duration-200 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 w-full flex justify-center items-center mt-8 md:mt-0">
        <img
          src={imageError ? "https://placehold.co/240x480/CCCCCC/FFFFFF?text=Image+Error&font=sans" : imageUrl}
          alt={`${projectName} Preview`}
          className="rounded-xl shadow-lg max-w-[220px] sm:max-w-[240px] w-full h-auto aspect-[9/19]"
          onError={handleImageError}
        />
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  urlId: PropTypes.string,
  imageUrl: PropTypes.string
};

export default ProjectCard; 