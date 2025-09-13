import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-green-500 text-white py-20 md:py-32 rounded-b-3xl">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Transforming Lives, Building Futures
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Empowering the youth of India through education, health, and civic programs. Join us in our mission.
        </p>
        <a
          href="#"
          className="bg-white text-gray-500 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
        >
          Start Your Impact Today
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
