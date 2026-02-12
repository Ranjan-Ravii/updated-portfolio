import Navigation from "./Navigation";
import Footer from "./Footer";

import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Portfolio.jsx";
import Blogs from "../pages/Blogs.jsx";
import Contact from "../pages/Contact.jsx";

const Layout = () => {
  return (
    <div className="bg-[#0A0A23] text-white scroll-smooth">
      
      {/* Top Navbar */}
      <Navigation />

      {/* Sections */}
      <section id="home" className="min-h-screen pt-24">
        <Home />
      </section>

      <section id="about" className="min-h-screen pt-24">
        <About />
      </section>

      <section id="projects" className="min-h-screen pt-24">
        <Projects />
      </section>

      <section id="blogs" className="min-h-screen pt-24">
        <Blogs />
      </section>

      <section id="contact" className="min-h-screen pt-24">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Layout;
