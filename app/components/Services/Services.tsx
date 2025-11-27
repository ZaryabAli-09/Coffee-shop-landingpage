"use client";
import type { Variants } from "framer-motion";

import { motion } from "framer-motion";
import CoffeeImg1 from "@/public/assets/coffee/coffee1.png";
import CoffeeImg3 from "@/public/assets/coffee/coffee3.png";
import Image from "next/image";
const services = [
  {
    id: 1,
    title: "Espresso Roast",
    img: CoffeeImg3,
    description:
      "Bold, rich, and full-bodied with deep caramel notes — perfect for espresso lovers.",
  },
  {
    id: 2,
    title: "Caramel Macchiato",
    img: CoffeeImg1,
    description:
      "Smooth espresso with sweet caramel and creamy milk for a perfectly balanced treat.",
  },
  {
    id: 3,
    title: "Mocha Delight",
    img: CoffeeImg3,
    description:
      "A rich mix of espresso and chocolate, finished with creamy milk for a sweet indulgence.",
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
    <div className="px-10 md:px-20 my-16  space-y-4 ">
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
          className="text-3xl font-bold text-lightGray "
        >
          ☕ Brewed Daily, <span className="text-primary">Served Warm</span>
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
          Experience the aroma and flavor of freshly brewed coffee made from the
          finest beans.
        </motion.p>
      </div>

      {/* card section  */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8"
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
