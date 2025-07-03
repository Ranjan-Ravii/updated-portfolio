import React, { useState, useEffect, useRef } from 'react';

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Projects', href: 'projects' },
    { name: 'Blogs', href: 'blogs' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sectionPositions = navItems.map((item) => {
            const section = document.getElementById(item.href);
            if (section) {
              return {
                id: item.href,
                top: section.offsetTop - 200,
                bottom: section.offsetTop + section.offsetHeight - 200,
              };
            }
            return null;
          }).filter(Boolean);

          const currentPosition = window.scrollY;

          const currentSection = sectionPositions.find(
            (section) => currentPosition >= section.top && currentPosition < section.bottom
          );

          if (currentSection && activeSection !== currentSection.id) {
            setActiveSection(currentSection.id);
            window.history.pushState(null, "", `#${currentSection.id}`);
          } else if (!currentSection && activeSection !== '') {
            setActiveSection('');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems, activeSection]);

  const handleClick = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(elementId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#232356be] fixed   top-0 left-0 w-full z-50 shadow-lg backdrop-blur-sm">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-8 mx-auto">
          <div className="flex items-center font-black text-3xl text-gray-100 cursor-pointer max-sm:text-sm">
            Ravi Ranjan
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-100 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12 text-gray-100 font-black">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className={`transition-colors duration-300 text-base font-medium p-2 m-2 rounded-xl hover:text-gray-950 sm:text-sm ${
                    activeSection === item.href ? 'text-blue-400' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-4 py-4 text-gray-100">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleClick(item.href)}
                  className={`transition-colors duration-300 text-base font-medium hover:text-blue-400 sm:text-sm ${
                    activeSection === item.href ? 'text-blue-400' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;