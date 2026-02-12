// import { Routes, Route } from "react-router-dom";
// import { Suspense, lazy } from "react";
// // import Layout from "./Components/layout/Layout.jsx";

// const Home = lazy(() => import("./Components/pages/Home"));
// const BlogDetails = lazy(() => import("./Components/blogs/DetailedBlogs.jsx"));

// function App() {
//   return (
//     <Suspense fallback={<div className="text-white">Loading...</div>}>
//       <Routes>
//         <Route>
//           <Route path="/" element={<Home />} />
//           <Route path="/blog/:id" element={<BlogDetails />} />
//         </Route>
//       </Routes>
//     </Suspense>
//   );
// }

// export default App;


import { Routes, Route } from "react-router-dom";
import Wrapper from "./Components/Layout/Wrapper.jsx";

import Home from "./Components/Pages/Home.jsx";
import About from "./Components/Pages/About.jsx";
import Blogs from "./Components/Pages/Portfolio.jsx";
import Portfolio from "./Components/Pages/Portfolio.jsx";
import Contact from "./Components/Pages/Contact.jsx";
import DetailedBlogs from "./Components/Blogs/DetailedBlogs.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Wrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:id" element={<DetailedBlogs />} />
      </Route>
    </Routes>
  );
}

export default App;

