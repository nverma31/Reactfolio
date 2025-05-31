import { Link, useLocation } from "react-router-dom";
import { imgLogo, textLogo } from "../../assets/assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" }
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
        <Link to="/" className="text-base bedar-sc2:text-lg font-bold py-3 bedar-sc2:py-4 bedar-sc1:py-5 select-none whitespace-nowrap lowercase">
          {imgLogo ? <img src={imgLogo} alt="Logo" className="h-8 w-auto" /> : textLogo}
        </Link>

        <div className="flex items-center gap-2 px-5 bedar-sc2:px-10 bedar-sc1:px-10 border rounded-full border-zinc-200 bg-[#ffffff85] backdrop-blur-[20px] backdrop-saturate-[180%]">
          <nav className="hidden bedar-sc2:flex gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[1rem] font-[500] py-2 px-4 rounded-full transition-all ease-in ${
                  location.pathname === item.path ? "bg-mainColor text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={toggleMenu}
            className="text-textColor flex bedar-sc2:hidden"
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
        className={`mobile-menu flex fixed backdrop-blur bedar-sc2:hidden flex-col bg-[#ffffff] border-zinc-200 py-4 px-5 rounded-md gap-2 right-[1.22rem] top-[5rem] z-10 shadow-md border ${
          isMenuHidden ? "hidden" : "flex"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`border border-zinc-200 px-12 py-2 text-center rounded-md cursor-pointer ${
              location.pathname === item.path ? "bg-mainColor text-white" : "bg-white"
            }`}
            onClick={() => setIsMenuHidden(true)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
