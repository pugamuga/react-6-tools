import React from "react";
import apeGif from "../../assets/apeGif.gif";
import { motion } from "framer-motion";
import closeIcon from "../../assets/google-close.svg";

const WindowForTwo = ({ state }) => {
  return (
    <motion.div
      animate={{
        scale: [0, 1.2, 1],
        opacity: [0, 1],
      }}
      transition={{ delay: 0.1, duration: 0.5, type: "spring" }}
      className="absolute h-[400px] w-[400px] bg-white rounded-xl shadow-2xl flex justify-center items-center"
    >
      <img
        src={closeIcon}
        className="w-4 absolute -right-2 -top-2
         bg-white rounded-full ring-4 ring-sky-200 stroke-cyan-500 hover:w-6 transition-all duration-300  "
        onClick={() => state(false)}
      />
      <div className="">
        <img src={apeGif} className=" mx-auto  rounded-lg" />
        <div>
          <h1 className="text-4xl text-center my-8 font-bold text-sky-800">
            🐵Manki respect🐵
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default WindowForTwo;
