import React from "react";
import { motion } from "framer-motion";
import { Users, Heart, Book, TreePine } from "lucide-react";

const OurWork = () => {
  // Example photo categories – replace with your NGO photos
  const gallery = [
    { src: "/images2/education.jpg", title: "Education Program" },
    { src: "/images2/healthcamp.jpg", title: "Health Camp" },
    { src: "/images2/stiching.jpg", title: "Women Empowerment" },
    { src: "/images2/plantation.jpg", title: "Tree Plantation" },
    { src: "/images2/child.jpg", title: "Child Development" },
    { src: "/images2/community.jpeg", title: "Community Event" },
  ];

  const stats = [
    { icon: <Book className="w-8 h-8 text-blue-600" />, label: "Books Distributed", value: "5,000+" },
    { icon: <Users className="w-8 h-8 text-green-600" />, label: "Children Educated", value: "1,200+" },
    { icon: <Heart className="w-8 h-8 text-pink-600" />, label: "Medical Camps", value: "50+" },
    { icon: <TreePine className="w-8 h-8 text-emerald-600" />, label: "Trees Planted", value: "10,000+" },
  ];

  const timeline = [
    { year: "2020", text: "Started community-driven education initiative" },
    { year: "2021", text: "Organized 20+ health awareness camps" },
    { year: "2022", text: "Planted 5,000 trees in rural areas" },
    { year: "2023", text: "Launched women empowerment training" },
    { year: "2024", text: "Expanded to 5 new states across India" },
  ];

  const testimonials = [
    { name: "Asha (Student)", text: "This NGO gave me access to education and changed my life." },
    { name: "Ravi (Volunteer)", text: "Volunteering here was the most fulfilling experience of my life." },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Our Work in Action
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Together, we’re building brighter futures and stronger communities.
        </p>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-2xl shadow">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Photo Highlights</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-sm">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button -> New Page */}
        <div className="mt-10 text-center">
          <a
            href="/explore-more"   // 👈 this will open your new gallery page
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition"
          >
            Explore More
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
        <div className="max-w-4xl mx-auto border-l-4 border-blue-500 pl-6 space-y-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold">{item.year}</h3>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Voices of Change</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow">
              <p className="text-gray-700 italic">“{t.text}”</p>
              <h4 className="mt-4 font-semibold text-gray-900">– {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Be Part of Our Journey</h2>
        <p className="mt-4 text-lg">Your support can change lives. Join us today.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/donate" className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow">
            Donate Now
          </a>
          <a href="/volunteer" className="px-6 py-3 bg-blue-800 rounded-xl font-semibold shadow">
            Volunteer
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
