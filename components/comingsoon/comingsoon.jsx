import React from "react";

const ComingSoon = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          🚀 Coming Soon
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>
        <a
          href="#"
          className="bg-white text-indigo-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg 
                     hover:bg-gray-100 hover:shadow-xl transition duration-300 transform hover:scale-105"
        >
          Notify Me
        </a>
      </div>
    </section>
  );
};

export default ComingSoon;
