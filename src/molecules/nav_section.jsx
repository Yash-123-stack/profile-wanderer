import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function NavSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(window.scrollY);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     
      <nav
        className={`bg-blue-500 p-4 text-white shadow-md transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto">
          
          <div className="flex items-center justify-between px-4 py-3 xl:hidden">
            <Link to="/" className="text-xl font-bold">Profile Explorer</Link>
            <button onClick={toggleDrawer} className="text-white focus:outline-none">
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden xl:flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Profile Explorer</Link>
            <div className="space-x-4 mr-5">
              <Link to="/" className="hover:opacity-60 transition-all duration-500">Home</Link>
              <Link to="/profiles" className="hover:opacity-60 transition-all duration-500">Profiles</Link>
              <Link to="/admin" className="hover:opacity-60 transition-all duration-500">Admin Panel</Link>
            </div>
          </div>
        </div>

       
        <div
          className={`absolute top-full left-0 w-full bg-blue-600 bg-opacity-50 backdrop-blur-xl p-4 flex flex-col space-y-4 transition-all duration-500 ease-in-out ${
            isOpen ? "block" : "hidden"
          } xl:hidden`}
        >
          <Link to="/" className="pl-2" onClick={toggleDrawer}>Home</Link>
          <Link to="/profiles" className="pl-2" onClick={toggleDrawer}>Profiles</Link>
          <Link to="/admin" className="pl-2" onClick={toggleDrawer}>Admin Panel</Link>
        </div>
      </nav>
    </>
  );
};
