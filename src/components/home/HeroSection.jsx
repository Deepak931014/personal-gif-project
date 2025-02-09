import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      {/* Wrapper container for input and button */}
      <div className="relative w-4/5 md:w-2/3">
        <input
          type="text"
          placeholder="WHAT   IS   IN   YOUR   MIND?"
          className="w-full p-3 py-6 border rounded-xl shadow-sm text-gray-700 pl-4 pr-16" // Added padding-right for button space
        />
        {/* Search button inside the same container */}
        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-400 text-white px-8 py-2 rounded-xl">
          Search
        </button>
      </div>

      {/* Links section aligned to the start (left) */}
      <div className="flex items-start gap-4 mt-4 text-gray-600">
        <a href="#" className="cursor-pointer hover:text-red-400">Diwali</a>
        <a href="#" className="cursor-pointer hover:text-red-400">Birthday Poster</a>
        <a href="#" className="cursor-pointer hover:text-red-400">Stickers</a>
        <a href="#" className="cursor-pointer hover:text-red-400">Clip & Meme</a>
      </div>
    </div>
  );
};

export default HeroSection;
