"use client";

import { motion, type Variants } from "framer-motion";
import AppStoreImg from "@/public/assets/website/app_store.png";
import PlayStoreImg from "@/public/assets/website/play_store.png";
import BgPng from "@/public/assets/website/coffee-footer.jpg";
import Image from "next/image";

const backgroundStyle = {
  backgroundImage: `url(${BgPng})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  //   height: "100%",
  //   width: "100%",
};

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AppStore = () => {
  return (
    <div className="py-14 border" style={backgroundStyle}>
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          {/* Animated Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible" // <-- Animate directly using string
            className="space-y-6 max-w-xl mx-auto"
          >
            {/* Text */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl text-center sm:text-left sm:text-4xl font-semibold text-white/90 pl-3"
            >
              Coffee Cafe is available for Android and IOS
            </motion.h1>

            {/* App Store & Play Store Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center sm:justify-start items-center gap-4"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={PlayStoreImg}
                  alt="Play store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={AppStoreImg}
                  alt="App store"
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Empty Column */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
