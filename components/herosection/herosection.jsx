import React from "react";
import { motion } from "framer-motion";
import { Users, BookOpen, Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-green-600 text-white py-28 md:py-40 rounded-b-3xl overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Impact Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-800/70 to-green-600/90"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative container mx-auto px-6 text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Transforming Lives, <br className="hidden md:block" /> Building Futures
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-100">
          We empower India’s youth and communities through{" "}
          <span className="font-semibold">education</span>,{" "}
          <span className="font-semibold">healthcare</span>, and{" "}
          <span className="font-semibold">civic programs</span>.  
          Together, we can inspire hope and create lasting change.
        </p>

        {/* Focus Areas */}
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-yellow-400" />
            <span>Education</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-yellow-400" />
            <span>Healthcare</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-yellow-400" />
            <span>Civic Programs</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/donate"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg 
            hover:bg-yellow-300 transition-transform duration-300 hover:scale-105"
          >
            Donate Now
          </a>
          <a
            href="#about"
            className="bg-transparent border-2 border-white px-8 py-4 rounded-full font-semibold text-lg 
            hover:bg-white hover:text-green-700 transition-transform duration-300 hover:scale-105"
          >
            Learn More
          </a>
        </div>

        {/* Impact Highlight */}
        <p className="mt-12 text-sm md:text-base text-gray-200">
          💡 With the support of 300+ volunteers, we’ve impacted{" "}
          <span className="font-bold">10,000+ lives</span> across India.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
