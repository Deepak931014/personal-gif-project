// src/pages/FestivalPage.js
import React from "react";

const FestivalPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6">
          Festivals Collection
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Explore our wide range of festival-themed products and designs!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/400"
              alt="Festival 1"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl text-gray-800 mb-2">Diwali Festival</h3>
            <p className="text-gray-600">Bright and vibrant Diwali-themed designs for your home and gifts.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/400"
              alt="Festival 2"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl text-gray-800 mb-2">Christmas Festival</h3>
            <p className="text-gray-600">Celebrate the festive season with our exclusive Christmas designs!</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src="https://via.placeholder.com/400"
              alt="Festival 3"
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl text-gray-800 mb-2">New Year Party</h3>
            <p className="text-gray-600">Ring in the New Year with our collection of party-themed products.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalPage;
