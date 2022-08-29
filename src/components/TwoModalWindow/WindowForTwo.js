import React from "react";
import apeGif from "../../assets/apeGif.gif";
import { motion, AnimatePresence } from "framer-motion";
import closeIcon from "../../assets/google-close.svg";
import CloseIcon from "./CloseIcon";

const WindowForTwo = ({ state }) => {
  return (
    <motion.div
      key="manki"
      initial={{ scale: 0, opacity: 0, y: "0", rotate: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      exit={{ scale: 0, opacity: 0, y: "0", rotate: 0 }}
      transition={{ delay: 0.1, duration: 1, type: "spring" }}
      className="absolute h-[400px] w-[400px] bg-white rounded-xl shadow-2xl flex justify-center items-center"
    >
      <div className=" absolute -right-4 -top-4 bg-white p-1 rounded-full ring-4 z-20 ring-slate-900 shadow-xl">
        <CloseIcon />
      </div>
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
