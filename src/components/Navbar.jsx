import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 lg:px-36 bg-white shadow-md">
      {/* Wrap the logo in a Link component to navigate to the homepage */}
      <Link to="/" className="text-2xl lg:text-4xl font-bold">
        LOGO
      </Link>
      <ul className="hidden md:flex gap-6 text-gray-700">
        {/* Use Link for navigation */}
        <li className="relative cursor-pointer group">
          <Link to="/festival">Festival</Link>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative cursor-pointer group">
          <Link to="/poster">Poster</Link>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative cursor-pointer group">
          <Link to="/stickers">Stickers</Link>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="relative cursor-pointer group">
          <Link to="/clip-meme">Clip & Meme</Link>
          <span className="absolute -bottom-1 left-0 w-0 h-1 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </ul>
      <button className="bg-red-400 text-white px-4 py-2 lg:px-8 rounded-full">Login</button>
    </nav>
  );
};

export default Navbar;
