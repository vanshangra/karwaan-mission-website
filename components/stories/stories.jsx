import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: "Education for All",
      image: "/images2/child.jpg",
      short: "How our NGO helped children access quality education.",
      full: "In 2024, we launched an education initiative that provided 500+ children with books, school supplies, and mentorship programs. Many of these children are now the first in their families to attend school.",
    },
    {
      id: 2,
      title: "Healthcare in Villages",
      image: "/images2/healthcamp.jpg",
      short: "Free health camps for rural families.",
      full: "We organized regular health camps across villages, reaching over 2000 people with free checkups, medicines, and awareness sessions. Our mobile clinic continues to serve remote areas every week.",
    },
    {
      id: 3,
      title: "Women Empowerment",
      image: "/images2/stiching.jpg",
      short: "Helping women start their own businesses.",
      full: "Through our microfinance program, we enabled 150+ women to start small businesses like tailoring, farming, and handicrafts. This has brought financial independence and confidence to their lives.",
    },

     {
    id: 4,
    title: "Clean Water for All",
    image: "/images2/1.jpg",
    short: "Providing safe drinking water to remote areas.",
    full: "By installing handpumps and water filters in 10+ villages, we ensured clean drinking water access to more than 1000 families, reducing waterborne diseases significantly.",
  },
  {
    id: 5,
    title: "Green Earth Mission",
    image: "/images2/42.jpg",
    short: "Planting trees for a healthier tomorrow.",
    full: "Our volunteers planted over 5000 trees across different cities and villages in 2024, creating green belts and promoting environmental awareness among school children.",
  },
  {
    id: 6,
    title: "Food Distribution Drive",
    image: "/images2/23.jpg",
    short: "Meals served to underprivileged families.",
    full: "During times of crisis, our team organized food drives, distributing over 10,000 meals to daily wage workers, homeless people, and children in slums.",
  },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Inspiring Stories
      </h1>

      {/* Story Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {stories.map((story) => (
          <motion.div
            key={story.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedStory(story)}
          >
            <img
              src={story.image}
              alt={story.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {story.title}
              </h2>
              <p className="text-gray-600 mt-2">{story.short}</p>
              <p className="text-blue-600 mt-3 font-medium">Read More →</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={() => setSelectedStory(null)}
              >
                <X size={24} />
              </button>

              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="h-64 w-full object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {selectedStory.title}
              </h2>
              <p className="text-gray-700">{selectedStory.full}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Stories;
