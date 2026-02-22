import Navigation from "./Navigation.jsx";
import LightRays from "../Effects/LightRays.jsx";
import Footer from "./Footer.jsx";

import React from "react";
import { Outlet } from "react-router-dom";

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

        {/* 🔽 ROUTE OUTLET */}
        <Outlet />

        <Footer />
      </div>
    </div>
  );
};

export default Wrapper;
