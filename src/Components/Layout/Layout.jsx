import Navigation from "./Navigation.jsx";
import Footer from "./Footer.jsx";

import Home from "../Pages/Home.jsx";
import About from "../Pages/About.jsx";
import Projects from "../Pages/Portfolio.jsx";
import Blogs from "../Pages/Blogs.jsx";
import Contact from "../Pages/Contact.jsx";

const Layout = () => {
  return (
    <div className="bg-[#0A0A23] text-white scroll-smooth">
      
      {/* Top Navbar */}
      <Navigation />

      {/* Sections */}
      <section id="home" className="min-h-screen sm:pt-20 md:pt-24">
        <Home />
      </section>

      <section id="about" className="min-h-screen sm:pt-20 md:pt-24">
        <About />
      </section>

      <section id="projects" className="min-h-screen  sm:pt-20 md:pt-24">
        <Projects />
      </section>

      <section id="blogs" className="min-h-screen pt-16 sm:pt-20 md:pt-24">
        <Blogs />
      </section>

      <section id="contact" className="min-h-screen pt-16 sm:pt-20 md:pt-24">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Layout;
