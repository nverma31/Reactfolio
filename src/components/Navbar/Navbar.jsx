import { Link, useLocation, useNavigate } from "react-router-dom";
import { imgLogo, textLogo } from "../../assets/assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // Adjust based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/", label: "Projects", onClick: () => handleSectionClick('projects') },
    { path: "/", label: "Contact", onClick: () => handleSectionClick('Contact') }
  ];

  useEffect(() => {
    if (!isMenuHidden) {
      const handleBodyClick = (e) => {
        setIsMenuHidden(true);
      };

      document.body.addEventListener("click", handleBodyClick);

      return () => {
        document.body.removeEventListener("click", handleBodyClick);
      };
    }
  }, [isMenuHidden]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuHidden(!isMenuHidden);
  };

  return (
    <div className="fixed w-full left-0 top-0 px-5 bedar-sc1:px-10 py-4 z-50">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl bedar-sc2:text-2xl font-['Libre_Baskerville'] font-regular py-3 bedar-sc2:py-4 bedar-sc1:py-5 select-none whitespace-nowrap pl-8 hover:opacity-80 transition-opacity">
          {imgLogo ? <img src={imgLogo} alt="Logo" className="h-8 w-auto" /> : textLogo}
        </Link>

        <div className="flex items-center gap-3 px-6 py-1.5 bedar-sc2:px-11 bedar-sc1:px-11 rounded-full bg-gradient-to-r from-gray-100/90 to-gray-200/90 backdrop-blur-[10px] backdrop-saturate-[180%] border border-gray-200/30 shadow-lg shadow-black/5">
          <nav className="hidden bedar-sc2:flex gap-3">
            {navItems.map((item) => (
              item.onClick ? (
                <button
                  key={item.path}
                  onClick={item.onClick}
                  className="text-[0.96rem] font-inter py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 active:scale-95 text-gray-700"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[0.96rem] font-inter py-2 px-4 rounded-full transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105 active:scale-95 text-gray-700 ${
                    location.pathname === item.path ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className="text-gray-700 flex bedar-sc2:hidden hover:opacity-70 transition-opacity"
          >
            {isMenuHidden ? (
              <RxHamburgerMenu className="h-6 w-6" />
            ) : (
              <IoClose className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu flex fixed backdrop-blur-[10px] bedar-sc2:hidden flex-col bg-gradient-to-b from-gray-100/95 to-gray-200/95 border border-gray-200/30 py-4 px-5 rounded-xl gap-2 right-[1.22rem] top-[5rem] z-10 shadow-lg shadow-black/5 ${
          isMenuHidden ? "hidden" : "flex"
        }`}
      >
        {navItems.map((item) => (
          item.onClick ? (
            <button
              key={item.path}
              onClick={(e) => {
                item.onClick();
                setIsMenuHidden(true);
              }}
              className="px-12 py-2.5 text-center rounded-lg cursor-pointer hover:bg-white/20 transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] text-gray-700 font-inter"
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              className={`px-12 py-2.5 text-center rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] text-gray-700 font-inter ${
                location.pathname === item.path 
                  ? "font-bold" 
                  : "hover:bg-white/20"
              }`}
              onClick={() => setIsMenuHidden(true)}
            >
              {item.label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default Navbar;
