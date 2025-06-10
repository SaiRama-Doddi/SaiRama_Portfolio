"use client";

import SectionHeading from "../../Helper/page";
import { aboutInfo } from "../../../Data/data";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    { title: "Frontend Development", color: "bg-blue-700" },
    { title: "Backend Development", color: "bg-purple-700" },
    { title: "Full Stack Development", color: "bg-green-700" },
  ];

  const stats = [
    { img: "/images/customer.png", count: "10+", text: "Happy Clients" },
    { img: "/images/experience.png", count: aboutInfo.experience, text: "Years Experience" },
    { img: "/images/completed.png", count: aboutInfo.project, text: "Projects Completed" },
    { img: "/images/rocket.png", count: aboutInfo.website, text: "Websites Launched" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
     className="pt-10 mt-0 md:mt-[-20px] bg-gradient-to-b bg-white dark:from-[#050709] dark:to-[#0a0e12] text-black dark:text-white"

    >
      <SectionHeading>About Me</SectionHeading>

      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16">
        {/* Left: About Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
            {aboutInfo.title}
          </h1>

          <p className="mt-5 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
            {aboutInfo.description}
          </p>

          <div className="mt-8 space-y-4">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${skill.color}`}>
                  <FaCheck className="text-white text-sm" />
                </div>
                <span className="text-gray-800 dark:text-gray-300 font-medium">{skill.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex gap-6">
            <a
              href={aboutInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm sm:text-base"
            >
              LinkedIn
            </a>
            <a
              href={aboutInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:underline text-sm sm:text-base"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* Right: Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/70 dark:bg-white/10 border border-gray-300 dark:border-gray-700 backdrop-blur-md p-6 rounded-xl text-center shadow-md"
            >
              <Image src={stat.img} alt={stat.text} width={60} height={60} className="mx-auto" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mt-3">{stat.count}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
