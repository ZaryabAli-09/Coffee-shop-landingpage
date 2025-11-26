import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
export default function Hello({
  isSideBarOpen,
  setIsSidebarOpen,
}: {
  isSideBarOpen: boolean;
  setIsSidebarOpen: boolean | any;
}) {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className=" flex items-center justify-between">
          {/* logo section  */}
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              delay: 0.2,
              stiffness: 100,
            }}
            className="text-2xl font-semibold uppercase"
          >
            <span className="text-primary">Coders {""}</span>
            Coffee.
          </motion.h1>

          {/* menu  */}
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              delay: 1.2,
              stiffness: 100,
            }}
            onClick={() => setIsSidebarOpen(!isSideBarOpen)}
          >
            <GiHamburgerMenu className="text-3xl cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
