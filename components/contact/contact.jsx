import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-24 md:py-32 text-center">
        <div className="absolute inset-0">
          <img
            src="/images/contact-hero.jpg"
            alt="Contact Us Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-green-800/80"></div>
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or want to get involved? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-700 mb-8">
              Whether you’re looking to volunteer, partner with us, or just want to know more,
              reach out through any of the following ways:
            </p>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-green-600" />
              <span>hello@yourngo.org</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-green-600" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-green-600" />
              <span>123 NGO Street, New Delhi, India</span>
            </div>

            {/* Social Media */}
            <div className="flex gap-6 mt-8 text-2xl">
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-green-600 hover:scale-110 transition">
                <FaWhatsapp />
              </a>
              <a href="https://instagram.com/yourngo" target="_blank" rel="noreferrer" className="text-pink-600 hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com/company/yourngo" target="_blank" rel="noreferrer" className="text-blue-700 hover:scale-110 transition">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com/yourngo" target="_blank" rel="noreferrer" className="text-blue-600 hover:scale-110 transition">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/yourngo" target="_blank" rel="noreferrer" className="text-sky-500 hover:scale-110 transition">
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <form className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Message Subject"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg">How can I volunteer?</h3>
              <p className="text-gray-600">You can sign up through our Volunteer page or contact us directly via WhatsApp.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Where does my donation go?</h3>
              <p className="text-gray-600">Every contribution supports education, healthcare, and community programs for underprivileged children and families.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Do you organize events?</h3>
              <p className="text-gray-600">Yes! Check our Events page or follow us on social media for updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-green-700 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s Create Impact Together 🌍</h2>
        <p className="mb-8 text-lg">
          Join us in building a brighter tomorrow through education, health, and empowerment.
        </p>
        <a
          href="#donate"
          className="bg-yellow-400 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition"
        >
          Get Involved
        </a>
      </section>
    </div>
  );
};

export default Contact;
