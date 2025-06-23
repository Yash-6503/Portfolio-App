import React from 'react';
import { motion } from 'framer-motion';

const courses = [
  {
    title: "Java Fullstack Development",
    description:
      "I have Completed Fullstack Course in Java at Naresh i Technologies, Hyderabad.\nDuration from July-2024 to June-2025",
  },
  {
    title: "WEBSITE DESIGNING",
    description:
      "I have Completed Website Designing Course at TechnoKraft Training Solutions, Nashik (TTS).\nDuration from June-2023 to Aug-2023",
  },
  {
    title: "MERN Stack Web Development",
    description:
      "I have Completed MERN Stack Web Development Course at TechnoKraft Training Solutions, Nashik (TTS).\nDuration from July-2023 to Oct-2023",
  },
  {
    title: "REACT.JS",
    description:
      "I have Completed React.Js Course at TechnoKraft Training Solutions, Nashik.\nDuration from July-2023 to Sept-2023",
  },
  {
    title: "NODE.JS",
    description:
      "I have Completed Node.Js Course at TechnoKraft Training Solutions, Nashik.\nDuration from Sept-2023 to Nov-2023",
  },
  {
    title: "C and C++ Programming",
    description:
      "I have Completed C & C++ Course at TechnoKraft Training Solutions, Nashik.\nDuration from April-2023 to June-2023",
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
      ease: "easeOut",
    },
  }),
};

const Courses = () => {
  return (
    <section className="min-h-screen px-[5%] py-16 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-white">
      <h2 className="text-center font-extrabold text-[25px] sm:text-[32px] 2xl:text-[50px] mb-10 text-blue-600">
        My Courses
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="w-full sm:w-[45%] lg:w-[30%] p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <h5 className="text-xl sm:text-2xl 2xl:text-[30px] font-bold mb-2 text-gray-900 dark:text-white">
              {course.title}
            </h5>
            <p className="text-gray-700 dark:text-gray-400 whitespace-pre-line 2xl:text-[18px]">
              {course.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
