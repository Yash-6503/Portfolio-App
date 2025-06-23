import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const menuItems = [
    { name: 'About', link: '/about' },
    { name: 'Skills', link: '/skills' },
    { name: 'Experience', link: '/experience' },
    { name: 'Projects', link: '/projects' },
    { name: 'Courses', link: '/courses' },
    { name: 'Contact', link: '/contact' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-gray-300 dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 dark:text-white">Portfolio</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name} className="group relative">
              <a
                href={item.link}
                className="text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Hamburger menu toggle button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700 dark:text-gray-300"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-200 dark:bg-gray-900 px-6 pb-4 shadow-md">
          <ul className="flex flex-col space-y-4 pt-2 text-center">
            {menuItems.map((item) => (
              <li key={item.name} className="group relative">
                <a
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  {item.name}
                </a>
                <span className="block w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
