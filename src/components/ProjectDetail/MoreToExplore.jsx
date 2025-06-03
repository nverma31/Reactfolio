import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const MoreToExplore = ({ projects }) => {
  // Get two random projects from the list
  const randomProjects = [...projects]
    .sort(() => 0.5 - Math.random())
    .slice(0, 2);

  return (
    <section id="more-to-explore" className="max-w-[1800px] mx-auto px-5 bedar-sc1:px-20 mb-12">
      <h2 className="text-left text-2xl md:text-3xl font-semibold mb-8 font-inter-tight pt-8">More to explore</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {randomProjects.map((project) => (
          <Link 
            key={project.projectName}
            to={`/projects/${project.urlId || project.projectName.toLowerCase()}`}
            className="block"
          >
            <div className="bg-white border border-zinc-200 hover:bg-white rounded-2xl hover:shadow-lg transition-all duration-300 ease-in-out py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 max-w-4xl w-full flex flex-col md:flex-row items-stretch hover:scale-105">
              {/* Left Text Section */}
              <div className="md:w-[40vw] w-full text-center md:text-left mb-4 md:mb-0 flex flex-col justify-center">
                <h1 className="text-xl lg:text-2xl font-['Satoshi'] font-bold text-gray-800 mb-1">{project.projectName}</h1>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-medium">{project.details.platform}</p>
                <p className="text-gray-700 text-sm lg:text-base mb-4 leading-relaxed">
                  {project.projectDescription}
                </p>
                <div className="flex items-center justify-center md:justify-start">
                  <span className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium py-3 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out flex items-center justify-center md:justify-start mx-auto md:mx-0 group text-base max-w-[140px] font-['Satoshi'] hover:scale-105">
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
                  </span>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="md:w-[65vw] w-full flex justify-center items-center mt-4 md:mt-0">
                <div className="h-[60vh] flex items-center justify-center">
                  <img
                    src={project.imageUrl}
                    alt={`${project.projectName} Preview`}
                    className="max-h-full w-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MoreToExplore; 