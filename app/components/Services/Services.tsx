"use client";
import type { Variants } from "framer-motion";

import { motion } from "framer-motion";
import CoffeeImg1 from "@/public/assets/coffee/coffee1.png";
import CoffeeImg3 from "@/public/assets/coffee/coffee3.png";
import Image from "next/image";
const services = [
  {
    id: 1,
    title: "Coffee 1",
    img: CoffeeImg3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 2,
    title: "Coffee 2",
    img: CoffeeImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 3,
    title: "Coffee 3",
    img: CoffeeImg3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 150,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      staggerChildren: 0.4,
    },
  },
};

export default function Services() {
  return (
    <div className="container my-16  space-y-4 ">
      {/* header section  */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 0.2,
            stiffness: 150,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty Coffee</span>
        </motion.h1>{" "}
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 0.6,
            stiffness: 150,
          }}
          className="text-lightGray"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          voluptatibus sapiente illo nostrum facere totam sed unde dolores at
          modi, tempora laborum pariatur ipsam cum eius. Eos provident a nisi?
        </motion.p>
      </div>

      {/* card section  */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            variants={cardVariants}
            key={service.id}
            className="text-center p-4 space-y-6 "
          >
            <Image
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer"
              src={service.img}
              alt={service.title}
            />

            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <p className="text-darkGray ">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
