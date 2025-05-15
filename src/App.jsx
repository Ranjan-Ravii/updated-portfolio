import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Blogs from './Components/Blogs/Blogs';
import DetailedBlog from './Components/Blogs/DetailedBlogs';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
                <section id="home">
                <Home />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Portfolio />
              </section>
              <section id="blogs">
                <Blogs />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </>
          }
        />
        <Route path="/blog/:id" element={<DetailedBlog />} />
      </Routes>
    </>
  );
}

export default App;
