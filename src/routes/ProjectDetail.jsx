import { useParams } from "react-router-dom";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { projectsPage } from "../assets/assets";
import { ProjectHeader } from "../components/ProjectDetail";
import ProjectSections from "../components/ProjectDetail/ProjectSections";
import MoreToExplore from "../components/ProjectDetail/MoreToExplore";

const ProjectDetail = () => {
  const { projectName } = useParams();

  // Find the project by name or urlId
  const project = projectsPage.find(
    (p) => (p.urlId || p.projectName.toLowerCase()) === projectName.toLowerCase()
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Project not found</p>
      </div>
    );
  }

  const { details } = project;

  // Get sections for side navigation from project data, excluding 'callout' type
  const navSections = details.sections
    .filter(section => section.type !== 'callout') // Filter out sections with type 'callout'
    .map(section => ({
      id: section.id,
      title: section.title
    }));

  return (
    <>
      {/* Hero Image Section - Full Width */}
      <div className="w-full mb-12">
        <img
          src={details.heroImage}
          alt={details.heroImageAlt || `${project.projectName} Hero Image`}
          className="w-full h-auto block"
        />
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 flex font-inter">
        {/* Side Navigation */}
        <SideNavigation sections={navSections} />

        {/* Main Content */}
        <article className="w-full mx-auto lg:mx-0 lg:ml-52 lg:w-[calc(100%-13rem)]">
          {/* Project Header */}
          <ProjectHeader
            projectName={project.projectName}
            timeline={details.timeline}
            platform={details.platform}
            role={details.role}
            customTitle={details.customTitle}
          />

          {/* Dynamic Sections */}
          <div className="w-full px-4 md:px-8 lg:px-0">
            <ProjectSections sections={details.sections} />
          </div>
        </article>
      </div>

      {/* More to explore section */}
      <MoreToExplore projects={projectsPage.filter(p => p.projectName !== project.projectName)} />
    </>
  );
};

export default ProjectDetail; 