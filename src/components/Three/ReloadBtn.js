import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReloadBtn = () => {
  return (
    <div className="w-screen h-screen relative">
      <button
        className="text-white font-extrabold h-[100px] w-[100px] bg-white rounded-lg absolute right-0 
      left-0 mr-auto ml-auto top-0 bottom-0 mb-auto mt-auto  active:grayscale-0 hover:grayscale-0 grayscale bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-[10px]  shadow-md hover:shadow-lg active:shadow-none
      hover:scale-110 active:scale-90 transition-all duration-100 flex justify-center items-center"
      >
        <motion.svg
          whileHover={{
            rotate:90,
            transition: { duration: 1 },
          }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </motion.svg>
      </button>
    </div>
  );
};

export default ReloadBtn;
