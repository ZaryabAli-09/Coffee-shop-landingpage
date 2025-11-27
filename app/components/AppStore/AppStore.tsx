"use client";

import { motion, type Variants } from "framer-motion";
import AppStoreImg from "@/public/assets/website/app_store.png";
import PlayStoreImg from "@/public/assets/website/play_store.png";
import BgPng from "@/public/assets/website/banner.jpg";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AppStore = () => {
  return (
    <div className="relative my-16 m-5 md:m-10 overflow-hidden rounded-xl">
      {/* Background Image */}
      <div
        className="w-full md:p-20  rounded-xl h-[350px] sm:h-[400px] md:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${BgPng.src})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Right Content Section */}
        <div className="absolute inset-0 right-10 flex justify-end items-center px-6 sm:px-10 md:px-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="text-right space-y-6 max-w-lg"
          >
            {/* Text Title */}
            <motion.h1
              variants={itemVariants}
              className=" text-xl font-bold md:text-4xl md:font-semibold text-primary eading-snug"
            >
              Caffio is now available on Android & iOS
            </motion.h1>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-end gap-4 flex-wrap"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={PlayStoreImg}
                  alt="Play Store"
                  className="w-[150px] md:w-[200px]"
                />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={AppStoreImg}
                  alt="App Store"
                  className="w-[150px] md:w-[200px]"
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
