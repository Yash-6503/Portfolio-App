import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../../assets/projects/swiggy.webp';
import img2 from '../../assets/projects/portfolio.webp';
import img3 from '../../assets/projects/calculator.webp';
import img4 from '../../assets/projects/grocery.webp';
import quizz from '../../assets/projects/quizz.jpg';
import todo from '../../assets/projects/todo.webp';

const allProjects = [
    {
        id: 1,
        title: 'Quizz App Project',
        description:
            'An interactive fullstack Quiz App designed for real-time assessments. Built with Spring Boot and ReactJS, it supports quiz creation, category-based filtering, user and admin roles, and dynamic question handling. Features a modern UI with TailwindCSS and secure backend logic.',
        tech: {
            frontend: 'HTML, CSS, JavaScript, TailwindCSS, ReactJS',
            backend: 'Java, Spring Boot (MVC, Data JPA, REST)',
            database: 'MySQL',
            server: 'Tomcat',
        },
        image: quizz,
        code: 'https://github.com/Yash-6503/Quizz-App-Fullstack-Project',
        live: '',
    },
    {
        id: 2,
        title: 'ToDo-List Project',
        description:
            'A fullstack ToDo-List web application that allows users to manage their daily tasks efficiently. Built with ReactJS and Spring Boot, it supports authentication, CRUD operations, and real-time UI updates. Data is securely stored in MySQL.',
        tech: {
            frontend: 'HTML, CSS, JavaScript, TailwindCSS, ReactJS',
            backend: 'Java, Spring Boot (REST, MVC)',
            database: 'MySQL',
            server: 'Tomcat',
        },
        image: todo,
        code: 'https://github.com/Yash-6503/ToDoList-Fullstack-Project',
        live: 'https://yash-todo-list.netlify.app/',
    },
    {
        id: 3,
        title: 'Swiggy Clone',
        description:
            'A frontend clone of Swiggy using Next.js and TailwindCSS. The project mimics Swiggy’s layout and functionality, including responsive design, routing, and modern UI interactions. Ideal for frontend development practice.',
        tech: {
            frontend: 'HTML, CSS, TailwindCSS, JavaScript, Next.js',
            backend: '-',
            database: '-',
            server: '-',
        },
        image: img1,
        code: 'https://github.com/Yash-6503/Swiggy-Clone',
        live: '',
    },
    {
        id: 4,
        title: 'Portfolio Site',
        description:
            'A professional portfolio website created with Next.js and TailwindCSS. Showcases projects, skills, education, and contact details. Designed with animations, responsive layouts, and clean design aesthetics.',
        tech: {
            frontend: 'HTML, CSS, JavaScript, TailwindCSS and React.js',
            backend: '-',
            database: '-',
            server: '-',
        },
        image: img2,
        code: 'https://github.com/Yash-6503/Portfolio-Project',
        live: 'https://portfolio-yashwalke.netlify.app/',
    },
    {
        id: 5,
        title: 'Calculator',
        description:
            'A responsive calculator app developed using React and TailwindCSS. It performs basic arithmetic operations with a modern user interface and theme switching capability.',
        tech: {
            frontend: 'HTML, CSS, JavaScript, TailwindCSS, ReactJS',
            backend: '-',
            database: '-',
            server: '-',
        },
        image: img3,
        code: 'https://github.com/Yash-6503/Calculator-Project',
        live: 'https://yashcalc.netlify.app/',
    },
    {
        id: 6,
        title: 'Grocery Shopping App',
        description:
            'A final year academic project developed using PHP and MySQL. It includes product browsing, cart functionality, user authentication, and order placement for an online grocery shopping platform.',
        tech: {
            frontend: 'HTML, CSS, JavaScript',
            backend: 'PHP',
            database: 'MySQL',
            server: 'XAMPP/Apache',
        },
        image: img4,
        code: 'https://github.com/Yash-6503/Grocery-Shopping-Project',
        live: '',
    },
];

export default function Project() {
    const { id } = useParams();
    const project = allProjects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <p className="text-center text-red-500 mt-10 text-xl">Project not found</p>;
    }

    return (
        <motion.div
            className="min-h-screen bg-white dark:bg-gray-950 px-6 py-10 text-black dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center font-extrabold text-[24px] sm:text-[32px] 2xl:text-[50px] mb-10 text-blue-600">
                    {project.title}
                </h2>

                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                    {/* Left Side - Image */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-xl shadow-lg w-full object-contain"
                        />
                    </motion.div>

                    {/* Right Side - Text Info */}
                    <motion.div
                        className="w-full lg:w-1/2 space-y-6"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div>
                            <h3 className="text-xl font-bold">Description:</h3>
                            <p className="text-lg leading-relaxed text-gray-400">{project.description}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold">Technologies Used:</h3>
                            <p className="text-lg leading-relaxed text-gray-400">
                                <span className="font-bold">Frontend:</span>&nbsp;{project.tech.frontend}
                            </p>
                            <p className="text-lg leading-relaxed text-gray-400">
                                <span className="font-bold">Backend:</span>&nbsp;{project.tech.backend}
                            </p>
                            <p className="text-lg leading-relaxed text-gray-400">
                                <span className="font-bold">Database:</span>&nbsp;{project.tech.database}
                            </p>
                            <p className="text-lg leading-relaxed text-gray-400">
                                <span className="font-bold">Server:</span>&nbsp;{project.tech.server}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                            >
                                View Source Code
                            </a>

                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                                >
                                    Live Website
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
