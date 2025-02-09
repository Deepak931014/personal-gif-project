import React from "react";

const Gallery = () => {
  return (
    <div className="text-center my-10 px-4 sm:px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-24 px-6 gap-4 w-full mx-auto">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="w-full h-80 bg-gray-200"></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
