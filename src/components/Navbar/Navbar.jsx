import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  const [menuPos, setMenuPos] = useState({ top: null, left: '1rem' });
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);

  // Update CSS variable to match navbar height so sections can use var(--navbar-height)
  useEffect(() => {
    const updateNavbarHeight = () => {
      const node = navRef.current;
      const height = node ? node.offsetHeight : 72;
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
    };
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = navRef.current?.offsetHeight || parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height')) || 72;
      const top = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "internship", label: "Internship" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Compute menu position under the toggle to show it just under the icon
  useEffect(() => {
    if (!toggleRef.current) return;
    const computePos = () => {
      const rect = toggleRef.current.getBoundingClientRect();
      const menuEl = menuRef.current;
      const menuW = menuEl ? menuEl.offsetWidth : 224; // fallback width
      const desiredLeft = rect.left + window.pageXOffset;
      let left = desiredLeft;
      if (desiredLeft + menuW > window.innerWidth) {
        left = window.innerWidth - menuW - 8; // keep margin from right edge
      }
      setMenuPos({ top: rect.bottom + window.pageYOffset + 6 + 'px', left: left + 'px' });
    };
    computePos();
    window.addEventListener('resize', computePos);
    window.addEventListener('scroll', computePos);
    return () => {
      window.removeEventListener('resize', computePos);
      window.removeEventListener('scroll', computePos);
    };
  }, [toggleRef, isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      ref={navRef}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo (clickable - acts like Home) */}
        <div
          className="text-lg font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8245ec]"
          role="button"
          tabIndex={0}
          title="Go to Home"
          aria-label="Go to Home"
          onClick={() => handleMenuItemClick('about')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleMenuItemClick('about');
            }
          }}
        >
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Abhishek</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Kumar</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Abhishekbgp8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-jsr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" ref={toggleRef}>
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute w-auto max-w-[85vw] bg-[#050414] bg-opacity-90 z-50 rounded-lg shadow-lg md:hidden transform transition-transform duration-300 origin-top-left"
          style={{ top: menuPos.top || undefined, left: menuPos.left }}
        >
          <ul className="flex flex-col items-start space-y-4 py-4 text-gray-300 px-4">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/Abhishekbgp8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhishek-kumar-jsr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
