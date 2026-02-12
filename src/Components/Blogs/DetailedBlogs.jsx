import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from './BlogsData.jsx';
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
      <div className="flex justify-center items-center min-h-screen bg-[#162B44]">
        <motion.div
          className="text-white text-lg font-medium"
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
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#162B44] text-white p-6">
        <motion.h2
          className="text-3xl font-bold mb-4"
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
          className="flex items-center text-[#FF6500] hover:text-white transition-colors"
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
    <section className="min-h-screen bg-gradient-to-b from-[#0A0A23] to-[#162B44] py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.button
          onClick={() => {
            navigate('/', { replace: true });
            setTimeout(() => {
              const el = document.getElementById('blogs');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 50);
          }}
          className="inline-flex items-center text-[#FF6500] hover:text-white transition-colors mb-8 text-lg font-medium"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Blogs
        </motion.button>

        {/* Blog Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            {blog.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{blog.readTime}</span>
            </div>
            <span className="bg-[#FF6500] text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
          </div>
        </motion.div>

        {/* Blog Image */}
        <motion.div
          className="rounded-lg overflow-hidden mb-10 shadow-lg"
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
          className="prose prose-lg prose-invert max-w-none leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {blog.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <p key={index}>{block.text}</p>;
            }
            if (block.type === 'heading') {
              return <h2 key={index} className="text-3xl font-bold text-white mt-8 mb-4">{block.text}</h2>;
            }
            if (block.type === 'subheading') {
              return <h2 key={index} className="text-xl font-bold text-white mt-8 mb-4">{block.text}</h2>;
            }
            if (block.type === 'image') {
              return <img key={index} src={block.src} alt={block.alt} className="w-full h-auto object-cover" loading="lazy" />;
            }
            if (block.type === 'list') {
              return (
                <ul key={index} className="list-disc list-inside ml-6">
                  {block.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === 'code') {
              return (
                <pre key={index} className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <code className={`language-${block.language}`}>{block.text}</code>
                </pre>
              );
            }
            if (block.type === 'conclusion') {
              return <p key={index} className="font-bold text-white mt-6">{block.text}</p>;
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
          className="flex items-center mt-20 text-[#FF6500] hover:text-white transition-colors"
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