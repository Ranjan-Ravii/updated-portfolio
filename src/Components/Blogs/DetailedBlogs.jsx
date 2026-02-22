import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from './BlogsData';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const DetailedBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const foundBlog = blogs.find((b) => b.id.toString() === id);
    setBlog(foundBlog);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0A0A23] to-[#162B44]">
        <motion.div
          className="text-white text-base sm:text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Loading...
        </motion.div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-[#0A0A23] to-[#162B44] text-white p-4 sm:p-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blog Not Found
        </motion.h2>
        <motion.button
          onClick={() => {
            navigate('/', { replace: true });
            setTimeout(() => {
              const el = document.getElementById('blogs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }}
          className="inline-flex items-center text-blue-400 hover:text-white active:scale-95 transition-all duration-300 text-sm sm:text-base font-medium px-4 py-2 min-h-[44px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </motion.button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0A0A23] to-[#162B44] py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={() => {
            navigate('/', { replace: true });
            setTimeout(() => {
              const el = document.getElementById('blogs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }}
          className="inline-flex items-center text-blue-400 hover:text-white active:scale-95 transition-all duration-300 mb-6 sm:mb-8 text-base sm:text-lg font-medium px-3 py-2 min-h-[44px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Blogs
        </motion.button>

        {/* Blog Header */}
        <motion.div
          className="mb-6 sm:mb-8 md:mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight break-words">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Calendar size={16} className="flex-shrink-0" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock size={16} className="flex-shrink-0" />
              <span>{blog.readTime}</span>
            </div>
            <span className="bg-blue-600 text-white px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap">
              {blog.category}
            </span>
          </div>
        </motion.div>

        {/* Blog Image */}
        <motion.div
          className="rounded-lg overflow-hidden mb-6 sm:mb-8 md:mb-10 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Blog Content */}
        <motion.div
          className="prose prose-sm sm:prose-base md:prose-lg prose-invert max-w-none leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {blog.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index} className="mb-4 text-sm sm:text-base break-words">{block.text}</p>;
            }
            if (block.type === 'heading') {
              return <h2 key={index} className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-6 sm:mt-8 mb-3 sm:mb-4 break-words">{block.text}</h2>;
            }
            if (block.type === 'subheading') {
              return <h3 key={index} className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-6 sm:mt-8 mb-3 sm:mb-4 break-words">{block.text}</h3>;
            }
            if (block.type === 'image') {
              return <img key={index} src={block.src} alt={block.alt} className="w-full h-auto object-cover rounded-lg my-4 sm:my-6" loading="lazy" />;
            }
            if (block.type === 'list') {
              return (
                <ul key={index} className="list-disc list-inside ml-4 sm:ml-6 mb-4 space-y-2 text-sm sm:text-base">
                  {block.items.map((item, i) => (
                    <li key={i} className="break-words">{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === 'code') {
              return (
                <pre key={index} className="bg-gray-800 text-gray-200 p-3 sm:p-4 rounded-lg overflow-x-auto my-4 sm:my-6 text-xs sm:text-sm">
                  <code className={`language-${block.language}`}>{block.text}</code>
                </pre>
              );
            }
            if (block.type === 'conclusion') {
              return <p key={index} className="font-bold text-white mt-4 sm:mt-6 text-sm sm:text-base break-words">{block.text}</p>;
            }
            return null;
          })}
        </motion.div>

        <motion.button
          onClick={() => {
            navigate('/', { replace: true });
            setTimeout(() => {
              const el = document.getElementById('blogs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }}
          className="inline-flex items-center mt-12 sm:mt-16 md:mt-20 text-blue-400 hover:text-white active:scale-95 transition-all duration-300 text-sm sm:text-base font-medium px-3 py-2 min-h-[44px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </motion.button>
      </div>
    </section>
  );
};

export default DetailedBlog;