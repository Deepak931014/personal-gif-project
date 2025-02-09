import React from "react";

const Categories = () => {
  const categories = ["Festival", "Poster", "Stickers", "Clip & Meme"];
  
  return (
    <div className="text-center my-10">
      <h2 className="text-2xl lg:text-3xl mb-4 font-bold">CREATIVE CATEGORIES</h2>
      <p className="text-gray-500">MAKE IT & USE IT</p>
      <div className="flex flex-wrap justify-center gap-10 mt-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-40 h-40 bg-gray-300 rounded-full"></div>
            <p className="mt-2">{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
