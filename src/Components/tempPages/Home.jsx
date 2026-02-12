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
        <div className="w-full max-w-6xl px-6">

          {/* Two-column hero */}
          <div className="flex flex-col items-center justify-center md:flex-row gap-10 text-left">

            {/* LEFT: Heading */}
            <motion.h1
              className="font-oskari font-black uppercase text-white
                         text-5xl sm:text-6xl md:text-[clamp(3rem,8vw,6rem)]
                         leading-[0.95]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              FULL <br />
              STACK <br />
              DEVELOPER<span className="text-white">.</span>
            </motion.h1>

            {/* RIGHT: Description + CTA */}
            <div className="max-w-xl flex flex-col justify-end">
              <motion.p
                className="text-gray-200 mt-36"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                I build high-performance web applications with modern stacks.
              </motion.p>

              <motion.div
                className="mt-6 flex gap-10 flex-wrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <button
                  onClick={() =>
                    window.open("https://r-ranjan.vercel.app/", "_blank")
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
                >
                  View Portfolio
                </button>

                <button
                  onClick={sendMail}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
                >
                  Contact Me
                </button>
              </motion.div>
            </div>

          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16 px-6 text-gray-300">
          <p>
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
