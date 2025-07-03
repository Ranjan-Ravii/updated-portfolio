import React from "react";
import Lottie from "lottie-react";
// Download a Lottie animation JSON (e.g., coding coffee or cat) from LottieFiles and place it in src/assets
// Example: https://lottiefiles.com/34526-coding-in-office or any coffee/cat animation
import codingCoffee from "../../assets/Animation - 1751534970603.json"; // <-- Place your Lottie JSON here
import { motion } from "framer-motion";

const Home = () => {
  function sendMail() {
    const recipient = "inboxraviiranjan@gmail.com";
    const subject = "Hello from My App";
    const body = "Hi there,\n\nI wanted to reach out to you...";
    
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  return (
    <section
      id="home"
      className="min-h-[80vh] md:h-screen bg-gradient-to-br from-gray-500/25 to-[#0A0A23] text-gray-100 flex items-center px-6 md:px-12 py-8"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Main container - column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          
          {/* Image container - first on mobile, second on desktop */}
          <div className="hidden md:flex w-full md:w-1/3 md:order-2 justify-end">
            {/* Lottie animation for coffee cup or coding cat */}
            <Lottie
              animationData={codingCoffee}
              loop
              autoplay
              style={{ height: 480, width: 480 }}
            />
          </div>
          
          {/* Text content - second on mobile, first on desktop */}
          <div className="w-full font-2xl  md:w-1/2 md:order-1 text-center md:text-left">
            <motion.p
              className="text-rose-400 font-black text-lg uppercase tracking-wider"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hi, I'm
            </motion.p>
            <motion.h1
              className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack <br /> Software <br /> Developer.
            </motion.h1>
            <motion.p
              className="text-gray-300 mt-4 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              I help turn ideas into real world apps.
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <button
                onClick={() => { window.open("https://r-ranjan.vercel.app/", "_blank") }}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-all duration-300"
              >
                View Portfolio
              </button>
              <button
                onClick={sendMail}
                className="border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white py-2 px-6 rounded-md transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;