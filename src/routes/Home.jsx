import { About, Projects, Contact } from "../pages/pages.js";

const Home = () => {
  return (
    <div className="space-y-20">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home; 