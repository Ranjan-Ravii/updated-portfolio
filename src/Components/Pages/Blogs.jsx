import React, { useState, useEffect } from "react";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../Blogs/BlogsData.jsx";
import { motion } from "framer-motion";

const Blogs = () => {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedScrollPosition = window.history.state?.scrollPosition || 0;
    window.scrollTo(0, savedScrollPosition);
  }, []);

  const handleReadMore = (e, id) => {
    e.preventDefault();
    const scrollPosition = window.scrollY;
    navigate(`/blog/${id}`, { state: { scrollPosition } });
  };

  const visibleBlogs = showAllBlogs ? blogs : blogs.slice(0, 3);

  return (
    <section
      id="blogs"
      className="relative w-full scroll-mt-24 pt-20"
    >
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section Header */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-center mb-6 sm:mb-8 md:mb-10"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Latest <span className="text-blue-400">Blogs</span>
          </motion.h2>

          <p className="text-gray-400 dark:text-gray-300 text-base sm:text-lg text-center mb-8 sm:mb-10 md:mb-12">
            Explore my latest thoughts, tutorials, and insights.
          </p>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {visibleBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Card */}
                <div className="
                  h-full flex flex-col
                  bg-white dark:bg-black/60
                  border border-gray-200 dark:border-white/10
                  rounded-xl overflow-hidden
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                ">

                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6">

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-blue-400" />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-blue-400" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
                      {blog.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 line-clamp-3 flex-grow">
                      {blog.description}
                    </p>

                    {/* Button aligned bottom */}
                    <button
                      onClick={(e) => handleReadMore(e, blog.id)}
                      className="mt-auto inline-flex items-center justify-center
                                 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg text-sm sm:text-base
                                 bg-blue-600 hover:bg-blue-700
                                 text-white transition duration-300 gap-2 min-h-[44px]"
                    >
                      Read More
                      <ArrowRight size={16} />
                    </button>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="text-center">
            <button
              className="mt-8 sm:mt-10 md:mt-12 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base
                         bg-blue-600 hover:bg-blue-700
                         text-white transition duration-300 min-h-[44px]"
              onClick={() => setShowAllBlogs((prev) => !prev)}
            >
              {showAllBlogs ? "Show Less" : "Load More"}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Blogs;
