import { Link } from "react-router-dom";
import { AboutPage } from "../assets/assets";

const {
  authorDescription,
  getInTouchUrl,
  authorName,
} = AboutPage;

const About = () => {

  return (
    <>
      <div
        className={`flex flex-col bedar-sc1:flex-row justify-between items-center gap-6 mt-[.5rem] bedar-sc2:mt-2 min-h-screen`}
        id="About"
      >
        <div className="w-full bedar-sc1:w-1/2 flex flex-col gap-5">
          <div className="text-3xl">
            Hi, I am <strong className="text-[#fedf89]">{authorName}</strong>
          </div>
          <div className="leading-7 text-lg ">{authorDescription}</div>
          <Link
            to={getInTouchUrl}
            className="bg-white text-textColor px-4 py-2 rounded-full w-fit hover:bg-[#fedf89] hover:text-textColor font-semibold transition-all ease-linear text-[1rem]"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
