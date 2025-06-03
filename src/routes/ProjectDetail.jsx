import { useParams } from "react-router-dom";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { projectsPage } from "../assets/assets";
import { ProjectHeader } from "../components/ProjectDetail";
import ProjectSections from "../components/ProjectDetail/ProjectSections";

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
          />

          {/* Dynamic Sections */}
          <div className="w-full px-4 md:px-8 lg:px-0">
            <ProjectSections sections={details.sections} />
          </div>
        </article>
      </div>

      {/* More to explore section */}
      <section id="more-to-explore" className="max-w-[1800px] mx-auto px-5 bedar-sc1:px-20 mb-12">
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-8 font-inter-tight">More to explore</h2>
        <div className="flex flex-col bedar-sc2:flex-row justify-center gap-6">
          {/* Card 1 */}
          <div className="flex flex-col border border-zinc-200 rounded-md p-6 w-full bedar-sc2:w-1/2">
            <div className="text-sm font-inter-tight text-gray-500">UI/UX DESIGN</div>
            <h3 className="text-2xl font-semibold mt-2 mb-4 font-inter-tight">I design clean experiences that your users will love.</h3>
            <Link to="/projects" className="text-gray-1 flex items-center gap-1 hover:text-black transition-colors ease-linear font-semibold">
              See my work <IoIosArrowForward />
            </Link>
            <div className="mt-6 bg-gray-300 h-48 w-full rounded-md">{/* Image Placeholder */}</div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col border border-zinc-200 rounded-md p-6 w-full bedar-sc2:w-1/2">
            <div className="text-sm font-inter-tight text-gray-500">WEBFLOW / FRAMER</div>
            <h3 className="text-2xl font-semibold mt-2 mb-4 font-inter-tight">I build high quality websites at warp speed.</h3>
            <Link to="/projects" className="text-gray-1 flex items-center gap-1 hover:text-black transition-colors ease-linear font-semibold">
              How I help <IoIosArrowForward />
            </Link>
            <div className="mt-6 bg-gray-300 h-48 w-full rounded-md">{/* Image Placeholder */}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetail; 