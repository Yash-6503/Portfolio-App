import React from 'react';
import { motion } from 'framer-motion';

// Import skill icons
import Java from '../assets/skills/java.png';
import Spring from '../assets/skills/spring.png';
import SpringBoot from '../assets/skills/springboot.png';
import Hibernate from '../assets/skills/hibernate.png';
import MySQL from '../assets/skills/mysql.png';
import Oracle from '../assets/skills/oracle.png';
import HTML from '../assets/skills/html.webp';
import CSS from '../assets/skills/css.webp';
import JavaScript from '../assets/skills/javascript.png';
import ReactLogo from '../assets/skills/react.png';
import Tailwind from '../assets/skills/tailwind.png';
import Git from '../assets/skills/git.png';
import GitHub from '../assets/skills/github.webp';
import Postman from '../assets/skills/postman.png';
import Docker from '../assets/skills/docker.png';
import Jenkins from '../assets/skills/jenkins.png';
import Maven from '../assets/skills/maven.png';
import Mongo from '../assets/skills/mongo.webp';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const barVariants = {
  hidden: { width: 0 },
  visible: (custom) => ({
    width: custom,
    transition: { duration: 1.5, ease: 'easeOut' },
  }),
};

const Skills = () => {
  return (
    <section className="min-h-screen px-6 md:px-20 py-16 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-300">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-600 text-center">Skills</h2>
        <p className="mb-8 text-lg text-center md:px-12">
          As a Java Full Stack Developer, I have hands-on experience in building scalable web applications
          using both frontend and backend technologies. I specialize in Java backend frameworks and modern frontend tools.
        </p>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12"
          variants={fadeInUp}
        >
          <SkillCard name="Java" icon={Java} />
          <SkillCard name="Spring" icon={Spring} />
          <SkillCard name="Spring Boot" icon={SpringBoot} />
          <SkillCard name="Hibernate" icon={Hibernate} />
          <SkillCard name="MySQL" icon={MySQL} />
          <SkillCard name="Oracle" icon={Oracle} />
          <SkillCard name="MongoDB" icon={Mongo} />
          <SkillCard name="HTML" icon={HTML} />
          <SkillCard name="CSS" icon={CSS} />
          <SkillCard name="JavaScript" icon={JavaScript} />
          <SkillCard name="React" icon={ReactLogo} />
          <SkillCard name="TailwindCSS" icon={Tailwind} />
          <SkillCard name="Git" icon={Git} />
          <SkillCard name="GitHub" icon={GitHub} />
          <SkillCard name="Postman" icon={Postman} />
          <SkillCard name="Docker" icon={Docker} />
          <SkillCard name="Jenkins" icon={Jenkins} />
          <SkillCard name="Maven" icon={Maven} />
        </motion.div>

        {/* Skill Bars (Animated) */}
        <h2 className="text-4xl font-bold mb-4 text-blue-600">Skills Overview</h2>
        <div className="space-y-6">
          <SkillBar label="Frontend Development" percent="65%" color="bg-blue-500" />
          <SkillBar label="Backend Development" percent="75%" color="bg-green-500" />
          <SkillBar label="DevOps & Tools" percent="35%" color="bg-yellow-500" />
        </div>
      </motion.div>
    </section>
  );
};

// SkillCard Component
const SkillCard = ({ name, icon }) => (
  <motion.div
    className="  flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 group"
    whileHover={{ scale: 1.05 }}
  >
    <div className="relative w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 p-[2px] group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
        <img
          src={icon}
          alt={name}
          className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
        />
      </div>
    </div>
    <span className="mt-3 text-sm font-medium text-center">{name}</span>
  </motion.div>
);

// SkillBar Component
const SkillBar = ({ label, percent, color }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
    <h3 className="text-xl font-semibold mb-2">{label} – {percent}</h3>
    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
      <motion.div
        className={`h-4 rounded-full ${color}`}
        variants={barVariants}
        custom={percent}
      ></motion.div>
    </div>
  </motion.div>
);

export default Skills;
