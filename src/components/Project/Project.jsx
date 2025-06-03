import { FaFolderOpen } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Project = ({
  projectName,
  projectDescription,
  projectURL,
  githubRepository,
  tags,
  date,
}) => {
    return (
      // Wrap the entire project card div with a Link
      <Link to={`/projects/${projectName}`} className="block">
        <div className="flex flex-col bg-mainColor text-white p-5 bedar-sc2:p-8 rounded-md border shadow h-full">
          <FaFolderOpen className="w-6 h-6" />
          <strong className="mt-5 mb-2 text-2xl text-[#fedf89]">
            {projectName}
          </strong>
          <div className="mb-2 flex-grow">{projectDescription}</div>
          <div>{tags}</div>
          <div className="flex items-center justify-between mt-10">
            <div>{date}</div>
            <div className="flex gap-2">
              {projectURL && (
                <a href={projectURL} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  {<IoEyeSharp title="Live demo" className="w-6 h-6" />}
                </a>
              )}

              {
                <a href={githubRepository} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                  {<IoLogoGithub title="Source Code" className="w-6 h-6" />}
                </a>
              }
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Project;
