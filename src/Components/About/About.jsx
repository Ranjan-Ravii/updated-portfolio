import React from "react";

const About = () => {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Next.js"],
    Backend: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    Programming: [
      "C++",
      "OOPs",
      "Python",
      "JavaScript",
      "DSA",
    ],
    Tools: ["Git", "GitHub", "VS Code", "Postman"],
    "AI & ML": ["NLP", "Machine Learning", "Prompt Engineering"],
    // Deployment: [
    //   "Deployment automation",
    //   "Service Orchestration",
    //   "Docker",
    //   "Kubernetes",
    // ],
  };

  // Convert the skills object into an array to make it easier to handle
  const skillsArray = Object.entries(skills).map(([category, items]) => ({
    category,
    items
  }));
  
  // Split the skills array into two groups for two columns
  const leftSkills = skillsArray.filter((_, index) => index % 2 === 0);
  const rightSkills = skillsArray.filter((_, index) => index % 2 === 1);

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-gray-500 to-[#0A0A23] text-gray-100 py-12 px-4 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto w-full ">
        {/* Main Content Container - Stack on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:gap-8 md:items-center justify-center">
          {/* About Me Section - Full width on mobile, left side on desktop */}
          <div className="flex flex-col items-center mb-12 md:mb-0 md:w-2/5 justify-center">
            <img 
            className="w-7/12 bg-cover rounded-lg shadow-lg mb-6" 
            src="/ravi-official.jpg"
            />
            
            {/* About Text */}
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-4 text-blue-500 text-center">
                About Me
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed text-justify">
                I'm an undergraduate student in the 4th year of my Bachelor of Technology (B.Tech) degree in Artificial Intelligence and Machine Learning (AIML) and
                a full stack software developer on MERN Stack passionate about building
                user-centric applications. I specialize in creating scalable,
                modern web applications using technologies like React, Tailwind CSS, Node.js,
                and Express.js. With a strong foundation in both frontend and
                backend, I enjoy solving complex problems and bringing ideas to
                life.
              </p>
            </div>
          </div>

          {/* Skills Section - right on desktop, center on mobile */}
          <div className="md:w-3/5 flex flex-col items-center md:items-end">
            <h3 className="text-2xl font-bold mb-6 text-blue-500 w-full text-center md:text-center md:text-left">
              My Skills
            </h3>
            {/* Explicitly creating two columns with flexbox */}
            <div className="flex flex-row gap-3 w-full justify-center md:justify-end">
              {/* Left Column */}
              <div className="w-1/2 flex flex-col gap-3 items-center md:items-end">
                {leftSkills.map(({category, items}, index) => (
                  <div key={index} className="p-3 bg-transparent rounded-lg shadow-md h-auto w-full text-left">
                    <h4 className="text-lg font-bold mb-2 text-blue-500 w-full text-left">
                      {category}
                    </h4>
                    <ul className="list-disc list-inside text-xs md:text-sm text-gray-200 w-full text-left">
                      {items.map((item, idx) => (
                        <li key={idx} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* Right Column */}
              <div className="w-1/2 flex flex-col gap-3 items-center md:items-end">
                {rightSkills.map(({category, items}, index) => (
                  <div key={index} className="p-3 bg-transparent rounded-lg shadow-md h-auto w-full text-left">
                    <h4 className="text-lg font-bold mb-2 text-blue-400 w-full text-left">
                      {category}
                    </h4>
                    <ul className="list-disc list-inside text-xs md:text-sm text-gray-300 w-full text-left">
                      {items.map((item, idx) => (
                        <li key={idx} className="mb-1">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;