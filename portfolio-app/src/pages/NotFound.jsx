import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 flex flex-col justify-center items-center text-center px-4">
            <motion.h1
                className="text-[100px] font-extrabold text-blue-600 drop-shadow-lg"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
            >
                404
            </motion.h1>

            <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                Page Not Found
            </motion.h2>

            <motion.p
                className="mt-4 max-w-xl text-gray-500 dark:text-gray-400 text-base sm:text-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                Sorry, the page you’re looking for doesn’t exist or has been moved. But don’t worry, you can still explore more of my work!
            </motion.p>

            <motion.div
                className="mt-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
                >
                    Go to Home
                </Link>
            </motion.div>
        </div>
    );
}
