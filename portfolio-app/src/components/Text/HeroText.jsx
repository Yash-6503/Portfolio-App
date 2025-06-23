import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroText = () => {
    return (
        <div className=''>
            <h2 className='text-xl font-bold light:text-black dark:text-white '>HELLO!!</h2>
            <h1 className="text-3xl md:text-5xl font-bold text-blue-600"><span className=' text-black dark:text-white'>I am</span> Yash Walke</h1>

            <h2 className="text-lg md:text-2xl font-semibold mt-2 mb-4 text-gray-700 dark:text-gray-300">
                <span className="light:text-black dark:text-white">And I’m a </span>
                <span className="text-blue-500">
                    <Typewriter
                        words={[
                            'Java Full Stack Developer',
                            'Software Developer',
                            'Backend Developer',
                            'Spring Boot | React | DevOps Tools',
                        ]}
                        loop={0} // 0 = infinite loop
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                I’m a passionate developer focused on building efficient, scalable, and user-friendly applications.
                With a strong foundation in Java, Spring Boot, and React, I love bringing ideas to life through code.
            </p>
        </div>
    );
};

export default HeroText;
