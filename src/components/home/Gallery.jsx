import React from "react";

const Gallery = () => {
  return (
    <div className="text-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-4/5 mx-auto">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="w-full h-80 bg-gray-200"></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
