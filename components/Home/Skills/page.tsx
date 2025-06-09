"use client";

import SectionHeading from "../../Helper/page";
import { skillsData } from "../../../Data/data";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="pt-16 pb-20 bg-gradient-to-br bg-white  min-h-screen">
      <SectionHeading>My Skills</SectionHeading>

      {/* Grid layout */}
      <div className="w-[90%] mx-auto mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="bg-white/40 backdrop-blur-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer text-center rounded-xl flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Skill Icon */}
            <Image
              src={skill.image}
              width={64}
              height={64}
              alt={skill.title}
              className="mx-auto mb-4"
            />

            {/* Title */}
            <h2 className="text-lg font-semibold text-gray-800">{skill.title}</h2>

            {/* Progress bar */}
            <div className="w-full mt-4">
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                  style={{ width: skill.percent }}
                ></div>
              </div>
              <p className="text-sm mt-1 text-gray-600">{skill.percent}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
