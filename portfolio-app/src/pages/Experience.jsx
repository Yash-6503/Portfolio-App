import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Internship',
    bgColor: 'bg-gradient-to-br from-yellow-200 to-yellow-500',
    content: (
      <>
        <p><span className="font-semibold">FRONTEND DEVELOPER</span> at LogicNimbus Pvt. Ltd., Nashik.</p>
        <p className="font-medium text-sm mb-3">Jan 2024 to May 2025</p>
      </>
    ),
    link: (
      <Link to="/contact" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
        Hire Me
      </Link>
    )
  },
  {
    title: 'Projects',
    bgColor: 'bg-gradient-to-br from-gray-200 to-gray-400',
    content: (
      <>
        <ul className="mb-3">
          <li>Quizz App</li>
          <li>ToDo-List Website</li>
          <li>Portfolio, Calculator, Profile Cards</li>
        </ul>
      </>
    ),
    link: (
      <a
        href="https://github.com/Yash-6503/Web-Dev-Projects"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
      >
        View Projects
      </a>
    )
  },
  {
    title: 'Education',
    bgColor: 'bg-gradient-to-br from-blue-200 to-blue-400',
    content: (
      <>
        <p className='mb-3'>Graduated in <span className='font-semibold'>BSC. Computer Science</span> from K.T.H.M College, Nashik.</p>
      </>
    ),
    link: (
      <Link to="/education" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
        Details
      </Link>
    )
  },
  {
    title: 'Skills',
    bgColor: 'bg-gradient-to-br from-orange-200 to-orange-400',
    content: (
      <>
        <p className='mb-3'>Skilled in <span className='font-semibold'>Frontend, Backend, DevOps Tools</span> and more.</p>
      </>
    ),
    link: (
      <Link to="/skills" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
        Explore Skills
      </Link>
    )
  },
  {
    title: 'Courses',
    bgColor: 'bg-gradient-to-br from-green-200 to-green-400',
    content: (
      <>
        <ul className="mb-3">
          <li>Java Fullstack</li>
          <li>Website Designing</li>
          <li>ReactJS</li>
        </ul>
      </>
    ),
    link: (
      <Link to="/courses" className="inline-block px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
        View Courses
      </Link>
    )
  }
];

export default function Experience() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-950 min-h-screen pt-10 px-6 md:px-[10%]">
        <h2 className="text-center font-extrabold text-[24px] sm:text-[32px] 2xl:text-[50px] mb-10 text-blue-600">
          My Experience
        </h2>

        <div className="flex flex-wrap justify-center gap-10 pb-16">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`w-full sm:w-[45%] lg:w-[30%] p-6 rounded-2xl ${card.bgColor} shadow-xl hover:scale-[1.03] transform transition-transform duration-300 ease-in-out`}
            >
              <h3 className="text-center text-[22px] sm:text-[24px] font-bold text-black mb-4 tracking-wide">
                {card.title}
              </h3>
              <div className="text-center text-black text-[15px] sm:text-[16px] leading-relaxed mb-4">
                {card.content}
              </div>
              <div className="text-center">
                {card.link}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
