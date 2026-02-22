import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  const sendMail = () => {
    window.location.href =
      "mailto:inboxraviiranjan@gmail.com?subject=Hello&body=Hi Ravi";
  };

  return (
    <section
      id="home"
      className="relative w-full bg-transparent scroll-mt-24"
    >
      {/* HERO (properly centered) */}
      <div className="min-h-screen flex flex-col items-center justify-center ">
        <div className="w-full max-w-6xl px-4 sm:px-6">

          {/* Two-column hero */}
          <div className="flex flex-col items-center justify-center md:flex-row gap-6 sm:gap-8 md:gap-10 text-left">

            {/* LEFT: Heading */}
            <motion.h1
              className="font-oskari font-black uppercase text-white text-center md:text-left
                         text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,8vw,6rem)]
                         leading-[0.95] break-words"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              FULL <br />
              STACK <br />
              DEVELOPER<span className="text-white">.</span>
            </motion.h1>

            {/* RIGHT: Description + CTA */}
            <div className="max-w-xl flex flex-col justify-end w-full">
              <motion.p
                className="text-sm sm:text-base text-gray-200 mt-24 sm:mt-28 md:mt-36"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                I build high-performance web applications with modern stacks.
              </motion.p>

              <motion.div
                className="mt-4 sm:mt-6 flex gap-3 sm:gap-4 md:gap-6 lg:gap-10 flex-wrap justify-center md:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() =>
                    window.open("https://r-ranjan.vercel.app/", "_blank")
                  }
                  className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md transition-all min-h-[44px] font-medium"
                >
                  View Portfolio
                </button>

                <button
                  onClick={sendMail}
                  className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md transition-all min-h-[44px] font-medium"
                >
                  Contact Me
                </button>
              </motion.div>
            </div>

          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 text-gray-300">
          <p className="text-sm sm:text-base leading-relaxed">
            This is more than just a portfolio — it’s a reflection of my passion for
            building high-performance, user-centric applications. From frontend design to
            backend architecture, I craft complete digital solutions that are fast,
            scalable, and thoughtfully engineered. Scroll down to explore my work,
            skills, and the ideas I’m bringing to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
