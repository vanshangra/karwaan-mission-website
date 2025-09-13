import React, { useState, useEffect, useRef } from "react";

const NUM_SLIDES = 41; // Number of slides

const PdfSlideshow = () => {
  const [current, setCurrent] = useState(0);
  const cacheRef = useRef(new Set());

  // Use /images/ for public folder assets
  const slides = Array.from({ length: NUM_SLIDES }, (_, i) => `/images/${i + 1}.jpg`);

  const preload = (idx) => {
    if (cacheRef.current.has(idx)) return;
    const img = new Image();
    img.src = slides[idx];
    img.onload = () => cacheRef.current.add(idx);
  };

  // Preload current, next and previous on change
  useEffect(() => {
    preload(current);
    preload((current + 1) % NUM_SLIDES);
    preload((current - 1 + NUM_SLIDES) % NUM_SLIDES);
  });

  // Optionally preload first few on mount (uncomment if you want a more aggressive preload)
  useEffect(() => {
    preload(0);
    preload(1 % NUM_SLIDES);
    preload(NUM_SLIDES - 1);
    // for heavier preloading: loop and preload(i) for all i
  });

  const nextSlide = () => setCurrent((prev) => (prev + 1) % NUM_SLIDES);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + NUM_SLIDES) % NUM_SLIDES);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-3xl flex items-center justify-center bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={slides[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-auto object-contain"
          style={{ maxHeight: "500px", minHeight: "300px" }} // reserve space to avoid layout jump
          loading="eager" // ask browser to prioritize current image
          decoding="async"
        />
      </div>
      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">
          {current + 1} / {NUM_SLIDES}
        </span>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfSlideshow;