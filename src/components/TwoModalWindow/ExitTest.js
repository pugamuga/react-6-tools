import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExitTest = () => {
  const box = (
    <AnimatePresence>
      <motion.div
        key="index"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className=" bg-emerald-200 h-[500px] w-[500px] rounded-3xl "
      ></motion.div>
    </AnimatePresence>
  );

  const [open, setOpen] = useState(false);

  return (
    <div className="h-screen bg-slate-700 flex justify-center items-center">
      <button
        onClick={() => setOpen(!open)}
        className="bg-white p-5 rounded-full active:scale-90 absolute z-10 shadow-xl"
      >
        open
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 1 }}
            className=" bg-emerald-200 h-[500px] w-[500px] rounded-3xl "
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExitTest;
