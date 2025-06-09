"use client";

import { BaseInfo } from "../../../Data/data";
import { FaDownload } from "react-icons/fa6";
import Image from "next/image";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="w-full pt-[10vh] min-h-screen bg-gradient-to-b bg-white dark:from-[#0a0e12] dark:via-[#0f151c] dark:to-[#151e2b] overflow-hidden relative text-black dark:text-white mt-5">
      <div className="w-[90%] max-w-7xl mx-auto h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          {/* === Text Content === */}
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-4"
            >
              Hello, I am {BaseInfo.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-blue-800 dark:text-blue-400"
            >
              {BaseInfo.position}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-5 text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed"
            >
              {BaseInfo.description}
            </motion.p>

            <motion.a
              href="/Sai_Rama_Resume.pdf"
              download
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm sm:text-base rounded-lg shadow-md transition-all"
            >
              <span>Download CV</span>
              <FaDownload className="text-base" />
            </motion.a>
          </div>

          {/* === Image Content === */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto relative w-fit rounded-[2rem] overflow-hidden  dark:border-blue-700  dark:bg-white/10 backdrop-blur-sm"
          >
            <Image
              src={BaseInfo.profilePic}
              alt="Profile"
              width={360}
              height={360}
            className="rounded-full object-cover w-[280px] h-[280px] sm:w-[320px] sm:h-[320px]"

              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;
