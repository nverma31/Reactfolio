import React, { useState, useEffect } from 'react';

const SideNavigation = ({ sections }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const introductionSection = document.getElementById('introduction');
      const moreToExploreSection = document.getElementById('more-to-explore');
      
      if (introductionSection && moreToExploreSection) {
        const introRect = introductionSection.getBoundingClientRect();
        const moreToExploreRect = moreToExploreSection.getBoundingClientRect();
        
        // Show navigation when introduction is in view and more-to-explore is not
        setIsVisible(introRect.top <= 0 && moreToExploreRect.top > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px' // Adjust these values to control when a section is considered "active"
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`hidden lg:block fixed top-24 left-8 max-h-[calc(100vh-12rem)] w-52 p-4 bg-[#FCFBF8] overflow-y-auto transition-opacity duration-200 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <nav>
        <ul>
          {sections.map((section) => (
            <li key={section.id} className="mb-2">
              <a 
                href={`#${section.id}`} 
                onClick={(e) => handleClick(e, section.id)}
                className={`transition-colors duration-200 ${
                  activeSection === section.id 
                    ? 'text-black font-medium' 
                    : 'text-gray-500 hover:text-black'
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavigation; 