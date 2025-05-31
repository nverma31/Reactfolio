import { Link } from "react-router-dom";
import { imgLogo, textLogo, footerIcons, navElements } from "../../assets/assets.js";

const Footer = ({ activeElem, setActiveElem }) => {
  return (
    <div className="flex bedar-sm:items-center justify-between flex-col-reverse bedar-sm:flex-row gap-1 bedar-sm:gap-0 px-5 bedar-sc1:px-20 py-5 mt-10">
      <div className="w-[96%] mx-auto border-t border-gray-300 pt-5 flex bedar-sm:items-center justify-between flex-col-reverse bedar-sm:flex-row gap-1 bedar-sm:gap-0">
        <div className="text-sm font-satoshi text-base">
          © 2025 Neeraj Nagar | Built with <span className="font-bold">Cursor</span>
      </div>
        <div className="flex gap-[10px] pr-4">
        {footerIcons.map(({ name, component: IconComponent, link }) => (
          <Link to={link} key={name} className="flex" title={name}>
              <IconComponent className="w-4 bedar-sm:w-6 h-4 bedar-sm:h-6 fill-gray-600 hover:fill-black transition-colors ease-linear" />
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
