"use client";
import SectionHeading from "../../Helper/page";
import { servicesData } from "../../../Data/data";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b bg-white py-20 min-h-[80vh] flex flex-col justify-center"
    >
      <SectionHeading>Services</SectionHeading>

      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {servicesData.map((service) => (
          <Tilt key={service.id} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable glareColor="#ffffff">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.id * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/40 backdrop-blur-lg border border-gray-200 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 rounded-xl p-8 min-h-[280px] h-full text-center flex flex-col items-center"
            >
              {/* Icon */}
              <Image src={service.icon} alt={service.title} width={60} height={60} />

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800 mt-4">{service.title}</h2>

              {/* Description */}
              <p className="text-sm text-gray-700 mt-2">{service.description}</p>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
