"use client";

import BgImage from "@/public/assets/bg-slate.png";
import HeroImg from "@/public/assets/black.png";
import Image from "next/image";
import Hello from "../Navbar/Hello";
import { motion } from "framer-motion";

export default function Hero() {
  const bgImage = {
    backgroundImage: `url(${BgImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main style={bgImage} className="bgImage">
      <section className="min-h-[750px] w-full">
        <div className="container">
          {/* Navbar  section goes here */}
          <Hello />
          {/* Hero content goes here */}{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text content  */}
            <div className="text-lightOrange mt-[100px md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 1,
                  stiffness: 100,
                }}
                className="text-7xl font-bold leading-tight ml-14"
              >
                Black Tumbler
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 1.2,
                  stiffness: 100,
                }}
                className="relative"
              >
                <div className=" relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyle Lovers.</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe quia iste at earum neque ut? Voluptas, impedit
                    numquam, quae dolor beatae distinctio, magni dolorem
                    incidunt ut voluptatem temporibus dolores excepturi.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25 "></div>
              </motion.div>
            </div>
            {/* Hero image section goes here */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.4,
                  stiffness: 100,
                }}
              >
                <Image
                  className="relative z-40 h-[400px] md:h-[700px] img-shadow"
                  src={HeroImg}
                  alt="hero-image"
                />
              </motion.div>
              {/* orange circle  */}
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 1.2,
                  stiffness: 100,
                }}
                className="h-[180px] w-[180px] absolute top-24 
            border-20 -right-16 border-primary rounded-full z-10"
              ></motion.div>

              {/* big text section  */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 0.8,
                  stiffness: 100,
                }}
                className="absolute -top-20 left-[200px] z-[1]"
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Blvck Tumbler
                </h1>
              </motion.div>
            </div>
            {/* third div section  */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 10,
                delay: 1.2,
                stiffness: 100,
              }}
              className="text-lightOrange mt-[100px md:mt-0 p-4 space-y-28"
            >
              <h1 className="opacity-0 text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  damping: 10,
                  delay: 1.2,
                  stiffness: 100,
                }}
                className="relative"
              >
                <div className=" relative z-10 space-y-4">
                  <h1 className="text-2xl">The Design.</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe quia iste at earum neque ut? Voluptas, impedit
                    numquam, quae.
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[190px] bg-darkGray/25 "></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
