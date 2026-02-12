import Navigation from "./Navigation";
import LightRays from "../effects/LightRays.jsx";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Portfolio.jsx";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Footer from "./Footer";

import React from "react";

const Wrapper = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#242426] text-white scroll-smooth">

      {/* 🌊 BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="white"
          raysSpeed={0.1}
          lightSpread={1.1}
          rayLength={5}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0.5}
          distortion={0}
          className="custom-rays"
          pulsating
          fadeDistance={5}
          saturation={1}
        />
      </div>

      {/* 🌑 DARK OVERLAY */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-black/40 via-black/70 to-black/90" />

      {/* 🧱 CONTENT */}
      <div className="relative z-10">

        {/* 🔝 TOP NAVBAR */}
        <Navigation />

        {/* 🔽 SECTIONS */}
        <section id="home" className="">
          <Home />
        </section>

        <section id="about" className="mt-6">
          <About />
        </section>

        <section id="projects" className=" ">
          <Projects />
        </section>

        <section id="blogs" className=" ">
          <Blogs />
        </section>

        <section id="contact" className="">
          <Contact />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
