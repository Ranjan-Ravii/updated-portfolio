import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Blogs", id: "blogs" },
    { name: "Contact", id: "contact" },
  ];

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold text-white">
          Ravi Ranjan
        </div>

        {/* Nav Links */}
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative text-sm font-medium transition-all duration-300
            ${activeSection === item.id
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
                }`}
            >
              {item.name}

              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-400 transition-transform duration-300
              ${activeSection === item.id ? "scale-x-100" : "scale-x-0"}
            `}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
