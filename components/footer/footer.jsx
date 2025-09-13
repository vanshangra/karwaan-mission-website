import React from "react";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-200">Karwaan Mission</h3>
          <p className="text-gray-400 text-sm">
            A non-profit organization working to create a better India by empowering youth.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-200">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white">Our Mission</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Volunteer</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Media</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Donate</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-200">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            123 Main Street<br />
            NEW DELHI<br />
            <a href="mailto:info@karwaanmission" className="hover:text-white">
              info@karwaanmission
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-200">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://wa.me/1234567890" // replace with your number
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-colors duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-8 text-sm">
        &copy; {new Date().getFullYear()} KARWAAN MISSION. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
