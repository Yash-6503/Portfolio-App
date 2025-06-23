import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import ProfilePic from '../assets/skills/dev.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-100 dark:bg-gray-950 ">
      <h2 className="text-4xl font-bold mb-4 text-blue-600">Contact</h2>
      <div className="bg-gray-100 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-full h-[181px] object-contain"
          />
        </div>

        {/* Name and Role */}
        <h1 className="text-2xl font-bold text-blue-600">Yash Walke</h1>
        <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">Java Full Stack Developer</p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6 text-3xl text-blue-600 dark:text-blue-400">
          <a href="https://github.com/Yash-6503" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yashwalke" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-white transition">
            <FaLinkedin />
          </a>
          <a href="https://wa.link/ud3opd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-white transition">
            <FaWhatsapp />
          </a>
          <a href="mailto:yashwalke6503@email.com" className="hover:text-gray-700 dark:hover:text-white transition">
            <FaEnvelope />
          </a>
          <a href="https://www.instagram.com/_yash.dev_/" target="_blank" className="hover:text-gray-700 dark:hover:text-white transition">
            <FaInstagram />
          </a>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.link/ud3opd"
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Hire Me
          </a>
          <Link
            to="/message"
            className="w-full sm:w-auto px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Message Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
