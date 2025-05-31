import { About, Education, Skills, Certificates, Projects, Contact } from "../pages/pages.js";

const Home = () => {
  return (
    <div className="space-y-20">
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="certificates">
        <Certificates />
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