import React from 'react';
import { Github, Linkedin, Mail, Instagram, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const menuItems = [
    { name: 'About', link: '/about' },
    { name: 'Skills', link: '/skills' },
    { name: 'Experience', link: '/experience' },
    { name: 'Projects', link: '/projects' },
    { name: 'Courses', link: '/courses' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <footer className="bg-gray-300 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Brand */}
        <div className="text-2xl font-bold text-blue-600 dark:text-white mb-4 md:mb-0">
          Portfolio
        </div>

        {/* Navigation Links */}
        <ul className="text-center md:flex flex-wrap justify-center gap-6 text-md font-medium">
          {menuItems.map((item) => (
            <li key={item.name} className='mb-2 md:mb-0'>
              <a
                href={item.link}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0 ">
          <a
            href="https://github.com/Yash-6503"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yashwalke"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:yashwalke6503@email.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://instagram.com/_yash.dev_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://wa.link/ud3opd" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaWhatsapp size={20} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Yash Walke. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
