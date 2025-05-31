import { containerStyle } from "./styles.js";
import { PageTitle } from "../components/components.js";
import { AboutPage, footerIcons } from "../assets/assets.js";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";

const LinkStyles = `flex items-center gap-2 hover:text-white/65 transition-colors ease-linear`;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileLoading, setIsProfileLoading] = useState(true);
  return (
    <div id="Contact" className={`${containerStyle} flex justify-center items-center`} style={{ minHeight: '90vh' }}>
      <div className="flex flex-col items-center gap-6 py-12 px-8 text-center font-inter-tight">
        <div className="text-3xl font-semibold leading-relaxed">
          Thanks for the visit.<br/>
          Reach out and let's chat.
        </div>
        <a
          href={`mailto:${AboutPage.authorContactMail}`}
          className="flex items-center gap-2 px-6 py-3 rounded-md font-medium border border-current hover:opacity-80 transition-opacity ease-linear font-inter-tight"
        >
          Email me <MdEmail className="w-5 h-5" />
        </a>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 hover:opacity-80 transition-opacity ease-linear font-inter-tight"
        >
          Download my resume <FiDownload className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
