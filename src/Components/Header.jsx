import React, { useState, useEffect } from "react";
import Logo from "../assets/logo-nav.png";

export const Header = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);
  
  // State to manage header visibility based on scroll
  const [isVisible, setIsVisible] = useState(true);
  
  // State to track the last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // State to track which link is currently hovered
  const [hoveredLink, setHoveredLink] = useState(null);

  // Effect to handle header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide header on scroll down
      } else {
        setIsVisible(true); // Show header on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Define navigation links
  const navLinks = [
    { name: "Work", href: "#" },
    { name: "About", href: "#" },
    { name: "Career", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <nav
        className={`bg-transparent fixed pt-6 px-2 sm:pt-6 xl:pt-10 top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="lg:mx-6 xl:mx-10 2xl:mx-14 p-5">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
              <img src={Logo} alt="Logo" />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block py-2 px-5 lg:px-8 bg-opacity-50 rounded-tl-xl rounded-br-xl text-white capitalize">
              <div className="flex items-baseline gap-x-4 lg:gap-x-10 reg">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-primary-foreground ${
                      hoveredLink === link.name
                        ? "scale-x-110"
                        : hoveredLink
                        ? "opacity-30"
                        : ""
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`inline-flex items-center justify-center p-2 bg-[#2B2631] bg-opacity-50 rounded-tl-xl rounded-br-xl z-50 ${
                  isOpen ? "hidden" : ""
                }`}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                {!isOpen && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-[100vh] w-full bg-[#2B2631] opacity-[95%] z-40 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-7 right-6 text-white inline-flex items-center justify-center p-2 bg-[#2B2631] opacity-[60%] border-2 rounded-tl-xl rounded-br-xl z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              className="w-7 h-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <div className="px-2 pt-20 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary-foreground hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
