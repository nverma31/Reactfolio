import { PageTitle, Project } from "../components/components.js";
import { projectsPage } from "../assets/assets.js";
import { containerStyle } from "./styles.js";
import ProjectCard from "../components/ProjectCard.jsx";

const Projects = () => {
  return (
    <>
      { (projectsPage && projectsPage.length > 0) && 
        <div id="projects" className={`${containerStyle}`}>
          <div className="max-w-4xl px-4 sm:px-6 md:px-8 lg:px-12">
            <PageTitle title={"Case studies"} />
          </div>
          <div>
            <div className="grid grid-cols-1 gap-12 w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:translate-x-[-5%]">
              {projectsPage.map(
                ({
                  projectName,
                  projectDescription,
                  projectURL,
                  githubRepository,
                  tags,
                  date,
                  urlId,
                  imageUrl,
                }) => (
                  <ProjectCard
                    key={projectName}
                    projectName={projectName}
                    projectDescription={projectDescription}
                    date={date}
                    urlId={urlId}
                    imageUrl={imageUrl}
                  />
                )
              )}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Projects;
