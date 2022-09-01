import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MinusIcon = ({ onClickInviteId, id }) => {
  return (
    <motion.svg
      onClick={() => onClickInviteId(id)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-12 h-12 stroke-[1.5px]  hover:stroke-[2px] transition-all duration-300 stroke-slate-400 hover:stroke-rose-600"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </motion.svg>
  );
};

export default MinusIcon;
