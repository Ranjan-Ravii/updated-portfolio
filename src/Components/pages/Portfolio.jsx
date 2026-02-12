import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Video Sharing & Social Interaction Platform ",
      url: "https://vibe-desi.vercel.app/",
      description:
        "A YouTube-like full-stack video streaming platform built using the MERN stack. Includes authentication, video upload/update, likes, comments, and modern UI.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Authentication"],
    },
     {
      id: 2,
      title: "AI-Powered News Research & Retrieval System",
      url: "https://ranjan-ravii.github.io/password-generator/",
      description:
        `A RAG-powered news analysis platform that processes multiple news sources
and delivers contextual, fact-grounded answers using LLMs and vector search.`,
      tags: ["LangChain", "FAISS", "OpenAI Embeddings", "OpenRouter API"],
    },
    {
      id: 3,
      title: "Local DNS Server",
      url: "https://github.com/Ranjan-Ravii/dns-server/",
      description:
        "Custom local DNS server using BIND to resolve domain names within a private network.",
      tags: ["Linux", "BIND", "DNS", "Networking"],
    },
    {
      id: 4,
      title: "Currency Converter",
      url: "https://ranjan-ravii.github.io/currency-converter/",
      description:
        "Real-time currency conversion app using public exchange rate APIs.",
      tags: ["React", "API", "Tailwind"],
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative w-full scroll-mt-24 pt-20"
    >
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6">

          {/* Section Title */}
          <motion.h2
            className="text-5xl font-black uppercase text-center mb-14 tracking-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            My <span className="text-blue-400">Projects</span>
          </motion.h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="h-full"
              >
                {/* Card */}
                <div
                  className="
                  h-full flex flex-col
                  bg-white dark:bg-black/60
                  border border-gray-200 dark:border-white/10
                  rounded-xl p-6
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                "
                >

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="
                        px-3 py-1 rounded-full text-sm
                        bg-gray-100 dark:bg-black/40
                        border border-gray-200 dark:border-white/10
                        text-gray-700 dark:text-gray-300
                        transition duration-300
                      "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA aligned bottom */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    mt-auto inline-block text-center
                    px-4 py-2 rounded-md
                    bg-blue-600 hover:bg-blue-700
                    text-white transition duration-300
                  "
                  >
                    View Project
                  </a>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );

};

export default Portfolio;
