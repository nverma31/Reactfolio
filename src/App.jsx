import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components/components.js";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import NotFound from "./routes/NotFound";
import ProjectDetail from "./routes/ProjectDetail";

const App = () => {
  return (
    <div className="selection:bg-[#fedf89] selection:text-textColor">
      <Navbar />
      <main className="relative max-w-[1800px] mt-[5rem] bedar-sc2:mt-[6.8rem] w-full m-auto px-5 bedar-sc1:px-20 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
