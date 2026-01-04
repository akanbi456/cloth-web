

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import logo from "../assets/Logo.jpeg";
import { Link, Links } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
      
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="ECO logo"
            className="h-12 w-auto object-contain rounded-full border border-green-600"
          />
          <h1 className="text-2xl font-serif">
            <span className="text-green-700">LIG</span>
            <span className="text-yellow-600 font-semibold">HT</span>
          </h1>
        </div>

      
        <ul className="hidden md:flex gap-8 text-green-700 font-medium items-center">
          <li
            onClick={(e) => handleNavClick(e, "about")}
            className="hover:text-yellow-600 cursor-pointer transition"
          >
            About
          </li>
          <li
            onClick={(e) => handleNavClick(e, "product")}
            className="hover:text-yellow-600 cursor-pointer transition"
          >
            Products
          </li>
          <li
          onClick={(e) => handleNavClick(e, "contact")}
           className="hover:text-yellow-600 cursor-pointer transition">
            Contact
          </li>
        
           <a href="https://wa.me/2347047017978?text=%F0%9F%92%A1%20Hi%2C%20I%27m%20_________.%0A%0AI%20just%20checked%20out%20LIGHT%20and%20I%20felt%20the%20vibe%20instantly.%20This%20is%20more%20than%20clothing%2C%20and%20I%27m%20ready%20to%20wear%20that%20energy.%20I%20want%20to%20order%20a%20cloth%20that%20matches%20my%20light."
  target="_blank"
  rel="noopener noreferrer">
  <li className="border border-green-700 px-5 py-2 rounded-full text-green-700 hover:bg-green-700 hover:text-white transition">
    Shop Now
  </li>
</a>

          
         
          
          
        </ul>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-green-700  transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-green-100">
          <ul className="flex flex-col items-center gap-6 py-6 text-green-700 font-medium">
            <li
              onClick={(e) => handleNavClick(e, "about")}
              className="hover:text-yellow-600 cursor-pointer transition"
            >
              About
            </li>
            <li
              onClick={(e) => handleNavClick(e, "product")}
              className="hover:text-yellow-600 cursor-pointer transition"
            >
              Products
            </li>
            <li className="hover:text-yellow-600 cursor-pointer transition">
              Contact
            </li>
            <li className="border border-green-700 px-5 py-2 rounded-full text-green-700 hover:bg-green-700 hover:text-white transition">
              Shop Now
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
