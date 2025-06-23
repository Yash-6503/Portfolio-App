import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import ProfilePic from '../assets/skills/dev.png'; // Use your actual image
import HeroText from '../components/Text/HeroText';

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 md:px-20 py-16 bg-gray-50 dark:bg-gray-950 text-gray-800 ">
            <motion.div
                className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                {/* Right: Profile Image */}
                <div className=" md:hidden flex justify-center md:justify-center">
                    <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700
">
                        <img
                            src={ProfilePic}
                            alt="Profile"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Left: Text Content */}
                <div className="text-center md:text-left">
                    <HeroText/>

                    {/* Social Media Icons */}
                    <div className="flex justify-center md:justify-start gap-6 mt-4 text-3xl text-blue-600 dark:text-blue-400">
                        <a href="https://github.com/Yash-6503" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-white transition">
                            <FaGithub />
                        </a>
                        <a href="https://linkedin.com/in/yashwalke" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-white transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://wa.link/ud3opd" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-white transition">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/_yash.dev_/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 dark:hover:text-white transition">
                            <FaInstagram />
                        </a>
                        <a href="mailto:yashwalke6503@email.com" className="hover:text-gray-700 dark:hover:text-white transition">
                            <FaEnvelope />
                        </a>
                    </div>

                    {/* Buttons */} 
                    <div className="mt-8 flex justify-center md:justify-start gap-4">
                        <a
                            href="/YashWalke_Resume.pdf"
                            download="Resume.pdf"  // File will be downloaded with this name
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Download CV
                        </a>
                        <a
                            className="px-6 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                            href="/contact"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="hidden md:inline-flex md:justify-end">
                    <div className="w-40 h-40 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700
">
                        <img
                            src={ProfilePic}
                            alt="Profile"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Home;
