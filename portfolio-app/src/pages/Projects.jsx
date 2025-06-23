import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import img1 from '../assets/projects/swiggy.webp';
import img2 from '../assets/projects/portfolio.webp';
import img3 from '../assets/projects/calculator.webp';
import img4 from '../assets/projects/grocery.webp';
import quizz from '../assets/projects/quizz.jpg';
import todo from '../assets/projects/todo.webp';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Quizz App Project',
    description: 'I have developed a Fullstack Quizz App using HTML, CSS, Tailwind CSS, JavaScript, Reactjs, Java, Spring Boot and MySQL.',
    img: quizz,
  },
  {
    id: 2,
    title: 'ToDo-List Project',
    description: 'I have developed a Fullstack ToDo-List App using HTML, CSS, Tailwind CSS, JavaScript, Reactjs, Java, Spring Boot and MySQL.',
    img: todo,
  },
  {
    id: 3,
    title: 'Swiggy Clone Project',
    description: 'I have developed a Swiggy Clone using HTML, CSS, Tailwind CSS, JavaScript, and Next.js.',
    img: img1,
  },
  {
    id: 4,
    title: 'Personal Portfolio Website',
    description: 'I created a portfolio using HTML, CSS, Tailwind CSS, JavaScript, and Next.js.',
    img: img2,
  },
  {
    id: 5,
    title: 'Calculator Project',
    description: 'A web-based calculator using HTML, CSS, Tailwind CSS, JavaScript, and React.js.',
    img: img3,
  },
  {
    id: 6,
    title: 'Online Grocery Shopping Project',
    description: 'Final Year Project using HTML, CSS, JavaScript, PHP, and MySQL.',
    img: img4,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="text-black bg-gray-50 dark:bg-gray-950 dark:text-white min-h-screen pt-4 sm:pt-10 w-full px-[10%]">
        <h2 className="text-center font-extrabold text-[24px] sm:text-[32px] 2xl:text-[50px] mb-10 text-blue-600">
          My Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-10 pb-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="w-full sm:w-[45%] md:w-[30%] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow hover:shadow-xl dark:hover:shadow-[0px_5px_15px_aqua] transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Link to={`/project/${project.id}`}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="rounded-t-xl w-full object-contain aspect-square"
                />
              </Link>
              <div className="px-5 py-4">
                <h3 className="text-xl sm:text-2xl 2xl:text-[30px] font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-400 mb-3 text-sm sm:text-base">
                  {project.description}
                </p>
                <Link
                  to={`/project/${project.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
