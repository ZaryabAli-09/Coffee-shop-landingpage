"use client";
import WorldMapImg from "@/public/assets/world-map.png";
import Image from "next/image";
import { motion } from "framer-motion";
export default function WhereToBuy() {
  return (
    <div className="px-10 md:px-20  py-52 ">
      <div className="flex items-center justify-between flex-col md:flex-row ">
        {/* form section  */}
        <div>
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="text-4xl font-bold text-darkGray "
            >
              Buy our products from anywhere
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder="Name"
                className="input-style w-full "
              />
              <input
                type="email"
                placeholder="email"
                className="input-style w-full "
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
              }}
              className="flex items-center gap-4"
            >
              <input
                type="text"
                placeholder="Country"
                className="input-style w-full lg:w-[150px]"
              />
              <input
                type="email"
                placeholder="Zip Code"
                className="input-style w-full "
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.8,
              }}
              className="primary-btn w-full"
            >
              Order Now
            </motion.button>
          </div>
        </div>

        {/* world map section  */}
        <div className="col-span-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1,
            }}
          >
            <Image
              src={WorldMapImg}
              alt="world map"
              className="w-full sm:w-[500px] mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
