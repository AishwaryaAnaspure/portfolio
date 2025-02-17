import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">PORTFOLIO</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-600">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
