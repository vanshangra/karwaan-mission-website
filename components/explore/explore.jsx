import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // close icon

// ExploreMorePage.jsx
const ExploreMorePage = () => {
  const images = [
    "/images2/1.jpg",
    "/images2/2.JPG",
    "/images2/3.JPG",
    "/images2/4.JPG",
    "/images2/5.jpg",
    "/images2/6.jpg",
    "/images2/7.jpg",
    "/images2/8.jpg",
    "/images2/9.jpg",
    "/images2/10.jpg",
    "/images2/11.jpg",
    "/images2/12.jpg",
    "/images2/13.jpg",
    "/images2/14.jpg",
    "/images2/15.jpg",
    "/images2/16.JPG",
    "/images2/17.JPG",
    "/images2/18.JPG",
    "/images2/19.JPG",
    "/images2/20.jpg",
    "/images2/21.jpg",
    "/images2/22.jpg",
    "/images2/23.jpg",
    "/images2/24.jpg",
    "/images2/25.jpg",
    "/images2/26.jpg",
    "/images2/27.jpg",
    "/images2/28.jpg",
    "/images2/29.jpg",
    "/images2/30.jpg",
    "/images2/31.jpg",
    "/images2/32.jpg",
    "/images2/34.JPG",
    "/images2/35.JPG",
    "/images2/36.JPG",
    "/images2/37.JPG",
    "/images2/38.jpg",
    "/images2/39.jpg",
    "/images2/40.jpg",
    "/images2/41.jpg",
    "/images2/42.jpg",
    "/images2/43.jpg",
    "/images2/44.jpg",
    "/images2/45.jpg",
    "/images2/46.jpg",
    "/images2/47.jpg",
    "/images2/48.jpg",
    "/images2/49.jpg",
    "/images2/50.jpg",
    "/images2/51.jpg",
    "/images2/52.jpg",
    "/images2/53.jpg",  
    "/images2/54.jpeg",
    "/images2/55.jpeg",
    "/images2/56.jpeg",
    "/images2/57.jpg",
    "/images2/58.jpeg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900 p-6 md:p-12">
      {/* Header Section */}
      <header className="max-w-5xl mx-auto mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Explore More
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-5 text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Discover a curated collection of visuals capturing the spirit of our project.
          This page offers a glimpse into the mood, design, and inspiration behind the
          journey — giving you an immersive feel without tying notes to specific photos.
        </motion.p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg">Photography</span>
          <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg">Design</span>
          <span className="inline-block px-4 py-1 text-sm bg-gradient-to-r from-teal-500 to-green-500 text-white rounded-full shadow-lg">Inspiration</span>
        </div>
      </header>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {images.map((src, idx) => (
            <motion.figure
              key={src + idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Explore image ${idx + 1}`}
                loading="lazy"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                <p className="text-white text-sm md:text-base font-medium">Click to Enlarge</p>
              </div>
            </motion.figure>
          ))}
        </motion.div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>✨ A visual journey — click images to view in full size.</p>
        </footer>
      </section>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white bg-black/60 hover:bg-black p-2 rounded-full"
              >
                <X size={22} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ExploreMorePage;