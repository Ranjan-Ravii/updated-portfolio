import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { blogs } from './BlogsData';

const Blogs = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  const toggleShowAllBlogs = () => {
    setShowAllBlogs((prev) => !prev);
  };

  const visibleBlogs = showAllBlogs ? blogs : blogs.slice(0, 3);

  return (
    <div className="w-full py-20 bg-gradient-to-br from-gray-800 to-[#0A0A23] relative overflow-hidden text-center">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
            Latest <span className="text-blue-500">Blogs</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></div>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest thoughts, tutorials, and insights about web development and design.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleBlogs.map((blog, index) => (
            <div
              key={blog.id}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(blog.id)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-[#1E3E62] rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3E62] to-transparent opacity-70" />
                  <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 relative flex flex-col justify-start">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-blue-400" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-blue-400 " />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl text-left font-bold text-gray-100 mb-3 transition-colors duration-300 hover:text-white">
                    {blog.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 line-clamp-2 text-left">
                    {blog.description}
                  </p>

                  {/* Read More Button */}
                  <button
                    className="z-10 inline-flex items-center justify-center text-white px-4 py-2 rounded-lg bg-blue-800 hover:bg-blue-600 transition-colors duration-300 gap-2"
                    onClick={(e) => handleReadMore(e, blog.id)}
                  >
                    Read More
                    <ArrowRight size={16} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className="mt-10 px-6 py-3 rounded items-centerbg-blue-800 bg-blue-800 hover:bg-blue-600 text-white transition-colors duration-300"
        onClick={toggleShowAllBlogs}
      >
        {showAllBlogs ? 'Show Less' : 'Load More'}
      </button>
    </div>
  );
};

export default Blogs;