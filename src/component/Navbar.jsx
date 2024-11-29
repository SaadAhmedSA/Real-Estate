
import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // Listen to the window scroll event to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // When scroll position is more than 50px, change the navbar color
      } else {
        setScrolling(false); // Reset to transparent when the user is at the top
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all px-4 py-4 duration-300 ease-in-out ${
        scrolling ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white  gap-5 font-bold text-xl">
          <img src={assets.logo} alt="logo" width={100}  />
        </div>

        {/* Menu for larger screens */}
        <div className="hidden lg:flex items-center font-bold gap-10 ml-4">
          <a href="#header" className="text-white hover:text-yellow-500">Home</a>
          <a href="#about" className="text-white  hover:text-yellow-500">About</a>
          <a href="#Project" className="text-white  hover:text-yellow-500">Project</a>
          <a href="#testimonials" className="text-white  hover:text-yellow-500">Testimonials</a>
        </div>
          <a href="#contact-form" className="hidden lg:block bg-transparent border border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-200">
            Contact
          </a>

        {/* Hamburger Button for smaller screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Drawer Menu for smaller screens */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-black transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-20 lg:hidden`}
      >
        <div className="flex flex-col  h-full p-6 space-y-4 text-white font-semibold">
          <a href="#header" className="py-2 px-4 hover:bg-yellow-500 rounded transition duration-200" onClick={toggleMenu}>Home</a>
          <a href="#about" className="py-2 px-4 hover:bg-yellow-500 rounded transition duration-200" onClick={toggleMenu}>About</a>
          <a href="#Project" className="py-2 px-4 hover:bg-yellow-500 rounded transition duration-200" onClick={toggleMenu}>Project</a>
          <a href="#testimonials" className="py-2 px-4 hover:bg-yellow-500 rounded transition duration-200" onClick={toggleMenu}>Testimonials</a>
          <a href="#contact-form" className=" bg-white border  text-center border-white text-black font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-black transition duration-200">
            Contact
          </a>
        </div>
      </div>

      {/* Overlay for small screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;