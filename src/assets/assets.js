// React Icons are used to add social and skill icons to the portfolio.
// If you want to add more icons or replace existing ones, import them from "react-icons".
// Visit: https://react-icons.github.io/react-icons/ to explore more icons.
// Example of importing a new icon: import { AiFillAmazonSquare } from "react-icons/ai";

import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaJs,
  FaCss3Alt,
  FaYoutube,
} from "react-icons/fa";
import { BsFiletypeXml } from "react-icons/bs";
import { TbBrandCpp, TbBrandKotlin } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

// Footer Social Icons
// This array holds the social media icons and links for the footer section.
// If you wish to add or remove any icons, modify the 'footerIcons' array below.
// Example: To change the Twitter icon, replace 'FaSquareXTwitter' with another icon.
const footerIcons = [
  {
    name: "linkedIn",
    component: FaLinkedin,
    link: "https://www.linkedin.com/in/neeraj-nagar/",
  },
  {
    name: "github",
    component: IoLogoGithub,
    link: "https://github.com/nverma31",
  },
  {
    name: "x",
    component: FaSquareXTwitter,
    link: "https://x.com/Neeraj_Vermaa",
  },
  // You can add more icons or remove existing ones based on your social profiles.
];

// Header Text and Logo Configuration
// 'textLogo' is used for displaying the text logo on your portfolio. You can replace it with your name.
// 'imgLogo' is optional and can be used to show an image logo.
const textLogo = "NN".toUpperCase(); // Replace with your name or brand name
const imgLogo = null; // Replace with an image file if you want to use an image logo

// Navigation Menu Items
// This array defines the navigation menu items. Add or remove items as necessary.
const navElements = ["About", "Education", "Skills", "Projects", "Contact"];

// About Page Configuration
// This object contains all the details for the "About" section of the portfolio.
// Replace dummy values with your actual information.
const AboutPage = {
  authorProfile: "", // Your profile image link
  authorDescription:
    "I am a Software Engineer with a strong foundation in computer science and a passion for building innovative solutions. Currently working at Google, I specialize in developing scalable applications and contributing to impactful projects. With expertise in various programming languages and technologies, I strive to create efficient and user-friendly software solutions. I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible.",
  getInTouchUrl: "https://www.linkedin.com/in/neeraj-nagar/",
  authorName: "Neeraj Nagar",
  profileImgTagLine: "Software Engineer @ Google",
  authorContactMail: "nverma31@gmail.com",
  authorContactNumber: "", // Optional
};

// Education Details
// This array holds your education information. Replace the data with your actual education history.
// You can add more education objects if necessary.
const EducationPage = [
  {
    graduationYear: 2021, // Year of graduation
    degreeType: "High School", // Type of degree
    institution: "XYZ College", // Institution name
    institutionUrl: "", // Institution website link (optional)
  },
  {
    graduationYear: 2027, // Year of graduation
    degreeType: "Bachelor's degree", // Degree type
    institution: "XYZ University", // Institution name
    institutionUrl: "", // Institution website link (optional)
  },
  // Add more educational qualifications if needed
];

// Certifications Section
// This array holds the details of certifications you have earned. Replace with your actual certificates.
// To add more certifications, simply copy and modify the object structure below.
const CertificatesPage = [
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  {
    img: "Your certificate image", // Certificate image URL
    title: "Blue Mountain Certificate", // Certificate title
    description: "Lorem ipsum...", // Short description of the certification
    issuedBy: "Blue Mountain", // Issuer (e.g., Coursera, Google, etc.)
    credentialURL: "", // Optional: URL to verify the certificate (if applicable)
  },
  // Add more certificates following the structure above
];

// Skills Section Icons
// The 'skillsPage' array lists the skill icons to display in the portfolio.
// To add or remove icons, import them from react-icons and include them here.
// Example: import { AiFillAmazonSquare } from "react-icons/ai" and add AiFillAmazonSquare below.
const skillsPage = [
  FaGitAlt,
  FaGithub,
  TbBrandCpp,
  FaJava,
  FaJs,
  TbBrandKotlin,
  FaPython,
  FaHtml5,
  BsFiletypeXml,
  FaCss3Alt,
  RiTailwindCssFill,
  FaYoutube,
];

// Import projects from the new structure
import projects from '../data/projects';

// Exporting all components for use in other parts of the application
export {
  navElements,
  textLogo,
  imgLogo,
  AboutPage,
  footerIcons,
  EducationPage,
  skillsPage,
  projects as projectsPage,
  CertificatesPage,
};
