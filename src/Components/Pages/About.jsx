import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillsData = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Vue.js"],
      description:
        "I build beautiful, responsive user interfaces with modern frontend technologies.",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "Mongoose"],
      description:
        "I develop robust server-side applications and RESTful APIs.",
    },
    {
      category: "Programming",
      items: ["C++", "OOPs", "Python", "JavaScript", "DSA"],
      description:
        "Strong foundation in programming fundamentals and data structures.",
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Postman"],
      description:
        "Proficient with development tools and version control systems.",
    },
    {
      category: "AI & ML",
      items: ["NLP", "Machine Learning", "Prompt Engineering"],
      description:
        "Exploring artificial intelligence and machine learning technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full scroll-mt-24 pt-10"
    >
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section Title */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-center mb-8 sm:mb-12 md:mb-16 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-stretch">

            {/* LEFT: Description */}
            <motion.div
              className="
              lg:w-1/3
              bg-white dark:bg-black/60
              border border-gray-200 dark:border-white/10
              rounded-xl p-6
              shadow-md
              flex items-center
            "
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
                  Hi, I'm Ravi Ranjan
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm an undergraduate student pursuing a B.Tech in 𝗔𝗿𝘁𝗶𝗳𝗶𝗰𝗶𝗮𝗹 𝗜𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲 𝗮𝗻𝗱 𝗠𝗮𝗰𝗵𝗶𝗻𝗲 𝗟𝗲𝗮𝗿𝗻𝗶𝗻𝗴 (𝗔𝗜𝗠𝗟) from 𝗚𝘂𝗿𝘂 𝗚𝗼𝗯𝗶𝗻𝗱 𝗦𝗶𝗻𝗴𝗵 𝗜𝗻𝗱𝗿𝗮𝗽𝗿𝗮𝘀𝘁𝗵𝗮 𝗨𝗻𝗶𝘃𝗲𝗿𝘀𝗶𝘁𝘆 (𝗚𝗚𝗦𝗜𝗣𝗨), I have a strong foundation in 𝗺𝗮𝗰𝗵𝗶𝗻𝗲 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 and 𝗱𝗲𝗲𝗽 𝗹𝗲𝗮𝗿𝗻𝗶𝗻𝗴 𝗽𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲𝘀. In addition, I am a 𝗳𝗿𝗼𝗻𝘁𝗲𝗻𝗱 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 proficient in 𝗛𝗧𝗠𝗟, 𝗖𝗦𝗦, 𝗝𝗮𝘃𝗮𝗦𝗰𝗿𝗶𝗽𝘁, 𝗮𝗻𝗱 𝗥𝗲𝗮𝗰𝘁. Currently expanding my knowledge in Full Stack Development and exploring 𝗗𝗮𝘁𝗮 𝗦𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲𝘀 𝗮𝗻𝗱 𝗔𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺𝘀 (𝗗𝗦𝗔) along with my academics—focusing on practical applications and continuous learning
                </p>
              </div>
            </motion.div>

            {/* RIGHT: Skills */}
            <motion.div
              className="
              lg:w-2/3 w-full
              bg-white dark:bg-black/60
              border border-gray-200 dark:border-white/10
              rounded-2xl p-8
              shadow-md
            "
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >

              {/* Category Buttons */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 mb-4">
                  {skillsData.map((skill, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(index)}
                      className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold transition min-h-[44px] ${activeCategory === index
                          ? "text-blue-500"
                          : "text-gray-500 dark:text-gray-400 hover:text-blue-500"
                        }`}
                    >
                      {skill.category}
                    </button>
                  ))}
                </div>

                {/* Slider Bar */}
                <div className="relative h-[2px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute h-full bg-blue-500"
                    initial={false}
                    animate={{
                      left: `${(activeCategory / skillsData.length) * 100}%`,
                      width: `${100 / skillsData.length}%`,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                </div>
              </div>

              {/* Content Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="
                  rounded-xl p-6 min-h-[300px]
                  bg-gray-100 dark:bg-black/40
                  border border-gray-200 dark:border-white/10
                "
                >
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-800 dark:text-white">
                    {skillsData[activeCategory].category}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                    {skillsData[activeCategory].description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
                    {skillsData[activeCategory].items.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="
                        px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-sm sm:text-base
                        bg-white dark:bg-black/50
                        border border-gray-200 dark:border-white/10
                        text-gray-700 dark:text-gray-300
                        transition duration-300
                      "
                      >
                        {item}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );

};

export default About;
