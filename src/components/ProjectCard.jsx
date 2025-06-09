import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ProjectCard = ({
  projectName,
  projectDescription,
  date,
  urlId,
  imageUrl = "https://placehold.co/240x480/E2E8F0/4A5568?text=Project+Preview&font=sans",
  imageWidth = "220px",
  imageHeight = "auto",
  imageAspectRatio = "9/19",
  imageClassName = "rounded-xl"
}) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Link 
      to={`/projects/${urlId || projectName.toLowerCase()}`}
      className="block"
    >
      <div className="bg-[#F5F7F9] hover:bg-[#F6F6F6] rounded-2xl hover:shadow-lg transition-all duration-300 ease-in-out py-4 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 max-w-4xl w-full flex flex-col md:flex-row items-stretch hover:scale-105">
        {/* Left Text Section */}
        <div className="md:w-[40vw] w-full text-left mb-4 md:mb-0 flex flex-col justify-center">
          <h1 className="text-xl lg:text-2xl font-['Satoshi'] font-bold text-gray-800 mb-1">{projectName}</h1>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-medium">{date}</p>
          <p className="text-gray-700 text-sm lg:text-base mb-3 leading-relaxed">
            {projectDescription}
          </p>
          <div onClick={handleButtonClick}>
            <Link 
              to={`/projects/${urlId || projectName.toLowerCase()}`} 
              className="bg-white hover:bg-gray-50 text-gray-600 font-medium py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out flex items-center justify-center md:justify-start mx-0 group text-base max-w-[140px] font-['Satoshi'] hover:scale-105"
            >
              Read More
              <svg 
                className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-[65vw] w-full flex justify-center items-center mt-4 md:mt-0">
          <div className="h-full md:h-[60vh] flex items-center justify-center">
            <img
              src={imageError ? "https://placehold.co/240x480/CCCCCC/FFFFFF?text=Image+Error&font=sans" : imageUrl}
              alt={`${projectName} Preview`}
              className={`${imageClassName} h-full md:max-h-full w-auto object-contain`}
              onError={handleImageError}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

ProjectCard.propTypes = {
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  urlId: PropTypes.string,
  imageUrl: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageAspectRatio: PropTypes.string,
  imageClassName: PropTypes.string
};

export default ProjectCard; 