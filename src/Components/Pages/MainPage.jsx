import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Portfolio.jsx";
import Blogs from "./Blogs.jsx";
import Contact from "./Contact.jsx";

const MainPage = () => {
  return (
    <>
      {/* Sections */}
      <section id="home" className="min-h-screen sm:pt-20 md:pt-24">
        <Home />
      </section>

      <section id="about" className="min-h-screen pt-16 sm:pt-20 md:pt-24">
        <About />
      </section>

      <section id="projects" className="min-h-screen pt-16 sm:pt-20 md:pt-24 ">
        <Projects />
      </section>

      <section id="blogs" className="min-h-screen pt-16 sm:pt-20 md:pt-24">
        <Blogs />
      </section>

      <section id="contact" className="min-h-screen pt-16 sm:pt-20 md:pt-24">
        <Contact />
      </section>
    </>
  );
};

export default MainPage;
