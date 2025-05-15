
import React from "react";

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
      className="min-h-[100svh] bg-gradient-to-br from-gray-500/25 to-[#0A0A23] text-gray-100 flex items-center px-6 md:px-12 py-8"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Main container - column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-8">
          
          {/* Image container - first on mobile, second on desktop */}
          <div className="w-full md:w-1/2 md:order-2 flex justify-center md:justify-end">
            {/* Placeholder for your image */}
            <img src="/programming.png" alt="programming_png" />
          </div>
          
          {/* Text content - second on mobile, first on desktop */}
          <div className="w-full md:w-1/2 md:order-1 text-center md:text-left">
            <p className="text-rose-400 font-black text-lg uppercase tracking-wider">Hi, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-2">
              Full Stack <br /> Software <br /> Developer.
            </h1>
            <p className="text-gray-300 mt-4 text-sm md:text-base">
              I help turn ideas into real world apps.
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <button
              onClick={ () => {window.open("https://www.youtube.com/" , "_blank")}}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;