"use client";

import Image from "next/image";
import { projectData } from "../../../Data/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionHeading from "../../Helper/page";

const ProjectsPage = () => {
  const [imageIndices, setImageIndices] = useState(
    () =>
      Object.fromEntries(
        projectData.map((project) => [project.id, 0])
      )
  );

  const handleNext = (id: number, total: number) => {
    setImageIndices((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % total,
    }));
  };

  const handlePrev = (id: number, total: number) => {
    setImageIndices((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + total) % total,
    }));
  };

  return (
    <section className="min-h-screen bg-white dark:bg-[#0b0f17] text-black dark:text-white py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <SectionHeading>My Projects</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
          {projectData.map((project) => {
            const currentIndex = imageIndices[project.id] || 0;
            const totalImages = project.images.length;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 dark:bg-[#1a1f29] rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative w-full h-60 overflow-hidden">
                  <Image
                    src={project.images[currentIndex]}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-300 ease-in-out"
                  />
                  <button
                    onClick={() => handlePrev(project.id, totalImages)}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => handleNext(project.id, totalImages)}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
                  >
                    <FaChevronRight />
                  </button>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 text-sm">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-blue-700 hover:bg-blue-900 text-white rounded-lg transition"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
