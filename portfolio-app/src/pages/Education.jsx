import React from "react";
import { motion } from "framer-motion";

const educations = [
    {
        title: "Graduation",
        description:
            "I have completed my B.Sc. in Computer Science at K.T.H.M College, Nashik with 7.8 CGPA. Duration: June 2021 to May 2024.",
    },
    {
        title: "12th HSC",
        description:
            "I have completed my 12th HSC in Science [P.C.M.B] from K.T.H.M College, Nashik with 82%. Duration: June 2019 to March 2021.",
    },
    {
        title: "10th SSC",
        description:
            "I have completed my 10th SSC from Gautam Public School, Kolpewadi with 82%. Duration: June 2009 to March 2019.",
    },
];

const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function Education() {
    return (
        <>
            <div className="text-black px-6 sm:px-[10%] md:h-screen bg-gray-100 dark:bg-gray-950 dark:text-white pt-10 pb-10">
                <h2 className="text-center font-extrabold text-[24px] sm:text-[32px] 2xl:text-[50px] mb-10 text-blue-600">
                    My Education
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {educations.map((edu, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="w-full sm:w-[80%] md:w-[30%] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 ease-in-out hover:scale-[1.03]"
                        >
                            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
                                {edu.title}
                            </h3>
                            <p className="text-[15px] sm:text-[16px] text-center text-gray-700 dark:text-gray-300 leading-relaxed">
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
